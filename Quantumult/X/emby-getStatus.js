var foo = {

}

var obj = {
    deviceStatus:  '',
    planType:      '',
    subscriptions:  {}
  };

var str = JSON.stringify(obj)

$done({ body: str, status: 200 });
