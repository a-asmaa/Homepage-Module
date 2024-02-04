import logo from '../assets/Logo.png';
import '../styles/footer.scss'



const Footer = () => {
    return (<footer className="page-footer font-small">
        <div className="container-fluid text-start">
            <div className="row justify-content-center aligh-items-center gap-10">
                <div className="col-md-2 mt-md-0 mt-3">
                    <img src={logo} alt="logo" />
                    <p className='footer-content'>We make technology produce productive, adaptable and sustainable business experiences.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-1 mb-md-0 mb-3">
                    <h5 >Company</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Careers</a></li>
                        <li><a href="#!">Mobile</a></li>
                    </ul>
                </div>

                <div className="col-md-1 mb-md-0 mb-3">
                    <h5 >Contact</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Help/FAQ</a></li>
                        <li><a href="#!">Press</a></li>
                        <li><a href="#!">Affilates</a></li>
                    </ul>
                </div>

                <div className="col-md-1 mb-md-0 mb-3">
                    <h5 >Media</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">News</a></li>  
                        <li><a href="#!">photo</a></li>
                        <li><a href="#!">video</a></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 social-links">

                     <ul className="list-unstyled d-flex gap-4">
                        <li><a href="#!"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#!"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#!"><i className="bi bi-twitter"></i></a></li>
                    </ul>
                    <h5 > Discover our app</h5>
                   
                </div>
            </div>
        </div>

        <div className="footer-copyright py-5">All rights reserved@Linkdevelopment.com</div>
    </footer>
);
}
 
export default Footer;