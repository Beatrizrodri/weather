import style from './style.module.scss'
import image from '../../../public/02d.svg'
import Image from 'next/image'

export function WeatherForNextDay() {
  return (
    <div className={style.container}>
      <span>Segunda-feira</span>
      <Image src={image} width={120} alt="" />
      <div className={style.temperature}>
        <span>23°</span>
        <span>-</span>
        <span>18°</span>
      </div>
      <span>Clear Sky</span>
    </div>
  )
}
