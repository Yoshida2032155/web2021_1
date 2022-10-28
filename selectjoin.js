const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select weapon.id, name, rate, head, body, leg 
 from weapon inner join damage
 on weapon.id=damage.id;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' ' + data.rate + ' ' + data.head + ' ' + data.body + ' ' + data.leg );
		}
	});
});