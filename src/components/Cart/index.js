import styles from "./Cart.module.scss"

import HeaderCart from "./HeaderCart"
import CartModalCard from "./CartModalCard"
import CartModalFooter from "./CartModalFooter"

export default function Cart({onClose, items=[], onRemoveItem}) {
   return (

      <div onClick={onClose} className={styles.overlay}>

         <div className={styles.cartModal}>

            <div className={styles.cartModalContainer}>

               <HeaderCart onClose={onClose} />

            {items.length > 0 ?
            <div className={styles.cartModalBlock}>


                  <div className={styles.cartModalContent}>

                     {items.map((obj, index) => (
                        <CartModalCard
                           key={index}
                           image={obj.image}
                           title={obj.title}
                           price={obj.price}
                           onRemoveItem={() => onRemoveItem(obj.id)}
                        />
                     ))}

                     </div>

                     <CartModalFooter />

                  </div> :
                  <div className={styles.emptyCartBlock}>

                     <div className={styles.emptyCartTitle}>
                        <h3>Поки пусто</h3>
                     </div>

                     <div className={styles.emptyCartImage}>
                        <img src="./img/empty-cart.jpg"/>
                     </div>

                     <div onClick={onClose} className={styles.cartModalBtn}>
                        <button>
                           <img src="/img/arrow.svg" alt="arrow" /> 
                           <span>Повернутись, щоб обрати</span>
                        </button>
                     </div>

                  </div>
                  }

            </div>

         </div>

      </div>

   )
};
