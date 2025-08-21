import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-gray-300 bg-gray-900">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-4">
        {/* Business Info */}
        <div>
          <h2 className="mb-2 text-xl font-bold text-white">UHUGLO VENTURES LIMITED</h2>
          <p className="text-gray-400">Reliable. Friendly. At your service.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white" onClick={e => { const el = document.getElementById('home'); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }}}>Home</a></li>
            <li><a href="#about" className="hover:text-white" onClick={e => { const el = document.getElementById('about'); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }}}>About Us</a></li>
            <li><a href="#contact" className="hover:text-white" onClick={e => { const el = document.getElementById('contact'); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }}}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Contact</h3>
          <p>Phone: <a href="7064548494" className="hover:text-white">+2347064548494</a></p>
          <p>Email: <a href="uhugloventureslimited@gmail" className="hover:text-white">uhugloventureslimited@gmail.com</a></p>
          <p>6 Otigba St, Computer Village, Lagos 101233, Lagos, Nigeria</p>
        </div>

        {/* Social + Chat & Email */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Connect with Us</h3>
          <div className="flex mb-4 space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
          <button
           
onClick={() =>
    window.open("https://wa.me/2349067312726", "_blank")
  }

           className="w-full py-2 mb-2 text-white transition bg-green-600 rounded hover:bg-green-700">
            Chat with Us
          </button>
          
<a

  href="mailto:uhugloventureslimited@gmail.com"
  className="block w-full py-2 text-center text-blue-600 transition border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
>
  Send Us an Email
</a>

        </div>
      </div>

      <div className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Uhuglo Ventures Limited. All rights reserved.

      </div>
    </footer>
  );
};

export default Footer;
