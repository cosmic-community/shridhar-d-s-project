// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content) || post.content || ''
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Posts
      </Link>

      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-4 hover:bg-brand-100 transition-colors"
        >
          {getMetafieldValue(category.metadata?.name) || category.title}
        </Link>
      )}

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>

      {featuredImage && (
        <div className="rounded-xl overflow-hidden mb-8 bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {content ? (
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-gray-500">No content available.</p>
      )}
    </article>
  )
}