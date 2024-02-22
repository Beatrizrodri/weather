import { WeatherForNextDay } from '../WeatherForNextDay'
import style from './style.module.scss'

interface WeekWeatherProps {
  darkTheme: boolean
}

export function WeekWeather({ darkTheme }: WeekWeatherProps) {
  return (
    <div
      className={`${style.container} ${
        darkTheme ? style.darkContainer : style.lightContainer
      }`}
    >
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
      <WeatherForNextDay />
    </div>
  )
}
