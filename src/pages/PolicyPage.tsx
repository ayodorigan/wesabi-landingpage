import { useState } from 'react';
import { Shield, FileText, ChevronRight, Lock, Scale, Info } from 'lucide-react';

const PolicyPage = () => {
    const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header section */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Legal <span className="text-[#2BB673]">Information</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Everything you need to know about how we protect your information and our terms of use.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200">
                        <button
                            onClick={() => setActiveTab('privacy')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'privacy'
                                ? 'bg-[#2BB673] text-white shadow-lg shadow-green-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Shield className={`w-5 h-5 ${activeTab === 'privacy' ? 'animate-pulse' : ''}`} />
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setActiveTab('terms')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'terms'
                                ? 'bg-[#2BB673] text-white shadow-lg shadow-green-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <FileText className={`w-5 h-5 ${activeTab === 'terms' ? 'animate-pulse' : ''}`} />
                            Terms of Service
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-500">
                    {activeTab === 'privacy' ? (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-[#2BB673]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                            </div>

                            <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <Info className="w-5 h-5 text-[#2BB673]" /> 1. Introduction
                                    </h3>
                                    <p className="leading-relaxed">
                                        Wesabi Pharmacy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and pharmaceutical services.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 2. Information We Collect
                                    </h3>
                                    <p className="leading-relaxed">
                                        We may collect personal information that you provide to us, including but not limited to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#2BB673]">
                                        <li>Name, email address, and phone number.</li>
                                        <li>Delivery address for pharmaceutical products.</li>
                                        <li>Prescription information when provided for order fulfillment.</li>
                                        <li>Health-related information you share during consultations.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 3. How We Use Your Information
                                    </h3>
                                    <p className="leading-relaxed">
                                        The information we collect is used to:
                                    </p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#2BB673]">
                                        <li>Process and deliver your medical orders accurately.</li>
                                        <li>Provide professional pharmaceutical consultations.</li>
                                        <li>Improve our services and user experience.</li>
                                        <li>Communicate with you regarding health alerts or orders.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 4. Data Security
                                    </h3>
                                    <p className="leading-relaxed">
                                        We implement industry-standard security measures to protect your sensitive health and personal data from unauthorized access, disclosure, or misuse.
                                    </p>
                                </section>

                                <section className="pt-6 border-t border-gray-100 italic text-sm text-gray-500">
                                    Last Updated: February 2026
                                </section>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-[#2BB673]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
                            </div>

                            <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <Info className="w-5 h-5 text-[#2BB673]" /> 1. Acceptance of Terms
                                    </h3>
                                    <p className="leading-relaxed">
                                        By accessing or using Wesabi Pharmacy's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 2. Prescription Policy
                                    </h3>
                                    <p className="leading-relaxed">
                                        Wesabi Pharmacy strictly adheres to pharmaceutical regulations. Prescription-only medications will only be dispensed upon presentation of a valid prescription from a licensed medical practitioner.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 3. Professional Advice
                                    </h3>
                                    <p className="leading-relaxed">
                                        While our pharmacists provide professional advice, the information on our website is for informational purposes only and is not a substitute for professional medical diagnosis or treatment.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                                        <ChevronRight className="w-5 h-5 text-[#2BB673]" /> 4. Delivery Services
                                    </h3>
                                    <p className="leading-relaxed">
                                        Delivery times are estimates. We strive to deliver all orders within the promised timeframe, but delays may occur due to unforeseen circumstances.
                                    </p>
                                </section>

                                <section className="pt-6 border-t border-gray-100 italic text-sm text-gray-500">
                                    Last Updated: February 2026
                                </section>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PolicyPage;
