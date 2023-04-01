import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div className='notfound'>
      <Helmet>
        <title>Səhifə tapılmadı</title>
        <meta name="description" content="səhifə tapılmadı description" />
      </Helmet>
      <h2>404</h2>
      <p>Səhifə tapılmadı</p>
    </div>
  )
}

export default NotFound