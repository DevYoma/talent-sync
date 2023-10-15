import './Stars.scss'
import Star from '../../assets/star.svg'

const Stars = () => {
    const noOfStars = [1,2,3,4,5];

  return (
    <p>
        {noOfStars.map((star: number) => (
            <img key={star} src={Star} alt="star" />
        ))}
    </p> 
  )
}

export default Stars