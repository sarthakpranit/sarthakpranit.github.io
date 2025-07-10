
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Simple dot indicator */}
          <div className="w-3 h-3 bg-slate-900 rounded-full mb-16"></div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-12 leading-tight">
            Hi, I'm Your Name.
          </h1>
          
          {/* Description paragraphs */}
          <div className="space-y-8 text-lg text-slate-700 leading-relaxed mb-16">
            <p>
              Some people call me a creative developer. I've been 
              crafting digital experiences for the last few years, 
              combining design and code.
            </p>
            
            <p>
              I live in your city and love building things that 
              matter. Keep up with me on{" "}
              <a href="#" className="text-slate-900 hover:underline">Instagram</a>{" "}
              or{" "}
              <a href="#" className="text-slate-900 hover:underline">Twitter</a>.
            </p>
          </div>
          
          {/* Experience section */}
          <div className="space-y-8">
            <h2 className="text-sm uppercase tracking-wider text-slate-400 font-medium">
              Previously
            </h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-slate-900 font-medium">Company One</h3>
                </div>
                <div className="text-right">
                  <p className="text-slate-900">Product Designer</p>
                  <p className="text-sm text-slate-400 mt-1">2022-2024</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-slate-900 font-medium">Company Two</h3>
                </div>
                <div className="text-right">
                  <p className="text-slate-900">Product Designer</p>
                  <p className="text-sm text-slate-400 mt-1">2020-2022</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-slate-900 font-medium">Company Three</h3>
                </div>
                <div className="text-right">
                  <p className="text-slate-900">UX Design Intern</p>
                  <p className="text-sm text-slate-400 mt-1">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
