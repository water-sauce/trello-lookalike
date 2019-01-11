var currentYear = Number( new Date().getFullYear() );
const Years = []

for ( var i = 0; i < 8; i++ ){
	Years.push( ( currentYear + i ).toString() );
}

export default Years;