import ContactForm from '@/src/components/elements/contactForm'
import Layout from '@/src/layout'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from '../../../styles/module/home.module.css'


const Contact = () => {
  return (
    <Fragment>
      <Layout>
        <div className={styles.she_services_banner}>
          <div className="container">
            <h4 className={styles.she_about_titles}>Contact Us</h4>
            <ul className={styles.she_about_back}>
              <li><p><Link href={'/'}>Home</Link></p></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </Layout>
    </Fragment>
  )
}

export default Contact