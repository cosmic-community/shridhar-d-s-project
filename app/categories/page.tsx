import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const revalidate = 60

export const metadata = {
  title: "Categories — Shridhar D's Project",
  description: 'Browse all content categories',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Categories</h1>
        <p className="text-gray-600">
          {categories.length} {categories.length === 1 ? 'category' : 'categories'}
        </p>
      </header>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-5xl mb-4 block">🏷️</span>
          <p className="text-gray-500">No categories available yet.</p>
        </div>
      )}
    </div>
  )
}