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
        <article>
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-black">Ramundbergets history</h2>
          <p className="text-gray font-nunito">
            The history of Ramundberget traces back to 1934, 
            when skiing students stayed in the tourist association's cottage Girtibauna, 
            6 kilometers northwest of Ramundberget.
            The year after, 1935, Brita and Agaton accommodated the same students
            with belonging girlfriends, at their own farm.
            The students, belonging to "The academic mountain club", 
            enjoyed their stay with their girlfriends, 
            and after exchanging letters with the Norberg family, 
            Brita and Agaton decided to host the students again during Easter 1936.
            The problem was a shortage of beds for everyone. 
            Despite the lack of beds, Agaton negotiated for ten beds on credit from his brother-in-law in Funäsdalen,
            and the commercial activity in Ramundberget started. 
          </p>
          <p className="text-gray">

          </p>
          <div className="text-lightgrey font-nunito text-sm mt-4">
            <p>By Håkan Persson</p>
            <p>Published on April 5, 2011</p>
            <p>Source:
                <a 
                className="cursor-pointer text-blue ml-1" 
                href="https://www.op.se/2011-04-05/anrika-ramundberget-fyller-75-ar"
                >
                    Östersunds-Posten
                </a>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HistorySection;