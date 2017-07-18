const fs = require('fs');
const path = require('path');
const rootpath=require('app-root-path');


//파일의 현재 경로를 찾는다
var path1 =require('app-root-dir').get();
//txt 파일 경로를 찾는다
var txtpath=path.join(path1,'txt');

//파일을 읽어서 출력한다.
var text=fs.readFile(txtpath+'/file.txt','utf8',function(err,data){
  console.log(data);
});
