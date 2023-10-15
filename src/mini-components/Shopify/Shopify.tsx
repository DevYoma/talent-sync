import './Shopify.scss';
import ShopifyPicture from '../../assets/shopifyImage.png';
import Company from '../../components/Company/Company';
import ShopifyIcon from '../../assets/company/shopify.svg';
import Stars from '../../components/Stars/Stars';
import SarahImg from '../../assets/sarah.png';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

const Shopify = () => {
  return (
    <div className="shopify">
        <div className="shopify__left">
            <Company 
                icon={ShopifyIcon}
            />

            <div className="shopify__leftStars">
              <Stars />
            </div>

            <div className="shopify__leftBody">
              <p>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
            </div>

            <div className="shopify__leftBottom">
              <div>
                <img src={SarahImg} alt="sarah the project manager" />
              </div>

              <div>
                <h4>Sarah Thompson</h4>
                <p>Project Manager Spotify</p>
              </div>

              <div>
                <img src={ArrowLeft} alt="left Arrow icon" />
                <img src={ArrowRight} alt="right Arrow icon" />
              </div>

            </div>
        </div>

        <div className="shopify__right">
            <img src={ShopifyPicture} alt="shopify images" />
        </div>
    </div>
  )
}

export default Shopify