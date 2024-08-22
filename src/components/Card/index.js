import React from "react"

import styles from "./Card.module.scss"

export default function Card(props) {

   const [isAdded, setIsAdded] = React.useState(false)

   const onClickPlus = () => {
      setIsAdded(!isAdded)
   }

   return (

      <div className={styles.card}>

         <div className="cardImage">

            <img src={props.image} width={180} height={140} alt="" />

         </div>

         <div className={styles.cardTitle}>

            {props.title}

         </div>

         <div className={styles.cardItems}>

            <div className={styles.items}>

               <span>Ціна:</span>

               <p>{props.price} грн</p>

            </div>

            <div className="cardButton">

               <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} width={30}  alt="Add button"/>

            </div>

         </div>  

      </div>
      
   )
}