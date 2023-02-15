import React, { Fragment, useState } from 'react'
import Layout from '../layout'
import styles from '../../styles/module/product.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import ContactForm from '../components/elements/contactForm';

const homeBanner = {
  arrows: false,
  dots: false,
  pauseOnHover: false,
  infinite: true,
  speed: 10000,
  autoplay: true,
  fade: false,
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

const doctors = {
  arrows: false,
  dots: true,
  edgeFriction: 1,
  rows: 1,
  slidesToShow: 1,
  infinite: true,
  swipeToSlide: true,
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

const sheclientslider = {
  arrows: false,
  dots: true,
  edgeFriction: 1,
  rows: 1,
  slidesToShow: 1,
  infinite: true,
  swipeToSlide: true,
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




const LandingPages = () => {

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

        <section className='she_section_card' style={{ backgroundColor: "#29419b", paddingBottom: "100px" }}>
          <div className="container">
            <h1 className={styles.she_sub_heading}>Find a Doctor Around You </h1>
            <hr className={styles.she_home_horizental_line} />
            <Slider className={styles.she_slider} {...doctors}>
              <div className={styles.she_doctor_list}>
                <div className={styles.she_doctor_main}>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category1.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category2.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category3.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category4.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category5.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category6.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category1.png" alt="category1" />
                  </div>
                </div>
              </div>
              <div className={styles.she_doctor_list}>
                <div className={styles.she_doctor_main}>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category1.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category2.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category3.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category4.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category5.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category6.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category3.png" alt="category1" />
                  </div>
                </div>
              </div>
            </Slider >

            {/* Mobile View */}
            <Slider className={styles.she_slider2} {...doctors}>
              <div className={styles.she_doctor_list}>
                <div className={styles.she_doctor_main}>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category1.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category2.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category3.png" alt="category1" />
                  </div>
                </div>
              </div>
              <div className={styles.she_doctor_list}>
                <div className={styles.she_doctor_main}>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category4.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category5.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category6.png" alt="category1" />
                  </div>
                </div>
              </div>
              <div className={styles.she_doctor_list}>
                <div className={styles.she_doctor_main}>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category1.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category2.png" alt="category1" />
                  </div>
                  <div className={styles.she_doctor_list_img}>
                    <img src="/images/category3.png" alt="category1" />
                  </div>
                </div>
              </div>
            </Slider>
            {/* Mobile View */}
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>Our Products</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div className={styles.she_services_main}>
              <div className={styles.she_prodcut1}>
                <img src="images/img1.png" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Hospital Furniture</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img4.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Medical Disposables</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img8.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>OT Examination Light</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img9.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Diagnostic Equipment</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img6.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>ICU Equipment</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img7.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Hospital Holloware</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img5.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Autoclave & Sterilizers</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img6.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Anaesthesia Equipment</h4>
                </div>
              </div>
              <div className={styles.she_prodcut1}>
                <img src="images/img10.jpg" alt="Hospital Equipment" />
                <div className={styles.she_service_tag}>
                  <h4>Suction Machines</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: 'var(--background-color)', paddingBottom: "100px" }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>Client Testimonials</h1>
            <hr className={styles.she_home_horizental_line2} />
            <Slider className={styles.she_slider3}  {...sheclientslider}>
              <div className={styles.she_client_slider_main}>
                <div className={styles.she_client_list}>
                  <div className={styles.she_list_cts}>
                    <div className={styles.she_testimonials_clients}>
                      <div className={styles.she_testi_img}>
                        <img src="/images/category1.png" alt="" />
                      </div>
                      <div className={styles.she_testi_cont}>
                        <h4>Mr.Deepak Sharma</h4>
                        <p>Obstetrics & Gynaecology</p>
                      </div>
                    </div>
                    <p className={styles.she_testi_text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa exercitationem
                      praesentium, asperiores quis consequatur fugit dolor, nulla eligendi alias aspernatur
                      inventore consequuntur eveniet qui delectus distinctio at odio excepturi?
                    </p>
                  </div>
                  <div className={styles.she_list_cts}>
                    <div className={styles.she_testimonials_clients}>
                      <div className={styles.she_testi_img}>
                        <img src="/images/category1.png" alt="" />
                      </div>
                      <div className={styles.she_testi_cont}>
                        <h4>Mr.Deepak Sharma</h4>
                        <p>Obstetrics & Gynaecology</p>
                      </div>
                    </div>
                    <p className={styles.she_testi_text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa exercitationem
                      praesentium, asperiores quis consequatur fugit dolor, nulla eligendi alias aspernatur
                      inventore consequuntur eveniet qui delectus distinctio at odio excepturi?
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.she_client_slider_main}>
                <div className={styles.she_client_list}>
                  <div className={styles.she_list_cts}>
                    <div className={styles.she_testimonials_clients}>
                      <div className={styles.she_testi_img}>
                        <img src="/images/category1.png" alt="" />
                      </div>
                      <div className={styles.she_testi_cont}>
                        <h4>Mr.Deepak Sharma</h4>
                        <p>Obstetrics & Gynaecology</p>
                      </div>
                    </div>
                    <p className={styles.she_testi_text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa exercitationem
                      praesentium, asperiores quis consequatur fugit dolor, nulla eligendi alias aspernatur
                      inventore consequuntur eveniet qui delectus distinctio at odio excepturi?
                    </p>
                  </div>
                  <div className={styles.she_list_cts}>
                    <div className={styles.she_testimonials_clients}>
                      <div className={styles.she_testi_img}>
                        <img src="/images/category1.png" alt="" />
                      </div>
                      <div className={styles.she_testi_cont}>
                        <h4>Mr.Deepak Sharma</h4>
                        <p>Obstetrics & Gynaecology</p>
                      </div>
                    </div>
                    <p className={styles.she_testi_text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa exercitationem
                      praesentium, asperiores quis consequatur fugit dolor, nulla eligendi alias aspernatur
                      inventore consequuntur eveniet qui delectus distinctio at odio excepturi?
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: '#1F3C88' }}>
          <div className="container">
            <div className={styles.she_subscribe_tools}>
              <h1>Get notified about the event! Subscribe Today</h1>
              <div className={styles.she_input_field}>
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </Layout>
    </Fragment >
  )
}

export default LandingPages

function setBody(arg0: string) {
  throw new Error('Function not implemented.');
}
