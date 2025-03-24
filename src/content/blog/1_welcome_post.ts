import { BlogPost } from '../../types/content';

const post: BlogPost = {
  id: "1_welcome_post",
  title: "Welcome to My Portfolio",
  description: "An introduction to my work and approach to design.",
  date: "2024-03-24",
  content: `
# Welcome to My Portfolio

I'm excited to share my journey in product design and showcase some of the projects I've worked on. This portfolio represents my experience in creating user-centered solutions that drive business value.

## My Approach

I believe in a data-driven, user-centered approach to design. Every project starts with understanding the user's needs and business objectives, followed by iterative design and testing to create the best possible solution.

## Featured Projects

In this portfolio, you'll find examples of my work in:
- AI-driven personalization
- Recommendation systems
- Design systems
- Mobile UX
- Payment systems

## Get in Touch

I'm always interested in connecting with fellow designers and potential collaborators. Feel free to reach out through the contact form or connect with me on LinkedIn.
  `,
  tags: ["Introduction", "Design Process", "Portfolio"],
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};

export default post; 