// src/pages/client/MessCardPage.js

import React from 'react';
// import MessCard from '../../components/mess/MessCard';
import MessCard from "../../components/mess/MessCard"
import image1 from "../../assets/cardimages/card.jpg";
import image2 from "../../assets/cardimages/card2.jpeg";
import image3 from "../../assets/cardimages/card3.jpeg";
import image4 from "../../assets/cardimages/card4.webp";
import image5 from "../../assets/cardimages/card6.webp";
import image6 from "../../assets/cardimages/card7.jpeg";
import image7 from "../../assets/cardimages/card8.jpeg";
import image8 from "../../assets/cardimages/card9.jpeg";
import image9 from "../../assets/cardimages/card10.jpeg";
import image10 from "../../assets/cardimages/card11.jpg";


const messData = [
  {
    id: 1,
    name: 'Tasty Tiffins',
    image: image1,
    description: `
      Delicious and hygienic tiffins delivered to your doorstep.
      Freshly prepared daily with a rotating menu to keep your meals exciting.
      Perfect for busy professionals and students craving home-style food.`,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Healthy Meals',
    image: image2,
    description: `
      Nutritious and balanced meals for a healthy lifestyle.
      We use organic ingredients sourced from local farms.
      Ideal for fitness enthusiasts and those on a health journey.`,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Shree Mess',
    image: image3,
    description: `
      Experience the authentic taste of home-cooked meals away from home.
      Our menu includes traditional dishes prepared with love and care.
      Enjoy the comfort of home-style food wherever you are.`,
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Quick Bite',
    image: image4,
    description: `
      Quick and tasty meals for your busy schedule.
      Perfectly portioned and ready to go, saving you time and effort.
      Ideal for those on the go but still craving a delicious meal.`,
    rating: 4.3,
  },
  {
    id: 5,
    name: 'Budget Bites',
    image: image5,
    description: `
      Affordable and filling meals for students and professionals.
      We offer generous portions without breaking the bank.
      The best choice for budget-conscious individuals.`,
    rating: 4.2,
  },
  {
    id: 6,
    name: 'Spice Kitchen',
    image: image6,
    description: `
      A burst of flavors in every bite with our spicy and flavorful dishes.
      We specialize in bringing authentic regional spices to your plate.
      Perfect for those who love a little heat in their meals.`,
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Veggie Delight',
    image: image7,
    description: `
      Delicious vegetarian meals with a variety of options.
      Our menu is crafted to satisfy both vegetarians and non-vegetarians alike.
      A great choice for healthy and tasty vegetarian dishes.`,
    rating: 4.4,
  },
  {
    id: 8,
    name: 'Protein Pack',
    image: image8,
    description: `
      High-protein meals for fitness enthusiasts.
      We offer balanced meals with the right amount of protein to fuel your workouts.
      Ideal for athletes and those looking to build muscle.`,
    rating: 4.9,
  },
  {
    id: 9,
    name: 'Traditional Tastes',
    image: image9,
    description: `
      Authentic traditional meals from various regions of India.
      Experience the rich cultural heritage through our curated dishes.
      Perfect for those who appreciate traditional and regional flavors.`,
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Luxury Lunches',
    image: image10,
    description: `
      Premium meals with gourmet ingredients for a luxurious dining experience.
      Indulge in our chef-crafted dishes that bring fine dining to your doorstep.
      Ideal for those who love to enjoy a touch of luxury in their meals.`,
    rating: 4.9,
  },
];



const MessOutlets = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="space-y-6">
        {messData.map((mess) => (
          <MessCard
            key={mess.id}
            name={mess.name}
            image={mess.image}
            description={mess.description}
            rating={mess.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MessOutlets;