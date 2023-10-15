import './Why.scss';
import Picture from '../../assets/whyPicture.png';
import VideoIcon from '../../assets/video.svg';
import RecordIcon from '../../assets/record.svg';
import CalendarIcon from '../../assets/calendar.svg';
import SecurityIcon from '../../assets/security.svg';

type ContentType = {
  id: number;
  icon: string;
  heading: string;
  text: string;
}

const Why = () => {
  const contents: ContentType[] = [
    {
      id: 1, 
      icon: VideoIcon, 
      heading: 'Crystal-clear HD video', 
      text: 'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.'
    }, 
    {
      id: 2, 
      icon: RecordIcon, 
      heading: 'Noise-canceling audio', 
      text: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.'
    }, 
    {
      id: 3, 
      icon: CalendarIcon, 
      heading: 'Scheduling made easy', 
      text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
    }, 
    {
      id: 4, 
      icon: SecurityIcon, 
      heading: 'Bank-grade security', 
      text: 'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.'
    }
  ]
  return (
    <div className="why">
      <p className="why__header">The ClearLink Advantage</p>

      <p className="why__headerQuestion">Why Choose ClearLink?</p>
      <p className="why__headerText">
        In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:
      </p>

      <div className="why__content">

        <div className="why__contentLeft">
          {contents.map((content) => (
              <div className="why__contentLeftReason" key={content.id}>
                <div>
                  <img src={content.icon} alt="icon" />
                </div>
    
                <div>
                  <h3>{content.heading}</h3>
                  <p>{content.text}.</p>
                </div>
              </div>
          ))}
        </div>

        <div className="why__contentRight">
          <img src={Picture} alt="why-picture" />
        </div>

      </div>
    </div>
  )
}

export default Why