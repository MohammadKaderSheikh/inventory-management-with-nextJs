import React, {Component,Fragment} from 'react';
import Link from "next/link"
class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid mt-5 ">
                    <div className="row justify-content-center">
                        <div className="col-md-8 ">
                            <div className="card animated zoomIn">
                                <div className="card-body">
                                   <div className="container card-body">
                                       <div className="row">
                                           <div className="col-md-6 text-center login-div">
                                               <h5 className="table-title m-2">USER SIGN IN</h5>
                                                <input placeholder="User Name" type="text" className="form-control form-control-sm m-2"/>
                                               <input placeholder="Password" type="text" className="form-control form-control-sm m-2 "/>
                                               <Link href="/" ><button className="btn w-100 btn-sm btn-site m-2">Login</button></Link>
                                           </div>
                                           <div className="col-md-6 text-center">
                                               <img className="w-100"  src="/loginBanner.png"/>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;