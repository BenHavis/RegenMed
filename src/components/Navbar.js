import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Regen Global</Link>
      </div>
      <div className={`navbar-menu${isMenuOpen ? ' is-open' : ''}`}>
        <Menu className='nav-ul' mode="horizontal">
          <Menu.Item key="home">
            <Link className='navbar-item' to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link className='navbar-item'  to="/services">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link className='navbar-item' to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="navbar-toggle">
        <Button onClick={toggleMenu} type="primary" icon={<MenuOutlined />} />
      </div>
    </nav>
  );
};

export default Navbar;
