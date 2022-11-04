const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
create table weapon(
  id integer primary key,
  name text not null,
  rate text not null,
  head twxt not null,
  body text not null,
  leg text not null,
  tierid text not null
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
