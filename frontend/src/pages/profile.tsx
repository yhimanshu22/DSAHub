export const Profile = () => {
    return (
        <div className="flex h-screen bg-gray-800 overflow-auto ">
            {/* Left Side: Profile Introduction */}
            <div className="w-1/3 bg-gray-700 text-white shadow-sm rounded-lg p-4 m-4 border-r border-gray-600 flex flex-col">
                <div className="mb-4">
                    <div className="text-xl font-semibold">
                        Himanshu Yadav
                    </div>
                    <p className="font-light text-md ml-1">yhimanshu220456</p>
                </div>
                <div className="mb-4 flex space-x-1">
                    <p className="font-bold">Rank:</p>
                    <p>8,11,399</p>
                </div>
                <div className="mb-4">
                    <p>Currently Pursuing B.Tech in Civil Engineering at IIT Kanpur, with a keen interest in exploring the realms of Machine Learning and Deep Learning.</p>
                    <button className="py-1 mt-1 ml-10 px-10 bg-green-400 text-white rounded-lg hover:bg-green-600">
                        Edit Profile
                    </button>
                </div>
                <div className="mb-4">
                    <p>India</p>
                    <p>IIT Kanpur</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Blog:</p>
                    <a href="https://medium.com/@yhimanshu22" className="text-blue-400 hover:underline">medium.com/@yhimanshu22</a>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Social Links:</p>
                    <p>Twitter: <a href="https://twitter.com/yhimanshu22" className="text-blue-400 hover:underline">yhimanshu22</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/yhimanshu22456" className="text-blue-400 hover:underline">yhimanshu22456</a></p>
                    <p>GitHub: <a href="https://github.com/yhimanshu22" className="text-blue-400 hover:underline">yhimanshu22</a></p>
                </div>
            </div>

            {/* Right Side: Content Sections */}
            <div className="w-2/3 p-4 overflow-auto">
                {/* First Section: Problems Solved and Badges Earned */}
                <div className="flex flex-row mb-4 space-x-4">
                    <div className="flex-1 p-4 bg-gray-700 text-white shadow-sm rounded-lg h-auto min-h-48">
                        Problems Solved: <span className="font-bold">10</span> out of 20 problems
                    </div>
                    <div className="flex-1 p-4 bg-gray-700 text-white shadow-sm rounded-lg h-auto min-h-48">
                        Badges Earned: <span className="font-bold">5</span>
                    </div>
                </div>

                {/* Second Section: Submission Status */}
                <div className="mb-4 p-4 bg-gray-700 text-white shadow-sm rounded-lg h-auto min-h-48">
                    <h2 className="text-lg font-semibold mb-2">10 submissions in last year</h2>
                    <div className="bg-green-100 p-4 h-48 rounded">
                        Green structure indicating submission status.
                    </div>
                </div>

                {/* Third Section: List of Problems Solved */}
                <div className="p-4 bg-gray-700 text-white shadow-sm rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">List of Problems Solved</h2>
                    <ul className="list-none p-0 m-0">
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 1
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 2
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 3
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 4
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 5
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 6
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 7
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 8
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 9
                        </li>
                        <li className="py-2 px-4 odd:bg-gray-700 even:bg-gray-600 border-0 shadow-none">
                            Problem 10
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    );
};
