const ContactInfo= () => {
    return (
      <div className="flex flex-col mx-8 my-16 text-white animate-slide-in-right">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-playfair underline">Contact Information</h3>
        <div className="mb-8 font-poppins font-bold">
          <p>Email: frostpeak@gmail.com</p>
          <p>Phone: +123 123 123</p>
          <p>Address: Bergarvägen 31, 846 97 Bruksvallarna</p>
        </div>
      </div>
    );
};

export default ContactInfo;