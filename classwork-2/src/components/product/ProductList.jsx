import Product from "./Product";
import products from "../../products";

function ProductList() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Наши товары</h2>
      <div className="d-flex flex-wrap gap-3">
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            inStock={item.inStock}
            description={item.description}
            rating={item.rating}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
