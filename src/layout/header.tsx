import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import styles from '../../styles/module/header.module.css'

const Header = () => {
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const classes = `header-section d-none d-xl-block ${sticky}`;

    return (
        <Fragment>
            <header className={classes}>
                <div className="she_desk_header">
                    <div className="container">
                        <div className={styles.she_header}>
                            <div className={styles.she_logo}>
                                <Link href={'/'}><img src="/images/logo.png" alt="Sharam Hospital Equipment" /></Link>
                            </div>
                            <ul className={styles.she_header_menu}>
                                <Link href={'/'}><li>Home</li></Link>
                                <Link href={'/about'}><li>About</li></Link>
                                <Link href={'/services'}><li>Services</li></Link>
                                <Link href={'/product'}><li>Product</li></Link>
                                <Link href={'/blog'}><li>Blog</li></Link>
                                <Link href={'/contact'}> <li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header