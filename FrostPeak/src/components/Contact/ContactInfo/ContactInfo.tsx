const ContactInfo= () => {
    return (
      <div className="flex flex-col mx-8 my-16 text-white animate-slide-in-right">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-playfair underline">Contact Information</h3>
        <div className="mb-8 font-poppins font-medium">
          <p className="mb-2">Email: filip.hedlen@gmail.com</p>
          <p className="mb-2">Phone: +46 76 273 38 99</p>
          <p className="mb-2">Address: Bergarvägen 31, 846 97 Bruksvallarna</p>
        </div>
      </div>
    );
};

export default ContactInfo;