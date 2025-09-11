import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm here to help you learn more about Be A Unicorn. What would you like to know about our workshops and growth strategies?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    "What workshops do you offer?",
    "How can I apply for incubation?",
    "Tell me about growth strategies",
    "What are the success rates?",
    "How much do workshops cost?"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { type: "user", message }]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thank you for your question! Our team will get back to you shortly with detailed information.";
      
      if (message.toLowerCase().includes("workshop")) {
        botResponse = "We offer 5 specialized workshops including Dream Life Workshop, Crossing the Chasm Strategy, 15X Growth methodology, Real Estate Growth, and Unicorn Strategy. Each is led by expert facilitators with proven track records.";
      } else if (message.toLowerCase().includes("apply") || message.toLowerCase().includes("incubation")) {
        botResponse = "To apply for our incubation program, please fill out our contact form or email us at hello@beaunicorn.com. We'll schedule a consultation call to discuss your startup's needs.";
      } else if (message.toLowerCase().includes("growth") || message.toLowerCase().includes("strategy")) {
        botResponse = "Our growth strategies focus on scaling without equity dilution through franchise models, channel partnerships, and India-specific market penetration tactics. We've helped 500+ startups achieve 15x growth.";
      } else if (message.toLowerCase().includes("success") || message.toLowerCase().includes("rate")) {
        botResponse = "We have a 93% success rate with our Dream Life Workshop participants achieving clarity about their direction. Overall, our startups see an average 15x growth within 24 months.";
      } else if (message.toLowerCase().includes("cost") || message.toLowerCase().includes("price")) {
        botResponse = "Workshop pricing varies by program. Please contact us for detailed pricing information and early bird discounts. We also offer group rates and scholarship opportunities.";
      }

      setMessages(prev => [...prev, { type: "bot", message: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-elegant flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-destructive hover:bg-destructive/90" : "btn-hero animate-glow"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-96 bg-card border border-border rounded-2xl shadow-elegant animate-slide-in-right">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Be A Unicorn Assistant</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="flex flex-col h-64 p-4 overflow-y-auto space-y-3">
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
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                size="sm"
                className="px-3"
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