import '../style/Home.css'
import models from '../assets/models_01.png'
import phone from '../assets/celular.png'

function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Encontre o estilo que combina com você de forma prática, econômica e consciente</h1>
          <p>
            <strong>Com o Meu Armário, você organiza suas roupas, monta combinações e planeja seus looks onde estiver. Tudo isso em um só lugar.</strong>
          </p>
          <p>
            Visualize todas as suas peças de forma fácil, experimente novas combinações.
          </p>
          <p>
            Evite o estresse de escolher o que vestir. 
          </p>
          <p>
            Planeje seus looks com antecedência e tenha sempre uma opção pronta para cada ocasião.
          </p>
          <button className="cta-button">Cadastre já</button>
        </div>
        <div className="modelos">
          <img src={models} alt="Modelos estilosos" className="home-models" />
        </div>
      </section>

      <section className="how-it-works">
        <div>
          <img src={phone} alt="" />
        </div>
        <div>

          <h2>Como funciona?</h2>
          <div className="steps-container">
            <div className="step orange">
              <div className='step-number'>
                <div className='step-number-span'>1</div>
              </div>
              <div>
                <h3>Tire uma foto</h3>
                <p>Fotografe uma roupa ou acessório de forma simples e rápida</p>
              </div>
            </div>
            <div className="step">
              <div className='step-number'>
                <div className='step-number-span'>2</div>
              </div>
              <div>
                <h3>Cadastre</h3>
                <p>Adicione detalhes como categoria, cor e ocasião para cada peça</p>
              </div>
            </div>
            <div className="step orange">
              <div className='step-number'>
                <div className='step-number-span'>3</div>
              </div>
              <div>
                <h3>Monte Looks</h3>
                <p>Combine suas roupas favoritas e crie looks personalizados</p>
              </div>
            </div>
            <div className="step">
              <div className='step-number'>
                <div className='step-number-span'>4</div>
              </div>
              <div>
                <h3>Planeje</h3>
                <p>Organize o que vai vestir para o dia a dia, eventos ou viagens</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
