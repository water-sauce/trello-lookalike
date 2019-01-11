import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
	removeCat(cat, i){
		this.props.removeCategory(cat, i)
	}
	render() {
		return (
			<div>
				<ul>
				{this.props.items.map((item, index) => (
				  	<li className="category" key={index}>
				      	<h4>{item}</h4>
				      	<button className="remove" onClick={() => { this.removeCat(item, index)}}>x</button>
				      	<ListItem />
				  	</li>
				  	)
				)}
				</ul>
				<p>{this.props.subject}</p>
			</div>
		)
	}
  
};

export default List;