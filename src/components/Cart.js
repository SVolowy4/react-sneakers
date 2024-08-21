export default function Cart() {
   return (
      <div className="cartModal">

         <div className="cartModalContainer">

            <div className="cartModalHeader">

            <h2>Кошик</h2>
            <img src="/img/btn-remove.svg" alt="close modal" />

            </div>

            <div className="cartModalContent">

            <div className="cartModalCard">

               <div className="cartModalCardImage">
                  <img src="/img/sneakers/1.jpg" alt="cardImage" width={100} />
               </div>

               <div className="cartModalCardItems">
                  <p className="cartModalCardItemsTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <p className="cartModalCardItemsPrice">500 грн </p>
               </div>

               <div className="cartModalCardBtn">
                  <img src="/img/btn-remove.svg" alt="remove card" />
               </div>

            </div>
            <div className="cartModalCard">

               <div className="cartModalCardImage">
                  <img src="/img/sneakers/1.jpg" alt="cardImage" width={100} />
               </div>

               <div className="cartModalCardItems">
                  <p className="cartModalCardItemsTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <p className="cartModalCardItemsPrice">500 грн </p>
               </div>

               <div className="cartModalCardBtn">
                  <img src="/img/btn-remove.svg" alt="remove card" />
               </div>

            </div>
            <div className="cartModalCard">

               <div className="cartModalCardImage">
                  <img src="/img/sneakers/1.jpg" alt="cardImage" width={100} />
               </div>

               <div className="cartModalCardItems">
                  <p className="cartModalCardItemsTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <p className="cartModalCardItemsPrice">500 грн </p>
               </div>

               <div className="cartModalCardBtn">
                  <img src="/img/btn-remove.svg" alt="remove card" />
               </div>

            </div>

            </div>

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

            </div>

            <div className="cartModalBtn">
            <button> 
               <span>Оформити</span>
               <img src="/img/arrow.svg" alt="arrow" />
            </button>
            </div>

         </div>

      </div>
   )
};
