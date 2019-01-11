import React from 'react';
import Months from '../components/Months.js';
import Years from '../components/Years.js';

let d = new Date();
let currentYear = Number( d.getFullYear() );
let currentMonth = Number( ( d.getMonth() < 10 ? '0' : '' ) + Number( d.getMonth() + 1) );

function checkCreditCardType( name, value ){
	var firstTwo = value.substring( 0, 2 );
	if ( firstTwo === "34" || firstTwo === "37" ) {
		return "amex";
	}
}

class Form extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		boring: false
	// 	}

	// 	this.handleChange = this.handleChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }


	constructor(props) {
		super(props);
		this.ref = React.createRef();

		this.state = {
			fields: {},
			errors: {},
			name: '',
			creditCardNumber: '',
			ccLength: 16,
			cvv: '',
			cvvLength: 3,
			month: '',
			monthSelected: false,
			year: '',
			yearSelected: false,
			formSubmitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;

		if( name === "creditCardNumber" ){
			let type = checkCreditCardType( name, value );

			if( type === "amex" ){
				this.setState({ 
					cvvLength: 4,
					ccLength: 15
				});
			} else {
				this.setState({ 
					cvvLength: 3,
					ccLength: 16
				});
			}
		}

		if( name === "month" ){
			this.setState({ 
				monthSelected: true
			});
		}  

		if( name === "year" ){
			this.setState({ 
				yearSelected: true
			});
		}

		this.setState(
			{ [ name ]: value }
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		if ( this.validateForm() ) {
			alert( "form submitted" );
			let fields = {};
			fields["name"] = "";
			this.setState({ 
				formSubmitted: true
			});
		}
	}

	validateForm(){
		let fields = this.state;
		let errors = {};
		let formIsValid = true;

		if( !fields.name ){
			formIsValid = false;
			errors["name"] = "Please fill out this field.";
		}

		if( fields.creditCardNumber.length !== fields.ccLength ){
			formIsValid = false;
			errors["creditCardNumber"] = "Please input your credit card digits."
		}

		if( fields.cvv.length !== fields.cvvLength ){
			formIsValid = false;
			errors["cvv"] = "Please input your CVV2 digits."
		}

		if ( !fields.monthSelected || !fields.yearSelected ){
			formIsValid = false;
			errors["date"] = "Please select your credit card expiration date"
		}

		if( fields.yearSelected && fields.monthSelected ){
			if( Number( fields.year ) === currentYear && Number( fields.month ) < currentMonth ){
				formIsValid = false;
				errors["date"] = "Your card may be expired. Please check again."
			}		
		}

		this.setState({
			errors: errors
		});

		return formIsValid;
	}


	render() {
		return (
			<div className="container container-left">
				<form onSubmit={this.handleSubmit}>

					<div className="form-group">
						<label htmlFor="credit card name">Name</label>	
						<input 
							type="text" 
							name="name"
							placeholder="Name"
							value={this.value}
							onChange={this.handleChange}
							ref={this.ref}
							className={this.state.errors.name ? "error" : ""}
						/>
						{this.state.errors.name ? <p className="errorMsg">{this.state.errors.name}</p> : ""}
					</div>

					<div className="form-group">
						<label htmlFor="credit card number">Credit Card Number</label>
						<input
							type="text"
							name="creditCardNumber"
							placeholder="Card Number"
							maxLength={this.state.ccLength}
							value={this.value}
							onChange={this.handleChange}
							ref={this.ref}
							className={this.state.errors.creditCardNumber ? "error" : ""}
						/>
						{this.state.errors.creditCardNumber ? <p className="errorMsg">{this.state.errors.creditCardNumber}</p> : ""}
					</div>

					<div className="form-group">
						<label htmlFor="cvv">CVV2</label>	
						<input
							type="text"
							id="cvv"
							name="cvv"
							placeholder="CVV2"
							maxLength={this.state.cvvLength}
							value={this.value}
							onChange={this.handleChange}
							ref={this.ref}
							className={this.state.errors.cvv ? "error" : ""}
						/>
						{this.state.errors.cvv ? <p className="errorMsg">{this.state.errors.cvv}</p> : "" }
					</div>

					<div className="form-group">
						<label htmlFor="credit card month">Month</label>
						<select
							name="month"
							value={this.value}
							onChange={this.handleChange}
							ref={this.ref}
							defaultValue="Exp Month"
						>
							<option key='month' defaultValue disabled>Exp Month</option>
							{ Months.map(value =>
								<option key={value} value={value}>{value}</option>
							)}
						</select>

						<label htmlFor="credit card year">Year</label>
						<select
							name="year"
							value={this.value}
							onChange={this.handleChange}
							ref={this.ref}
							defaultValue="Exp Year"
							required
						>
							<option key='year' defaultValue disabled>Exp Year</option>
							{ Years.map(value =>
								<option key={value} value={value}>{value}</option>
							)}
						</select>
						{this.state.errors.date ? <p className="errorMsg">{this.state.errors.date}</p> : "" }
					</div>

					
					<button type="submit" className="button button-submit">
			          	Sign up Now
			        </button>
				</form>
			</div>
		);
	}
}


export default Form;
