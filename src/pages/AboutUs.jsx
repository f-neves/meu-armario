import '../style/AboutUs.css';
import Lara_Profile_Img from '../assets/Lara_Profile_Img.png';
import Bruno_Profile_Img from '../assets/Bruno_Profile_Img.png';
import Felipe_Profile_Img from '../assets/Felipe_Profile_Img.png';


function AboutUs() {
  return (
    
    <main className="about-us-container">
      <section className="about-us-section">
        <div className="section-start">
          <div className='how-started'>
            Como 
            <br>
            </br>
            começou?

          </div>
          <div className='how-started-text'>
              Meu Armário nasceu de conversas entre três amigos que compartilhavam o interesse por moda, praticidade e tecnologia.  Criamos a plataforma para simplificar a rotina, facilitar o planejamento de looks e incentivar um consumo mais consciente. Nosso propósito é transformar a maneira como você se conecta com o seu guarda-roupa  de forma prática, moderna e inteligente.    
          </div>

        </div>
      </section>

      <div className='team'>
        <div className="team-title">
          Conheça a Equipe
        </div>
        <div className='team-profile-container'> 

        
        <div className='team-profile'>
          <div className='team-profile-card'>
            <img src={Lara_Profile_Img} alt="" className="profile_img"/>
            <div className='team-profile-card-name'>
              Lara Medeiros
            </div>
          </div>
          <div className='team-profile-card'>
            <img src={Bruno_Profile_Img} alt="" className="profile_img"/>
            <div className='team-profile-card-name'>
              Bruno Mattos
            </div>
          </div>
          <div className='team-profile-card'>
            <img src={Felipe_Profile_Img} alt="" className="profile_img"/>
            <div className='team-profile-card-name'>
              Felipe Neves
            </div>
          </div>
        </div>
        </div>
      </div>
        {/* <p>
          Com o Meu Armário, você pode visualizar todas as suas peças, montar combinações incríveis e planejar seus looks com facilidade.
          Junte-se a nós nessa jornada para um guarda-roupa mais funcional e estiloso!
        </p> */}
    </main>
    
  )
}

export default AboutUs;