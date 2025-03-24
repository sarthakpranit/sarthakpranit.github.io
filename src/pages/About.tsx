import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          {/* Left Column - Profile & Contact */}
          <div className="space-y-8">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="h-32 w-32 mb-6 border-4 border-white shadow-lg dark:border-gray-700">
                <AvatarImage 
                  src="/lovable-uploads/66670f6f-be04-44ee-9d6e-bfb17e8e3691.png" 
                  alt="Sarthak Pranit" 
                  className="object-cover object-center"
                />
                <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">SP</AvatarFallback>
              </Avatar>
              
              <h1 className="text-3xl font-bold mb-2 dark:text-white">Sarthak Pranit</h1>
              <p className="text-dark/70 text-lg mb-4 dark:text-gray-400">Lead Product Designer</p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium dark:text-white">Contact</h2>
              
              <div className="space-y-3">
                <a href="mailto:sarthakpranit@gmail.com" className="flex items-center gap-3 text-dark/80 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">
                  <Mail size={18} />
                  <span>sarthakpranit@gmail.com</span>
                </a>
                
                <a href="tel:+31686106090" className="flex items-center gap-3 text-dark/80 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">
                  <Phone size={18} />
                  <span>+31 686 106 090</span>
                </a>
                
                <a href="https://linkedin.com/in/sarthakpranit" className="flex items-center gap-3 text-dark/80 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Bio & Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
              <div className="space-y-4 text-dark/80 dark:text-gray-300">
                <p>
                  Strategic Lead Product Designer with 8+ years of expertise in AI-driven personalization, recommendation systems, and scalable UX platforms. Led UX strategy for AI-powered products impacting 94+ teams, driving €200M+ in revenue uplift.
                </p>
                <p>
                  My expertise includes designing for machine learning, A/B testing, service design, and accessibility. I'm passionate about leveraging ML & AI for intelligent user experiences that solve complex problems at scale.
                </p>
                <p>
                  Throughout my career at Booking.com, CREO, and Taxi4Sure, I've specialized in creating digital products that blend innovative technology with intuitive design, focusing on measurable business impact while maintaining user-centered approaches.
                </p>
              </div>
            </div>
            
            {/* Key Achievements */}
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Impact Highlights</h2>
              <ul className="space-y-2 text-dark/80 list-disc pl-5 dark:text-gray-300">
                <li>Generated €200M+ revenue uplift via AI-powered personalization.</li>
                <li>Enhanced engagement for 9M daily users through Home Screen Orchestration strategy.</li>
                <li>Increased checkout success rate from 59% to 83% through payment optimization.</li>
                <li>Standardized UX across 200+ designers by developing unified app design standards.</li>
                <li>Reduced customer service cases by 33% through self-service UX solutions.</li>
                <li>Partnered with 90+ teams to scale AI-driven personalization.</li>
                <li>Mentored junior designers and advocated for accessibility at scale.</li>
              </ul>
            </div>
            
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">UX & Interaction Design</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Personalization</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Research</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Journey Mapping</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">A/B Testing</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Prototyping</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">AI & ML UX</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Generative AI</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Predictive Modeling</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">NLP</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Recommendation Systems</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">Design Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Cross-Functional Collaboration</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Component Libraries</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Figma</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">Data & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">SQL</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Python</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">Framer</span>
                    <span className="px-3 py-1 bg-lightGray dark:bg-gray-700 rounded-md text-sm dark:text-gray-300">SwiftUI</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CV/Resume */}
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
