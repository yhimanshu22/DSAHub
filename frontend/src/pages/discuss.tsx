import { useState } from "react"
import { FaTimes } from "react-icons/fa";


export const Discuss = () => {

    const [showGuidelines, setShowGuidelines] = useState(true);

    return (

        <div className="bg-gray-800 min-h-screen p-6 text-gray-300">
            {/* Discussion Categories */}
            <div className="mb-2">
                <div className="flex flex-wrap gap-4">
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Interview Questions
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Interview Experience
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Compensation
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Career
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Study Guide
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        General Discussion
                    </div>
                    <div className="p-4 bg-gray-700 text-gray-300 rounded-lg shadow-sm flex-1">
                        Support and Feedback
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 p-1 text-gray-300">
                {showGuidelines && (
                    <div className="relative mb-2 bg-gray-700 p-1 rounded-lg">
                        <button
                            onClick={() => setShowGuidelines(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                        >
                            <FaTimes />
                        </button>
                        <p className="text-center">Please take a minute to read the community guidelines.</p>
                    </div>
                )}
            </div>
            <div className="flex flex-row space-x-6 p-4 ">
                <div className="flex-1 space-y-4">
                    <div className="p-6 bg-gray-700 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Discuss 1</h2>
                        <p className="text-gray-300">Content for the first discussion goes here.</p>


                        <hr className="my-4 border-gray-600" />


                        <h2 className="text-xl font-semibold mb-2">Discuss 2</h2>
                        <p className="text-gray-300">Another discussion content goes here.</p>
                        <hr className="my-4 border-gray-600" />
                        <h2 className="text-xl font-semibold mb-2">Discuss 1</h2>
                        <p className="text-gray-300">Content for the first discussion goes here.</p>


                        <hr className="my-4 border-gray-600" />

                        <h2 className="text-xl font-semibold mb-2">Discuss 1</h2>
                        <p className="text-gray-300">Content for the first discussion goes here.</p>


                        <hr className="my-4 border-gray-600" />

                        <h2 className="text-xl font-semibold mb-2">Discuss 1</h2>
                        <p className="text-gray-300">Content for the first discussion goes here.</p>


                        <hr className="my-4 border-gray-600" />

                        <h2 className="text-xl font-semibold mb-2">Discuss 1</h2>
                        <p className="text-gray-300">Content for the first discussion goes here.</p>


                        <hr className="my-4 border-gray-600" />
                    </div>
                </div>
                <div className="w-1/3 mt-1 bg-gray-700 rounded-lg ">

                    <div className="flex flex-wrap gap-2  mt-1 p-3">
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Google</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Amazon</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Microsoft</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Apple</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Atlassian</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Salesforce</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Nomura</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">TCS</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Wipro</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full">Reliance</span>
                    </div>
                </div>
            </div>




        </div>
    );
}
