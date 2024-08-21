export default function CartModalFooter() {
   return (

      <div className="cartModalFooter">

         <div className="cartModalFooterTotal">

            <div className="cartModalFooterTotalTitle">Всього:</div>
            <div className="cartModalFooterTotalMidle"></div>
            <div className="cartModalFooterTotalPrice">15000 грн</div>

         </div>

         <div className="cartModalFooterFare">

            <div className="cartModalFooterFareTitle">Податок 5%:</div>
            <div className="cartModalFooterFareMidle"></div>
            <div className="cartModalFooterFarePrice">10000 грн</div>

         </div>

         <div className="cartModalBtn">
            <button> 
               <span>Оформити</span>
               <img src="/img/arrow.svg" alt="arrow" />
            </button>
         </div>

      </div>

   )
};
