export default function Header() {
   return (
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
   )
};
