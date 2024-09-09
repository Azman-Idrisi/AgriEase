import React from 'react';

const services = [
  {
    title: 'Consulting',
    description: 'Expert advice on how to optimize your agricultural practices and improve yields.',
    icon: '🌱'
  },
  {
    title: 'Soil Testing',
    description: 'Comprehensive soil analysis to determine the best treatment and fertilization strategies.',
    icon: '🔬'
  },
  {
    title: 'Crop Management',
    description: 'Guidance on managing crop growth, pest control, and harvest planning.',
    icon: '🌾'
  },
  {
    title: 'Sustainable Practices',
    description: 'Implementing eco-friendly practices to reduce environmental impact and increase sustainability.',
    icon: '♻️'
  }
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-background to-primary min-h-screen py-8">
      <header className="flex justify-between items-center p-6 bg-background">
        <h1 className="text-3xl font-heading text-primary">AgriEase</h1>
        <nav className="space-x-8">
          <a href="/" className="text-primary hover:text-accent">Home</a>
          <a href="/services" className="text-primary hover:text-accent">Services</a>
          <a href="#" className="text-muted hover:text-muted-foreground">About</a>
          <a href="#" className="text-muted hover:text-muted-foreground">Testimonials</a>
          <a href="#" className="text-muted hover:text-muted-foreground">Clients</a>
          <a href="#" className="text-muted hover:text-muted-foreground">Contact</a>
          <a href="#" className="text-muted hover:text-muted-foreground">Book Online</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-12 px-6">
        <h1 className="text-4xl font-extrabold text-primary text-center">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted text-center">
          Discover the range of services we offer to support your agricultural needs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-background text-center py-6 mt-12">
        <p className="text-muted">© 2024 AgriEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
