import React, { Component } from 'react';
import MyGlobleSetting from './MyGlobleSetting';
/* import {Router, Link } from 'react-router-dom'; */

class Room extends Component {
    constructor(props) {
        super(props);
    };
    CheckPrice(a) {
        if (this.props.obj.price < this.props.obj.defprice) {
            if (a == 1) {
                return (<span>{this.props.obj.defprice + '₫'}</span>)
            } else {
                return (<img alt="Sale icon" src={MyGlobleSetting.url + "/resources/Image/icon/icons_sale.gif"} style={{ height: '32px', width: '32px', float: 'right' }} />)
            }
        }
    };
    Star() {
        var stars = [];
        for (let j = 0; j < 5; j++) {
            if (j < this.props.obj.star) {
                stars.push(<i key={j} className="fas fa-star"></i>);
            } else {
                stars.push(<i key={j} className="fal fa-star"></i>);
            }
        }
        return stars;
    }
    Active(){
        if (this.props.num<3) {
            return "box active"
        }else return "box noactive"
    }
    render() {
        return (
            <div className={this.Active()}>
                <img src={MyGlobleSetting.url + '/resources/' + this.props.obj.src} alt={'idrooms_' + this.props.obj.id} />
                <div className="content">
                    <h3>
                        {this.props.obj.name}
                        {this.CheckPrice(0)}
                    </h3>
                    <p>{this.props.obj.info}</p>
                    <div className="stars">
                        {this.Star()}
                    </div>
                    <div className="price">
                        {this.props.obj.price + '₫  '}
                        {this.CheckPrice(1)}
                    </div>
                    {/* <Router history={customHistory}>
                    <Link to={'?idroom=' + this.props.obj.id + '#book'} className="btn">book now</Link>
                    </Router> */}
                    <a href={'?idroom=' + this.props.obj.id + '#book'} className="btn">book now</a>
                </div>
            </div>
        );
    }
}

export default Room;
