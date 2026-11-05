import { Link } from 'react-router-dom'
import './navbar.css' 

function Navbar(){
    return ( 
        <nav>
            <div className="logo">Subly</div>
            <div className="nav-links">
                <Link to='/login'>Авторизация</Link>
                <button>Регистрация</button>
            </div>
        </nav>)
}

export default Navbar