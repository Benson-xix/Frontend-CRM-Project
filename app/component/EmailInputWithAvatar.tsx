import React, { useState } from "react";

const EmailInputWithAvatar: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailList, setEmailList] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && email.trim()) {
      e.preventDefault();
      if (validateEmail(email.trim())) {
        setEmailList([...emailList, email.trim()]);
        setEmail("");
      }
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRemoveEmail = (index: number) => {
    setEmailList(emailList.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setEmailList([]);
    setEmail("");
  };

  return (
    <div className="w-full border rounded-lg shadow-md bg-white">
      <div className="flex items-center flex-wrap gap-2 p-2">
        {emailList.map((email, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 text-gray-800 rounded-full px-3 py-1"
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
              {email.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm">{email}</span>
            <button
              onClick={() => handleRemoveEmail(index)}
              className="text-gray-500 hover:text-red-600 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 focus:outline-none p-2 w-full sm:w-auto"
          placeholder="Add email"
        />
        {emailList.length > 0 && (
          <button
            onClick={handleClearAll}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailInputWithAvatar;
