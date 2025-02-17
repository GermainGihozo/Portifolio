import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const serviceId = "service_uyyhhg3"; // Replace with your EmailJS Service ID
    const templateId = "template_c2txmv4"; // Replace with your EmailJS Template ID
    const publicKey = "7rYgl24uwNaGRAE24"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div id="contactMe" className="md:w-full w-80 h-full h-fit md:mx-auto mx-5 my-auto">
      <div className="flex flex-col gap-5 justify-center items-center p-2 mb-2">
        <div className="flex mx-auto text-center text-blue-600 font-black lg:text-4xl text-2xl my-4">
          Contact me through here
        </div>
        <div className="flex gap-5 lg:flex-row flex-col mx-auto md:w-10/11 lg:w-full lg:w-full">
          <div className="flex flex-col font-bold justify-center gap-4 bg-white shadow-md w-full p-3">
            <label className="font-black text-orange-600 text-xl">Contact us</label>
            <span>Telephone: + (250) 787 716 701 / + (250) 726 922 589</span>
            <span>Email: realkwizera1@gmail.com</span>
          </div>
          <div>
            <textarea
              placeholder="Type your message..."
              className="flex lg:w-100 w-full p-3 h-50 bg-white border-1 rounded opacity-95"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <input
                className="p-2 border-1 object-fit w-70 bg-white mx-auto rounded px-4"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                className="p-2 bg-blue-600 w-25 text-white text-center font-bold px-5 rounded hover:bg-orange-600"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
