import style from './style.module.scss'
import image from '../../../public/02d.svg'
import Image from 'next/image'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiDroplet } from 'react-icons/fi'
import { FaWind } from 'react-icons/fa6'

export function Weather() {
  return (
    <div className={style.container}>
      <div className={style.temperature}>
        <span>23</span>
        <div>
          <span className={style.celsius}>°C</span>
          <span className={style.fahrenheit}>°F</span>
          <br />
          <span className={style.weatherDescription}>Partly cloudy</span>
        </div>
      </div>
      <div className={style.content}>
        <Image src={image} width={300} alt="" />
        <ul>
          <div className={style.currentData}>
            <FaThermometerEmpty size={24} />
            <li>Feels like: 31°C</li>
          </div>

          <div className={style.currentData}>
            <FiDroplet size={24} /> <li>Humidity: 15%</li>
          </div>

          <div className={style.currentData}>
            <FaWind size={24} /> <li>Wind: 14 km/h</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
