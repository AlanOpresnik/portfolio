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

            const section = document.getElementById(scrollId);
            if (section) {
                const sectionRect = section.getBoundingClientRect();
                const isSectionInView = sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2;
                setIsActive(isSectionInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Llamar handleScroll manualmente al montar el componente
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollId]);

    useEffect(() => {
        setIsActive(location.pathname === path);
    }, [location.pathname, path]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 130;
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    const isMobile = window.innerWidth <= 768;
    const mobileDisplayName = name;
    const finalDisplayName = isMobile ? mobileDisplayName : name === 'Proyectos' ? "Proyectos personales" : name;

    return (
        <div className="text-xs sm:text-base">
            <Link
                onClick={(e) => scrollToSection(scrollId)}
                className={`mobile sm:hidden transition-colors hover:text-yellow-300  font-semibold ${isActive ? 'underline font-bold text-yellow-300' : ''}`}
            >
                {name}
            </Link>
            <Link
                onClick={(e) => scrollToSection(scrollId)}
                className={`desktop hidden sm:block transition-colors hover:text-yellow-300  font-semibold ${isActive ? 'text-yellow-300 underline font-bold ' : ''}`}
                to={path}
            >
                {name}
            </Link>
        </div>
    );
}

export default NavbarItem;
