import React from "react";

import Cart from "./components/Cart"
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import Card from "./components/Card";


function App() {

    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

React.useEffect(() => {
  fetch('https://66c7a361732bf1b79fa71c2a.mockapi.io/items')
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    setItems(json)
  })
})

  return (
    <div className="wrapper">

      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}

      <Header onClickCart = {() => setCartOpened(true)}/>

      <div className="content">
 
        <ContentHeader />

        <div className="contentCards">

          {items.map((obj) => (
            <Card 
              image = {obj.image}
              title = {obj.title}
              price = {obj.price}
              addToCart = {() => console.log(obj)}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;
