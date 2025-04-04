import React from 'react'
import { PieChart } from '@mui/x-charts'

const PiePage = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Frontend' },
            { id: 1, value: 15, label: 'Backend' },
            { id: 2, value: 20, label: 'Server' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  )
}

export default PiePage