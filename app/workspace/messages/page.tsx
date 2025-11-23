'use client';

import { useState } from 'react';
import MessageFeed from '../../components/MessageFeed';
import { messages, Message } from '../../lib/fakeData';

export default function MessagesPage() {
  const [messageList, setMessageList] = useState<Message[]>(messages);

  const handleSendMessage = (body: string) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      author: 'You',
      body,
      timestamp: new Date().toISOString(),
    };
    setMessageList([...messageList, newMessage]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Messages</h1>
      <div className="bg-white border rounded-lg p-6 h-[calc(100vh-250px)]">
        <MessageFeed messages={messageList} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

