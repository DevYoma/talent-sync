import './NavDrawer.scss';
import { Drawer, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
// import './NavDrawer.scss';
import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button/Button';
// import { Link } from 'react-router-dom';



const NavDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
            <IconButton 
                edge="end" 
                sx={{ width: "54px", height: "54px"}} 
                aria-label="logo" 
                onClick={() => setIsDrawerOpen(!isDrawerOpen)} 
            >
                {isDrawerOpen ? <CloseIcon fontSize='large' style={{ color: "black" }}/> : <Menu fontSize='large'  style={{ color: "black" }}/> }
            </IconButton>
        <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} width={'70vw'} textAlign='left' role='presentation' className="navDrawer">
                <CloseIcon fontSize='large' style={{ color: "black" }} onClick={() => setIsDrawerOpen(!isDrawerOpen)}/> 
                <Typography variant='h6' component='div' className='nav__drawerText'>Pricing</Typography>
                <Typography variant='h6' component='div' className='nav__drawerText'>Solutions</Typography>
                <Typography variant='h6' component='div' className='nav__drawerText'>Resources</Typography>
                <Typography variant='h6' component='div' className='nav__drawerText'>Products</Typography>

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
            </Box>
        </Drawer>
    </React.Fragment>
  )
}

export default NavDrawer