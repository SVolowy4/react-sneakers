import HeaderCart from "./HeaderCart"
import CartModalCard from "./CartModalCard"
import CartModalFooter from "./CartModalFooter"

export default function Cart() {
   return (
      <div className="cartModal">

         <div className="cartModalContainer">

            <HeaderCart />

            <div className="cartModalContent">

               <CartModalCard />

            </div>

            <CartModalFooter />


         </div>

      </div>
   )
};
