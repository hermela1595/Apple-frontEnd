
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Footer/Four04/Four04";

function SingleAppleProduct() {

        const [products, setProducts] = useState([]);

        const {pid} = useParams()
        console.log(pid);
        useEffect(() => {
          fetch('http://localhost:3001/iphones')
            .then((res) => res.json())
            .then((data) => {
              const productList =data
                const SingleApplePro = productList.filter(
                (data) => data.product_name === pid)
              setProducts(SingleApplePro);
            })
            .catch(() => console.log("Error you are not able to fetch"));
        }, [pid]);

    if(products.length) {
        return (
            <div>
                    <section className="internal-page-wrapper">
                      <div className="container">
                        {products?.map((data) => {
                          return (
            
                            <div key={data.product_id}>
                              <div className="row justify-content-center text-center">
                                <div className={`col-12 mt-5 pt-5`}>
                                  <div className="title-wrapper front-weight-bold">
                                    {data.product_name}
                                  </div>
                                  <div className="brief-description">
                                    {data.product_brief_description}
                                  </div>
                                </div>
                              </div>
                              <div className="row justify-content-center text-center product-holder h-100 m-5">
                                <div className={`col-sm-12 col-md-6 my-auto`}>
                                  <div className="starting-price">
                                    {`Starting at ${data.starting_price}`}
                                  </div>
                                  <div className="monthly-price">{data.price_range}</div>
                                  <div className="product-details">
                                    {data.product_description}
                                  </div>
                                </div>
                                <div className={`col-sm-12 col-md-6`}>
                                  <div className="product-image">
                                    <img src={data.product_img} alt="product" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </div>
        );
                    }else {
                        return <Four04 />
                    }
 
}

export default SingleAppleProduct