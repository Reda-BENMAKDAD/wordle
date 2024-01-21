import React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar/index'
import KeyBoard from '../components/KeyBoard/KeyBoard'
import Try from '../components/Try/Try'

function Home() {
  const [tries, setTries] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  return (
    <>
    <Navbar />
    <div className='content'>
     
    <KeyBoard />
    </div>
    </>
  )
}

export default Home