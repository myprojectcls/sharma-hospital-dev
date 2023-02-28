import React, { Children, Fragment } from 'react'
import Footer from './footer'
import Header from './header'
import MobileFooter from './mobileFooter'
import MobileHeader from './mobileHeader'

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Header />
      <MobileHeader />
      {children}
      {/* <MobileFooter/> */}
      <Footer />
    </Fragment>
  )
}

export default Layout