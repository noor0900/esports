import React from 'react'
import Latest_news from '../components/Latest_news'
import Follow_us from '../components/Follow_us'
import Cardlayout from '../components/Cardlayout'
import Valorat from '../components/Valorat'
import Allnews from '../components/Allnews'
import Fqa from '../components/Fqa'
import data from '../components/data'




export default function Homepg() {
  return (
    <>
    <div> 
    <Latest_news data={data.latestNews} direction="flex-row" />
    <Follow_us />
    <Cardlayout />
    <Latest_news data={data.LeagueofLegends} />
    <Latest_news data={data.CS_GO} direction="flex-row-reverse   m-10" />
    <Valorat data={data.Valorat} />
    <Valorat data={data.DOTA_2} />
    <Valorat data={data.CallofDuty}  />
    <Latest_news data={data.Gaming} direction="flex-row-reverse  m-10 " />
    <Valorat data={data.Entertainment} />
    <Allnews data={data.allnews} />
    <Fqa data={data.fqa}/>
    </div>

  
    </>
  )
}
