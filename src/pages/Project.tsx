
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectHero from "@/components/ProjectHero";
import MarkdownRenderer from "@/components/ui/markdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Project data based on Sarthak's CV
const projectsData = {
  "ai-personalization": {
    title: "AI-Driven Personalization Platform",
    description: "Led UX strategy for a platform serving 94 teams, enabling predictive & generative AI capabilities that drove €200M+ revenue.",
    date: "2020-2023",
    client: "Booking.com",
    role: "Lead Product Designer",
    categories: ["AI/ML Design", "UX Strategy", "Personalization"],
    heroImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Design a scalable personalization platform that would enable 94+ product teams to leverage AI and ML capabilities to create personalized user experiences across the Booking.com ecosystem.

### Key Objectives
- Create a unified system for recommendations across multiple product areas
- Enable teams to leverage AI without deep ML expertise
- Ensure personalization felt human and helpful, not creepy
- Measure effectiveness and enable rapid experimentation

## My Approach

### 1. Understanding the AI Ecosystem
I began by mapping the existing ML infrastructure and identifying the key bottlenecks preventing wider adoption. I conducted interviews with:
- 24 product teams trying to implement personalization
- 8 data scientists responsible for building models
- 4 ML infrastructure teams

> "We needed a way for product teams to leverage sophisticated AI capabilities without becoming ML experts themselves. Creating that interface between humans and machines was the core challenge." — Head of Data Science

### 2. Designing the Framework
I created a modular personalization framework with these components:

![Framework Diagram](https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

- **Intent Engine**: A system to understand and classify user needs in real-time
- **Content Orchestration**: Rules for selecting and prioritizing personalized content
- **Feedback Loops**: Methods to capture explicit and implicit user feedback
- **Experimentation Framework**: A/B testing infrastructure specific to ML models

### 3. Translating ML Concepts for Designers and PMs
I created a series of workshops and design tools to help non-technical stakeholders understand:
- How to frame personalization goals in ways ML systems could understand
- Methods for evaluating ML-driven experiences
- Ethical considerations and privacy by design

## Results

The platform enabled rapid adoption of AI personalization capabilities:
- €200M+ revenue uplift from personalized experiences
- 94 teams actively using the platform within 18 months
- 28% increase in user engagement with personalized content
- 3.5x faster implementation time for new personalization features

### Infrastructure Impact
- Created a unified taxonomy for personalization across the company
- Established consistent UX patterns for explaining personalized content to users
- Developed design systems components specifically for AI-driven interfaces

## Key Learnings

1. **Balance is critical**: Personalization must balance business goals, user needs, and technical capabilities.
2. **Transparency builds trust**: Clear communication with users about why they see certain recommendations increased engagement.
3. **ML-specific design patterns**: Traditional UX patterns needed adaptation for ML contexts, particularly around handling uncertainty and exceptions.
    `
  },
  "home-screen": {
    title: "Home Screen Orchestration",
    description: "Led cross-functional UX for 9M daily users, balancing user needs with 54+ teams' business goals.",
    date: "2018-2020",
    client: "Booking.com",
    role: "Lead Product Designer",
    categories: ["UX Design", "Personalization", "Content Strategy"],
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Redesign the app home screen experience for 9M daily users while balancing the competing interests of 54+ product teams, each wanting prime visibility for their features.

### Key Objectives
- Create a personalized, contextually relevant home experience
- Balance discovery, conversion, and retention goals
- Establish a sustainable governance model for content prioritization
- Increase user engagement with key features

## My Approach

### 1. Mapping the Ecosystem
I began by creating a comprehensive map of all stakeholders, content types, and user needs:
- Interviewed 54 product teams about their goals and KPIs
- Analyzed user behavior data across 12 months and 8 key markets
- Conducted user research to understand context-specific needs

![Ecosystem Map](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. Designing the Framework
I developed a modular home screen architecture based on:

- **User Context**: Travel stage, location, time, previous behavior
- **Business Priorities**: Conversion goals, strategic initiatives
- **Content Types**: Classification system for all possible content modules

The resulting system allowed dynamic composition of the home experience based on these factors.

### 3. Governance Model
I designed and implemented a cross-functional governance process:

- Created objective scoring criteria for content prioritization
- Established a regular review cadence with key stakeholders
- Developed metrics for measuring overall home screen health
- Built feedback mechanisms for teams to understand performance

## Results

The new home screen experience delivered significant improvements:

- 34% increase in feature discovery
- 28% reduction in time-to-conversion for key tasks
- 9M daily users benefiting from contextual, relevant experiences
- Successful balancing of needs across 54+ product teams

### Process Impact
- Established a model for cross-team collaboration that was adopted by other product areas
- Created a scalable approach to content orchestration that could adapt to business priorities
- Developed new UX patterns for contextual content presentation

## Key Learnings

1. **Governance is as important as design**: Clear decision-making processes were essential for managing competing priorities.
2. **Contextual relevance drives engagement**: Users responded most positively to content that matched their current travel stage and needs.
3. **Design systems at scale**: Creating flexible yet consistent module templates enabled rapid iteration and testing.
    `
  },
  "checkout": {
    title: "Checkout Optimization",
    description: "Spearheaded app-first checkout redesign, integrating Apple Pay and alternative payments, boosting conversion from 59% to 83%.",
    date: "2019-2020",
    client: "Booking.com",
    role: "Lead Product Designer",
    categories: ["UX Design", "Payment Systems", "Conversion Optimization"],
    heroImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Redesign the mobile checkout experience to improve conversion rates and integrate modern payment methods while balancing security, compliance, and usability.

### Key Objectives
- Increase checkout conversion from 59% to 75%+
- Integrate Apple Pay and alternative payment methods
- Reduce form fields and cognitive load
- Maintain high security and compliance standards

## My Approach

### 1. Conversion Research
I conducted comprehensive research to understand checkout abandonment:
- Analysis of 500,000+ checkout sessions to identify drop-off points
- User testing with 45 participants across 8 countries
- Competitive analysis of checkout flows across travel and e-commerce

![Checkout Flow Analysis](https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. App-First Design Approach
I developed a mobile-optimized checkout with these key features:

- **Progressive disclosure**: Breaking the process into manageable steps
- **Contextual validation**: Real-time feedback on form fields
- **Payment method prioritization**: Surfacing the most relevant options first
- **Native integrations**: Leveraging platform capabilities like Apple Pay
- **Trust indicators**: Strategic placement of security and guarantee messaging

### 3. Testing & Optimization
I led an extensive testing program:

- A/B testing of 12 key hypotheses
- Multivariate testing of form field arrangements
- User testing of payment method comprehension
- Performance testing across network conditions

## Results

The redesigned checkout experience exceeded targets:

- Increased conversion from 59% to 83% (vs. 75% target)
- Reduced average checkout time by 47%
- 35% adoption of Apple Pay where available
- 28% reduction in payment-related customer service contacts

### Business Impact
- €45M+ increased revenue in first year of implementation
- Established framework for rapid integration of new payment methods
- Created reusable patterns for complex form interactions

## Key Learnings

1. **Platform-specific optimization matters**: iOS and Android users had different payment preferences and behavior patterns.
2. **Trust drives conversion**: Strategic placement of security messaging had outsized impact on completion rates.
3. **Progressive enhancement**: Designing for low-end devices first ensured consistent experience across the device spectrum.
    `
  },
  "recommendations": {
    title: "Recommendation System Framework",
    description: "Designed ML frameworks for product recommendations impacting 100+ teams.",
    date: "2017-2019",
    client: "Booking.com",
    role: "Lead Product Designer",
    categories: ["ML Design", "Recommendation Systems", "UX Strategy"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Create a unified framework for recommendations that could be implemented across the product ecosystem, serving 100+ product teams with diverse goals and user contexts.

### Key Objectives
- Design consistent recommendation patterns
- Create tooling for teams to implement recommendations
- Ensure recommendations felt helpful, not manipulative
- Enable measurement and improvement over time

## My Approach

### 1. Understanding the Recommendation Landscape
I mapped the existing recommendation implementations and their effectiveness:
- Audited 38 existing recommendation features
- Analyzed performance data across recommendation types
- Identified gaps and inconsistencies in user experience

> "We needed recommendations to feel like a helpful friend making suggestions, not an algorithm trying to maximize conversion." — Chief Product Officer

![Recommendation Audit](https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. Designing the Framework
I created a comprehensive recommendation system with these components:

- **Recommendation Types**: Classification of different recommendation purposes (discovery, optimization, upsell, etc.)
- **Presentation Patterns**: Library of UI patterns optimized for each recommendation type
- **Explanation Models**: Methods for communicating recommendation rationale to users
- **Feedback Mechanisms**: Ways for users to refine recommendations

### 3. Implementation Toolkit
I developed resources to help teams implement the framework:

- Design system components for recommendation modules
- Implementation guidelines for engineers
- A/B testing templates specific to recommendation features
- Measurement framework for recommendation effectiveness

## Results

The recommendation framework had significant impact:

- Implemented by 100+ teams within 24 months
- 28% average increase in engagement with recommended content
- 18% increase in conversion from recommendations
- Consistent user experience across the product ecosystem

### System Impact
- Established recommendation as a core capability across the platform
- Created reusable patterns that reduced implementation time by 64%
- Developed novel approaches to recommendation explanations that increased trust

## Key Learnings

1. **Transparency builds trust**: Clear explanations of recommendation rationale significantly increased user engagement.
2. **Context matters**: The same recommendation algorithm needed different UI treatments based on where it appeared in the user journey.
3. **Feedback loops are essential**: Giving users ways to refine recommendations improved both the immediate experience and long-term algorithm performance.
    `
  },
  "design-system": {
    title: "App UX Standards & Design System",
    description: "Co-led App UX Standards, ensuring consistency across 200+ designers.",
    date: "2018-2021",
    client: "Booking.com",
    role: "Lead Product Designer",
    categories: ["Design Systems", "Team Leadership", "UX Standards"],
    heroImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Create and scale a unified design system across a complex organization with 200+ designers, multiple platforms, and diverse product needs.

### Key Objectives
- Establish consistent UX standards across mobile apps
- Increase design and development efficiency
- Maintain flexibility for diverse product needs
- Ensure accessibility compliance at scale

## My Approach

### 1. Audit & Analysis
I began with a comprehensive audit of the existing design landscape:
- Cataloged UI patterns across iOS and Android apps
- Identified inconsistencies and redundancies
- Analyzed accessibility compliance issues
- Mapped existing design processes and pain points

![Design System Audit](https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. System Architecture
I co-designed a modular system architecture with:

- **Foundation**: Color, typography, spacing, and other base variables
- **Components**: Reusable UI elements with defined behaviors
- **Patterns**: Combinations of components for common user flows
- **Templates**: Pre-configured layouts for standard screens

### 3. Governance & Adoption
I established processes for system management and growth:

- Created a cross-functional design system team
- Developed contribution guidelines and review processes
- Built education and adoption resources
- Implemented metrics to track system usage and impact

## Results

The design system delivered significant organizational benefits:

- 40% reduction in design implementation time
- 35% reduction in accessibility issues across core flows
- 28% faster time-to-market for new features
- Consistent user experience across 200+ designer outputs

### Cultural Impact
- Shifted organization from artisanal to systematic design approach
- Created common design language across disciplines
- Established patterns for cross-functional collaboration

## Key Learnings

1. **Balance consistency with flexibility**: Too rigid systems get abandoned, too flexible systems fail to create consistency.
2. **Accessibility must be baked in**: Building accessibility into components from the start proved far more effective than retrofit approaches.
3. **Governance determines success**: The most critical factor in system adoption was clear, fair governance processes that balanced centralized control with team autonomy.
    `
  },
  "restaurant-product": {
    title: "Restaurants Product Experience",
    description: "Led UX for Restaurants in 52 countries with 1.2M MAU, simplifying discovery and engagement.",
    date: "2016-2018",
    client: "Booking.com",
    role: "Product Designer",
    categories: ["Product Design", "User Research", "International UX"],
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Design a restaurant discovery and booking experience that would work effectively across 52 countries, multiple languages, and diverse dining cultures.

### Key Objectives
- Create intuitive restaurant discovery for travelers
- Accommodate diverse dining customs and expectations
- Scale across 52 countries and 28 languages
- Build a platform capable of handling 1.2M monthly active users

## My Approach

### 1. Cross-Cultural Research
I conducted extensive research to understand dining across cultures:
- Field research in 8 key markets
- Remote testing with users from 15 countries
- Analysis of regional dining patterns and expectations
- Competitive analysis of local restaurant platforms

![Cultural Research](https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. Universal Design Patterns
I developed design patterns that worked across contexts:

- **Flexible discovery**: Methods for finding restaurants that accommodated different priorities across cultures
- **Adaptable information architecture**: Presenting restaurant details in ways relevant to local expectations
- **Contextual customization**: Region-specific features and content prioritization
- **Clear visual communication**: Reducing reliance on text through strong visual design

### 3. Localization Framework
I created a systematic approach to localization:

- Design components with text expansion/contraction in mind
- Visual design systems that respected cultural color associations
- Testing methodology for validating designs across markets
- Guidelines for local teams to customize appropriately

## Results

The restaurant product successfully scaled across markets:

- 1.2M monthly active users across 52 countries
- 35% higher engagement than previous restaurant features
- 4.6/5 average user satisfaction across markets
- Successful adaptation across 28 languages

### Business Impact
- Established restaurant discovery as a key differentiator
- Created reusable patterns for other location-based services
- Developed scalable approach to international product development

## Key Learnings

1. **Universal needs with local expression**: Core user needs were consistent across markets, but their expression varied significantly.
2. **Visual design transcends language barriers**: Strong visual design reduced translation issues and cognitive load for non-native speakers.
3. **Service design perspective essential**: The most critical aspects often involved the intersection of digital experience and physical service delivery.
    `
  },
  "os-app-design": {
    title: "OS-Level App Design",
    description: "Designed OS-level apps (Dialer, Camera & Search) for Fuel OS, launched with the CREO Mark 1 phone.",
    date: "2015-2016",
    client: "CREO",
    role: "Lead Designer",
    categories: ["Mobile OS Design", "App Design", "UX Research"],
    heroImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Design core OS-level applications (Dialer, Camera, Search) for a new Android-based mobile operating system that would differentiate the CREO Mark 1 smartphone in the competitive Indian market.

### Key Objectives
- Create distinctive yet intuitive core applications
- Balance innovation with familiarity for Android users
- Design for performance on mid-range hardware
- Establish a design language for the entire OS

## My Approach

### 1. Competitive Analysis & User Research
I conducted thorough research to understand the landscape:
- Analyzed core apps across Android, iOS, and custom Android skins
- User testing with a diverse set of Indian smartphone users
- Performance benchmarking on comparable hardware
- Identified pain points in existing OS implementations

![OS Design Research](https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. Design Strategy
I developed a design approach that balanced innovation and usability:

- **Distinctive visual identity**: Created a unique visual language while respecting Android conventions
- **Contextual intelligence**: Designed apps to adapt to user behavior patterns
- **Performance optimization**: Crafted UI that performed well on limited hardware
- **Progressive disclosure**: Allowed advanced features to be discovered gradually

### 3. Iterative Development
I implemented a rapid iteration cycle:

- Weekly prototype testing with users
- Close collaboration with engineering on performance optimization
- Gradual refinement of interaction patterns
- Regular stakeholder reviews to align with business goals

## Results

The OS-level apps successfully launched with the CREO Mark 1 phone:

- Featured prominently in product reviews and marketing
- 4.2/5 average user rating for core apps
- Established CREO as a design-forward company
- Created distinctive experience in a commoditized market

### Impact
- Established design patterns that influenced the broader Android ecosystem
- Created a cohesive experience across the entire operating system
- Delivered innovative features within technical constraints

## Key Learnings

1. **Balancing convention and innovation**: The most successful features respected user expectations while introducing thoughtful innovations.
2. **Performance is a design feature**: On constrained hardware, performance optimization was as important as visual design.
3. **Contextual adaptation**: Features that adapted to user behavior patterns received the strongest positive feedback.
    `
  },
  "driver-app": {
    title: "Driver App Localization",
    description: "Led UX strategy for localizing the driver app in 63 languages, increasing engagement by 300% and retention by 560%.",
    date: "2014-2015",
    client: "Taxi4Sure",
    role: "Product Designer",
    categories: ["Localization", "User Research", "App Design"],
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
## The Challenge

Design a localization strategy for a ride-hailing driver app that would work effectively for drivers across India with varying literacy levels, device capabilities, and language preferences.

### Key Objectives
- Make the app usable for drivers with limited literacy
- Support 63 languages and dialects across India
- Optimize for low-end Android devices
- Increase driver retention and engagement

## My Approach

### 1. Driver Research
I conducted extensive research with drivers across regions:
- Shadowed 35+ drivers during their workday
- Analyzed device usage patterns and technical capabilities
- Mapped language and literacy preferences
- Identified key pain points in the existing app

![Driver Research](https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80)

### 2. Visual Communication Strategy
I developed a visual-first approach to interface design:

- **Iconography system**: Created culturally appropriate visual communication system
- **Color coding**: Used color as a functional element for quick recognition
- **Voice interfaces**: Implemented audio cues and voice input options
- **Simplified workflows**: Reduced cognitive load through focused task flows

### 3. Localization Framework
I created a comprehensive localization system:

- Modular design components that worked across languages
- Extensive use of numbers and icons to reduce text dependency
- Audio feedback in local languages
- Regionally appropriate visual metaphors

## Results

The localized driver app dramatically improved performance metrics:

- 300% increase in driver engagement
- 560% improvement in driver retention
- Successfully implemented across 63 languages
- Reduced support calls by 45%

### Business Impact
- Enabled rapid expansion across diverse regional markets
- Created competitive advantage through superior driver experience
- Established pattern library for future localization efforts

## Key Learnings

1. **Design beyond literacy**: Visual design patterns could effectively communicate complex concepts regardless of literacy level.
2. **Cultural context matters**: Understanding regional norms and practices was essential for creating intuitive interfaces.
3. **Multimodal interaction**: Combining visual, audio, and haptic feedback created the most robust user experience.
    `
  }
};

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (id && projectsData[id as keyof typeof projectsData]) {
      setProject(projectsData[id as keyof typeof projectsData]);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 text-primary">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Project Hero */}
      <ProjectHero
        title={project.title}
        description={project.description}
        date={project.date}
        client={project.client}
        role={project.role}
        categories={project.categories}
        heroImage={project.heroImage}
      />

      {/* Project Content */}
      <section className="pt-16">
        <div className="container-tight">
          <MarkdownRenderer content={project.content} />
        </div>
      </section>

      {/* Project Navigation */}
      <section className="pt-20 border-t border-lightGray">
        <div className="container-tight">
          <div className="flex justify-between items-center">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center text-dark hover:text-primary">
                <ArrowLeft size={16} className="mr-2" />
                <span>All Projects</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center text-dark hover:text-primary">
                <span>Next Project</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
