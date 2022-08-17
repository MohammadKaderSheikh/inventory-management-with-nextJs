import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListTransaction from "../components/listTransaction";
import Footer from "../components/footer";

class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListTransaction/>
                <Footer/>
            </div>
        );
    }
}

export default Transaction;