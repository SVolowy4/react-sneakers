import styles from "./CartModalCard.module.scss"

export default function CartModalCard({image, title, price, onRemoveItem}) {
   return (

   <div className={styles.cartModalCard}>

      <div className={styles.cartModalCardImage}>

         <img src={image} alt="cardImage" width={100} />

      </div>

      <div className={styles.cartModalCardItems}>

         <p className={styles.cartModalCardItemsTitle}>{title}</p>
         
         <p className={styles.cartModalCardItemsPrice}>{price} грн </p>

      </div>

      <div className={styles.cartModalCardBtn}>

         <img onClick={onRemoveItem} src="/img/btn-remove.svg" alt="remove card" />

      </div>

   </div>

   )
};
