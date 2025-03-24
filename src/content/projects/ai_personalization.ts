import { Project } from '../../types/content';

const project: Project = {
  id: "ai-personalization",
  title: "AI-Driven Personalization Platform",
  description: "Led UX strategy for a platform serving 94 teams, enabling predictive & generative AI capabilities that drove €200M+ revenue.",
  date: "2020-2023",
  client: "Booking.com",
  role: "Lead Product Designer",
  categories: ["AI/ML Design", "UX Strategy", "Personalization"],
  heroImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  featured: true,
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
- The importance of data quality and feedback loops
- Best practices for A/B testing ML models
- How to evaluate personalization effectiveness

## Results

The platform successfully launched and achieved significant impact:

- €200M+ in revenue uplift through improved personalization
- 94+ product teams actively using the platform
- 3x increase in personalization experiments
- 40% reduction in time to implement new personalization features

### Key Metrics
- 83% of teams reported improved user engagement
- 67% reduction in ML model deployment time
- 92% of personalization experiments showed positive results
- 4.2/5 average user satisfaction score

## Key Learnings

1. **Human-Machine Collaboration**: The most successful features were those that enhanced human capabilities rather than replacing them.
2. **Data Quality**: The quality of training data and feedback loops was as important as the ML models themselves.
3. **User Trust**: Building trust through transparency and control was crucial for user acceptance.
4. **Cross-functional Alignment**: Regular workshops and shared tools helped maintain alignment across technical and non-technical teams.
  `
};

export default project; 