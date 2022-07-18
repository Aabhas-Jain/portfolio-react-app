import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiDevdotto} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aabhasjain96/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Aabhas-Jain' target="_blank"><FaGithub/></a>
        <a href='https://dev.to/aabhasjain' target="_blank"><SiDevdotto/></a>
    </div>
  )
}

export default HeaderSocials