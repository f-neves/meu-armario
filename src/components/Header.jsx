import '../style/Header.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import logo from '../assets/meu_armario.png'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Meu Armário" className="logo-img-header" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/guarda-roupa">Meu Guarda-Roupa</Link>
        <Link to="/adicionar">Adicionar Peças</Link>
      </nav>
      <button className="cta-button">Login</button>
=======
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
>>>>>>> 487750c (Some pages added)
    </header>
  )
}

export default Header
