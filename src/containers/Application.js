import React, { Component } from "react";
import List from "../components/List";

class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: '',
			items: []
		};

		this.removeCategory = this.removeCategory.bind(this);
	};

	onChange = (event) => {
		this.setState({ topic: event.target.value });
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.setState({
			topic: '',
			items: [...this.state.items, this.state.topic]
		});
	}

	removeCategory(name, i){
        let items = this.state.items.slice();
        items.splice(i, 1);
        this.setState({
            items
        });
		// console.log( name );
		// console.log( i );
        // console.log( "subItems ", this.state.subItems );
    }

    render() {
        return (
          <div>
            <form className="category-submit" onSubmit={this.onSubmit}>
				<input value={this.state.topic} onChange={this.onChange} />
				<button className="submit">Submit</button>
            </form>
            <List items={this.state.items} removeCategory={this.removeCategory} />
          </div>
        );
      }
}

export default Application;