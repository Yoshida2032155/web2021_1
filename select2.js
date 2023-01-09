const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = "select ID, namepick, parameterpick from party";


db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.ID + ' : ' + data.namepick + ' ' + data.parameterpick );
		}
	});
});
