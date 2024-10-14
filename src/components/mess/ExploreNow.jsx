import React, { useState } from 'react';
import banner from "../../assets/tiffineimges/banner1.jpg"
import veg1 from "../../assets/tiffineimges/alu.webp";
import veg2 from "../../assets/tiffineimges/alugobi.jpg";
import veg3 from "../../assets/tiffineimges/brinjal.jpg";
import veg4 from "../../assets/tiffineimges/ladyfinger.jpg";



const ExploreNow = () => {
  const [selectedMenu, setSelectedMenu] = useState(''); // State to track selected menu ('veg' or 'nonVeg')
  const [cart, setCart] = useState([]);

  const menuData = {
    veg: {
      rice: [
        {
          name: 'masala alu tiffin',
          price: 50,
          rating: 4.3,
          description: 'masala alu with fresh cream.',
          image: veg1
        },

        {
          name: 'alugobi',
          price: 70,
          rating: 4.6,
          description: 'Spicy alugobi with fresh masala.',
          image: veg2

        }
      ],


      sabji: [
        {
          name: 'Paneer Butter Masala',
          price: 120,
          rating: 4.8,
          description: 'Delicious paneer cooked in buttery tomato gravy.',
          image: veg3
        },

        {
          name: 'Aloo Gobi',
          price: 80,
          rating: 4.2,
          description: 'A dry vegetable dish made with potatoes and cauliflower.',
          image: veg4
        }
      ],
    },
    nonVeg: {
      rice: [
        {
          name: 'Chicken Biryani',
          price: 150,
          rating: 4.9,
          description: 'Flavourful chicken biryani with rich spices.',
          image: '/images/chicken_biryani.jpg'
        },

        {
          name: 'Mutton Biryani',
          price: 200,
          rating: 4.7,
          description: 'Aromatic biryani made with tender mutton.',
          image: '/images/mutton_biryani.jpg'
        }
      ],
      sabji: [
        {
          name: 'Chicken Curry',
          price: 180,
          rating: 4.5,
          description: 'Spicy and rich chicken curry.',
          image: '/images/chicken_curry.jpg'
        },
        {
          name: 'Mutton Curry',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: '/images/mutton_curry.jpg'
        }
      ],
    }
  };

  // Function to handle menu selection
  const handleMenuSelect = (menuType) => {
    setSelectedMenu(menuType); // 'veg' or 'nonVeg'
  };

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="relative mb-8">
        <img
          src={banner}
          alt="Explore Mess Menu"
          className="w-full h-full shadow-md"
        />
        <div className="absolute inset-0 flex justify-center items-center">

        </div>
        <h1 className="text-4xl mt-10 items-center justify-center absolute text-pink-400 font-bold">Explore Mess Menu</h1>
      </div>

      {/* Veg and Non-Veg Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-4 rounded-lg text-white ${selectedMenu === 'veg' ? 'bg-green-500' : 'bg-gray-500 hover:bg-green-500'}`}
          onClick={() => handleMenuSelect('veg')}
        >
          Veg Menu
        </button>
        <button
          className={`py-2 px-4 rounded-lg text-white ${selectedMenu === 'nonVeg' ? 'bg-red-500' : 'bg-gray-500 hover:bg-red-500'}`}
          onClick={() => handleMenuSelect('nonVeg')}
        >
          Non-Veg Menu
        </button>
      </div>

      {/* Conditional Rendering of Menus */}
      {selectedMenu && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(menuData[selectedMenu]).map((category) => (
            menuData[selectedMenu][category].map((item, idx) => (
              <MenuItem key={idx} item={item} addToCart={addToCart} />
            ))
          ))}
        </div>
      )}

      {/* Cart Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <ul className="list-disc ml-6">
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-56">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      <p className="font-bold">₹{item.price}</p>
      <p className="text-yellow-500 text-sm">Rating: {item.rating}⭐</p>

      <div className="flex items-center space-x-4 mt-2">
        <input
          type="number"
          className="w-16 border border-gray-400 rounded-lg text-center"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-lg text-sm"
          onClick={() => addToCart({ ...item, quantity })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ExploreNow;
