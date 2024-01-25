import style from './style.module.scss'

export function Header() {
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
      <div className={style.shearch}>
        <input type="text" placeholder="search by region" />
        <button>Search</button>
      </div>
    </div>
  )
}
