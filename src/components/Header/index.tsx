import style from './style.module.scss'

interface HeaderProps {
  darkTheme: boolean
}

export function Header({ darkTheme }: HeaderProps) {
  return (
    <div className={style.container}>
      <div className={style.information}>
        <h1>Toronto</h1>
        <div className={style.date}>
          <span>Thrusday ,</span>
          <span>31 August</span>
          <span>10:15 PM</span>
        </div>
      </div>
      <div
        className={`${darkTheme ? style.darkSearch : style.lightSearch} ${
          style.search
        }`}
      >
        <input type="text" placeholder="search by region" />
        <button>Search</button>
      </div>
    </div>
  )
}
