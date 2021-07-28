import React, { Component } from 'react';
class Product extends Component {
    render() { 
        var {id,name,description,image,price,inventory,images} = this.props;
        var genImage = images.map((image,index) =>{
            var setClass = index === 0 ? "carousel-item active" : "carousel-item";
            
            return <div key={index} className={setClass}>
                        <img className="d-block w-100 h-100" src={image}  />
                    </div>;
        });

        return (  
            <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    {/* <img src={image} className="img-fluid" alt="" /> */}
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" style={{height: "450px"}}>
                    {genImage}
                    </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>








                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{price}.Vnđ</span>
                        <span className="right">
                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Product;