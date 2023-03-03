import React, { Fragment } from 'react'
import styles from '../../../styles/component/partner.module.css'
import { partner } from '../storeData/partner'

const Partner = () => {
    return (
        <Fragment>
            <section className="she_section_card" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className={styles.she_partner_card}>

                        {
                            partner?.map((item, index) => {
                                return (
                                    <div className={styles.card_partner_img}>
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Partner