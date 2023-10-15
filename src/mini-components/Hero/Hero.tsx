import Button from '../../components/Button/Button';
import './Hero.scss';
import AiLogo from '../../assets/AiLogo.svg';
import AvatarGroupImg from '../../assets/avatergroup.png'
import Avatar1 from '../../assets/headerPic1.png';
import Avatar2 from '../../assets/headerPic2.png';
import Avatar3 from '../../assets/headerPic3.png';
import Avatar4 from '../../assets/headerPic4.png';
import Avatar5 from '../../assets/headerPic5.png';
import Avatar6 from '../../assets/headerPic6.png';
import MicIcon from '../../assets/microphone.svg';
import VideoIcon from '../../assets/video.svg';
import MonitorIcon from '../../assets/monitor.svg';
import SmileyIcon from '../../assets/smiley.svg';
import ChatIcon from '../../assets/chat.svg';
import SettingIcon from '../../assets/settings.svg';
import Stars from '../../components/Stars/Stars';


type AvatarImage = {
    id: number;
    image: string;
}

type HeroOption = {
    id: number;
    icon: string;
}

const Hero = () => {
    const avatarImages = [
        {
            id: 1, 
            image: Avatar1
        },
        {
            id: 2, 
            image: Avatar2
        },
        {
            id: 3, 
            image: Avatar3
        },
        {
            id: 4, 
            image: Avatar4
        },
        {
            id: 5, 
            image: Avatar5
        },
        {
            id: 6, 
            image: Avatar6
        },
    ]
    const heroOptions = [
        {
            id: 1, 
            icon: MicIcon,
        },
        {
            id: 2, 
            icon: VideoIcon
        },
        {
            id: 3, 
            icon: MonitorIcon
        }, 
        {
            id: 4, 
            icon: SmileyIcon
        }, 
        {
            id: 5, 
            icon: ChatIcon
        }, 
        {
            id: 6,
            icon: SettingIcon
        }
    ]
  return (
    <div className="hero">
        <div className="heroLeft">
            <div className="heroLeft__header">
                <p>Uniting the world,</p> 
                <p>one video call at a time</p>
            </div>

            <div className="heroLeft__body">
                Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.
            </div>

            <div className="heroLeft__buttons">
                <Button 
                    text='Start your free trial'
                    defaultBgColor='#175CD3'
                    defaultColor='#fff'
                />

                <Button 
                    text='Discover AI assistant'
                    defaultColor='#175CD3'
                    // border={true}
                    logo={AiLogo}
                />
            </div>

            <div className="heroLeft__users">
                <img src={AvatarGroupImg} alt="groupImg" />
                <div className="heroLeft__usersRating">
                    <div className="heroLeft__usersRatingTop">
                        <Stars />
                        <p>5.0</p>
                    </div>

                    <p className="heroLeft__usersRatingBottom">from 3,000+ reviews</p>
                </div>
            </div>
        </div>

        <div className="heroRight">
            <div className="heroRight__images">
                {avatarImages.map((avatar: AvatarImage) => (
                    <img 
                        key={avatar.id} 
                        src={avatar.image} 
                        alt="random avatar pic" 
                        className='heroRight__image'
                    />
                ))}
                <div className="heroRight__options">
                    {heroOptions.map((option: HeroOption) => (
                        <img src={option.icon} alt="icon pic" key={option.id} />
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero