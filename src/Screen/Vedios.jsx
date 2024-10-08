import React from 'react'
import Allnews from '../components/Allnews'
import data from '../components/data'
import Follow_us from '../components/Follow_us'

export default function Vedios() {
  return (
<>
    {/* <hr className='mt-10 w-[87%] ml-20' /> */}
<Follow_us />

    <Allnews data={data.Vedios} />
    </>
  )
}
