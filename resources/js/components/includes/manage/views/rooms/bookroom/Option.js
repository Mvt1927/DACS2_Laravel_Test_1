import React, {Component} from "react";
class Option extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <option value={this.props.num}>{this.props.obj.id}-{this.props.obj.name}</option>
        )
    }
}
export default Option
