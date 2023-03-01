import React, { Fragment } from 'react'
import Slider from 'react-slick'
import styles from '../../../styles/component/blogCardSlider.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SampleNextArrow from './sampleNextArrow';
import SamplePrevArrow from './samplePrevArrow';
import { blogCardSlider } from '../storeData/blogCardSlider';
import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';

const blogSetting = {
    arrows: true,
    dots: false,
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
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            }
        }

    ]
};



const BlogCardSlider = () => {
    return (
        <Fragment>
            <div className="she_section_card" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h1 className='she_heading'>Newest Blog</h1>
                    <hr className={styles.she_home_horizental_line2} />
                    <div className={styles.she_product_main}>
                        <Slider {...blogSetting}>
                            {
                                blogCardSlider?.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.she_blog_card}>
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
                        </Slider>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogCardSlider