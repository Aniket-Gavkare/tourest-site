import React from "react";

const destinations = [
  {
    city: "Malé",
    country: "Maldives",
    image: "src/assets/images/destination-1.jpg",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    image: "src/assets/images/destination-2.jpg",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    image: "src/assets/images/destination-3.jpg",
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    image: "src/assets/images/destination-4.jpg",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    image: "src/assets/images/destination-5.jpg",
  },
];

export default function DestinationList() {
  return (
    <section className="section destination">
      <div className="container">
        <p className="section-subtitle">Destinations</p>
        <h2 className="h2 section-title">Choose Your Place</h2>
        <ul className="destination-list">
          {destinations.map((destination, index) => (
            <li key={index} className="w-50">
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">{destination.city}</p>
                  <h3 className="h3 card-title">{destination.country}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
