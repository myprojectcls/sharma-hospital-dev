import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from '../../styles/module/footer.module.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <Fragment>
      <div className='she_desk_footer'>
        <div className="container">
          <div className={styles.she_footer_main}>
            <div className={styles.she_footer_block}>
              <h4>About </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eius, nihil aliquam earum
                iste fuga doloribus porro explicabo voluptas
              </p>
              <div className={styles.social_media}>
                <Link href={''}>
                  <span style={{ color: '#1877F2' }}><FaFacebookF /></span>
                </Link>
                <Link href={''}>
                  <span style={{ color: '#E4405F' }}><FaInstagram /></span>
                </Link>
                <Link href={''}>
                  <span style={{ color: '#0A66C2' }}><FaLinkedinIn /></span>
                </Link>
                <Link href={''}>
                  <span style={{ color: '#1DA1F2' }}><FaTwitter /></span>
                </Link>
              </div>
            </div>
            <div className={styles.she_footer_useful}>
              <h4>Useful Links</h4>
              <ul>
                <li>About</li>
                <li>Product</li>
                <li>Services</li>
                <li>Blog</li>

              </ul>
            </div>
            <div className={styles.she_footer_other}>
              <h4>Other Links</h4>
              <ul>
                <li>Contact</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className={styles.she_footer_block}>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  info@sharmahospitalequipment.com
                </li>
                <li>
                  +91 9911325549 / 8920297423
                </li>
                <li>Ganga Complex, Kankarbagh, Patna-20 (INDIA)</li>
              </ul>
            </div>
          </div>
          <div className={styles.she_copy_write}>
            <p>© 2023. All right reserverd by SHARMA HOSPITAL EQUIPMENT | Developed By: Pintar Sharma</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer