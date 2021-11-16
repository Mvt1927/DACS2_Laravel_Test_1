import React, { Component } from 'react';
import MyGlobleSetting from '../MyGlobleSetting'
import { Link } from 'react-router-dom';
import { auto } from '@popperjs/core';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div >
                <br/>
                <br/>
                <h1 className="text-uppercase font-weight-bold text-primary text-center" >Search for booking information</h1>
                <div className="row" style={{marginTop:'10rem'}}>
                    <div className="col-md-12">
                        <div className="form-group">
                            <h2 className="w-25 float-left">
                                Reservation code:
                            </h2>
                            <input type="text" className="form-control w-50 border-dark float-left" style={{marginLeft:auto,marginRight:auto, height:'2.5rem'}} name="id" onChange={(event) => { this.isChange(event) }} />
                        </div>
                    </div>
                </div>
                <Link to={"/search/"+this.state.id+'/view'} className="btn" style={{marginRight:"15rem", marginTop:"5rem"}}>Search</Link>
            </div>
        );
    }
}
export default Search;
