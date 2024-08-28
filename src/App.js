import React from "react";

import Cart from "./components/Cart"
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import Card from "./components/Card";


function App() {

  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://66c7a361732bf1b79fa71c2a.mockapi.io/items')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj])
  }

  return (

    <div className="wrapper">

      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart = {() => setCartOpened(true)}/>

      <div className="content">
 
        <ContentHeader />

        <div className="contentCards">

          {items.map((item) => (
            <Card 
              image = {item.image}
              title = {item.title}
              price = {item.price}
              addToCart = {(obj) => addToCart(item)}
            />
          ))}

        </div>

      </div>

    </div>
    
  );
}

export default App;
