import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, ChevronDown } from 'lucide-react';
import "../CSS/ChatBox.css"

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What type of websites do you develop?",
      subOptions: [
        {
          id: 1.1,
          question: "Business Websites",
          answer: "We create professional business websites with modern designs, responsive layouts, and SEO optimization to help your business establish a strong online presence."
        },
        {
          id: 1.2,
          question: "E-commerce Solutions",
          answer: "Our team builds custom e-commerce platforms with secure payment gateways, inventory management, and user-friendly shopping experiences."
        }
      ]
    },
    {
      id: 2,
      question: "What technologies do you use?",
      subOptions: [
        {
          id: 2.1,
          question: "Frontend Development",
          answer: "We use modern frameworks like React, Angular, or Vue.js, combined with HTML5, CSS3, and JavaScript to create interactive and responsive user interfaces."
        },
        {
          id: 2.2,
          question: "Backend Development",
          answer: "Our backend solutions utilize Node.js, Python, PHP, or .NET, with robust database management using MySQL, MongoDB, or PostgreSQL."
        }
      ]
    },
    {
      id: 3,
      question: "How long does website development take?",
      subOptions: [
        {
          id: 3.1,
          question: "Simple Websites",
          answer: "Basic business websites typically take 2-4 weeks, including design, development, and revisions based on your feedback."
        },
        {
          id: 3.2,
          question: "Complex Projects",
          answer: "E-commerce sites or custom web applications may take 8-12 weeks depending on features and complexity of requirements."
        }
      ]
    },
    {
      id: 4,
      question: "Do you provide website maintenance?",
      subOptions: [
        {
          id: 4.1,
          question: "Regular Maintenance",
          answer: "We offer monthly maintenance packages including updates, security patches, backups, and performance optimization to keep your website running smoothly."
        },
        {
          id: 4.2,
          question: "Support Services",
          answer: "Our team provides technical support, content updates, and feature additions to help your website grow with your business needs."
        }
      ]
    },
    {
      id: 5,
      question: "What about SEO and hosting?",
      subOptions: [
        {
          id: 5.1,
          question: "SEO Services",
          answer: "We implement SEO best practices, optimize content, improve site speed, and ensure mobile responsiveness to help your website rank better in search results."
        },
        {
          id: 5.2,
          question: "Hosting Solutions",
          answer: "We provide reliable hosting solutions with high uptime, regular backups, SSL certificates, and CDN integration for optimal website performance."
        }
      ]
    }
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
    setSelectedSubOption(null);
  };

  const handleSubOptionClick = (id) => {
    setSelectedSubOption(selectedSubOption === id ? null : id);
  };

  return (
    <div className="chat-container">
      {/* Chat Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button"
      >
        {isOpen ? (
          <X />
        ) : (
          <MessageCircle />
        )}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="chatbox">
          {/* Header */}
          <div className="chat-header">
            <h2 className="header-title">Web Development Services</h2>
            <p className="header-subtitle">How can we help build your web presence?</p>
          </div>

          {/* Chat Content */}
          <div className="chat-content">
            <div className="question-list">
              {faqData.map((item) => (
                <div key={item.id} className="question-item">
                  <button
                    className="question-button"
                    onClick={() => handleQuestionClick(item.id)}
                  >
                    <span>{item.question}</span>
                    {selectedQuestion === item.id ? (
                      <ChevronDown className="chevron-icon" />
                    ) : (
                      <ChevronRight className="chevron-icon" />
                    )}
                  </button>

                  {selectedQuestion === item.id && (
                    <div className="sub-options">
                      {item.subOptions.map((subOption) => (
                        <div key={subOption.id}>
                          <button
                            className="sub-option-button"
                            onClick={() => handleSubOptionClick(subOption.id)}
                          >
                            <span>{subOption.question}</span>
                            {selectedSubOption === subOption.id ? (
                              <ChevronDown className="sub-option-icon" />
                            ) : (
                              <ChevronRight className="sub-option-icon" />
                            )}
                          </button>

                          {selectedSubOption === subOption.id && (
                            <div className="sub-option-content">
                              {subOption.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="chat-footer">
            Want to discuss your project? Contact our development team
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;