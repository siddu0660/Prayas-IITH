import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-end p-4 gap-2">
                <NavLink to="/"> 
                    About
                </NavLink>

                <NavLink to="/announcements">
                    Announcements
                </NavLink>
                
                <NavLink to="/competitions">
                    Competitions
                </NavLink>
                
                <NavLink to="/gallery">
                    Gallery
                </NavLink>
                
                <NavLink to="/team">
                    Team
                </NavLink>
                
                <NavLink to="/donate">
                    Donate
                </NavLink>
                
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
