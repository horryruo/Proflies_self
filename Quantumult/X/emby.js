
/*
emby

Surge & QX MITM = mb3admin.com
*/

let url = $request.url;
var obj = JSON.parse($response.body);

let validateDevice = '/admin/service/registration/validateDevice/';
let validate = '/admin/service/registration/validate/';
let getStatus = '/admin/service/registration/getStatus/';


if (url.indexOf(validateDevice) != -1) {
   obj= {
	cacheExpirationDays = "365";
	message = "Device Valid";
	resultCode = "GOOD";
	};	
}
else if (url.indexOf(validate) != -1) {
    obj= {
	featId = "";
	registered = "true";
        expDate = "2099-01-01";
        key = "";
	 };
}
else if (url.indexOf(getStatus) != -1) {
    obj= {
	deviceStatus = "";
        planType = "";
        subscriptions = "{}";
	 };
} 



	body = JSON.stringify(obj);

$done({body});

//by horry
