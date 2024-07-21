import { Link } from 'react-router-dom';

export const Topbar = () => {
    return (
        <div className="max-w-screen-lg w-full bg-gray-700 px-4 py-3">
            <NavBar />
        </div>
    );
}

const topbarItems = [
    { title: "Explore", route: "/explore" },
    { title: "Contest", route: "/contest" },
    { title: "Problems", route: "/problems" },
    { title: "Leaderboard", route: "/leaderboard" },
    { title: "Discuss", route: "/discuss" },
    { title: "Activity", route: "/activity" },
    { title: "Profile", route: "/profile" },
];

function NavBar() {
    return (
        < ><div className='flex flex-row '>
            <Link to='/'>
                <div style={{ fontFamily: "Anton" }} className="text-4xl font-extrabold  text-white">
                    DSAHub
                </div>
            </Link>

            <div className="flex ml-20 mt-2">
                {topbarItems.map(item => (
                    <NavbarItem key={item.route} route={item.route} title={item.title} />
                ))}
            </div>

        </div>

        </>

    );
}

function NavbarItem({ title, route }: { title: string; route: string }) {
    return (
        <Link to={route}>
            <div className="mr-6 text-slate-400 text-lg cursor-pointer hover:text-white">
                {title}
            </div>
        </Link>
    );
}
