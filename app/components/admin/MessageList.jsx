import React, { useState, useEffect } from "react";
import MessageDeleteButton from "./MessageDeleteButton";


// Function to generate random colors based on the sender's name
const generateColor = (name) => {
    const colors = [
      "#F44336", // Red
      "#E91E63", // Pink
      "#9C27B0", // Purple
      "#673AB7", // Deep Purple
      "#3F51B5", // Indigo
      "#2196F3", // Blue
      "#03A9F4", // Light Blue
      "#00BCD4", // Cyan
      "#009688", // Teal
      "#4CAF50", // Green
      "#8BC34A", // Light Green
      "#FFC107", // Amber
      "#FF9800", // Orange
      "#FF5722", // Deep Orange
    ];
  
    // Calculate an index based on the sender's name
    const index = name
      .split("")
      .map((char) => char.charCodeAt(0))
      .reduce((acc, charCode) => acc + charCode, 0) % colors.length;
  
    return colors[index];
  };

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Define an asynchronous function to fetch messages from the API
  const fetchMessages = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ type: "retrieveData" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
      } else {
        console.error("Failed to fetch messages");
      }
    } catch (error) {
      console.error("An error occurred while fetching messages", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);


  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

  const handleRefresh = () => {
    fetchMessages();
  };

  const handleDelete = async (messageId) => {
    try {
      // Send a request to the server to delete the message
      const response = await fetch("/api/delete", {
        method: "POST", 
        body: JSON.stringify({ type: "deleteMessage", messageId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // Remove the deleted message from the UI
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message._id !== messageId)
        );
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error("An error occurred while deleting the message", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className=" bg-white p-4 rounded-md shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-black mb-4">Messages</h2>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mb-4"
        >
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
        
        <ul className="overflow-y-auto max-h-[800px] sm:max-h-[600px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[700px]">
            {messages.slice().reverse().map((message) => (
            <li key={message._id} className="mb-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <p className="font-semibold text-red-600 text-sm sm:text-base text-right">{formatDateTime(message.date)}</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center sm:w-12 sm:h-12"
                        style={{ backgroundColor: generateColor(message.fullname) }}
                    >
                      <span className="text-white text-sm font-semibold">
                        {message.fullname[0].toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-blue-600 text-lg sm:text-xl font-semibold">
                        {message.fullname}
                      </p>
                     
                      <p className="text-gray-500 text-sm sm:text-base">{message.email}</p>
                    </div>
                  </div>
                  
                </div>
                <p className="text-gray-700 text-base sm:text-base">{message.message}</p>
                <MessageDeleteButton messageId={message._id} onDelete={handleDelete}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}