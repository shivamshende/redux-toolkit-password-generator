import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="rgba(255, 255, 255, 0.10)">
        <CDBSidebarHeader prefix={<i className="options fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            Settings
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/">
              <CDBSidebarMenuItem className='options' icon="home">Password Generator</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/history">
              <CDBSidebarMenuItem className='options' icon="history">History</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/favorites">
              <CDBSidebarMenuItem className='options' icon="heart">Favorites</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/theme">
              <CDBSidebarMenuItem className='options' icon="palette">Theme</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;