function Product({ title, price, inStock, description, rating, tags }) {
  const hasDiscount = tags.includes("Скидка");
  let finalPrice = price;

  if (hasDiscount) {
    finalPrice = Math.round(price * 0.9); 
  }


  const formatPrice = (value) => `${value.toLocaleString()}₸`;

  return (
    <div className="card shadow-sm mb-4" style={{ width: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {inStock
            ? hasDiscount
              ? (
                <>
                  <span className="text-decoration-line-through me-2">
                    {formatPrice(price)}
                  </span>
                  <span className="text-danger fw-bold">
                    {formatPrice(finalPrice)}
                  </span>
                </>
              )
              : formatPrice(price)
            : "Нет в наличии"}
        </h6>
        <p className="card-text">{description}</p>
        <p>Рейтинг: {"⭐".repeat(rating)}</p>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
