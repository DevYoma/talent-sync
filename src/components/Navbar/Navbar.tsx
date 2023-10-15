import Button from '../Button/Button';
import Logo from '../Logo/Logo'
import NavDrawer from '../NavDrawer/NavDrawer';
import './Navbar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="navLeft">
            <Logo />
            <p className="navLeft__text">ClearLink.</p>
        </div>

        <div className="navMiddle">
            <ul>
                <li>Products <ExpandMoreIcon className='expandIcon'/></li>
                <li>Solutions <ExpandMoreIcon className='expandIcon'/></li>
                <li>Resources <ExpandMoreIcon className='expandIcon'/></li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className="navRight">
            <Button 
                text='Talk to sales'
                border={true}
            />
            <Button 
                text='Sign up for free'
                defaultBgColor='#175CD3'
                defaultColor='#fff'
                border={false}
            />
        </div>

        <div className="navMobile">
            {/* <MenuIcon /> */}
            <NavDrawer />
        </div>
    </nav>
  )
}

export default Navbar