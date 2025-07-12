# Content Management System

This portfolio uses a markdown-based content management system for case studies and other content.

## Structure

### Case Studies
Case studies are stored in `src/content/case-studies/` as markdown files with frontmatter.

#### File Format
Each case study markdown file should follow this structure:

```markdown
---
id: 1
title: "Project Title"
subtitle: "Project Subtitle"
roles: ["Role 1", "Role 2", "Role 3"]
year: "2024"
client: "Client Name"
image: "/path/to/image.jpg"
heroImage: "/path/to/hero-image.jpg"
---

# Introduction

Introduction content goes here.

# Problem

Problem description goes here.

# Solution

Solution description goes here.

# Conclusion

Conclusion content goes here.
```

#### Required Frontmatter Fields
- `id`: Unique numeric identifier
- `title`: Project title
- `subtitle`: Project subtitle
- `roles`: Array of roles performed
- `year`: Project year
- `client`: Client name
- `image`: Thumbnail image path
- `heroImage`: Hero image path

#### Content Sections
The markdown content should be organized into these sections:
- `# Introduction` - Project overview
- `# Problem` - Problem statement
- `# Solution` - Solution description
- `# Conclusion` - Project outcomes

## Adding New Case Studies

1. Create a new markdown file in `src/content/case-studies/`
2. Use the next available ID number
3. Fill in all required frontmatter fields
4. Write content in the specified sections
5. Add images to the `public/` directory
6. The case study will automatically appear in the case studies list

## Content Loading

The content is loaded using the `contentLoader.ts` utility:

```typescript
import { loadAllCaseStudies, loadCaseStudyById, loadCaseStudyMetadata } from '@/utils/contentLoader';

// Load all case studies
const allStudies = loadAllCaseStudies();

// Load specific case study by ID
const study = loadCaseStudyById(1);

// Load metadata for listing
const metadata = loadCaseStudyMetadata();
```

## Routing

Case studies are accessible at:
- List: `/case-studies`
- Detail: `/case-study/:id`

The routing automatically handles loading and displaying content from markdown files.

## Benefits

- **Content Separation**: Content is separated from code
- **Easy Updates**: Non-technical users can update content
- **Version Control**: Content changes are tracked in git
- **Performance**: Content is loaded at build time
- **SEO Friendly**: Content is available for search engines 