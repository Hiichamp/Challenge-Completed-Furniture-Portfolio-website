import React from 'react';
import Swal from 'sweetalert2'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ae8c47e-407b-4a19-995e-e8c646bf6090");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent Successfully!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-full max-w-lg bg-gray-200 mt-20 rounded-md p-6">
        <h1 className="text-2xl font-bold text-center py-5">CONTACT FORM</h1>
        <div className="">
          <p className="text-xl mb-2 font-semibold">Full Name</p>
          <input name='name'
            required
            className="bg-gray-300 border-solid mb-3 border-2 border-black rounded-md text-black placeholder-gray-700 outline-none w-full h-10 p-2"
            type="text"
            placeholder="Enter your name"
          />
          <p className="text-xl mb-2 font-semibold">Address</p>
          <input name='Address'
            required
            className="bg-gray-300 border-solid mb-3 border-2 border-black rounded-md text-black placeholder-gray-700 outline-none w-full h-10 p-2"
            type="text"
            placeholder="Enter your address"
          />
          <p className="text-xl mb-2 font-semibold">Phone Number</p>
          <input name='Phone number'
            required
            className="bg-gray-300 border-solid mb-3 border-2 border-black rounded-md text-black placeholder-gray-700 outline-none w-full h-10 p-2"
            type="number"
            placeholder="Enter your phone number"
          />
          <p className="text-xl mb-2 font-semibold">Your Message</p>
          <textarea name='message'
            required
            className="bg-gray-300 border-solid border-2 border-black rounded-md text-black placeholder-gray-700 outline-none w-full h-32 p-2"
            type="text"
            placeholder="Enter your message"
          />
          <button className="w-full mt-5 rounded-md py-2 bg-gray-500 text-white font-bold text-xl">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
