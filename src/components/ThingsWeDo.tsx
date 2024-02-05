import '../styles/thingsWeDo.scss'
import textImg from '../assets/Things _We Do.png';
import pinkPath from '../assets/Pink-path.png';


import services from '../assets/services.png';
import dynamics from '../assets/dynamics.png';
// import transformation from '../assets/Things _We Do.png';
import envision from '../assets/envision.png';
import craftyMind from '../assets/crafty-mind.png';

const ThingsWeDo = () => {
    return ( <section className='things-do-section'>


        <div className='section-container'>
            <img className='pink-img' src={pinkPath} alt="path"/>
            
            <div className='section-content col-5'>
                <h1> We Deliver Digital Productivity </h1>

                <p>
                    We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners.
                </p>
            </div>
        </div>
        <img className='text-img' src={textImg} alt="things_we_do"/>

        <div className='img-container'>
            <img src={craftyMind} alt="things_we_do"/>
            <span className='text'> Crafty Mind </span> 
            <span className='text'> Services </span>
            
            <span className='text'> Envision </span>
            <span className='text'> Dynamics 365 </span>
            <img src={services} alt="path"/> 
            <img src={dynamics} alt="path"/> 
            <img src={envision} alt="path"/> 
        </div>
        
    
        
    </section> );
}
 
export default ThingsWeDo;