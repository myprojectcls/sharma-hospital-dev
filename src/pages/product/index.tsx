import Layout from '@/src/layout'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/product.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Slider from 'react-slick';


const homeBanner = {
  arrows: false,
  dots: false,
  pauseOnHover: false,
  infinite: true,
  speed: 10000,
  autoplay: true,
  fade: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
};


const Product = () => {
  return (
    <Fragment>
      <Layout>
        <section className={styles.she_home_banner}>
          <Slider {...homeBanner}>
            <div className={styles.she_banner_home1}>
              <div className="container">
                <div className={styles.she_banner_home_content}>
                  <div className={styles.she_home_left}>
                    <h1>We Help All People</h1>
                    <h1>In Need</h1>
                    <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={''}>
                      <button className='she_common_button'>Enquiry Now</button>
                    </Link>
                  </div>
                  {/* <div className={styles.she_home_right}>
                      <img src="/images/product4.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className={styles.she_banner_home2}>
              <div className="container">
                <div className={styles.she_banner_home_content}>
                  <div className={styles.she_home_left}>
                    <h1>High Quality Medical</h1>
                    <h1>Equipments</h1>
                    <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={''}>
                      <button className='she_common_button'>Enquiry Now</button>
                    </Link>
                  </div>
                  {/* <div className={styles.she_home_right}>
                      <img src="/images/product4.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className={styles.she_banner_home3}>
              <div className="container">
                <div className={styles.she_banner_home_content}>
                  <div className={styles.she_home_left}>
                    <h1>Best Solution Hospital</h1>
                    <h1>Equipments</h1>
                    <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={''}>
                      <button className='she_common_button'>Enquiry Now</button>
                    </Link>
                  </div>
                  {/* <div className={styles.she_home_right}>
                      <img src="/images/product4.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </Slider>
        </section>

        <div className="she_section_card" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className={styles.she_product_main}>
              <div className={styles.she_product_item}>
                <img src="/images/banner51.jpg" alt="" />
              </div>
              <div className={styles.she_product_item}>
                <img src="/images/banner52.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="she_section_card" style={{ backgroundColor: '#eee' }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>Our Products</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div>
              
            </div>
          </div>
        </div>

      </Layout>
    </Fragment>
  )
}

export default Product