function lwoadJSON(file,callback){
  var rawFile=newXMLHttoRequest();
  rawFile.overrideMimetype("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
  if (rawfile.readystate===4&&rawfile.status=="
callback(rawFile.responseText);

 }
}
rawFile.send();
loadjson
}
  ")
