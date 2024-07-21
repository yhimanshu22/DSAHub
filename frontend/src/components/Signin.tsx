import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../App";
import GoogleIcon from "../assets/google.svg";
import GithubIcon from "../assets/github.svg";

const provider = new GoogleAuthProvider();

export const Signin = () => {

    async function onSignin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);

            if (credential) {
                const user = result.user;
                console.log(user);
            }
        } catch (error) {
            alert("Error while signing in");
        }
    }

    return (
        <div className="flex bg-black">
            {/* Left Side: Background and Animation */}
            <div className="hidden md:flex w-full md:w-2/5 bg-black justify-center items-center h-screen">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">DSA</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="opacity-50">
                                <i className="fas fa-arrow-down fa-3x"></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Sign In Form */}
            <div className="w-full md:w-3/5 h-screen bg-gray-900 flex justify-center items-center">
                <div className="w-full max-w-md">
                    <div className="p-5">
                        <h2 className="text-2xl font-semibold mb-2 text-white text-center">Log In</h2>
                    </div>
                    <div className="mb-4 py-1 sm:px-6 lg:px-8">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <p className="font-normal text-2xl text-gray-900">Welcome</p>
                                    <p className="font-light text-sm text-gray-600">
                                        Log in to continue to DSAHub.
                                    </p>
                                    <button
                                        type="button"
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2"
                                        onClick={onSignin}
                                    >
                                        <img src={GoogleIcon} className="w-5 h-5 mr-2" alt="Google" />
                                        Continue with Google
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 -mt-2"
                                    >
                                        <img src={GithubIcon} className="w-5 h-5 mr-2" alt="GitHub" />
                                        Continue with GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 text-center">
                            <p className="text-gray-400">
                                New to Neon? <a href="#" className="text-blue-500">Sign up for an account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
