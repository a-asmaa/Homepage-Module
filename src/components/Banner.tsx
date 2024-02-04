import { Banner } from "../types/banner";
import { Carousel } from "react-bootstrap";
import '../styles/banner.scss'

const BannerCard = ({banner}: {banner: Banner}) => {
   
    return ( 
        <Carousel.Item>
            {/* TODO: keep display by order */}
            {/* <img src={banner.imgUrl} alt={banner.title} />
            <span> {banner.category} </span> */}
            <Carousel.Caption>
                <h3>{banner.title}</h3>
                <p>{banner.brief} </p>
            </Carousel.Caption>

            {/* TODO: link to urls / actions  */}
            <button > Find out more </button>
            <button > Play Demo </button> 
        </Carousel.Item>
);
}
 
export default BannerCard;