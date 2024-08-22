import styles from "./HeaderLeft.module.scss"

export default function HeaderLeft() {

   return (

      <div className={styles.headerLeft}>

         <img src="/img/logo.png" width={50} alt="logo"/>

         <div className={styles.nameLogo}>

            <h3>REACT SNEAKERS</h3>
            <p>Интернет магазин "кросівок"</p>

         </div>

      </div>

   )
};
