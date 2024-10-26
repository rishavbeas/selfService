import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

export default function Location() {
  return (
    <div className='location'>
        <div className="location-container">
            <div>
                <CiLocationOn className='location-icon'/>
            </div>
            <div className="location-content">
                <label>location</label>
                <input type="text" placeholder='where are you going' />
            </div>
        </div>
    </div>
  )
}
