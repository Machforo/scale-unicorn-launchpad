import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { searchWebsiteData } from "@/utils/websiteData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm here to help you learn more about Idea2Unicorn. What would you like to know about our workshops and growth strategies?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");


  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { type: "user", message }]);
    setInputMessage("");

    // Get intelligent response from website data
    setTimeout(() => {
      const botResponse = searchWebsiteData(message);
      setMessages(prev => [...prev, { type: "bot", message: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-elegant flex items-center justify-center transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-[calc(100vw-3rem)] sm:w-96 h-96 bg-card border border-border rounded-lg shadow-elegant flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Idea2Unicorn Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2 items-end">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-0"
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                size="sm"
                className="px-3 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;