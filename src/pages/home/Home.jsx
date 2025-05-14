import React from 'react'
import { HomeBanner,HomeProject,HomeKgPortal ,HomeAds,HomeNews} from '../../widgets'

export const Home = () => {
  return (
    <div className=''>
      <HomeBanner />
      <HomeNews/>
      <HomeAds/>
      <HomeProject/>
      <HomeKgPortal/>
      
       </div>
  )
}
