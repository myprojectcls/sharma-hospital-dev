import Layout from '@/src/layout'
import React, { Fragment } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import ContactForm from '@/src/components/elements/contactForm';
import styles from '../../../styles/module/home.module.css'

const homeBanner = {
  arrows: false,
  dots: false,
  pauseOnHover: true,
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




const Home = () => {
  return (
    <Fragment>
      <Layout>
        {/* Home Banner Sections Start */}
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
                </div>
              </div>
            </div>
          </Slider>
        </section>
        {/* Home Banner Section End  */}

        <div className={styles.she_home_mob_banner}>

        </div>

        {/* Home Product Section Start */}

        {/* Home Product Section End */}

        {/* Form  */}
        <ContactForm />

        {/* Form */}

      </Layout>
    </Fragment>
  )
}

export default Home