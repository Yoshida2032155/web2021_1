const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Vandal","40.8%","156","39","33","1");`,
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Phantom","16.7%","140","35","30","1");`,
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Classic","10.8%","78","26","22","5");`,
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Sheriff","7.3%","159","55","46","3");`,
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Spectre","7.1%","78","26","22","2");,`,
  `insert into weapon ("name","rate","head","body","leg","tierid") values ("Operator","3.9%","255","150","127","1");`
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