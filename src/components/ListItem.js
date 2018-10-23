import React, { Component } from "react";
import SubList from "./SubList";

class ListItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			subTopic: '',
			subItems: []
		}

		this.removeItem = this.removeItem.bind(this);
	}

	onChange = (event) => {
		this.setState({ subTopic: event.target.value });
	}

	onSubmit = (event) => {
		this.setState({ 
			subTopic: '',
			subItems: [...this.state.subItems, this.state.subTopic]
		})
		event.preventDefault();
		// console.log('this.state.subTopic ', this.state.subTopic);
	}

	removeItem(name, i){
		console.log( name );
		console.log( i );
        let subItems = this.state.subItems.slice();
        subItems.splice(i, 1);
        this.setState({
            subItems
        });
        // console.log( "subItems ", this.state.subItems );
    }


	render(){
		return(
			<div>
				<SubList subItems={this.state.subItems} removeItem={this.removeItem} />
				<form className="subItem" onSubmit={this.onSubmit}>
					<input value={this.state.subTopic} onChange={this.onChange}/>
					<button className="submit">Submit</button>
				</form>
			</div>
		)
	}
}



export default ListItem;