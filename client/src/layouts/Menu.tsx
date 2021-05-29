import { Nav, NavItem, NavLink } from 'reactstrap'
import Logo from '../assets/TooDooLogo.png'

export default function Menu() {
    return (
        <Nav vertical className="mt-3" id="Menu">
            <NavItem>
                <NavLink href="/" style={{color:"white",fontSize:"1.7rem"}}>
                    <img id="Logo" src={Logo} alt="Logo"
                        style={{
                            width:"3.3rem",
                            height: "3.3rem",
                            marginRight: "10px"
                        }}
                    />
                    <strong>TooDoo</strong>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/" style={{color:"white",fontSize:"1.3rem"}}>
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about" style={{color:"white",fontSize:"1.3rem"}}>
                    About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/nhatnguyen9813/toodoo-app" style={{color:"white",fontSize:"1.3rem"}}>
                    GitHub
                </NavLink>
            </NavItem>
        </Nav>
    )
}
