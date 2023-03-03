import ContactForm from '@/src/components/elements/contactForm'
import SampleNextArrow from '@/src/components/elements/sampleNextArrow'
import SamplePrevArrow from '@/src/components/elements/samplePrevArrow'
import Layout from '@/src/layout'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Fragment, useEffect, useState } from 'react'
import Slider from 'react-slick'
import styles from '../../../styles/module/home.module.css'
import Partner from '@/src/components/elements/partner'


const clientFeedBack = {
  arrows: false,
  dots: true,
  edgeFriction: 1,
  rows: 1,
  slidesToShow: 3,
  infinite: true,
  swipeToSlide: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }

  ]
};


const About = () => {

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const updateCount = () => {
  //     const target = Math.floor(window.pageYOffset / 10); // update count every 10 pixels scrolled
  //     const increment = target - count;
  //     const step = Math.ceil(increment / 10);
  //     setCount(count + step);
  //   };

  //   window.addEventListener("scroll", updateCount);

  //   return () => {
  //     window.removeEventListener("scroll", updateCount);
  //   };
  // }, [count]);

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <Fragment>
      <Layout>
        <section className={styles.she_about_banner} style={{ backgroundImage: 'url(images/project-bg.jpg)' }}>
          <div className="container">
            <div className={styles.she_about_header}>
              <h1 className='she_heading'>About</h1>
              <ul>
                <Link href={'/'}><li>Home</li></Link>
                <li className={styles.active}>About</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='she_section_card' style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <h1 className='she_heading'>What We Do?</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div className={styles.she_wwd}>
              <div className={styles.she_left_wwd}>
                <img src="/images/aboutus1.png" alt="about Us" />
              </div>
              <div className={styles.she_right_wwd}>
                <h1>High quality medical equipment and supplies</h1>
                <h4>
                  We provide and extend personalized & innovative healthcare services to its customers.
                </h4>
                <p>
                  We have decades of experience selling medical equipment and supplies and managing healthcare facilities.
                  We started Medizin Medical Supplies to provide an easy way for organizations to purchase high quality
                  medical equipment and supplies from leading manufacturers.
                </p>
                <p>
                  Customer excellence has always been a top priority and it always will be.
                  Thank you for visiting our site. We look forward to working with you!
                </p>
                <button>Discover Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container">
            <h1 className={styles.she_wwd_head}> We provide and extend personalized & innovative <br /> healthcare services to its customers.</h1>
            <h4 className={styles.seh_wwd_subheade}>We have recently organised a new office location at 33 Queens Square, Leeds to cater for the <br /> growth of business for North of UK and Scotland locations. </h4>
            <div className={styles.she_wwd_help}>
              <div className={styles.she_wwd_card}>
                <img src="/images/vision.png" alt="Our Vision" />
                <div className={styles.she_card_centents}>
                  <h4>Our Vision</h4>
                  <ul>
                    <li>Good Services</li>
                    <li>For Community</li>
                    <li>Long Term Development</li>
                    <li>Save Our Planet</li>
                    <li>Help People</li>
                  </ul>
                </div>
              </div>
              <div className={styles.she_wwd_card}>
                <img src="/images/promise.png" alt="Our Promise" />
                <div className={styles.she_card_centents}>
                  <h4>Our Promise</h4>
                  <ul>
                    <li>Sustainable Relationship</li>
                    <li>Renew Commitment</li>
                    <li>Provide The Best Solution</li>
                    <li>Profitable Relationship</li>
                    <li>Adapt With People's Needs</li>
                  </ul>
                </div>
              </div>
              <div className={styles.she_wwd_card}>
                <img src="/images/mission.png" alt="Our Mission" />
                <div className={styles.she_card_centents}>
                  <h4>Our Mission</h4>
                  <ul>
                    <li>Change The Habits</li>
                    <li>Best Quality</li>
                    <li>Think Big Do Bigger</li>
                    <li>Stablity & Cpmpetence</li>
                    <li>Safer & Better Life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: '#29419b' }}>
          <div className="container">
            <div className={styles.happy_clients_number}>
              <div className={styles.she_number_box}>
                {/* {Math.round(scrollPosition * 100)}% */}
                <h1>100+</h1>
                <h4>Happy Clients</h4>
              </div>
              <div className={styles.she_number_box}>
                <h1>150+</h1>
                <h4>Finished Projects</h4>
              </div>
              <div className={styles.she_number_box}>
                <h1>50+</h1>
                <h4>Experts</h4>
              </div>
              <div className={styles.she_number_box}>
                <h1>10+</h1>
                <h4>Posts</h4>
              </div>
            </div>
          </div>
        </section>


        <section className='she_section_card' style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container">
            <h1 className={styles.she_wwd_head}> What's clients say about us</h1>
            <h4 className={styles.seh_wwd_subheade}>People love our products and 70% our customers are returned customers. We believe that only way to make a long-term business is helping people.</h4>
            <Slider {...clientFeedBack}>
              <div className={styles.she_clients_card}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate dolorum nostrum consequuntur!
                  Non nam, similique perferendis, minima, aperiam suscipit excepturi quae laudantium itaque maxime sit
                  ipsam voluptatum! Earum, possimus.
                </p>
                <h6>
                  Dr. Deepak Sharma
                </h6>
                <p>
                  Cardiologist | Heart Doctor
                </p>
              </div>
              <div className={styles.she_clients_card}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate dolorum nostrum consequuntur!
                  Non nam, similique perferendis, minima, aperiam suscipit excepturi quae laudantium itaque maxime sit
                  ipsam voluptatum! Earum, possimus.
                </p>
                <h6>
                  Dr. Deepak Sharma
                </h6>
                <p>
                  Cardiologist | Heart Doctor
                </p>
              </div>
              <div className={styles.she_clients_card}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate dolorum nostrum consequuntur!
                  Non nam, similique perferendis, minima, aperiam suscipit excepturi quae laudantium itaque maxime sit
                  ipsam voluptatum! Earum, possimus.
                </p>
                <h6>
                  Dr. Deepak Sharma
                </h6>
                <p>
                  Cardiologist | Heart Doctor
                </p>
              </div>
              <div className={styles.she_clients_card}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate dolorum nostrum consequuntur!
                  Non nam, similique perferendis, minima, aperiam suscipit excepturi quae laudantium itaque maxime sit
                  ipsam voluptatum! Earum, possimus.
                </p>
                <h6>
                  Dr. Deepak Sharma
                </h6>
                <p>
                  Cardiologist | Heart Doctor
                </p>
              </div>
            </Slider>
          </div>
        </section>

        <Partner />

        <ContactForm />
      </Layout>
    </Fragment>
  )
}

export default About