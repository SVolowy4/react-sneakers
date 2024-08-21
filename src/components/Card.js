export default function Card(props) {
   return (
      <div className="card">

         <div className="cardImage">
         <img src={props.img} width={180} height={140} alt="" />
         </div>

         <div className="cardTitle">
         {props.title}
         </div>

         <div className="cardItems">

         <div className="items">
            <span>Ціна:</span>
            <p>{props.price} грн</p>
         </div>

         <div className="cardButton">
            <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
         </div>

         </div>  

      </div>
   )
}