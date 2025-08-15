import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Lógica de autenticação aqui
    navigate('/');
  }

  return (
    <div className="login-background">
      <div className="login-background-img"></div>
      <div className="login-container">
        <div>
          <h2>Login</h2>
        </div>
        <div>

        </div>
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              className="login-input"
            />
          </form>
        </div>
        <div className="login-button-modal">
          <button type="submit" className="login-enter">
            Entrar
          </button>
          <button type="submit" className="login-enter">
            Cadastro
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Login;