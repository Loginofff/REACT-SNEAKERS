function Header(props) {
    return (
 
        <header className="d-flex justify-between align-center p-30">
        <div className="d-flex align-center">
          <img width={77} height={105} src="/img/photo_2024-01-23_17-39-41.png" />
          <div>
            <h3 className="text-uppercase ">React Sneakers</h3>
            <p1 className="opacity-5 grape-nuts-regular">Best Sneakers Store</p1>
          </div>
        </div>
        <ul className="d-flex">

          <li onClick={props.onClickCart} className="mr-30 cu-p"> 
            <img width={18} height={18} src="/img/Cart.svg" />
            <span>12.99$</span>
          </li>

          <li className="cu-p d-flex justify-between align-center">
            <img width={18} height={18} src="/img/Union.svg" />
          </li>
        </ul>
      </header>

    );
}

 export default Header;