function Header() {
    return (
 
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/image 4.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p1 className="opacity-5">Best Sneakers Store</p1>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/Cart.svg" />
            <span>12.99$</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/Union.svg" />
          </li>
        </ul>
      </header>

    );
}

 export default Header;