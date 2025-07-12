
const HeroContent = () => {
  return (
    <>
      {/* Simple dot indicator */}
      <div className="w-3 h-3 bg-foreground rounded-full mb-16"></div>
      
      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-12 leading-tight">
        Hi, I'm Your Name.
      </h1>
      
      {/* Description paragraphs */}
      <div className="space-y-8 text-lg text-muted-foreground leading-relaxed mb-16">
        <p>
          Some people call me a creative developer. I've been 
          crafting digital experiences for the last few years, 
          combining design and code.
        </p>
        
        <p>
          I live in your city and love building things that 
          matter. Keep up with me on{" "}
          <a href="#" className="text-foreground hover:underline">Instagram</a>{" "}
          or{" "}
          <a href="#" className="text-foreground hover:underline">Twitter</a>.
        </p>
      </div>
    </>
  );
};

export default HeroContent;
