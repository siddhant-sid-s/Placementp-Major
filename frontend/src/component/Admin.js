import React from 'react'
import Slidebar from './Slidebar'
import Content from './Content'
import '../styles/admin.css'

const Admin = () => {
  return (
    <div className='adbody'>
    <div className='dashboard'>
        <Slidebar/>
        <div className='dashboard--content'>
            <Content/>
        </div>
    </div>
    </div>
  )
}

export default Admin
