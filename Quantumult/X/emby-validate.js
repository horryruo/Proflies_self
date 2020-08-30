var obj = {
  featId: '',
  registered: true,
  expDate: '2099-01-01',
  key: ''
};

var str = JSON.stringify(obj);
const myStatus = "HTTP/1.1 200";
const myData = str;

const myResponse = {
    status: myStatus,
    body: myData 
};

$done(myResponse)
