import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import styles from '../../styles/module/header.module.css'

const Header = () => {
    // const [sticky, setSticky] = useState("");

    // useEffect(() => {
    //     window.addEventListener("scroll", isSticky);
    //     return () => {
    //         window.removeEventListener("scroll", isSticky);
    //     };
    // }, []);

    // const isSticky = () => {
    //     const scrollTop = window.scrollY;
    //     const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    //     setSticky(stickyClass);
    // };

    // const classes = `header-section d-none d-xl-block ${sticky}`;

    // const [isOpen, setIsOpen] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsOpen(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsOpen(false);
    // };

    return (
        <Fragment>
            <header className='she_desktop_header'>
                <div className="container">
                    <nav className={styles.navbar}>
                        <div className={styles.she_logo}>
                            <a href="/">
                                <img src="/images/logo.png" alt="" />
                            </a>
                        </div>
                        <ul className={styles.she_nav_menu}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/product">Product</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    )
}

export default Header