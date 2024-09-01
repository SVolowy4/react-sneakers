export default function ContentHeader({onChangeSearchValue, searchValue, setSearchValue}) {
   return (
      <div className="contentHeader">

         <div className="contentHeaderTitle">
            <h1>{searchValue ? `Знайшов: "${searchValue}"` : 'Всі кросівки'}</h1>
         </div>

         <div className="contentHeaderInput">

            <img onClick={() => setSearchValue('')} src={!searchValue ? "/img/search.svg" : "/img/btn-remove.svg"} alt="" />
            <input 
            onChange={onChangeSearchValue}
            value={searchValue} 
            type="text" 
            placeholder="Пошук..." 
            alt="search" 
            />
         
         </div>
         
      </div>
   )
};
