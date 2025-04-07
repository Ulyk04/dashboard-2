import { Card, CardContent, CardHeader, Typography , Box } from '@mui/material'
import React from 'react'

const TableAsset = ({title , content , content1}) => {
  return (
    <div>
        <Box sx={{position: 'relative' , left: '28%' , marginTop: '10%'}} >
            <Card sx={{maxWidth: '60%'}} >
                <CardContent>
                    <Box textAlign={'center'} >
                        <Typography variant='h3' >
                            General table
                        </Typography>
                        <hr />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={120} >
                        <Box>
                            <Typography variant='h4' sx={{color: 'text.secondary' , margin: '10% 0'}} >
                            Name
                            </Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Frozen Yogurt</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Ice cream sadwich</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Eclair</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Cupcake</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Gingerbread</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Jelly bean</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Lollipop</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Honeycomb</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Donut</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Kit Kat</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4' sx={{color: 'text.secondary', margin: '10% 0'}} >
                            Calories
                            </Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >159</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >237</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >262</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >305</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >356</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >375</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >392</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >408</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >452</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >518</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>

        <Box sx={{position: 'relative' , left: '28%' , marginTop: '10%'}} >
            <Card sx={{maxWidth: '60%' , maxHeight: '200px' , overflowY: 'scroll' }} >
                <CardContent>
                    <Box textAlign={'center'} >
                        <Box overflow={'hidden'} >  
                            <Typography variant='h3' >
                                With scroll
                            </Typography>
                            <hr />
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={120} >
                        <Box>
                            <Typography variant='h4' sx={{color: 'text.secondary' , margin: '10% 0'}} >
                            Name
                            </Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Frozen Yogurt</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Ice cream sadwich</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Eclair</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Cupcake</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Gingerbread</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Jelly bean</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Lollipop</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Honeycomb</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Donut</Typography>
                            <Typography variant='h5' sx={{margin: '4% 0'}} >Kit Kat</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4' sx={{color: 'text.secondary', margin: '10% 0'}} >
                            Calories
                            </Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >159</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >237</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >262</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >305</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >356</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >375</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >392</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >408</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >452</Typography>
                            <Typography variant='h5' sx={{margin: '6% 0'}} >518</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
        
    </div>
  )
}

export default TableAsset
