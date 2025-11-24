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
    setProductName("");
    setProductPrice("");
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
                    {
                        products.map(p=>(
                            <li key={p.id}>
                                <strong>{p.name} </strong>- ${p.price.toFixed(2)}
                                <div>
                                    Quantity:
                                    <button>-</button>
                                    {p.quantity}
                                    <button>+</button>
                                </div>
                                <div>
                                    <button>Remove</button>
                                </div>
                            </li>
                        )) 
                    }
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
