import styles from "./Cart.module.scss"

import HeaderCart from "./HeaderCart"
import CartModalCard from "./CartModalCard"
import CartModalFooter from "./CartModalFooter"

export default function Cart(props) {
   return (

      <div className={styles.overlay}>

         <div className={styles.cartModal}>

            <div className={styles.cartModalContainer}>

               <HeaderCart onClose={props.onClose} />

               <div className={styles.cartModalContent}>

                  <CartModalCard />

               </div>

               <CartModalFooter />

            </div>

         </div>

      </div>

   )
};
