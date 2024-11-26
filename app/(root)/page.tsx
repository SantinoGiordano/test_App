import EventCard from "../componets/EventCard";
import Maincard from "../componets/Maincard";




export default function Home() {

  return (
    <>
    <div>
      <div className='text-center text-4xl w-full bg-rave-bg bg-autobg-contain bg-center h-screen'>
          <Maincard/>
      </div>

        <div className="bg-slate-200">
          <EventCard/>
        </div>
      </div>

      
    </>
  );
}
