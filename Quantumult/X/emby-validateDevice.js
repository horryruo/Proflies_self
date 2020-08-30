/**var obj = {
  cacheExpirationDays: 365,
  message: 'Device Valid',
  "resultCode": 'GOOD'
};

var str = JSON.stringify(obj);

$done({ body: str, status: 200 });
*/
var obj = {
  cacheExpirationDays: 365,
  message: 'Device Valid',
  "resultCode": 'GOOD'
};

var str = JSON.stringify(obj);
const myStatus = "HTTP/1.1 200";
const myData = str;

const myResponse = {
    status: myStatus,
    body: myData 
};

$done(myResponse)
