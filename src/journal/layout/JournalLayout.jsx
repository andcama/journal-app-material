import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar,SideBar } from "../components";


const drawerWidth=280;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: "flex" }} className='animate_animated animate_fadeIn animate_faster'>
    <NavBar drawerWidth={drawerWidth}/>
     <SideBar drawerWidth={drawerWidth}/>
      <Box component='main' sx={{ flexGrow: 1, p: 10}}>
      
        {children}
      </Box>
    </Box>
  );
};
