import NavbarItem from "./NavbarItem";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: "Inicio", path: "/", scrollId: "inicio" },
        { name: "Trabajos", path: "/trabajos", scrollId: "trabajos" },
        { name: "Proyectos", path: "/proyectos", scrollId: "proyectos" },
        { name: "Conocimientos", path: "/conocimientos", scrollId: "conocimientos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex justify-center pt-6 items-center w-full p-4 mb-12 md:mb-36 sticky top-0 z-50`} >
            <div
                className={`w-[600px] h-[40px] p-2 flex justify-center items-center transition-colors duration-500 ${scrolled ? 'bg-[#f3f3f3d7] shadow-gray-300 shadow' : 'bg-transparent text-white'}  text-white  rounded-xl`}
            >
                <nav className="flex gap-8 justify-between">
                    {
                        navItems.map((item) => (
                            <NavbarItem key={item.path} scrollId={item.scrollId} path={item.path} name={item.name} />
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
