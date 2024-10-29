export const Header = ({ message, className }: { message: string; className?: string }) => {
    return <h2 className={`text-secondary text-xl font-semibold ${className}`}>{message}</h2>;
};
