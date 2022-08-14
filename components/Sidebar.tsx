import {useState} from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div>
      <div className="block" 
      // sidebar for mobile devices
      >
        {showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/> }
      </div>
    </div>
  )
}

export default Sidebar