import Image from "next/image";

export default function Beneficiaries() {
    const beneficiaryPrograms = [
        {
            id: 1,
            title: "Youth Education Program",
            image: "/placeholder.png",
            description: "Supporting underprivileged youth with educational resources, tutoring, and mentorship to help them succeed academically and develop life skills.",
            impact: "Over 500 students have improved their grades and attendance through our programs."
        },
        {
            id: 2,
            title: "Family Support Initiative",
            image: "/placeholder.png",
            description: "Assisting families facing financial hardship with essentials such as food, housing assistance, and employment resources.",
            impact: "Helped 250 families maintain housing stability and food security in the past year."
        },
        {
            id: 3,
            title: "Senior Care Network",
            image: "/placeholder.png",
            description: "Providing companionship, transportation, and wellness checks for elderly community members, helping them maintain independence and dignity.",
            impact: "Currently serving 150 seniors with weekly support services."
        },
        {
            id: 4,
            title: "Community Health Project",
            image: "/placeholder.png",
            description: "Offering health screenings, wellness workshops, and connecting community members with healthcare resources.",
            impact: "Facilitated access to healthcare services for over 300 underinsured individuals."
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Maria Thompson",
            program: "Youth Education Program",
            quote: "The mentorship program has completely transformed my daughter's outlook on education. Her confidence has grown tremendously, and she's now talking about college plans for the first time.",
        },
        {
            id: 2,
            name: "Robert Chen",
            program: "Family Support Initiative",
            quote: "When we were facing eviction after I lost my job, this organization was there for us. They helped us with temporary rent assistance and connected me with job opportunities.",
        },
        {
            id: 3,
            name: "Eleanor Washington",
            program: "Senior Care Network",
            quote: "Living alone can be isolating, but the volunteers who visit me bring so much joy into my week. They've become like family to me.",
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Who We Help</h1>

            <section className="bg-blue-100 p-6 rounded-lg">
                <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
                    Our nonprofit organization proudly serves diverse communities across the region,
                    with special focus on underserved populations including at-risk youth, low-income families,
                    seniors, and individuals facing health challenges.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Our Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {beneficiaryPrograms.map(program => (
                        <div key={program.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center rounded">
                                <p className="text-gray-500">Program Image</p>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                            <p className="mb-4">{program.description}</p>
                            <div className="bg-blue-50 p-3 rounded">
                                <p className="font-medium text-blue-800">Impact: {program.impact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Success Stories</h2>
                <div className="space-y-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="border-l-4 border-blue-500 pl-4 py-2">
                            <p className="italic mb-2">"{testimonial.quote}"</p>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.program} Participant</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-600 text-white p-6 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Help Us Expand Our Reach</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    With your support, we can help more people in our community. Every donation makes a difference in someone's life.
                </p>
                <a
                    href="/donate"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg inline-block"
                >
                    Donate Today
                </a>
            </section>
        </div>
    );
} 