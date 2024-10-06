import React, { useState } from 'react';

const ExploreNow = () => {
  
  const [cart, setCart] = useState([]);
  
  
  const menuData = {
    veg: {
      rice: [
        { name: 'Plain Rice', price: 50, image: '/images/plain_rice.jpg' },
        { name: 'Fried Rice', price: 70, image: '/images/fried_rice.jpg' }
      ],
      sabji: [
        { name: 'Paneer Butter Masala', price: 120, image: '/images/paneer_butter.jpg' },
        { name: 'Aloo Gobi', price: 80, image: '/images/aloo_gobi.jpg' }
      ],
      dal: [
        { name: 'Dal Tadka', price: 60, image: '/images/dal_tadka.jpg' },
        { name: 'Dal Fry', price: 70, image: '/images/dal_fry.jpg' }
      ],
      roti: [
        { name: 'Chapati', price: 10, image: '/images/chapati.jpg' },
        { name: 'Butter Naan', price: 20, image: '/images/butter_naan.jpg' }
      ],
      sweets: [
        { name: 'Gulab Jamun', price: 50, image: '/images/gulab_jamun.jpg' },
        { name: 'Rasgulla', price: 40, image: '/images/rasgulla.jpg' }
      ],
    },
    nonVeg: {
      rice: [
        { name: 'Chicken Biryani', price: 150, image: '/images/chicken_biryani.jpg' },
        { name: 'Mutton Biryani', price: 200, image: '/images/mutton_biryani.jpg' }
      ],
      sabji: [
        { name: 'Chicken Curry', price: 180, image: '/images/chicken_curry.jpg' },
        { name: 'Mutton Curry', price: 220, image: '/images/mutton_curry.jpg' }
      ],
      dal: [
        { name: 'Dal Gosht', price: 100, image: '/images/dal_gosht.jpg' }
      ],
      roti: [
        { name: 'Tandoori Roti', price: 15, image: '/images/tandoori_roti.jpg' },
        { name: 'Butter Naan', price: 20, image: '/images/butter_naan.jpg' }
      ],
      sweets: [
        { name: 'Phirni', price: 60, image: '/images/phirni.jpg' },
        { name: 'Kheer', price: 50, image: '/images/kheer.jpg' }
      ],
    },
  };

  // Function to add items to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="relative mb-8">
        <img 
          src="/images/banner.jpg" 
          alt="Explore Mess Menu" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Explore Mess Menu</h1>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center space-x-6 mb-6">
        {Object.keys(menuData).map((category) => (
          <Category key={category} category={category} items={menuData[category]} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <ul className="list-disc ml-6">
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Total: ₹{getTotalPrice()}</h3>
      </div>
    </div>
  );
};

// Category Component
const Category = ({ category, items, addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Menu
      </h2>
      
      {isOpen && (
        <div className="mt-4">
          {Object.keys(items).map((type) => (
            <div key={type} className="mb-4">
              <h3 className="text-lg font-medium capitalize">{type}</h3>
              <ul className="mt-2 space-y-2">
                {items[type].map((menuItem, idx) => (
                  <MenuItem key={idx} item={menuItem} addToCart={addToCart} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// MenuItem Component with Image
const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <li className="flex justify-between items-center p-2 border border-gray-300 rounded-lg">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <p>{item.name}</p>
          <p className="text-sm text-gray-600">₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          className="w-12 border rounded-lg text-center"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-lg"
          onClick={() => addToCart({ ...item, quantity })}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ExploreNow;
