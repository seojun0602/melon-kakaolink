try {
var { KakaoApiService, KakaoShareClient} = require('kakaolink'), cookies = []+[];
} catch (e) {
  (function(){var c=com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath().split("/").slice(0,-1).concat("global_modules","kakaolink").join("/"),u="http://seojun0602.dothome.co.kr/kakaolink/kakaolink.zip",f=c+".zip",b=java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,4096),i=new java.io.BufferedInputStream(new java.net.URL(u).openConnection().getInputStream()),o=new java.io.FileOutputStream(f),z=new java.util.zip.ZipInputStream(new java.io.BufferedInputStream(new java.io.FileInputStream(f)));for(var l;(l=i.read(b))!==-1;)o.write(b,0,l);o.close();i.close();new java.net.URL(u).openConnection().disconnect();new java.io.File(c).mkdirs();while((e=z.getNextEntry())!==null){var n=new java.io.File(c,e.getName().replace(/^kakaolink\//,''));if(e.isDirectory())continue;n.getParentFile().mkdirs();var s=new java.io.FileOutputStream(n);for(var l;(l=z.read(b))!==-1;)s.write(b,0,l);s.close();z.closeEntry()}z.close();new java.io.File(f).delete();Log.d("모듈 다운완료.",!![]);})();
  var { KakaoApiService,  KakaoShareClient} = require('kakaolink');
}
const service = KakaoApiService.createService();
const client = KakaoShareClient.createClient();
try {
  const bot = BotManager.getCurrentBot();
  bot.addListener(Event.MESSAGE, onMessage);
  cookies = service.login({
  signInWithKakaoTalk: true,
  context: App.getContext()
}).awaitResult();
}catch (e) {
  cookies = service.login({
  signInWithKakaoTalk: true,
  context: Api.getContext()
}).awaitResult();
  response = function(r, m, s) {
  msg = {
  content: m,
  room: r,
  reply: function(c) {
  Api.replyRoom(r, c+"​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​");
}
};
  onMessage(msg);
};
}
client.init('4d545a185d172754667d621049004aa1', 'https://melon.com', cookies);
// ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​Never ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​change ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​it​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​

const request = {
  request: function(option, callback) {
  try {
    var method = (option.method || 'GET').toUpperCase();
    var url = option.url + (option.qs || "");
    var headers = option.headers || {};
    var connection = org.jsoup.Jsoup.connect(url).method(org.jsoup.Connection.Method[method]).headers(headers).ignoreContentType(true).ignoreHttpErrors(true);
    if (option.json) {
      headers["Content-Type"] = "application/json";
      connection.requestBody(JSON.stringify(option.json));
    } else if (option.form) {
      connection.data(option.form);
    }
    var responses = connection.execute();
    return callback(null, {
  statusCode: responses.statusCode(),
  headers: responses.headers(),
  body: responses.body()
}, responses.body());
  }  catch (e) {
  callback(e, null, null);
}
},
  get: function(option, callback) {
  option.method = 'GET';
  return request.request(option, callback);
},
  post: function(option, callback) {
  option.method = 'POST';
  return request.request(option, callback);
}
};
function getInfoById(id) {
  const url = ["https://kkosvc.melon.com/mwk/sharelisten/sharelisten.json?songIds=", id].join([]);
  return request.get({
  "url": url
}, function(err, res, body) {
  if (err) {
    Log.e(err);
    return {};
  }
  try {
    let d = JSON.parse(body);
    if (d.status != 0) 
      return {};
    d = d.contents.ShareListenList[0];
    d = ({
  KMA: d.adult,
  THUMB_URL: d.albumImgPath,
  TITLE: d.songName,
  ARTIST: d.artistList[0].artistName,
  SONG_ID: d.songId
});
    return d;
  }  catch (e) {
  Log.e(e);
}
});
}
function getInfoByNm(keyword) {
  const url = ["https://www.melon.com/search/keyword/index.json?j&query=", keyword].join([]);
  return request.get({
  "url": url,
  "headers":{"User-Agent": "Mozilla/5.0"}
}, function(err, res, body) {
  if (err) {
    Log.e(err);
    return {};
  }
  try {
    let d = JSON.parse(body);
    if (d["ERROR"]) 
      return {};
    return getInfoById(d["SONGCONTENTS"][0]["SONGID"]);
  }  catch (e) {
  Log.e(e);
}
});
}
function send(keyword, room, reply) {
  obj = getInfoByNm(keyword);
  if (Object.keys(obj) == 0) 
    return reply("​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​곡이 존재하지 않습니다.");
  obj = {
  templateId: 17141,
  templateArgs: obj
};
  client.sendLink(room, obj, 'custom').awaitResult();
}
function onMessage(msg) {
  /* ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​멜론 ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​카카오링크 ​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​소스. ©2025 서준(seojun0602), All rights reserved.
     https://github.com/seojun0602/melon-kakaolink
     사용 방법: !멜론 [검색어]
     검색 결과 중, 가장 최상위의 곡을 가져오기 때문에 때때로 결과가 만족스럽지 못할 수 있음.​​​​​​​​​‌‌‌​​‌‌​​​​​​​​​‌‌​​‌​‌​​​​​​​​​‌‌​‌‌‌‌​​​​​​​​​‌‌​‌​‌​​​​​​​​​​‌‌‌​‌​‌​​​​​​​​​‌‌​‌‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​‌‌​​​​​​​​​​​‌‌​​​​​​​​​​​​​​‌‌​​‌​
  */
  return (msg.content["startsWith"]("!멜론 ")) ? send(msg.content["split"]("!멜론 ")[1], msg.room, msg.reply) : "";
}
