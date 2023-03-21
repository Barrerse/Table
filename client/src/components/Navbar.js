import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import { BiWorld } from "react-icons/bi";

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-900">
      {/* Left section */}
      <div className="flex items-center max-w-screen-xl mx-auto relative">
        <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          {/* Hamburger menu icon */}
          <div
            className="lg:hidden left-4 absolute text-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </div>

          {/* Logo and brand name */}
          <div className="flex items-center text-gray-400 font-semibold text-xl">
            <img src={logo} className="w-12 h-12 mr-2" alt="Logo" />
            <p>TABL</p>
          </div>
        </div>

        {/* Middle section */}
        <div className="hidden lg:flex pl-10">
          <ul className="text-gray-400 text-sm flex gap-5">
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">STORE</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">EXPLORE</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">ABOUT</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">CONTACT</p>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="absolute text-white right-10 top-0 text-sm lg:flex items-center mt-2 hidden">
          {/* Download App button */}
          <div className="flex items-center bg-green-500 px-2 py-1 rounded-md">
            <ImDownload className="w-4 h-4 mr-2" />
            <p>Download App</p>
          </div>

          {/* Sign in button */}
          <div className="ml-4 bg-white hover:bg-gray-50 px-2 py-1 rounded-lg group duration-100 ease-out">
            <p className="text-green-500 font-semibold group-hover:text-white duration-100 ease-out">
              Sign in
            </p>
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Games
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
          </div>
          <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

          {/* Location dropdown */}
          <div className="h-5 w-px bg-white mx-2"></div>

          <div className="flex items-center">
            <BiWorld className="w-5 h-5 mr-1" />
            <p>Location</p>
          </div>
        </div>
      </div>
      
         {/* Mobile menu */}
         {isMobileMenuOpen && (
        <div className="lg:hidden text-white text-sm mt-2 flex flex-col items-center">
          {/* <div className="bg-gray-900 w-full py-2 px-4 flex justify-end">
            <FiX
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div> */}
          <ul className="flex flex-col gap-2 w-full text-center">
            <li>
              <p
                className="text-lg font-semibold hover:text-gray-300">STORE</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">EXPLORE</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">ABOUT</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">CONTACT</p>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">SIGN IN</p>
            </li>
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default AppNavbar;
