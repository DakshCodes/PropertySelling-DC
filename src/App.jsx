import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Use BrowserRouter as Router
import PropertyCard from './Components/PropertyCard';
import './App.css'
import PropertyDetails from './Components/PropertyDetails';


const cities = ['Delhi', 'Mumbai', 'Jaipur', 'Udaipur'];

const App = () => {
  const [activeTab, setActiveTab] = useState(cities[0]);
  const [properties, setProperties] = useState(getProperties(activeTab));

  function getProperties(city) {
    // Fetch properties for the selected city (replace with your data fetching logic)
    // For simplicity, using a dummy array here
    return Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      name: `${city} Property ${index + 1}`,
      image: `https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }));
  }

  function handleTabClick(city) {
    setActiveTab(city);
    setProperties(getProperties(city));
  }

  return (
    <div className='bg-[#1f2937] h-screen'>
      <div className="city-tabs flex flex-col justify-around h-[25vh] items-center">
        <div>
          <h1 className='text-[#fff] uppercase text-4xl'>
            Featured Listed Property
          </h1>
        </div>
        <div className="flex text-[#fff] items-center -mx-7 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
          {cities.map((city) => (
            <Link
              key={city}
              to={`/${city}`}
              onClick={() => handleTabClick(city)}
              className={` ${activeTab === city && 'border border-b-0 rounded-t-lg '}flex items-center flex-shrink-0 px-5 py-1 text-xl space-x-2 border-b dark:border-gray-400 `}>
              <button className="cursor-pointer group block px-5 py-2 rounded-md  text-white text-2xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">{city}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/:city" exact element={
          <div className="mt-[3vw] pb-[3vw] bg-[#1f2937] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-28 w-full">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        } />
        <Route path="/property/:id" exact element={<PropertyDetails properties={properties} />} />
      </Routes>
    </div>
  );
};

export default App;
