import React, { useState } from 'react'
import { Card , CardActionArea, CardContent, CardMedia, Stepper, Typography, Step, StepLabel, StepContent, Button, Paper , Box } from '@mui/material'

const data = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
      },
      {
        label: 'Create an ad group',
        description:
          'An ad group contains one or more ads which target a shared set of keywords.',
      },
      {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
      },
]

const CardAsset = ({props , title , subtitle , content}) => {
  return (
    <div>
        <Card sx={{maxWidth: 800}} >
            <CardContent>
                <Typography gutterBottom sx={{color: 'text.secondary'}} variant='h3' >
                    {props}
                </Typography>
                <hr/>
                <Typography variant='h4' >
                    {title}
                </Typography>
                <Typography variant='h5' >
                    {subtitle}
                </Typography>
                <br />
                <Typography variant='body1' color='text.secondary' >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export function CardImage({image}) {
    const [astep , setStep] = useState(0);

    const handleNext = () => {
        setStep((prevAstep) => prevAstep + 1)
    }

    const handleBack = () => {
        setStep((prevAstep) => prevAstep - 1)
    }

    const resetStep = () => {
        setStep(0)
    };

    return(
        <Card>
            <CardActionArea>
                <CardMedia 
                    component="img" 
                    height=''
                    image={image}
                />
            </CardActionArea>
            <CardContent>
                <Box sx={{fontSize: '200%'}} >
                    <Stepper activeStep={astep} orientation='vertical' >
                        {data.map((step , index) => (
                            <Step key={step.label} >
                                <StepLabel
                                    optional={
                                        index=== data.length - 1 ? (<Typography variant='caption' sx={{fontSize: '100%'}} >Last Step</Typography>): null
                                    } 
                                >
                                    <Typography sx={{fontSize: '150%'}} > {step.label}</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Typography sx={{fontSize: '100%'}} >{step.description}</Typography>
                                    <Box>
                                        <Button variant='contained' onClick={handleNext} sx={{fontSize: '50%'}} >
                                            {index === data.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button disabled={index === 0} onClick={handleBack} sx={{fontSize: '50%'}} >
                                            Back
                                        </Button>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {astep === data.length && (
                        <Paper>
                            <Typography sx={{fontSize: '80%'}} >All steps completed - you are finished</Typography>
                            <Button onClick={resetStep} sx={{fontSize: '80%'}} >
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </CardContent>

        </Card>
    )
}

export default CardAsset
