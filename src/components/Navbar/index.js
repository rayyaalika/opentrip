import React from "react";
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarEl";
import "../../App";

const Navbar = () => {
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <h4 className="text-white">Tripvia.com</h4>
                    </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/page4'>FAQ</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='/contact'>Contact</NavLinks>
                    </NavItem> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/page2'>Login</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
