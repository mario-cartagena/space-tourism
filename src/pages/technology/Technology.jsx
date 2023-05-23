import React from 'react'
import { TechnologyComponent } from '../../components/technology/TechnologyComponent'
import { Navbar } from '../../components/navbar/Navbar'
import './StyleTechnology.scss'

export const Technology = () => {
  return (
    <div className='technology'>
      <Navbar/>
      <TechnologyComponent/>
    </div>
  )
}
