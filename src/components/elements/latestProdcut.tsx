import React, { Fragment } from 'react'
import styles from '../../../styles/component/latestProduct.module.css'
import { latestProduct } from '../storeData/latestProduct'

const LatestProduct = () => {
    return (
        <Fragment>
            <div className="she_section_card" style={{ backgroundColor: '#ECF2FF' }}>
                <div className="container">
                    <h1 className='she_heading'>Latest products</h1>
                    <hr className={styles.she_home_horizental_line2} />
                    <div className={styles.she_latest_product}>

                        {
                            latestProduct?.map((item, index) => {
                                return (
                                    <div className={styles.she_latest_item}>
                                        <img src={item.images} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LatestProduct