import './Logo.scss'
import ClearLinkLogo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
        <img src={ClearLinkLogo} alt="logo" />
        <p className="text">ClearLink.</p>
    </div>
  )
}

export default Logo