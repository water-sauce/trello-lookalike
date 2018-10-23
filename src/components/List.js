import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
	removeCat(cat, i){
		this.props.removeCategory(cat, i)
	}
	render() {
		return (
			<ul>
			{this.props.items.map((item, index) => (
			  	<li className="category" key={index}>
			      	<p>{item}</p>
			      	<button className="remove" onClick={() => { this.removeCat(item, index)}}>x</button>
			      	<ListItem />
			  	</li>
			  	)
			)}
			</ul>
		)
	}
  
};

export default List;