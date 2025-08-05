import '../style/Header.css'
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
    </header>
  )
}

export default Header
