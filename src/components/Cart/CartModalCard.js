export default function CartModalCard() {
   return (

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

   )
};
