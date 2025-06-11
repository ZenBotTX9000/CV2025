'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
  Loader2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatbotProps {
  isDark: boolean;
}

export default function Chatbot({ isDark }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm here to help you learn about Ryan St Dare's professional background and experience. What would you like to know about Ryan's career?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl ${
          isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
        } text-white hover:scale-110 active:scale-95`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              className={`relative w-full max-w-md h-[600px] rounded-2xl shadow-2xl ${
                isDark ? 'bg-dark-gradient' : 'bg-light-gradient'
              } flex flex-col overflow-hidden`}
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Header */}
              <div className={`p-4 border-b ${
                isDark ? 'border-gray-600 bg-light-gradient' : 'border-gray-300 bg-dark-gradient'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-beige-gradient">
                      <Bot size={20} className="text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ryan&apos;s AI Assistant</h3>
                      <p className="text-sm opacity-75">Ask about Ryan&apos;s career</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-beige-gradient hover:bg-opacity-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`p-2 rounded-full ${
                        message.role === 'user'
                          ? 'bg-beige-gradient'
                          : isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
                      }`}>
                        {message.role === 'user' ? (
                          <User size={16} className="text-gray-700" />
                        ) : (
                          <Bot size={16} className={isDark ? 'text-gray-700' : 'text-white'} />
                        )}
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-beige-gradient text-gray-700'
                          : isDark
                            ? 'bg-light-gradient text-gray-700'
                            : 'bg-dark-gradient text-white'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <p className="text-xs opacity-60 mt-1">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start space-x-2">
                      <div className={`p-2 rounded-full ${
                        isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
                      }`}>
                        <Bot size={16} className={isDark ? 'text-gray-700' : 'text-white'} />
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        isDark ? 'bg-light-gradient text-gray-700' : 'bg-dark-gradient text-white'
                      }`}>
                        <Loader2 size={16} className="animate-spin" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className={`p-4 border-t ${
                isDark ? 'border-gray-600' : 'border-gray-300'
              }`}>
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Ryan&apos;s experience..."
                    className={`flex-1 p-3 rounded-xl border ${
                      isDark
                        ? 'bg-light-gradient border-gray-600 text-gray-700'
                        : 'bg-dark-gradient border-gray-300 text-white'
                    } focus:outline-none focus:ring-2 focus:ring-beige-gradient focus:border-transparent`}
                    disabled={isLoading}
                  />
                  <motion.button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className={`p-3 rounded-xl bg-beige-gradient text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
