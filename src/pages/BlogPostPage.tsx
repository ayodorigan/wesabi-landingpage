import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, MessageCircle } from 'lucide-react';

import { blogPosts } from '../data/blogData';
import SEO from '../components/seo/SEO';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
                <Link to="/blogs" className="text-[#2BB673] font-bold hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                type="article"
            />

            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2BB673] font-medium mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to all articles
                </Link>

                <header className="mb-12">
                    <span className="bg-[#2BB673]/10 text-[#2BB673] text-sm font-bold px-4 py-1.5 rounded-full mb-6 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 border-y border-gray-100 py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2BB673] flex items-center justify-center text-white font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-sm leading-none">{post.author}</p>
                                <p className="text-xs mt-1">Pharmacist / Health Expert</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm ml-auto">
                            <Calendar className="w-4 h-4 text-[#2BB673]" />
                            {post.date}
                        </div>
                    </div>
                </header>

                <div className="mb-12 rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[500px]">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line mb-16">
                    {post.content}
                </article>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions about this treatment?</h3>
                        <p className="text-gray-600 mb-4 max-w-md">
                            Speak directly with our pharmacists via WhatsApp or visit us at the pharmacy for a free consultation.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#2BB673] text-white font-bold px-8 py-3 rounded-full hover:bg-[#24a565] transition-all shadow-lg flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </button>
                            <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-full hover:border-[#2BB673] hover:text-[#2BB673] transition-all">
                                Share Article
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block shrink-0">
                        <Share2 className="w-24 h-24 text-gray-100" />
                    </div>
                </div>

                <div className="mt-20 pt-12 border-t border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-8">Related Articles</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts
                            .filter(p => p.category === post.category && p.id !== post.id)
                            .slice(0, 2)
                            .map(related => (
                                <Link key={related.id} to={`/blog/${related.id}`} className="group">
                                    <div className="h-40 rounded-2xl overflow-hidden mb-4">
                                        <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    </div>
                                    <h5 className="font-bold text-gray-900 group-hover:text-[#2BB673] transition-colors line-clamp-2">
                                        {related.title}
                                    </h5>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
