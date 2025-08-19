const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <main className="lg:col-span-2 space-y-10">
                        {/* Hero Section */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                About <span className="text-blue-600">Us</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                                We help ambitious teams invent and ship digital products — from discovery to scale. Our work blends research, elegant design, and pragmatic engineering so our partners can move faster and build with confidence.
                            </p>
                        </div>

                        {/* Mission Section */}
                        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To create digital experiences that are useful, inclusive, and delightful — and to build long-term partnerships that grow value for people and businesses.
                            </p>
                        </section>

                        {/* Values Section */}
                        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                                Our Values
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 text-lg">People first:</strong>
                                        <p className="text-gray-600 mt-1">Start with human needs, not features.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 text-lg">Craftsmanship:</strong>
                                        <p className="text-gray-600 mt-1">High-quality work, iterated quickly.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 text-lg">Radical clarity:</strong>
                                        <p className="text-gray-600 mt-1">Communicate openly, ship measurable outcomes.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How We Work Section */}
                        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                                How We Work
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We pair product discovery sprints with rapid prototyping. Early user feedback guides product decisions and reduces risk — then our engineering team drives the build with a focus on performance, accessibility, and maintainability.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                                    Talk to us
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#team" className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 font-medium">
                                    Meet the team
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </section>

                        {/* Impact Section */}
                        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                            <p className="text-blue-100 leading-relaxed">
                                In the last 5 years we've helped startups and enterprises launch products that reached millions of users, improved conversion, and reduced operating costs through better design and automation.
                            </p>
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* At a Glance */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">At a Glance</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <span className="text-gray-700">Projects delivered</span>
                                    <span className="font-bold text-blue-600 text-xl">120+</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <span className="text-gray-700">Team members</span>
                                    <span className="font-bold text-green-600 text-xl">45</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                    <span className="text-gray-700">Founded</span>
                                    <span className="font-bold text-purple-600 text-xl">2019</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 id="team" className="text-xl font-bold text-gray-900 mb-6">Leadership</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-bold text-gray-900">Asha Mehta</p>
                                    <p className="text-sm text-gray-600">CEO & Co‑founder, product strategy</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <p className="font-bold text-gray-900">Ravi Kapoor</p>
                                    <p className="text-sm text-gray-600">CTO, engineering & reliability</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <p className="font-bold text-gray-900">Lin Eze</p>
                                    <p className="text-sm text-gray-600">Head of Design, UX & brand</p>
                                </div>
                            </div>
                        </div>

                        {/* Milestones */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Milestones</h3>
                            <div className="space-y-4">
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-4">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="font-bold text-blue-600">2019</p>
                                        <p className="text-sm text-gray-600">Founded with a small studio team in Bangalore</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-4">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="font-bold text-green-600">2021</p>
                                        <p className="text-sm text-gray-600">Scaled to 20+ engineers and designers; first enterprise partner</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center mr-4">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-purple-600">2024</p>
                                        <p className="text-sm text-gray-600">Launched Brightline Insights — a data product for product teams</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div id="contact" className="bg-gray-900 rounded-2xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Contact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <p className="text-gray-300">hello@brightline.example</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <p className="text-gray-300">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default About;