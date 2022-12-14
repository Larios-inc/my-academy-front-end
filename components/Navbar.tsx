import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import Logo from '../utils/logoWaveless.svg';

const Navbar = () => {
  return (
    <div>
      <Link href="/">
       <div>
        <Image
          className='cursoer-pointer'
          src={Logo}
          alt="LOGO"
          // layout='responsive' this make the logo too huge 
        />
       </div>
      </Link>
    </div>
  )
}

export default Navbar