import { useEffect, useState } from "react";
import { Banner } from "../../types/banner";
import { Carousel, Spinner, } from "react-bootstrap";
import BannerCard from "./BannerCard";
import '../../styles/banner.scss'
import Decore from '../../assets/Decore.svg';

const Banners = () => {

    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        // get highlited banners 

        setLoading(true)
        fetch('/banners.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {

            // check order 
            const bannerList = (data.slides as Banner[]).sort((a, b) => a.order - b.order);
            setBanners(bannerList);
            setLoading(false)
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
        
    }, []);


    
    return ( <section className="banner-container">
        {   
            loading ?  
                <Spinner  /> 
            : 
            <>
                <img src={Decore}  alt="logo" className="decore"/>
                <Carousel> 
                    {banners.map(banner => {
                        return  <Carousel.Item key={banner.id}>
                        <Carousel.Caption>
                            <BannerCard banner={banner} />
                        </Carousel.Caption>
                    </Carousel.Item>
                    })}
                </Carousel>
            </>
               
        }
    </section> );
}
 
export default Banners;