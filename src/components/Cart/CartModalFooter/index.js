import styles from "./CartModalFooter.module.scss"

export default function CartModalFooter() {
   return (

      <div className={styles.cartModalFooter}>

         <div className={styles.cartModalFooterTotal}>

            <div className={styles.cartModalFooterTotalTitle}>Всього:</div>
            <div className={styles.CartModalFooter}></div>
            <div className={styles.cartModalFooterTotalPrice}>15000 грн</div>

         </div>

         <div className={styles.cartModalFooterFare}>

            <div className={styles.cartModalFooterFareTitle}>Податок 5%:</div>
            <div className={styles.cartModalFooterFareMidle}></div>
            <div className={styles.cartModalFooterFarePrice}>10000 грн</div>

         </div>

         <div className={styles.cartModalBtn}>
            <button> 
               <span>Оформити замовлення</span>
               <img src="/img/arrow.svg" alt="arrow" />
            </button>
         </div>

      </div>

   )
};
