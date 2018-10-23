import React, {Component} from 'react';

class SubList extends Component {
	removeLi(item, i) {
        this.props.removeItem(item, i);
    }

    render(){
		return (
			<ul>
				{this.props.subItems.map((item, index) => (
					<li className="subtopic" key={index}>
						{item}
						<button className="remove" onClick={() => { this.removeLi(item, index)}}>x</button>
					</li>	
				))}
			</ul> 
		);
	}
};

export default SubList;

