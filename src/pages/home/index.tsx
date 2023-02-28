import Layout from '@/src/layout'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/home.module.css'
import ContactForm from '@/src/components/elements/contactForm';
import HomeBanner from '@/src/components/elements/homeBanner';
import Link from 'next/link';
import Slider from 'react-slick';
import ProdcutSlider from '@/src/components/elements/prodcutSlider';





const Home = () => {
  return (
    <Fragment>
      <Layout>
        {/* Home Banner Section Start */}
        <HomeBanner />
        {/* Home Banner Section End */}

        {/* Supply our product */}

        <section className='she_section_card' style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className={styles.she_home_supplyProduct}>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/dental-equipment.jpg" alt="" />
                  <h4>Dental Equipment</h4>
                </div>
              </Link>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/hospital-equipment.jpg" alt="" />
                  <h4>Hospital Equipment</h4>
                </div>
              </Link>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/Laboratory-Equipment.jpg" alt="" />
                  <h4>Laboratory Equipment</h4>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Supply our product */}

        {/* Our Prodcut start */}
        <ProdcutSlider />
        {/* Our Prodcut end */}


        {/* Enquiry Form Section */}
        <ContactForm />
        {/* Enquiry Form Section */}

      </Layout>
    </Fragment>
  )
}

export default Home