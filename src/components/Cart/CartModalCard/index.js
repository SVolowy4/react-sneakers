import styles from "./CartModalCard.module.scss"

export default function CartModalCard() {
   return (

   <div className={styles.cartModalCard}>

      <div className={styles.cartModalCardImage}>

         <img src="/img/sneakers/1.jpg" alt="cardImage" width={100} />

      </div>

      <div className={styles.cartModalCardItems}>

         <p className={styles.cartModalCardItemsTitle}>Мужские Кроссовки Nike Blazer Mid Suede</p>
         
         <p className={styles.cartModalCardItemsPrice}>500 грн </p>

      </div>

      <div className={styles.cartModalCardBtn}>

         <img src="/img/btn-remove.svg" alt="remove card" />

      </div>

   </div>

   )
};
