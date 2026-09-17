import type { Metadata } from 'next';
export const metadata : Metadata = {
    title: 'Home',
    description: 'Overview of my learnings with visual elements.',
}

export default function Dashboard() {
    return (
        <>
        <div>Hello User!</div>
        <p>Are you ready for the next piece of learning?</p>

            <div className="h-32 w-96 bg-surface rounded-2xl m-8 p-3"> Card Test </div>
            <div className="h-32 w-96 bg-surface rounded-2xl m-8 p-3"> Card Test </div>
            <div className="h-32 w-96 bg-surface rounded-2xl m-8 p-3"> Card Test </div>
        </>
    )
}