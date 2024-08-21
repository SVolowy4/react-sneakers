export default function ContentHeader() {
   return (
      <div className="contentHeader">

         <div className="contentHeaderTitle">
         <h1>Всі "кросівки"</h1>
         </div>

         <div className="contentHeaderInput">
         <img src="/img/search.svg" alt="" />
         <input type="text" placeholder="Пошук..." alt="search" />
         </div>
         
      </div>
   )
};
