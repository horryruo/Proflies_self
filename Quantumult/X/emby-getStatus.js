var foo = {

}

var obj = {
    deviceStatus:  '0',
    planType:      'Lifetime',
    subscriptions:  foo
  };

var str = JSON.stringify(obj)
const myStatus = "HTTP/1.1 200";
const myData = str;

const myResponse = {
    status: myStatus,
    body: myData 
};

$done(myResponse)
