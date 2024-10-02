import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import SubMenu from './SubMenu';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo192.png';

const SidebarNav = styled("nav")(({ theme, isOpen }) => ({
  background: '#fff',
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.7)",
  width: isOpen ? '300px' : '0px',
  padding: isOpen ? '30px 10px' : '0px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '350ms',
  zIndex: '10',
  overflowY: 'auto',
  visibility: isOpen ? 'visible' : 'hidden',
  boxShadow: isOpen ? '0px 4px 20px rgba(47, 143, 232, 0.07)' : 'none',
}));

const SidebarWrap = styled("div")(({ theme }) => ({
  width: '100%'
}));

const Overlay = styled("div")(({ theme, isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  visibility: isOpen ? 'visible' : 'hidden',
  opacity: isOpen ? '1' : '0',
  transition: 'opacity 0.3s ease',
  zIndex: '9'
}));


const Sidebar = ({ isOpen ,SidebarData}) => {

  const isMobile = useMediaQuery("(max-width:1100px)");

  const handleItemClick = (componentName,ComponentId) => {
   //implement active Tab logic
  };

  const toggleOpen = (val = null) => {
    if (val) {
      
      return;
    }
  
  };

  useEffect(() => {
    if (!isMobile) {
      toggleOpen(true);
      return;
    }
    toggleOpen(false);
  }, [isMobile]);

  return (
    <>
      {isMobile && <Overlay isOpen={isOpen}  onClick={() => toggleOpen(false)} />}
      <SidebarNav isOpen={isOpen} className="LeftSidebarNav">
        <SidebarWrap>
          <Box
            sx={{
              mb: '20px',
              px: '20px',
              display: 'flex',
              alignItems: 'center',
              
              justifyContent: 'space-between'
            }}
          >
            <Link to={'/'}>
              <img src={logo} alt="Logo" style={{ marginLeft:"40px",width:"150px", height: '100px' }} />
            </Link>
          </Box>
          {SidebarData?.map((item, index) => (
            <SubMenu item={item} key={index} onItemClick={handleItemClick} />
          ))}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

