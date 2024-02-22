'use client'

import './globals.scss'
import style from './page.module.scss'
import { Header } from '../components/Header'
import { Weather } from '@/components/Weather'
import { WeekWeather } from '@/components/WeekWeather'
import { useState } from 'react'

export default function Home() {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true)

  return (
    <div
      className={`${style.container} ${
        isDarkTheme ? style.darkContainer : style.lightContainer
      }`}
    >
      <Header darkTheme={isDarkTheme} />
      <Weather />
      <WeekWeather darkTheme={isDarkTheme} />
    </div>
  )
}
