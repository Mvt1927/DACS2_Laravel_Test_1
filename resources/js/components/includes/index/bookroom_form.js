import axios from "axios";
import React, { Component } from "react";
import MyGlobleSetting from "./MyGlobleSetting";
import ReactDOM from 'react-dom';
import { isEmpty, isInteger, isNull, isNumber } from "lodash";

export default class Bookroom_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book_input_name: '',
            book_input_phone: '',
            book_input_num: '1',
            book_input_date: MyGlobleSetting.currentTime,
            book_input_idrooms:'',
        }
    };
    getQueryVariable(variable) {
        /**
         * copyright by MING WU https://stackoverflow.com/users/9822763/ming-wu
         *
         *
         * Link Bài viết https://stackoverflow.com/posts/53079875/revisions
         */
        var query = window.location.search.substring(1);
        //ex: //"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        //ex: //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    isChange = (event) => {
        var name_box = document.querySelector('#input_name_box');
        var phone_box = document.querySelector('#input_phone_box');
        var num_box = document.querySelector('#input_num_box');
        var date_box = document.querySelector('#input_date_box');

        const name = event.target.name;
        const value = event.target.value;

        phone_box.classList.remove('error');
        name_box.classList.remove('error');
        num_box.classList.remove('error');
        date_box.classList.remove('error');
        this.setState({
            [name]: value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        var name_box = document.querySelector('#input_name_box');
        var phone_box = document.querySelector('#input_phone_box');
        var num_box = document.querySelector('#input_num_box');
        var date_box = document.querySelector('#input_date_box');
        if (this.state.book_input_name != null || this.state.book_input_phone != null) {
            if (this.state.book_input_name != "") {
                if (this.state.book_input_phone != "") {
                    if (parseInt(this.state.book_input_num) > 0) {
                        if (new Date(this.state.book_input_date) >= new Date(MyGlobleSetting.currentTime)) {
                            var Bookroom_form = {
                                name: this.state.book_input_name,
                                phone: this.state.book_input_phone,
                                num: this.state.book_input_num,
                                date: this.state.book_input_date,
                                idroom: this.state.book_input_idrooms
                            };
                            let url = MyGlobleSetting.url + '/api/control/post/bookrooms-reserve';
                            /* console.log(Bookroom_form); */
                            axios.post(url, Bookroom_form).then(response => {
                               /*  alert('Book room success'); */
                                window.location.href = MyGlobleSetting.url + '/DACS2_Laravel_Test_1/bookroom-reserve/#/view/'+response.data.success.id;
                                /* console.log(response.data.id); view/bookroom-reserve/'+response.data.id*/
                            });
                        } else {
                            if (!date_box.classList.contains('error')) {
                                date_box.classList.toggle('error');
                            };
                            alert('Your Arrivals date unknown value');
                        }
                    } else {
                        if (!num_box.classList.contains('error')) {
                            num_box.classList.toggle('error');
                        };
                        alert('Your number partner unknown value');
                    }
                } else {
                    if (!phone_box.classList.contains('error')) {
                        phone_box.classList.toggle('error');
                    };
                    alert('Your Phone cannot be blank');
                }
            } else {
                if (!name_box.classList.contains('error')) {
                    name_box.classList.toggle('error');
                };
                alert('Your Full Name cannot be blank');
            }
        };
    }

    input_Idroom() {
        let id = this.getQueryVariable('idroom');
        if (!isEmpty(id)) {
            if (isInteger(parseInt(id))) {
                return <input type="hidden" id="book_input_idrooms" name="book_input_idrooms" value={id} />
            }
        }
    }
    render() {
        return (
            <div className="row" >
                <div className="image">
                    <img className="image col-12" src={MyGlobleSetting.url + '/resources/Image/5244516.png'} alt="" />
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="inputBox" id="input_name_box">
                        <h3>What your full name <span>*</span></h3>
                        <input type="text" id="book_input_name" name="book_input_name" placeholder="Your name" onChange={(event) => { this.isChange(event) }} />
                    </div>
                    <div className="inputBox" id="input_phone_box">
                        <h3>Phone <span>*</span></h3>
                        <input type="number" id="book_input_phone" name="book_input_phone" placeholder="Your Phone" min="0" max="99999999999" onChange={(event) => { this.isChange(event) }} />
                    </div>
                    <div className="inputBox" id="input_num_box">
                        <h3>How many</h3>
                        <input type="number" id="book_input_num" name="book_input_num" placeholder="Number of guests" min="1" max="50" defaultValue="1" onChange={(event) => { this.isChange(event) }} />
                    </div>
                    <div className="inputBox" id="input_date_box">
                        <h3>Arrivals</h3>
                        <input type="date" datatype="date" id="book_input_date" name="book_input_date" min={this.state.book_input_date} defaultValue={this.state.book_input_date} onChange={(event) => { this.isChange(event) }} />
                    </div>
                    <div>
                        <div className="g-recaptcha" data-sitekey={MyGlobleSetting.recaptcha_sitekey} data-callback="onSubmit" data-size="invisible"></div>
                    </div>
                    {this.input_Idroom()}
                    <input type="submit" className="btn" name="btn_book_submit" id="btn_book_submit" value="book now" />
                </form>
            </div>
        )
    }
}
if (document.getElementById('bookroom_box')) {
    ReactDOM.render(
        <Bookroom_form />, document.getElementById('bookroom_box')
    );
}
