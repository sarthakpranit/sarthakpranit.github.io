
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sarthak Pranit</h1>
        <p className="text-xl mb-8">Web Developer & Designer</p>
        <div className="flex justify-center gap-4">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome to my portfolio</h2>
        <p className="mb-6">
          I'm a passionate web developer focused on creating clean, user-friendly experiences.
          With expertise in modern frontend technologies, I build responsive and accessible web applications.
        </p>
        <p>
          Explore my <Link to="/projects" className="text-blue-600 hover:underline">projects</Link> to see my work
          or learn more <Link to="/about" className="text-blue-600 hover:underline">about me</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
