function Card() {
    return (
        <div className="card">
        <div className="favorite">
          <img src="/img/heart1.svg" alt="Unlike" />
        </div>
        <img
          height={130}
          width={130}
          src="/img/sneakers/8.png"
          alt="Sneakers"
        />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <p>Price:</p>
            <b>89.99$</b>
          </div>
          <button className="button">
            <img width={20} height={20} src="/img/add.svg" alt="plus" />
          </button>
        </div>
      </div>
    )
}

export default Card;