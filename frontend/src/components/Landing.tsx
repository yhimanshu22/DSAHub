const courses = [
    { id: "1", title: "Course 1", description: "Description of course 1." },
    { id: "2", title: "Course 2", description: "Description of course 2." },
    { id: "3", title: "Course 3", description: "Description of course 3." },
    { id: "4", title: "Course 4", description: "Description of course 4." },
    { id: "5", title: "Course 5", description: "Description of course 5." }
];

const contests = [
    { id: "1", title: "Contest 1", details: "Details about contest 1." },
    { id: "2", title: "Contest 2", details: "Details about contest 2." },
    { id: "3", title: "Contest 3", details: "Details about contest 3." },
    { id: "4", title: "Contest 4", details: "Details about contest 4." },
    { id: "5", title: "Contest 5", details: "Details about contest 5." },
    { id: "6", title: "Contest 6", details: "Details about contest 6." },
    { id: "7", title: "Contest 7", details: "Details about contest 7." },
    { id: "8", title: "Contest 8", details: "Details about contest 8." },
    { id: "9", title: "Contest 9", details: "Details about contest 9." },
    { id: "10", title: "Contest 10", details: "Details about contest 10." },
    { id: "11", title: "Contest 11", details: "Details about contest 11." },
    { id: "12", title: "Contest 12", details: "Details about contest 12." },
    { id: "13", title: "Contest 13", details: "Details about contest 13." },
    { id: "14", title: "Contest 14", details: "Details about contest 14." },
    { id: "15", title: "Contest 15", details: "Details about contest 15." },
    { id: "16", title: "Contest 16", details: "Details about contest 16." },
    { id: "17", title: "Contest 17", details: "Details about contest 17." },
    { id: "18", title: "Contest 18", details: "Details about contest 18." },
    { id: "19", title: "Contest 19", details: "Details about contest 19." },
    { id: "20", title: "Contest 20", details: "Details about contest 20." }
];

export const Landing = () => {
    return (
        <div className="flex bg-gray-800 text-gray-200">
            {/* Left Side: Contest Updates */}
            <div className="w-2/3 p-4">
                <h2 className="text-2xl font-bold mb-4">Contest Updates</h2>
                <div className="space-y-4">
                    {contests.map(contest => (
                        <div key={contest.id} className="bg-gray-700 border rounded-lg shadow-sm m-4 border-r border-gray-600 text-gray-200 focus:outline-none p-4">
                            <h3 className="text-xl font-medium">{contest.title}</h3>
                            <p className="text-gray-700">{contest.details}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vertical Line */}
            <div className="border-l border-gray-600"></div>

            {/* Right Side: Course Cards */}
            <div className="w-1/3 p-4">
                <h2 className="text-2xl font-bold mb-4">Courses</h2>
                <div className="space-y-4">
                    {courses.map(course => (
                        <div key={course.id} className="bg-gray-700 border rounded-lg shadow-sm m-4 border-r border-gray-600 text-gray-200 focus:outline-none p-4">

                            <h3 className="text-xl font-medium">{course.title}</h3>
                            <p className="text-gray-700">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
