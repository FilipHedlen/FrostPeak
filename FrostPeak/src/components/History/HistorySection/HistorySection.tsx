import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const HistorySection = () => {
  return (
    <div className="container mx-auto p-8">
      <section
        className="bg-white shadow-lg p-6 mb-8 rounded-md animate-slide-in-right"
      >
        <article>
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-black">Ramundberget then</h2>
          <p className="text-grey font-poppins leading-relaxed pt-6">
            The history of Ramundberget traces back to 1934, 
            when skiing students stayed in the tourist association's cottage Girtibauna, 
            6 kilometers northwest of Ramundberget.
            The year after, 1935, Brita and Agaton Norberg accommodated the same students
            with belonging girlfriends, at their own farm.
            The students, belonging to "The academic mountain club", 
            enjoyed their stay with their girlfriends, 
            and after exchanging letters with the Norberg family, 
            Brita and Agaton decided to host the students again during Easter 1936.
            The problem was a shortage of beds for everyone. 
            Despite the lack of beds, Agaton negotiated for ten beds on credit from his brother-in-law in Funäsdalen,
            and the commercial activity in Ramundberget started.
            The resort's history includes milestones such as the introduction of the telephone in 1937, 
            the completion of the road from Bruksvallarna in 1949,
            and the construction of the first lift in 1958.
          </p>
          <Zoom>
            <img
              src="/ramund-family.webp"
              alt="Ramundbergets founders family picture"
              className="rounded-md w-30 md:w-80 h-auto mx-auto m-6"
              loading="lazy"
            />
          </Zoom>
        </article>
        <div className="text-lightgrey font-nunito text-sm mt-4">
            <p>Source:
                <a 
                  className="cursor-pointer text-blue ml-1" 
                  href="https://www.op.se/2011-04-05/anrika-ramundberget-fyller-75-ar"
                >
                    Östersunds-Posten
                </a>
            </p>
          </div>
      </section>
    </div>
  );
};

export default HistorySection;