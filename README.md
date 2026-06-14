# Shridhar D's Project

![App Preview](https://imgix.cosmicjs.com/0c544310-6805-11f1-a920-11d2c6e88013-autopilot-photo-1555066931-4365d14bab8c-1781450631611.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive content website powered by [Cosmic](https://www.cosmicjs.com). It showcases blog posts organized by categories with a clean, elegant reading experience.

## Features

- 📝 **Dynamic Blog Posts** — Browse all posts with featured images and rich content
- 🏷️ **Category Organization** — Filter and explore posts grouped by category
- 🎨 **Modern, Responsive UI** — Beautiful design built with Tailwind CSS
- ⚡ **Fast Server Rendering** — Next.js App Router with React Server Components
- 🔍 **Individual Post Pages** — Full content view for each post
- 📱 **Mobile-First Design** — Optimized for every screen size

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2ec768df7d41f21d09fe1d&clone_repository=6a2ec80edf7d41f21d09fe40)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Hi"

### Code Generation Prompt

> Build a Next.js application for a website called "Shridhar D's Project". The content is managed in Cosmic CMS with the following object types: categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Hi

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Cosmic** — Headless CMS for content management
- **imgix** — Image optimization

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (these are auto-configured when deploying via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with their categories
const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const { object } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com/docs) to manage:

- **Categories** — Organize posts with name and description
- **Posts** — Blog content with title, content, featured image, and category relationship

All content is fetched server-side using the Cosmic SDK with the `depth` parameter to resolve connected objects (like a post's category).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Netlify

1. Connect your repository
2. Set build command: `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->