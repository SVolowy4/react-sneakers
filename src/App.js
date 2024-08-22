import React from "react";

import Cart from "./components/Cart"
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import Card from "./components/Card";


function App() {

    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper">

      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}

      <Header onClickCart = {() => setCartOpened(true)}/>

      <div className="content">
 
        <ContentHeader />

        <div className="contentCards">

          {arr.map((obj) => (
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
