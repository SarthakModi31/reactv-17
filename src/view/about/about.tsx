import React, { useEffect } from 'react'
import {
  API_END_POINT,
} from '../../utils/index';
const About = () => {

  useEffect(() => {
    console.log('API_END_POINT', API_END_POINT);

  }, [])
  
  return (
    <div>About component</div>
  )
}

export default About;