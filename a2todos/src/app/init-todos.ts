export class Init{
	load() {
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
			
			return null;
		} else {
			console.log('Found Todos...');
		}

	}
}