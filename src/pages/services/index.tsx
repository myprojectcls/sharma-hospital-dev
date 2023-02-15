import ContactForm from '@/src/components/elements/contactForm'
import Layout from '@/src/layout'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/home.module.css'

const Services = () => {
  return (
    <Fragment>
      <Layout>
        <div className={styles.she_services_banner}>
          <div className="container">
            <h4 className={styles.she_about_titles}>Services</h4>
            <ul className={styles.she_about_back}>
              <li><p><Link href={'/'}>Home</Link></p></li>
              <li>Services</li>
            </ul>
          </div>
        </div>

        <div className="she_section_card" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non
              nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit.
              Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla
              sit amet nisl tempus convallis quis ac lectus.
            </p>
          </div>
        </div>

        <div className="she_section_card" style={{ backgroundColor: '#eee' }}>
          <div className="container">
            <h1 className={styles.she_sub_heading2}>Our Services</h1>
            <hr className={styles.she_home_horizental_line2} />
            <div className={styles.she_services_main}>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-1.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-2.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-3.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-4.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-5.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
              <div className={styles.she_services_card}>
                <img src="/images/services-img-6.jpg" alt="services-img-1" />
                <div className={styles.she_footer_card}>
                  <h4>Hospital Cunstrations</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />

      </Layout>
    </Fragment>
  )
}

export default Services