import {Routes , Route} from 'react-router-dom'
import Sidebar from './components/global/Sidebar';
import Appbar from './components/global/Appbar';
import { CssBaseline , ThemeProvider } from '@mui/material';
import { ColorModeContext , useMode } from './theme';
import Dashboard from './components/main/Dashboard';
import Alert from './components/main/Alert'


function App() {

  const [theme , colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="App">
          <Sidebar />
          <Appbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/alert' element={<Alert/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
