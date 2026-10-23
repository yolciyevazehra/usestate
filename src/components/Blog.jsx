import React from 'react'

const posts = [
    {
        id: 1,
        image: "https://readymadeui.com/images/food.webp",
        title: "10 Pasta Recipes You Must Try",
        date: "08 April 2024",
        link: "#"
    },
    {
        id: 2,
        image: "https://readymadeui.com/images/food11.webp",
        title: "Healthy Eating Made Simple",
        date: "28 March 2024",
        link: "#"
    },
    {
        id: 3,
        image: "https://readymadeui.com/images/food22.webp",
        title: "Futuristic Food Tech Trends",
        date: "15 March 2024",
        link: "#"
    },
    {
        id: 4,
        image: "https://readymadeui.com/images/food33.webp",
        title: "Fast Food Favorites Make at Home",
        date: "05 March 2024",
        link: "#"
    },
    {
        id: 5,
        image: "https://readymadeui.com/images/food44.webp",
        title: "Bowl Meals for Busy Days",
        date: "26 February 2024",
        link: "#"
    },
    {
        id: 6,
        image: "https://readymadeui.com/images/food55.webp",
        title: "Desserts That Spark Joy",
        date: "12 February 2024",
        link: "#"
    }
];

function Blog() {
    return (
        <section className="mt-6 px-4 md:px-8 mb-8">
            <div className="max-w-4xl mx-auto lg:max-w-6xl">
                <div className="mb-12 max-w-3xl mx-auto text-center md:mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
                        Latest Blog Posts
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Explore our latest articles, insights, and practical tips designed to help you stay updated,
                        improve your workflow, and build better products with confidence.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((items) => (
                        <article
                            key={items.id}
                            className="bg-white border border-slate-300 shadow-sm p-4 rounded-xl"
                        >

                            <div className="bg-gray-50 aspect-22/13 rounded-xl overflow-hidden">
                                <img
                                    src={items.image}
                                    alt={items.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-base font-semibold text-slate-900 mb-3">
                                    {items.title}
                                </h3>
                                <p className="text-slate-600 text-sm font-medium">
                                    {items.date}
                                </p>
                                <a
                                    href={items.link}
                                    className="inline-block mt-6 py-1.5 px-3 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    See more
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog