import React from 'react'
import { data, useSearchParams } from 'react-router';

function Contact() {
  const [searchParams] = useSearchParams()
  const data1 = searchParams.get('data1')
  const data2 = searchParams.get('data2')
  const data3 = searchParams.get('data3')
  console.log(data1, '=====', data2, '========', data3);
  
  return (
    <div>
      Contact <br/>
      {data1} <br/>
      {data2} <br/>
      {data3}
    </div>
  )
}

export default Contact
