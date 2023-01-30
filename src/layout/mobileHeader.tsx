import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import styles from '../../styles/module/mobileHeader.module.css'
import { HiMenu } from "react-icons/hi";


const MobileHeader = () => {
  
  const [sticky, setSticky] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <div className="she_mob_header">
          <div className="container">
            <div className={styles.she_header}>
              <div className={styles.she_menu_btn}>
                <span onClick={handleClick}><HiMenu /></span>
              </div>
              <div className={styles.she_logo}>
                <Link href={'/'}><img src="/images/logo.png" alt="Sharam Hospital Equipment" /></Link>
              </div>
            </div>
          </div>
        </div>
        {open ? (
          <div className={styles.she_mobile_menu}>
            <ul className={styles.she_header_menu}>
              <Link href={'/'}><li>Home</li></Link>
              <Link href={'/about'}><li>About</li></Link>
              <Link href={'/services'}><li>Services</li></Link>
              <Link href={'/product'}><li>Product</li></Link>
              <Link href={'/blog'}><li>Blog</li></Link>
              <Link href={'/contact'}> <li>Contact</li></Link>
            </ul>
          </div>
        ) : null}
      </header>



    </Fragment>
  )
}

export default MobileHeader