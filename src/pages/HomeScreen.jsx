import { useEffect, useState } from 'react';
import BodyHome from '../components/BodyHome.jsx';
import Header from '../components/Header.jsx';
export const HomeScreen = () => {
    const [activeSection, setActiveSection] = useState('');
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
    const [navBarClass, setNavBarClass] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.05;

            if (scrollY < windowHeight * scrollThreshold) {
                setNavBarClass("");

            } else {
                setNavBarClass("inline-block-class");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header activeSection={activeSection} navBarClass={navBarClass} />
            <BodyHome onSectionChange={handleSectionChange} />
        </>
    );
}
export default HomeScreen;