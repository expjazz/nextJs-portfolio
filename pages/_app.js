import '../styles/globals.css'
import App from 'next/app'
import Page from '../components/Page'
import React from 'react'

function MyApp({Component, pageProps}){
  return (
  <Page>
    <Component {...pageProps} />
  </Page>  
      
  )
}

export default MyApp






//function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
//}