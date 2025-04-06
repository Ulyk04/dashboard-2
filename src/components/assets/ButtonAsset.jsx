import { Box , Stack , Button, Container, Typography , IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

const ButtonAsset = () => {
  return (
    <div>
        <Container maxWidth={'lg'} sx={{position: 'relative' , left: '5%' , marginTop: '5%'}} >
            <Box>
                <Typography variant='h2' sx={{textAlign: 'center'}} >Deafualt buttons</Typography>
                <Stack spacing={5} direction="row">
                    <Button variant="text" sx={{fontSize: '200%'}} >Text</Button>
                    <Button variant="contained" sx={{fontSize: '200%'}} >Contained</Button>
                    <Button variant="outlined" sx={{fontSize: '200%'}} >Outlined</Button>
                    <Button sx={{fontSize: '200%'}} >Primary</Button>
                    <Button disabled sx={{fontSize: '200%'}} >Disabled</Button>
                    <Button href="/" sx={{fontSize: '200%'}} >Link</Button>
                </Stack>
            </Box>
            <Box>
                <Typography variant='h2' sx={{textAlign: 'center' , marginTop: '20%'}} >Button with signals</Typography>
                <Stack spacing={5} direction={'row'} >
                    <Button color="secondary" sx={{fontSize: '200%'}} >Secondary</Button>
                    <Button variant="contained" color="success" sx={{fontSize: '200%'}} >
                        Success
                    </Button>
                    <Button variant="outlined" color="error" sx={{fontSize: '200%'}} >
                        Error
                    </Button>
                    <Button variant="contained" color="info" sx={{fontSize: '200%'}} >
                        Info
                    </Button>
                    <Button variant="contained" color="warning" sx={{fontSize: '200%'}} >
                        Warning
                    </Button>
                    <Button variant="contained" color="primary" sx={{fontSize: '200%'}} >
                        Primary
                    </Button>
                </Stack>
            </Box>
            <Box sx={{display: 'flex'  ,flexDirection:'row' , gap: '200px', marginTop: '20%' }} >
                <Box>
                    <Stack spacing={2} direction={'row'} >
                        <Button variant="outlined" size="small" sx={{width: '80px' , height: '60px' , fontSize: '100%'}} >
                        Small
                        </Button>
                        <Button variant="outlined" size="medium" sx={{fontSize: '150%' , width: '120px' , height: '80px'}} >
                        Medium
                        </Button>
                        <Button variant="outlined" size="large" sx={{fontSize: '210%' , width: '160px' , height: '100px'}} >
                        Large
                        </Button>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={2} direction={'row'}>
                        <IconButton aria-label="delete"  >
                            <DeleteIcon sx={{fontSize: '50px'}} />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon sx={{fontSize: '80px'}} />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon  sx={{fontSize: '120px'}} />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <DeleteIcon sx={{fontSize: '160px'}} />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default ButtonAsset