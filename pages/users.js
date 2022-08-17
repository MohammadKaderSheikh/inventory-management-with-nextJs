import Footer from "../components/footer";


export async function getStaticProps() {
    const data = [
        {
            id: 1,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 2,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 3,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 4,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
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
import ListUser from "../components/listUser";

class Users extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListUser dataTable={this.props.dataTable}/>
                <Footer/>
            </div>
        );
    }
}

export default Users;