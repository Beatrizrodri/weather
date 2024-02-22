import { WeatherForNextDay } from '../WeatherForNextDay'
import style from './style.module.scss'

export function WeekWeather() {
  return (
    <div className={style.container}>
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
    </div>
  )
}
