import React from 'react'
import { ChartContainer } from '@mui/x-charts'
import { BarPlot } from '@mui/x-charts'


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Barchart = () => {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: uData, label: 'uv', type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  )
}

export default Barchart