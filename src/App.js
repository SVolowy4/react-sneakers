

function App() {
  return (
    <div className="wrapper">

      <header>

        <div className="headerLeft">
          <img src="/img/logo.png" width={50} alt="logo"/>

          <div className="nameLogo">
            <h3>REACT SNEAKERS</h3>
            <p>Интернет магазин "кросівок"</p>
          </div>

        </div>

        <div className="headerRight">

          <div className="cart">
            <img src="/img/cart.svg" width={20} alt="cart"/> <span className="price">1234 грн</span>
          </div>

          <div className="account">
            <img src="img/user.svg" width={20} alt="user" />
          </div>

        </div>

        </header>

      <div className="content">

        <h1>Всі "кросівки"</h1>

          <div className="contentCards">

            <div className="card">

              <div className="cardImage">
                <img src="/img/sneakers/1.jpg" width={180} height={140} alt="" />
              </div>

              <div className="cardTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </div>

              <div className="cardItems">

                <div className="items">
                  <span>Ціна:</span>
                  <p>500грн</p>
                </div>

                <div className="cardButton">
                  <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
                </div>

              </div>  

            </div>
            <div className="card">

              <div className="cardImage">
                <img src="/img/sneakers/1.jpg" width={180} height={140} alt="" />
              </div>

              <div className="cardTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </div>

              <div className="cardItems">

                <div className="items">
                  <span>Ціна:</span>
                  <p>500грн</p>
                </div>

                <div className="cardButton">
                  <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
                </div>

              </div>  

            </div>
            <div className="card">

              <div className="cardImage">
                <img src="/img/sneakers/1.jpg" width={180} height={140} alt="" />
              </div>

              <div className="cardTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </div>

              <div className="cardItems">

                <div className="items">
                  <span>Ціна:</span>
                  <p>500грн</p>
                </div>

                <div className="cardButton">
                  <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
                </div>

              </div>  

            </div>
            <div className="card">

              <div className="cardImage">
                <img src="/img/sneakers/1.jpg" width={180} height={140} alt="" />
              </div>

              <div className="cardTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </div>

              <div className="cardItems">

                <div className="items">
                  <span>Ціна:</span>
                  <p>500грн</p>
                </div>

                <div className="cardButton">
                  <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
                </div>

              </div>  

            </div>
            <div className="card">

              <div className="cardImage">
                <img src="/img/sneakers/1.jpg" width={180} height={140} alt="" />
              </div>

              <div className="cardTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </div>

              <div className="cardItems">

                <div className="items">
                  <span>Ціна:</span>
                  <p>500грн</p>
                </div>

                <div className="cardButton">
                  <button><img src="/img/plus.svg" width={20}  alt="icon for button"/></button>
                </div>

              </div>  

            </div>

          </div>

      </div>

    </div>
  );
}

export default App;
