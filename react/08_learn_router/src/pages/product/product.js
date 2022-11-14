import React, {PureComponent} from 'react';
// import {withRouter} from "../../utils";
import {Navigate} from "react-router-dom";

class Product extends PureComponent {
  render() {
    const {router} = this.props
    console.log(router)
    return (
      <div>
        <h5>商品详情{router.params.id}</h5>
        {
          router.params.id === '4' ? <Navigate to="/about"/> : ''
        }
      </div>
    );
  }
}

// export default withRouter(Product);
export default Product