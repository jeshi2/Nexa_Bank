import React, { useState, useEffect, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { UserCircleIcon } from '@heroicons/react/outline';

const AdminInbox = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
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
        const fetchUsers = async () => {
            try {
                const db = getDatabase();
                const usersRef = ref(db, 'users');

                // Listen for changes to the list of users
                onValue(usersRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const userList = Object.entries(data).map(([uid, userData]) => ({
                            uid,
                            email: userData.email
                        }));
                        setUsers(userList);
                    } else {
                        setUsers([]);
                    }
                });
            } catch (error) {
                console.error(error.message);
                setError('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, []);

    const fetchMessages = async () => {
        try {
            if (!selectedUser) return;
            const db = getDatabase();
            const senderMessagesRef = ref(db, `users/${selectedUser.uid}/messages`);

            // Listen for changes to the selected user's messages
            onValue(senderMessagesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
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
    useEffect(() => {
        fetchMessages();
    }, [selectedUser]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') {
            setError('Message cannot be empty.');
            return;
        }

        try {
            const auth = getAuth();
            const adminUid = auth.currentUser.uid;

            const db = getDatabase();
            const userMessagesRef = ref(db, `users/${selectedUser.uid}/messages`);

            // Push the new message to the selected user's messages
            await push(userMessagesRef, {
                text: newMessage,
                timestamp: Date.now(),
                senderUid: adminUid,
            });

            setNewMessage('');
            setError('');
        } catch (error) {
            console.error(error.message);
            setError('Failed to send message.');
        }
    };


    return (
        <div className="flex flex-col items-center w-full h-screen">
            <h1 className="text-3xl font-bold mt-4 mb-4">User Helpdesk</h1>
            <div className="users-list w-full max-h-80 overflow-y-auto rounded-lg p-4 mb-4">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className={`user flex items-center py-2  px-4 rounded-md cursor-pointer ${selectedUser && selectedUser.uid === user.uid ? 'selected' : ''}`}
                        onClick={() => setSelectedUser(user)}
                    >
                        <UserCircleIcon className="h-6 w-6 mr-2 " />
                        <p className="text-base ">Client: {user.email}</p>
                    </div>
                ))}
            </div>
            <div className="messages-container w-full max-h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4">
                {selectedUser && (
                    <>
                        <div className="flex text-black-500 items-center mb-2">
                            <UserCircleIcon className="h-6 w-6 mr-2" />
                            <h2 className="inline-block text-lg ">{selectedUser.email}</h2>
                        </div>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message flex ${message.senderUid === selectedUser.uid ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                <div
                                    className={`message-bubble bg-green-300 border shadow border-gray-300 rounded-lg p-2 mb-2 ${message.senderUid === selectedUser.uid ? 'self-message' : 'other-message'
                                        }`}
                                >
                                    <p>{message.text}</p>
                                    <p className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            {selectedUser && (
                <form onSubmit={sendMessage} className="message-form w-full max-w-lg flex flex-col items-center fixed bottom-0 mb-4">
                    <div className="flex w-full">
                        <div className="relative w-full">
                            <textarea
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="message-input w-full  border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-4"
                            />
                            <button type="submit" className="absolute right-3 bottom-8 bg-lime-400 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-zinc-800 ">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default AdminInbox;
