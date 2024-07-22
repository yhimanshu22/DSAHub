export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full p-6 bg-gray-700 border rounded-lg shadow-sm">
            {children}
        </div>
    );
}
