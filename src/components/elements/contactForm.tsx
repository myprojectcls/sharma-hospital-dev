import React, { Fragment, useState } from 'react'
import styles from '../../../styles/module/home.module.css'

const ContactForm = () => {

    const [name, setName] = useState<any>()
    const [mobile, setMobile] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [message, setMessage] = useState<any>()
    const [submitted, setSubmitted] = useState(false)

    const [errorState, setErrorState] = useState<any>({
        nameError: false,
        mobileError: false,
        emailError: false,
        messageError: false,
    })

    const validateSubmission = () => {
        let allData = errorState
        if (!name) {
            allData = { ...allData, nameError: true }
        } else {
            allData = { ...allData, nameError: false }
        }

        if (!mobile) {
            allData = { ...allData, mobileError: true }
        } else {
            allData = { ...allData, mobileError: false }
        }

        if (!email) {
            allData = { ...allData, emailError: true }
        } else {
            allData = { ...allData, emailError: false }
        }

        if (!message) {
            allData = { ...allData, messageError: true }
        } else {
            allData = { ...allData, messageError: false }
        }
        setErrorState(allData)
        if (!allData.nameError && !allData.mobileError && !allData.emailError && !allData.messageError) {
            sendmail()
        }
    }

    const sendmail = () => {
        console.log('Sending')
        let data = {
            name,
            mobile,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setMobile('')
                setEmail('')
                setMessage('')
            }
        })
    }

    const validateEmail = (value: any) => {
        var re = /\S+@\S+\.\S+/;
        if (re.test(value) === true) {
            setEmail(value)
        } else {
            setEmail('')
        }
    }

    const validateMobileNum = (value: any) => {
        var re = /^[0-9]+$/;
        if (re.test(value) === true && value.length === 10) {
            setMobile(value)
        } else {
            setMobile('')
        }
    }


    return (
        <Fragment>
            <section className='she_section_card' style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <div className={styles.she_get_tuch_in}>
                        <div className={styles.she_left_gettuchin}>
                            <img src="/images/she_get_tuch_in.jpg" alt="she_get_tuch_in" />
                        </div>
                        <div className={styles.she_righ_gettuchin}>
                            <h1>Get In Touch</h1>
                            {
                                submitted &&
                                <div className={styles.alrt_message}>
                                    <h4>Thank You!</h4>
                                    <p>Your details has been successfully</p>
                                    <p>submitted. Thanks!</p>
                                </div>
                            }
                            <input value={name} onChange={(event) => { setName(event.target.value) }} type="text" placeholder='Name*' />
                            {errorState.nameError && <p className={styles.error}>This field is required*</p>}
                            <input type="text" placeholder='Mobile Number*' onChange={(e) => { validateMobileNum(e.target.value) }} />
                            {errorState.mobileError && <p className={styles.error}>This field is required*</p>}
                            <input type="text" placeholder='Email Address*' onChange={(e) => { validateEmail(e.target.value) }} />
                            {errorState.emailError && <p className={styles.error}>This field is required*</p>}
                            <textarea value={message} onChange={(event) => { setMessage(event.target.value) }} placeholder='Message*'></textarea>
                            {errorState.messageError && <p className={styles.error}>This field is required*</p>}
                            <button onClick={validateSubmission}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactForm