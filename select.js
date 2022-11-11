const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = "select id, name, offense, defense, search, control from character";


db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' ' + data.offense + ' ' + data.defense + ' ' + data.search + ' ' + data.control );
		}
	});
});
