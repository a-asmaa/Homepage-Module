import { useEffect, useState } from "react";
import { Banner } from "../types/banner";
import { API_URL } from "../utils/constants";
import { Button, Carousel, Stack } from "react-bootstrap";
import BannerCard from "./Banner";
import '../styles/banner.scss'

const Banners = () => {

    const [banners, setBanners] = useState<Banner[]>([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        // get highlited banners 

        fetch(`${API_URL}fee177346e7875554413`)
        .then(res => res.json())
        .then(response => {            
            setBanners(response.slides)
        })
        

    }, []);
    return ( <section>

{/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    */}
        <Carousel> 
            {/* TODO: keep display by order */}
            {banners.map(banner => {
                return  <Carousel.Item key={banner.id}>
                {/* TODO: keep display by order */}
                <Carousel.Caption>
                    <div className="d-flex gap-5">
                    <div>
                        <h5 className="banner-category" style={{color: `#${banner.colorCode}`}}> {banner.category} </h5>
                        <h1>{banner.title}</h1>
                        <p>{banner.brief} </p>

                        {/* TODO: link to urls / actions  */}
                        <Stack direction="horizontal" gap={2} className="mt-5">
                            <Button size="lg" className="btn-orange" > Find out more </Button>
                            <Button size="lg" className="btn-video" > Play Demo </Button> 
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