import { Drawer, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
// import './NavDrawer.scss';
import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
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
            <Box>
            <CloseIcon fontSize='large' style={{ color: "black" }} onClick={() => setIsDrawerOpen(!isDrawerOpen)}/> 
            </Box>
            <Box p={2} width={'100vw'} textAlign='left' role='presentation' sx={{ paddingTop: "150px", height: "100vh"}}>
                <Typography variant='h6' component='div' className='nav__drawerText'>Home</Typography>
            </Box>
        </Drawer>
    </React.Fragment>
  )
}

export default NavDrawer