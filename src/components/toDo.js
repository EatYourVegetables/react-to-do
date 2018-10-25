import React, {Component} from 'react';
var margin = {
    margin: '10px'
};
class ToDo extends Component{
    render(){
        return(
            <li>
                <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
                <span>{this.props.description}</span>
                <button type="button" style={margin} onClick={this.props.deleteTodo}>Delete</button>
            </li>
        );
    }
}

export default ToDo;