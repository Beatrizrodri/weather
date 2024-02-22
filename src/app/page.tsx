import './globals.scss'
import style from './page.module.scss'
import { Header } from '../components/Header'
import { Weather } from '@/components/Weather'
import { WeekWeather } from '@/components/WeekWeather'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Weather />
      <WeekWeather />
    </div>
  )
}
