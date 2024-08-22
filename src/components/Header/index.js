import styles from "./Header.module.scss"

import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

export default function Header(props) {
   return (

      <div className={styles.header}>

         <HeaderLeft />

         <HeaderRight onClickCart={props.onClickCart} />

      </div>

   )
};
