import './globals.scss'
import style from './page.module.scss'
import { Header } from '../components/Header'
import { Weather } from '@/components/Weather'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Weather />
    </div>
  )
}
