import React from 'react';

class Productlist extends component{

	
const { productlist } = this.state;
    return (
      <div className="App">
        {productlist.map(product =>
          <div key={product.document.getElelementById(arrayid)}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.image}</p>
            <p>{product.nonVeg}</p>
            <p>{product.spicy}</p>                     
          </div>
        )}
      </div> 	
}

export default Productlist;
