import React from "react";

import { useState } from "react";

function ShopinCard() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  function addProduct() {
    if (productName !== "" && productPrice !== "") {
      const newPRoduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };

      setProducts([...products, newPRoduct]);
      
    }
   
  }

  const removeproduct = (id) => {
    const removeProduct = products.filter((product) => product.id !== id);
    setProducts(removeProduct);
  };

  const addItem = (id) =>{
    const updatedProducts  = products.map((product =>
        product.id == id ? {...product, quantity: product.quantity +1}:product
    ))
    setProducts(updatedProducts);
  }

  const deleteQuaintity = (id)=>{
    const updatedQuantity = products.map((product =>
        product.id == id && product.quantity > 1 ? {...product , quantity : product.quantity -1}:product
    ))
  setProducts(updatedQuantity);

  }

  return (
    <>
      <div>
        <h1>Shoping cart ..</h1>
        <div>
          <h1>Add a product</h1>
          <input
            type="text"
            placeholder="Prodcut"
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            min="0"
            placeholder="Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button onClick={addProduct}>Add to cart</button>
        </div>
        <div>
          {products.length > 0 ? (
            <div>
              <h2>Products in cart</h2>
              <ul>
                {products.map((p) => (
                  <li key={p.id}>
                    <strong>{p.name} </strong>- ${p.price.toFixed(2)}
                    <div>
                      Quantity:
                      <button onClick={()=> deleteQuaintity(p.id)}>-</button>
                      {p.quantity}
                      <button onClick={() => addItem(p.id)}>+</button>
                    </div>
                    <div>
                      <button onClick={() => removeproduct(p.id)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h2>No products in cart</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default ShopinCard;
