import React from 'react'
import "../styles/admin.css"
import Slidebar from './Slidebar'
import StudentList from './StudentList'
import ContentHeader from './ContentHeader'

const Card = () => {
  return (
    <div>
    <div className='adbody'>
    <div className='dashboard'>
        <Slidebar/>
        <div className='dashboard--content'>
            <ContentHeader/>
            <StudentList/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Card
