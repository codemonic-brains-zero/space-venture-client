import React, { useState } from 'react';
import image1 from "../../assets/Messimages/banner1.jpg";
import rice1 from "../../assets/Messimages/Eggrice.jpg";
import rice2 from "../../assets/Messimages/FriedRice.jpg";
import rice3 from "../../assets/Messimages/JeeraRice.jpg";

const ExploreNow = () => {
  const [menuType, setMenuType] = useState(null);
  const [cart, setCart] = useState([]);

  const menuData = {
    veg: {
      rice: [
        { name: 'Plain Rice', price: 50, image: '/images/plain_rice.jpg', description: 'Simple steamed rice.', rating: 4.2 },
        { name: 'Fried Rice', price: 70, image: '/Messimages/FriedRice.jpg', description: 'Tasty fried rice with vegetables.', rating: 4.5 },
        { name: 'Fried Rice', price: 70, image: '/Messimages/JeeraRice.jpg', description: 'Tasty fried rice with vegetables.', rating: 4.5 }

      ],
      sabji: [
        { name: 'Paneer Butter Masala', price: 120, image: '/images/paneer_butter.jpg', description: 'Creamy paneer dish.', rating: 4.7 },
        { name: 'Aloo Gobi', price: 80, image: '/images/aloo_gobi.jpg', description: 'Potato and cauliflower curry.', rating: 4.1 }
      ],
      // Add other categories...
    },
    nonVeg: {
      rice: [
        { name: 'Chicken Biryani', price: 150, image: '/images/chicken_biryani.jpg', description: 'Delicious chicken biryani.', rating: 4.8 },
        { name: 'Mutton Biryani', price: 200, image: '/images/mutton_biryani.jpg', description: 'Rich mutton biryani.', rating: 4.9 }
      ],
      sabji: [
        { name: 'Chicken Curry', price: 180, image: '/images/chicken_curry.jpg', description: 'Spicy chicken curry.', rating: 4.6 },
        { name: 'Mutton Curry', price: 220, image: '/images/mutton_curry.jpg', description: 'Savory mutton curry.', rating: 4.7 }
      ],
      // Add other categories...
    }
  };

  // Function to add items to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderMenuItems = (categoryData) => {
    return Object.keys(categoryData).map((type) => (
      <div key={type} className="mb-8">
        <h3 className="text-xl font-semibold capitalize mb-4">{type}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryData[type].map((menuItem, idx) => (
            <MenuItem key={idx} item={menuItem} addToCart={addToCart} />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="relative mb-8">
        <img
          src={image1}
          alt="Explore Mess Menu"
          className="w-screen h-screen  shadow-md mt-14"
        />
        <div className="  flex justify-center items-center">
          {/* <h1 className="text-4xl text-white font-bold">Explore Mess Menu</h1> */}
        </div>
      </div>

      {/* Menu Selection Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg"
          onClick={() => setMenuType('veg')}
        >
          Veg Menu
        </button>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-lg"
          onClick={() => setMenuType('nonVeg')}
        >
          Non-Veg Menu
        </button>
      </div>

      {/* Render Menu Based on Selection */}
      {menuType && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">{menuType === 'veg' ? 'Veg Menu' : 'Non-Veg Menu'}</h2>
          <div className="mt-4">{renderMenuItems(menuData[menuType])}</div>
        </div>
      )}

      {/* Cart Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <ul className="list-disc ml-6">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
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
    <>
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <img src={rice1} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="font-bold">₹{item.price}</p>
        <p className="text-yellow-500">Rating: {item.rating}⭐</p>

        <div className="flex items-center space-x-4 mt-4">
          <input
            type="number"
            className="w-16 border border-gray-400 rounded-lg text-center"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => addToCart({ ...item, quantity })}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <img src={rice2} alt={item.name} className="w-full h-48   mb-4" />
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="font-bold">₹{item.price}</p>
        <p className="text-yellow-500">Rating: {item.rating}⭐</p>

        <div className="flex items-center space-x-4 mt-4">
        <input
          type="number"
            className="w-16 border border-gray-400 rounded-lg text-center"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={() => addToCart({ ...item, quantity })}
        >
          Add to Cart
        </button>
      </div>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <img src={rice3} alt={item.name} className="w-full h-48   mb-4" />
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="font-bold">₹{item.price}</p>
        <p className="text-yellow-500">Rating: {item.rating}⭐</p>

        <div className="flex items-center space-x-4 mt-4">
        <input
          type="number"
            className="w-16 border border-gray-400 rounded-lg text-center"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={() => addToCart({ ...item, quantity })}
        >
          Add to Cart
        </button>
      </div>
      </div>
    </>
  );
};

export default ExploreNow;
