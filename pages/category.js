import Footer from "../components/footer";

export async function getStaticProps() {
    const data = [
        {
            id: 1,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',

        },
        {
            id: 3,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },
        {
            id: 4,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },
        {
            id: 6,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },

    ]

    return {
        props:{
            dataTable:data,
        }
    }


}


import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListCategory from "../components/listCategory";

class Category extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListCategory dataTable={this.props.dataTable}/>
                <Footer/>
            </div>
        );
    }
}

export default Category;