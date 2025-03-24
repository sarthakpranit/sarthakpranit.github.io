
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="mb-4">
            I'm Sarthak Pranit, a web developer passionate about creating 
            intuitive and responsive web applications. I enjoy solving complex 
            problems and turning ideas into reality through code.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">React</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">TypeScript</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">JavaScript</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">HTML/CSS</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">Tailwind CSS</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">Node.js</div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Company Name • 2020 - Present</p>
            <p className="mt-2">
              Working on frontend development using React, TypeScript, and Tailwind CSS.
              Collaborated with designers and backend developers to implement features and improve user experience.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400">University Name • 2016 - 2020</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
