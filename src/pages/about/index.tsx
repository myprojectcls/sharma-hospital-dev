import Layout from '@/src/layout'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/home.module.css'

const About = () => {
  return (
    <Fragment>
      <Layout>
        <div className={styles.she_about_banner}>
          <div className="container">
            <h4 className={styles.she_about_titles}>About</h4>
            <ul className={styles.she_about_back}>
              <li><p><Link href={'/'}>Home</Link></p></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className='she_section_card' style={{ backgroundColor: '#fff' }}>
          <div className='container'>
            <div className={styles.she_about_sec1}>
              <div className={styles.she_about_box1}>
                <h4>About Us</h4>
                <hr className={styles.she_about_line} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem suscipit, deserunt in eligendi
                  numquam consequatur expedita ipsum corrupti nemo ullam consectetur temporibus non illum et repellendus
                  fugiat repellat dolorum!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem suscipit, deserunt in eligendi
                  numquam consequatur expedita ipsum corrupti nemo ullam consectetur temporibus non illum et repellendus
                  fugiat repellat dolorum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem suscipit, deserunt in eligendi
                  numquam consequatur expedita ipsum corrupti nemo ullam consectetur temporibus non illum et repellendus
                  fugiat repellat dolorum!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem suscipit, deserunt in eligendi
                  numquam consequatur expedita ipsum corrupti nemo ullam consectetur temporibus non illum et repellendus
                  fugiat repellat dolorum!
                </p>
              </div>
              <div className={styles.she_about_box2}>
                <img src="/images/about1.png" alt="about" />
              </div>
            </div>
          </div>
        </div>

        <div className="she_section_card" style={{ backgroundColor: '#F6F5F5' }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>How Does It Work</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div className={styles.she_about_sec2} >
              <div className={styles.she_about_wdit}>
                <img src="/images/about-search.png" alt="about-search" />
                <h5>Search Prodcuts</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio saepe numquam ratione iste dolore iure
                  reprehenderit necessitatibus accusantium suscipit repudiandae facere tempore quas,
                </p>
              </div>
              <div className={styles.she_about_wdit}>
                <img src="/images/about-select.png" alt="about-select" />
                <h5>Select Products</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio saepe numquam ratione iste dolore iure
                  reprehenderit necessitatibus accusantium suscipit repudiandae facere tempore quas,
                </p>
              </div>
              <div className={styles.she_about_wdit}>
                <img src="/images/about-order.png" alt="about-order" />
                <h5>Order Products</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio saepe numquam ratione iste dolore iure
                  reprehenderit necessitatibus accusantium suscipit repudiandae facere tempore quas,
                </p>
              </div>
              <div className={styles.she_about_wdit}>
                <img src="/images/about-enjoy.png" alt="about-enjoy" />
                <h5>Enjoy</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio saepe numquam ratione iste dolore iure
                  reprehenderit necessitatibus accusantium suscipit repudiandae facere tempore quas,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='she_section_card' style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>Our Partners</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div className={styles.she_about_partner}>
                <img src="/images/partners1.jpg" alt="partners" />
                <img src="/images/partners2.jpg" alt="partners" />
                <img src="/images/partners3.jpg" alt="partners" />
                <img src="/images/partners4.jpg" alt="partners" />
                <img src="/images/partners1.jpg" alt="partners" />
                <img src="/images/partners3.jpg" alt="partners" />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default About