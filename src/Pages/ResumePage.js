import React from 'react'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import MainLayout from '../Styles/Layouts'
// import InnerLayout from '../Styles/Layout2'


function ResumePage() {
  return (
    <MainLayout>
      <Skills/>
      <Resume/>
    </MainLayout>
  )
}

export default ResumePage