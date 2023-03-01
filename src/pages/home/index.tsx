import Layout from '@/src/layout'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/home.module.css'
import ContactForm from '@/src/components/elements/contactForm';
import HomeBanner from '@/src/components/elements/homeBanner';
import Link from 'next/link';
import Slider from 'react-slick';
import ProdcutSlider from '@/src/components/elements/popularProduct';
import PopularProduct from '@/src/components/elements/popularProduct';
import LatestProduct from '@/src/components/elements/latestProdcut';
import BlogCardSlider from '@/src/components/elements/blogCardSlider';





const Home = () => {
  return (
    <Fragment>
      <Layout>
        {/* Home Banner Section Start */}
        <HomeBanner />
        {/* Home Banner Section End */}

        {/* Supply our product */}

        <section className='she_section_card' style={{ backgroundColor: '#ECF2FF' }}>
          <div className="container">
            <div className={styles.she_home_supplyProduct}>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/hospital-equipment.jpg" alt="Hospital Equipment" />
                  <div className={styles.she_ftr_suply}>
                    <h4>Hospital Equipment</h4>
                  </div>
                </div>
              </Link>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/dental-equipment.jpg" alt="Dental Equipment" />
                  <div className={styles.she_ftr_suply}>
                    <h4>Dental Equipment</h4>
                  </div>
                </div>
              </Link>
              <Link href={'/'}>
                <div className={styles.she_supplay}>
                  <img src="/images/Laboratory-Equipment.jpg" alt="" />
                  <div className={styles.she_ftr_suply}>
                    <h4>Laboratory Equipment</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Supply our product */}

        {/* Our Prodcut start */}
        <PopularProduct />
        {/* Our Prodcut end */}

        {/* Latest Product SHE */}
        <LatestProduct />
        {/* Latest Product SHE */}

        {/* Most Product SHE */}

        <section className="she_section_card" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className={styles.she_most_main}>
              <div className={styles.she_most_left}>
                <img src="/images/banner-1.jpg" alt="banner" />
              </div>
              <div className={styles.she_most_right}>
                <div className={styles.she_most_top}>
                  <img src="/images/banner-2.jpg" alt="Banner One" />
                </div>
                <div className={styles.she_most_bottom}>
                  <img src="/images/banner-3.jpg" alt="Banner two" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Most Product SHE */}


        {/* Enquiry Form Section */}
        <ContactForm />
        {/* Enquiry Form Section */}


        {/* Home Blog Section Start */}
        <BlogCardSlider />
        {/* Home Blog Section Start */}

      </Layout>
    </Fragment>
  )
}

export default Home