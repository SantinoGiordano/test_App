import EventCard from "../componets/EventCard";
import Maincard from "../componets/Maincard";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-screen bg-fixed bg-center bg-cover bg-background-image-home">
          <div className="h-full bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Event Planning
            </h1>
          </div>
        </div>

        <div className="bg-gray-800">
          <div className="p-5">
            <div className="p-5 text-white text-5xl text-center =">
              <h1>
                See What We Offer <hr />
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <img
                  src="rave.jpg"
                  alt="Picture 1"
                  className="image-responsive"
                />
                <p className="mt-2 text-white text-justify">
                  Experience an electrifying night of live music as top artists
                  and bands take the stage to deliver unforgettable
                  performances.
                </p>
              </div>

              <div className="text-center">
                <img
                  src="museum.jpg"
                  alt="Picture 2"
                  className="image-responsive"
                />
                <p className="mt-2 text-white text-justify">
                  Plan on going to revisit ancient history or see what has been
                  created in the past? Plan a family vacation to the museum, let
                  us take care of it!
                </p>
              </div>

              <div className="text-center">
                <img
                  src="carnival.jpg"
                  alt="Picture 3"
                  className="image-responsive"
                />
                <p className="mt-2 text-white text-justify">
                  Step into a world of vibrant colors and endless excitement at
                  the carnival, where laughter and joy fill the air. Enjoy
                  thrilling rides, delicious treats, and fun games that delight
                  all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
