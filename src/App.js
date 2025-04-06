import {Routes , Route} from 'react-router-dom'
import Sidebar from './components/global/Sidebar';
import Appbar from './components/global/Appbar';
import { CssBaseline , ThemeProvider } from '@mui/material';
import { ColorModeContext , useMode } from './theme';
import Dashboard from './components/main/Dashboard';
import Alert from './components/main/Alert'
import ButtonPage from './components/main/ButtonPage';
import CardPage from './components/main/CardPage';


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
            <Route path='button' element={<ButtonPage />} />
            <Route path='/cards' element={<CardPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
