import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";
import { Topbar } from "./components/Topbar";
import { ProblemList } from "./components/ProblemList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Landing } from "./components/Landing";
import { Submissions } from "./components/Sumissions";
import { Leaderboard } from "./components/LeaderBoard";
import { Legend } from "chart.js";
import { Profile } from "./pages/profile";

const firebaseConfig = {
  apiKey: "AIzaSyBHhA3o08Nk4GScmhIKykyVAl5XSjJS2Uw",
  authDomain: "e-commerce-99426.firebaseapp.com",
  projectId: "e-commerce-99426",
  storageBucket: "e-commerce-99426.appspot.com",
  messagingSenderId: "337065238039",
  appId: "1:337065238039:web:af195aec4d7573fb6f4652"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
function App() {
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  const problemList = [
    { id: "1", problemName: "Two Sum", tags: ["Array", "Hash Table"] },
    { id: "2", problemName: "Reverse String", tags: ["String"] },
    { id: "3", problemName: "Palindrome Check", tags: ["String"] },
    { id: "4", problemName: "Merge Intervals", tags: ["Array", "Sorting"] },
    { id: "5", problemName: "Best Time to Buy and Sell Stock", tags: ["Array", "Dynamic Programming"] },
    { id: "6", problemName: "Product of Array Except Self", tags: ["Array"] },
    { id: "7", problemName: "Container With Most Water", tags: ["Array", "Two Pointers"] },
    { id: "8", problemName: "Three Sum", tags: ["Array", "Sorting"] },
    { id: "9", problemName: "Valid Parentheses", tags: ["String", "Stack"] },
    { id: "10", problemName: "Merge Two Sorted Lists", tags: ["Linked List"] },
    { id: "11", problemName: "Add Two Numbers", tags: ["Linked List", "Math"] },
    { id: "12", problemName: "Longest Substring Without Repeating Characters", tags: ["String", "Sliding Window"] },
    { id: "13", problemName: "Find the Index of the First Occurrence in a String", tags: ["String"] },
    { id: "14", problemName: "Climbing Stairs", tags: ["Dynamic Programming"] },
    { id: "15", problemName: "Rotate Array", tags: ["Array"] },
    { id: "16", problemName: "Group Anagrams", tags: ["Hash Table"] },
    { id: "17", problemName: "Top K Frequent Elements", tags: ["Hash Table", "Heap"] },
    { id: "18", problemName: "Decode Ways", tags: ["Dynamic Programming"] },
    { id: "19", problemName: "Combinations", tags: ["Backtracking"] },
    { id: "20", problemName: "Permutations", tags: ["Backtracking"] },
    { id: "21", problemName: "N-Queens", tags: ["Backtracking"] },
    { id: "22", problemName: "Sudoku Solver", tags: ["Backtracking"] },
    { id: "23", problemName: "Word Search", tags: ["Backtracking"] },
    { id: "24", problemName: "Subsets", tags: ["Backtracking"] },
    { id: "25", problemName: "Kth Largest Element in an Array", tags: ["Array", "Heap"] }
  ];

  const sampleLeaderboard = [
    { id: '1', name: 'User One', points: 150, image: '' },
    { id: '2', name: 'User Two', points: 120, image: '' },
    { id: '3', name: 'User Three', points: 100, image: '' },
    { id: '4', name: 'User Four', points: 90, image: '' },
    { id: '5', name: 'User Five', points: 70, image: '' },

  ];


  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, [])

  if (user.loading) {
    return <div>loading ...</div>;
  }

  if (!user.user) {
    return <div><Signin /></div>
  }

  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Router>
          <Topbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Submissions />} />
            <Route path="/problems" element={<ProblemList problemList={problemList} />} />
            <Route path="/leaderboard" element={<Leaderboard leaderboard={sampleLeaderboard} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>

        {/* <Leaderboard leaderboard={leaderboardData} /> */}
      </div>
    </div>
  );
}

export default App;
