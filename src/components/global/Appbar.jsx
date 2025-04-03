import React, { useContext } from 'react'
import { AppBar , Avatar , Box, IconButton, Toolbar } from '@mui/material';
import avataImage from '../../images/ppd.jpeg'
import { useTheme } from '@mui/material';
import { ColorModeContext , tokens } from '../../theme';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Appbar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

  return (
    <Box>
        <AppBar position='relative' style={{width: '65vw' , left: '25%' , borderRadius: '50px'}}>
            <Toolbar style={{display:'flex' , justifyContent: 'space-around' }} >
                <Avatar src={avataImage} style={{cursor: 'pointer' , transition: '0.3s' }} />
                <h1>Dashboard</h1>
                <IconButton size='large' color='none' edje='start' aria-label='menu' onClick={colorMode.toggleColorMode} > {theme.palette.mode === 'dark' ? <DarkModeSharpIcon /> : <LightModeOutlinedIcon />} </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Appbar