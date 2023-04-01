import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../../icons/Icon'
const LikeIcon = () => {
  const like = useSelector((state) => state.like);
  const navigation = useNavigate()
  return (
    <div onClick={()=>{navigation("/likeCart")}} className='header-like-button'>
       <span className='like-length'>{like.likeItems.length>0?like.likeItems.length:""}</span>
      <Icon name="like"/>
    </div>
  )
}

export default LikeIcon