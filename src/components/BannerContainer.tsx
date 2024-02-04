import { useEffect, useState } from "react";
import { Banner } from "../types/banner";
import { API_URL } from "../utils/constants";
import { Button, Carousel, Stack } from "react-bootstrap";
import BannerCard from "./Banner";
import '../styles/banner.scss'

const Banners = () => {

    const [banners, setBanners] = useState<Banner[]>([]);
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex: any) => {
    //   setIndex(selectedIndex);
    // };

    useEffect(() => {
        // get highlited banners 

        // fetch(`${API_URL}fee177346e7875554413`)
        // .then(res => res.json())
        // .then(response => {            
        //     setBanners(response.slides)
        // })

        fetch('/banners.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setBanners(data.slides))
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
        

    }, []);
    return ( <section>
        <Carousel> 
            {/* TODO: keep display by order */}
            {banners.map(banner => {
                return  <Carousel.Item key={banner.id}>
                {/* TODO: keep display by order */}
                <Carousel.Caption>
                    <div className="d-flex justify-content-center">
                    <div className="py-5" style={{width: 600}}>
                        <h5 className="banner-category" style={{color: `#${banner.colorCode}`}}> {banner.category} </h5>
                        <h1>{banner.title}</h1>
                        <p>{banner.brief} </p>

                        {/* TODO: link to urls / actions  */}
                        <Stack direction="horizontal" gap={2} className="mt-5">
                            <Button size="lg" className="btn-orange" target='_blank' href={banner.itemUrl} > Find out more </Button>
                            <Button size="lg" variant="link" className="btn-video" > Play Demo </Button> 
                        </Stack>
                    </div>
                        <img src={banner.imgUrl} alt={banner.title} />

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            })}
        </Carousel>
    </section> );
}
 
export default Banners;