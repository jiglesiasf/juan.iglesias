---
name: Personal Brand Site Enhancement
overview: Transform the existing CV site into a comprehensive personal brand platform by adding a blog/articles section, projects portfolio, enhanced SEO, and social media integration while maintaining the current professional CV structure.
todos:
  - id: data-structure
    content: Enhance cv.json with socialLinks, projects array, and blog metadata structure
    status: pending
  - id: blog-structure
    content: Set up Astro Content Collections for blog posts and create blog listing page
    status: pending
  - id: blog-detail
    content: Create individual blog post page template with markdown rendering
    status: pending
  - id: projects-page
    content: Build projects showcase page with filtering and project cards
    status: pending
  - id: components
    content: Create ArticleCard, ProjectCard, SocialLinks, and ShareButtons components
    status: pending
  - id: navigation
    content: Update Nav component to include Blog and Projects links
    status: pending
  - id: seo-meta
    content: Add Open Graph, Twitter Cards, and structured data for SEO
    status: pending
  - id: rss-sitemap
    content: Generate RSS feed and sitemap.xml for better discoverability
    status: pending
  - id: styling
    content: Enhance global.css with blog typography and new component styles
    status: pending
---

# Personal Brand Site Enhancement Plan

## Current State

- Astro-based static site with CV data in JSON format
- Dark theme with modern UI components
- Deployed to GitHub Pages
- Sections: Values, Experience, iOS Development, Education, Certifications, Languages, Skills, Contact

## Goals

1. **Enhanced Professional CV** - Keep and improve existing CV presentation
2. **Thought Leadership** - Add blog/articles section for content sharing
3. **Portfolio Showcase** - Add projects section to highlight work
4. **SEO & Social Sharing** - Improve discoverability and shareability
5. **Social Media Integration** - Add links to professional profiles

## Implementation Plan

### 1. Data Structure Enhancements

- **File**: `src/data/cv.json`
  - Add `socialLinks` array (LinkedIn, Twitter/X, GitHub, etc.)
  - Add `projects` array with structure:
    - title, description, url, image, tags, date, highlights
  - Add `articles` array (or create separate `blog.json`):
    - title, slug, date, excerpt, content (markdown path), tags, featured
  - Add `meta` object for SEO (og:image, keywords, etc.)

### 2. New Pages

- **File**: `src/pages/blog/index.astro`
  - Blog listing page with article cards
  - Filter by tags, search functionality
  - Pagination support

- **File**: `src/pages/blog/[slug].astro`
  - Individual blog post template
  - Markdown content rendering
  - Related articles, social sharing buttons
  - Reading time, date formatting

- **File**: `src/pages/projects/index.astro`
  - Projects grid/list view
  - Filter by tags/technologies
  - Project cards with images, descriptions, links

### 3. Component Enhancements

- **File**: `src/components/Nav.astro`
  - Add "Blog" and "Projects" to navigation links
  - Update mobile menu accordingly

- **New**: `src/components/ArticleCard.astro`
  - Reusable card component for blog posts
  - Shows title, excerpt, date, tags, reading time

- **New**: `src/components/ProjectCard.astro`
  - Project showcase card with image, title, description, tags, links

- **New**: `src/components/SocialLinks.astro`
  - Social media icon links component
  - Add to hero section and footer

- **New**: `src/components/ShareButtons.astro`
  - Social sharing buttons for blog posts (Twitter, LinkedIn, etc.)

### 4. Content Management

- **Directory**: `src/content/blog/`
  - Markdown files for blog posts (e.g., `2024-01-15-my-post.md`)
  - Use Astro Content Collections for type safety and organization

- **Directory**: `src/content/projects/`
  - Markdown or JSON files for project details
  - Or keep in `cv.json` projects array

### 5. SEO & Meta Enhancements

- **File**: `src/pages/index.astro`
  - Add Open Graph meta tags
  - Add Twitter Card meta tags
  - Add structured data (JSON-LD) for Person/Profile
  - Add canonical URLs
  - Add meta keywords and description

- **File**: `src/pages/blog/[slug].astro`
  - Dynamic meta tags per article
  - Article structured data (Schema.org)
  - Open Graph images per post

### 6. Styling Updates

- **File**: `src/styles/global.css`
  - Add styles for blog post typography
  - Add styles for project cards
  - Add social links styling
  - Ensure responsive design for new sections

### 7. Configuration

- **File**: `astro.config.mjs`
  - Configure Astro Content Collections for blog
  - Add markdown support with plugins (remark/rehype)
  - Configure RSS feed generation

- **New**: `src/config.ts` or `src/config.js`
  - Site-wide configuration (site name, description, social links, etc.)

### 8. Additional Features

- **RSS Feed**: `src/pages/rss.xml.ts`
  - Generate RSS feed for blog posts

- **Sitemap**: `src/pages/sitemap.xml.ts`
  - Generate sitemap for SEO

- **Search**: Consider adding client-side search for blog posts (optional)

## File Structure

```
src/
├── components/
│   ├── ArticleCard.astro (new)
│   ├── ProjectCard.astro (new)
│   ├── SocialLinks.astro (new)
│   ├── ShareButtons.astro (new)
│   └── ... (existing components)
├── content/
│   ├── blog/ (new)
│   │   └── *.md files
│   └── projects/ (new, optional)
├── pages/
│   ├── index.astro (enhance)
│   ├── blog/
│   │   ├── index.astro (new)
│   │   └── [slug].astro (new)
│   └── projects/
│       └── index.astro (new)
├── data/
│   └── cv.json (enhance)
├── styles/
│   └── global.css (enhance)
└── config.ts (new)
```

## Dependencies to Add

- `@astrojs/mdx` - For MDX support (optional, if using MDX)
- `@astrojs/rss` - For RSS feed generation
- `remark` / `rehype` plugins - For markdown processing enhancements
- `date-fns` - For date formatting

## Implementation Order

1. Update data structure (`cv.json`) with social links and projects
2. Create blog content structure and first sample post
3. Build blog listing and detail pages
4. Create projects page
5. Add social links component
6. Enhance SEO and meta tags
7. Add RSS feed and sitemap
8. Update navigation and styling
9. Test and refine

