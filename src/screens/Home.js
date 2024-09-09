import React from 'react';
import Services from './services';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-100 min-h-screen">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">AgriEase</h1>
        <nav className="space-x-8">
          <a href="#" className="text-purple-600 hover:text-purple-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Weather Forcast</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Crop Health</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Farming Tools</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">0</span>
            <button className="text-purple-600 hover:text-purple-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"/>
              </svg>
            </button>
          </div>

          <button
          className="text-white px-4 py-2 rounded-full"
          style={{ backgroundColor: '#268c43' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
           onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
          >
              Site Visit
                    </button>


        </div>
      </header>

      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-6xl font-extrabold text-purple-800 text-center">
          Welcome to the Dashboard
        </h1>
        <p className="mt-4 text-lg text-gray-500 text-center max-w-xl">
        AgriEase is a digital platform designed to support farmers and improve their agricultural practices. By providing real-time market information, weather forecasting tools, expert guidance, and technological solutions, AgriAssist empowers farmers to make informed decisions and achieve greater success.

        </p>
        <button
        className="mt-8 text-white px-6 py-3 rounded-full"
        style={{ backgroundColor: '#268c43' }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
         onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
          >
          Learn More
          </button>


      </main>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-[#507942] to-[#86a55a]">
          {/* A wavy graphic can be added here using an SVG */}
        </div>


    </div>
  );
}

export default Home;
