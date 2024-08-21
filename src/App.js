import Cart from "./components/Cart"
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import Card from "./components/Card";

const arr = [
  {image: "/img/sneakers/1.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 500},
  {image: "/img/sneakers/2.jpg", title: "Мужские Кроссовки Nike Air Max 270", price: 800},
  {image: "/img/sneakers/3.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 400}
]



function App() {
  return (
    <div className="wrapper">

      <div className="overlay" /*style={{display:"none"}}*/>

        <Cart/>

      </div>

      <Header/>

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
