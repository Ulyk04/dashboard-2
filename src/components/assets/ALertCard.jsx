import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Alert, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const ALertCard = () => {

    const [open , setOpen] = useState(true);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{position: 'relative' , left: '5%' , marginTop: '-2%'}} >
        <Box sx={{ width: '50vw', marginTop: '20%' }}>
            <Typography variant='h4' >
                Alert Filed
            </Typography>
            <hr />
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success"  >
                    This is a filled success Alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info Alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
                <Alert variant="filled" severity="error">
                    This is a filled error Alert.
                </Alert>
            </Stack>
        </Box>
        <Box sx={{ width: '50vw', marginTop: '20%' }} >
            <Typography variant='h4' >
                Alert Basic
            </Typography>
            <hr />
            <Stack sx={{ width: '100%' }} spacing={2} >
                <Alert icon={false} variant="outlined" severity="success">
                    This is an outlined success Alert.
                </Alert>
                <Alert  icon={false} variant="outlined" severity="info">
                    This is an outlined info Alert.
                </Alert>
                <Alert  icon={false} variant="outlined" severity="warning">
                    This is an outlined warning Alert.
                </Alert>
                <Alert  icon={false} variant="outlined" severity="error">
                    This is an outlined error Alert.
                </Alert>
            </Stack>
        </Box>
        <Box sx={{ width: '50vw', marginTop: '5%' }} >
            <Collapse in={open}>
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                Click the close icon to see the Collapse transition in action!
                </Alert>
            </Collapse>
            <Button
                disabled={open}
                variant="outlined"
                onClick={() => {
                setOpen(true);
                }}
            >
                <Typography variant='h4' >
                    Re-open
                </Typography>
            </Button>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default ALertCard