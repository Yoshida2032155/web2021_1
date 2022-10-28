const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into damage ("head","body","leg") values ("156","39","33");`,
  `insert into damage ("head","body","leg") values ("140","35","30");`,
  `insert into damage ("head","body","leg") values ("78","26","22");`,
  `insert into damage ("head","body","leg") values ("159","55","46");`,
  `insert into damage ("head","body","leg") values ("78","26","22");`,
  `insert into damage ("head","body","leg") values ("255","150","127");`,
  
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