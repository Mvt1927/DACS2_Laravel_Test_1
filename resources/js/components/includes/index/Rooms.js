import axios from "axios";
import React, { Component } from "react";
import MyGlobleSetting from "./MyGlobleSetting";
import ReactDOM from 'react-dom';
import Room from "./Room";

export default class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ''
        }
    };
    componentDidMount() {
        axios.get(MyGlobleSetting.url + '/api/control/get/getrooms')
            .then(response => {
                this.setState({ rooms: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Room() {
        num = -1;
        if (this.state.rooms instanceof Array) {
            return this.state.rooms.map(function (object, i) {
                num++;
                return <Room obj={object} key={i} num={num} />;
            })
        }
    }
    More() {
        let moreBtn = document.querySelectorAll('.more-btn');
        moreBtn.forEach(btn2 => {
            btn2.addEventListener('click', () => {
                console.log(btn2);
                var n = 3;
                let noactive = document.querySelectorAll(".box.noactive");
                if (noactive.length < 4) {
                    n = noactive.length;
                    btn2.classList.add('clicked');
                };
                for (let i = 0; i < n; i++) {
                    noactive.item(i).classList.remove('noactive');
                    noactive.item(i).classList.add('active');
                };
            });
        });
    }
    render() {
        return (
            <div>
                <br />
                <h1 className="heading text-center">
                    <span>r</span>
                    <span>o</span>
                    <span>o</span>
                    <span>m</span>
                    <span>s</span>
                </h1>
                <br />
                <br />
                <br />
                <div className="box-container">
                    {this.Room()}
                    <h1 className="more-rooms col-12 text-center">
                        <i className="fas fa-chevron-down more-btn" onClick={this.More()}></i>
                    </h1>
                </div>
            </div>
        )
    }
}
if (document.getElementById('rooms')) {
    ReactDOM.render(
        <Rooms />, document.getElementById('rooms')
    );
}
