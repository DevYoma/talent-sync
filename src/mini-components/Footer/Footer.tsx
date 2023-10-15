import './Footer.scss';
import LinkedIn from '../../assets/linkedin.svg';
import Twitter from '../../assets/twiter.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Github from '../../assets/github.svg';
import Youtube from '../../assets/youtube.svg';

const Footer = () => {
  return (
    <footer>
        <p>© 2023 ClearLink. All rights reserved.</p>

        <div className="footer__links">
            <img src={LinkedIn} alt="linkedIn img" />
            <img src={Twitter} alt="twitter img" />
            <img src={Facebook} alt="facebook img" />
            <img src={Instagram} alt="instagram img" />
            <img src={Github} alt="github img" />
            <img src={Youtube} alt="youtube img" />
        </div>
    </footer>
  )
}

export default Footer