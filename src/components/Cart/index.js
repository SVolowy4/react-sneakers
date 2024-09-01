import styles from "./Cart.module.scss"

import HeaderCart from "./HeaderCart"
import CartModalCard from "./CartModalCard"
import CartModalFooter from "./CartModalFooter"

export default function Cart({onClose, items=[], onRemoveItem}) {
   return (

      <div className={styles.overlay}>

         <div className={styles.cartModal}>

            <div className={styles.cartModalContainer}>

               <HeaderCart onClose={onClose} />

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

            </div>

         </div>

      </div>

   )
};
