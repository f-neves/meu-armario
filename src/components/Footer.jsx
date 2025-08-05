
import '../style/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../assets/meu_armario.png'

function Footer() {
  return (
    <footer className="footer">
      <div className='flex'>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Meu Armário" className="logo-img-header" />
          </Link>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Meu Armário. Todos os direitos reservados.</p>
          <div className="social">
          </div>
        </div>
      </div>
          <a href="#">Instagram</a>
          <a href="#">Contato</a>
    </footer>
  )
}

export default Footer
