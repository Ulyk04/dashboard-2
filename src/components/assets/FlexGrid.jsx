import React, { useState } from 'react'
import { AllCommunityModule , ModuleRegistry } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

ModuleRegistry.registerModules([AllCommunityModule])

const FlexGrid = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const[row , setRow] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Mercedes", model: "EQA", price: 48890, electric: true },
        { make: "Fiat", model: "500", price: 15774, electric: false },
        { make: "Nissan", model: "Juke", price: 20675, electric: false },
    ])

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" },
      ]);

    const defaulColor = {
        flex: 1,
    }

  return (
    <div style={{width: '700px' , height: '700px'}} >
        <AgGridReact 
            rowData={row}
            columnDefs={colDefs}
            defaultColDef={defaulColor}
            />
    </div>
  )
}

export default FlexGrid