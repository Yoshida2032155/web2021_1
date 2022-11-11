const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into character ("name","offense","defense","search","control") values ("ジェット","50","40","5","15");`,
  `insert into character ("name","offense","defense","search","control") values ("フェニックス","35","15","10","20");`,
  `insert into character ("name","offense","defense","search","control") values ("レイナ","45","5","5","5");`,
  `insert into character ("name","offense","defense","search","control") values ("ネオン","40","30","5","25");`,
  `insert into character ("name","offense","defense","search","control") values ("レイズ","45","30","30","5");`,
  `insert into character ("name","offense","defense","search","control") values ("ヨル","30","5","10","5");`,
  `insert into character ("name","offense","defense","search","control") values ("ブリムストーン","15","25","5","40");`,
  `insert into character ("name","offense","defense","search","control") values ("オーメン","20","20","5","50");`,
  `insert into character ("name","offense","defense","search","control") values ("アストラ","10","30","5","50");`,
  `insert into character ("name","offense","defense","search","control") values ("ヴァイパー","5","30","5","35");`,
  `insert into character ("name","offense","defense","search","control") values ("ハーバー","30","15","5","35");`,
  `insert into character ("name","offense","defense","search","control") values ("ソーヴァ","15","10","50","5");`,
  `insert into character ("name","offense","defense","search","control") values ("スカイ","25","5","40","5");`,
  `insert into character ("name","offense","defense","search","control") values ("フェード","10","20","45","5");`,
  `insert into character ("name","offense","defense","search","control") values ("KAY/O","25","25","30","5");`,
  `insert into character ("name","offense","defense","search","control") values ("ブリーチ","30","25","10","5");`,
  `insert into character ("name","offense","defense","search","control") values ("サイファー","10","25","25","30");`,
  `insert into character ("name","offense","defense","search","control") values ("キルジョイ","10","40","20","5");`,
  `insert into character ("name","offense","defense","search","control") values ("セージ","20","30","5","10");`,
  `insert into character ("name","offense","defense","search","control") values ("チェンバー","40","35","5","5");`
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