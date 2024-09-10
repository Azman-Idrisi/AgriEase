import React from 'react';

const Home = () => {
  return (
    <div 
      className="bg-gradient-to-b from-white to-purple-100 min-h-screen"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-bananas-hand_23-2151005962.jpg?t=st=1725904636~exp=1725908236~hmac=60686913b81409e3250aa455962a5061a43c62ddd801599e96c6befa188c6ee7&w=1380)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <header 
        className="flex justify-between items-center p-6"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '12px'
        }}
      >
        <h1 className="text-3xl font-bold">AgriEase</h1>
        <nav className="space-x-8">
          <a href="/home" className="text-blue-800 hover:text-purple-800">Home</a>
          <a href="/services" className="text-black hover:text-gray-800">Services</a>
          <a href="#" className="text-black hover:text-gray-800">Weather Forecast</a>
          <a href="#" className="text-black hover:text-gray-800">Crop Health</a>
          <a href="#" className="text-black hover:text-gray-800">Farming Tools</a>
          <a href="#" className="text-black hover:text-gray-800">Contact</a>
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

      <main className="flex flex-col items-center h-[500px] justify-center mt-20">
        <h1 className="text-6xl font-extrabold text-white text-center">
          Welcome to the Dashboard
        </h1>

        <button
          className="mt-8 text-white px-6 py-3 rounded-full"
          style={{ backgroundColor: '#268c43' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
        >
          Learn More
        </button>
      </main>
    </div>
  );
}

export default Home;
