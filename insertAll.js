const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into weapon ("name","rate") values ("Phantom","16.7%");`,
  `insert into weapon ("name","rate") values ("Classic","10.8%");`,
  `insert into weapon ("name","rate") values ("Sheriff","7.3%");`,
  `insert into weapon ("name","rate") values ("Spectre","7.1%");,`
]
for( let sql of sqls){
  db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
}