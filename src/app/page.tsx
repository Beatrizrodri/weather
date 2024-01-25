import './globals.scss'
import style from './page.module.scss'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  )
}
