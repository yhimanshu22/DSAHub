export const Leaderboard = ({
  leaderboard,
}: {
  leaderboard: { image: string; name: string; points: number; id: string }[];
}) => {
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold">Leaderboards</h1>
      <div className="shadow-md my-4 min-h-[50vh] px-4 py-4">
        <div className="flex my-8">
          <div className="w-1/3 font-bold">Id</div>
          <div className="w-1/3 font-bold">Name</div>
          <div className="w-1/3 font-bold">Points</div>
        </div>
        {leaderboard.map((item) => (
          <div key={item.id} className="flex my-4 text-lg bg-white shadow-sm py-4 px-2">
            <div className="w-1/3">{item.id}</div>
            <div className="w-1/3">{item.name}</div>
            <div className="w-1/3">{item.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
