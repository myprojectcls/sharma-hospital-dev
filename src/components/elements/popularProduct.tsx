import React, { Fragment } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../../styles/component/prodcutSlider.module.css'
import SampleNextArrow from './sampleNextArrow';
import SamplePrevArrow from './samplePrevArrow';
import { popularProduct } from '../storeData/popularProduct';

const productSetting = {
    arrows: true,
    dots: false,
    edgeFriction: 1,
    rows: 1,
    slidesToShow: 4,
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
            }
        }

    ]
};




const PopularProduct = () => {
    return (
        <Fragment>
            <div className="she_section_card" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h1 className='she_heading'>popular products</h1>
                    <hr className={styles.she_home_horizental_line2} />
                    <div className={styles.she_product_main}>
                        <Slider {...productSetting}>
                            {
                                popularProduct?.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.she_slide_card}>
                                            <img src={item.images} alt={item.alt} />
                                            <h5>{item.title}</h5>
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

export default PopularProduct