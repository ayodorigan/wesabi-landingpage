import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/seo/SEO';

const categories = ['All', 'Immediate Help', 'Medication Safety', 'Chronic Care', 'Pharmacy Services'] as const;

const BlogListPage = () => {
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <SEO
                title="Health Blogs & Medical Tips"
                description="Stay informed with Wesabi Pharmacy's latest health tips, medication safety guides, and chronic care advice."
            />

            <div className="bg-[#2BB673] py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Health Knowledge Hub</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Expert pharmaceutical advice and wellness tips delivered to your screen.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 mb-20">
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                        ? 'bg-[#2BB673] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:max-w-xs">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-100 focus:border-[#2BB673] focus:outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-[#2BB673] font-bold text-xs uppercase tracking-wider mb-3">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2BB673] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <span className="flex items-center gap-1 text-[#2BB673] font-bold text-sm">
                                        Read Post <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No articles match your search criteria.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="text-[#2BB673] font-bold mt-2 hover:underline"
                        >
                            Show all articles
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogListPage;
