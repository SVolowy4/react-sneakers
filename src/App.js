import React from "react";

import axios from "axios";

import Cart from "./components/Cart"
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import Card from "./components/Card";


function App() {

  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    axios.get('https://66c7a361732bf1b79fa71c2a.mockapi.io/items').then((res) => {setItems(res.data)})
    axios.get('https://66c7a361732bf1b79fa71c2a.mockapi.io/cart').then((res) => {setCartItems(res.data)})
  }, [])

  const addToCart = (obj) => {
    axios.post('https://66c7a361732bf1b79fa71c2a.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
    console.log(obj)
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://66c7a361732bf1b79fa71c2a.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (

    <div className="wrapper">

      {cartOpened && <Cart onRemoveItem={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart = {() => setCartOpened(true)}/>

      <div className="content">
 
        <ContentHeader 
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

        <div className="contentCards">

          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <Card 
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              addToCart={(obj) => addToCart(item)}
            />
          ))}

        </div>

      </div>

    </div>
    
  );
}

export default App;
