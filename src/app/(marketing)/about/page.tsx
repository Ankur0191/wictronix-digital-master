import AnimationContainer from "@/components/global/animation-container";
import React from 'react';

const ChangeLogPage = () => {
    return (
        <div className="bg-black text-white min-h-screen px-6 py-20 space-y-24">
            {/* Hero Section */}
            <AnimationContainer delay={0.1}>
                <section className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-typing whitespace-nowrap overflow-hidden border-r-4 border-white pr-4">
                        Transforming Your Business with IT Innovation
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        We specialize in software development, automation, AI, and digital transformation to drive efficiency and growth for your business.
                    </p>
                    <button className="mt-8 px-6 py-3 text-black bg-white hover:bg-gray-300 transition rounded font-semibold">
                        Book Free Consultation Today
                    </button>
                </section>
            </AnimationContainer>

            {/* Services Section */}
            <AnimationContainer delay={0.2}>
                <section className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Innovation Drives Your Business</h2>
                    <p className="text-gray-400 mb-8">
                        Our solutions span across industries such as E-commerce, FinTech, Healthcare, and Startups.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Full-Stack Apps",
                            "Cloud Solutions",
                            "AI Agents",
                            "Automation",
                            "Custom ERP Software"
                        ].map((service, idx) => (
                            <div
                                key={idx}
                                className="p-5 bg-gray-800 rounded-lg hover:scale-105 transition transform duration-300"
                            >
                                <h3 className="text-xl font-semibold">{service}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimationContainer>

            {/* Process Section */}
            <AnimationContainer delay={0.3}>
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Simple 3-Step Process</h2>
                    <div className="space-y-6 text-left text-gray-300">
                        <div>
                            <h4 className="text-xl font-semibold text-white">1. Ideation & Discovery</h4>
                            <p>We understand your business goals, pain points, and opportunities.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-white">2. Design & Development</h4>
                            <p>Tailor-made solutions that are scalable and user-friendly.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-white">3. Launch & Optimization</h4>
                            <p>We launch, monitor, and fine-tune for continuous success.</p>
                        </div>
                    </div>
                </section>
            </AnimationContainer>

            {/* Team Section */}
            <AnimationContainer delay={0.4}>
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team Behind Your Success</h2>
                    <p className="text-gray-400">Experts in Agile, Cloud, and Full-Stack development—dedicated to your growth.</p>
                </section>
            </AnimationContainer>

            {/* Client Feedback */}
            <AnimationContainer delay={0.5}>
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Check Our Clients’ Stories</h2>
                    <p className="text-gray-400">Let us know what difference you want to make!</p>
                </section>
            </AnimationContainer>

            {/* FAQs Section */}
            <AnimationContainer delay={0.6}>
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What makes Wictronix different from other IT agencies?",
                                a: "We partner deeply with our clients, treat your success as our own, and work collaboratively to achieve your vision."
                            },
                            {
                                q: "What products and services does Wictronix offer?",
                                a: "Full-stack applications, AI solutions, automation, ERP software, and digital consulting tailored to your business needs."
                            },
                            {
                                q: "How does the pricing work?",
                                a: "Transparent, scalable pricing based on your goals. Choose from project-based or retainer models."
                            },
                            {
                                q: "How do I get started?",
                                a: "Book a free consultation. We’ll align on goals, plan, build, and launch your solution—together."
                            },
                            {
                                q: "Can you collaborate on custom development?",
                                a: "Absolutely! From mobile apps to AI-driven tools, our team can bring any custom solution to life."
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "Razorpay, credit cards, PayPal, and bank transfers—all secured and convenient."
                            },
                            {
                                q: "How do I contact Wictronix?",
                                a: "Email us at info@wictronix.digital or use the contact form on our website. We’re always here to help."
                            }
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-700 pb-4">
                                <h4 className="font-semibold text-white">{item.q}</h4>
                                <p className="text-gray-300">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimationContainer>

            {/* Portfolio Links */}
           <AnimationContainer delay={0.7}>
    <section className="text-center max-w-6xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Explore Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {[
                ["The Andaman Trip", "https://theandamantrip.com/"],
                ["Kampus Konnect", "https://kampuskonnect.in/"],
                ["Vedapurity", "https://www.vedapurity.com/"],
                ["Modiplywoods", "https://modiplywoods.in/"],
                ["Sourcewise", "https://thesourcewise.com/"],
                ["Broad India", "https://www.broadindia.com/"],
                ["Shreeambenggineering", "https://shreeambeengg.com/"],
                ["BCM Training", "https://bcmtraining.in/"],
                ["Bells NSS", "https://bellsnss.com.au/"],
                ["My Ayurveda Health", "https://myayurvedahealth.com/"],
                ["Unmaad", "https://unmaad.com/"],
                ["Akshay Mangal", "https://akshaymangal.in/"],
                ["Powersystemservices", "https://powersystemservices.in/"],
                ["Vensure Financial", "https://www.vensurefinancial.com/"],
                ["Arkalogi", "https://arkalogi.com/"],
                ["Bharat Farmlands", "http://bharatfarmlands.com/"],
                ["Aaruni Multispeciality Hospital", "https://aarunimultispecialityhospital.com/"]
            ].map(([name, url], i) => (
                <div
                    key={i}
                    className="group relative bg-gray-900 rounded-lg p-4 overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition duration-300"
                >
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-blue-400 group-hover:text-white transition"
                    >
                        {name}
                    </a>

                    {/* Iframe Preview (shown on hover) */}
                    <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg pointer-events-none">
                        <iframe
                            src={url}
                            className="w-full h-full rounded-lg scale-95 group-hover:scale-100 transition-transform duration-500 pointer-events-none"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
</AnimationContainer>

        </div>
    );
};

export default ChangeLogPage;
