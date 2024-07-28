import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

export default function Header() {
  const user = {
    name: 'User',
  };

  const cart = {
    totalCount: 100,
  };

  const logout = () => {
    // Implement logout logic here
    console.log('User logged out');
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <marquee>FreshFleet</marquee>
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout} className={classes.logout}>Logout</a>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/cart" className={classes.cart}>
                Add to Cart
                {cart.totalCount > 0 && <span className={classes.cart_count}></span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
