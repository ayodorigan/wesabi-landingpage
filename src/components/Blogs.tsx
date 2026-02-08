import { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        title: '5 Tips for Managing Your Blood Pressure',
        excerpt: 'Small lifestyle changes can make a big difference in your cardiovascular health...',
        date: 'Feb 10, 2026',
        author: 'Dr. Jane Doe',
        image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: 'Understanding Your Prescription Labels',
        excerpt: 'What do those symbols and abbreviations actually mean? A guide for patients...',
        date: 'Feb 05, 2026',
        author: 'Pharm. John Smith',
        image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: 'Boosting Your Immune System Naturally',
        excerpt: 'Eat your way to better health with these nutrient-dense foods available at your local market...',
        date: 'Jan 28, 2026',
        author: 'Sarah Johnson',
        image: 'https://images.pexels.com/photos/1435737/pexels-photo-1435737.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

function Blogs() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
    }, []);

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

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#2BB673] text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Health Tips
                                    </div>
                                </div>

                                <div className="p-6">
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

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2BB673] transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-[#2BB673] font-bold text-sm hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="border-2 border-[#2BB673] text-[#2BB673] hover:bg-[#2BB673] hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300">
                            View All Posts
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
