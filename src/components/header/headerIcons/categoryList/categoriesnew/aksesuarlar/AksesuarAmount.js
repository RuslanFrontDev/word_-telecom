import React from 'react'
import { Link } from 'react-router-dom'
import AksesuarList from './AksesuarList'

const AksesuarAmount = () => {
   return (
      <div className='aks-amount'>
        <div className='aks-amount-link'>
           <Link to="/mehsullar/mobil-telefonlar" >Aksesuar satışları</Link>
        </div>
        <AksesuarList/>
      </div>
    )
}

export default AksesuarAmount