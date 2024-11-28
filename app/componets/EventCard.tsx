'use client'
import React, { useState } from "react";
import CheckoutList from "./CheckoutList";

interface event {
  id: number;
  title: string;
  info: string;
}

const EventCard = () => {

  const eventData = [
    {
      id: 1,
      title: "Team Building Retreat",
      info: "A day-long retreat to foster team collaboration and communication at Sunny Meadows Resort. Enjoy fun team-building activities and workshops. Wrap up the day with a relaxing bonfire and networking opportunities.",
    },
    {
      id: 2,
      title: "Annual Tech Conference",
      info: "Explore the latest trends in technology and innovation at the downtown convention center. Network with industry leaders and tech enthusiasts. Participate in panel discussions and hands-on demonstrations of cutting-edge tech.",
    },
    {
      id: 3,
      title: "Charity Gala Night",
      info: "An elegant evening of dinner, dancing, and donations for local charities. Dress to impress and support a meaningful cause. Enjoy a night of entertainment, auctions, and inspiring stories from beneficiaries.",
    },
    {
      id: 4,
      title: "Startup Pitch Fest",
      info: "Budding entrepreneurs pitch their ideas to investors and industry experts. Witness groundbreaking ideas and discover the next big thing. Engage in Q&A sessions and connect with the brightest minds in the startup world.",
    },
    {
      id: 5,
      title: "Summer Music Festival",
      info: "A weekend of live performances from top artists and local bands at Harmony Park. Enjoy food stalls, art displays, and unforgettable music. Bring your friends and experience the ultimate summer vibe.",
    },
    {
      id: 6,
      title: "Art Exhibition",
      info: "Showcasing contemporary artworks by emerging and renowned artists at the City Art Gallery. Engage with interactive displays and artist talks. Gain a fresh perspective on modern art and culture.",
    },
    {
      id: 7,
      title: "Coding Bootcamp",
      info: "A two-day workshop for beginners to learn the fundamentals of web development. Build a project and gain practical coding experience. Leave with a strong foundation to kickstart your coding journey.",
    },
    {
      id: 8,
      title: "Food Truck Fiesta",
      info: "A celebration of street food featuring the best food trucks in the city. Savor a variety of cuisines and enjoy live music performances. Don’t forget to vote for your favorite truck to win the People’s Choice Award.",
    },
    {
      id: 9,
      title: "Health and Wellness Fair",
      info: "Learn about healthy living with workshops, vendors, and fitness classes. Discover wellness products and services tailored to your needs. Take part in free health screenings and expert consultations.",
    },
    {
      id: 10,
      title: "Book Club Meetup",
      info: "Discuss this month's book and connect with fellow readers at Café Literati. Share insights, enjoy a cozy atmosphere, and find your next read. Stay for trivia games and win exciting bookish prizes.",
    },
  ];
  
  const [checkoutItems, setCheckoutItems] = useState<string[]>([]);

  function handleAdd(title: string) {
    setCheckoutItems((prevItems) => [...prevItems, title]);
  }

  function handleRemove(title: string) {
    setCheckoutItems((prevItems) =>
      prevItems.filter((item) => item !== title)
    );
  }

  return (
    <>
      <CheckoutList items={checkoutItems} />
      {eventData.map((event) => (
        <div
          key={event.id}
          className="flex space-x-4 p-5 max-w-7xl align-center"
        >
          <div className="eventCard">
            <div className="eventCard-title">Title: {event.title}</div>
            <div className="eventCard-text">{event.info}</div>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleAdd(event.title)}
              className="p-4 pl-10 pr-10 text-white bg-green-600 rounded-lg hover:bg-green-300 hover:text-black max-h-14"
              style={{ boxShadow: "inset 3px 3px 3px rgba(0, 0, 0, 0.3)" }}
            >
              Add
            </button>

            <button
              onClick={() => handleRemove(event.title)}
              className="p-4 pl-10 pr-10 text-white bg-red-600 rounded-lg hover:bg-red-300 hover:text-black max-h-14"
              style={{ boxShadow: "inset 3px 3px 3px rgba(0, 0, 0, 0.3)" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};


export default EventCard;
