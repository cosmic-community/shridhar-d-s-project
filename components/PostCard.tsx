import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage ? (
          <div className="aspect-[16/9] overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={225}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-300 flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block self-start text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3 hover:bg-brand-100 transition-colors"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-brand-600 transition-colors">
            {title}
          </Link>
        </h2>
        <Link
          href={`/posts/${post.slug}`}
          className="mt-auto inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}