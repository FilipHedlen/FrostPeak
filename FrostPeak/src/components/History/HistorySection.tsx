import { useEffect, useState } from 'react';

const HistorySection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <section
        className={`bg-white shadow-lg p-6 mb-8 transition-all duration-1500 ease-in-out transform ${
            isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Brief history</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum lorem ipsum</p>
        <p className="text-gray-800">
          Lorem ipsum lorem ipsum
        </p>
      </section>
    </div>
  );
};

export default HistorySection;