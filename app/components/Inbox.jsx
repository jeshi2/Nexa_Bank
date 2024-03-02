import React, { useState, useEffect, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const auth = getAuth();
        const firebaseUser = auth.currentUser;
        if (!firebaseUser) {
          setError('User is not signed in.');
          return;
        }
        const userUid = firebaseUser.uid;

        const db = getDatabase();
        const userMessagesRef = ref(db, `users/${userUid}/messages`);

        // Listen for changes to the user's messages in the database
        onValue(userMessagesRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert the object of messages into an array
            const messageArray = Object.values(data);
            setMessages(messageArray);
          } else {
            setMessages([]);
          }
        });
      } catch (error) {
        console.error(error.message);
        setError('Failed to fetch messages.');
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') {
      setError('Message cannot be empty.');
      return;
    }

    try {
      const auth = getAuth();
      const firebaseUser = auth.currentUser;
      if (!firebaseUser) {
        setError('User is not signed in.');
        return;
      }
      const userUid = firebaseUser.uid;

      const db = getDatabase();
      const userMessagesRef = ref(db, `users/${userUid}/messages`);

      // Push the new message to the database
      await push(userMessagesRef, {
        text: newMessage,
        timestamp: Date.now(),
        senderUid: userUid,
      });

      // Clear the input field and error message
      setNewMessage('');
      setError('');
    } catch (error) {
      console.error(error.message);
      setError('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h2 className="text-center text-xl font-semibold mb-4">Contact Help Center</h2>
      <div className="messages-container w-full max-h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message flex ${message.senderUid === getAuth().currentUser.uid ? 'justify-end' : 'justify-start'
              }`}
          >
            <div
              className={`message-bubble bg-gray-100 border border-gray-300 rounded-lg p-2 mb-2 ${message.senderUid === getAuth().currentUser.uid ? 'self-message' : 'other-message'
                }`}
            >
              <p>{message.text}</p>
              <p className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-form w-full max-w-lg flex flex-col items-center fixed bottom-0 mb-4">
        <div className="flex w-full">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="message-input w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-4 mr-2"
          />
          <button type="submit" className="send-button bg-lime-400 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-zinc-800">
            Send
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Inbox;
