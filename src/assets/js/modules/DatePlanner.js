class DatePlanner {
	constructor( options ){
		this.element = document.querySelector( options.element );

		if( !this.element ){
			console.error(`${ options.element } is not found!`)
		}

		if( options.data ){
			console.log(options.data);
		}
	}

	
}

export default DatePlanner;