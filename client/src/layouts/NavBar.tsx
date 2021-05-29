import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Logo from '../assets/TooDooLogo.png'

export default function NavBar() {
    const isMobile = useMediaQuery({ query: `(max-width: 750px)` })
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)

    if (isMobile) {
        return (
            <Navbar light style={{backgroundColor:"#F5AB35"}} id="NavBar">
                <NavbarBrand href="/" className="mr-auto"
                    style={{
                        fontSize:"1.4rem",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "-5px"
                    }}
                >
                    <img id="Logo" src={Logo} alt="Logo"
                        style={{
                            width:"3rem",
                            height: "3rem",
                            marginTop: "5px",
                            marginRight: "10px"
                        }}
                    />
                    <div>
                        <div><strong>TooDoo</strong></div>
                        <div style={{fontSize:"0.85rem"}}>A minimalistic note app</div>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/nhatnguyen9813/toodoo-app">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
    else
        return (
            <Navbar light style={{backgroundColor:"#F5AB35",fontSize:"1.4rem"}}>
                <NavbarBrand href="/" className="mr-auto"
                    style={{
                        fontSize:"1.6rem",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "-5px",
                        marginRight: "200px"
                    }}
                >
                    <img id="Logo" src={Logo} alt="Logo"
                        style={{
                            width:"4rem",
                            height: "4rem",
                            marginTop: "5px",
                            marginRight: "15px"
                        }}
                    />
                    <div>
                        <div><strong>TooDoo</strong></div>
                        <div style={{fontSize:"0.95rem"}}>A minimalistic note app</div>
                    </div>
                </NavbarBrand>
                <Nav className="mr-auto" navbar style={{display:"flex",flexDirection:"row",position:"absolute",right:"20px"}}>
                    <NavItem style={{margin:"0 10px 0 10px"}}>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem style={{margin:"0 10px 0 10px"}}>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem style={{margin:"0 10px 0 10px"}}>
                        <NavLink href="https://github.com/nhatnguyen9813/toodoo-app">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
}
