import { useState, useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const categories = ['All', 'Immediate Help', 'Medication Safety', 'Chronic Care', 'Pharmacy Services'] as const;
type Category = typeof categories[number];

function Blogs() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [visiblePosts, setVisiblePosts] = useState(6);
    const sectionRef = useRef<HTMLDivElement>(null);

    const filteredPosts = blogPosts.filter(
        (post) => activeCategory === 'All' || post.category === activeCategory
    );

    const displayedPosts = filteredPosts.slice(0, visiblePosts);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [activeCategory]);

    return (
        <section id="blogs" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={sectionRef} className="opacity-0 transition-all duration-1000">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Latest from our Blog
                        </h2>
                        <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Stay informed with our latest health tips, medical news, and pharmacy updates.
                        </p>
                    </div>

                    {/* Categories Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mr-4 text-gray-500 font-semibold hidden md:flex">
                            <Filter className="w-4 h-4" />
                            <span>Filter:</span>
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setVisiblePosts(6);
                                }}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${activeCategory === cat
                                    ? 'bg-[#2BB673] border-[#2BB673] text-white shadow-lg scale-105'
                                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#2BB673] hover:text-[#2BB673]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[400px]">
                        {displayedPosts.map((post, index) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                            >
                                <div className="relative h-48 overflow-hidden shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#2BB673] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-[#2BB673]" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3 text-[#2BB673]" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2BB673] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#2BB673] font-bold text-sm group-hover:gap-3 transition-all mt-auto w-fit">
                                        Read Full Post
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
                        {visiblePosts < filteredPosts.length && (
                            <button
                                onClick={() => setVisiblePosts((prev) => prev + 6)}
                                className="bg-white border-2 border-[#2BB673] text-[#2BB673] hover:bg-[#2BB673] hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Show More Articles
                            </button>
                        )}
                        <Link
                            to="/blogs"
                            className="bg-[#2BB673] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                        >
                            Visit Full Blog Page
                        </Link>
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-500 text-lg">No articles found in this category yet.</p>
                            <button
                                onClick={() => setActiveCategory('All')}
                                className="text-[#2BB673] font-bold mt-4 hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Blogs;


