import { useEffect, useState } from "react";
import { Banner } from "../types/banner";
import { API_URL } from "../utils/constants";

const Banners = () => {

    const [banners, setBanners] = useState<Banner[]>([]);


    useEffect(() => {
        // get highlited banners 

        fetch(`${API_URL}fee177346e7875554413`)
        .then(res => res.json())
        .then(response => {            
            setBanners(response.slides)
        })
        

    }, []);
    return ( <section>
    
    <div>
        {/* TODO: keep display by order */}
            {banners.map(banner => {
                return <div key={banner.id}>
                    <span> {banner.category} </span>
                    <h1> {banner.title} </h1>
                    <p> {banner.brief} </p>
                    
                {/* TODO: link to urls / actions  */}
                    <button > Find out more </button>
                    <button > Play Demo </button> 

                <img src={banner.imgUrl} alt={banner.title} />

                </div>
            })}

        </div>
   
    </section> );
}
 
export default Banners;