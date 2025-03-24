
import React from "react";
import { Separator } from "@/components/ui/separator";

const timelineData = [
  {
    period: "Oct 2016 - Present",
    role: "Lead Designer",
    company: "Booking.com",
    location: "Amsterdam",
    description: "Led UX strategy for AI-powered products impacting 94+ teams, driving €200M+ revenue uplift. Spearheaded personalization platforms, recommendation systems, and checkout optimization increasing conversion from 59% to 83%."
  },
  {
    period: "Feb 2015 - Aug 2016",
    role: "Lead Designer",
    company: "CREO",
    location: "Bangalore, India",
    description: "Designed OS-level apps (Dialer, Camera & Search) for Fuel OS, launched with the CREO Mark 1 phone. Led UX strategy for iOS, Android & TV apps for Teewe. First design hire responsible for building the design team."
  },
  {
    period: "Oct 2014 - Feb 2015",
    role: "Product Designer",
    company: "Taxi4Sure",
    location: "Bangalore, India",
    description: "Led UX strategy for localizing the driver app in 63 languages, increasing engagement by 300% and retention by 560%."
  }
];

const educationData = [
  {
    period: "2015",
    degree: "Master's in Data Analytics (Incomplete)",
    institution: "Georgia Tech",
    location: "USA",
    description: "Focused on machine learning and data visualization techniques."
  },
  {
    period: "2011 - 2014",
    degree: "Master's in Mathematics",
    institution: "BITS Pilani",
    location: "Goa, India",
    description: "Applied mathematics with focus on statistical modeling."
  },
  {
    period: "2009 - 2012",
    degree: "Bachelor's in Electrical & Electronics Engineering",
    institution: "BITS Pilani",
    location: "Goa, India",
    description: "Engineering fundamentals with specialization in systems design."
  }
];

const Timeline = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Timeline Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl text-dark/80 max-w-2xl dark:text-gray-300">
            My journey as a Product Designer specializing in AI-driven personalization and recommendation systems.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20 animate-fade-up">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-[200px_1fr] gap-6 items-start">
                  <div className="text-primary font-medium mb-2 md:text-right">
                    {item.period}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium">{item.role}</h3>
                    <p className="font-medium text-dark/70 dark:text-gray-400">{item.company} · {item.location}</p>
                    <p className="text-dark/80 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline line (visible on mobile) */}
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Education */}
        <div className="animate-fade-up">
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-[200px_1fr] gap-6 items-start">
                  <div className="text-primary font-medium mb-2 md:text-right">
                    {item.period}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium">{item.degree}</h3>
                    <p className="font-medium text-dark/70 dark:text-gray-400">{item.institution} · {item.location}</p>
                    <p className="text-dark/80 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline line (visible on mobile) */}
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
