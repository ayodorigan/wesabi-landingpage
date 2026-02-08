import { X, Calendar, User, Share2 } from 'lucide-react';
import { BlogPost } from '../data/blogData';
import { useEffect } from 'react';

interface BlogModalProps {
    post: BlogPost | null;
    isOpen: boolean;
    onClose: () => void;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!post || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-scale-in">
                {/* Header/Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md text-gray-900 rounded-full hover:bg-[#2BB673] hover:text-white transition-all shadow-lg"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="overflow-y-auto flex-1">
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-96">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <span className="bg-[#2BB673] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                                {post.category}
                            </span>
                            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                {post.title}
                            </h2>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 md:p-10">
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#2BB673]" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-[#2BB673]" />
                                {post.author}
                            </div>
                            <button className="flex items-center gap-2 hover:text-[#2BB673] transition-colors ml-auto">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                            {post.content}
                        </div>

                        <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-1">Have questions about this topic?</h4>
                                <p className="text-gray-600">Our pharmacists are available for a free consultation.</p>
                            </div>
                            <button className="bg-[#2BB673] text-white font-bold px-8 py-3 rounded-full hover:bg-[#24a565] transition-all shadow-lg hover:shadow-xl">
                                Consult Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
