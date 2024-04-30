function setKey() {
  //Function to set the keys by the backend
  //Change <tokenValue> for your token key
  //The key is saved to the User propertys
  PropertiesService.getScriptProperties().setProperty('APIkey',"yourKey");
 // setUserAgent();

}
//*

function returnAPIkey() {
  //Invoke to recorver the key and use it as variable
   var token =  PropertiesService.getScriptProperties().getProperty('APIkey');
   return token;
}
//*




/*Fuintions not needed yet
function setUserAgent() {
  //Funtion for setting the user agent after the key set
  //Recover login information from key verification method

  var keyObject = tokenAuthentication();
  Logger.log(keyObject)
  var login = keyObject.login;

  if (login) {
    PropertiesService.getScriptProperties().setProperty('User-Agent', login);
  } //Handle exceptions; develop later

}

//*
/*Fuintion not needed yet
function setPaths() {
  //Function to set the Paths for the folder request by the backend
  //Change <tokenValue> for your token key
  //The key is saved to the User propertys
  PropertiesService.getScriptProperties().setProperty('OWNER', "Zoiodois");
  PropertiesService.getScriptProperties().setProperty('REPO', "URLFetchApp-Exemples---Github-API-Conection");
}
//*

function returnUserAgent() {
  //Invoke to return a User-Agent 
   var userAgent =  PropertiesService.getScriptProperties().getProperty('User-Agent');
   return userAgent;
}



function returnOwner() {
  //Invoke to recorver the Owner of repo and use it as variable in API path
   var owner =  PropertiesService.getScriptProperties().getProperty('OWNER');
   return owner;
}

function returnRepo() {
  //Invoke to recorver a repository name and use it as variable in API path
   var repo =  PropertiesService.getScriptProperties().getProperty('REPO');
   return repo;
}
*/


