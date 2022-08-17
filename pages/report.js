import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListReport from "../components/listReport";
import Footer from "../components/footer";

class Report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListReport/>
                <Footer/>
            </div>
        );
    }
}

export default Report;