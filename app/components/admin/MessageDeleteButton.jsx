import React from 'react';

export default function MessageDeleteButton({ messageId, onDelete }) {
  const handleDelete = async () => {
    // Send a request to the server to delete the message
    const response = await fetch('/api/delete', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'deleteMessage', messageId }),
    });

    if (response.ok) {
      onDelete(messageId);
    } else {
      console.error('Failed to delete message');
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      Delete
    </button>
  );
}