import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);


// Game data
const games = [
    {
      id: 1,
      title: "Settlers of Catan",
      releaseDate: "1995-10-25",
      price: 49.99,
      image: "https://via.placeholder.com/200x200?text=Settlers+of+Catan",
    },
    {
      id: 2,
      title: "Ticket to Ride",
      releaseDate: "2004-11-15",
      price: 44.99,
      image: "https://via.placeholder.com/200x200?text=Ticket+to+Ride",
    },
    {
      id: 3,
      title: "Pandemic",
      releaseDate: "2007-04-01",
      price: 39.99,
      image: "https://via.placeholder.com/200x200?text=Pandemic",
    },
    {
      id: 4,
      title: "Codenames",
      releaseDate: "2015-09-01",
      price: 19.99,
      image: "https://via.placeholder.com/200x200?text=Codenames",
    },
    {
      id: 5,
      title: "Scythe",
      releaseDate: "2016-08-01",
      price: 79.99,
      image: "https://via.placeholder.com/200x200?text=Scythe",
    },
    {
      id: 6,
      title: "Azul",
      releaseDate: "2017-08-01",
      price: 39.99,
      image: "https://via.placeholder.com/200x200?text=Azul",
    },
  ];

  // Modal component
// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" onClick={handleOverlayClick}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-4 shadow-md mx-4">
          {children}
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-2"
          >
            Close
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
    </div>
  );
};


  

// Checkout form component
const CheckoutForm = ({ game }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // Handle successful payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mt-2"
        type="submit"
        disabled={!stripe}
      >
        Pay ${game.price}
      </button>
    </form>
  );
};



// Game card component
const GameCard = ({ game }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mx-2 my-4 max-w-sm">
      <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold mb-2">{game.title}</h3>
        <p className="text-gray-600 mb-2">{game.releaseDate}</p>
        <p className="text-lg font-bold mb-2">${game.price}</p>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Buy Now
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="mb-4">Complete your purchase</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm game={game} />
          </Elements>
        </Modal>
      </div>
    </div>
  );
};



// Game list component
const GameList = () => {
  // State for sorting
  const [sortType, setSortType] = useState("");

  // Function for sorting the game list
  const sortGames = (a, b) => {
    switch (sortType) {
      case "title":
        return a.title.localeCompare(b.title);
      case "price":
        return a.price - b.price;
      case "releaseDate":
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      default:
        return 0;
    }
  };

  // Render the game list
  
  return (
    <div>
      <div className="flex justify-center items-center pt-4 pb-2">
        <div className="relative inline-flex">
          <div className="bg-gray-800 text-white py-1 px-3 rounded-l-md">
            Sort By
          </div>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700"
            onClick={() => setSortType("title")}
          >
            Title
          </button>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700"
            onClick={() => setSortType("price")}
          >
            Price
          </button>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700 rounded-r-md"
            onClick={() => setSortType("releaseDate")}
          >
            Release Date
          </button>
        </div>
      </div>
      <hr className="border-gray-800" />
      <div className="flex flex-wrap justify-center">
        {games.sort(sortGames).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
  
      
  
    };

export default GameList;