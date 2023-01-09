const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into character ("name","parameter") values ("ジェット","120");`,
  `insert into character ("name","parameter") values ("レイナ","60");`,
  `insert into character ("name","parameter") values ("フェニックス","80");`,
  `insert into character ("name","parameter") values ("ネオン","60");`,
  `insert into character ("name","parameter") values ("レイズ","100");`,
  `insert into character ("name","parameter") values ("ヨル","40");`,
  `insert into character ("name","parameter") values ("ブリムストーン","60");`,
  `insert into character ("name","parameter") values ("オーメン","100");`,
  `insert into character ("name","parameter") values ("アストラ","80");`,
  `insert into character ("name","parameter") values ("ヴァイパー","80");`,
  `insert into character ("name","parameter") values ("ハーバー","60");`,
  `insert into character ("name","parameter") values ("ソーヴァ","100");`,
  `insert into character ("name","parameter") values ("スカイ","60");`,
  `insert into character ("name","parameter") values ("フェード","100");`,
  `insert into character ("name","parameter") values ("KAY/O","120");`,
  `insert into character ("name","parameter") values ("ブリーチ","60");`,
  `insert into character ("name","parameter") values ("サイファー","80");`,
  `insert into character ("name","parameter") values ("キルジョイ","120");`,
  `insert into character ("name","parameter") values ("セージ","60");`,
  `insert into character ("name","parameter") values ("チェンバー","80");`
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