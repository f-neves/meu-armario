import '../style/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/meu_armario.png'

function Header() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate('/');
  }

  function loginPage() {
    navigate('/login');
  }

  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={logo}
          alt="Logo Meu Armário"
          className="logo-img-header"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="header-nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobre-nos">Sobre Nós</Link>
          <Link to="/guarda-roupa">Meu Guarda-Roupa</Link>
          <Link to="/looks">Looks</Link>
        </nav>
      </div>
      <div className="header-login">
        <button 
          className="login-button"
          onClick={loginPage}
        >Login</button>
      </div>
    </header>
  )
}

export default Header
