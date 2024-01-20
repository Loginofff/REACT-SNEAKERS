function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {" "}
          Cart{" "}
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>49.99 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/4.png)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>49.99 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.png)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>49.99 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>
        </div>
        <div className="totalBlock">
          <ul className="totalBlock">
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>99.99$</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%:</span>
              <div></div>
              <b>10$</b>
            </li>
          </ul>
          <button id="foot">
            <button class="button-os">
              <a href="#">Order product</a>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
