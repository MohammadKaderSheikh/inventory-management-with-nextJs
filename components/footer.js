import React, {Component,Fragment} from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                    <div className="container-fluid mt-5">
                        <div className="row mt-5">
                            <div className="col-12 p-3  mt-5 text-center shadow-sm bg-site">
                                    <p className="product-name text-white">All Rights Reserved By Rabbil Hasan</p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        );
    }
}

export default Footer;