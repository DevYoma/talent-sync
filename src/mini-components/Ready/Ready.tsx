import './Ready.scss';
import CheckImg from '../../assets/readyCheck.png';
import Button from '../../components/Button/Button';
import ReadyImg from '../../assets/ready.png';

const Ready = () => {
    const options = [
        {
            id: 1, 
            text: '30 days free trial',
        },
        {
            id: 2, 
            text: 'Cancel at any time'
        }, 
        {
            id: 3, 
            text: 'Access to all features'
        }, 
        {
            id: 4, 
            text: 'Personalized onboarding'
        }
    ]
  return (
    <div className="ready">
        <div className="ready__left">
            <p className="ready__leftHeader">Ready to clear the path to perfect communication?</p>

            <div className="ready__leftOptions">
                {options.map((option) => (
                    <p key={option.id}> <img src={CheckImg} alt="check photo" /> {option.text}</p>
                ))}
            </div>

            <div className="ready__leftButtons">
                <Button 
                    text='Talk to sales'
                    border
                />

                <Button 
                    text='Start your free trial'
                    defaultBgColor='#175CD3'
                    defaultColor='white'
                />
            </div>
        </div>

        <div className="ready__right">
            <img src={ReadyImg} alt="ready Image" />
        </div>
    </div>
  )
}

export default Ready