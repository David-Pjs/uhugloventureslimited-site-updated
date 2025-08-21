// AboutUsPage.jsx
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="text-gray-400 bg-gray-900">

      <MissionSection />

      <CallToActionSection />
      <Location />

    </div>
  );
};

const MissionSection = () => (
  <section className="max-w-4xl px-6 py-16 mx-auto text-center">
    <h2 className="mb-4 text-4xl font-semibold text-blue-400">Our Mission</h2>
    
    <p>
        At Uhuglo Ventures Limited, our mission is to provide top-quality gadgets and everyday essentials that enhance your lifestyle. We are committed to delivering exceptional value, ensuring fast delivery, and prioritizing customer satisfaction above all else. Whether it's the latest smartwatches, power banks, or household accessories, we strive to be your go-to destination for all your needs. Join us in experiencing the best in quality and service.
    </p>
  </section>
);


const CallToActionSection = () => (
  <section className="px-6 py-16 text-center bg-black">
   <h2 className="mb-4 text-4xl font-semibold text-blue-400">Our Vision</h2>
    
    <p className="max-w-xl mx-auto mb-6">
    To be the trusted partner for businesses, organizations, individuals and households seeking premium gadgets and accessories in bulk
    delivering consistent quality, exceptional value, and reliable service to empower their success and make life easier.    </p>
  <div className="flex flex-col w-full gap-4 px-4 sm:flex-row sm:justify-center">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/2349067312726"
    className="flex-1 px-6 py-3 text-center text-green-600 transition border border-green-600 rounded sm:flex-none hover:bg-green-800 hover:text-white"
  >
    Chat Us Now
  </a>

  {/* Email Button */}
  <a
  href="mailto:uhugloventureslimited@gmail.com"
className="flex-1 px-6 py-3 text-center text-blue-600 transition border border-blue-600 rounded sm:flex-none hover:bg-blue-800 hover:text-white"
  >
    Send Us an Email
  </a>

</div>

  </section>
);

const Location = () => (
  <section className="max-w-4xl px-6 py-16 mx-auto text-center">
 <h2 className="mb-4 text-4xl font-semibold text-blue-400">Come Visit Us</h2>
     
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!4v1754783993077!6m8!1m7!1sr0LKwofQKpO5RSdUjmg77A!2m2!1d6.596074327834225!2d3.340060403014868!3f62.81305!4f0!5f0.7820865974627469" 

        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    <p>Located at 6 Otigba St, Computer Village, Lagos 101233, Lagos, Nigeria Click the map for directions </p>

  </section>
);


export default AboutUsPage;
