import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"


const Navbar = () => {

  return (
    <div className={styles.nav_container}>
      <div className={styles.left_container}>
        <Link to={"/"}>БОКСИ МК</Link>
      </div>
      <div className={styles.right_container}>
        <p>ЗА НАС</p>
        <p>КНИГИ</p>
        <Link to={"/register"} className={styles.register_btn}>НАЈАВИ СЕ</Link>
      </div>
    </div>
  )
}

export default Navbar