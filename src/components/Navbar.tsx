import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/areas">Áreas</Link>
            <Link to="/tecnico">Técnico</Link>
            <Link to="/ppe">PPE</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    );
};

export default Navbar;
