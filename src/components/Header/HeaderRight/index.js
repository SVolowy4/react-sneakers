import styles from "./HeaderRight.module.scss"

export default function HeaderRight({onClickCart}) {
   return (

      <div className={styles.headerRight}>

         <div className={styles.cart} onClick={onClickCart}>
            <img src="/img/cart.svg" width={20} alt="cart"/> <span className={styles.price}>1234 грн</span>
         </div>

         <div className={styles.account}>
            <img src="img/user.svg" width={20} alt="user" />
         </div>

   </div>

   )
};
