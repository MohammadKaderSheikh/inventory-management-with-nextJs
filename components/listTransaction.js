import React, {Component, Fragment} from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";






class ListTransaction extends Component {



    next=()=>{
        this.slider.slickNext();
    }
    previous=()=>{
        this.slider.slickPrev();
    }



    render() {


        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows:false,
            autoplaySpeed:3000,
            autoplay:false,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const CategoryList = [
            { name: 'Rice' },
            { name: 'Milk' },
            { name: 'Vegitable' },
            { name: 'Oil' },
            { name: 'Pizza' },
            { name: 'Burgar' },
            { name: 'Sandwitch' },
            { name: 'Roll' },
            { name: 'Drinks' },
            { name: 'Rice' },
            { name: 'Milk' },
            { name: 'Vegitable' },
            { name: 'Oil' },
            { name: 'Pizza' },
            { name: 'Burgar' },
            { name: 'Sandwitch' },
            { name: 'Roll' },
            { name: 'Drinks' },
        ];

        let CategoryView=CategoryList.map((List,i)=>{
            return(
                <div>
                    <h1 className="category-name">{List.name}</h1>
                </div>
            )
        })

        const ProductData = [
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
        ]


        let MyView=ProductData.map((List,i)=>{
            return(
                <div className="col-md-2 p-1  text-center col-lg-2 col-sm-3 col-3">
                    <div className="product-card">
                        <img className="product-img"  src={List.product_image}/>
                        <h1 className="product-name">{List.product_name}</h1>
                        <h1 className="product-price">{List.unit_price} TK</h1>
                    </div>
                </div>
            )
        })




        return (
            <Fragment>
                <div className="mt-1 ">
                <div  className="animated  zoomIn container-fluid">
                    <div className="row">
                        <div className="col-md-7 p-1  col-lg-7 col-sm-12">
                            <div className="container shadow-sm p-3 bg-white ">
                                <div className="row">
                                    <div className="col-md-1 p-1">
                                        <button className="btn" onClick={this.previous}><i className="fa fa-angle-left"/></button>
                                    </div>
                                    <div className="col-md-10 p-1">
                                        <Slider ref={c=>(this.slider=c)} {...settings}>
                                            {CategoryView}
                                        </Slider>
                                    </div>
                                    <div className="col-md-1 p-1">
                                        <button className="btn" onClick={this.next}><i className="fa fa-angle-right"/></button>
                                    </div>
                                </div>
                                <div className="row ListTransactionHeight ListTransaction ">
                                    {MyView}
                                </div>
                            </div>
                        </div>


                        <div className="col-md-5 p-1  col-lg-5 col-sm-12">
                            <div className="shadow-sm p-2 text-center bg-site">
                                <h6 className="text-white">Cart List</h6>
                            </div>
                            <div className="shadow-sm bg-white text-center ListTransactionCartHeight ListTransaction p-3   ">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="cart-image" src="http://superadmin.laptopcitypro.com/storage/app/public/ZZDZgcIVlxG4V8F2aDduuHsga1p6sJluksbYefHp.png"/>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-name">Product Name</p>
                                            <p className="product-price">Qty: 02 | 200 TK</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="input-group">
                                                <button className="circular-btn"><i className="fa fa-plus"/></button>
                                                <button className="circular-btn"><i className="fa fa-minus"/></button>
                                                <button className="circular-btn"><i className="fa fa-trash-alt"/></button>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="bg-secondary"/>
                                </div>

                            </div>
                            <div className="shadow-sm text-center p-2 bg-white">
                                <h6>Total Due: 200 TK</h6>
                                <button className="btn btn-site">Confirm Sell</button>
                            </div>
                        </div>



                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default ListTransaction;