import React, { Component } from 'react';
// import Demo from './Demo';
import './App.css';


class Appmount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productlist:  [],
      error: null,
    }
  }

  componentDidMount(){    
      fetch(`http://texpertise.in/data.php`)
    .then(result => result.json())
    .then(productlist => this.setState({productlist}))
    }
 

  render() {
     return (
        <div>
            <div>
                {this.state.productlist && this.state.productlist.map(product => 
                    <div>   
                       <div> {product.name} </div>                       
                       <div dangerouslySetInnerHTML={{
                            __html: product.description
                        }}>
                        </div> 
                       <div> <img src={product.image} /></div>                       
                       <div> {product.nonVeg} </div>
                       <div> {product.spicy} </div> 
                    </div>   
                       )}
            </div>
            
        </div>    
        );
      }
  }

export default Appmount;
