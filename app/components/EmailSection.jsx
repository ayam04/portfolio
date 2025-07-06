"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (response.ok) {
        console.log("Message sent successfully:", result);
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        console.error("Failed to send message:", result);
        setError("Failed to send message. Please try again or contact me directly.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-8 overflow-hidden bg-transparent"
    >
      {/* Editorial decorative elements */}
      <div className="absolute top-20 left-10 w-10 h-10 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-blue-500"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 w-8 h-8 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-pink-500"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Editorial header */}
        <div className="mb-20">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light mb-8 block">
                04 — Contact
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4 leading-[0.8] tracking-tight">
                Let's
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-gray-400 leading-[0.8] tracking-tight">
                Connect
              </h3>
            </div>
            
            {/* Minimal contact info */}
            <div className="md:col-span-4 text-right space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
              <p className="text-gray-900 font-light">ayamullahkhan04@gmail.com</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-4">Location</p>
              <p className="text-gray-900 font-light">New Delhi, India</p>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl">
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Ready to discuss your next project? I'm available for new opportunities and collaborations.
              Let's build something amazing together using cutting-edge AI and web technologies.
            </p>
          </div>
        </div>

        {/* Main content grid - Editorial layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact methods - Editorial style */}
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-8 tracking-wide">
                Schedule a Call
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <Link
                    href="https://calendly.com/ayamk/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 bg-white/60 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">30 Minutes</span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">Quick Chat</h4>
                    <p className="text-gray-600 text-sm font-light">
                      Perfect for initial discussions and project overviews
                    </p>
                  </Link>
                </div>

                <div className="group">
                  <Link
                    href="https://calendly.com/ayamk/60min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 bg-white/60 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">60 Minutes</span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">Project Deep Dive</h4>
                    <p className="text-gray-600 text-sm font-light">
                      Detailed consultation for complex projects and collaborations
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social links - minimal */}
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-8 tracking-wide">
                Connect
              </h3>
              <div className="flex gap-8">
                <Link 
                  href="https://github.com/ayam04" 
                  target="_blank"
                  className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://linkedin.com/in/ayam04" 
                  target="_blank"
                  className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form - Editorial style */}
          <div className="lg:mt-16">
            {emailSubmitted ? (
              <div className="text-center py-16">
                <div className="mb-8">
                  <div className="w-1 h-20 bg-gray-900 mx-auto mb-6"></div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4">Message Sent</h3>
                  <p className="text-gray-600 font-light">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-12 tracking-wide">
                  Send a Message
                </h3>
                
                {error && (
                  <div className="mb-8 p-4 border border-red-200 bg-red-50 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    <div>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 text-gray-900 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-gray-500"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 text-gray-900 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-gray-500"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        id="message"
                        required
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 text-gray-900 text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-gray-500 resize-none"
                        placeholder="Tell me about your project..."
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="border border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-light px-12 py-4 transition-all duration-300 disabled:opacity-50"
                    >
                      <span className="text-sm uppercase tracking-wider">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;