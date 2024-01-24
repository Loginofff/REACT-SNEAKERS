function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Cart
          <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="close" />
        </h2>

        <div className="items">
        {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>
        ))}
      
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
