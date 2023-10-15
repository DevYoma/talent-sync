import Logo from '../../components/Logo/Logo';
import './Links.scss';
import GooglePlay from '../../assets/googleStore.png';
import AppStore from '../../assets/appStore.png';

const Links = () => {
  return (
    <div className="links">
        <div className="links__info">
            <Logo />

            <p className="links__infoDetails">
                ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
            </p>
        </div>

        <div className="links__product">
            <h4>Product</h4>
            <p>Overview</p>
            <p>Features</p>
            <p>Solutions</p>
            <p>Tutorials</p>
            <p>Pricing</p>
        </div>

        <div className="links__company">
            <h4>Company</h4>
            <p>About us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
            <p>Contact</p>
        </div>

        <div className="links__resources">
            <h4>Resource</h4>
            <p>Blog</p>
            <p>Events</p>
            <p>Help Center</p>
            <p>Tutorials</p>
            <p>Support</p>
        </div>

        <div className="links__legal">
            <h4>Legal</h4>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Licences</p>
            <p>Contact</p>
        </div>

        <div className="links__app">
            <p style={{ color: "#004EEB" }}>Get the app</p>

            <img src={GooglePlay} alt="google play link img" />
            <img src={AppStore} alt="appstore link img" />
        </div>
    </div>
  )
}

export default Links