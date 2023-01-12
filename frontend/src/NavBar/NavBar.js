import React, {useState} from "react"
import logo from "../images/logo.svg";
import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import menuOpen from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import './NavBar.css'

const NavBar = () => {
    const [openCompany, setOpenCompany] = useState(false)
    const [openFeatures, setOpenFeatures] = useState(false)
    const toggleOpenMenu = () => {
        const navbar = document.querySelector(".navbar")
        const menuButton = document.querySelector(".menu-button")

        navbar.classList.toggle("open")

        if (navbar.classList.contains("open")) {
            menuButton.src = closeMenu
        } else {
            menuButton.src = menuOpen
        }
    }
    return (
        <header className={"header"}>
            <div className={"headerDiv"}>
                <img src={logo} alt="" className={"imgHeader"} />
                <nav className="navbar">
                    <div className="nav-item">
                        <button
                            onClick={() => {
                                setOpenFeatures(!openFeatures)
                                setOpenCompany(false)
                            }}
                            className={`button dropdown-button ${openFeatures ? 'active' : ''}`}
                        >
                            <span>Features</span>
                            {openFeatures ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{width: '20px', height: '20px'}}>
                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                </svg>
                              
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{width: '20px', height: '20px'}}>
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>

                            )}
                        </button>
                        {openFeatures && (
                            <ul className="unorderedList">
                                <li className="listItem">
                                    <img src={todolist} alt="" className="imgItem" /> Todo List
                                </li>
                                <li className="listItem">
                                    <img src={calendar} alt="" className="imgItem" /> Calendar
                                </li>
                                <li className="listItem">
                                    <img src={reminders} alt="" className="imgItem" /> Reminders
                                </li>
                                <li className="listItem">
                                    <img src={planning} alt="" className="imgItem" /> Planning
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="nav-item">
                        <button
                            onClick={() => {
                                setOpenCompany(!openCompany)
                                setOpenFeatures(false)
                            }}
                            className={`button dropdown-button ${openCompany ? 'active' : ''}`}
                        >
                            <span>Company</span>
                            {openCompany ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{width: '20px', height: '20px'}}>
                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{width: '20px', height: '20px'}}>
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                        {openCompany && (
                            <ul className="unorderedList">
                                <li className="listItem">
                                    History
                                </li>
                                <li className="listItem">
                                    Our Team
                                </li>
                                <li className="listItem">
                                    Blog
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="careerButton nav-item">
                        <button className="button">Careers</button>
                    </div>
                    <div className="nav-item">
                        <button className="button">About</button>
                    </div>
                </nav>
            </div>

            <div className="hidden">
                <button onClick={toggleOpenMenu} className='button'>
                    <img src={menuOpen} alt="" className="menu-button" />
                </button>
            </div>

            <div className="loginRegisterDiv">
                <button className="loginButton button">Login</button>
                <button className="registerButton">
                    Register
                </button>
            </div>
        </header>
    );
}


export default NavBar;
