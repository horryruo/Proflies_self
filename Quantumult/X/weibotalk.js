/*
By Evilbutcher
weibo supertalk checkin
*/
const tokenurl = 'evil_tokenurl';
const tokencheckinurl = 'evil_tokencheckinurl'
const tokenheaders = 'evil_tokenheaders'
const tokencheckinheaders = 'evil_tokencheckinheaders'

var id = [];
var groupnumber
var listurl = $prefs.valueForKey(tokenurl);
var listheaders = $prefs.valueForKey(tokenheaders);
var checkinheaders = $prefs.valueForKey(tokencheckinheaders)
const m = "GET";
var idrequest = { url: listurl, method: m, header: listheaders };

async function start(){
  await getid()
  //console.log(id)
  checkin()
}

start()

//签到
async function checkin() {
  var checkinurl = $prefs.valueForKey(tokencheckinurl);
  console.log(checkinurl);
  for (i = 0; i < groupnumber; ) {
    var sendcheckinurl = checkinurl.replace(
      new RegExp("&fid=.*?&"),
      "&fid=" + id[i] + "&"
    );
    console.log(sendcheckinurl);
    var checkinrequest = {
      url: sendcheckinurl,
      method: m,
      header: checkinheaders
    };
    $task.fetch(checkinrequest).then(response => {
      var body = response.body;
      var obj = JSON.parse(body);
      console.log(obj);
      var result = obj.result;
      console.log(result);
      if (result == 1) {
        console.log(obj.button.name);
        $notify("微博超话", "", "签到成功");
      } else {
        console.log(obj.error_msg);
        $notify("微博超话", "", "该超话今日已签到");
      }
    });
    await 500;
    //console.log(body)
    i = i + 1;
  }
}

//获取超话签到id
function getid() {
  return new Promise(resolve => {
    $task.fetch(idrequest).then(response => {
      var body = response.body;
      var obj = JSON.parse(body);
      var group = obj.cards[0]["card_group"];
      groupnumber = obj.cards[0]["card_type"];
      for (i = 1; i <= groupnumber; ) {
        id.push(group[i].scheme.slice(33, 71));
        i = i + 1;
      }
      //console.log("id函数")
      if (id.length > 0) {
        resolve ();
      }
    });
  });
}
