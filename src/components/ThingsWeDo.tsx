import '../styles/thingsWeDo.scss'
import textImg from '../assets/Things _We Do.png';
import pinkPath from '../assets/Pink-path.png';
import { Stack } from 'react-bootstrap';
import services from '../assets/services.png';
import dynamics from '../assets/dynamics.png';
import transformation from '../assets/Transformation.png';
import envision from '../assets/envision.png';
import craftyMind from '../assets/crafty-mind.png';


const ThingsWeDo = () => {
    return ( <section className='things-do-section'>


        <div className='section-container'>
            <img className='pink-img' src={pinkPath} alt="path"/>
            
            <div className='container ras'>
                <div className='section-content col-5'>
                    <h1> We Deliver Digital Productivity </h1>

                    <p>
                        We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners.
                    </p>
                </div>

                <div className='section-content' style={{height: 'fit-content'}}>
                    <div className='img-container'>
                        <img src={transformation} alt="things_we_do"/>

                        <Stack direction="horizontal" gap={3} className='read-more'>
                            <i className="bi bi-arrow-right"></i>
                            <span> Read more</span>
                        </Stack> 
                    </div>
                    <div className='img-container'>
                        <img src={transformation} alt="things_we_do"/>

                        <Stack direction="horizontal" gap={3} className='read-more'>
                            <i className="bi bi-arrow-right"></i>
                            <span> Read more</span>
                        </Stack> 
                       
                    </div>
                </div>

                <div className='section-content' >
                    <div style={{height: 50}}></div>
                    <div className='img-container' >
                        <img src={transformation} alt="things_we_do"/>

                        <Stack direction="horizontal" gap={3} className='read-more'>
                            <i className="bi bi-arrow-right"></i>
                            <span> Read more</span>
                        </Stack> 
                    </div>
                    <div className='img-container' >
                        <img src={transformation} alt="things_we_do"/>

                        <Stack direction="horizontal" gap={3} className='read-more'>
                            <i className="bi bi-arrow-right"></i>
                            <span> Read more</span>
                        </Stack> 
                    </div>
                </div>

                <div className='section-content my-auto'>
                    <div className='img-container'>
                        <img src={transformation} alt="things_we_do"/>

                        <Stack direction="horizontal" gap={3} className='read-more'>
                            <i className="bi bi-arrow-right"></i>
                            <span> Read more</span>
                        </Stack> 
                    </div>
                </div>

            </div>
            
        </div>
        <img className='text-img' src={textImg} alt="things_we_do"/>

        
        
    
        
    </section> );
}
 
export default ThingsWeDo;