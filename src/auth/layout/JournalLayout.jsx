import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar } from '../../journal/components/NavBar';
import { SideBar } from '../../journal/components/SideBar';



const drawerWidth = 400;

export const JournalLayout = ({ children }) => {
  return (
    <Box 
    className="animate_animated animate_fadeIn animate_faster"

    sx={{ display: 'flex' }}>

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}