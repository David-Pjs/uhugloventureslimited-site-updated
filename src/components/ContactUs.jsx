// pages/ContactUs.jsx
const ContactUs = () => {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-4 text-4xl font-semibold text-blue-400">Contact Us</h1>

      {/* Contact Info & CTAs */}
      <div className="grid gap-10 mb-12 md:grid-cols-2">
        {/* Contact Info */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-blue-400">Get in Touch</h2>
          <p className="mb-2 text-gray-600">
            We’re happy to hear from you! Reach out using the contact details below or connect with us directly.
          </p>

          <div className="mt-4 space-y-2 text-gray-700">
            <p><strong>Phone:</strong> <a href="tel:+2349064602861" className="text-blue-600 hover:underline">+234-906-460-2861</a></p>
            <p><strong>Email:</strong> <a href="uhugloventureslimited@gmail.com" className="text-blue-600 hover:underline">uhugloventureslimited@gmail.com</a></p>
            <p><strong>Address:</strong>6 Otigba St, Computer Village, Lagos 101233, Lagos, Nigeria</p>
          </div>

          {/* CTAs */}
          <div className="mt-6 space-y-3">
         
       <button

onClick={() =>
   
  window.open("https://wa.me/2349067312726", "_blank")
  }
  className="px-6 py-3 text-green-600 border border-green-600 rounded hover:bg-green-800"
>
  Chat with Us on WhatsApp
</button>

            <br />
            <a
              
            href="mailto:uhugloventureslimited@gmail.com"
              className="inline-block px-6 py-3 text-blue-600 transition border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
            >
              Send Us an Email
            </a>
          </div>
        </div>
        </div>
      </div>
   
    
  );
};

export default ContactUs;
