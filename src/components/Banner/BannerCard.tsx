import { Button, Stack } from "react-bootstrap";
import { Banner } from "../../types/banner";
import vector from "../../assets/Vector.svg";
// import play from "../assets/Play button.svg";


const BannerCard = ({banner}: {banner: Banner}) => {
   
    return ( 
        <div className="d-flex justify-content-center">
            <div className="py-5" style={{width: 600}}>
                <h5 className="banner-category" style={{color: `#${banner.colorCode}`}}> {banner.category} </h5>
                <h1>{banner.title}</h1>
                <p>{banner.brief} </p>

                <img style={{position: 'absolute', top: '30%', right: '50%', zIndex: 0}} src={vector}  alt="vector"/>

                {/* TODO: link to urls / actions  */}
                <Stack direction="horizontal" gap={2} className="mt-5">
                    <Button size="lg" className="btn-orange" target='_blank' href={banner.itemUrl} > Find out more </Button>
                    <Button size="lg" variant="link" className="btn-video" > 
                    {/* <img src={play} alt="play-icon" /> */}
                    Play Demo </Button> 
                </Stack>
            </div>
            <img src={banner.imgUrl} alt={banner.title} />

        </div>
);
}
 
export default BannerCard;