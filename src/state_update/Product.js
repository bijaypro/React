import React from "react";
import image from "../../src/img1.jpg"
class Product extends React.Component {
    state={
        productName:"Samsung",
        image:image,
        price:25,
        qty:1
    }
    IncrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    DecrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{this.state.productName}</th>
                    <td><img src={this.state.image}height="10%" width="10%"/></td>
                    <td>{this.state.price}</td>
                    <td><button onClick={this.IncrHandler}>Incr</button>{this.state.qty}
                    <button onClick={this.DecrHandler}>Decr</button></td>
                    <td>{this.state.qty*this.state.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Product;
