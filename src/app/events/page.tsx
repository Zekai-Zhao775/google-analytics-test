export default function Events() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Annual Charity Gala",
            date: "June 15, 2024",
            time: "6:00 PM - 10:00 PM",
            location: "Grand Hotel, Downtown",
            description: "Join us for an evening of celebration and fundraising as we highlight our achievements from the past year and raise funds for upcoming projects."
        },
        {
            id: 2,
            title: "Community Food Drive",
            date: "July 8, 2024",
            time: "9:00 AM - 3:00 PM",
            location: "Central Park",
            description: "Help us collect non-perishable food items for local families in need. Volunteers needed for collection, sorting, and distribution."
        },
        {
            id: 3,
            title: "Youth Mentorship Workshop",
            date: "July 22, 2024",
            time: "10:00 AM - 2:00 PM",
            location: "Community Center",
            description: "A workshop for our youth mentorship program participants, focusing on career development and educational opportunities."
        }
    ];

    const pastEvents = [
        {
            id: 4,
            title: "Spring Cleanup Initiative",
            date: "April 10, 2024",
            location: "Various Locations",
            description: "We partnered with local businesses to clean up parks and public spaces throughout the city."
        },
        {
            id: 5,
            title: "Education Fundraiser",
            date: "March 25, 2024",
            location: "City Library",
            description: "Successfully raised funds to provide educational materials and scholarships for underprivileged students."
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Events</h1>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Upcoming Events</h2>
                <div className="space-y-6">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-gray-600"><span className="font-medium">Date:</span> {event.date}</p>
                                    <p className="text-gray-600"><span className="font-medium">Time:</span> {event.time}</p>
                                    <p className="text-gray-600"><span className="font-medium">Location:</span> {event.location}</p>
                                </div>
                            </div>
                            <p className="mb-4">{event.description}</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                                Register for Event
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-blue-700">Past Events</h2>
                <div className="space-y-6">
                    {pastEvents.map(event => (
                        <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-2"><span className="font-medium">Date:</span> {event.date}</p>
                            <p className="text-gray-600 mb-2"><span className="font-medium">Location:</span> {event.location}</p>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Want to Host or Sponsor an Event?</h2>
                <p className="mb-6">We're always looking for partners to help us expand our reach and impact. If you're interested in hosting or sponsoring an event, please get in touch with our events team.</p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
                    Contact Our Events Team
                </button>
            </section>
        </div>
    );
} 