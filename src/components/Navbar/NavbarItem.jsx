import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarItem = ({ name, path, scrollId }) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    useEffect(() => {
        setIsActive(location.pathname === path);
    }, [location.pathname, path]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Resta una cantidad específica de píxeles (por ejemplo, 50) para ajustar la posición del scroll
            const offset = 130;
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };


    const isMobile = window.innerWidth <= 768;
    const mobileDisplayName = name;
    const finalDisplayName = isMobile ? mobileDisplayName : name === 'Proyectos' ? "Proyectos personales" : name;
    console.log(scrollId)
    return (
        <div className="text-xs sm:text-base">

            <Link
                onClick={(e) => scrollToSection(scrollId)}
                className={`mobile sm:hidden transition-colors hover:text-yellow-300 ${scrolled ? "text-[#181717]" : "text-white"} font-semibold underline1 ${isActive ? 'active' : ''}`}
                
            >
                {name}
            </Link>
            <Link
                onClick={(e) => scrollToSection(scrollId)}
                className={`desktop hidden sm:block transition-colors hover:text-yellow-300 ${scrolled ? "text-[#181717]" : "text-white"} font-semibold underline1 ${isActive ? 'active' : ''}`}
                to={path}
            >
                {name}
            </Link>
        </div>
    );
}

export default NavbarItem;
