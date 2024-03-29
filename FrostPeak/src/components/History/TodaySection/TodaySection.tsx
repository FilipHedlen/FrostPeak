import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const TodaySection = () => {
  return (
    <div className="container mx-auto p-8">
      <section
        className="bg-white shadow-lg p-6 mb-8 rounded-md animate-slide-in-right"
      >
        <article>
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-black">Ramundberget today</h2>
          <p className="text-grey font-poppins leading-relaxed pt-6">
            Owned by the Flacké family since 1993, and led by Philip Flacké,
            Ramundberget is gearing up for its 88th anniversary in 2024. 
            The resort features a robust ski system, including ten lifts, 
            42 slopes, off-piste areas, terrain parks, 
            30 kilometers of groomed cross-country ski trails, and dedicated zones for children.
            The resort also caters to off-piste enthusiasts with 
            captivating descents through mountainous forests.
            Ski passes are valid across all of Funäsfjällen's areas,
            and a complimentary ski bus links Ramundberget with neighboring villages.
            Expanding beyond winter sports, Ramundberget has evolved into a modern mountain resort.
            Visitors can enjoy extensive hiking and biking trails and serene parks. 
            Ramundberget offers more than just winter activities, 
            with a unique mountain golf course, a biathlon arena, 
            a roller skiing track, and a modern conference facility. 
            Accommodations, ranging from hotels to campsites, 
            provide 2,600 guest beds for a tailored experience. 
            Culinary options abound with restaurants, cafes, a local foodstore, and a mountain waffle hut.
            Topsport, a hub for adventure, operates sports stores offering 
            rental services and organizes activities in Ramundberget, Bruksvallarna, and Funäsdalen. 
            Reflecting its rich history while embracing contemporary preferences, 
            Ramundberget stands as a beacon of simplicity and excellence in the alpine landscape.
          </p>
          <Zoom>
            <img
              src="/ramund-view.webp"
              alt="Image of Ramundberget on a sunny day"
              className="rounded-md w-60 md:w-80 h-auto mx-auto m-6"
              loading="lazy"
            />
          </Zoom>
        </article>
        <div className="text-lightgrey font-nunito text-sm mt-4">
            <p>Sources:
                <a 
                  className="cursor-pointer text-blue ml-1" 
                  href="https://www.op.se/2011-04-05/anrika-ramundberget-fyller-75-ar"
                >
                    Östersunds-Posten,
                </a>
                <a
                  className="cursor pointer text-blue ml-1"
                  href="https://www.snalltaget.se/destinationer/fjallen/ramundberget"
                  >
                    Snälltåget,
                </a>
                <a
                  className="cursor pointer text-blue ml-1"
                  href="https://www.ramundberget.se/"
                  >
                    Ramundberget
                </a>
            </p>
          </div>
      </section>
    </div>
  );
};

export default TodaySection;