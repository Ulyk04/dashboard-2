import React from 'react'
import { Sidebar, Menu , MenuItem } from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Box } from '@mui/material';


const ProSidebar = () => {
  return (
    <div  className='sidebar-page' >
        <Sidebar  
        style={{ height: "100vh" , position: "absolute" , margin: '1%' , borderRadius: '150px' , fontSize: '150%' , width: '15%' , textAlign: 'center'}}>
            <main>
                <Menu>
                    <MenuItem style={{padding: '100px 0'}} >
                        <div>
                            <h1>Ulykpan Kaisar</h1>
                        </div>
                    </MenuItem>
                    <hr  style={{marginBottom: '100px'}} />

                    <MenuItem suffix={<DashboardOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            <h4>Dashboard</h4>
                        </Box>
                    </MenuItem>
                    <MenuItem suffix={<PrivacyTipOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            <h4>Alert</h4>
                        </Box>
                    </MenuItem>
                    <MenuItem suffix={<CircleOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            <h4>Button</h4>
                        </Box>
                    </MenuItem>
                    <MenuItem suffix={<ViewAgendaOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            <h4>Cards</h4>
                        </Box>
                    </MenuItem>
                    <MenuItem suffix={<SpaceDashboardOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            
                            <h4>Tables</h4>
                        </Box>
                    </MenuItem>
                    <hr  style={{margin: '100px 0'}} />
                    <p>AUTH</p>
                    <MenuItem suffix={<LoginOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                            
                            <h4>Login</h4>
                        </Box>
                    </MenuItem>
                    <MenuItem suffix={ <ExitToAppOutlinedIcon />} >
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10%" >
                           
                            <h4>Register</h4>
                        </Box>
                    </MenuItem>
                </Menu>
            </main>
        </Sidebar>
    </div>
  )
}

export default ProSidebar