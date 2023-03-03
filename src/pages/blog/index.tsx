import { blogCardSlider } from '@/src/components/storeData/blogCardSlider'
import Layout from '@/src/layout'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import styles from '../../../styles/module/home.module.css'

const Blog = () => {
  return (
    <Fragment>
      <Layout>
        <section className={styles.she_about_banner} style={{ backgroundImage: 'url(images/project-bg.jpg)' }}>
          <div className="container">
            <div className={styles.she_about_header}>
              <h1 className='she_heading'>About</h1>
              <ul>
                <Link href={'/'}><li>Home</li></Link>
                <li className={styles.active}>Blog</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='she_section_card' style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container">
            <div className={styles.she_blog_main}>
              <div className={styles.she_left_blog}>

                {
                  blogCardSlider?.map((item, index) => {
                    return (
                      <div className={styles.she_card_blog}>
                        <div className={styles.blog_img}>
                          <img src={item.img} alt="" />
                        </div>
                        <div className={styles.blog_card_ctn}>
                          <div className={styles.blog_date}>
                            <span><FaRegCalendarAlt /></span>
                            <p>{item.publishDate}</p>
                          </div>
                          <h4>{item.blogTitle.substring(0, 30)}...</h4>
                          <p>
                            {item.blogDescription}
                          </p>
                          <Link href={item.blogLink}>
                            <button>Read More</button>
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className={styles.she_right_blog}>

              </div>
            </div>
          </div>
        </section>

      </Layout>
    </Fragment>
  )
}

export default Blog