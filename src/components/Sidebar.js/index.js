import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SideBtnWrap, SidebarLink, SidebarMenu } from './SidebarEl';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/about'>About</SidebarLink>
                <SidebarLink to='/page4'>Faq</SidebarLink>
                {/* <SidebarLink to='contact'>Contact</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/page2'>Login</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar