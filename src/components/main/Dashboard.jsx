import  BarChart  from '../assets/BarChart'
import React from 'react'
import PiePage from '../assets/PiePage'
import LinePage from '../assets/LinePage'
import FlexGrid from '../assets/FlexGrid'
import { Box, Grid, Stack } from '@mui/material'


const Dashboard = () => {
  return (
    <div style={{position: 'relative' , left: '30%' , marginTop: '5%'}} >
        <Box sx={{flexGrow: 1}} >
            <Grid container spacing={30} >
                <Grid>
                    <Stack spacing={10} >
                        <BarChart/>
                        <PiePage />
                        <LinePage/>
                    </Stack>
                </Grid>
                <Grid>
                 <FlexGrid/>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Dashboard