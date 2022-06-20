import { Link } from 'react-router-dom'
import profileImg from '../assets/img/profileImg.jpg'
import logo from '../assets/img/Logo.png'
import useSignout from '../Hooks/useSignout'
import { useAuthContext } from '../Hooks/useAuthContext'
import { BsBell, BsBellFill, BsBoxArrowInRight, BsFillCaretDownFill, BsFillPersonFill } from "react-icons/bs";
import { useState } from 'react'
import { motion } from 'framer-motion'


export default function Navbar() {
    const { user } = useAuthContext()
    const [logout, isPending, error] = useSignout()
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            {/* ======= Header ======= */}
            < header id="header" className="header fixed-top d-flex align-items-center position-relative" >
                <div className='container d-flex align-items-center'>
                    {/* Logo Start */}
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={'/'} className="logo d-flex align-items-center">
                            <img src={logo} alt="" />
                            <span className="d-none d-lg-block">Electro Media</span>
                        </Link>
                        <i className="bi bi-list toggle-sidebar-btn"></i>
                    </div>
                    {/* Logo End */}
                    <nav className="header-nav ms-auto" >
                        <ul className="d-flex align-items-center">
                            <li className="nav-item d-block d-lg-none">
                                <a className="nav-link nav-icon search-bar-toggle " href="#">
                                    <i className="bi bi-search" />
                                </a>
                            </li>
                            {/* End Search Icon*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                    <BsBell />
                                    <span className="badge bg-primary badge-number">4</span>
                                </a>
                            </li>
                            {/* End Notification Icon */}
                            {/* End Notification Nav */}
                            <li className="nav-item pe-3" onClick={() => setShowMenu(!showMenu)}>
                                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" >
                                    <img src={profileImg} alt="Profile" className="rounded-circle" />
                                    <span className="d-none d-md-block ps-2">{user.displayName}</span>
                                    <BsFillCaretDownFill />
                                </a>
                                {/* End Profile Iamge Icon */}
                                {
                                    showMenu && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 200 }}
                                            className='position-absolute profile shadow d-flex justify-content-center align-items-center p-0'>
                                            <div className='my-2'>
                                                <li className='px-5 d-flex align-items-center text-dark gap-2'>
                                                    <h6>{user.displayName}</h6>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li className='px-5'>
                                                    {/* <a className="dropdown-item d-flex align-items-center" href="users-profile.html"> */}
                                                    <Link to={'/profile'} className='d-flex align-items-center text-dark gap-2'>
                                                        <BsFillPersonFill />
                                                        <span>My Profile</span>
                                                    </Link>
                                                    {/* </a> */}
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li className='px-5'>
                                                    <div className='d-flex align-items-center text-dark gap-2 cursor-pointer' onClick={() => logout()}>
                                                        <BsBoxArrowInRight />
                                                        <span>Sign out</span>
                                                        {
                                                            isPending && (
                                                                <div class="spinner-border text-primary" role="status">
                                                                    <span class="visually-hidden">Loading...</span>
                                                                </div>
                                                            )
                                                        }

                                                    </div>
                                                </li>
                                            </div>
                                        </motion.ul>
                                    )
                                }
                                {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-person" />
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear" />
                                            <span>Account Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i className="bi bi-question-circle" />
                                            <span>Need Help?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="bi bi-box-arrow-right" />
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul> */}
                                {/* End Profile Dropdown Items */}
                            </li>{/* End Profile Nav */}
                        </ul>
                    </nav > {/* End Icons Navigation */}
                </div>
            </header > {/* End Header */}
        </>
    )
}
