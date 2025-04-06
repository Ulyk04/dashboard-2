import React from 'react'
import CardAsset from '../assets/CardAsset'
import { Box, Grid } from '@mui/material'
import { CardImage } from '../assets/CardAsset'
import vazo from '../../images/vazo.jpeg'
import vazo2 from '../../images/vazo2.jpeg'

const CardPage = () => {
  return (
    <div style={{position:'relative' , left: '20%' , marginTop: '5%'}} >
        <Box sx={{flexGrow: 1}} >
            <Grid container spacing={10}>
                <Grid width={800} >
                    <CardAsset props={'With props'} title={'This is title'} subtitle={'This is subtitle'} content={'This is content'} />
                </Grid>
                <Grid width={800} >
                    <CardAsset props={'With Slots'} title={'This is a title'} subtitle={'This is subtitle'} content={'This is content'} />
                </Grid>
            </Grid>
        </Box>
        <Box sx={{flexGrow: 1 , mt: 20}} >
            <Grid container spacing={50} >
                <Grid sx={{width: '20%'}} >
                    <CardImage image={vazo} />
                </Grid>
                <Grid sx={{width: '20%'}} >
                    <CardImage image={vazo2} />
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default CardPage