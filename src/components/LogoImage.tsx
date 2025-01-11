import React from 'react'

import Image from 'next/image'
import Logo from "../../public/images/logo/web_logo-removebg-preview.png";
export default function LogoImage({classNames} : {classNames?: string}) {
  return (
    <Image width={1000} height={1000} src={Logo} alt="logo" className={` ${classNames || 'w-44 h-44 object-cover'}`}/>
  )
}
