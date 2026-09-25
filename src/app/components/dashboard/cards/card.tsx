type CardProps = {
    children?: React.ReactNode | null;
};

export function Card({children}: CardProps) {
    return (
        <article className="flex flex-col w-96 rounded-lg border">
            {children}
        </article>
    );
}