import NavLinks from '@/src/app/components/dashboard/navigation/nav-links';

export default function SideNav() {
    return (
        <nav className="flex flex-2 rounded-br-3xl h-full bg-surface pl-8 py-4 md:pl-4">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md md:block"></div>
            </div>
        </nav>
    );
}