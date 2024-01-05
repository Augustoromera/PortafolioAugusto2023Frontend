import { useState } from 'react';
import BodyHome from '../components/BodyHome.jsx';
import Header from '../components/Header.jsx';
export const HomeScreen = () => {
    const [activeSection, setActiveSection] = useState('');
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Header activeSection={activeSection} />
            <BodyHome onSectionChange={handleSectionChange} />
        </>
    );
}
export default HomeScreen;