     var webSocket = new WebSocket('wss://ssl.easyanalitics.com');
    function initsocket(){
	webSocket.send("nodata");
	webSocket.send("WINLINE");
	webSocket.send("getdate");
	}
    
    
    function onmessage(event){
		console.log('message');
		step=event.data.charCodeAt(0);
		 mes=event.data.slice(1);
		 decode(mes,step,2);}
    
    
   
	webSocket.onmessage =onmessage;
	webSocket.onopen = function() {
  alert("Соединение установлено.");
  initsocket();
};

webSocket.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};
	//webSocket.send("nodata");
	//webSocket.send("WINLINE");
	//webSocket.send("getdate");
	
	var maxKoef = 5000;
    var ntvpop = 0;
    var domen = document.domain;
    var videosrc=domen.split('.'); videosrc="http://"+videosrc[videosrc.length-2]+'.'+videosrc[videosrc.length-1];
    var multiordinar = 0;
    var ntvinterval = null;
    var maxexpressDay=999999999;
	var maxexpressDayLive=999999999;
	var ntvselect=-1;
	var ntvselect2=-1;
    var ie=0;
	if(document.all && !window.atob) ie=1;
    var prinarray=new Array();
    var LastScroll=0;    
    var IndexScroll=0;
    var LastFrontLive=-1;
    var EventRospisi=-1;
	var tPlus=new Array();
    var BltState=0;
    var SportState=0;
	var OverSport=0;
    var RapidState=0;
    var LiveState=0;
    var FavoritState=0;
    var ttt1=0;
    var ttt2=0;
	var ttt3=0;
	var ttt4=0;
    var newlive=0;
    var newlive2=0;
	var loadtranslate=0;
	var table160=0;
	var ntvlogin=0;
	var demoshow=0;

   var laststep=0;
   var lastblock=0;
   var innerbonus="";
   var innerbonus2="";
   var authstate=null;
   var authstate2=null;
   var auth116="";
   var auth13="";
   var auth77="";
   var mTip_Line=new Array();
   var mSport=new Array();
   var mResults=new Array();
   var mChamps=new Array();
   var mCountry=new Array();
   var mEvents=new Array();
   var mLines=new Array();
   var mRospis=new Array();
   var mSamples=new Array();
   var mExpress=new Array();
   var mExpressState=0;
   var mExpressDay=new Array();
   var mExpressDayLive=new Array();
   //var mOrdinar=new TExpress();mOrdinar.State=1;
   var rDate=new Date();
   var resultstate=0;
   var test1=0;

    var mChampionships=new Array();
    var Session=-1;// значения для отправки на сервер
    var LastIndex=-1;// значения для отправки на сервер
    
	var NewSport=new Array();// массив видов спорта куда пришли новые чемпионаты.
    var ChangeEvent=new Array();// массив ид эвентов у которых изменилась линия 
	var NewEvent=new Array();// массив ид эвентов новых
	var DeleteEvent=new Array();//массив ид эвентов которые удадлились
    var NewChampion=new Array();//массив указывающий на чемпионаты, куда пришли новые евенты или удалились
    var LastChampionFull=new Array();//массив чемпионатов которые сейчас отображаются
    var LastChampion=new Array();//массив нелайф чемпионатов которые сейчас отображаются
    var LastChampionLive=new Array();//массив лайф чемпионатов которые сейчас отображаются
    var LastEvent=new Array();//массив ид эвентов в отображении
	var LastEventl=new Array();//массив ид эвентов лайф в отображении
	var LastEventn=new Array();//массив ид эвентов нелайф в отображении
	var LastLine=new Array();//массив ид лайнов с изменениями
	var LastEventAction=new Array();//массив ид эвентов в отображении в акциях
	var LastAddarray=new Array();//массив ид эвентов в отображении в акциях
	  
    var ChampionId=new Array();
    var EventId=new Array();
	var CountryId=new Array();
    var LineId=new Array();
    var tipLineId=new Array();
	tipLineId[0]=new Array();
	tipLineId[1]=new Array();
	var SportId=new Array();
	


var rdif=0;
var nhltimer=null;
var mdif=3;
var initpromostate=0;

//alert(mdif);

//timerPhone=new Date();
//timerPhonet=0;
var inithref=window.location.href; 
var countvideo=0;
var ssflag=0;
var ssprincipal=new Array();
var ssplus=0;
var smstime1=null;
var smstimec1=59;
var smstime2=null;
var smstimec2=59;
var otkat=0;
var champlongstate=0;
var champlongstate2=0;
var champlongid=0;
var bonsumma1=0;
var bonsumma2=0;
var bonusactiv=0;
var bonusobj=null;
var mRospisradar=new Array();
var mEventradar=null;
var mRospisradar2=new Array();
var mEventradar2=null;
var emailcod=0;
var rardtime=null;
var inserttime=null;
var lmtstate=0;
var lmtstate2=0;
var imglivew=new Array();
var imgliveg=new Array();
var imgw=new Array();
var img=new Array();
var radvideo=new Array();


var vflbegin=0;
var framestr='<iframe width="743" height="514" frameborder="0" id="vfl_iframe" name="vfl_iframe" src="/vflbb/vleague.php?clientid=476"></iframe>';
//var framestr='<iframe width="743" height="514" frameborder="0" id="vfl_iframe" name="vfl_iframe" src="/vflstaging/vleague.php?clientid=476"></iframe>';
var regnavstate=0;

var hisloyastate=0;
var loyalxlop=0;
var loyalball=new Array(10,80,300,1000,10000);
var loayallevel=new Array("200 руб.","1000 руб.","2000 руб.","10000 руб.");
var loayallevel2=new Array("бесплатная ставка","бесплатная ставка","бонус на счет<br/>&nbsp;","бонус на счет<br/>&nbsp;");
var hisloyal=new Array();//200,140,8900,12,1);
var hisloyalm=new Array();//200,140,8900,12,1);
var hisloyalv=new Array();
var extractplatastate=1;
var extractbonusstate=1;

//hisloyal[0]=100;
var oldPromotion="";
var countPromotion=0;
var j77=0;	

var loyalindex=0;
var xlopp=new Array(1,0,1,1,1,1,1,1,1);
var xloppi=new Array();
var xloppc=new Array(0,0,0,0,0,0,0,0,0);
var LastSumm=100;
var RandomLive=0;
var RandomLive2=0;
var ordinararray=new Array();
var grandsendstate=0;
//var maxstavkasend=0;
var nowevent=1;
var nowarray=new Array();
var nowinterval=null;
var nowsport=0;
var starevent=new Array();
var stareventid=new Array();
var stareventnow=new Array();
var starchamp=new Array();
var starchampl=new Array();
//var Scaut=new TScaut();
var scautTime=null;
var scautTimeCount=0;
var ScautTime="";
var version=22;
var crdcrd=0;
var pcrdcrd=0;
var countrystate=0;
var countrylogin=0;
var cookvirt=0;
var cookvirtcount=0;
var pradmine=new Array();
var pradminc=new Array();
var prpoz=new Array();
var prshow=new Array();
var prindex=new Array();
var prindex2=new Array();

for(i=0;i<10;i++){prinarray[i]=new Array();LastAddarray[i]=0;}


function getElementsByClass(tag, name) {
	if(!$.browser.msie) return document.getElementsByClassName(name);
     var elem = document.getElementsByTagName(tag);
     var arr = new Array();
     for(i = 0,iarr = 0; i < elem.length; i++) {
     att = elem[i].getAttribute("class");
	 att2 = elem[i].getAttribute("className");
     if(att == name||att2 == name) {
     arr[iarr] = elem[i];
     iarr++;
          }
     }
     return arr;
}




hrefcount=0;




out = function() {
return;
            
    try {
        var args = new Array();
        args[args.length] = (new Date()).toLocaleTimeString();
        args[args.length] = ':';
        for(var i=0; i<arguments.length;i++) {
            args[args.length] = arguments[i];
            args[args.length] = ',';
        };
        if($.browser.opera)
            console.log.apply(this, args);
    }
    catch(e) {};
};

function hex2bin(h) { var r = ""; for (var i= (h.substr(0, 2)=="0x")?2:0; i<h.length; i+=2) {r += String.fromCharCode (parseInt (h.substr (i, 2), 16));} return r; }
function bin2hex(bin) { var result = ""; var temp = ""; for(var i=0; i < bin.length; i++) { var chr = bin.charCodeAt(i); if(chr > 127){ chr = encodeURIComponent(bin.charAt(i)); } else { chr = chr.toString(16); } result += chr; }  for(var i=0; i < result.length ;i++) { var chr = result.charAt(i); if(chr != '%') temp += chr; }  return temp.toLowerCase(); } 
/*
var Cookie = function() {};
Cookie.set = function (c_name, value, exdays, path, domain) {
return;	
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString()) + (path == null ? '; path=/' : '; path=' + path);
    document.cookie = c_name + "=" + c_value;
};
Cookie.get = function (c_name) {
return;	
    var i,x,y,ARRcookies=document.cookie.split(";");
    for( i=0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g,"");
        if(x == c_name)
            return unescape(y);
    }
    return null;
};
Cookie.del = function(c_name, path, domain) {
return;	
    if ( Cookie.get( c_name ) ) document.cookie = c_name + "=" +
    ( ( path ) ? ";path=" + path : "") +
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ";expires=Thu, 01-Jan-1970 00:00:01 GMT";    
};
*/

function showTitle(show, title, large) {
        if(!show) {
        $('#BACK').hide();
        if(title) document.title ="Ставки на "+ title; else 
		$('#doctitle').html() != document.title ? document.title = $('#doctitle').html() : false;
		
		
    	}
    else {
        $('#BACK').show();
        title ? $('#BACK span').html(title) : false;
		if(title) document.title =title; else 
        $('#doctitle').html() != document.title ? document.title = $('#doctitle').html() : document.title = title;
		
		if(large == true)
            $('#BACK').width(1004).css({marginLeft: '-260px'});
        else
            $('#BACK').width(742).css({marginLeft: '0px'});
    }    
    
}




function redrawevent(k){
var l=0;	
if(!EventId[k]&&EventId[k]!=0) return;

var mEvent=mEvents[EventId[k]];
if(!mEvent) return;
for(l=0;l<LastEvent.length;l++) if(k==LastEvent[l]) {
    if(LiveState+FavoritState+SportState+BltState+SportIndex>-1){ 
    if((RapidState==1)&&(euroline==1)&&((mEvent.TIP_TABLE==3)||(mEvent.TIP_TABLE==2)))
    id_("Mevent"+k).innerHTML=mEvent.string2;
    else id_("Mevent"+k).innerHTML=mEvent.string;
	if(euroline==1){
    if((LIVE2>3)&&(mEvent.Live==1)&&(mEvent.const1+57<mEvent.Height))
    id_("Mevent"+k).style.height=(mEvent.const1+57)+"px";
    else id_("Mevent"+k).style.height=mEvent.Height+"px";}
    }
    break;};
}	


function redraweventaction(k){
var l=0;	
if(!EventId[k]&&EventId[k]!=0) return;
var mEvent=mEvents[EventId[k]];
if(!mEvent) return;
//for(l=0;l<LastEventAction.length;l++) if(k==LastEventAction[l]) {
if(id_("AC"+k)) id_("AC"+k).innerHTML=Rapidstring(mEvent);
// break;};
}





function Refresh(step){
//if(countvideo>0) id_("tenmimg").style.display="";else id_("tenmimg").style.display="none";


//if(ttt<12) console.log(mSport[1].Rombo);
if(ttt==0) document.body.style.display="inline";	
	
//if(ttt==0)console.log("ttt="+ttt+"Refreshstart="+(new Date().getTime()-timerus));	

//console.log("mEvents.length="+mEvents.length);
//console.log("Refresh");		
//timerus2();	
//if(ttt==0) _gaq.push(['_setCustomVar',1,'Login','None',2]);


//console.log("countvideo="+countvideo);

	var tempus=new Array();
    var temp=0;
    var temp2=0;
    var temp3=0;
    var temp4=0;
    var i=0;
    var j=0;
    var l=0;
    var k=0;
    var m=0;
	var u=0;
	var string4="";
	var prDayLive=0;
	var prDay=0;
	if(LIVE==1) prDayLive=1;
	//console.log(prinarray[9].length);

	if(ttt3==2) {ttt=100;ttt3=3; for(i=0;i<mEvents.length;i++){if(mEvents[i].string.length>0) DrawEvent(mEvents[i],2);} ChangeEvent=new Array(); DrawTable(0);return;}
    LastChampionFull.splice(0);
    LastChampionFull=LastChampion.concat(LastChampionLive);
    ttt++;

if(ttt==1){ if(window.location.href.indexOf("stavki/sport/")>-1) loadPage2(window.location.href);
else drawpr(0);//expressday(0);
}
if(LIVE==1&&ttt>10) for(i=0;i<5;i++) drawpr(i);


if(ttt==3) initsocket2();

if(ttt>2&&ttt<6&&Plus.style.display=="none"&&Pluslarge.style.display=="none"&&Rospis.style.display=="none"&&window.location.href.indexOf("plus")>-1){
loadPage2(window.location.href);demoshow=1;setTimeout('demoshow=0;if(loginstate==0)plusdemo();',13000);
}


if(ttt==3){
//if(window.location.href.indexOf("plus")>-1) loadPage2(window.location.href);
if(window.location.href.indexOf("auth/results")>-1) if(resultstate==0) webSocket.send("result_sports");
if(window.location.href.indexOf("virtualijnyj_futbol")>-1&&vflbegin==0&&SportIndex>-1&&mSport[SportIndex].ID_SPORT==110)webSocket.send("vflbegin");
}

/*
if(ttt==5){
cookvirtcount=getCookie("cookvirtcount");
if(cookvirtcount&&cookvirtcount>3) setTimeout(runvirt,6000);
else{
cookvirt=getCookie("cookvirt");
if(cookvirt==""){
cookvirtcount=0;
cookvirt=new Date().getTime()/1000; 
setCookie("cookvirt",cookvirt, expire, "/", "",secure); setCookie("cookvirtcount",cookvirtcount, expire, "/", "",secure);
 } else 
if(cookvirt!=1){
if(new Date().getTime()/1000-cookvirt>3600)
{cookvirtcount=getCookie("cookvirtcount");cookvirtcount++;
if(cookvirtcount>3) setTimeout(runvirt,6000); else  {cookvirt=new Date().getTime()/1000; 
setCookie("cookvirtcount",cookvirtcount, expire, "/", "",secure);setCookie("cookvirt",cookvirt, expire, "/", "",secure);};}
}
}
}
*/



if(ttt==6){
champcookie(mChampionships[i]);
eventcookie();
for(i=0;i<mEvents.length;i++)
if((mEvents[i].Live==0&&(mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav1==1||stareventid[mEvents[i].ID_EVENT]==1))||(mEvents[i].Live==1&&(mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav2==1||stareventid[mEvents[i].ID_EVENT]==1))){
mEvents[i].fav=1;
mEvents[i].string=mEvents[i].string.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
mEvents[i].string2=mEvents[i].string2.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
if(mEvents[i].Live==1) mEvents[i].string3=mEvents[i].string3.replace("star"+((mEvents[i].fav+1)%2+1),"star"+(mEvents[i].fav+1));
cookierefresh=1;
mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit++;
for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==mEvents[i].ID_SPORT){mSport[j].favorit++;break;}
}	
if(window.location.href.indexOf("favorites")>-1) loadPage2(window.location.href);
}




















if(ttt==30) clearcookie();
if(nowevent==1&&LiveState==1||LIVE==1) ttt1=1;



//return;


    if(ttt>1&&LIVE!=1){
    LastChampionFull=new Array();    
    LastChampionFull=LastChampion.concat(LastChampionLive);
	if(ttt1==0) for(i=0;i<NewChampion.length;i++){ for(j=0;j<LastChampionFull.length;j++) if(NewChampion[i]==LastChampionFull[j]){ttt1=1;break;} if(ttt1==1)break;}
       
	  
	for(k=0;k<ChangeEvent.length;k++)
	{if(tempus[ChangeEvent[k]]==1) continue;
	 tempus[ChangeEvent[k]]=1;
	
	
	
	if(prDay==0) for(l=0;l<principalDay.length;l++) if(principalDay[l]==ChangeEvent[k]){prDay=1;break;}
	
	if(iphone==0&&prDayLive==0){
	if(principalDayLiveCurrent.length<3) {for(l=0;l<principalDayLive.length;l++) if(principalDayLive[l]==ChangeEvent[k]){prDayLive=1;break;}}    
	else for(l=0;l<principalDayLiveCurrent.length;l++) if(principalDayLiveCurrent[l]==ChangeEvent[k]){prDayLive=1;break;}}


	
	if(mEvents[EventId[ChangeEvent[k]]].string.length>0) DrawEvent(mEvents[EventId[ChangeEvent[k]]]);
	else if(timeinit==1) setEventTime(mEvents[EventId[ChangeEvent[k]]]);
	
	if(mEvents[EventId[ChangeEvent[k]]].Live==1&&id_("low"+ChangeEvent[k])) id_("low"+ChangeEvent[k]).innerHTML=mEvents[EventId[ChangeEvent[k]]].string3;
   
	if((ChangeEvent[k]==LastFrontLive)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none"))) pluslive(LastFrontLive);
    if((ChangeEvent[k]==EventRospisi)&&(Rospis.style.display!="none")) plus(EventRospisi);
	
	if(ttt1==0) redrawevent(ChangeEvent[k]);
    redraweventaction(ChangeEvent[k]);  
    ;};}



MenuClick(step);

if(initpromostate==1) for(i=0;i<prinarray.length;i++) if(LastAddarray[i]==1) {drawpr(i);LastAddarray[i]=0;}
if(nowevent==1&&ttt>1) {drawlivenow(); drawseo();}


if(prDayLive==1) expressdaylive(0);
if(prDay==1) expressday(0);

//var instate=0;
//for(i=1;i<prinarray.length;i++) if(pr[i]==1) {Sortprincipal(i);instate=1;}
//if(instate==1) insertkoef(1);


    NewChampion.splice(0);
    NewSport.splice(0);
	ChangeEvent=new Array();
	
	//DeleteEvent.splice(0);
	

if(ttt==1){nowtim();nowinterval=setInterval(nowtim,60000);}
//if(nowevent==1&&LiveState==1) ttt1=1;
//MenuClick(step);
//if(nowevent==1) {drawlivenow();if(prinarray[9].length>0) drawseo();}


nowevent=0;    


if(LastLine.length==0) return; 

for(i=0;i<LastLine.length/3;i++){ 
//for(j=0;j<LastEvent.length;j++) if(LastEvent[j]==mLines[LineId[LastLine[3*i]]].ID_EVENT) break; if(j==LastEvent.length) continue; 
if(id_(LastLine[3*i]+"V"+LastLine[3*i+1]))id_(LastLine[3*i]+"V"+LastLine[3*i+1]).setAttribute("class", "up"+LastLine[3*i+2]+" flash");
;}


for(i=0;i<LastLine.length/3;i++){ 
for(j=0;j<LastEventAction.length;j++) if(LineId[LastLine[3*i]]!=null&&(mLines[LineId[LastLine[3*i]]].ID_EVENT==LastEventAction[j])) break;
if(j==LastEventAction.length) continue;
if(id_(LastLine[3*i]+"A"+LastLine[3*i+1]))id_(LastLine[3*i]+"A"+LastLine[3*i+1]).setAttribute("class", "up"+LastLine[3*i+2]+" flash");
}

if(iphone==0){
for(i=0;i<LastLine.length/3;i++){ for(j=0;j<nowprincipal.length;j++) if(LineId[LastLine[3*i]]!=null&&(nowprincipal[j]==mLines[LineId[LastLine[3*i]]].ID_EVENT)) break; 
if(j==nowprincipal.length) continue; 
if(id_(LastLine[3*i]+"W"+LastLine[3*i+1]))
id_(LastLine[3*i]+"W"+LastLine[3*i+1]).setAttribute("class", "upw"+LastLine[3*i+2]+" flash");
;};}

LastLine=new Array();}





function RapidDraw2(mEvent){


var title1=new Array("победа первой","ничья","победа второй");
var title2=new Array("победа первой или ничья", "победа одной из команд", "победа второй или ничья");
var title3=new Array("тотал больше","тотал меньше");
var title4=new Array("фора1","фора2");

 
var tvstring="";
var temp=new Array();
var string="";
var string2="";

var string4="";
var color1="000000";
var color2="000000";
var i=0;
var j=0;
var u=0;
var h=0;
var lh=15;
var mt=10;
var uc="";
var jj=new Array(0,2,1);
line="";

if(mEvent.Live==1) lh=20;
if(mEvent.Live==1) mt=7;
if(mEvent.UCHASTNIK1.length+mEvent.UCHASTNIK2.length<32) uc=mEvent.UCHASTNIK1+ ' - '+mEvent.UCHASTNIK2;
else uc=mEvent.UCHASTNIK1+ ' -<br />'+mEvent.UCHASTNIK2;


if(mEvent.Live==1) color2=color1="F47621"; else color2=color1="000000";
h=mEvent.const1;
string=string+'<div class="TShow" style="height:'+h+'px;"><div style="float:left;width:267px;">';

if(mEvent.Live==1) string=string+'<div class="ix"></div>';

else if(mEvent.ID_LIVE==1) string=string+'<div class="fut" title="Будут доступны ставки LIVE"></div>';

string=string+'<div class="ix2">';

if(mEvent.UCHASTNIK1.length+mEvent.UCHASTNIK2.length<32)
string=string+'<div class="EU1'+color1+'" onclick="plushash('+mEvent.ID_EVENT+');"';
else string=string+'<div class="EU1'+color1+'" style="margin-top:-9px;" onclick="plushash('+mEvent.ID_EVENT+');"';
if(mEvent.chet>0) string=string+'style="width:188px;"';


string=string+'>'+uc+'</div></div><div class="ix3">';

if(mEvent.Live==1){
string=string+mEvent.Data2;
}

else string=string+'<span class="ix4">'+mEvent.Data.replace("<br /><div class='future' title='Будут доступны ставки LIVE'></div>","").replace("<br />","</span><span style='float:left;margin-left:10px;'>")
+'</span>';

if(mEvent.Live==0&&mEvent.DURATION==1) string=string+'<span style="float:left;font-size:14px;font-weight:bold;margin-left:122px;cursor:help;" title="Только ординар">ТО</span>'; 



if(mEvent.clock_stopped>0){
string=string+'<div onclick="plushash('+mEvent.ID_EVENT+')" class="ix'+(10-mEvent.Live)+'" title="трансляция на сайте"></div>';
}
else 
if(mEvent.TV.length>0){
temp=mEvent.TV.split(",");
tvstring="";
for(u=0;u<temp.length;u++) tvstring=tvstring+mTV[parseInt(temp[u])]+" \n";
string=string+'<div class="ix'+(5+mEvent.Live)+'" title="'+tvstring+'"></div>';}
else {
string=string+'<div class="ix7"></div>'
}





string=string+'</div>';
if(mEvent.chet>0) string=string+'<img src="/resources/images/bonx'+mEvent.chet+'p.png" title="'+bxb[mEvent.chet]+' бонусы на этот матч" style="float:right;margin:-45px 7px 0px 0;cursor:help;"/>'
string=string+'</div><div class="ix8"></div><div class="T1x2e">';

for(i=0;i<3;i++){
if(mEvent.T1x2[jj[i]].length>0)
{
if(mEvent.State==2)
string=string+'<div class="class3e2"">'+
'<div class="class4e2">'+mEvent.T1x2[jj[i]]+'</div></div>';
else 
{
temp=mEvent.T1x2[jj[i]].split("#");
line=temp[1].replace("<br />","V")+temp[2];
string=string+'<div title="'+title1[i]+'" class="class3e"'+inred(mEvent.T1x2[jj[i]])+'onclick="lineclick(this,'+mEvent.Live+');">';
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string=string+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'">';
else string=string+'<div id="'+line+'">';
string=string+'</div><div class="class4e">'+mEvent.T1x2[jj[i]]+'</div></div>';
}

}

else string=string+'<div class="class5e"></div>';
}
string=string+'</div>';

string=string+'<div class="Totale">';
for(i=1;i>-1;i--){
if(mEvent.total2[i].length>j)
{if(mEvent.State==2)
string=string+'<div class="tot1e2">'+
'<div class="for3e">'+bm[i]+'</div>'+
'<div class="for2e">'+mEvent.total1[j].split("<br />")[0]+'</div>'+
'<div class="for4e2">'+mEvent.total2[i][j]+'</div></div>'
else 
{
temp=mEvent.total2[i][j].split("#");
line=temp[1].replace("<br />","V")+temp[2];
string=string+'<div title="'+title3[i]+'"class="tot1e"'+inred(mEvent.total2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">';
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string=string+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'">';
else string=string+'<div id="'+line+'">'
string=string+'</div>'+
'<div class="for3e">'+bm[i]+'</div>'+
'<div class="for2e">'+mEvent.total1[j].split("<br />")[0]+'</div>'+
'<div class="for4e">'+mEvent.total2[i][j]+'</div></div>';
}

}
 else 
string=string+'<div class="tot5e"></div>';}
string=string+'</div>';


if((mEvent.CountAdd>0)||(mEvent.Live==1)){ 
string=string+'<div class="ad1e">'+
'<div class="ad2" title="Дополнительные линии" onclick="plushash('+mEvent.ID_EVENT+')">';
//if(mEvent.Live==1) string=string+mEvent.Count;else 
string=string+"+"+mEvent.CountAdd;
string=string+'</div></div>';}

else string=string+'<div class="ad3e"></div>';


string=string+'<div class="T1x2e">';
for(i=0;i<3;i++){if(mEvent.W1x2[jj[i]].length>0)	
{if(mEvent.State==2)
string=string+'<div class="class3e2"">'+
'<div class="class4e2">'+mEvent.W1x2[jj[i]]+'</div></div>';
else
{temp=mEvent.W1x2[jj[i]].split("#");
line=temp[1].replace("<br />","V")+temp[2];
string=string+'<div title="'+title2[i]+'" class="class3e"'+inred(mEvent.W1x2[jj[i]])+'onclick="lineclick(this,'+mEvent.Live+');">';
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string=string+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'">' ;
else string=string+'<div id="'+line+'">';
string=string+'</div><div class="class4e">'+mEvent.W1x2[jj[i]]+'</div></div>';
}
}

else string=string+'<div class="class5e"></div>';
}
string=string+'</div>';


string=string+'<div class="Totale">';
for(i=0;i<2;i++){
if(mEvent.fora2[i].length>j){
if(mEvent.State==2)
string=string+'<div class="tot1e2">'+
'<div class="for3e">ф'+(i+1)+'</div>'+
'<div class="for2e">'+mEvent.fora1[j].split("<br />")[i]+'</div>'+
'<div class="for4e2">'+mEvent.fora2[i][j]+'</div></div>';
else
{
temp=mEvent.fora2[i][j].split("#");
line=temp[1].replace("<br />","V")+temp[2];
string=string+'<div title="'+title4[i]+'"class="tot1e"'+inred(mEvent.fora2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">';//+'<div class="up" id="'+line+'">';
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string=string+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'">';
else string=string+'<div id="'+line+'">';
//{string=string+ '<img src="/resources/images/up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'.png?7" style="float:left;margin-left:-6px;margin-top:'+uparray[mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]-1]+'px;"/>';}

string=string+'</div><div class="for3e">ф'+(i+1)+'</div>'+
'<div class="for2e">'+mEvent.fora1[j].split("<br />")[i]+'</div>'+
'<div class="for4e">'+mEvent.fora2[i][j]+'</div></div>';
}
}else
string=string+'<div class="tot5e"></div>';
}
string=string+'</div>';



if(mEvent.ID_RADAR>0&&(mEvent.ID_EVENT<1000000000||mEvent.Live==1))
string=string+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" style="margin-top:6px;" title="Статистика"></div></a>';
else if(mEvent.ID_SPORT==110)
string=string+'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" style="margin-top:6px;" title="Статистика"></div></a>'; else string=string+'<div class="ad5" ></div>';
string=string+'<div class="ad6" style="margin-top:6px;" title="Избранное" onclick="starclick('+mEvent.ID_EVENT+')">'+
'<div class="ad7'+(mEvent.fav+1)+'"></div></div>';
string=string+'</div>';
string=string+'</div>';
return string;
}



function RapidDraw4(mEvent){
if(mEvent.Title.length==0) DrawEvent(mEvent,2);		
var temp=new Array();
var u=0;
var i=0;
var j=0;
var ww=new Array(0,2,1);
var score="";
var string4="";
var score2=new Array();
var line="";
if(mEvent.Live==1){
if((mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20)){score2=mEvent.SETSCORES.split(" - ");score=score2[score2.length-1];if(score.split(":").length<2) score="0:0";} else score=mEvent.SCORE;}
var uc=mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2;
if(uc.length>38) uc=uc.substr(0,38-2)+"...";
if(mEvent.Live==1)
string4=string4+'<input type="image" src="/resources/images/live.png?7" style="float:left;margin-top:5px;margin-left:5px;cursor:default;"/><div class="rst5">'+mEvent.Time_Event+'</div>';
else string4=string4+'<div class="rst4">'+mEvent.Data.split("<br />")[0]+'</div><div class="rst6">'+mEvent.Data.split("<br />")[1]+'</div>';
if(mEvent.Live==1){
string4=string4+'<div style="width:55px;float:left;">'+
'<div style="width:7px;height:7px;float:left;margin-top:9px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:left;margin-left:-2px;display:'+display3[mEvent.PODACHA+1]+';"/></div>'+
'<div style="font-size:12px;float:left;margin-top:8px;color:#E97323;font-weight:bold;width:25px;margin-left:-7px;text-align:right;">'+score.split(":")[0]+':</div>'+
'<div style="font-size:12px;float:left;margin-top:8px;color:#E97323;font-weight:bold;width:12px;text-align:left;">'+score.split(":")[1]+'</div>'+
'<div style="width:7px;height:7px;float:left;margin-top:9px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:left;display:'+display3[mEvent.PODACHA]+';"/></div></div>'+
'<div class="str4'+mEvent.Live+'" onclick="ChampionClick2('+mEvent.ID_CHAMPIONSHIP+',1);" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'">'+uc+'</div>';}
else{
string4=string4+'<div style="width:55px;height:7px;float:left;"></div><div class="str4'+mEvent.Live+'" onclick="ChampionClick2('+mEvent.ID_CHAMPIONSHIP+',1);" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'">'+uc+'</div>';
}


for(i=0;i<3;i++){
if(mEvent.State!=2){
if(mEvent.T1x2[ww[i]].length>0){
temp=mEvent.T1x2[ww[i]].split("#");
line=temp[1].replace("<br />","A")+temp[2];
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string4=string4+'<div class="class31"'+inred(mEvent.T1x2[ww[i]])+'onclick="lineclick(this,'+mEvent.Live+');">'+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'"></div><div class="class41" >'+mEvent.T1x2[ww[i]]+'</div></div>';else 
string4=string4+'<div class="class31"'+inred(mEvent.T1x2[ww[i]])+'onclick="lineclick(this,'+mEvent.Live+');"><div id="'+line+'"></div><div class="class41" >'+mEvent.T1x2[ww[i]]+'</div></div>';
}
else string4=string4+'<div class="class311"></div>';}else
{
if(mEvent.T1x2[ww[i]].length>0)
string4=string4+'<div class="class31e"><div class="class41e" >'+mEvent.T1x2[ww[i]]+'</div></div>';
else string4=string4+'<div class="class311"></div>';	
}

}


return '<div style="width:10px;height:1px;float:left;"></div>'+string4;
}








function RapidDraw3(mEvent){
if(iphone==1) return;	
var i=0;
var j=0;
var jj=new Array(0,2,1);
var temp=new Array();
var string3="";
var score="";
var temp4=new Array();
var style="";
var ul=24;
if(mEvent.ID_SPORT==34||mEvent.ID_SPORT==19||mEvent.ID_SPORT==23||mEvent.ID_SPORT==22||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==5||mEvent.ID_SPORT==3||mEvent.ID_SPORT==16||mEvent.ID_SPORT==29||mEvent.ID_SPORT==6||mEvent.ID_SPORT==12) {style='2';ul=23;}
if(mEvent.ID_SPORT==2) {style='3';ul=22;}


if(mEvent.ID_SPORT==5){
score=splitscore(mEvent.SETSCORES,mEvent.DURATION,mEvent.Time_Event,mEvent.BEISBOL);
//temp4=mEvent.SETSCORES.split(" - "); if(temp4.length==0) {temp4[0]="";temp4[1]="";}
//score=temp4[temp4.length-1];
}else score=mEvent.SCORE;



var podacha1="";
var podacha2="";


var u=mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2;
//if(u.length>ul) u=u.substr(0,ul-2)+"...";

if(mEvent.ID_SPORT==5||mEvent.ID_SPORT==34||mEvent.ID_SPORT==19||mEvent.ID_SPORT==23||mEvent.ID_SPORT==22||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20)

if(mEvent.PODACHA==100) podacha1='<div style="float:left;width:0px;height:0px;position:relative;z-index:2;"><img src="/resources/images/nowpod.png?7" style=float:left;margin-left:1px;margin-top:6px;"/></div>';
if(mEvent.PODACHA==200) podacha2='<div style="float:right;width:0px;height:0px;position:relative;z-index:2;"><img src="/resources/images/nowpod.png?7" style=float:right;margin-right:12px;margin-top:6px;"/></div>';

string3='<div class="expresslivenow'+style+'">'+podacha1+'<div class="express0livenow'+style+'"></div><div class="express00livenow'+style+'">'+score+'</div>'+podacha2+'<div class="express5livenow'+style+'">'+mEvent.Time_Event+'</div></div><div class="express1livenow'+style+'" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'" onclick="plushash('+mEvent.ID_EVENT+');">'+u+'</div><img id="now'+mEvent.ID_EVENT+'" style="float:left;margin-top:10px;cursor:pointer;" onclick="starclick('+mEvent.ID_EVENT+')" src="/resources/images/star'+(mEvent.fav+1)+'.png?7"/><div class="T1x2l'+mEvent.TIP_TABLE+'">';

for(i=0;i<3;i++){
if(mEvent.T1x2[jj[i]].length>0)
{
if(mEvent.State==2)
string3=string3+'<div class="class3l2"">'+
'<div class="class4l2">'+mEvent.T1x2[jj[i]]+'</div></div>';

else 
{
temp=mEvent.T1x2[jj[i]].split("#");
line=temp[1].replace("<br />","W")+temp[2];
string3=string3+'<div class="class3l"'+inred(mEvent.T1x2[jj[i]])+'onclick="lineclick(this,'+mEvent.Live+');_gaq.push([&quot;_trackPageview&quot;,&quot;virtual/livenow&quot;]);">';//+'<div class="up" id="'+line+'">';
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string3=string3+'<div class="upw'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+' " id="'+line+'">';
else string3=string3+'<div id="'+line+'">';
//{string3=string3+'<img src="/resources/images/up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'.png?7" style="float:left;margin-left:-6px;margin-top:'+uparrayw[mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]-1]+'px;"/>';}
string3=string3+'</div><div class="class4l">'+mEvent.T1x2[jj[i]]+'</div></div>';
}

}

else string3=string3+'<div class="class5l"></div>';
}
string3=string3+'</div>';
mEvent.string3=string3;
return string3;
}




function RapidDraw(mEvent){
if(mEvent.Title.length==0) DrawEvent(mEvent,1);	

var tvstring="";
var temp=new Array();
var string="";
var string2="";
var string3="";
var string4="";
var color1="000000";
var color2="000000";
var i=0;
var j=0;
var u=0;
var h=0;
var lh=15;
var mt=10;

if(mEvent.ID_CHAMPIONSHIP==(mEvent.ID_COUNTRY+10)*10000+13){
mEvent.string='<div class="TShow"><div class="free5" style="margin-bottom:10px;margin-left:10px;"><span>'+mEvent.UCHASTNIK1+mEvent.TV+'</span><div class="shappac'+mEvent.BEISBOL+'" onclick="spetclick(this,'+mEvent.ID_EVENT+')"></div></div><div';
if(mEvent.BEISBOL<2) mEvent.string=mEvent.string+' style="display:none;"';	
mEvent.string=mEvent.string+'>';	

for(j=0;j<mEvent.mlines.length;j++) 
mEvent.string=mEvent.string+'<div style="width:228px;float:left;font-weight:bold;margin-left:20px;font-size:12px;color:#000;">'+mLines[LineId[mEvent.mlines[j]]].KOEF+'</div><div class="cell2short"'+inred(Vkoef3(mLines[LineId[mEvent.mlines[j]]].V[0])+'<br />#'+mEvent.mlines[j]+'<br />#0')+' onclick="lineclick(this,0);"><div class="plus333" style="margin-top:1px;width:259px;text-align:center;">'+Vkoef3(mLines[LineId[mEvent.mlines[j]]].V[0])+'<br />#'+mLines[LineId[mEvent.mlines[j]]].ID_LINE+'<br />#0</div></div><div style="float:left;width:100%;height:1px;"></div>';


mEvent.string=mEvent.string+'</div></div>';	
mEvent.string2=mEvent.string3=mEvent.string;
mEvent.Height=50+mEvent.mlines.length*30;
return mEvent.string;
}
	
	
	
	
if(mEvent.Live==1) RapidDraw3(mEvent);
if(euroline==0) return RapidDraw2(mEvent);	



if(mEvent.Live==1) lh=20;
if(mEvent.Live==1) mt=7;



if((mEvent.TIP_TABLE==1)||(mEvent.TIP_TABLE==4)){
while(mEvent.const1+57*j<=mEvent.Height){
if(mEvent.favorit[j]==1) color1="F47621";else color1="000000";
if(mEvent.favorit[j]==2) color2="F47621";else color2="000000";
if(j==0) h=mEvent.const1; else h=57;
string=string+'<div class="TShow" style="height:'+h+'px;">';
if(j>0) string=string+'<div class="linia1"></div><div class="class1"></div>';

string=string+'<div class="Data1" style="margin-top:'+mt+'px;line-height:'+lh+'px;">';
if(j==0)string=string+mEvent.Data+'</div>'; else string=string+'</div>';




string=string+'<div class="Title1" onclick="plushash('+mEvent.ID_EVENT+')">';
if((j==0)&&(mEvent.CARDS_R1>0)&&(mEvent.ID_SPORT==1)) string=string+'<div class="U1'+color1+'" ><span style="float:left;">'+mEvent.UCHASTNIK1+'</span><input type="image" src="/resources/images/redcard2.png?7" style="float:left;margin-left:3px;"/></div>'; else string=string+'<div class="U1'+color1+'">'+mEvent.UCHASTNIK1+'</div>';
if((j==0)&&(mEvent.CARDS_R2>0)&&(mEvent.ID_SPORT==1))string=string+'<div class="U2'+color2+'"><span style="float:left;">'+mEvent.UCHASTNIK2+'</span><input type="image" src="/resources/images/redcard2.png?7" style="float:left;margin-left:3px;"/></div>'; else string=string+'<div class="U2'+color2+'">'+mEvent.UCHASTNIK2+'</div>';

if((mEvent.TIP_TABLE==1)&&(j==0)) string=string+'<div class="N1">Ничья</div>';
string=string+'</div>';

string=string+'<div class="T1x2">';
for(i=0;i<3;i++){if((mEvent.T1x2[i].length>0)&&(j==0))	
string=string+'<div class="class3"'+inred(mEvent.T1x2[i])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="class4">'+mEvent.T1x2[i]+'</div></div>';
else string=string+'<div class="class5">'+
'<div class="class6">&nbsp;</div></div>';
}
string=string+'</div>';




string=string+'<div class="Fora">';
for(i=0;i<2;i++){
if(mEvent.fora2[i].length>j)
string=string+'<div class="for1"'+inred(mEvent.fora2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="for2">'+mEvent.fora1[j].split("<br />")[i]+'</div>'+
'<div class="for3">'+mEvent.fora2[i][j]+'</div></div>';
else
string=string+'<div class="for4">'+
'<div class="for2">&nbsp;</div>'+
'<div class="for5">&nbsp;</div></div>';
}
string=string+'</div>';


string=string+'<div class="Total">';
for(i=0;i<2;i++){
if(mEvent.total2[i].length>j)
string=string+'<div class="tot1"'+inred(mEvent.total2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="tot2">'+mEvent.total1[j].split("<br />")[0]+'</div>'+
'<div class="tot3">'+bm[i]+'</div>'+
'<div class="tot4">'+mEvent.total2[i][j]+'</div></div>'
; else 
string=string+'<div class="tot5">'+
'<div class="tot2">&nbsp;</div>'+
'<div class="tot3">&nbsp;</div>'+
'<div clas="tot6">&nbsp;</div></div>';}
string=string+'</div>';


string=string+'<div class="T1x2_">';
for(i=0;i<3;i++){if((j==0)&&(mEvent.T1x2_[i].length>0))
string=string+'<div class="class3"'+inred(mEvent.T1x2_[i])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="class4">'+mEvent.T1x2_[i]+'</div></div>';
else string=string+'<div class="class5">'+
'<div class="class6">&nbsp;</div></div>';
}
string=string+'</div>';

string=string+'<div class="Fora">';

for(i=0;i<2;i++){
if(mEvent.fora2_[i].length>j)
string=string+'<div class="for1"'+inred(mEvent.fora2_[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="for2">'+mEvent.fora1_[j].split("<br />")[i]+'</div>'+
'<div class="for3">'+mEvent.fora2_[i][j]+'</div></div>';
else
string=string+'<div class="for4">'+
'<div class="for2">&nbsp;</div>'+
'<div class="for5">&nbsp;</div></div>';
}
string=string+'</div>';


string=string+'<div class="Total">';

for(i=0;i<2;i++){
if(mEvent.total2_[i].length>j)
string=string+'<div class="tot1"'+inred(mEvent.total2_[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="tot2">'+mEvent.total1_[j].split("<br />")[0]+'</div>'+
'<div class="tot3">'+bm[i]+'</div>'+
'<div class="tot4">'+mEvent.total2_[i][j]+'</div></div>'
; else 
string=string+'<div class="tot5">'+
'<div class="tot2">&nbsp;</div>'+
'<div class="tot3">&nbsp;</div>'+
'<div class="tot6">&nbsp;</div></div>';}
string=string+'</div>';

if(j==0){
string4='<div class="Add">';
if((mEvent.CountAdd3>0)||(mEvent.Live==1)) 
string4=string4+'<div class="ad1">'+
'<div class="ad2" title="Дополнительные линии" onclick="plushash('+mEvent.ID_EVENT+')">+'+mEvent.CountAdd3+'</div></div>';
else string4=string4+'<div class="ad3"><div class="ad2"></div></div>';
if(mEvent.ID_RADAR>0&&(mEvent.ID_EVENT<1000000000||mEvent.Live==1))
string4=string4+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>';else
if(mEvent.ID_SPORT==110)
string4=string4+'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>'
else string4=string4+'<div class="ad5"></div>';
string4=string4+'<div class="ad6" title="Избранное" onclick="starclick('+mEvent.ID_EVENT+')">'+
'<div class="ad7'+(mEvent.fav+1)+'"></div></div>';

if(mEvent.clock_stopped>0){
string4=string4+'<div onclick="plushash('+mEvent.ID_EVENT+')" class="ix'+(12-mEvent.Live)+'" title="трансляция на сайте" style="margin-right:0px;"></div>';
}else 
if(mEvent.TV.length>0){
temp=mEvent.TV.split(",");
tvstring="";
for(u=0;u<temp.length;u++) tvstring=tvstring+mTV[parseInt(temp[u])]+" \n";
string4=string4+'<div class="ad8" onmouseover="this.style.color=&quot;#FFFFFF&quot;;this.style.backgroundColor=&quot;#F47621&quot;;" onmouseout="this.style.color=&quot;#F47621&quot;;this.style.backgroundColor=&quot;#3B3B3B&quot;;"><div class="ad2" title="'+tvstring+'">ТВ</div></div>';}
else string4=string4+'<div class="ad9"><div class="ad2"></div></div>'


string4=string4+'</div>';
string=string+string4;

}

string=string+'</div>';

j++;

}} 


else{
while(mEvent.const1+57*j<=mEvent.Height){
if(mEvent.favorit[j]==1) color1="F47621";else color1="000000";
if(mEvent.favorit[j]==2) color2="F47621";else color2="000000";
if(j==0) h=mEvent.const1; else h=57;


string=string+'<div class="TShow" style="height:'+h+'px;">';
if(j>0) string=string+'<div class="linia2"></div><div class="class2"></div>';

if((j==0)&&((mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==34)||(mEvent.ID_SPORT==19)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20))&&(mEvent.Live==1)&&(mEvent.PODACHA>0))
string=string+'<div style="position:relative;float:left;width:0px;height:0px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:none;position:absloute;margin-top:45px;margin-left:'+podacha2[mEvent.PODACHA]+'px;"/></div>';

if((j==0)&&(mEvent.ID_SPORT==3)&&(mEvent.Live==1)&&(mEvent.PODACHA>0))
string=string+'<div style="position:relative;float:left;width:0px;height:0px;"><input type="image" src="/resources/images/tennbalon3.png?7" style="float:none;position:absloute;margin-top:42px;margin-left:'+podacha2[mEvent.PODACHA]+'px;"/></div>';


string=string+'<div class="Data2" style="margin-top:'+mt+'px;line-height:'+lh+'px;">';
if(j==0)string=string+mEvent.Data+'</div>'; else string=string+'</div>';
string=string+'<div class="Title2">'+
'<div class="U3'+color1+'">'+mEvent.UCHASTNIK1+'</div>'+
'<div class="U4'+color2+'">'+mEvent.UCHASTNIK2+'</div>';
if((mEvent.TIP_TABLE==3)&&(j==0)) string=string+'<div class="N2">Ничья</div>';
string=string+'</div>';

string=string+'<div class="WT1x2">';
for(i=0;i<3;i++){if((mEvent.T1x2[i].length>0)&&(j==0))	
string=string+'<div class="class33"'+inred(mEvent.T1x2[i])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="class44">'+mEvent.T1x2[i]+'</div></div>';
else string=string+'<div class="class55">'+
'<div class="class66">&nbsp;</div></div>';
}
string=string+'</div>';

string=string+'<div class="Fora2">';

for(i=0;i<2;i++){
if(mEvent.fora2[i].length>j)
string=string+'<div class="for11"'+inred(mEvent.fora2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="for22">'+mEvent.fora1[j].split("<br />")[i]+'</div>'+
'<div class="for33">'+mEvent.fora2[i][j]+'</div></div>';
else
string=string+'<div class="for44">'+
'<div class="for22">&nbsp;</div>'+
'<div class="for55">&nbsp;</div></div>';
}
string=string+'</div>';


string=string+'<div class="Total2">';
for(i=0;i<2;i++){
if(mEvent.total2[i].length>j)
string=string+'<div class="tot11"'+inred(mEvent.total2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="tot22">'+mEvent.total1[j].split("<br />")[0]+'</div>'+
'<div class="tot33">'+bm[i]+'</div>'+
'<div class="tot44">'+mEvent.total2[i][j]+'</div></div>'
; else 
string=string+'<div class="tot55">'+
'<div class="tot22">&nbsp;</div>'+
'<div class="tot33">&nbsp;</div>'+
'<div class="tot66">&nbsp;</div></div>';}
string=string+'</div>';

if(j==0){
string=string+'<div class="Add2">';
if((mEvent.CountAdd3>0)||(mEvent.Live==1)) 
string=string+'<div class="ad1">'+
'<div class="ad2" title="Дополнительные линии" onclick="plushash('+mEvent.ID_EVENT+')">+'+mEvent.CountAdd3+'</div></div>';
else string=string+'<div class="ad3"><div class="ad2"></div></div>';
if(mEvent.ID_RADAR>0&&(mEvent.ID_EVENT<1000000000||mEvent.Live==1))
string=string+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>';
else if(mEvent.ID_SPORT==110)
string=string+'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>';
else string=string+'<div class="ad5"></div>';
string=string+'<div class="ad6" title="Добавить в избранное" onclick="starclick('+mEvent.ID_EVENT+')">'+
'<div class="ad7'+(mEvent.fav+1)+'"></div></div>';



if(mEvent.clock_stopped>0){
string=string+'<div onclick="plushash('+mEvent.ID_EVENT+')" class="ix'+(12-mEvent.Live)+'" title="трансляция на сайте" style="margin-right:0px;"></div>';
}else 
if(mEvent.TV.length>0){
temp=mEvent.TV.split(",");
tvstring="";
for(u=0;u<temp.length;u++) tvstring=tvstring+mTV[parseInt(temp[u])]+" \n";
string=string+'<div class="ad8" onmouseover="this.style.color=&quot;#FFFFFF&quot;;this.style.backgroundColor=&quot;#F47621&quot;;" onmouseout="this.style.color=&quot;#F47621&quot;;this.style.backgroundColor=&quot;#3B3B3B&quot;;"><div class="ad2" title="'+tvstring+'">ТВ</div></div>';}
else string=string+'<div class="ad9"><div class="ad2"></div></div>'




string=string+'</div>';
}

string=string+'</div>';



if(j==0) h=mEvent.const1; else h=57;
string2=string2+'<div class="TShow" style="height:'+h+'px;">';
if(j>0) string2=string2+'<div class="linia1"></div><div class="class1"></div>';

if((j==0)&&((mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==34)||(mEvent.ID_SPORT==19)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==3)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20))&&(mEvent.Live==1)&&(mEvent.PODACHA>0))
string2=string2+'<div style="position:relative;float:left;width:0px;height:0px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:none;position:absolute;margin-top:45px;margin-left:'+podacha[mEvent.PODACHA]+'px;"/></div>';

if((j==0)&&(mEvent.ID_SPORT==3)&&(mEvent.Live==1)&&(mEvent.PODACHA>0))
string2=string2+'<div style="position:relative;float:left;width:0px;height:0px;"><input type="image" src="/resources/images/tennbalon3.png?7" style="float:none;position:absolute;margin-top:42px;margin-left:'+podacha[mEvent.PODACHA]+'px;"/></div>';


string2=string2+'<div class="Data1" style="margin-top:'+mt+'px;line-height:'+lh+'px;">';
if(j==0)string2=string2+mEvent.Data+'</div>'; else string2=string2+'</div>';
string2=string2+'<div class="Title1" onclick="plushash('+mEvent.ID_EVENT+')">'+
'<div class="U1'+color1+'">'+mEvent.UCHASTNIK1+'</div>'+
'<div class="U2'+color2+'">'+mEvent.UCHASTNIK2+'</div>';
if((mEvent.TIP_TABLE==3)&&(j==0)) string2=string2+'<div class="N1">Ничья</div>';
string2=string2+'</div>';

string2=string2+'<div class="T1x2">';
for(i=0;i<3;i++){if((mEvent.T1x2[i].length>0)&&(j==0))	
string2=string2+'<div class="class3"'+inred(mEvent.T1x2[i])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="class4">'+mEvent.T1x2[i]+'</div></div>';
else string2=string2+'<div class="class5">'+
'<div class="class6">&nbsp;</div></div>';
}
string2=string2+'</div>';

string2=string2+'<div class="Fora">';

for(i=0;i<2;i++){
if(mEvent.fora2[i].length>j)
string2=string2+'<div class="for1"'+inred(mEvent.fora2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="for2">'+mEvent.fora1[j].split("<br />")[i]+'</div>'+
'<div class="for3">'+mEvent.fora2[i][j]+'</div></div>';
else
string2=string2+'<div class="for4">'+
'<div class="for2">&nbsp;</div>'+
'<div class="for5">&nbsp;</div></div>';
}
string2=string2+'</div>';


string2=string2+'<div class="Total">';
for(i=0;i<2;i++){
if(mEvent.total2[i].length>j)
string2=string2+'<div class="tot1"'+inred(mEvent.total2[i][j])+'onclick="lineclick(this,'+mEvent.Live+');">'+
'<div class="tot2">'+mEvent.total1[j].split("<br />")[0]+'</div>'+
'<div class="tot3">'+bm[i]+'</div>'+
'<div class="tot4">'+mEvent.total2[i][j]+'</div></div>'
; else 
string2=string2+'<div class="tot5">'+
'<div class="tot2">&nbsp;</div>'+
'<div class="tot3">&nbsp;</div>'+
'<div class="tot6">&nbsp;</div></div>';}
string2=string2+'</div>';


if(j==0){
string2=string2+'<div class="Add3">';
if((mEvent.CountAdd3>0)||(mEvent.Live==1)) 
string2=string2+'<div class="ad1">'+
'<div class="ad2" title="Дополнительные линии" onclick="plushash('+mEvent.ID_EVENT+')">+'+mEvent.CountAdd3+'</div></div>';
else string2=string2+'<div class="ad3"><div class="ad2"></div></div>';
if(mEvent.ID_RADAR>0&&(mEvent.ID_EVENT<1000000000||mEvent.Live==1))
string2=string2+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>';else
if(mEvent.ID_SPORT==110)
string2=string2+'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" title="Статистика"></div></a>';
else string2=string2+'<div class="ad5"></div>';
string2=string2+'<div class="ad6" title="Добавить в избранное" onclick="starclick('+mEvent.ID_EVENT+')">'+
'<div class="ad7'+(mEvent.fav+1)+'"></div></div>';

if(mEvent.clock_stopped>0){
string2=string2+'<div onclick="plushash('+mEvent.ID_EVENT+')" class="ix'+(12-mEvent.Live)+'" title="трансляция на сайте" style="margin-right:0px;"></div>';
}else 
if(mEvent.TV.length>0){
temp=mEvent.TV.split(",");
tvstring="";
for(u=0;u<temp.length;u++) tvstring=tvstring+mTV[parseInt(temp[u])]+" \n";
string2=string2+'<div class="ad8" onmouseover="this.style.color=&quot;#FFFFFF&quot;;this.style.backgroundColor=&quot;#F47621&quot;;" onmouseout="this.style.color=&quot;#F47621&quot;;this.style.backgroundColor=&quot;#3B3B3B&quot;;"><div class="ad2" title="'+tvstring+'">ТВ</div></div>';}
else string2=string2+'<div class="ad9"><div class="ad2"></div></div>'
string2=string2+'</div>';
}


string2=string2+'</div>';


j++;}	
}
mEvent.string2=string2;

return string;

}

    oup=0;
    nodata=0;
    hashstate=0;
	hashstateb=0;


//var timervv=0;
function decode(mes,step,step2) {
	console.log('STEEEEP',step);
    laststep = step;
    if(step==64)
console.log("step="+step);
//if(step==17) timervv=new Date().getTime();
//if(step>87) return;
//return;	
//timerusstep=step;
//timerus1();
//console.log(mes);


    var i=0;
    var j=0;    
    var k=0;    
    var l=0;
    var u=0;
    var m=0;
    var p=0;
	var d1=0;
	var d2=0;
	var d3=0;
    var dif=0;
    var ss=0;
    var N=0;
    var N2=0;
    var is_region=-1;
    var col=new Array();
    var count=0;
    var temp4="";
    var temp5="";
    var temp6="";
    var sd=new Date();
    var sd1=new Date();
    var stream="";
    var temp=0;
    var temp2=0;
    var LastChampionship=0;
    var LastEvents=0;
    var inner="";
    var inner2="";


    seek=0;
			
    switch (step) {
  
        case 51: {
			prinarray[0]=new Array();
            stream=decode64(mes);
            i=0; while(stream.length>seek){
            prinarray[0][i]=readUnsignedInt(stream);
			i++;
			}
			if(ttt>0) drawpr(0);break;
        }

        case 19: {
            Login.value="логин";
            Password.value="пароль";
            Password.type="text";
            Open4[0].value="";
            Open4[1].value="";
            userpass="";
            userlogin="";
					
            if(log2==1) showWarning2(war13);
            else if(log2==2) {
			id_("OPWAR").style.fontWeight="bold";
            id_("OPWAR").style.color="#DD0000";
            id_("OPWAR").innerHTML="Неправильный логин или пароль";	
			} else showWarning(war13,"OK","",0,null);
            
			if(log2!=2)	log2=0;
			log1=0;
			deleteCookie("prl", "/", ""); deleteCookie("lgn", "/", "");
			
			
if((window.location.href.indexOf("istoria")>-1)||(window.location.href.indexOf("plata")>-1)||(window.location.href.indexOf("mydoc")>-1)||(window.location.href.indexOf("scan")>-1)||(window.location.href.indexOf("personal")>-1)||(window.location.href.indexOf("mybonus")>-1)) showWarningReg();
			
			//Cookie.del('__userdata');
            break;
        }

        
		case 12: {

            stream=decode64(mes);
    		temp5=readUTF(stream);
			temp6=readUTF(stream);

			
            Login.value="логин";
            Password.value="пароль";
            Password.type="text";

			if(log2==1&&(id_("CHECKLOGIN2").checked==true||id_("CHECKLOGIN2").checked=="checked"))
			{setCookie("prl",userpass, expire, "/", "",secure); setCookie("lgn",userlogin, expire, "/", "",secure);}
			if(log2==2&&(id_("CHECKLOGIN3").checked==true||id_("CHECKLOGIN3").checked=="checked"))
			{setCookie("prl",userpass, expire, "/", "",secure); setCookie("lgn",userlogin, expire, "/", "",secure);}

			if(log2==0&&(id_("CHECKLOGIN").checked==true||id_("CHECKLOGIN").checked=="checked"))
			{setCookie("prl",userpass, expire, "/", "",secure); setCookie("lgn",userlogin, expire, "/", "",secure);}
			
			if(log2==2)	CloseWarning();
			log2=0;
			log1=0;
			
			Open4[0].value="";
            Open4[1].value="";



            mClient.DATE_STAVCA.splice(0);
            mClient.DATE_STAVCA_STATUS.splice(0);
            removeAll(IstoriaBoxData);

            mClient.F=readUTF(stream);
            mClient.I=readUTF(stream);
            mClient.O=readUTF(stream);
            mClient.email=readUTF(stream);
            k=readUnsignedByte(stream);
            bonusnew=readUnsignedInt(stream);
            bontime=readUnsignedInt(stream);
			if(bonusnew>10000) {bonusnew=bonusnew-10000; bonusnewindex=1;}
            else if(bonusnew>0) bonusnewindex=2;
			


            mClient.valuta=readUnsignedByte(stream);
			
			
			
			if(mClient.valuta==5) demo=1; else demo=0;
			
			if(summainputDay.value=="300"){
			if(mClient.valuta==2)summainputDay.value="10";	
			if(mClient.valuta==4)summainputDay.value="10";}

			if(summainputDayLive.value=="300"){
			if(mClient.valuta==2)summainputDayLive.value="10";	
			if(mClient.valuta==4)summainputDayLive.value="10";}
            ordvalut(); 
			checkrapid.checked=false;
             
			
            mClient.minim=readUnsignedInt(stream)/100;
            mClient.maxexpress=readUnsignedInt(stream)/100;
			//console.log("mClient.maxexpress="+mClient.maxexpress);
			mClient.kurs=readDouble(stream);
            mClient.pay=readDouble(stream);
            mClient.relogin=readUnsignedByte(stream);
            mClient.min=mClient.minim;//*mClient.kurs;
			mClient.min=Math.ceil(mClient.min);
            mClient.minimsistem=Math.round(100*mClient.kurs*100)/100;
            //mClient.maxexpress=mClient.maxexpress2*mClient.kurs;
            //
			ntvlogin=readUnsignedByte(stream);
			if(demo==1) ntvlogin=2;
			if(authstate!=null){
			if(ntvcombo.length>0){for(i=0;i<ntvcombo.length;i++){ntvcombo[i].top_.splice(0);ntvcombo[i].top.splice(0);}
            if(window.location.href.indexOf("ntvpl")>-1) ntvchange();}
			if(ntvlogin>0) hidentvreg(ntvlogin);
			}

			readUnsignedInt(stream);
			id_("novval").innerHTML=id_("novval2").innerHTML=id_("novval3").innerHTML=id_("novval4").innerHTML=mClient.Val3[mClient.valuta-1];

            if(authstate!=null){
			id_("bonvalut1").src="/resources/images/bonus200024n"+bonvalut[mClient.valuta-1]+".jpg";
				
            for(i=0;i<Minpop.length;i++){
			if(i==14) Minpop[i].innerHTML=round(Math.round(500*mClient.kurs))+" "+mClient.Val[mClient.valuta-1];else	
			Minpop[i].innerHTML=round(Math.round(300*mClient.kurs))+" "+mClient.Val[mClient.valuta-1];}
            
			for(i=0;i<Minpop2.length;i++){
			if(i==0){
			
			Minpop2[i].innerHTML=Math.round((500-(Reg29[0].selectedIndex-1)*1000)*mClient.kurs)+" "+mClient.Val[mClient.valuta-1];}
			else Minpop2[i].innerHTML=round(Math.round(300*mClient.kurs))+" "+mClient.Val[mClient.valuta-1];}}
             
			for(i=0;i<cs_("msnt").length;i++) cs_("msnt")[i].innerHTML="Максимальная сумма выплаты за 1 операцию "+zeroadd(maxv[mClient.valuta][i+1])+" "+mClient.Val2[mClient.valuta-1];
            for(i=0;i<cs_("msnt1").length;i++) cs_("msnt1")[i].innerHTML="&nbsp;"+zeroadd(maxv[mClient.valuta][i+1])+" "+mClient.Val[mClient.valuta-1]+" за одну операцию";
            i=0;
            var newOpt=null;
            while(stream.length>seek){
            mClient.DATE_STAVCA[i]=new Date();
            mClient.DATE_STAVCA_STATUS[i]=0;
            mClient.DATE_STAVCA[i].setTime(readUnsignedInt(stream)*1000);
            i++;}
			
            j=mClient.DATE_STAVCA.length-1;
            for(i=0;i<mClient.DATE_STAVCA.length;i++)
            IstoriaBoxData.options.add(new Option(zeroadd(mClient.DATE_STAVCA[j-i].getDate())+"."+zeroadd(mClient.DATE_STAVCA[j-i].getMonth()+1)+"/"+mClient.DATE_STAVCA[j-i].getFullYear(),
            mClient.DATE_STAVCA[j-i].getTime())); 

            			   
            webSocket.send("balance");
            webSocket.send("history");
            sendindex=0;
            sendarray.splice(0);
            writeInt(0);
            sendarray[sendindex]=0;
            webSocket.send(EncodeBase64_2(sendarray));
            loginstate=1;
						
			id_("Summ62").style.display=id_("Summ63").style.display=id_("MAXIMUMDAY").style.display=id_("MAXIMUMLIVE").style.display="";
			
			//if(cookvirt!=1){cookvirt=1;setCookie("cookvirt",cookvirt, expire, "/", "",secure);}
			
			if(demo==0) {if(echip.length==0)webSocket.send("GET_FAVTEAM");webSocket.send("clientinfo");}
            //webSocket.send("allkassa");
									
			if(window.location.href.indexOf("payment")>-1) {webSocket.send("get_credit_cards"); crdcrd=1;
			webSocket.send("get_transactionid");pcrdcrd=1;
			 }
			if(window.location.href.indexOf("registration")>-1) try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};
			if(window.location.href.indexOf("demoreg")>-1) try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};
						
            //id_("opsum").innerHTML=
			сuponsumma.innerHTML=сuponsummaDay.innerHTML=сuponsummaDayLive.innerHTML="Сумма&nbsp;"+mClient.Val[mClient.valuta-1];
			
			if(demo==0)
            {for(i=0;i<Reg18.length;i++) Reg18[i].innerHTML=mClient.Val[mClient.valuta-1];
            for(i=0;i<Reg28.length;i++) Reg28[i].innerHTML=mClient.Val[mClient.valuta-1];
            
			;}    
            
            
            //id_("popolniti").onclick=cuponclick;

            
            //Cupon.style.display="";Opencupon.style.display="none";
            //id_("OPLOGIN").style.display="none"; id_("OPSCHET").style.display=""
            cuponbalance.parentNode.style.display="";
			Cupon.childNodes[0].src="/resources/images/cupon333.png?7";
            expressflag=lastexpressflag;
            if(expressflag==0) ordinarclick();
            if(expressflag==1) expressclick();
            if(expressflag==2) systemclick();

            Msh2.style.cursor="default";
            Msh2.style.textDecoration="none";
			//showWarningNtv();
            
			 if(iphone==0){
			 loyalxlop=1;	 
             if(xlopp[2]==1) xlopus2(2,0);
			 if(xlopp[3]==1) xlopus2(3,0);}
			 			

            if(demo==1) {id_("OPBUTTON5").parentNode.style.display="";
            //Cuponslide.previousSibling.style.backgroundColor="#FFFFFF";
            //Cuponslide.previousSibling.style.borderTop="0px";
            ;}else {id_("OPBUTTON5").parentNode.style.display="none";
            //Cuponslide.previousSibling.style.backgroundColor="#EBEBEB";
            //Cuponslide.previousSibling.style.borderTop="1px solid #C1C1C1";

            }


// if(href.indexOf("obratnaya-svyaz")>-1&&Reg10[3]) Reg10[3].value=mClient.email;


var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
if(page2.indexOf("mydoc")>-1||page2.indexOf("scan")>-1||page2.indexOf("istoria")>-1||page2.indexOf("mybonus")>-1||page2.indexOf("plata")>-1||page2.indexOf("personal")>-1){CloseWarning(); hashChanged(page2.replace("auth","").split("/").join(""));}

if(page2=="/"||page2=="") loadPage("/");



            if(demo==1) bontime=0;
			//setMaxExpress(1);setMaxExpress(2);setMaxExpress(3);
			
			if(authstate!=null)	bonuscall(); else if(bontime>0){authstate2="bonus";loadauth();}	
		    plusdemo();			
	
			for(i=0;i<mExpress.length;i++) id_("mexpress"+mExpress[i].id_event).childNodes[7].childNodes[5].style.display="";
			
			
			
			
			_gaq.push(['_setCustomVar',1,'Login',temp5,2]);
			_gaq.push(['_setCustomVar',2,'Gamble',temp6,2]);
									
			break;    
        }
        
        case 20: {
			
            if(loginstate==0) break;
			stream=decode64(mes);
			rH[clientindex]=new Array();
			mClient.DATE_STAVCA_STATUS[clientindex]=1;
            readUnsignedInt(stream);
			i=0;
            while(stream.length>seek){
            rH[clientindex][i]=new THistory(1);
            rH[clientindex][i].ACTION=readUnsignedByte(stream);
            rH[clientindex][i].STATE=readUnsignedByte(stream);
			rH[clientindex][i].HOLD=readUnsignedByte(stream);
            rH[clientindex][i].SUMMA_V=readDouble(stream);
            rH[clientindex][i].ID_STAVKA=readUnsignedInt(stream);
            rH[clientindex][i].DATE_STAVKI.setTime(readUnsignedInt(stream)*1000);
            rH[clientindex][i].BONUS=Math.round(readDouble(stream)*100)/100;;
            rH[clientindex][i].DATE_STAVKI2.setTime(rH[clientindex][i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
			
			
            rH[clientindex][i].ORD_EXP_SYS=readUnsignedByte(stream);
				
			rH[clientindex][i].KOL=readUnsignedByte(stream);

            rH[clientindex][i].SYS_VAL=readUnsignedByte(stream);
            rH[clientindex][i].SUMM_STAVKI=readDouble(stream);
            rH[clientindex][i].RETURN=readDouble(stream);
            for(j=0;j<rH[clientindex][i].KOL;j++){
            rH[clientindex][i].mHl[j]=new THistoryline(1);
            rH[clientindex][i].mHl[j].ID=readUnsignedInt(stream);
			rH[clientindex][i].mHl[j].LIVE=readUnsignedByte(stream);
			
            rH[clientindex][i].mHl[j].ODD_NOMER=readUnsignedByte(stream);
            rH[clientindex][i].mHl[j].FAVORIT=readUnsignedByte(stream);
            rH[clientindex][i].mHl[j].ID_TIP_RADAR=readUnsignedInt(stream);
            rH[clientindex][i].mHl[j].DATE_EVENT.setTime(readUnsignedInt(stream)*1000);
            rH[clientindex][i].mHl[j].DATE_EVENT2.setTime(rH[clientindex][i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            rH[clientindex][i].mHl[j].ID_SPORT=readUnsignedInt(stream);
            rH[clientindex][i].mHl[j].KOEF_STAVKI=readDouble(stream);
            rH[clientindex][i].KOEF_STAVKI=rH[clientindex][i].KOEF_STAVKI*rH[clientindex][i].mHl[j].KOEF_STAVKI;
            rH[clientindex][i].mHl[j].DOP_KOEF=readUTF(stream);
            rH[clientindex][i].mHl[j].SCORE_ST=readUTF(stream);
            rH[clientindex][i].mHl[j].U1=readUTF(stream);
		    rH[clientindex][i].mHl[j].U2=readUTF(stream);
            
            rH[clientindex][i].mHl[j].CHAMP=readUTF(stream);
			rH[clientindex][i].mHl[j].KOEF_WIN=readDouble(stream);
            rH[clientindex][i].mHl[j].CLEAR_SCORE=readUTF(stream);
            rH[clientindex][i].mHl[j].STATE=readUnsignedByte(stream);
            rH[clientindex][i].mHl[j].ID_RADAR=readUnsignedInt(stream);
			rH[clientindex][i].mHl[j].ID_COUNTRY=readUnsignedInt(stream);
            rH[clientindex][i].mHl[j].ID_EVENT=readUnsignedInt(stream);
			
					
			if(rH[clientindex][i].mHl[j].ID_EVENT<1000000000&&rH[clientindex][i].mHl[j].LIVE==0) rH[clientindex][i].mHl[j].ID_RADAR=rH[clientindex][i].mHl[j].ID_EVENT;
			
		
			
            rH[clientindex][i].mHl[j].future_live=readUnsignedByte(stream);
            ;}


            setBonus(rH[clientindex][i]);
		
            i++;}
			
            extractIstoria();
			//console.log("statusr="+statusr);
			
			
			
			//--------------------------------------------------------------------------------------------
			/*
            if(statusr==1) {statusr==2; if(statuscupon==0)lineclick1(rTextField2,1);else recalculall(0);}
			if(rclientindex3>-1){
            clientindex=rclientindex3;rclientindex3=-1;
            statusr=1;
            mClient.DATE_STAVCA_STATUS[clientindex]=1;
            webSocket.send("history");
            sendindex=0;
            sendarray.splice(0);
            writeInt(mClient.DATE_STAVCA[clientindex].getTime()/1000);
            sendarray[sendindex]=0;
            webSocket.send(EncodeBase64_2(sendarray));
            }*/
			//--------------------------------------------------------------------------------------------
			
			
			
			

            break;
        }
        
        case 10: {
            if(loginstate==0) break;
            stream=decode64(mes);
            readUnsignedInt(stream);
            i=0;
            k=0;
            u=0;
            m=0;
            p=0;
            ss=0;
			mH.splice(0);
            nH.splice(0);
            anH.splice(0);

            while(stream.length>seek){
            mH[i]=new THistory(0);
            aH[m]=new THistory(1);
            aH[m].ACTION=mH[i].ACTION=readUnsignedByte(stream);
            aH[m].STATE=mH[i].STATE=readUnsignedByte(stream);
            aH[m].HOLD=mH[i].HOLD=readUnsignedByte(stream);
			aH[m].SUMMA_V=mH[i].SUMMA_V=readDouble(stream);
            aH[m].ID_STAVKA=mH[i].ID_STAVKA=readUnsignedInt(stream);
            mH[i].DATE_STAVKI.setTime(readUnsignedInt(stream)*1000);
            aH[m].BONUS=mH[i].BONUS=Math.round(readDouble(stream)*100)/100;

            mH[i].DATE_STAVKI2.setTime(mH[i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            aH[m].DATE_STAVKI2.setTime(mH[i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            aH[m].DATE_STAVKI.setTime(mH[i].DATE_STAVKI.getTime());

            aH[m].ORD_EXP_SYS=mH[i].ORD_EXP_SYS=readUnsignedByte(stream);
            aH[m].KOL=mH[i].KOL=readUnsignedByte(stream);
            aH[m].SYS_VAL=mH[i].SYS_VAL=readUnsignedByte(stream);
            aH[m].SUMM_STAVKI=mH[i].SUMM_STAVKI=readDouble(stream);
            aH[m].RETURN=mH[i].RETURN=readDouble(stream);
            if(mH[i].ORD_EXP_SYS==1) mH[i].Subtitle="";
            if(mH[i].ORD_EXP_SYS==2) mH[i].Subtitle=express1;
            if(mH[i].ORD_EXP_SYS==3) mH[i].Subtitle=system1+" "+mH[i].SYS_VAL+" "+ system2+" "+ mH[i].KOL+" ("+Combin(mH[i].KOL,mH[i].SYS_VAL)+" "+system3+")";


mH[i].Title='<span style="float:left;width:110px;">A:'+mH[i].ID_STAVKA;
if(mH[i].HOLD==1) mH[i].Title=mH[i].Title+"&nbsp;обраб.";
if(mH[i].HOLD==2) mH[i].Title=mH[i].Title+"&nbsp;откл.";
mH[i].Title=mH[i].Title+'</span><span style="float:left; width:90px; text-align:right;">'+zeroadd(mH[i].DATE_STAVKI2.getDate())+"/"+zeroadd(mH[i].DATE_STAVKI2.getMonth()+1)+"  "+zeroadd(mH[i].DATE_STAVKI2.getHours())+":"+zeroadd(mH[i].DATE_STAVKI2.getMinutes())+'</span>';



         
                
            for(j=0;j<mH[i].KOL;j++){
            mH[i].mHl[j]=new THistoryline(0);
            aH[m].mHl[j]=new THistoryline(1);
            aH[m].mHl[j].ID=mH[i].mHl[j].ID=readUnsignedInt(stream);
            aH[m].mHl[j].LIVE=mH[i].mHl[j].LIVE=readUnsignedByte(stream);
            aH[m].mHl[j].ODD_NOMER=mH[i].mHl[j].ODD_NOMER=readUnsignedByte(stream);
            aH[m].mHl[j].FAVORIT=mH[i].mHl[j].FAVORIT=readUnsignedByte(stream);
            aH[m].mHl[j].ID_TIP_RADAR=mH[i].mHl[j].ID_TIP_RADAR=readUnsignedInt(stream);
            mH[i].mHl[j].DATE_EVENT.setTime(readUnsignedInt(stream)*1000);
            aH[m].mHl[j].DATE_EVENT2.setTime(mH[i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            aH[m].mHl[j].DATE_EVENT.setTime(mH[i].mHl[j].DATE_EVENT.getTime());
            aH[m].mHl[j].ID_SPORT=mH[i].mHl[j].ID_SPORT=readUnsignedInt(stream);
            aH[m].mHl[j].KOEF_STAVKI=mH[i].mHl[j].KOEF_STAVKI=readDouble(stream);

            aH[m].mHl[j].DOP_KOEF=mH[i].mHl[j].DOP_KOEF=readUTF(stream);
            aH[m].mHl[j].SCORE_ST=mH[i].mHl[j].SCORE_ST=readUTF(stream);
            aH[m].mHl[j].U1=mH[i].mHl[j].U1=readUTF(stream);
            aH[m].mHl[j].U2=mH[i].mHl[j].U2=readUTF(stream);
			aH[m].mHl[j].CHAMP=mH[i].mHl[j].CHAMP=readUTF(stream);
            aH[m].mHl[j].KOEF_WIN=mH[i].mHl[j].KOEF_WIN=readDouble(stream);
            aH[m].mHl[j].CLEAR_SCORE=mH[i].mHl[j].CLEAR_SCORE=readUTF(stream);
            aH[m].mHl[j].STATE=mH[i].mHl[j].STATE=readUnsignedByte(stream);
            aH[m].mHl[j].ID_RADAR=mH[i].mHl[j].ID_RADAR=readUnsignedInt(stream);
			aH[m].mHl[j].ID_COUNTRY=mH[i].mHl[j].ID_COUNTRY=readUnsignedInt(stream);
            aH[m].mHl[j].ID_EVENT=mH[i].mHl[j].ID_EVENT=readUnsignedInt(stream);
			if(aH[m].mHl[j].ID_EVENT<1000000000&&aH[m].mHl[j].LIVE==0) aH[m].mHl[j].ID_RADAR=aH[m].mHl[j].ID_EVENT;
			if(mH[i].mHl[j].ID_EVENT<1000000000&&aH[m].mHl[j].LIVE==0) mH[i].mHl[j].ID_RADAR=mH[i].mHl[j].ID_EVENT;
			aH[m].mHl[j].future_live=mH[i].mHl[j].future_live=readUnsignedByte(stream);


           
		   
           if(mH[i].mHl[j].ID_TIP_RADAR==1111116666||mH[i].mHl[j].ID_TIP_RADAR==1111116667) {
    	   aH[m].mHl[j].ID_RADAR=mH[i].mHl[j].ID_RADAR=0;	   
		   aH[m].mHl[j].ID_CHAMPIONSHIP=mH[i].mHl[j].ID_CHAMPIONSHIP=(mH[i].mHl[j].ID_COUNTRY+10)*10000+13;
		   mH[i].mHl[j].Title=mH[i].mHl[j].U2;
		   if(mH[i].mHl[j].ID_TIP_RADAR==1111116666) temp4="Специальные ставки (победитель)"; else temp4="Специальные ставки (призер)";
		   if(mH[i].mHl[j].ID_COUNTRY==4&&mH[i].mHl[j].U2.indexOf("Чемпионат Мира 2014 - Итоги выступления")>-1)
		   {if(mH[i].mHl[j].U1=="Победитель") temp4="Специальные ставки (станет чемпионом)";else temp4="Специальные ставки (стадия вылета из турнира)";}
		   
		   
		   mH[i].mHl[j].Free=temp4; //aH[m].mHl[j].hevent='<b><span style="color:#F47621;">'+temp4+'</span>';
           mH[i].mHl[j].R=mH[i].mHl[j].U1;
			
		   }
		   else{mH[i].mHl[j].Title=mH[i].mHl[j].U1+" - "+mH[i].mHl[j].U2;

            
			for(l=0;l<mTip_Line.length;l++)if((mH[i].mHl[j].ID_TIP_RADAR==mTip_Line[l].ID_TIP_RADAR)&&(mH[i].mHl[j].LIVE==mTip_Line[l].Live)) break;
            if(l==mTip_Line.length) return;

            
            if(mTip_Line[l].FREE_TEXT_R.indexOf("@n")>-1)
            temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH[i].mHl[j].DOP_KOEF.substr(2,1)).replace("@n",mH[i].mHl[j].DOP_KOEF.substr(0,1)).replace("@y",mH[i].mHl[j].DOP_KOEF.substr(6,1));
            else temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH[i].mHl[j].DOP_KOEF).replace("@h",mH[i].mHl[j].DOP_KOEF.split("/")[1]).replace("@z",mH[i].mHl[j].DOP_KOEF.split("/")[0]);
            if(mH[i].mHl[j].ID_SPORT==2) temp4=temp4.replace("@p",quarter);
            if(mH[i].mHl[j].ID_SPORT==4) temp4=temp4.replace("@p",period);
            if(mH[i].mHl[j].ID_SPORT==3) temp4=temp4.replace("@p",inning);
            if(mH[i].mHl[j].ID_SPORT==16) temp4=temp4.replace("@p",quarter);
			if(mH[i].mHl[j].ID_SPORT==19) temp4=temp4.replace("@p","фрейм");

            if((mH[i].mHl[j].ID_SPORT==5)||(mH[i].mHl[j].ID_SPORT==23)||(mH[i].mHl[j].ID_SPORT==22)||(mH[i].mHl[j].ID_SPORT==34)||(mH[i].mHl[j].ID_SPORT==31)||(mH[i].mHl[j].ID_SPORT==20)) temp4=temp4.replace("@p",sete);
			
			
			
		//	if(mH[i].mHl[j].ID_TIP_RADAR==20&&mH[i].mHl[j].Title.indexOf("Призёр")>-1) temp4=temp4.replace("Победитель","Призер(1-3 место)");
            mH[i].mHl[j].Free=temp4;
			
			
            //aH[m].mHl[j].hevent='<b><span style="color:#F47621;">'+temp4+'</span>';

            mH[i].mHl[j].R=mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1];
            if(mH[i].mHl[j].DOP_KOEF.indexOf("1@")>-1) mH[i].mHl[j].R=mH[i].mHl[j].DOP_KOEF.replace("1@","")+" ("+mH[i].mHl[j].U1+")";
            if(mH[i].mHl[j].DOP_KOEF.indexOf("2@")>-1) mH[i].mHl[j].R=mH[i].mHl[j].DOP_KOEF.replace("2@","")+" ("+mH[i].mHl[j].U2+")";
			


            if(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="1")    mH[i].mHl[j].R=mH[i].mHl[j].U1;
            if(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="2")    mH[i].mHl[j].R=mH[i].mHl[j].U2;
            if((mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="X")||(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="x")) mH[i].mHl[j].R=Nichya;
            

            if((mTip_Line[l].ROS_FAV==0)&&(mH[i].mHl[j].DOP_KOEF.length>0)&&(mTip_Line[l].FREE_TEXT_R.indexOf("@x")==-1)&&(mH[i].mHl[j].DOP_KOEF.indexOf("2@")==-1)&&(mH[i].mHl[j].DOP_KOEF.indexOf("1@")==-1)) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+totkoef(mH[i].mHl[j].DOP_KOEF);
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT==(mH[i].mHl[j].ODD_NOMER))) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+favkoef(mH[i].mHl[j].DOP_KOEF);else{
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT!=(mH[i].mHl[j].ODD_NOMER))) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+favkoef2(mH[i].mHl[j].DOP_KOEF);else
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT==0)) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+favkoef3(mH[i].mHl[j].DOP_KOEF);}
		   }
            mH[i].mHl[j].V=Vkoef2(mH[i].mHl[j].KOEF_STAVKI);  
            aH[m].KOEF_STAVKI=mH[i].KOEF_STAVKI=mH[i].KOEF_STAVKI*mH[i].mHl[j].KOEF_STAVKI;
            ;}

            setBonus(mH[i]);
            setBonus(aH[m]);

            if(mH[i].ORD_EXP_SYS==2) mH[i].Subtitle4=Vkoef2(mH[i].KOEF_STAVKI);
            mH[i].Subtitle2="Сумма ";
            if(mH[i].ACTION==0) mH[i].Subtitle2=mH[i].Subtitle2+mClient.Val[mClient.valuta-1];

            mH[i].Subtitle3=zeroinsert(Math.round(mH[i].SUMM_STAVKI*100)/100,0);

            if(mH[i].STATE==1) mH.splice(i); else i++;

            if(aH[m].ACTION==1) {anH[ss]=aH[m];ss++;}
            if(aH[m].ACTION==0||aH[m].ACTION==4) {nH[k]=aH[m];k++;}
            m++;

            }


if(mH.length>0||mClient.balance>0){Cupon.style.display="";Opencupon.style.display="none";drawcuponbet();}
else if(mExpress.length==0){Cupon.style.display="none";Opencupon.style.display="";
id_("avtoritar").innerHTML="";
id_("OS").style.backgroundImage="url(/resources/images/nopopol.jpg)";
id_("OS").parentNode.href="/auth/payment/";
}
		  
		  
            Msh.innerHTML="Ставок:&nbsp;"+mH.length;
			
			//--------------------------------------------------------------------------------------------
			/*

            k=0;

            for(l=0;l<mExpress.length;l++) if(mExpress[l].live==1){k=1;break;}
            //if((mOrdinar.State!=1)&&(mOrdinar.live==1))k=1;
            if(k==1){
            for(i=0;i<mClient.DATE_STAVCA.length;i++){
            if((rDate.getTime()-mClient.DATE_STAVCA[i].getTime()<29*60*60*1000)&&(mClient.DATE_STAVCA_STATUS[i]==0)) break;}
            if(i==mClient.DATE_STAVCA.length)statusr=2;
            else{
            rclientindex=clientindex=i;
            if((i==mClient.DATE_STAVCA.length-1)||(mClient.DATE_STAVCA_STATUS[mClient.DATE_STAVCA.length-1]==1)) statusr=1;
            else rclientindex3=mClient.DATE_STAVCA.length-1;
            mClient.DATE_STAVCA_STATUS[clientindex]=1;statuscupon=1;

            webSocket.send("history");
            sendindex=0;
            sendarray.splice(0);
            writeInt(mClient.DATE_STAVCA[clientindex].getTime()/1000);
            sendarray[sendindex]=0;
            webSocket.send(EncodeBase64_2(sendarray));}
            ;}

           

            if(k==0) recalculall(0);
			expressday();
			expressdaylive();
            recalculall(0);
		*/
		//--------------------------------------------------------------------------------------------
		

           
		   
		    break;

        }
        


        case 21: {
            ss=0;
			if(loginstate==0) break;
            stream=decode64(mes);
            readUnsignedInt(stream);

            while(stream.length>seek){
            count=readUnsignedInt(stream);
            N=readDouble(stream);
            temp4=readUTF(stream);
            
            for(j=0;j<anH.length;j++){ for(l=0;l<anH[j].KOL;l++)
            if(anH[j].mHl[l].ID==count){ 
            anH[j].mHl[l].STATE=1;
            anH[j].mHl[l].KOEF_WIN=N;
            anH[j].mHl[l].CLEAR_SCORE=temp4;
            anH[j].mHl[l].koef=Vkoef2(anH[j].mHl[l].KOEF_WIN);
            anH[j].mHl[l].score=""+anH[j].mHl[l].CLEAR_SCORE.split("(").join("<br />(");
            l=-1;break;} if(l==-1) break;}

            for(j=0;j<nH.length;j++){ for(l=0;l<nH[j].KOL;l++)
            if(nH[j].mHl[l].ID==count){ 
            nH[j].mHl[l].STATE=1;
            nH[j].mHl[l].KOEF_WIN=N;
            nH[j].mHl[l].CLEAR_SCORE=temp4;
            nH[j].mHl[l].koef=Vkoef2(nH[j].mHl[l].KOEF_WIN);
            nH[j].mHl[l].score=""+nH[j].mHl[l].CLEAR_SCORE.split("(").join("<br />(");
            l=-1;break;} if(l==-1) break;}


            for(i=0;i<mClient.DATE_STAVCA_STATUS.length;i++){
            if(mClient.DATE_STAVCA_STATUS[i]==0) continue;
            for(j=0;j<rH[i].length;j++){for(l=0;l<rH[i][j].KOL;l++)
            if(rH[i][j].mHl[l].ID==count){ 
            ss=1;
			rH[i][j].mHl[l].STATE=1;
            rH[i][j].mHl[l].KOEF_WIN=N;
            rH[i][j].mHl[l].CLEAR_SCORE=temp4;
            rH[i][j].mHl[l].koef=Vkoef2(rH[i][j].mHl[l].KOEF_WIN);
            rH[i][j].mHl[l].score=""+rH[i][j].mHl[l].CLEAR_SCORE.split("(").join("<br />(");
            l=-1;break;}if(l==-1) break;}if(l==-1) break;}
            ;}

            if(ss==1) extractIstoria();


            break;

        }

        
case 56:
stream=decode64(mes);
//if(iphone==1) showWarning("Поздравляем Вас С Новым годом!На Ваш счет зачислен бонус в размере "+zeroinsert(readUnsignedInt(stream),0)+" рублей!<br/>Желаем Вам удачной игры в Новом Году!" ,"OK","",0,null);
showWarning("Поздравляем Вас С Новым годом!На Ваш счет зачислен бонус в размере <span style='color:#E97323'><b>"+zeroinsert(readUnsignedInt(stream),0)+"</b></span> рублей!<br/>Желаем Вам удачной игры в Новом Году!" ,"OK","",0,null);
break;
 
 
    
case 57:
principalDay.splice(0);	
principalDayIndex.splice(0);

readUnsignedInt(stream);
stream=decode64(mes);
i=0; while(stream.length>seek){
principalDay[i]=readUnsignedInt(stream);
principalDayIndex[i]=readUnsignedByte(stream);
i++;
}
maxexpressDay=999999999;
if(ttt>0) expressday(3);

//if(loginstate==1) setMaxExpress(2);

break;
	   


case 55:
if(loginstate==0) break;
stream=decode64(mes);
l=readUnsignedInt(stream);

showWarning("Ваша ставка отклонена!Номер ставки A:"+l.toString(),"OK","",0,null)

for(i=0;i<mH.length;i++)if(l==mH[i].ID_STAVKA) break;
if(i<mH.length) mH.splice(i,1);


for(i=0;i<nH.length;i++)
if(l==nH[i].ID_STAVKA) break; if(i<nH.length) nH.splice(i,1);

for(j=0;j<anH.length;j++)
if(l==anH[j].ID_STAVKA){ 
anH[j].STATE=1;
anH[j].HOLD=2;
anH[j].Itog="Отклонена";
anH[j].Summa=zeroinsert(Math.round(anH[j].SUMM_STAVKI*100)/100,0);break;}


for(i=0;i<mClient.DATE_STAVCA_STATUS.length;i++){
if(mClient.DATE_STAVCA_STATUS[i]==0) continue;
for(j=0;j<rH[i].length;j++)
if(l==rH[i][j].ID_STAVKA){ 
rH[i][j].STATE=1;
rH[i][j].HOLD=2;
rH[i][j].Itog="Отклонена";break;}
if(j<rH[i].length) break;}
drawcuponbet();
extractIstoria();
Msh.innerHTML="Ставок:&nbsp;"+mH.length;

for(i=0;i<mExpressDay.length;i++) mExpressDay[i].MAX_PAY=999999999;
for(i=0;i<mExpressDayLive.length;i++) mExpressDayLive[i].MAX_PAY=999999999;
expressday(1);expressdaylive(1);
for(i=0;i<mExpress.length;i++){ mExpress[i].MAX_PAY=999999999;minsumpay(mExpress[i]);newexpress(mExpress[i]);}
calckoef();newordsumm();
//setMaxExpress(1);setMaxExpress(2);setMaxExpress(3);
//recalculall(0);


break;


case 54:
if(loginstate==0) break;
stream=decode64(mes);
l=readUnsignedInt(stream);

showWarning("Ваша ставка принята!Номер ставки A:"+l.toString(),"OK","",0,null)
for(i=0;i<mH.length;i++) if(l==mH[i].ID_STAVKA) break;
if(i<mH.length) {mH[i].Title=mH[i].Title.replace("обраб.","");mH[i].HOLD=0;}
for(i=0;i<nH.length;i++)
if(l==nH[i].ID_STAVKA) break; if(i<nH.length) {nH[i].HOLD=0;nH[i].Itog="";}
for(j=0;j<anH.length;j++)
if(l==anH[j].ID_STAVKA){ 
anH[j].HOLD=0;
anH[j].Itog="";
anH[j].Summa=zeroinsert(Math.round(anH[j].SUMM_STAVKI*100)/100,0);break;}

for(i=0;i<mClient.DATE_STAVCA_STATUS.length;i++){
if(mClient.DATE_STAVCA_STATUS[i]==0) continue;
for(j=0;j<rH[i].length;j++)
if(l==rH[i][j].ID_STAVKA){ 
rH[i][j].HOLD=0;
rH[i][j].Itog="";break;}
if(j<rH[i].length) break;}
drawcuponbet();
extractIstoria();
break;


//case 160:		
case 60:{
//if(table160==1) break;	
//if(step==160) table160=1;
stream=decompress(mes);
//stream=decode64(mes);
readUnsignedInt(stream);
tPlus.splice(0);
i=0;
while(stream.length>seek){
tPlus[i]=new TPlus();
tPlus[i].ID_SPORT=readUnsignedByte(stream);
tPlus[i].Live=readUnsignedByte(stream);
tPlus[i].GRUP=readUnsignedByte(stream);
tPlus[i].FORA=readUnsignedByte(stream);
tPlus[i].TIP_RADAR=readUnsignedByte(stream);
//if(step==160) readUnsignedByte(stream);
k=readUnsignedByte(stream);for(j=0;j<k;j++) tPlus[i].ID_TIP_RADAR.push(readUnsignedShort(stream));
//console.log("tPlus["+i+"].ID_TIP_RADAR="+tPlus[i].ID_TIP_RADAR);
tPlus[i].FREE=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
//if(i==1) console.log("tPlus["+i+"].FREE="+tPlus[i].FREE);
tPlus[i].NUMKOLBAND1=readUnsignedByte(stream);
for(j=0;j<tPlus[i].NUMKOLBAND1;j++) tPlus[i].KOLBAND1[j]=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
//console.log("tPlus["+i+"].KOLBAND1="+tPlus[i].KOLBAND1);

tPlus[i].NUMKOLBAND2=readUnsignedByte(stream);
for(j=0;j<tPlus[i].NUMKOLBAND2;j++)tPlus[i].KOLBAND2[j]=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
//console.log("tPlus["+i+"].KOLBAND2="+tPlus[i].KOLBAND2);


tPlus[i].NUMROWBAND1=readUnsignedByte(stream);
for(j=0;j<tPlus[i].NUMROWBAND1;j++) tPlus[i].ROWBAND1[j]=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
//console.log("tPlus["+i+"].ROWBAND1="+tPlus[i].ROWBAND1);

tPlus[i].NUMROWBAND2=readUnsignedByte(stream);
//if(i==1) console.log("tPlus["+i+"].NUMROWBAND2="+tPlus[i].NUMROWBAND2);

for(j=0;j<tPlus[i].NUMROWBAND2;j++) tPlus[i].ROWBAND2[j]=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
//if(i==1)console.log("tPlus["+i+"].ROWBAND2="+tPlus[i].ROWBAND2);

tPlus[i].TYPEBAND=readUnsignedByte(stream);

tPlus[i].CELL_KOL=readUnsignedByte(stream);
tPlus[i].CELL_ROW=readUnsignedByte(stream);
tPlus[i].CELL_WIDTH=readUnsignedByte(stream);
tPlus[i].CELL_HEIGHT=readUnsignedByte(stream);
tPlus[i].NUM_CELL=readUnsignedByte(stream);
//console.log("ID_SPORT=" + tPlus[i].ID_SPORT + "LIVE=" + tPlus[i].Live + "FREE=" + tPlus[i].FREE + "ID_TIP_RADAR=" + tPlus[i].ID_TIP_RADAR);


//console.log(tPlus[i].FREE+" tPlus[i].TIP_RADAR="+tPlus[i].TIP_RADAR+" tPlus[i].ID_TIP_RADAR="+tPlus[i].ID_TIP_RADAR+"  i="+i+" tPlus[i].TYPEBAND="+tPlus[i].TYPEBAND+"tPlus[i].CELL_WIDTH="+tPlus[i].CELL_WIDTH+"tPlus[i].CELL_HEIGHT="+tPlus[i].CELL_HEIGHT+"tPlus[i].NUM_CELL="+tPlus[i].NUM_CELL+"tPlus[i].CELL_KOL="+tPlus[i].CELL_KOL+"tPlus[i].CELL_ROW="+tPlus[i].CELL_ROW+"tPlus[i].NUMROWBAND2="+tPlus[i].NUMROWBAND2+"tPlus[i].NUMROWBAND1="+tPlus[i].NUMROWBAND1+"tPlus[i].NUMKOLBAND2="+tPlus[i].NUMKOLBAND2+"tPlus[i].NUMKOLBAND1="+tPlus[i].NUMKOLBAND1);
//console.log(" ");

for(j=0;j<tPlus[i].NUM_CELL;j++)
{tPlus[i].CELL[j]=new TCell();
tPlus[i].CELL[j].ODD_NOMER=readUnsignedByte(stream);
tPlus[i].CELL[j].V=readUnsignedByte(stream);
tPlus[i].CELL[j].R=readUTF(stream).split(" ").join("&nbsp;").split("#").join("<br />");
tPlus[i].CELL[j].DOUBLE=readUnsignedByte(stream);
}

if(tPlus[i].Live==0&&(tPlus[i].ID_TIP_RADAR==380||tPlus[i].ID_TIP_RADAR==391||tPlus[i].ID_TIP_RADAR==58||tPlus[i].ID_TIP_RADAR==6||tPlus[i].ID_TIP_RADAR==289||tPlus[i].ID_TIP_RADAR==413)){tPlus[i].NUM_CELL=1;tPlus[i].TIP_RADAR=3;tPlus[i].CELL_WIDTH=2;}
i++;}	
	
break;
}
	

case 63:{
Login.value="логин";
Password.value="пароль";
Password.type="text";
            Open4[0].value="";
            Open4[1].value="";
            userpass="";
            userlogin="";

showWarning('Ваш аккаунт заблокирован. Для получения разъяснений обращайтесь <a href="mailto:info@winlinebet.net" style="color:#F47621;text-decoration:none;"><b>info@winlinebet.net</b></a>','OK','',0,null);	
break;
}



case 75:
//clearfreebet();
stream=decode64(mes);
readUnsignedInt(stream);

while(stream.length>seek){
j=readUnsignedInt(stream);
for(i=0;i<freebetarray.length;i++)
if(freebetarray[i].id==j) break;
freebetarray[i]=new Freebet();
freebetarray[i].id=j;
freebetarray[i].summa=readDouble(stream);
freebetarray[i].minkoef=readDouble(stream);
temp=readUTF(stream);
freebetarray[i].Sports=temp.split('(')[1].split(')')[0].split(',');
freebetarray[i].Champs=temp.split('[')[1].split(']')[0].split(',');
freebetarray[i].Events = temp.split('{')[1].split('}')[0].split(',');
readUnsignedInt(stream);
freebetarray[i].date.setTime(readUnsignedInt(stream)*1000);
freebetarray[i].mode=readUnsignedByte(stream);
for(j=0;j<freebetarray[i].Sports.length;j++) freebetarray[i].Sports[j]=parseInt(freebetarray[i].Sports[j]);
for(j=0;j<freebetarray[i].Champs.length;j++) freebetarray[i].Champs[j]=parseInt(freebetarray[i].Champs[j]);
for(j=0;j<freebetarray[i].Events.length;j++) freebetarray[i].Events[j]=parseInt(freebetarray[i].Events[j]);
if(freebetarray[i].Sports.length==1&&!freebetarray[i].Sports[0]) freebetarray[i].Sports.splice(0);
if(freebetarray[i].Champs.length==1&&!freebetarray[i].Champs[0]) freebetarray[i].Champs.splice(0);
if(freebetarray[i].Events.length==1&&!freebetarray[i].Events[0]) freebetarray[i].Events.splice(0);
}


freebetexpress();
id_("freebetbottom").style.display="";
id_("BETWARNING").addEventListener('click',freebetclick,false);
showWarningFree();


break;



case 76:
stream=decode64(mes);
temp=readUTF(stream);
if(temp.length==0){if(opchild2) opchild2.close();} else 
    opchild2.window.location.href = "https://secure.wlbill.com/?param=" + temp;
//opchild2.window.location.href="https://25.123.4.166/?param="+temp;
break;



case 77:
stream=decode64(mes);
j=readUnsignedByte(stream);
temp=readUTF(stream);
id_("redline").style.display="";
id_("redline").innerHTML=temp;
j77=j;
if(j==1||j==2){ 
//showWarning(temp,"Личный кабинет","Отмена",1,kabinetus);
id_("redline").onclick=kabinetus;
if(j==2) {
if(authstate==null) auth77="2";	else{
if(Reg7[25].options.length<4) Reg7[25].options.add(new Option(famstring[3],4)); 
Reg7[25].selectedIndex=3;radioclick();}

}
return;}
id_("redline").onclick=function(){id_("redline").style.display="none";id_("redline").innerHTML="";}

/*
else if(j==2){
if(temp.indexOf("#")>-1){showWarning(temp.split("#")[1],"Личный кабинет","Отмена",1,kabinetus);
Reg7[25].options.add(new Option(temp.split("#")[0],4));} else
{showWarning(temp,"Личный кабинет","Отмена",1,kabinetus);
Reg7[25].options.add(new Option(famstring[3],4));} 
;Reg7[25].selectedIndex=3;radioclick();
}
else showWarning(temp,"OK","",0,null);
*/
break;

case 89://break;
bonusactiv=1;
id_("setbonus").style.display="";
id_("setbonus").innerHTML="Статус бонуса";
id_("setbonus").onclick=function(){webSocket.send("STATUS_BONUS24");}
id_("CHECKBONUS").previousSibling.innerHTML="Вы приняли правила и условия получения бонуса";
id_("CHECKBONUS").previousSibling.style.display="";
for(i=0;i<2;i++){cs_("bonusref")[i].style.display="none";cs_("bonusacc")[i].style.display="none";}
id_("CHECKBONUS").style.display="none";
id_("CHECKBONUS").nextSibling.style.display="none";
//history.back();
break;



case 90://break;
bonusactiv=0;
id_("setbonus").style.display="none";
id_("setbonus").innerHTML="";
id_("setbonus").onclick=null;
id_("CHECKBONUS").previousSibling.innerHTML="Вы отказались от бонуса.";
id_("CHECKBONUS").previousSibling.style.display="";
for(i=0;i<2;i++){cs_("bonusref")[i].style.display="none";cs_("bonusacc")[i].style.display="none";}
id_("CHECKBONUS").style.display="none";
id_("CHECKBONUS").nextSibling.style.display="none";

//history.back();
break;

case 93:
showWarning("Аккаунт не активирован. Чтобы активировать свой логин и пароль, пройдите по ссылке с регистрационного письма от winlinebet, на Вашем почтовом ящике.","OK","",0,null);
break;

case 94:
webSocket.send("OTVET");
break;


case 95:
stream=decode64(mes);
i=readUnsignedInt(stream);
j=readUnsignedInt(stream);

if(Plus.style.display==""){
if(i>0) {id_("ulogo1").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+i+".png";id_("ulogo1").style.display="";}
else if(mEvents[EventId[LastFrontLive]].ID_SPORT==1){id_("ulogo1").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/home-default-logo.png";id_("ulogo1").style.display="";}
if(j>0) {id_("ulogo2").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+j+".png";id_("ulogo2").style.display="";}
else if(mEvents[EventId[LastFrontLive]].ID_SPORT==1) {id_("ulogo2").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/away-default-logo.png";id_("ulogo2").style.display="";}}


if(Pluslarge.style.display==""){
if(i>0) {id_("ulogo1larg").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+i+".png";id_("ulogo1larg").style.display="";}
//else{id_("ulogo1larg").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/home-default-logo.png";id_("ulogo1larg").style.display="";}
if(j>0) {id_("ulogo2larg").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+j+".png";id_("ulogo2larg").style.display="";}
//else{id_("ulogo2larg").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/away-default-logo.png";id_("ulogo2larg").style.display="";}
}


if(Rospis.style.display==""){
if(i>0) {id_("ulogo1hok").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+i+".png";id_("ulogo1hok").style.display="";}
//else{id_("ulogo1hok").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/home-default-logo.png";id_("ulogo1hok").style.display="none";}
if(j>0) {id_("ulogo2hok").childNodes[0].src="http://ls.betradar.com/ls/crest/big/"+j+".png";id_("ulogo2hok").style.display="";}
//else{id_("ulogo2hok").childNodes[0].src="http://ls.betradar.com/clients/ssm/img/away-default-logo.png";id_("ulogo2hok").style.display="none";}
}


break;

case 92://break;
stream=decode64(mes);
bonsumma1=readUnsignedInt(stream)/100;
bonsumma2=readUnsignedInt(stream)/100;
N=parseFloatExt(Reg252[mons2[schet_current2]-1].value);


if(mClient.igra>0||bonsumma1+bonsumma2==0) {showWarning("ВЫВОД СРЕДСТВ. Оформить заявку на вывод денежных средств невозможно, так как у Вас в игре есть нерассчитанные ставки, или сумма на Вашем счете меньше двухкратной суммы бонуса.","OK","",0,null);return;}

//if(mClient.balance-N<bonsumma2) {showWarning("ВЫВОД СРЕДСТВ. Оформить заявку на вывод денежных средств невозможно, так как остаток денежных средств после вывода будет меньше суммы полученного бонуса.","OK","",0,null);return;}


if(N>bonsumma2) {showWarning("ВЫВОД СРЕДСТВ. Запрошенная на вывод сумма превышает максимально доступную, так как не выполены условия предоставления бонуса. <br /><br />Сумма, доступная для вывода - <b>"+bonsumma2+" "+mClient.Val2[mClient.valuta-1]+"</b>.<br /><br />Узнать о текущем статусе бонуса можно пройдя по ссылке рядом с балансом.","OK","",0,null);return;}


if(N>bonsumma1) {
showWarning("ВЫВОД СРЕДСТВ.Вы запросили на вывод <b>"+N+"</b>.<br/><br/>Обращаем Ваше внимание, что после подтвержения вывода средств, Ваши бонус и выигрыши будут аннулированы, так как Вы не выполнили условия предоставления бонуса.<br /><br />Узнать о текущем статусе бонуса можно пройдя по ссылке рядом с балансом.","Вывести","Отмена",1,function(){sendformmoney2(1);});return;}
if(N<=bonsumma1) {sendformmoney2(1);return;}
break;




case 91://break;
stream=decode64(mes);
showWarning('СТАТУС БОНУСА.<div style="width:240px;float:left;margin-left:-10px;"><div style="width:35%;float:left;height:80px;border-right:1px solid #c6c6c6;text-align:center;">Сумма,<br />доступная<br />для снятия:</div><div style="width:26%;float:left;height:80px;border-right:1px solid #c6c6c6;text-align:center;">&nbsp;<br />Сумма<br />накоплений:</div><div style="width:38%;float:left;height:80px;text-align:center;">Сумма ставок<br />для вывода<br />бонуса:</div><div style="width:100%;float:left;margin-top:-30px;border-bottom:1px solid #c6c6c6;"></div><div style="width:35%;float:left;height:30px;margin-top:-20px;font-size:14px;font-weight:bold;border-right:1px solid transparent;text-align:center;">'+zeroinsert(readUnsignedInt(stream)/100,1)+'</div><div style="width:26%;float:left;height:30px;margin-top:-20px;font-size:14px;font-weight:bold;border-right:1px solid transparent;text-align:center;">'+zeroinsert(readUnsignedInt(stream)/100,1)+'</div><div style="width:38%;float:left;height:30px;margin-top:-20px;font-size:14px;font-weight:bold;text-align:center;">'+zeroinsert(readUnsignedInt(stream)/100,1)+'</div><a style="color:#F47621;text-decoration:none;width:100%;text-align:center;" href="#" onclick="javascript:hashnav(&quot;bonusaccept&quot;);CloseWarning();return false;">Правила и Условия</a></div>',"OK","",0,null);	
break;


case 88://break;
bonusactiv=2;
stream=decode64(mes);
i=readUnsignedInt(stream)/100;
j=readUnsignedInt(stream)/100;
cs_("bonss")[0].innerHTML=zeroinsert(i,1)+" "+mClient.Val3[mClient.valuta-1];
cs_("bonss")[1].innerHTML=zeroinsert(j,1)+" "+mClient.Val3[mClient.valuta-1];
cs_("bonss")[2].innerHTML=zeroinsert((i+j),1)+" "+mClient.Val3[mClient.valuta-1];
if(bontimestate==0) hashnav("bonusaccept");
bontimestate=1;
id_("setbonus").style.display="";
id_("setbonus").innerHTML="Получить бонус";
id_("setbonus").onclick=function(){hashnav("bonusaccept");}
break;


case 87:
//if(champlongid==4&&ssflag==1){ssprincipal=new Array();ssplus=0;champlongstate2=0;}else 
champlongstate2=1;
//DeleteEvent.splice(0);
NewEvent.splice(0);
ChangeEvent.splice(0);
NewChampion.splice(0);
NewSport.splice(0);
LastEvent.splice(0);
LastEventn.splice(0);
LastEventl.splice(0);
LastChampion.splice(0);
LastChampionLive.splice(0);


mChampionships[ChampionId[(champlongid+10)*10000+13]].count=0;
mChampionships[ChampionId[(champlongid+10)*10000+13]].Sombo.splice(1);

stream=decompress(mes);


p=0;

while(stream.length>seek){
temp=readUnsignedInt(stream);
temp2=readUnsignedShort(stream);
for(i=0;i<mEvents.length;i++) {if(mEvents[i].ID_EVENT==temp) break;}
if(i==mEvents.length){mEvents[i]=new TEvents(); mEvents[i].ID_EVENT=temp;}

if(mEvents[i].BEISBOL!=2&&mEvents[i].BEISBOL!=1) mEvents[i].BEISBOL=0;

if(p<2&&mEvents[i].BEISBOL==0) mEvents[i].BEISBOL=2;
p++;


mEvents[i].ID_RADAR=temp;
ss=temp*10000;
m=readUnsignedByte(stream);
if(m!=50) mEvents[i].TV=" - Победитель";
else mEvents[i].TV=" - Призер";




mEvents[i].ID_SAMPLE=readUnsignedByte(stream);
mEvents[i].ID_LIVE=0;
mEvents[i].ID_CHAMPIONSHIP=(champlongid+10)*10000+13;
mEvents[i].UCHASTNIK1=readUTF(stream);

if(champlongid==4){
if(mEvents[i].UCHASTNIK1.indexOf("Чемпионат Мира 2014")>-1&&mEvents[i].UCHASTNIK1.length>28){ 
if(mEvents[i].UCHASTNIK1.indexOf("Итоги выступления")>-1) {mEvents[i].TV=" (стадия вылета из турнира)";mEvents[i].DURATION=1;
//if(ssflag==1)ssprincipal.push(mEvents[i].ID_EVENT);
}
else if(mEvents[i].UCHASTNIK1.indexOf("место")>-1) mEvents[i].TV=" (очередность)";
else mEvents[i].TV="";
}
}

mEvents[i].UCHASTNIK2="";
mEvents[i].DATE_EVENT.setTime(readUnsignedInt(stream)*1000+29999);
mEvents[i].CountAdd2=0;
mEvents[i].CountAdd3=0;
mEvents[i].Live=0;
mEvents[i].State=0;
SetTableEvents(i);
EventId[mEvents[i].ID_EVENT]=i;

if(mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav1==1||stareventid[mEvents[i].ID_EVENT]==1){mEvents[i].fav=1;cookierefresh=1;mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit++;}
mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count++;
            for(j=0;j<mCountry.length;j++) if(mCountry[j].ID_COUNTRY==mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].ID_COUNTRY) {mCountry[j].count++;if(mEvents[i].fav==1)mCountry[j].favorit++;break;}
            for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].ID_SPORT) {mSport[j].count++;if(mEvents[i].fav==1)mSport[j].favorit++;break;}
            

k=i;
mEvents[k].mlines.splice(0);
l=readUnsignedByte(stream);


for(i=0;i<mTip_Line.length;i++) if(mTip_Line[i].ID_TIP_RADAR==ss&&mTip_Line[i].Live==0) break;
if(i=mTip_Line.length) mTip_Line[i]=new TTip_Line(); 
mTip_Line[i].ID_TIP_RADAR=ss;
mTip_Line[i].Live=0;
tipLineId[0][mTip_Line[i].ID_TIP_RADAR]=i;
mTip_Line[i].KOL_V=1;
mTip_Line[i].KOL=1;
mTip_Line[i].ID_TIP_EVENT=1;
mTip_Line[i].ID_TIP_SAMPLE=1;
mTip_Line[i].ROS_FAV=3;
mTip_Line[i].R[0]="@w";//mEvents[k].UCHASTNIK1;

if(m==50)  mTip_Line[i].FREE_TEXT_R="Специальные ставки (призер)"; else mTip_Line[i].FREE_TEXT_R="Специальные ставки (победитель)";
if(mEvents[k].DURATION==1) mTip_Line[i].FREE_TEXT_R="Специальные ставки (стадия вылета)";

m=i;
for(u=0;u<l;u++){

temp=readUnsignedInt(stream);
for(i=0;i<mLines.length;i++) {if(mLines[i].ID_LINE==temp) break;}
if(i==mLines.length){ mLines[i]=new TLines();LineId[temp]=i; mLines[i].ID_LINE=temp;};
mLines[i].V[1]=readUnsignedInt(stream);
mLines[i].ID_EVENT=mEvents[k].ID_EVENT;
mEvents[k].mlines.push(temp);
mLines[i].ID_TIP_RADAR=ss;
if(champlongid==4&&ssflag==1) ssplus++;
mLines[i].V[0]=readUnsignedShort(stream);
//console.log(mLines[i].V[0]);
//mLines[i].KOEF=readUTF(stream);
mLines[i].KOEF=readUTF(stream);
stateexpress2(mLines[i].ID_LINE,0);
//if(champlongid==4&&mLines[i].KOEF=="Победитель"&&mEvents[k].DURATION==1)
//mTip_Line[m].FREE_TEXT_R="Специальные ставки (победитель)"

}
DrawEvent(mEvents[k]);
}


//SortEvent();
//if(ssflag==0){
	
DateBoxChampion(mChampionships[ChampionId[(champlongid+10)*10000+13]]);
DrawTable(0);

//} else drawss();
//ssflag=0;

break;



case 86:
newchamplong();

stream=decode64(mes);
for(i=0;i<mCountry.length;i++){
if(mCountry[i].ID_COUNTRY==800) continue;
if(mCountry[i].ID_COUNTRY==801) continue;
if(mCountry[i].ID_COUNTRY==-100) continue;

mChampionships[ChampionId[(mCountry[i].ID_COUNTRY+10)*10000+13]].count=0;
mChampionships[ChampionId[(mCountry[i].ID_COUNTRY+10)*10000+13]].Sombo.splice(1);}


while(stream.length>seek){ 
j=readUnsignedShort(stream);
mChampionships[ChampionId[(j+10)*10000+13]].count=1;
mChampionships[ChampionId[(j+10)*10000+13]].Sombo[1]=1;
}

ttt1=0;
MenuClick(0);
if(champlongstate2==1)longbet(champlongid);
//else if(ttt>5) {ssflag=1;longbet(4);}

break;
	


case 83:

//stream=decompress(mes);
//console.log("83");
stream=decode64(mes);
readUnsignedByte(stream);
m=readUnsignedByte(stream);
j = readUnsignedByte(stream);
if(m==4) m=0;

for(k=0;k<j;k++){
    ss = readUnsignedByte(stream);
 switch(ss){
case 1:
l=readUnsignedInt(stream);
N = readDouble(stream);
for(i=0;i<mExpress.length;i++) if(mExpress[i].id_line==l){mExpress[i].Max_viplata=N; break;}
for(i=0;i<mExpressDay.length;i++) if(mExpressDay[i].id_line==l) {mExpressDay[i].Max_viplata=N;break;}
for(i=0;i<mExpressDayLive.length;i++) if(mExpressDayLive[i].id_line==l) {mExpressDayLive[i].Max_viplata=N;break;}
break;	

case 2:
switch(m){
case 0:	
mClient.maxexpress2=readDouble(stream);
break;
case 1:	
mClient.maxexpress2=readDouble(stream);
break;
case 2:	
maxexpressDay=readDouble(stream);
break;
case 3:	
maxexpressDayLive=readDouble(stream);
break;
}
break;	
};}



j=readUnsignedByte(stream);
//console.log("j="+j);  
if(j==21){console.log("ошибка представка"); break;}


while(stream.length>seek){
            l=readUnsignedInt(stream);
			N=readDouble(stream);
			if(N<0){console.log("Maкисмальная сумма="+N+"m="+m+"id_line="+l);N=0;}
			N2=readDouble(stream);
			
		console.log("Maкисмальная сумма="+N+"m="+m+"id_line="+l);
    	console.log("Maкисмальный выигрыш="+N2+"m="+m+"id_line="+l);
			
			if(N2<0){console.log("Maкисмальный выигрыш="+N2+"m="+m+"id_line="+l);N2=0}
			if(m<2&&N!=999999999){
			for(i=0;i<mExpress.length;i++) if(mExpress[i].id_line==l) {
			mExpress[i].Max=N;mExpress[i].Max_pay=N2; 
			mExpress[i].MAX_SUM=0;mExpress[i].MAX_PAY=0;
			minsumpay(mExpress[i]);newexpress(mExpress[i]);break;}}
			
			if(m==2&&N!=999999999){
			for(i=0;i<mExpressDay.length;i++) if(mExpressDay[i].id_line==l) {mExpressDay[i].Max=N;mExpressDay[i].Max_pay=N2; 
			mExpressDay[i].MAX_SUM=0;mExpressDay[i].MAX_PAY=0;
			break;}}

			if(m==3&&N!=999999999){
		    for(i=0;i<mExpressDayLive.length;i++) if(mExpressDayLive[i].id_line==l) {mExpressDayLive[i].Max=N;mExpressDayLive[i].Max_pay=N2; 
			mExpressDayLive[i].MAX_SUM=0;mExpressDayLive[i].MAX_PAY=0;
			break;}}
			
			
}
			
            if(m<2){calckoef(0);newordsumm();}
			//if(rapidcheck==1&&m==0) {sendnewordinar(mExpress[i].id_event);rapidcheck=0;}

            if(m==2)expressday(1);
			if(m==3)expressdaylive(1);
			
			
break;


case 78:
ss=readUnsignedByte(mes);
if(ss==1){ 			
k=rem_k;
n=rem_n;
platadate.splice(n,1);
platatip.splice(n,1);
platavid.splice(n,1);
platacasa.splice(n,1);
platasumma.splice(n,1);
plataId.splice(n,1);
valutavid.splice(n,1);
//plataChange2();
webSocket.send("balance");
}

if(ss==2){
showWarning("Отказано. Операция в процессе выполнения. Попробуйте позже. ","OK","",0,null)	
}



break;


case 84:
stream=decode64(mes);
hisloyastate=1;	
hisloyal.splice(0);
hisloyalm.splice(0);
hisloyalv.splice(0);
temp4=readUTF(stream);
if(temp4.length==0) {drawhisloyal();break;}	
temp5=temp4.split("m");
for(i=1;i<temp5.length;i++) temp5[i]=parseInt(temp5[i].split("t")[0]);
temp6=temp4.split("t");
for (i = 1; i < temp6.length; i++) temp6[i] = parseInt(temp6[i].split("m")[0]);
//for(i=0;i<6;i++) hisloyal[i]=0;
//m=Sort(temp5)[0];
//for(i=0;i<temp5.length;i++) hisloyal[temp5[i]-m]=temp6[i];
temp6.splice(0,1);
temp5.splice(0, 1);
if (temp5.length > 6) temp5=temp5.splice(temp5.length-6);
if (temp6.length > 6) temp6 = temp6.splice(temp6.length - 6);

hisloyalv=temp6;
hisloyalm=temp5;
drawhisloyal();
break;

		

case 61:{
if(Plus.style.display=="none")
{webSocket.send("LIVEEVENT=0");break;}	

stream=decompress(mes);
Scaut.matchid=readUnsignedInt(stream);
Scaut.status=readUTF(stream);
//

Scaut.dc=readUnsignedByte(stream);
Scaut.yellow[0]=readUnsignedByte(stream); //дальше все понятно
Scaut.yellow[1]=readUnsignedByte(stream);
Scaut.yr[0]=0; //дальше все понятно
Scaut.yr[1]=0;

//console.log("Scaut.yellow[0]="+Scaut.yellow[0]);
//console.log("Scaut.yellow[1]="+Scaut.yellow[1]);
Scaut.red[0]=readUnsignedByte(stream);
Scaut.red[1]=readUnsignedByte(stream);
Scaut.corners[0]=readUnsignedByte(stream);
Scaut.corners[1]=readUnsignedByte(stream);
//console.log("Scaut.corners[0]="+Scaut.corners[0]);
//console.log("Scaut.corners[1]="+Scaut.corners[1]);
Scaut.penalties[0]=readUnsignedByte(stream);
Scaut.penalties[1]=readUnsignedByte(stream);
//console.log("Scaut.penalties[0]="+Scaut.penalties[0]);
//console.log("Scaut.penalties[1]="+Scaut.penalties[1]);
Scaut.throwins[0]=readUnsignedByte(stream);
Scaut.throwins[1]=readUnsignedByte(stream);
Scaut.goalkicks[0]=readUnsignedByte(stream);
Scaut.goalkicks[1]=readUnsignedByte(stream);
Scaut.shotsofftarget[0]=readUnsignedByte(stream);
Scaut.shotsofftarget[1]=readUnsignedByte(stream);
//console.log("Scaut.shotsofftarget[0]="+Scaut.shotsofftarget[0]);
//console.log("Scaut.shotsofftarget[1]="+Scaut.shotsofftarget[1]);

Scaut.shotsontarget[0]=readUnsignedByte(stream);
Scaut.shotsontarget[1]=readUnsignedByte(stream);

//console.log("Scaut.shotsontarget[0]="+Scaut.shotsofftarget[0]);
//console.log("Scaut.shotsontarget[1]="+Scaut.shotsofftarget[1]);

Scaut.shotsblocked[0]=readUnsignedByte(stream);
Scaut.shotsblocked[1]=readUnsignedByte(stream);
Scaut.goalkeepersaves[0]=readUnsignedByte(stream);
Scaut.goalkeepersaves[1]=readUnsignedByte(stream);
Scaut.offsides[0]=readUnsignedByte(stream);
Scaut.offsides[1]=readUnsignedByte(stream);
Scaut.freekicks[0]=readUnsignedByte(stream);
Scaut.freekicks[1]=readUnsignedByte(stream);
Scaut.possession[0]=readUnsignedByte(stream);
Scaut.possession[1]=readUnsignedByte(stream);	
Scaut.substitutions[0]=readUnsignedByte(stream);
Scaut.substitutions[1]=readUnsignedByte(stream);
Scaut.injuries[0]=readUnsignedByte(stream);
Scaut.injuries[1]=readUnsignedByte(stream);

//console.log("Scaut.injuries[0]="+Scaut.injuries[0]);
//console.log("Scaut.injuries[1]="+Scaut.injuries[1]);
//console.log("Scaut.substitutions[0]="+Scaut.substitutions[0]);
//console.log("Scaut.substitutions[1]="+Scaut.substitutions[1]);
//console.log("Scaut.goalkicks[0]="+Scaut.goalkicks[0]);
//console.log("Scaut.goalkicks[1]="+Scaut.goalkicks[1]);

l=readUnsignedInt(stream);
while(stream.length>seek){
s=readUnsignedInt(stream);
ss=readUnsignedInt(stream);
if(m<l-1&&(ss==1018||ss==1019||ss==1040||ss==1041||ss==1084||ss==1085||ss==1016||ss==1017||ss==1042||ss==1043))
{readUTF(stream);readUnsignedByte(stream);readUTF(stream);}
else{
for(j=0;j<Scaut.events.length;j++) if(Scaut.events[j].id==s) break;
m=j; if(j==Scaut.events.length) Scaut.events[m]=new TEvscaut();
Scaut.events[m].id=s;
Scaut.events[m].stype=ss;//readUnsignedInt(stream); // тип события
Scaut.events[m].mtime=readUTF(stream); // время матча

Scaut.events[m].side=readUnsignedByte(stream); // какая команда 1 первая 2 вторая 0 никакая
//try{console.log(Scaut.events[m].side+" "+scautarr[Scaut.events[m].stype]);} catch(e){};

Scaut.events[m].info=readUTF(stream); // текстовая информация
//m++;
}
}
drawscaut();


break;		
;}		
		
		
		
		
		case 5: {
			ss=0;
            count=0;
            var actionstatus=0;
            if(loginstate==0) break;
            stream=decode64(mes);
            readUnsignedInt(stream);

            while(stream.length>seek){
            l=readUnsignedInt(stream);
            N=readDouble(stream);
            N2=readDouble(stream);
            for(i=0;i<mH.length;i++)
            if(l==mH[i].ID_STAVKA) {break;}
            if(i<mH.length) mH.splice(i,1);

            for(i=0;i<nH.length;i++)
            if(l==nH[i].ID_STAVKA) {break;}
            if(i<nH.length) nH.splice(i,1);

            for(j=0;j<anH.length;j++)
            if(l==anH[j].ID_STAVKA){ 
            actionstatus=1;
            anH[j].STATE=1;
            anH[j].SUMMA_V=N;
            anH[j].RETURN=N2;
			if(anH[j].HOLD==0){if(anH[j].ACTION==4) anH[j].Itog=zeroinsert2(Math.round((anH[j].SUMMA_V)*100)/100,1);
			 else anH[j].Itog=zeroinsert2(Math.round((anH[j].SUMMA_V-anH[j].SUMM_STAVKI+anH[j].RETURN)*100)/100,1);
			
			}
            if(anH[j].HOLD==1) anH[j].Itog="Обработке";
            if(anH[j].HOLD==2) anH[j].Itog="Отклонена";
	
            anH[j].Summa=zeroinsert(Math.round(anH[j].SUMM_STAVKI*100)/100,0);
            if(anH[j].RETURN>0) anH[j].Summa=anH[j].Summa+"<BR />"+zeroinsert2(Math.round(anH[j].RETURN*100)/100,1);
            break;}
            if(j<anH.length) continue;


            for(i=0;i<mClient.DATE_STAVCA_STATUS.length;i++){
            if(mClient.DATE_STAVCA_STATUS[i]==0) continue;
            for(j=0;j<rH[i].length;j++)
            if(l==rH[i][j].ID_STAVKA){ 
            ss=1;              
 			rH[i][j].STATE=1;
            rH[i][j].SUMMA_V=N;
            rH[i][j].RETURN=N2;
			
if(rH[i][j].HOLD==0){if(rH[i][j].ACTION==4) rH[i][j].Itog=zeroinsert2(Math.round((rH[i][j].SUMMA_V)*100)/100,1);
else rH[i][j].Itog=zeroinsert2(Math.round((rH[i][j].SUMMA_V-rH[i][j].SUMM_STAVKI+rH[i][j].RETURN)*100)/100,1);
}
if(rH[i][j].HOLD==1) rH[i][j].Itog="Обработке";
if(rH[i][j].HOLD==2) rH[i][j].Itog="Отклонена";
rH[i][j].Summa=zeroinsert(Math.round(rH[i][j].SUMM_STAVKI*100)/100,0);
if(rH[i][j].RETURN>0) rH[i][j].Summa=rH[i][j].Summa+"<br />"+zeroinsert2(Math.round(rH[i][j].RETURN*100)/100,1);
            count=-1;break;}if(count==-1) break;}
            ;}

            drawcuponbet();
            if(ss==1)extractIstoria();

            Msh.innerHTML="Ставок:&nbsp;"+mH.length;
            webSocket.send("balance");

            break;






        }
        
        case 15: {
						
			//alert(freebetstate2);
            var JI=0;
            clearInterval(cuinterval);
			clearInterval(cuinterval2);
            Cuponslide.style.display="none";
            Cuponslide.previousSibling.style.display="";
            Cuponslide.childNodes[0].style.marginLeft="-215px";

            Cuponslide2.style.display="none";
            //Cuponslide2.previousSibling.style.display="";
            Cuponslide2.childNodes[0].style.marginLeft="-215px";


            ss=readUnsignedByte(mes);
			if(ss==5) _gaq.push(['_trackPageview',"virtual/betdeny/server/maximum/"]);
			if(ss==2) _gaq.push(['_trackPageview',"virtual/betdeny/server/unknown/"]);
			if(ss==5) ss=2;
			
			seek=0;
            stream=decode64(mes.slice(1));
            sysmore=0;
            Bonus.Max=1;
            sendstate=0;
            if (stavcaExpressflag == 0 && ordinarflag == 1 && mExpressState == 0) {
                grandsendstate--; if (ss == 1 || ss == 3) multiordinar++;
                if (grandsendstate == 0 && multiordinar > 0) _gaq.push(['_trackPageview', "virtual/multiordinar/" + multiordinar]);

            }

            if (stavcaExpressflag == 0 && ordinarflag == 0 && mExpressState == 0 && (ss == 1 || ss == 3))  _gaq.push(['_trackPageview', "virtual/ordinar/"]);

            
              
            
			
			if(stavcaExpressflag==0&&ordinarflag==1&&mExpressState==0&&grandsendstate>0){ }
			else{
			summainput.disabled="";
			summainputDay.disabled="";
			summainputDayLive.disabled="";
			//cs_("ord55")[0].disabled=""
			;}
			
			if (ss == 4) {
			    readDouble(stream); readDouble(stream); readUnsignedInt(stream); readUnsignedInt(stream); readUnsignedInt(stream); readDouble(stream);
			//console.log("максимальная ставка="+readDouble(stream));
			ss=2;}
			
			
            if(ss==2) {
			if(stavcaExpressflag==0&&ordinarflag==1&&mExpressState==0){if(grandsendstate==0) {showWarning("Купон обработан. Непринятые ставки Вы можете отредактировать в купоне, список принятых ставок отображается в истории ставок","OK","",0,null);ord5enabled();}}
			else {showWarning(war3,"OK","",0,null);ord5enabled();};savestate=saveenabled();savestateDay=saveenabledDay();savestateDayLive=saveenabledDayLive();break;}
            
			
			
			if(loginstate==0) break;
			
			var mExp=null;
            

			
			if(mExpressState==0) mExp=mExpress;
			if(mExpressState==1) mExp=mExpressDay;
			if(mExpressState==2) mExp=mExpressDayLive;
			
			
			if(stavcaExpressflag==0&&ordinarflag==1){
			for(i=0;i<mExp.length;i++) if(mExp[i].id_event==ordinararray[0]) {JI=i;mOrdinar=mExp[i];
			ordinararray.splice(0,1);break;}
			
			
			}
			

            if(demo==1) _gaq.push(['_trackPageview',"virtual/demobet"]);
            else{
            if((stavcaExpressflag==0)&&(mOrdinar.live==1)&&(mExpressState==0)) _gaq.push(['_trackPageview',"virtual/realbetlive"]);
            if((stavcaExpressflag==0)&&(mOrdinar.live==0)&&(mExpressState==0)) _gaq.push(['_trackPageview',"virtual/realbet"]);
            if((stavcaExpressflag>0)||(mExpressState>0)){ for(i=0;i<mExp.length;i++) if(mExp[i].live==1){_gaq.push(['_trackPageview',"virtual/realbetlive"]);break;}
            if(i==mExp.length)_gaq.push(['_trackPageview',"virtual/realbet"]);}

            if((stavcaExpressflag==0)&&(mExpressState==0)){
            temp6="virtual/"
            if(mOrdinar.live==1) temp6=temp6+"live";
            temp6=temp6+"betmatch";
            for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mOrdinar.ID_SPORT) {temp6=temp6+"/"+mSport[i].NAME_RUS;break;}
            temp6=temp6+"/"+mChampionships[ChampionId[mOrdinar.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+"/"+mChampionships[ChampionId[mOrdinar.ID_CHAMPIONSHIP]].NAME_RUS+"/"+mOrdinar.U1+" - "+mOrdinar.U2;
            _gaq.push(['_trackPageview',temp6])
            ;}

            }







            var dat=new Date();

            if(actionstate==0){
            dat.setTime(dat.getTime()-(GMTBox.options[GMTBox.selectedIndex].value-mdif)*60*60*1000);
            dat.setUTCHours(0);dat.setUTCMilliseconds(0);dat.setUTCSeconds(0);dat.setUTCMinutes(0);


            for(i=0;i<mClient.DATE_STAVCA.length;i++) if(mClient.DATE_STAVCA[i].getTime()==dat.getTime()) break;

            if(i==mClient.DATE_STAVCA.length)
            { 	
            l=mClient.DATE_STAVCA.length; 
            mClient.DATE_STAVCA[l]=dat; 
            mClient.DATE_STAVCA_STATUS[l]=1;
            rH[l]=new Array();
            //if(rclientindex2<0) rclientindex2=l;
            j=mClient.DATE_STAVCA.length-1;
            removeAll(IstoriaBoxData);
            for(i=0;i<mClient.DATE_STAVCA.length;i++)
            {IstoriaBoxData.options.add(new Option(zeroadd(mClient.DATE_STAVCA[j-i].getDate())+"."+zeroadd(mClient.DATE_STAVCA[j-i].getMonth()+1)+"/"+mClient.DATE_STAVCA[j-i].getFullYear(),
            mClient.DATE_STAVCA[j-i].getTime())); 
            }

            };

            N=readDouble(stream);
			N2=readDouble(stream);
			
			if(N!=-1&&N2!=-1){
			mClient.igra=N;
            mClient.balance=N2-mClient.balance3;}

            if(freebetstate2==1)readUnsignedInt(stream); else{ mClient.Bilet=readUnsignedInt(stream);
			drawloyal();}
			
					
            Logged.childNodes[3].innerHTML=zeroinsert(mClient.igra,1);
            Logged.childNodes[5].innerHTML=zeroinsert(mClient.balance,1);
            cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
            Msh2.innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);


            }else 
            {readDouble(stream);readDouble(stream);}


            var aHis=null;;
            if(actionstate==0) aHis=nH; else aHis=anH;


            for(i=0;i<mH.length;i++) mH[mH.length-i]=mH[mH.length-i-1];
            for(i=0;i<aHis.length;i++) aHis[aHis.length-i]=aHis[aHis.length-i-1];
            i=0;

            mH[i]=new THistory(0);aHis[i]=new THistory(1);
			if(ss==3) {mH[i].HOLD=1;aHis[i].HOLD=1;}
			

            mH[i].ID_STAVKA=aHis[i].ID_STAVKA=readUnsignedInt(stream);
            mH[i].DATE_STAVKI.setTime(readUnsignedInt(stream)*1000);
            mH[i].BONUS=aHis[i].BONUS=Math.round(readDouble(stream)*100)/100;
			mH[i].DATE_STAVKI2.setTime(mH[i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            aHis[i].DATE_STAVKI.setTime(mH[i].DATE_STAVKI.getTime());
            aHis[i].DATE_STAVKI2.setTime(aHis[i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            mH[i].STATE=0;
            aHis[i].STATE=0;
            aHis[i].ACTION=mH[i].ACTION=actionstate;
			
			if(freebetstate2==1){
			aHis[i].ACTION=mH[i].ACTION=4;
			freebetarray.splice(freebetnum,1);
			//if(freebetarray.length<1) clearfreebet();
			
			}
            
			if(mExpressState==0){
			if(stavcaExpressflag==0) mH[i].SUMMA_V=aHis[i].SUMMA_V=parseFloatExt(mOrdinar.viplata);else mH[i].SUMMA_V=aHis[i].SUMMA_V=parseFloatExt(Viplata.innerHTML);
			} 
			if(mExpressState==1) mH[i].SUMMA_V=aHis[i].SUMMA_V=Math.round(viplataDay*100)/100;
			if(mExpressState==2) mH[i].SUMMA_V=aHis[i].SUMMA_V=Math.round(viplataDayLive*100)/100
			
			if(mExpressState==0)aHis[i].ORD_EXP_SYS=mH[i].ORD_EXP_SYS=stavcaExpressflag+1;
			else aHis[i].ORD_EXP_SYS=mH[i].ORD_EXP_SYS=2;

            if(mH[i].ORD_EXP_SYS==1) mH[i].KOL=aHis[i].KOL=1 ;else aHis[i].KOL=mH[i].KOL=mExp.length;
            aHis[i].SYS_VAL=mH[i].SYS_VAL=sendbox;
            
			if(mExpressState==0){
			if(stavcaExpressflag==0){ if(freebetstate2==0) aHis[i].SUMM_STAVKI=mH[i].SUMM_STAVKI=parseFloatExt(mOrdinar.summo);else
			aHis[i].SUMM_STAVKI=mH[i].SUMM_STAVKI=freebetsumm;}
			
			else aHis[i].SUMM_STAVKI=mH[i].SUMM_STAVKI=parseFloatExt(summainput.value); }
			if(mExpressState==1) aHis[i].SUMM_STAVKI=mH[i].SUMM_STAVKI=parseFloatExt(summainputDay.value);
			if(mExpressState==2) aHis[i].SUMM_STAVKI=mH[i].SUMM_STAVKI=parseFloatExt(summainputDayLive.value);
			
			//if(mExpressState==0) summainput.value="";
			//if(mExpressState==1) summainputDay.value="";
			//if(mExpressState==2) summainputDayLive.value="";
			
			if(mH[i].ORD_EXP_SYS==1) mH[i].Subtitle="";
            if(mH[i].ORD_EXP_SYS==2) {if(mH[i].KOL>1)mH[i].Subtitle=express1;else mH[i].Subtitle="";}
            if(mH[i].ORD_EXP_SYS==3) mH[i].Subtitle=system1+" "+mH[i].SYS_VAL+" "+ system2+" "+ mH[i].KOL+" ("+Combin(mH[i].KOL,mH[i].SYS_VAL)+" "+system3+")";
            mH[i].Title='<span style="float:left;width:110px;">A:'+mH[i].ID_STAVKA;
            if(mH[i].HOLD==1) mH[i].Title=mH[i].Title+"&nbsp;обраб.";
            if(mH[i].HOLD==2) mH[i].Title=mH[i].Title+"&nbsp;откл.";
            mH[i].Title=mH[i].Title+'</span><span style="float:left; width:90px; text-align:right;">'+zeroadd(mH[i].DATE_STAVKI2.getDate())+"/"+zeroadd(mH[i].DATE_STAVKI2.getMonth()+1)+"  "+zeroadd(mH[i].DATE_STAVKI2.getHours())+":"+zeroadd(mH[i].DATE_STAVKI2.getMinutes())+'</span>';

/*
            aHis[i].Data="<b>A: "+aHis[i].ID_STAVKA+"</b><br />"+zeroadd(aHis[i].DATE_STAVKI2.getDate())+"/"+zeroadd(aHis[i].DATE_STAVKI2.getMonth()+1)+" "+zeroadd(aHis[i].DATE_STAVKI2.getHours())+":"+zeroadd(aHis[i].DATE_STAVKI2.getMinutes());

            if(aHis[i].ORD_EXP_SYS==1) aHis[i].Expresst="";

            if(aHis[i].ORD_EXP_SYS==2){if(aHis[i].KOL>1) aHis[i].Express=express1;else aHis[i].Expresst="";}
            if(aHis[i].ORD_EXP_SYS==3) aHis[i].Express=system1+"<br />"+aHis[i].SYS_VAL+" "+ system2+" "+ aHis[i].KOL+"<br />"+Combin(aHis[i].KOL,aHis[i].SYS_VAL)+" "+system3.substr(0,3)+".";

            aHis[i].Summa=zeroinsert(Math.round(aHis[i].SUMM_STAVKI*100)/100,0);
            if(aHis[i].RETURN>0) aHis[i].Summa=aHis[i].Summa+"<br />"+zeroinsert2(Math.round(aHis[i].RETURN*100)/100,1);

if((aHis[i].STATE>0)&&(aHis[i].HOLD==0)) aHis[i].Itog=zeroinsert2(Math.round((aHis[i].SUMMA_V-aHis[i].SUMM_STAVKI+aHis[i].RETURN)*100)/100,1);
else{
if(aHis[i].HOLD==1) aHis[i].Itog="Обраб.";
if(aHis[i].HOLD==2) aHis[i].Itog="Отклонена";
if(aHis[i].HOLD==0) aHis[i].Itog="";
}
*/          
            
            //if(freebetstate2==1) bonusnewindex=0;       
            if(bonusnewindex==2&&freebetstate2==0) bonusnewindex=0;

            var duf=0;
			for(j=0;j<mH[i].KOL;j++){
            mH[i].mHl[j]=new THistoryline(0);
            aHis[i].mHl[j]=new THistoryline(1);
            id_line=readUnsignedInt(stream);
            aHis[i].mHl[j].ID=mH[i].mHl[j].ID=readUnsignedInt(stream);
            aHis[i].mHl[j].KOEF_STAVKI=mH[i].mHl[j].KOEF_STAVKI=readDouble(stream);
			
			if(duf==0&&bonusnewindex==1&&freebetstate2==0){duf=1;bonusnewindex=2;
			if(mClient.valuta!=1) bonusnew=Math.min(15,mH[i].SUMM_STAVKI);
            else bonusnew=Math.min(500,mH[i].SUMM_STAVKI);}


            aHis[i].mHl[j].SCORE_ST=mH[i].mHl[j].SCORE_ST=readUTF(stream);
            if((stavcaExpressflag>0)||(mExpressState>0)){aHis[i].mHl[j].LIVE=mH[i].mHl[j].LIVE=mExp[j].live;
            aHis[i].mHl[j].ODD_NOMER=mH[i].mHl[j].ODD_NOMER=mExp[j].Index+1;
            aHis[i].mHl[j].FAVORIT=mH[i].mHl[j].FAVORIT=mExp[j].FAVORIT;
            aHis[i].mHl[j].ID_TIP_RADAR=mH[i].mHl[j].ID_TIP_RADAR=mExp[j].ID_TIP_RADAR;
            aHis[i].mHl[j].ID_RADAR=mH[i].mHl[j].ID_RADAR=mExp[j].ID_RADAR;
            mH[i].mHl[j].DATE_EVENT.setTime(mExp[j].DATE_EVENT.getTime());
            mH[i].mHl[j].DATE_EVENT2.setTime(mH[i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            aHis[i].mHl[j].DATE_EVENT.setTime(mExp[j].DATE_EVENT.getTime());
            aHis[i].mHl[j].DATE_EVENT2.setTime(aHis[i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);



            aHis[i].mHl[j].ID_SPORT=mH[i].mHl[j].ID_SPORT=mExp[j].ID_SPORT;
            aHis[i].mHl[j].DOP_KOEF=mH[i].mHl[j].DOP_KOEF=mExp[j].KOEF;
            aHis[i].mHl[j].U1=mH[i].mHl[j].U1=mExp[j].U1;
            aHis[i].mHl[j].U2=mH[i].mHl[j].U2=mExp[j].U2;
            aHis[i].mHl[j].CHAMP=mH[i].mHl[j].CHAMP=mChampionships[ChampionId[mExp[j].ID_CHAMPIONSHIP]].NAME_RUS;
            aHis[i].mHl[j].KOEF_WIN=mH[i].mHl[j].KOEF_WIN=0;
            aHis[i].mHl[j].CLEAR_SCORE=mH[i].mHl[j].CLEAR_SCORE="";
            aHis[i].mHl[j].STATE=mH[i].mHl[j].STATE=0;
            aHis[i].mHl[j].ID_COUNTRY=mH[i].mHl[j].ID_COUNTRY=mExp[j].ID_COUNTRY;
			aHis[i].mHl[j].ID_EVENT=mH[i].mHl[j].ID_EVENT=mExp[j].id_event;
            aHis[i].mHl[j].future_live=mH[i].mHl[j].future_live=mExp[j].future_live;
            }else
            {aHis[i].mHl[j].LIVE=mH[i].mHl[j].LIVE=mOrdinar.live;
            aHis[i].mHl[j].ODD_NOMER=mH[i].mHl[j].ODD_NOMER=mOrdinar.Index+1;
            aHis[i].mHl[j].FAVORIT=mH[i].mHl[j].FAVORIT=mOrdinar.FAVORIT;
            aHis[i].mHl[j].ID_TIP_RADAR=mH[i].mHl[j].ID_TIP_RADAR=mOrdinar.ID_TIP_RADAR;
            aHis[i].mHl[j].ID_RADAR=mH[i].mHl[j].ID_RADAR=mOrdinar.ID_RADAR;
            mH[i].mHl[j].DATE_EVENT.setTime(mOrdinar.DATE_EVENT.getTime());
            mH[i].mHl[j].DATE_EVENT2.setTime(mH[i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);

            aHis[i].mHl[j].DATE_EVENT.setTime(mOrdinar.DATE_EVENT.getTime());
            aHis[i].mHl[j].DATE_EVENT2.setTime(aHis[i].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);

            aHis[i].mHl[j].ID_SPORT=mH[i].mHl[j].ID_SPORT=mOrdinar.ID_SPORT;
            aHis[i].mHl[j].DOP_KOEF=mH[i].mHl[j].DOP_KOEF=mOrdinar.KOEF;
            aHis[i].mHl[j].U1=mH[i].mHl[j].U1=mOrdinar.U1;
            aHis[i].mHl[j].U2=mH[i].mHl[j].U2=mOrdinar.U2;
            aHis[i].mHl[j].CHAMP=mH[i].mHl[j].CHAMP=mChampionships[ChampionId[mOrdinar.ID_CHAMPIONSHIP]].NAME_RUS;
            aHis[i].mHl[j].KOEF_WIN=mH[i].mHl[j].KOEF_WIN=0;
            aHis[i].mHl[j].CLEAR_SCORE=mH[i].mHl[j].CLEAR_SCORE="";
            aHis[i].mHl[j].STATE=mH[i].mHl[j].STATE=0;
            aHis[i].mHl[j].ID_COUNTRY=mH[i].mHl[j].ID_COUNTRY=mOrdinar.ID_COUNTRY;
            aHis[i].mHl[j].ID_EVENT=mH[i].mHl[j].ID_EVENT=mOrdinar.id_event;
            aHis[i].mHl[j].future_live=mH[i].mHl[j].future_live=mOrdinar.future_live;
            }
			
			
            if((mH[i].mHl[j].ID_COUNTRY+10)*10000+13==mExp[j].ID_CHAMPIONSHIP) {mH[i].mHl[j].Title=mH[i].mHl[j].U1;aHis[i].mHl[j].CHAMP=mH[i].mHl[j].CHAMP=mH[i].mHl[j].U1; mH[i].mHl[j].ID_CHAMPIONSHIP=(mH[i].mHl[j].ID_COUNTRY+10)*10000+13;
			aHis[i].mHl[j].ID_RADAR=mH[i].mHl[j].ID_RADAR=0;
			
			} else
            mH[i].mHl[j].Title=mH[i].mHl[j].U1+" - "+mH[i].mHl[j].U2;

            for(l=0;l<mTip_Line.length;l++)if((mH[i].mHl[j].ID_TIP_RADAR==mTip_Line[l].ID_TIP_RADAR)&&(mH[i].mHl[j].LIVE==mTip_Line[l].Live)) break;
            if(l==mTip_Line.length) return;

            if(mTip_Line[l].FREE_TEXT_R.indexOf("@n")>-1)
            temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH[i].mHl[j].DOP_KOEF.substr(2,1)).replace("@n",mH[i].mHl[j].DOP_KOEF.substr(0,1)).replace("@y",mH[i].mHl[j].DOP_KOEF.substr(6,1));
            else temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH[i].mHl[j].DOP_KOEF).replace("@h",mH[i].mHl[j].DOP_KOEF.split("/")[1]).replace("@z",mH[i].mHl[j].DOP_KOEF.split("/")[0]);
            if(mH[i].mHl[j].ID_SPORT==2) temp4=temp4.replace("@p",quarter);
            if(mH[i].mHl[j].ID_SPORT==4) temp4=temp4.replace("@p",period);
            if(mH[i].mHl[j].ID_SPORT==3) temp4=temp4.replace("@p",inning);
            if(mH[i].mHl[j].ID_SPORT==16) temp4=temp4.replace("@p",quarter);
			if(mH[i].mHl[j].ID_SPORT==19) temp4=temp4.replace("@p","фрейм");


            if((mH[i].mHl[j].ID_SPORT==5)||(mH[i].mHl[j].ID_SPORT==23)||(mH[i].mHl[j].ID_SPORT==22)||(mH[i].mHl[j].ID_SPORT==34)||(mH[i].mHl[j].ID_SPORT==31)||(mH[i].mHl[j].ID_SPORT==20)) temp4=temp4.replace("@p",sete);
            mH[i].mHl[j].Free=temp4;

            mH[i].mHl[j].R=mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1];
			if(mH[i].mHl[j].DOP_KOEF.indexOf("1@")>-1) mH[i].mHl[j].R=mH[i].mHl[j].DOP_KOEF.replace("1@","")+" ("+mH[i].mHl[j].U1+")";
            if(mH[i].mHl[j].DOP_KOEF.indexOf("2@")>-1) mH[i].mHl[j].R=mH[i].mHl[j].DOP_KOEF.replace("2@","")+" ("+mH[i].mHl[j].U2+")";

            if(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="@w"){mH[i].mHl[j].R=aHis[i].mHl[j].DOP_KOEF;
			if(mH[i].mHl[j].ID_COUNTRY==4&&mH[i].mHl[j].R=="Победитель") mH[i].mHl[j].Free="Специальные ставки (станет чемпионом)";}
			
			
			
            if(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="1")    mH[i].mHl[j].R=mH[i].mHl[j].U1;
            if(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="2")    mH[i].mHl[j].R=mH[i].mHl[j].U2;
            if((mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="X")||(mTip_Line[l].R[mH[i].mHl[j].ODD_NOMER-1]=="x")) mH[i].mHl[j].R=Nichya;
            mH[i].mHl[j].V=Vkoef2(mH[i].mHl[j].KOEF_STAVKI);

            if((mTip_Line[l].ROS_FAV==0)&&(mH[i].mHl[j].DOP_KOEF.length>0)&&(mTip_Line[l].FREE_TEXT_R.indexOf("@x")==-1)&&(mH[i].mHl[j].DOP_KOEF.indexOf("2@")==-1)&&(mH[i].mHl[j].DOP_KOEF.indexOf("1@")==-1)) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+totkoef(mH[i].mHl[j].DOP_KOEF);
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT==(mH[i].mHl[j].ODD_NOMER))) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+favkoef(mH[i].mHl[j].DOP_KOEF);else{
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT!=(mH[i].mHl[j].ODD_NOMER))) mH[i].mHl[j].Free=mH[i].mHl[j].Free+" "+favkoef2(mH[i].mHl[j].DOP_KOEF);else
            if((mTip_Line[l].ROS_FAV==1)&&(mH[i].mHl[j].FAVORIT==0)) mH[i].mHl[j].FreemH[i].mHl[j].Free+" "+favkoef3(mH[i].mHl[j].DOP_KOEF);}


            aHis[i].KOEF_STAVKI=mH[i].KOEF_STAVKI=mH[i].KOEF_STAVKI*mH[i].mHl[j].KOEF_STAVKI;


	        ;}



            setBonus(mH[i]);
            setBonus(aHis[i]);

            if((mH[i].ORD_EXP_SYS==2)&&(mH[i].KOL>1)) mH[i].Subtitle4=Vkoef2(mH[i].KOEF_STAVKI);
            mH[i].Subtitle2="Сумма ";
            if(mH[i].ACTION==0) mH[i].Subtitle2=mH[i].Subtitle2+mClient.Val[mClient.valuta-1];
            mH[i].Subtitle3=zeroinsert(Math.round(mH[i].SUMM_STAVKI*100)/100,0);



           // if((aHis[i].ORD_EXP_SYS==2)&&(aHis[i].KOL>1)) aHis[i].Express=aHis[i].Express+"<br />к "+Vkoef2(aHis[i].KOEF_STAVKI);
            //aHis[i].Data=aHis[i].Data+"<br /><b>"+aHis[i].Express+"</b>";

            if(checkrapid.checked!=true&&checkrapid.checked!="checked") drawcuponbet();
			
			
			if(ss==1) {
						if(stavcaExpressflag==0&&ordinarflag==1&&mExpressState==0){if(grandsendstate==0){ showWarning("Купон обработан. Непринятые ставки Вы можете           отредактировать в купоне. Cписок принятых(в обработке) ставок отображается в истории ставок","OK","",0,null);ord5enabled();};}
	else 
			{showWarning(war2,"OK","",0,null);ord5enabled();}}
            if(ss==3){
						if(stavcaExpressflag==0&&ordinarflag==1&&mExpressState==0){if(grandsendstate==0){ showWarning("Купон обработан. Непринятые ставки Вы можете           отредактировать в купоне, список принятых(в обработке) ставок отображается в истории ставок","OK","",0,null);ord5enabled();};}
	else 
			
			 {showWarning(war33,"OK","",0,null);ord5enabled();}
			 
			}

			
            
			if(mExpressState==0){
			if(stavcaExpressflag==0){ expressclose(mOrdinar.id_event);
			if(freebetstate2==1){if(freebetarray.length<1) clearfreebet();else freebetexpress();}
			}
			else{
            express.innerHTML="";
            drawscroll();
             delstavca2();calckoef(1);
            };}
			

            savestate=saveenabled();
			savestateDay=saveenabledDay();savestateDayLive=saveenabledDayLive();

           
			


//console.log("mExpressState="+mExpressState+"ordinarflag="+ordinarflag+"grandsendstate="+grandsendstate+"stavcaExpressflag="+stavcaExpressflags);

if(mExpressState==0) {if((stavcaExpressflag==0&&ordinarflag==1&&grandsendstate==0)||stavcaExpressflag>0||ordinarflag==0){
for(i=0;i<mExpressDay.length;i++) mExpressDay[i].MAX_PAY=999999999;
for(i=0;i<mExpressDayLive.length;i++) mExpressDayLive[i].MAX_PAY=999999999;
expressday(1);expressdaylive(1);}}

if(mExpressState==1) {for(i=0;i<mExpress.length;i++){ mExpress[i].MAX_PAY=999999999;minsumpay(mExpress[i]);newexpress(mExpress[i]);}
calckoef(1);newordsumm();
for(i=0;i<mExpressDay.length;i++) mExpressDay[i].MAX_PAY=999999999;expressday(1);}


if(mExpressState==2) {for(i=0;i<mExpress.length;i++){ mExpress[i].MAX_PAY=999999999;minsumpay(mExpress[i]);newexpress(mExpress[i]);}
calckoef(1);newordsumm();for(i=0;i<mExpressDayLive.length;i++) mExpressDayLive[i].MAX_PAY=999999999;expressdaylive(1);}




/*
if(mExpressState!=0) recalculall(1);
expressday();
expressdaylive();
*/






            m=mClient.DATE_STAVCA_STATUS.length-1;
			Msh.innerHTML="Ставок:&nbsp;"+mH.length;
			

            if(mClient.DATE_STAVCA_STATUS[m]==0) break;

            for(i=0;i<rH[m].length;i++) {rH[m][rH[m].length-i]=rH[m][rH[m].length-i-1];}

            rH[m][0]=new THistory(1);
                
            rH[m][0].STATE=mH[0].STATE;
			rH[m][0].ACTION=mH[0].ACTION;
			rH[m][0].SUMMA_V=mH[0].SUMMA_V;
            rH[m][0].ID_STAVKA=mH[0].ID_STAVKA;
            rH[m][0].BONUS=mH[0].BONUS;
			rH[m][0].HOLD=mH[0].HOLD;
            rH[m][0].DATE_STAVKI.setTime(mH[0].DATE_STAVKI.getTime());
            rH[m][0].DATE_STAVKI2.setTime(rH[m][0].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            rH[m][0].ORD_EXP_SYS=mH[0].ORD_EXP_SYS;

            if(rH[m][0].BONUS>0||rH[m][0].ACTION==4) rH[m][0].KOL=mH[0].KOL-1;else rH[m][0].KOL=mH[0].KOL;
            rH[m][0].SYS_VAL=mH[0].SYS_VAL;
            rH[m][0].SUMM_STAVKI=mH[0].SUMM_STAVKI;
			


            for(j=0;j<rH[m][0].KOL;j++){
            rH[m][0].mHl[j]=new THistoryline(1);
            rH[m][0].mHl[j].ID=mH[0].mHl[j].ID;
            rH[m][0].mHl[j].LIVE=mH[0].mHl[j].LIVE;
            rH[m][0].mHl[j].ODD_NOMER=mH[0].mHl[j].ODD_NOMER;
            rH[m][0].mHl[j].FAVORIT=mH[0].mHl[j].FAVORIT;
            rH[m][0].mHl[j].ID_TIP_RADAR=mH[0].mHl[j].ID_TIP_RADAR;
            rH[m][0].mHl[j].DATE_EVENT.setTime(mH[0].mHl[j].DATE_EVENT.getTime());
            rH[m][0].mHl[j].DATE_EVENT2.setTime(rH[m][0].mHl[j].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            rH[m][0].mHl[j].ID_SPORT=mH[0].mHl[j].ID_SPORT;
            rH[m][0].mHl[j].KOEF_STAVKI=mH[0].mHl[j].KOEF_STAVKI;
            rH[m][0].KOEF_STAVKI=rH[m][0].KOEF_STAVKI*rH[m][0].mHl[j].KOEF_STAVKI;
            rH[m][0].mHl[j].DOP_KOEF=mH[0].mHl[j].DOP_KOEF;
            rH[m][0].mHl[j].SCORE_ST=mH[0].mHl[j].SCORE_ST;
            rH[m][0].mHl[j].U1=mH[0].mHl[j].U1;
            rH[m][0].mHl[j].U2=mH[0].mHl[j].U2;
            rH[m][0].mHl[j].CHAMP=mH[0].mHl[j].CHAMP;
            rH[m][0].mHl[j].KOEF_WIN=mH[0].mHl[j].KOEF_WIN;
            rH[m][0].mHl[j].CLEAR_SCORE=mH[0].mHl[j].CLEAR_SCORE;
            rH[m][0].mHl[j].STATE=mH[0].mHl[j].STATE;
            rH[m][0].mHl[j].ID_RADAR=mH[0].mHl[j].ID_RADAR;
            rH[m][0].mHl[j].ID_COUNTRY=mH[0].mHl[j].ID_COUNTRY;
			rH[m][0].mHl[j].ID_CHAMPIONSHIP=mH[0].mHl[j].ID_CHAMPIONSHIP;
            rH[m][0].mHl[j].ID_EVENT=mH[0].mHl[j].ID_EVENT;

            rH[m][0].mHl[j].future_live=mH[0].mHl[j].future_live;
            ;}

            setBonus(rH[m][0]);
            extractIstoria();
            
            break;
        }

        
		
		
        case 13: {
			//console.log("authstate="+authstate+" documents.length="+documents.length);
			if(authstate==null) {auth13=mes;break;} 
            stream=decode64(mes);
            for(i=0;i<doc2.length;i++) doc2[i]=1;
			//console.log("authstate="+authstate+" documents.length="+documents.length);
			
            documents.splice(0);
            removeAll(Reg7[18]);
            var da=new Date();
			mClient.F=readUTF(stream);
            mClient.I=readUTF(stream);
            mClient.O=readUTF(stream);
            //mClient.email=readUTF(stream);


            //Reg7[0].innerHTML=readUTF(stream);
            //Reg7[1].innerHTML=readUTF(stream);
            //Reg7[1].innerHTML=readUTF(stream);
			Reg7[0].innerHTML=mClient.F+" "+mClient.I;
             
			l=readUnsignedShort(stream);
			i=readUnsignedShort(stream);
			j=readUnsignedShort(stream);
			//da.setMonth(readUnsignedShort(stream)-1);
            //da.setFullYear(readUnsignedShort(stream));
			//da.setDate(l);

           
			
			
            //Reg7[1].innerHTML=zeroadd(da.getDate())+"."+zeroadd(da.getMonth()+1)+"."+da.getFullYear();
			//mClient.dmy=zeroadd(da.getDate())+""+zeroadd(da.getMonth()+1)+""+da.getFullYear();
             Reg7[1].innerHTML=zeroadd(l)+"."+zeroadd(i)+"."+j;
			 mClient.dmy=zeroadd(l)+""+zeroadd(i)+""+j;
			
			

            mClient.country=readUTF(stream);
			Reg7[11].selectedIndex=0;
			removeAll(Reg7[8]);
			removeAll(Reg7[9]);
			Reg7[10].disabled="";
			Reg7[6].disabled="";
			Reg7[11].disabled="";
			Reg7[9].disabled="";
			Reg7[7].disabled="";

            Reg7[2].innerHTML=userlogin;
            mClient.city=readUTF(stream);
			mClient.index=Reg7[7].value=readUTF(stream);
			mClient.region=readUTF(stream);
			mClient.address=Reg7[10].value=readUTF(stream);
			
			
			mClient.telefon=Reg7[14].value=readUTF(stream);
			mClient.mobil=readUTF(stream);
			mClient.email=Reg7[4].value=readUTF(stream);
			mClient.nic = Reg7[12].value = readUTF(stream);
			//mClient.login =  readUTF(stream);
			mClient.pin=Reg7[13].value=readUTF(stream);
			mClient.favorit=readUnsignedInt(stream);
			for(i=0;i<echip.length/2;i++) if(echip[2*i]==mClient.favorit) {Reg7[11].selectedIndex=i;break;}
			
			if(mClient.address.length>5) Reg7[10].disabled="disabled";
            //if(mClient.mobil.length>3) Reg7[6].disabled="disabled";
			if(Reg7[11].selectedIndex>0&&Reg7[11].selectedIndex<Reg7[11].options.length-1) Reg7[11].disabled="disabled";
			if(mClient.index.length>2) Reg7[7].disabled="disabled";
			
			mClient.valuta=readUnsignedInt(stream);
			
			if((mClient.valuta-1)<2) Reg7[3].selectedIndex=mClient.valuta-1;
            else Reg7[3].selectedIndex=2;

var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
if(page2.indexOf("personal")>-1){CloseWarning(); hashChanged(page2.replace("auth","").split("/").join(""));}
	
			

            l=readUnsignedInt(stream);
            while(stream.length>seek){
            l=readUnsignedByte(stream);
            if(l>0){
            if(l==1) l=2;else if(l==2) l=1;    
            if(readUnsignedByte(stream)>0){
            doc2[l]=1;}
            k=l;
			documents[k]=new Document(); 
			documents[k].ID_DOCUMENT=l;
			documents[k].scan=readUnsignedByte(stream);
			//documents[k].scan=3;
			documents[k].SERIA_NAME=readUTF(stream);
            documents[k].NOMER_NAME=readUTF(stream);
            documents[k].KEM_V_NAME=readUTF(stream);
            documents[k].KOD_POD_NAME=readUTF(stream);
            documents[k].vday=readUnsignedShort(stream);
            documents[k].vmonth=readUnsignedShort(stream);
            documents[k].vyear=readUnsignedShort(stream);
            documents[k].dday=readUnsignedShort(stream);
            documents[k].dmonth=readUnsignedShort(stream);
            documents[k].dyear=readUnsignedShort(stream);
            documents[k].DATA_V_NAME=zeroadd(documents[k].vday)+"-"+zeroadd(documents[k].vmonth)+"-"+zeroadd(documents[k].vyear);
            documents[k].SROK_D_NAME=zeroadd(documents[k].dday)+"-"+zeroadd(documents[k].dmonth)+"-"+zeroadd(documents[k].dyear);
            }
            ;}

            //doc2[4]=0;
			//documents[4].scan=0;   
            documents[4].scan=0;   
			
			for(i=1;i<doc2.length;i++) if(doc2[i]==1) Reg7[18].options.add(new Option(famstring[i-1],i));
            if(Reg7[18].options.length==0) Reg7[18].options.add(new Option("Нет документов",-1));
         //   id_('formsend').innerHTML=FormSend();	 document.getElementsByName('login')[0].value=userlogin;document.getElementsByName('password')[0].value=userpass;
		//    drawfamilia4();
			radioclick();
			
			
			
            break;
        }
        
        
		case 14: {
            stream=decode64(mes);
			mClient.igra=readDouble(stream);
            N=mClient.balance;
			mClient.balance=readDouble(stream);
			//if(mClient.balance==-1&&N2==-1) break;
			//mClient.igra=N2;
			//if((N==0)&&(mClient.balance>0)&&(mClient.igra==0))webSocket.send("isbonusregistr");
            N=0;
			mClient.balance2=readDouble(stream);
            mClient.balance3=readDouble(stream);
            mClient.Bilet=readUnsignedInt(stream);
			//mClient.Bilet=1000000;
            mClient.login=readUTF(stream);
            if(loginstate==0) break;
            Unlogged.style.display="none";
            Logged.style.display="";
            Logged.childNodes[0].innerHTML=mClient.I;
            Logged.childNodes[1].innerHTML="("+mClient.login+")";
            Logged.childNodes[3].innerHTML=zeroinsert(mClient.igra,1);
            Logged.childNodes[5].innerHTML=zeroinsert(mClient.balance,1);
			if(iphone==1) {id_("android").style.display="none";id_("android").style.marginRight="445px";}
			
            if(mClient.balance3>0) {Logged.childNodes[7].innerHTML=zeroinsert(mClient.balance3,1);Logged.childNodes[6].innerHTML="Hold:";}
            else {Logged.childNodes[7].innerHTML="";Logged.childNodes[6].innerHTML="";}
            cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
			
			Msh2.innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
            
			drawloyal();
			if(window.location.href.indexOf("auth/plata")>-1) extractPlata(); else extractplatastate=1;
			if(window.location.href.indexOf("auth/mybonus")>-1) extractBonus(); else extractbonusstate=1;
			if(window.location.href.indexOf("auth/loyal")>-1) webSocket.send("history_loyal");;
			
            break;

        }
        
        case 17:{
           openstate=1;  		
		   console.log('step is 17');
		   //timerus=new Date().getTime();
           if(openstatesocket==1) initsocket();
		   timeinit=0;
		   
			mSamples.splice(0);
			
			stream=decompress(mes);
			readUnsignedInt(stream);
            i=0;
            while(stream.length>seek){
            mSamples[i]=new TSample();
            mSamples[i].ID_SAMPLE=readUnsignedShort(stream);
            mSamples[i].ID_TIP_EVENT=readUnsignedByte(stream);
            mSamples[i].MAX_PAY=readDouble(stream);
            mSamples[i].MAX_SUM=readDouble(stream);
            i++;}
			//recalculall(1);
			break;

        }
        
        case 6: {
            loginexit();
            break;
        }
        
		
        
		case 38: {
			rDate=new Date();
			rDate.setTime(parseInt(mes)*1000);
            rdif=rDate.getTime()-new Date().getTime();
			if(rDate.getUTCHours()<7) toNight(); else toDay();
			
			//console.log(rDate.getTime()-mdif*3600*60);
			if(ntvpop==0&&inithref.indexOf("sportbox")==-1&&(inithref.indexOf("?btag=")>-1||inithref.indexOf("utm_source=")>-1)&&rDate.getTime()-mdif*3600*60>1434142800000&&rDate.getTime()-mdif*3600*60<1434304800000) showWarningNtv();
			ntvpop++;
			
			
			break;
        }
        
        
		case 18:{
		
			mRospis.splice(0);
			if(EventRospisi==-1) break;	
			EventRospisi=parseInt(mes.substring(0,10));
			seek=0;
            stream=decompress(mes.slice(10));
	        j=readUnsignedInt(stream);
			i=0;
            
			/*
			mRospis.splice(0);
            stream=decompress(mes);
            if(EventRospisi==-1) break;
			j=readUnsignedInt(stream);
			i=0;*/
			
			
			
			while(stream.length>seek){
	        mRospis[i]=new Trospis();
			mRospis[i].ID_EVENT=EventRospisi;
			mRospis[i].ID_LINE=readUnsignedInt(stream);
			mRospis[i].ID_TIP_RADAR=readUnsignedShort(stream);
			readUnsignedShort(stream);
			N=readUnsignedShort(stream)/10000;
		    mRospis[i].FAVORIT=readUnsignedByte(stream);
            mRospis[i].KOEF=readUTF(stream);
            mRospis[i].KOL=readUnsignedInt(stream);
			//if(mRospis[i].ID_TIP_RADAR==380) console.log(mRospis[i].KOEF);
			W=new Array();
						
            for(j=0;j<28;j++) if(mRospis[i].KOL>j){ //mRospis[i].V[j]=readUnsignedInt(stream)/100;
			W[j]=readUnsignedInt(stream)/100;
		
		
			
			if(mRospis[i].ID_TIP_RADAR==21||mRospis[i].ID_TIP_RADAR==22||mRospis[i].ID_TIP_RADAR==23||mRospis[i].ID_TIP_RADAR==211||mRospis[i].ID_TIP_RADAR==215||mRospis[i].ID_TIP_RADAR==216||N==1) mRospis[i].V[j]=W[j]; else mRospis[i].V[j]=Math.round(100+(W[j]-100)*N);

			
if(mRospis[i].V[j]>1000) mRospis[i].V[j]=100*Math.floor(mRospis[i].V[j]/100);}

if((mRospis[i].ID_TIP_RADAR==46||mRospis[i].ID_TIP_RADAR==389||mRospis[i].ID_TIP_RADAR==397||mRospis[i].ID_TIP_RADAR==352||mRospis[i].ID_TIP_RADAR==215)&&N!=1) 
mardouble(mRospis[i]);
			i++;}; 

            
			
			plusrospisi(EventRospisi); 
            if(plusstring.length>0){rosclick_(grupp.length+1);lineclick1(plusstring,0);plusstring="";} 
            break;

        }
        
        case 16: {
            
			initpromostate=0;
			LIVE=0;
            stream=decompress(mes);
            mTip_Line= new Array();
            mCountry = new Array();
			region.LIVE=0;
			mChampionships = new Array();
            ChampionId=new Array();
            LineId=new Array();
            CountryId = new Array();
            SportId=new Array(); 
            tipLineId=new Array();
			tipLineId[0]=new Array();
			tipLineId[1]=new Array();
			mLines = new Array();
			EventId = new Array();
			mEvents = new Array();

            id_("SportMenu").innerHTML="";
            j=readUnsignedInt(stream);
            for(i=0;i<j;i++) { 
            l=readUnsignedInt(stream);
            k=readUnsignedInt(stream);
            if(k==0) k=j;
            
            mSport[i]=new Tsport(); 
			if(k<100) mSport[i].ID_SORT=k*100; else mSport[i].ID_SORT=k;
			
			if(l==110) {mSport[i].count=1;mSport[i].Rombo[0]=0;}
            //if(mSport[i].ID_SORT==0) mSport[i].ID_SORT=100;
            mSport[i].ID_SPORT=l;
			            
			mSport[i].TIP_TABLE=readUnsignedInt(stream);
            mSport[i].NAME_RUS=readUTF(stream);
            }
/*
            mSport[j]=new Tsport();
            mSport[j].ID_SORT=0;
            mSport[j].ID_SPORT=777;
            mSport[j].TIP_TABLE=1;
            mSport[j].NAME_RUS="Олимпиада 2012";
            mSport[j].count=0;

            j++;*/

            SortSport();
			
			
			k=0;
temp5=temp5+'<div class="sportnow"><img id="nowfav" style="float:left;margin-left:7px;margin-top:3px;" src="/resources/images/fv00.png?7"/><div class="nowname" style="margin-left:7px;">Избранное</div><div style="float:left;width:15px;height:17px;cursor:pointer;" onclick="nowclick('+k+',1111,0);"><img src="/resources/images/shapesport2.png?7" class="nowshape"/></div></div><div id="now1111" style="width:100%;float:left;background-color:#fff;"></div>';
nowarray[1111]=0;k++;

           // inner2='<img src="/resources/images/ten1.jpg" style="float:left;cursor:pointer;" onclick="try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/stavki/sport/tennis/atp/otkrytyj_chempionat_ssha/&quot;);} catch(e){window.location.hash=&quot/stavki/sport/tennis/atp/otkrytyj_chempionat_ssha/&quot;;};loadPage2(window.location.href);"/>';
            
			
			for(i=0;i<j;i++) {
		   if(mSport[i].ID_SPORT==23||mSport[i].ID_SPORT==22||mSport[i].ID_SPORT==31||mSport[i].ID_SPORT==20||mSport[i].ID_SPORT==34||mSport[i].ID_SPORT==19||mSport[i].ID_SPORT==5||mSport[i].ID_SPORT==2||mSport[i].ID_SPORT==3||mSport[i].ID_SPORT==16||mSport[i].ID_SPORT==1||mSport[i].ID_SPORT==4||mSport[i].ID_SPORT==6||mSport[i].ID_SPORT==29||mSport[i].ID_SPORT==12){
			  //console.log(mSport[i].ID_SPORT+mSport[i].NAME_RUS); 
		    temp5=temp5+'<div class="sportnow"><div class="nowico as'+mSport[i].ID_SPORT+'"></div><div class="nowname">'+mSport[i].NAME_RUS+'</div><div style="float:left;width:15px;height:17px;cursor:pointer;" onclick="nowclick('+k+','+mSport[i].ID_SPORT+',0);"><img src="/resources/images/shapesport2.png?7" class="nowshape"/></div></div><div id="now'+mSport[i].ID_SPORT+'" style="width:100%;float:left;background-color:#fff;"></div>';
nowarray[mSport[i].ID_SPORT]=0;k++;
		   }
				
			/////if(mSport[i].ID_SPORT==110)	temp5='<input class="liv2" type="image" src="/resources/images/new.png?7" style="display:none;"/>';
			//else 
			//temp5="";
			//if(mSport[i].ID_SPORT==110)
            inner2=inner2+'<div id="sport'+i+'" class="sport" style="display:none;"><div class="shap2"><input class="shap" type="image" src="/resources/images/shapesport1.png?7"/></div><div class="sport2">'+mSport[i].NAME_RUS+'</div><div class="livesport" >';
//if(mSport[i].ID_SPORT==110)inner2=inner2+'<input class="liv22" type="image" src="/resources/images/new.png?7"';else 
inner2=inner2+'<input class="liv2" type="image" src="/resources/images/live.png?7"';			
inner2=inner2+' style="display:none;"/></div></div><div class="sportid"></div>';
			
            if(mSport[i].ID_SPORT==1) inner2=inner2+'<div id="region" class="country"><div class="count2">'+region.NAME_RUS+'</div><div class="livesport"><input class="liv2" type="image" src="/resources/images/live.png?7" style="display:none;"></div></div><div class="countryid"></div>'
            }

            inner2=inner2+'<div id="sport999" class="sport" onclick="overclick();"><div class="shap2"><input class="shap" type="image" src="/resources/images/shapesport1.png?7"/></div><div class="sport2">... Другие виды спорта</div><div class="livesport" ><input class="liv2" type="image" src="/resources/images/live.png?7" style="display:none;"></div></div>';
			
			
            id_("SportMenu").innerHTML=inner2;
            id_("LIVENOW").innerHTML=temp5+'<div id="nowfinal" style="float:left;width:237px;display:none;height:25px;margin-top:2px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;color:#F47621;font-size:12px;font-weight:bold;text-decoration:underline;background-color:#383838;text-align:center;"><div style="margin-top:2px;cursor:pointer;" onclick="liveclick(1);">Показать весь LIVE</div></div>'+'<div id="nownow" style="float:left;width:237px;height:79px;margin-top:0px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;color:#878787;font-size:12px;font-weight:bold;background-color:#fff;"><div style="margin-top:11px;width:197px;margin-left:20px;">Ближайшие события в LIVE начнутся через:</div><div style="margin-top:5px;width:197px;font-size:16px;margin-left:20px;color:#F47621;" id="nowtime"></div></div>';
			  

            for(i=0;i<j;i++) {
            mSport[i].Display=id_("sport"+i);
            mSport[i].Display.nextSibling.style.display="none";
            mSport[i].Display.index=i;
            mSport[i].Display.onclick=SportClick;}


            region.Display=id_("region");
            region.Display.style.display="none";
            region.Display.nextSibling.style.display="none";
            region.Display.onclick=function(){RegionClick(1)};



            j=readUnsignedInt(stream);
            for(i=0;i<j;i++) { 
            mTip_Line[i]=new TTip_Line(); 
            mTip_Line[i].ID_TIP_RADAR=readUnsignedInt(stream);
			//console.log(mTip_Line[i].ID_TIP_RADAR);
			mTip_Line[i].SPORTS=readUTF(stream);
            mTip_Line[i].Live=readUnsignedInt(stream);
            tipLineId[mTip_Line[i].Live][mTip_Line[i].ID_TIP_RADAR]=i;
			mTip_Line[i].SORT=readUnsignedInt(stream);
            mTip_Line[i].ROS_FAV=readUnsignedInt(stream);
            mTip_Line[i].KOL_V=readUnsignedInt(stream);
            mTip_Line[i].KOL=readUnsignedInt(stream);
			
			
			//console.log("mTip_Line[i].KOL_V="+mTip_Line[i].KOL_V);
			//console.log("mTip_Line[i].KOL="+mTip_Line[i].KOL);
			
            mTip_Line[i].ID_TIP_EVENT=readUnsignedInt(stream);
			
//			console.log("mTip_Line[i].ID_TIP_RADAR="+mTip_Line[i].ID_TIP_RADAR);
//			console.log("mTip_Line[i].ID_TIP_EVENT="+mTip_Line[i].ID_TIP_EVENT);
			//if((mTip_Line[i].Live==0)&&((mTip_Line[i].ID_TIP_RADAR==215)||(mTip_Line[i].ID_TIP_RADAR==46))) console.log(mTip_Line[i].ID_TIP_EVENT);
            //if((mTip_Line[i].Live==1)&&(mTip_Line[i].ID_TIP_RADAR==27)) console.log(mTip_Line[i].ID_TIP_EVENT);
            mTip_Line[i].ID_TIP_SAMPLE=readUnsignedInt(stream);
            mTip_Line[i].FREE_TEXT_R=readUTF(stream).replace("@х","@x");
            for(k=0;k<28;k++){mTip_Line[i].R[k]=readUTF(stream);}
            ;}

            j=readUnsignedInt(stream);
            for(i=0;i<j;i++){readUnsignedInt(stream);readUTF(stream);}
            j=readUnsignedInt(stream);
            for(i=0;i<j;i++){
            l=readUnsignedInt(stream);
            mTVindex[i]=l;
            mTV[l]=readUTF(stream);
            }
            					
            break;
        }
        
        case 2: {
            Session=parseInt(mes);
            break;

        }
        
        case 1:{
            ttt=0;
            webSocket.send("menu");webSocket.send("data");
            break;}
			
			
			
        
        case 3: {
			//if(ttt>3) return;	
			//timerus=new Date().getTime();
			
            //if (ttt == 0) timerus = new Date().getTime();

			if(ttt3==1&&step2==null) {ttt3=2;
			j=0;
			for(i=0;i<mLines.length;i++){if(mEvents[EventId[mLines[i].ID_EVENT]].Live==1) {col[j]=mLines[i];LineId[mLines[i].ID_LINE]=j; j++;}
			else mEvents[EventId[mLines[i].ID_EVENT]].mlines.splice(0);
			}
			mLines=new Array();
			mLines=col;
						
			ttt=0;
			} 
			
			//console.log("step3start="+(new Date().getTime()-timerus));
            seek=mes.length-1;
						
            LastIndex=readUnsignedByte(mes);

			stream=decompress(mes.slice(0,-1));

            seek=16;
           

            while(stream.length>seek){
			//var tut=0; tut=readUnsignedByte(stream);id_("login").value=tut;	
			
			//var sss=readUnsignedByte(stream);
			switch(readUnsignedByte(stream)){
            
			case 1:
			lastblock=1;
			if(ttt3==2) {seek=seek+8;readUTF(stream);seek=seek+9;break;}
            temp=readUnsignedInt(stream);
			if((ttt>0)&&(langmod2==0)){for(i=0;i<mCountry.length;i++) {if(mCountry[i].ID_COUNTRY==temp) break;}
            if(i==mCountry.length){ mCountry[i]=new TCountry(); mCountry[i].ID_COUNTRY=temp;
			if(mCountry[i].ID_COUNTRY==800){mCountry[i+1]=new TCountry();mCountry[i+1].ID_COUNTRY=801;mCountry[i+1].NAME_RUS="Сезон 999999"; mCountry[i+1].Index=i+1;};};}
            else{i=mCountry.length;mCountry[i]=new TCountry(); mCountry[i].ID_COUNTRY=temp;if(mCountry[i].ID_COUNTRY==800) {mCountry[i+1]=new TCountry(); mCountry[i+1].ID_COUNTRY=801;mCountry[i+1].Index=i+1;mCountry[i+1].NAME_RUS="Сезон 999999";};};
            
			mCountry[i].IS_REGION=readUnsignedInt(stream);
            mCountry[i].NAME_RUS=readUTF(stream);
			//console.log("mCountry[i].NAME_RUS="+mCountry[i].NAME_RUS);
            readUnsignedInt(stream);
			readUnsignedByte(stream);
			readUnsignedShort(stream);
			readUnsignedShort(stream);

			
			//console.log(mCountry[i].NAME_RUS+" "+mCountry[i].ID_COUNTRY);
			
			if(mCountry[i].ID_COUNTRY==800) mCountry[i].NAME_RUS="Сезон 999998";
            mCountry[i].Index=i;
			CountryId[mCountry[i].ID_COUNTRY]=i;
            if(champlongstate==1) champlong(mCountry[i]);
			break;
			


			    case 2:
			lastblock=2;
            temp=readUnsignedInt(stream);
			LastChampionship=temp;
			if(ttt3==2) {seek=seek+8;readUTF(stream);seek=seek+21;break;}
			
            
            if (ttt==0 || ChampionId[temp] == null || mChampionships[ChampionId[temp]] == null) { ss = 0; i = mChampionships.length; mChampionships[i] = new TChampionships(); mChampionships[i].ID_CHAMPIONSHIP = temp; } else { ss = 1; i = ChampionId[temp]; }


            if (ttt > 5) champcookie2(mChampionships[i]);
            if (ss == 0) {

                mChampionships[i].ID_SPORT = readUnsignedInt(stream);
                mChampionships[i].ID_COUNTRY = readUnsignedInt(stream);
                
            } else {
                readUnsignedInt(stream);
                readUnsignedInt(stream);
               
            }

            mChampionships[i].NAME_RUS = readUTF(stream);
            mChampionships[i].ID_SORT = readInt(stream);
            mChampionships[i].ID_SAMPLE = readUnsignedInt(stream);
            mChampionships[i].TIP_CHAMPIONSHIP = readUnsignedInt(stream);
			readUnsignedByte(stream);
			readInt(stream);
			readUnsignedInt(stream);
			if (ss == 0 ) if(SetChampionNameCountry(i) == 0) break;

			
			mChampionships[i].Index = i;


            mChampionships[i].stringlive='<div name="ChampnameLive'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
            '<div class="cham2" title="'+lbarray[mChampionships[i].lb2]+'" onClick="lb2Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
            '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb2)+'px;margin-top:'+(5-2*mChampionships[i].lb2)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb2)+'.png?7"/></div>'+
            '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav2+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickcl('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
            '<div class="cham7"></div><div class="cham3">'+mChampionships[i].Logo11+'</div>';
            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].stringlive=mChampionships[i].stringlive+
            '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
            mChampionships[i].stringlive=mChampionships[i].stringlive+'</div>';
            ChampionId[mChampionships[i].ID_CHAMPIONSHIP]=i;
            

            mChampionships[i].string='<div name="Champname'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
            '<div class="cham2" title="'+lbarray[mChampionships[i].lb1]+'" onClick="lb1Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
            '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb1)+'px;margin-top:'+(5-2*mChampionships[i].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb1)+'.png?7"/></div>'+
            '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
            '<div class="cham4">'+mChampionships[i].Logo11+'</div>';
            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].string=mChampionships[i].string+
            '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
            mChampionships[i].string=mChampionships[i].string+'<div class="cham6"></div></div>';

            //NewSport.push(mChampionships[i].ID_SPORT);
            championSort=1;
            //recalculall3(mChampionships[i].ID_CHAMPIONSHIP);
            break;

            case 21:
			lastblock=21;
            temp=readUnsignedInt(stream);
            i = ChampionId[temp];
            if (i == null || mChampionships[ChampionId[i]] == null) { readInt(stream); readUTF(stream); readUnsignedByte(stream); readInt(stream); readInt(stream); break; }

            mChampionships[i].ID_SORT = readInt(stream);
            mChampionships[i].NAME_RUS=readUTF(stream);
			readUnsignedByte(stream);
			readInt(stream);
			readInt(stream);
            mChampionships[i].Index=i;

            mChampionships[i].stringlive='<div name="ChampnameLive'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
            '<div class="cham2" title="'+lbarray[mChampionships[i].lb2]+'" onClick="lb2Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
            '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb2)+'px;margin-top:'+(5-2*mChampionships[i].lb2)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb2)+'.png?7"/></div>'+
            '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav2+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickcl('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
            '<div class="cham7"></div><div class="cham3">'+mChampionships[i].Logo11+'</div>';
            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].stringlive=mChampionships[i].stringlive+
            '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
            mChampionships[i].stringlive=mChampionships[i].stringlive+'</div>';


            mChampionships[i].string='<div name="Champname'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
            '<div class="cham2" title="'+lbarray[mChampionships[i].lb1]+'" onClick="lb1Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
            '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb1)+'px;margin-top:'+(5-2*mChampionships[i].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb1)+'.png?7"/></div>'+
            '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
            '<div class="cham4">'+mChampionships[i].Logo11+'</div>';
            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].string=mChampionships[i].string+
            '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
            mChampionships[i].string=mChampionships[i].string+'<div class="cham6"></div></div>';
             ChampionId[mChampionships[i].ID_CHAMPIONSHIP]=i;


            //NewChampion.push(mChampionships[i].ID_CHAMPIONSHIP);
            championSort=1;
            break;


            case 3:
            lastblock=3;
            temp=readUnsignedInt(stream);
            LastEvents=temp;
			
			if(ttt3==2) {seek=seek+4;if(temp>=1000000000) seek=seek+6;readUTF(stream);seek=seek+6;readUTF(stream);readUTF(stream);break;}
				
			//if(ttt3==2) ttt=100;
						
        /*    if(ttt>0){for(i=0;i<mEvents.length;i++) {if(mEvents[i].ID_EVENT==temp) break;}
            if(i==mEvents.length){count=1;mEvents[i]=new TEvents(); mEvents[i].ID_EVENT=temp;} else count=0;}
            else{i=mEvents.length;mEvents[i]=new TEvents();mEvents[i].ID_EVENT=temp;count=1;};*/

			if (ttt == 0 || EventId[temp] == null || mEvents[EventId[temp]] == null) { i = mEvents.length; count = 1; mEvents[i] = new TEvents(); mEvents[i].ID_EVENT = temp; } else { i = EventId[temp]; count = 0; }


            if (temp >= 1000000000) mEvents[i].ID_RADAR = readUnsignedInt(stream); else mEvents[i].ID_RADAR = temp;
            mEvents[i].ID_LIVE=readUnsignedByte(stream);
            mEvents[i].ID_SAMPLE=readUnsignedByte(stream);
            readUnsignedShort(stream);
            mEvents[i].TV=extv(readUTF(stream));
            mEvents[i].ID_CHAMPIONSHIP=LastChampionship;
            mEvents[i].DATE_EVENT.setTime(readUnsignedInt(stream)*1000+29999);
            mEvents[i].CountAdd2=readUnsignedByte(stream);
			mEvents[i].DURATION=readUnsignedByte(stream);
			mEvents[i].UCHASTNIK1=readUTF(stream);
            mEvents[i].UCHASTNIK2=readUTF(stream);
			mEvents[i].Live=0;

			if(SetTableEvents(i)==0) break;
			if(ttt>0){
			if(count==1) {NewEvent.push(mEvents[i].ID_EVENT);NewChampion.push(mEvents[i].ID_CHAMPIONSHIP);addpromo(mEvents[i],1);}
			else ChangeEvent.push(mEvents[i].ID_EVENT);}
            EventId[mEvents[i].ID_EVENT]=i;

if(count==1){
if((ttt>5)&&(mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav1==1||stareventid[mEvents[i].ID_EVENT]==1)){mEvents[i].fav=1;cookierefresh=1;mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit++;}
mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count++;
mCountry[CountryId[mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].ID_COUNTRY]].count++;
if(mEvents[i].fav==1){mCountry[CountryId[mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].ID_COUNTRY]].favorit++;mSport[SportId[mEvents[i].ID_SPORT]].favorit++;}
mSport[SportId[mEvents[i].ID_SPORT]].count++;
eventSort=1;
}
            break;
			
			case 31:
			lastblock=31;
			temp = readUnsignedInt(stream);
			if (EventId[temp] != null && mEvents[EventId[temp]] != null) {
			    i = EventId[temp];
			    mEvents[i].DATE_EVENT.setTime(readUnsignedInt(stream) * 1000 + 29999);
			    ChangeEvent.push(mEvents[i].ID_EVENT);
			    eventSort = 1;
			} else { readUnsignedInt(stream); console.log("степ 31 несуществующий эвент=" + temp); }
			break;

            case 32:
			lastblock=32;
            temp=readUnsignedInt(stream);
            if (EventId[temp] != null && mEvents[EventId[temp]] != null) {
                i = EventId[temp];
             NewChampion.push(mEvents[i].ID_CHAMPIONSHIP);
			//DeleteEvent.push(mEvents[i].ID_EVENT);
            if(temp==EventRospisi) history.back();
			mCountry[CountryId[mEvents[i].ID_COUNTRY]].count--;
			mSport[SportId[mEvents[i].ID_SPORT]].count--;
			mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count--;
			if(mEvents[i].fav==1){mCountry[CountryId[mEvents[i].ID_COUNTRY]].favorit--;mSport[SportId[mEvents[i].ID_SPORT]].favorit--;mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit--;}
            deleteEventTime(mEvents[i]);
            for(j=i+1;j<mEvents.length;j++) EventId[mEvents[j].ID_EVENT]=j-1;

            stateexpress(mEvents[i].ID_EVENT);
            addpromo(mEvents[i],0);
			//DeleteEvent.push(mEvents[i].ID_EVENT);
            EventId[mEvents[i].ID_EVENT]=null;
            
			
			//for(i=0;i<mEvents.length;i++) if(mEvents[i].ID_EVENT==6060822) console.log(mEvents[i].mlines.length);
			
			mEvents.splice(i,1);
			j = 0;
			for (i = 0; i < mLines.length; i++) if (mLines[i].ID_EVENT == temp) { mLines[i] = null; j = 1; mLines.splice(i, 1); i--; }
			if (j == 1) { LineId = new Array(); for (i = 0; i < mLines.length; i++) LineId[mLines[i].ID_LINE] = i; }
            }
            break;


            case 33:
			lastblock=33;
			temp = readUnsignedInt(stream);
			if (EventId[temp] != null && mEvents[EventId[temp]] != null) {
			    i = EventId[temp];
			    mEvents[i].CountAdd2 = readUnsignedByte(stream);
			    mEvents[i].DURATION = readUnsignedByte(stream);
			    mEvents[i].Live = 0;
			    ChangeEvent.push(mEvents[i].ID_EVENT);
			} else { readUnsignedByte(stream); readUnsignedByte(stream); console.log("степ 33 несушествующий эвент=" + temp); }
			break;
			
			case 34:
			lastblock=34;
			temp = readUnsignedInt(stream);
			if (EventId[temp] != null && mEvents[EventId[temp]] != null) { i = EventId[temp]; count = 0; }
			else { i = mEvents.length; mEvents[i] = new TEvents(); mEvents[i].ID_EVENT = temp; count = 1; }
            if(temp>=1000000000) mEvents[i].ID_RADAR=readUnsignedInt(stream);else mEvents[i].ID_RADAR=temp;
            mEvents[i].ID_LIVE=readUnsignedByte(stream);
            mEvents[i].ID_SAMPLE=readUnsignedByte(stream);
            readUnsignedShort(stream);
            mEvents[i].TV=extv(readUTF(stream));
            mEvents[i].ID_CHAMPIONSHIP=readUnsignedInt(stream);
            mEvents[i].DATE_EVENT.setTime(readUnsignedInt(stream)*1000+29999);
            mEvents[i].CountAdd2=readUnsignedByte(stream);
			mEvents[i].DURATION=readUnsignedByte(stream);
            mEvents[i].UCHASTNIK1=readUTF(stream);
            mEvents[i].UCHASTNIK2=readUTF(stream);
            mEvents[i].Live=0;
            mEvents[i].State=0;
            if(SetTableEvents(i)==0) break;
            EventId[mEvents[i].ID_EVENT]=i;
            if(count==1) {NewEvent.push(mEvents[i].ID_EVENT);NewChampion.push(mEvents[i].ID_CHAMPIONSHIP);addpromo(mEvents[i],1);}
			else ChangeEvent.push(mEvents[i].ID_EVENT);
if(count==1){
if((ttt>5)&&(mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav1==1||stareventid[mEvents[i].ID_EVENT]==1)){mEvents[i].fav=1;cookierefresh=1;mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit++;}
mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count++;
mCountry[CountryId[mEvents[i].ID_COUNTRY]].count++
mSport[SportId[mEvents[i].ID_SPORT]].count++;
if(mEvents[i].fav==1) {mCountry[CountryId[mEvents[i].ID_COUNTRY]].favorit++;mSport[SportId[mEvents[i].ID_SPORT]].favorit++;}
eventSort=1;}

            break;


            case 4:
			lastblock=4;
            temp=readUnsignedInt(stream);
            if (ttt > 0 && LineId[temp] != null && mLines[LineId[temp]] != null) i = LineId[temp];
            else { i = mLines.length; mLines[i] = new TLines(); LineId[temp] = i; mLines[i].ID_LINE = temp; }
            mLines[i].ID_EVENT=LastEvents;
			if(EventId[mLines[i].ID_EVENT]==null||!mEvents[EventId[mLines[i].ID_EVENT]]) {ss=1;console.log("case 3 block 4:ID_LINE="+mLines[i].ID_LINE+"ID_EVENT="+mLines[i].ID_EVENT);} else{ ss=0;
			if(ttt>0){
		    for(j=0;j<mEvents[EventId[mLines[i].ID_EVENT]].mlines.length;j++) if(temp==mEvents[EventId[mLines[i].ID_EVENT]].mlines[j]) break;
		    //catch(e){console.log("case 4:ID_LINE="+mLines[i].ID_LINE+"ID_EVENT="+mLines[i].ID_EVENT);}
			if(j==mEvents[EventId[mLines[i].ID_EVENT]].mlines.length) mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);}
            else mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);}
			
            mLines[i].ID_TIP_RADAR=readUnsignedShort(stream);
			//console.log("1mLines[i].ID_TIP_RADAR="+mLines[i].ID_TIP_RADAR+"mLines[i].ID_LINE="+mLines[i].ID_LINE);
			readUnsignedShort(stream); 	
			
			N=readUnsignedShort(stream)/10000;
						
			j=tipLineId[0][mLines[i].ID_TIP_RADAR];
			if((mTip_Line[j].ID_TIP_EVENT==3)||(mTip_Line[j].ID_TIP_EVENT==6))                                                                       
            mLines[i].FAVORIT=readUnsignedByte(stream);
            if((mTip_Line[j].ID_TIP_EVENT==3)||(mTip_Line[j].ID_TIP_EVENT==6)||(mTip_Line[j].ID_TIP_EVENT==4)||(mTip_Line[j].ID_TIP_EVENT==7)) mLines[i].KOEF=""+readUnsignedShort(stream)/100;
            //N2=0;
			W=new Array();
			
			for(k=0;k<3;k++){if((k==2)&&(mTip_Line[j].ID_TIP_EVENT!=2)&&(mTip_Line[j].ID_TIP_EVENT!=5)&&(mTip_Line[j].ID_TIP_EVENT!=101)) continue;
			W[k]=readUnsignedShort(stream);
			
			if(mTip_Line[j].ID_TIP_RADAR==21||mTip_Line[j].ID_TIP_RADAR==22||mTip_Line[j].ID_TIP_RADAR==23||mTip_Line[j].ID_TIP_RADAR==211||mTip_Line[j].ID_TIP_RADAR==215||mTip_Line[j].ID_TIP_RADAR==216||N==1) W[k]=W[k]; else W[k]=Math.round(100+(W[k]-100)*N);
		
			if((mLines[i].V[k])&&(euroline==0)&&(ttt>0)){			
			if(W[k]>mLines[i].V[k]) {LastLine.push(mLines[i].ID_LINE);LastLine.push(k);LastLine.push(1);mLines[i].D[k]=1;}
			if(W[k]<mLines[i].V[k]) {LastLine.push(mLines[i].ID_LINE);LastLine.push(k);LastLine.push(2);mLines[i].D[k]=2;}}
			mLines[i].V[k]=W[k];if(mLines[i].V[k]>1000) mLines[i].V[k]=100*Math.floor(mLines[i].V[k]/100);}
    		
			if(mTip_Line[j].ID_TIP_EVENT==101&&N!=1) mardouble(mLines[i]);
			if(ss==0){
            ChangeEvent.push(mLines[i].ID_EVENT);
			DIF(mLines[i]);
			stateexpress2(mLines[i].ID_LINE,0);}
			else mLines.pop();
			//console.log("stream.length="+(stream.length-seek)); console.log(mLines[i].ID_LINE);
            break;



            
			case 41:
			lastblock=41;
			temp = readUnsignedInt(stream);
		    if (LineId[temp] != null && mLines[LineId[temp]] != null) {
			    i = LineId[temp];
			    W = new Array();
			    j = tipLineId[0][mLines[i].ID_TIP_RADAR];
			   for (k = 0; k < 3; k++) {
			        if ((k == 2) && (mTip_Line[j].ID_TIP_EVENT != 2) && (mTip_Line[j].ID_TIP_EVENT != 5) && (mTip_Line[j].ID_TIP_EVENT != 101)) continue;
			        W[k] = readUnsignedShort(stream);

			        if ((mLines[i].V[k]) && (euroline == 0) && (ttt > 0)) {
			            if (W[k] > mLines[i].V[k]) { LastLine.push(mLines[i].ID_LINE); LastLine.push(k); LastLine.push(1); mLines[i].D[k] = 1; }
			            if (W[k] < mLines[i].V[k]) { LastLine.push(mLines[i].ID_LINE); LastLine.push(k); LastLine.push(2); mLines[i].D[k] = 2; }
			        } mLines[i].V[k] = W[k]; if (mLines[i].V[k] > 1000) mLines[i].V[k] = 100 * Math.floor(mLines[i].V[k] / 100);
			    }
			    if (mTip_Line[j].ID_TIP_EVENT == 101 && N != 1) mardouble(mLines[i])
			    ChangeEvent.push(mLines[i].ID_EVENT);
			    DIF(mLines[i]);
			} else { readUnsignedShort(stream); readUnsignedShort(stream); readUnsignedShort(stream); console.log("несушествующая линия блок 41" + temp); }

            break;

            case 42:
            lastblock=42;
            temp=readUnsignedInt(stream);
            if (LineId[temp] != null && mLines[LineId[temp]] != null) {
                i = LineId[temp];
                ChangeEvent.push(mLines[i].ID_EVENT);
                stateexpress2(mLines[i].ID_LINE, 1);
                for (j = 0; j < mEvents[EventId[mLines[i].ID_EVENT]].mlines.length; j++) if (mEvents[EventId[mLines[i].ID_EVENT]].mlines[j] == mLines[i].ID_LINE) { mEvents[EventId[mLines[i].ID_EVENT]].mlines[j] = null; mEvents[EventId[mLines[i].ID_EVENT]].mlines.splice(j, 1); break; }
                for (j = i + 1; j < mLines.length; j++) LineId[mLines[j].ID_LINE] = j - 1; mLines[i] = null; mLines.splice(i, 1);
            }
            break;

    case 43:lastblock=43;
            temp=readUnsignedInt(stream);
            temp2=readUnsignedInt(stream);
			ss=0;
			if((!EventId[temp2]&&EventId[temp2]!=0)||!mEvents[EventId[temp2]]) ss=1;
			
			for(i=0;i<mLines.length;i++) {if(mLines[i].ID_LINE==temp) break;}
			if(i==mLines.length){ mLines[i]=new TLines();LineId[temp]=i; mLines[i].ID_LINE=temp;}
			mLines[i].ID_EVENT=temp2;

if(ss==0){
			try{
			if(ttt>0){
			for(j=0;j<mEvents[EventId[mLines[i].ID_EVENT]].mlines.length;j++) if(temp==mEvents[EventId[mLines[i].ID_EVENT]].mlines[j]) break;
			if(j==mEvents[EventId[mLines[i].ID_EVENT]].mlines.length) mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);}
            else mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);
			}
			catch(e){console.log("case 3 block 43:ID_LINE="+mLines[i].ID_LINE+"ID_EVENT="+mLines[i].ID_EVENT);}}


            mLines[i].ID_TIP_RADAR=readUnsignedShort(stream);//readUnsignedByte(stream);
			//console.log("2mLines[i].ID_TIP_RADAR="+mLines[i].ID_TIP_RADAR);
			readUnsignedShort(stream);
			N=readUnsignedShort(stream)/10000;
			j=tipLineId[0][mLines[i].ID_TIP_RADAR];
            if((mTip_Line[j].ID_TIP_EVENT==3)||(mTip_Line[j].ID_TIP_EVENT==6))                                                                       
            mLines[i].FAVORIT=readUnsignedByte(stream);
            if((mTip_Line[j].ID_TIP_EVENT==3)||(mTip_Line[j].ID_TIP_EVENT==6)||(mTip_Line[j].ID_TIP_EVENT==4)||(mTip_Line[j].ID_TIP_EVENT==7)) mLines[i].KOEF=""+readUnsignedShort(stream)/100;

            W=new Array();
			for(k=0;k<3;k++){if((k==2)&&(mTip_Line[j].ID_TIP_EVENT!=2)&&(mTip_Line[j].ID_TIP_EVENT!=5)&&(mTip_Line[j].ID_TIP_EVENT!=101))            continue;
			W[k]=readUnsignedShort(stream);
			if(mTip_Line[j].ID_TIP_RADAR==21||mTip_Line[j].ID_TIP_RADAR==22||mTip_Line[j].ID_TIP_RADAR==23||mTip_Line[j].ID_TIP_RADAR==211||mTip_Line[j].ID_TIP_RADAR==215||mTip_Line[j].ID_TIP_RADAR==216||N==1) W[k]=W[k]; else W[k]=Math.round(100+(W[k]-100)*N);
		
			if((mLines[i].V[k])&&(euroline==0)&&(ttt>0)){			
			if(W[k]>mLines[i].V[k]) {LastLine.push(mLines[i].ID_LINE);LastLine.push(k);LastLine.push(1);mLines[i].D[k]=1;}
			if(W[k]<mLines[i].V[k]) {LastLine.push(mLines[i].ID_LINE);LastLine.push(k);LastLine.push(2);mLines[i].D[k]=2;}
			}mLines[i].V[k]=W[k];if(mLines[i].V[k]>1000) mLines[i].V[k]=100*Math.floor(mLines[i].V[k]/100);}
    		
			if(mTip_Line[j].ID_TIP_EVENT==101&&N!=1) mardouble(mLines[i]);
        				
            if(ss==0){ChangeEvent.push(mLines[i].ID_EVENT);
            DIF(mLines[i]);
			stateexpress2(mLines[i].ID_LINE,0);
			}
			if(ss==1)mLines.pop();
            break;};}

            if(countrySort==0) SortCountry();
            if(championSort==1)SortChampion();
            if(eventSort==1) SortEvent();
		    Refresh(step);
			break;}

case 120: 
for(i=0;i<mLines.length;i++){
if(mEvents[EventId[mLines[i].ID_EVENT]].Live==1&&mLines[i].ID_EVENT<1000000000) 
{mLines.splice(i,1);i--;}}

LineId=new Array();
for(i=0;i<mLines.length;i++) LineId[mLines[i].ID_LINE]=i;


for(i=0;i<mEvents.length;i++) if(mEvents[i].Live==1&&mEvents[i].ID_EVENT<1000000000) {
         try{ addpromo(mEvents[i],0);
            mCountry[CountryId[mEvents[i].ID_COUNTRY]].count--;
			mSport[SportId[mEvents[i].ID_SPORT]].count--;
			mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count--;
            mCountry[CountryId[mEvents[i].ID_COUNTRY]].LIVE--;
			mSport[SportId[mEvents[i].ID_SPORT]].LIVE--;
			mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].LIVE--; 
			if(mEvents[i].ID_SPORT==1&&mCountry[CountryId[mEvents[i].ID_COUNTRY]].IS_REGION==0)region.LIVE--;
			deleteEventTime(mEvents[i]);}catch(e){console.log("ошибка в удалении лайфа");}
			//EventId[mEvents[i].ID_EVENT]=null;
			
			mEvents.splice(i,1);
			i--; }

EventId=new Array();
for(i=0;i<mEvents.length;i++) EventId[mEvents[i].ID_EVENT]=i;			
			
			//SortEvent();
//LIVE=0;			
break;
		
		case 4:
		case 64:{ //break;
			
						
			//timerus=new Date().getTime();			
			if(step==64) vflbegin=1;
		     
			stream=decompress(mes);
			seek=12;
			
			while(stream.length>seek){
			    switch(readUnsignedByte(stream)){
			
				
			        case 2:
			            lastblock=2;
			            temp=readUnsignedInt(stream);
			            LastChampionship=temp;
			            // if(ChampionId[temp]==null){i=mChampionships.length; mChampionships[i]=new TChampionships(); mChampionships[i].ID_CHAMPIONSHIP=temp;}
			            //	else i=ChampionId[temp];
			
			            
			            if (ChampionId[temp] == null || mChampionships[ChampionId[temp]] == null) { ss = 0; i = mChampionships.length; mChampionships[i] = new TChampionships(); mChampionships[i].ID_CHAMPIONSHIP = temp; } else { ss = 1; i = ChampionId[temp];}
			
			            if(ttt>5)champcookie2(mChampionships[i]);
			            if (ss == 0) mChampionships[i].ID_SPORT = readUnsignedInt(stream); else readUnsignedInt(stream);
			            mChampionships[i].ID_SORT=readInt(stream);
			            if (ss == 0) mChampionships[i].ID_COUNTRY = readUnsignedInt(stream); else readUnsignedInt(stream);
			            mChampionships[i].NAME_RUS = readUTF(stream);

			            readUnsignedByte(stream);
			            readInt(stream);
			            readUnsignedInt(stream);

			            //console.log("3"+mChampionships[i].NAME_RUS);
			            if(step==64){			

			                if(mChampionships[i].NAME_RUS.indexOf(mCountry[vfl_c1].NAME_RUS.replace(" ",":"))==-1&&mChampionships[i].NAME_RUS.indexOf(mCountry[vfl_c2].NAME_RUS.replace(" ",":"))==-1)
			                {

			                    if(parseInt(mCountry[vfl_c1].NAME_RUS.replace("Сезон ",""))+1==parseInt(mChampionships[i].NAME_RUS.split(" ")[1].replace("Сезон:","")))
			                    {mCountry[vfl_c2].NAME_RUS=mChampionships[i].NAME_RUS.split(" ")[1].replace(":"," ");
			                        //console.log("vfl_c2="+vfl_c2+"mCountry[vfl_c2].NAME_RUS="+mCountry[vfl_c2].NAME_RUS)
			                        //if(id_("country"+vfl_c2)) id_("country"+vfl_c2).childNodes[0].innerHTML=mCountry[vfl_c2].NAME_RUS;
			                    }

			                    else {mCountry[vfl_c1].NAME_RUS=mChampionships[i].NAME_RUS.split(" ")[1].replace(":"," ");;
			                        //console.log("vfl_c1="+vfl_c1+"mCountry[vfl_c1].NAME_RUS="+mCountry[vfl_c1].NAME_RUS)
			                        //if(id_("country"+vfl_c1)) id_("country"+vfl_c1).childNodes[0].innerHTML=mCountry[vfl_c1].NAME_RUS;
			                    }

			                }
			                if(mChampionships[i].NAME_RUS.indexOf(mCountry[vfl_c2].NAME_RUS.replace(" ",":"))>-1) mChampionships[i].ID_COUNTRY=801;

			            }
			
			            //console.log(mChampionships[i].NAME_RUS);
			            mChampionships[i].Index=i;
            
			            if (ss == 0) if (SetChampionNameCountry(i) == 0) break;


			            mChampionships[i].stringlive='<div name="ChampnameLive'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
                        '<div class="cham2" title="'+lbarray[mChampionships[i].lb2]+'" onClick="lb2Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
                        '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb2)+'px;margin-top:'+(5-2*mChampionships[i].lb2)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb2)+'.png?7"/></div>'+
                        '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav2+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickcl('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
                        '<div class="cham7"></div><div class="cham3">'+mChampionships[i].Logo11+'</div>';
			            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].stringlive=mChampionships[i].stringlive+
                        '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
			            mChampionships[i].stringlive=mChampionships[i].stringlive+'</div>';

			            mChampionships[i].string='<div name="Champname'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
                        '<div class="cham2" title="'+lbarray[mChampionships[i].lb1]+'" onClick="lb1Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
                        '<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb1)+'px;margin-top:'+(5-2*mChampionships[i].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb1)+'.png?7"/></div>'+
                        '<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+mChampionships[i].ID_CHAMPIONSHIP+')"></div>'+
                        '<div class="cham4">'+mChampionships[i].Logo11+'</div>';
			            if(mChampionships[i].ID_CHAMPIONSHIP<1000000000) mChampionships[i].string=mChampionships[i].string+
                        '<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+mChampionships[i].ID_CHAMPIONSHIP+'" target="_blank"><div class="cham5"></div></a>';
			            mChampionships[i].string=mChampionships[i].string+'<div class="cham6"></div></div>';


			            ChampionId[mChampionships[i].ID_CHAMPIONSHIP]=i;
			            //NewSport.push(mChampionships[i].ID_SPORT);
			            championSort=1;
			            break;
         
		 

            
			        case 3:
			            lastblock = 3;
			            newlive = 1;
			            if (LIVE == 0) LIVE = 1;
			            temp = readUnsignedInt(stream);
			            l = readUnsignedInt(stream);
			            ss = readUnsignedByte(stream);
			            temp4 = readUTF(stream);
			            p = readUnsignedShort(stream);
			            m = readUnsignedByte(stream);
			            temp2 = readUnsignedInt(stream);
			            if (temp2 > 2) {
			                if (EventId[temp] != null && mEvents[EventId[temp]] != null) {
			                    i = EventId[temp];
			                    addpromo(mEvents[i], 0);
			                    //if(temp==LastFrontLive) history.back();
			                    //if(mEvents[i].ID_EVENT>1000000000) console.log("блок 3 пришло удаление="+mEvents[i].ID_EVENT);
			                    mCountry[CountryId[mEvents[i].ID_COUNTRY]].count--;
			                    mSport[SportId[mEvents[i].ID_SPORT]].count--;
			                    mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count--;
			                    if (mEvents[i].fav == 1) { mCountry[CountryId[mEvents[i].ID_COUNTRY]].favorit--; mSport[SportId[mEvents[i].ID_SPORT]].favorit--; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit--; }
			                    if (step == 4) { mCountry[CountryId[mEvents[i].ID_COUNTRY]].LIVE--; mSport[SportId[mEvents[i].ID_SPORT]].LIVE--; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].LIVE--; if (mEvents[i].ID_SPORT == 1 && mCountry[CountryId[mEvents[i].ID_COUNTRY]].IS_REGION == 0) region.LIVE--; }

			                    deleteEventTime(mEvents[i]);
			                    stateexpress(mEvents[i].ID_EVENT);
			                    if (mEvents[i].clock_stopped > 0) countvideo--;
			                    NewChampion.push(mEvents[i].ID_CHAMPIONSHIP);
			                    if (step == 4) nowevent = 1;

			                    /*for (k = 0; k < mLines.length; k++) if (mLines[k].ID_EVENT == temp) { for (j = k + 1; j < mLines.length; j++) LineId[mLines[j].ID_LINE] = j - 1; mLines[k] = null; mLines.splice(k, 1); k--; }*/


			                    j = 0;
			                    for (k = 0; k < mLines.length; k++) if (mLines[k].ID_EVENT == temp) { mLines[k] = null; j = 1; mLines.splice(k, 1); k--; }
			                    if (j == 1) { LineId = new Array(); for (k = 0; k < mLines.length; k++) LineId[mLines[k].ID_LINE] = k; }

			                    mEvents[i].mlines.splice(0);
			                    if ((mEvents[i].ID_EVENT == LastFrontLive) && ((Plus.style.display != "none") || (Pluslarge.style.display != "none"))) pluslive(LastFrontLive);
			                    for (j = i + 1; j < mEvents.length; j++) EventId[mEvents[j].ID_EVENT] = j - 1;
			                    EventId[mEvents[i].ID_EVENT] = null;
			                    mEvents.splice(i, 1);

			                } //else console.log("удаление несуществующего события с ид = " + temp);
			                break;
			            }



			            if (LIVE != 1 && EventId[temp] != null && mEvents[EventId[temp]] != null) { i = EventId[temp]; count = 0; }
			            else { i = mEvents.length; mEvents[i] = new TEvents(); if (step == 4) nowevent = 1; mEvents[i].ID_EVENT = temp; count = 1; }



			            mEvents[i].State = temp2;
			            mEvents[i].ID_RADAR = l;
			            mEvents[i].TV = extv(temp4);
			            mEvents[i].ID_SAMPLE = ss;
			            mEvents[i].ID_CASA = p;
			            mEvents[i].DURATION = m;
			            //recalculall2(mEvents[i].ID_EVENT);
			            mEvents[i].ID_CHAMPIONSHIP = readUnsignedInt(stream);

			            if (step == 4) {
			                mEvents[i].Live = 1;
			                if (count == 1) principalDayLive.push(temp);
			            }




			            mEvents[i].UCHASTNIK1 = readUTF(stream);
			            mEvents[i].UCHASTNIK2 = readUTF(stream);
			            mEvents[i].DATE_EVENT.setTime(readUnsignedInt(stream) * 1000 + 2000);
			            //N=readUnsignedInt(stream);
			            //console.log("тур:"+ mEvents[i].ID_CHAMPIONSHIP+"time="+N+" "+mEvents[i].UCHASTNIK1+"-"+mEvents[i].UCHASTNIK2);
			            //mEvents[i].DATE_EVENT.setTime(N*1000);

			            mEvents[i].Time_Event = readUTF(stream);
			            mEvents[i].CARDS_Y1 = readUnsignedByte(stream);
			            mEvents[i].CARDS_Y2 = readUnsignedByte(stream);
			            mEvents[i].CARDS_R1 = readUnsignedByte(stream);
			            mEvents[i].CARDS_R2 = readUnsignedByte(stream);
			            mEvents[i].PODACHA = readUnsignedByte(stream);
			            mEvents[i].SCORE = readUTF(stream);
			            mEvents[i].SETSCORES = readUTF(stream);
			            mEvents[i].BEISBOL = readUTF(stream);
			            if (step == 4) readUnsignedByte(stream);
			            if (SetTableEvents(i) == 0) break;
			            if (count == 1 && LIVE == -1) { NewChampion.push(mEvents[i].ID_CHAMPIONSHIP); NewEvent.push(mEvents[i].ID_EVENT); } else if (LIVE == -1) ChangeEvent.push(mEvents[i].ID_EVENT);
			            if (step == 4) { if (count == 1 && LIVE == -1) addpromo(mEvents[i], 1); }
			            EventId[mEvents[i].ID_EVENT] = i;
			            if (count == 1) {

			                if ((ttt > 5) && (mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].fav2 == 1 || stareventid[mEvents[i].ID_EVENT] == 1)) { mEvents[i].fav = 1; cookierefresh = 1; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit++; }



			                mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count++;
			                mCountry[CountryId[mEvents[i].ID_COUNTRY]].count++;
			                mSport[SportId[mEvents[i].ID_SPORT]].count++;
			                if (mEvents[i].fav == 1) { mCountry[CountryId[mEvents[i].ID_COUNTRY]].favorit++; mSport[SportId[mEvents[i].ID_SPORT]].favorit++; }
			                if (step == 4) {
			                    mCountry[CountryId[mEvents[i].ID_COUNTRY]].LIVE++;
			                    if (mEvents[i].ID_SPORT == 1 && mCountry[CountryId[mEvents[i].ID_COUNTRY]].IS_REGION == 0) region.LIVE++;
			                    mSport[SportId[mEvents[i].ID_SPORT]].LIVE++; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].LIVE++;
			                };
			            }
			            stateexpress3(mEvents[i].ID_EVENT, mEvents[i].State);
			            if (count == 1) eventSort = 1;
			            break;

			        case 4:
			            lastblock = 4;
			            temp = readUnsignedInt(stream);
			            l = readUnsignedInt(stream);
			            ss = readUnsignedByte(stream);
			            temp4 = readUTF(stream);
			            p = readUnsignedShort(stream);
			            m = readUnsignedByte(stream);
			            temp2 = readUnsignedInt(stream);

			            if (temp2 > 2) {
			                if (step == 4) newlive = 1;
			                // for(i=0;i<mEvents.length;i++) {if(mEvents[i].ID_EVENT==temp) break;}

			                if (EventId[temp] != null && mEvents[EventId[temp]] != null) {
			                    i = EventId[temp];
			                    //if(temp==LastFrontLive) history.back();	
			                    addpromo(mEvents[i], 0);
			                    //if(mEvents[i].ID_EVENT>1000000000) console.log("блок 4 пришло удаление="+mEvents[i].ID_EVENT);

			                    mCountry[CountryId[mEvents[i].ID_COUNTRY]].count--;
			                    mSport[SportId[mEvents[i].ID_SPORT]].count--;
			                    mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].count--;
			                    if (mEvents[i].fav == 1) { mCountry[CountryId[mEvents[i].ID_COUNTRY]].favorit--; mSport[SportId[mEvents[i].ID_SPORT]].favorit--; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].favorit--; }
			                    if (step == 4) { mCountry[CountryId[mEvents[i].ID_COUNTRY]].LIVE--; mSport[SportId[mEvents[i].ID_SPORT]].LIVE--; mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].LIVE--; if (mEvents[i].ID_SPORT == 1 && mCountry[CountryId[mEvents[i].ID_COUNTRY]].IS_REGION == 0) region.LIVE--; }
			                    deleteEventTime(mEvents[i]);
			                    stateexpress(mEvents[i].ID_EVENT);
			                    if (mEvents[i].clock_stopped > 0) countvideo--;
			                    NewChampion.push(mEvents[i].ID_CHAMPIONSHIP);
			                    //DeleteEvent.push(mEvents[i].ID_EVENT);
			                    if (step == 4) nowevent = 1;
			                    /*for (k = 0; k < mLines.length; k++) if (mLines[k].ID_EVENT == temp) { for (j = k + 1; j < mLines.length; j++) LineId[mLines[j].ID_LINE] = j - 1; mLines[k] = null; mLines.splice(k, 1); k--; }*/

			                    j = 0;
			                    for (k = 0; k < mLines.length; k++) if (mLines[k].ID_EVENT == temp) { mLines[k] = null; j = 1; mLines.splice(k, 1); k--; }
			                    if (j == 1) { LineId = new Array(); for (k = 0; k < mLines.length; k++) LineId[mLines[k].ID_LINE] = k; }

			                    mEvents[i].mlines.splice(0);
			                    if ((mEvents[i].ID_EVENT == LastFrontLive) && ((Plus.style.display != "none") || (Pluslarge.style.display != "none"))) pluslive(LastFrontLive);
			                    for (j = i + 1; j < mEvents.length; j++) EventId[mEvents[j].ID_EVENT] = j - 1;
			                    EventId[mEvents[i].ID_EVENT] = null;
			                    mEvents.splice(i, 1);
			                } //else console.log("удаление несуществующего евента с ид = " +temp);
			                break;
			            }

			            count = 0;
			            if (EventId[temp] != null && mEvents[EventId[temp]] != null)
			                i = EventId[temp]; else { i = mEvents.length; mEvents[i] = new TEvents(); if (step == 4) nowevent = 1; count = 1; mEvents[i].ID_EVENT = temp; }
			            //if(mEvents[i].ID_EVENT>1000000000) console.log("блок 4 пришел идевент="+mEvents[i].ID_EVENT);
			            //if(EventId[temp]==null) {i=mEvents.length; mEvents[i]=new TEvents();if(step==4)nowevent=1; mEvents[i].ID_EVENT=temp;count=1;}
			            //else {count=0;i=EventId[temp];}

			            mEvents[i].ID_RADAR = l;
			            mEvents[i].TV = extv(temp4);
			            mEvents[i].ID_SAMPLE = ss;
			            mEvents[i].ID_CASA = p;
			            mEvents[i].DURATION = m;
			            mEvents[i].State = temp2;
			            mEvents[i].Time_Event = readUTF(stream);

			            mEvents[i].CARDS_Y1 = readUnsignedByte(stream);
			            mEvents[i].CARDS_Y2 = readUnsignedByte(stream);
			            mEvents[i].CARDS_R1 = readUnsignedByte(stream);
			            mEvents[i].CARDS_R2 = readUnsignedByte(stream);
			            mEvents[i].PODACHA = readUnsignedByte(stream);
			            mEvents[i].SCORE = readUTF(stream);
			            mEvents[i].SETSCORES = readUTF(stream);
			            mEvents[i].BEISBOL = readUTF(stream);
			            if (step == 4) readUnsignedByte(stream);
			            if (count == 1) { mEvents.pop(); console.log("измениения  в несуществующем эвенте=" + temp); break; }
			            //recalculall2(mEvents[i].ID_EVENT);
			            if (step == 4) { mEvents[i].Live = 1; if (count == 1) addpromo(mEvents[i], 1); }
			            ChangeEvent.push(mEvents[i].ID_EVENT);
			            stateexpress3(mEvents[i].ID_EVENT, mEvents[i].State);
			            if (count == 1) eventSort = 1;

			            break;

			        case 6:
			            lastblock = 6;
			            readUnsignedInt(stream);
			            readUnsignedByte(stream);
			            break;

			        case 5:
			            lastblock = 5;
			            temp = readUnsignedInt(stream);
			            temp2 = readUnsignedByte(stream);
			            if (temp2 == 5) {
			                i = LineId[temp];
			                if (i != null && mLines[i] != null) {

			                    stateexpress2(mLines[i].ID_LINE, 1);
			                    if (EventId[mLines[i].ID_EVENT] == null || mEvents[EventId[mLines[i].ID_EVENT]] == null) console.log("удаление линии на несуществующий эвент case 4 block 5:ID_LINE=" + mLines[i].ID_LINE + "ID_EVENT=" + mLines[i].ID_EVENT); else {
			                        ChangeEvent.push(mLines[i].ID_EVENT);
			                        for (j = 0; j < mEvents[EventId[mLines[i].ID_EVENT]].mlines.length; j++) { if (mEvents[EventId[mLines[i].ID_EVENT]].mlines[j] == mLines[i].ID_LINE) { mEvents[EventId[mLines[i].ID_EVENT]].mlines[j] = null; LineId[mLines[i].ID_LINE] = null; mEvents[EventId[mLines[i].ID_EVENT]].mlines.splice(j, 1); break; }; }
			                    }

			                    for (j = i + 1; j < mLines.length; j++) LineId[mLines[j].ID_LINE] = j - 1; mLines[i] = null; mLines.splice(i, 1); break;
			                }; break;
			            }

			            if (LIVE == 1) i = mLines.length; else
			            { i = LineId[temp]; if (i == null || mLines[i] == null) i = mLines.length; }
			            if (i == mLines.length) { mLines[i] = new TLines(); LineId[temp] = i; mLines[i].ID_LINE = temp; }
			            mLines[i].ID_EVENT = readUnsignedInt(stream);
			            if (EventId[mLines[i].ID_EVENT] == null || mEvents[EventId[mLines[i].ID_EVENT]] == null) { ss = 1; console.log("case 4 block 5:ID_LINE=" + mLines[i].ID_LINE + "ID_EVENT=" + mLines[i].ID_EVENT); } else {
			                ss = 0;
			                if (LIVE == -1) {
			                    {
			                        for (j = 0; j < mEvents[EventId[mLines[i].ID_EVENT]].mlines.length; j++) if (temp == mEvents[EventId[mLines[i].ID_EVENT]].mlines[j]) break;
			                        if (j == mEvents[EventId[mLines[i].ID_EVENT]].mlines.length) mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);
			                    }; ChangeEvent.push(mLines[i].ID_EVENT);
			                }
			                else mEvents[EventId[mLines[i].ID_EVENT]].mlines.push(temp);
			            }




			            mLines[i].KOL_V = readUnsignedByte(stream);

			            for (j = 0; j < 17; j++) {
			                if (mLines[i].KOL_V > j) N2 = readUnsignedShort(stream);
			                else break;
			                if ((mLines[i].V[j]) && (euroline == 0) && (ttt > 0) && (mLines[i].KOL_V < 4)) {
			                    if (N2 > mLines[i].V[j]) { LastLine.push(mLines[i].ID_LINE); LastLine.push(j); LastLine.push(1); mLines[i].D[j] = 1; }
			                    if (N2 < mLines[i].V[j]) { LastLine.push(mLines[i].ID_LINE); LastLine.push(j); LastLine.push(2); mLines[i].D[j] = 2; }
			                }
			                mLines[i].V[j] = N2;

			            }
			            mLines[i].ID_TIP_RADAR = readUnsignedShort(stream);//readUnsignedByte(stream);
			            mLines[i].KOEF = readUTF(stream);
			            mLines[i].FAVORIT = readUnsignedByte(stream);
			            if (ss == 0) { DIF(mLines[i]); stateexpress2(mLines[i].ID_LINE, 0); } else { mLines.pop(); LineId[temp] = null; }
			            break;
			    }
                ;
            }
            if (countrySort == 0) SortCountry();
            if (championSort == 1) SortChampion();
            if (eventSort == 1) SortEvent();
            Refresh(step);
            break;
        }


        case 24: {
            if(readUnsignedByte(mes)==1) {
            userpass=userpass2;
            showWarning(war8,"OK","",0,null);
            mClient.relogin=0;} else showWarning(war9,"OK","",0,null);
            break;



        }
		
        
        case 22: {

            if(readUnsignedByte(mes)==1) {showWarning(war0,"OK","",0,null);
            k=k_document;
            documents[k]=document_temp;
            doc2[k]=1;
            removeAll(Reg7[18]);

            for(i=1;i<doc2.length;i++) if(doc2[i]==1) Reg7[18].options.add(new Option(famstring[i-1],i));
            for(i=0;i<Reg7[18].options.length;i++) if(Reg7[18].options[i].value==k) {Reg7[18].selectedIndex=i;break;}
            //drawfamilia4();
			radioclick();

            k=Pvivod[1].selectedIndex;
            removeAll(Pvivod[1]);
            for(i=1;i<4;i++) if(doc2[i]==1) Pvivod[1].options.add(new Option(famstring[i-1],i));
            for(i=0;i<Pvivod[1].options.length;i++) if(Pvivod[1].options[i].value==k) {Pvivod[1].selectedIndex=i;break;}
            //id_('formsend').innerHTML=FormSend();	document.getElementsByName('login')[0].value=userlogin; document.getElementsByName('password')[0].value=userpass;
		    }else showWarning(war1,"OK","",0,null);

            break;


        }
        
case 23: {

for(i=5;i<15;i++) Reg7[i].disabled="";
m=readUnsignedByte(mes);
if(m==1){
showWarning(war4,"OK","",0,null);
mClient.country=Reg7[5].options[Reg7[5].selectedIndex].text;
mClient.region=Reg7[8].options[Reg7[8].selectedIndex].text;
mClient.city=Reg7[9].options[Reg7[9].selectedIndex].text;
mClient.index=Reg7[7].value;
mClient.address=Reg7[10].value;
mClient.telefon=Reg7[14].value;
mClient.mobil=Reg7[6].value;
mClient.email=Reg7[4].value;
mClient.nic=Reg7[12].value;
mClient.pin=Reg7[13].value;
mClient.favorit=echip[2*Reg7[11].selectedIndex];
}


if(m==2){
showWarning(war5,"OK","",0,null);
Reg7[12].style.border="2px solid #FF0000";Reg7[12].focus(); 
}

if(m==0){
showWarning(war5,"OK","",0,null);
//Reg7[9].value=mClient.city;
Reg7[7].value=mClient.index;
Reg7[10].value=mClient.address;
Reg7[14].value=mClient.telefon;
Reg7[6].value=mClient.mobil;
Reg7[4].value=mClient.email;
Reg7[12].value=mClient.nic;
Reg7[13].value=mClient.pin;
} 

for(i=0;i<countryarray.length/2;i++) if(countryarray[2*i]==mClient.country) {Reg7[5].selectedIndex=i+1;Reg7[5].disabled="disabled";break;}
codecountry2();
for(i=0;i<echip.length/2;i++) if(echip[2*i]==mClient.favorit) {Reg7[11].selectedIndex=i;break;}
if(Reg7[5].selectedIndex>0)	for(i=0;i<Reg7[8].options.length;i++) if(Reg7[8].options[i].text==mClient.region) {Reg7[8].selectedIndex=i;break;};
if(Reg7[8].selectedIndex>0) {regionchange2();Reg7[8].disabled="disbaled";for(i=0;i<Reg7[9].options.length;i++) if(Reg7[9].options[i].text==mClient.city) {Reg7[9].selectedIndex=i;
if(i>0) Reg7[9].disabled="disabled";break;}}


            if(mClient.address.length>5) Reg7[10].disabled="disabled";
            if(mClient.mobil.length>3) Reg7[6].disabled="disabled";
			if(Reg7[11].selectedIndex>0&&Reg7[11].selectedIndex<Reg7[11].options.length-1) Reg7[11].disabled="disabled";
			//if(mClient.city.length>2) Reg7[9].disabled="disabled";
			if(mClient.index.length>2) Reg7[7].disabled="disabled";
			

break;       }
        



        case 26: {
			
			ss=readUnsignedByte(mes);
            
		
			if(ss==10){
			
			 if(regnavstate>1) break;
             regnavstate++;	
			 regsend=0;regback(3);}
			
						
			if(ss==1){ 
			regsend=0;
			regnavstate=1;regback(2);			
			Reg4[7].style.border="2px solid #FF0000";Reg4[7].focus();
            showWarning(war7,"OK","",0,null);
            }
			
			if(ss==5){ 
			regsend=0;
			regnavstate=1;regback(2);			
			Reg4[9].style.border="2px solid #FF0000";Reg4[7].focus();
            showWarning(war7777,"OK","",0,null);
            }
			
			if(ss==3){ 			
			regsend=0;
			regnavstate=0;regback(2);
			Reg4[6].style.border="2px solid #FF0000";Reg4[6].focus();
            showWarning(war777,"OK","",0,null);
            }
			
			if(ss==4){ 			
			regsend=0;
			regnavstate=2;regback(2);
			Reg4[20].style.border="2px solid #FF0000";Reg4[20].focus();
            showWarning("Неправильный СМС код","OK","",0,null);
            }
			
             if(ss==11||ss==12){
			 regsend=0;
			 regnavstate=2;regback(2);
			 Reg4[21].style.border="2px solid #FF0000";Reg4[21].focus();
			 showWarning("Неверный промокод или предложение более недействительно","OK","",0,null);
			 }

			
             if(ss==13){
			 regsend=0;
			 regnavstate=2;regback(2);
			 Reg4[21].value=""
			 showWarning("Пользователь с данным IP-адресом уже зарегистрирован.По правилам данного предложения, на один IP адрес может быть зарегистрирован только один пользователь.","OK","",0,null);
			 }
			
			
			
			if(ss==2){ 			
			regsend=0;
			Reg4[0].style.border="2px solid #FF0000";
			Reg4[1].style.border="2px solid #FF0000";
			Reg4[2].style.border="2px solid #FF0000";
			Reg4[3].style.border="2px solid #FF0000";
			Reg4[4].style.border="2px solid #FF0000";
			Reg4[0].focus();
            showWarning(war77,"OK","",0,null);
            }
			 break;
        }
        
		
        case 25: {
            stream=decode64(mes);
			
			id_("regcomplete1").innerHTML=Reg4[1].value;
			userlogin=id_("regcomplete2").innerHTML=readUTF(stream);
			userpass=id_("regcomplete3").innerHTML=Reg4[10].value;
			//if(Reg4[12].selectedIndex==0&&Reg4[21].value.length>0) plushash(7325879);else 
			hashnav("regcomplete");			
			//stream=decode64(mes);
            sendindex=0;
            sendarray.splice(0);
            writeUTF(userlogin);
            writeUTF(userpass);
            writeUTF(ipadres);
            sendarray[sendindex]=0;
            webSocket.send("clientlogin");
            webSocket.send(EncodeBase64_2(sendarray));
			
			
			clearRegister();
            //history.back();
            regsend=0;
			regnavstate=0;regback(2);
            showWarning(war6,"OK","",0,null);
            _gaq.push(['_trackPageview',"virtual/regconfirm"]);
            break;




        }
        
        case 30: {
            showWarning(war172,"OK","",0,null);
            Rem1[0].value="";
            history.back();
            break;
        }
        
        case 31: {
            showWarning(war173,"OK","",0,null);
            rem1key=generatekey(Rem1[1].previousSibling);
            Rem1[0].style.border="2px solid #FF0000";Rem1[0].focus();
            break;



        }
        


        case 32: {
            Rem2[0].disabled="disabled";
            Rem2[4].disabled="disabled";
            Rem2[5].disabled="disabled";
            Rem2[1].disabled="";
            Rem2[2].disabled="";
            Rem2[4].value="";
            Rem2[5].value="";
            Rem2[3].value="";
            Rem2[1].value="";
            stream=decode64(mes);
            Rem2[0].value = readUTF(stream);
            Rem3Button.style.opacity="0.6";
            Rem3Button.style.cursor="default";
            Rem2Button.style.opacity="1";
            Rem2Button.style.cursor="pointer";
			hashnav("remember2");
            sendsms2();
            break;
        }
        
        case 34: {
            showWarning("Неправильный СМС код","OK","",0,null);
			Rem2[2].disabled="";
            Rem2[2].style.border="2px solid #FF0000";Rem2[2].focus();
            break;

        }
        
        case 33: {
        
            stream=decode64(mes);
            Rem2[4].disabled="";
            Rem2[5].disabled="";
            Rem2[1].disabled="disabled";
            Rem2[2].disabled="disabled";
            Rem2Button.style.opacity="0.6";
            Rem2Button.style.cursor="default";
            Rem3Button.style.opacity="1";
            Rem3Button.style.cursor="pointer";
            Rem2[3].value=readUTF(stream);
            break;

        }
        
        case 35: { 
            Rem2[4].disabled="disabled";
            Rem2[5].disabled="disabled";
            Rem2[1].disabled="";
            Rem2[2].disabled="";
            Rem2[5].value="";
            Rem2[0].value="";
            Rem2[1].value="";
            sendindex=0;
            sendarray.splice(0);
            writeUTF(userlogin);
            writeUTF(userpass);
            writeUTF(ipadres);
            sendarray[sendindex]=0;
			webSocket.send("clientlogin");
            webSocket.send(EncodeBase64_2(sendarray));
            Rem2[4].value="";
            Rem2[3].value="";
            Rem3Button.style.opacity="0.6";
            Rem2Button.style.opacity="1";
            Rem3Button.style.cursor="default";
            Rem2Button.style.cursor="pointer";
            history.back();
            break;


        }
        
        case 27: {
            casa_address.splice(0);
            casa_id.splice(0);
			casa_byte.splice(0);
            casa_name.splice(0);
			
            removeAll(Pvivod[1]);

            stream=mes;


            for(i=0;i<4;i++){
            j=readUnsignedByte(stream);
            l=i+1;
            if(l==1) l=2; else if(l==2) l=1;
            doc3[l]=0;
            if(j>0) doc3[l]=1;}

            for(i=1;i<4;i++) if(doc3[i]==1) Pvivod[1].options.add(new Option(famstring[i-1],i));
            if(Pvivod[1].length==0)  Pvivod[1].options.add(new Option("Нет сохраненных документов",-1));


            stream=decompress(mes.slice(4));


            seek=0;
            readUnsignedInt(stream);
            i=0;
            while(stream.length>seek){
            casa_id[i]=readUnsignedInt(stream);
			//casa_byte[i]=casa_id[i]%2;
			casa_byte[i]=readUnsignedByte(stream);
			casa_name[i]=readUTF(stream);
            casa_address[i]=readUTF(stream);
            i++;}

            removeAll(Pvivod[3]);

            for(i=0;i<casa_id.length;i++) Pvivod[3].options.add(new Option(casa_name[i]+" "+casa_address[i],casa_id[i]));
            ppsviv(); 
            break;
          
        }
        
        case 28: {
            showWarning(war11,"OK","",0,null);
            break;
        }
        
        case 29: {
            showWarning(war10,"OK","",0,null);
            webSocket.send("balance");
            break;
        }
		

       case 65:{
	   showWarning(war101,"OK","",0,null);
	   for(i=1;i<5;i++) if(documents[i]&&documents[i].scan==1) break;
	   if(i==5) hashnav("mydoc");
	   if(opchild2) opchild2.close();
       break;}
	   

       
	  
		
	case 74:
	m=readUnsignedByte(mes);
	if(version!=m) window.location.reload();
	break;	
		
		
        
case 58:{
sendinner=0;	
stream=decode64(mes);
k=readUnsignedByte(stream);
m=readUnsignedInt(stream);
showWarning("Внимание! Максимальная сумма пополнения за один раз <b>"+m+"</b> "+mClient.Val[mClient.valuta-1],"OK","",0,null);
//schetsummchange11();
schetsummchange1();
opchild.close();
break;	
}


case 53:{
stream=decode64(mes);
i=0;
while(stream.length>seek){
crdarray[i]=new Array();
crdarray[i][0]=readUTF(stream);
crdarray[i][1]=readUnsignedByte(stream);	
crdarray[i][2]=readUnsignedInt(stream);
i++;
}

removeAll(Reg250[0]);
for(i=0;i<crdarray.length;i++)
Reg250[0].options.add(new Option(crdarray[i][0],crdarray[i][2]));
}

vmcch();
break;


case 106:
stream=decode64(mes);
i=0;
while(stream.length>seek){
pcrdarray[i]=new Array();
pcrdarray[i][0]=readUTF(stream);
pcrdarray[i][1]=readUnsignedByte(stream);	
pcrdarray[i][2]=readUnsignedInt(stream);
i++;
}
removeAll(Reg155[0]);
//console.log("pcrdarray="+pcrdarray);
Reg155[0].options.add(new Option("Новая карта",0));
for(i=0;i<pcrdarray.length;i++) Reg155[0].options.add(new Option(pcrdarray[i][0],pcrdarray[i][2]));

if(i>0) Reg155[0].selectedIndex=i;

break;


case 110:
prinarray[6]=new Array();
prinarray[8]=new Array();
stream=decode64(mes);
prindex2[6]=1000;
prindex2[8]=200;

pradmine[prindex2[6]]=new Array();
pradminc[prindex2[6]]=new Array();
prpoz[prindex2[6]]=100;
prshow[prindex2[6]]=0;

pradmine[prindex2[8]]=new Array();
pradminc[prindex2[8]]=new Array();
prpoz[prindex2[8]]=100;
prshow[prindex2[8]]=0;
m=readUnsignedInt(stream);
for(u=0;u<m;u++){
l=readUnsignedInt(stream);
k=6+2*(readUnsignedByte(stream)-2);
if(k==8){pradminc[prindex2[8]][j]=l;j++;}
if(k==6){pradminc[prindex2[6]][i]=l;i++;}		
}

i=0;j=0;
while(stream.length>seek){
l=readUnsignedInt(stream);	
k=6+2*(readUnsignedByte(stream)-2);
if(k==6){pradmine[prindex2[6]][i]=l;i++;}
if(k==8){pradmine[prindex2[8]][j]=l;j++;}	
}
prinarray[6]=pradmine[prindex2[6]];
prinarray[8]=pradmine[prindex2[8]];

if(prindex2[7]>0) initpromo();


break;



case 111:
//if(flplay==false) return;
prinarray[7]=new Array();
//stream=decode64(mes);
prindex2[7]=100;
pradmine[prindex2[7]]=new Array();
pradminc[prindex2[7]]=new Array();
prpoz[prindex2[7]]=90;
prshow[prindex2[7]]=0;

img=new Array();
imgw=new Array();
imglivew=new Array();
imgliveg=new Array();
stream=decode64(mes);
j=readUnsignedInt(stream)/4;
i=0;
for(i=0;i<j;i++){
            img[i]=readUnsignedInt(stream);
            imgw[i]=readUnsignedInt(stream);
            imglivew[i]=readUnsignedInt(stream);
			imgliveg[i]=readUnsignedInt(stream);
			pradmine[prindex2[7]].push(imgw[i],imglivew[i],imgliveg[i]);
			}


i=0;			
while(stream.length>seek){
radvideo[i]=readUnsignedInt(stream);i++;	
}


prinarray[7]=pradmine[prindex2[7]]=pradmine[prindex2[7]].concat(radvideo);

if(prindex2[6]>0||prindex2[8]>0) initpromo();
break;



case 116:
//console.log("authstate116="+authstate);
if(authstate==null) {auth116=mes;break;}
removeAll(Reg4[19]);
removeAll(Reg7[11]);

stream=decode64(mes);
i=0;
            echip[i]=0;i++;
			echip[i]="Не выбрано";
			Reg4[19].options.add(new Option(echip[i],echip[i-1]));Reg7[11].options.add(new Option(echip[i],echip[i-1]));
			i++;

while(stream.length>seek){
            echip[i]=readUnsignedInt(stream);
			//console.log(echip[i]);
			i++;
			echip[i]=readUTF(stream);
			//console.log(echip[i]);
			Reg4[19].options.add(new Option(echip[i],echip[i-1]));Reg7[11].options.add(new Option(echip[i],echip[i-1]));
			i++;
			}


break;


case 121:
//console.log("121");

stream=decode64(mes);
if(stream.length<8) {drawntv();return;}

//console.log("stream.length="+stream.length);

k=readUnsignedInt(stream);
j=readUnsignedInt(stream);

if(k==9999&&j==0) return;
//console.log("k="+k);
//console.log("id="+j);


if(j!=0){
for(i=0;i<ntvcombo.length;i++)
if(ntvcombo[i].id==j) break;
}

if(i==ntvcombo.length&&j!=0){
ntvcombo[i]=new ntvCombo();
ntvcombo[i].id=j;
ntvcombo[i].DateBegin.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
ntvcombo[i].DateEnd.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);


ntvcombo[i].DateTV.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
if(jsonntv!=null&&jsonntv[(ntvcombo[i].id-1)]!=null) {ntvcombo[i].otbor=jsonntv[(ntvcombo[i].id-1)].game.nameotbor;ntvcombo[i].combo=jsonntv[(ntvcombo[i].id-1)].game.namecombo;}
else ntvcombo[i].otbor=ntvcombo[i].combo="Выпуск №"+ntvcombo[i].id+". Эфир "+zeroadd(ntvcombo[i].DateTV.getDate())+"."+zeroadd(ntvcombo[i].DateTV.getMonth()+1)+"."+ntvcombo[i].DateTV.getFullYear()+". Игрок vs Эксперт.";
//if(id_("ntvcombo").options.length>0) id_("ntvcombo").options[id_("ntvcombo").options.length-1]=null;
id_("ntvcombo").options.add(new Option(zeroadd(ntvcombo[i].DateBegin.getDate())+"."+zeroadd(ntvcombo[i].DateBegin.getMonth()+1)+"."+(ntvcombo[i].DateBegin.getFullYear()-2000)+"-"+zeroadd(ntvcombo[i].DateEnd.getDate())+"."+zeroadd(ntvcombo[i].DateEnd.getMonth()+1)+"."+(ntvcombo[i].DateEnd.getFullYear()-2000)+" "+ntvcombo[i].combo,ntvcombo[i].id));
} else {readUnsignedInt(stream);readUnsignedInt(stream);readUnsignedInt(stream);}

if(k!=9999){for(i=0;i<ntvcombo.length;i++) if(ntvcombo[i].id==k) break;}

j=readUnsignedInt(stream);
ntvcombo[i].top.splice(0);

//console.log("j="+j);

for(l=0;l<j;l++){
ntvcombo[i].top[l]=new ntvtop();
ntvcombo[i].top[l].id=readUnsignedInt(stream);
ntvcombo[i].top[l].colon=readUnsignedInt(stream);;	
ntvcombo[i].top[l].place=readUnsignedInt(stream);	
ntvcombo[i].top[l].login=readUTF(stream);
ntvcombo[i].top[l].name=readUTF(stream);
ntvcombo[i].top[l].ball=parseInt(readDouble(stream)*100)/100;
//if(i==0) ntvcombo[i].top[l].ball=zeroinsert(ntvcombo[i].top[l].ball,1);

if(ntvcombo[i].top[l].ball==0) ntvcombo[i].top[l].ball="-"; else {
if(ntvcombo[i].top[l].colon!=1) ntvcombo[i].top[l].ball=zeroinsert(Math.floor(ntvcombo[i].top[l].ball));
else ntvcombo[i].top[l].ball=zeroinsert(ntvcombo[i].top[l].ball,1);

};}

if(loginstate==1&&demo==0&&stream.length>seek){
//console.log("читаю данные для группы="+ntvcombo[i].id);
ntvcombo[i].top_[0]=new ntvtop();
ntvcombo[i].top_[1]=new ntvtop();
ntvcombo[i].top_[2]=new ntvtop();
ntvcombo[i].top_[3]=new ntvtop();
ntvcombo[i].top_[0].id=ntvcombo[i].top_[1].id=ntvcombo[i].top_[2].id=ntvcombo[i].top_[3].id=readUnsignedInt(stream);
ntvcombo[i].top_[0].login=ntvcombo[i].top_[1].login=ntvcombo[i].top_[2].login=ntvcombo[i].top_[3].login=readUTF(stream);
ntvcombo[i].top_[0].name=ntvcombo[i].top_[1].name=ntvcombo[i].top_[2].name=ntvcombo[i].top_[3].name=readUTF(stream);
ntvcombo[i].top_[0].ball=parseInt(readDouble(stream)*100)/100;
ntvcombo[i].top_[1].ball=zeroinsert(Math.floor(readDouble(stream)));
ntvcombo[i].top_[2].ball=zeroinsert(Math.floor(readDouble(stream)));
ntvcombo[i].top_[3].ball=zeroinsert(Math.floor(readDouble(stream)));
if(ntvcombo[i].top_[0].ball==0) ntvcombo[i].top_[0].ball="-"; 
if(ntvcombo[i].top_[1].ball==0) ntvcombo[i].top_[1].ball="-"; 
if(ntvcombo[i].top_[2].ball==0) ntvcombo[i].top_[2].ball="-"; 
if(ntvcombo[i].top_[3].ball==0) ntvcombo[i].top_[3].ball="-";
}

drawntv();
slideDate();
break;


case 122:
stream=decode64(mes);
if(!id_("ntvcombo")) return;
if(stream.length<8) return;
ntvcombo.splice(0);
removeAll(id_("ntvcombo"));
while(stream.length>seek){
ntvcombo[i]=new ntvCombo();
ntvcombo[i].id=readUnsignedInt(stream);
//console.log("ntvcombo[i].id="+ntvcombo[i].id);
ntvcombo[i].DateBegin.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
ntvcombo[i].DateEnd.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
ntvcombo[i].DateTV.setTime(readUnsignedInt(stream)*1000);//+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
if(jsonntv!=null&&jsonntv[(ntvcombo[i].id-1)]!=null) {ntvcombo[i].otbor=jsonntv[(ntvcombo[i].id-1)].game.nameotbor;ntvcombo[i].combo=jsonntv[(ntvcombo[i].id-1)].game.namecombo;}else 
ntvcombo[i].otbor=ntvcombo[i].combo="Выпуск №"+ntvcombo[i].id+". Эфир "+zeroadd(ntvcombo[i].DateTV.getDate())+"."+zeroadd(ntvcombo[i].DateTV.getMonth()+1)+"."+ntvcombo[i].DateTV.getFullYear()+". Игрок vs Эксперт.";
id_("ntvcombo").options.add(new Option(zeroadd(ntvcombo[i].DateBegin.getDate())+"."+zeroadd(ntvcombo[i].DateBegin.getMonth()+1)+"."+(ntvcombo[i].DateBegin.getFullYear()-2000)+"-"+zeroadd(ntvcombo[i].DateEnd.getDate())+"."+zeroadd(ntvcombo[i].DateEnd.getMonth()+1)+"."+(ntvcombo[i].DateEnd.getFullYear()-2000)+" "+ntvcombo[i].combo,ntvcombo[i].id));
i++;
}
if(i==0) {ntvselect=-1; return;}

//console.log("ntvselect="+ntvselect);

if(ntvselect>i-1||ntvselect==-1) ntvselect=i-1;
//console.log("ntvselect="+ntvselect);

id_("ntvcombo").selectedIndex=ntvselect;


//i=i-1;
//ntvselect=i;

//id_("ntvtv1").innerHTML="Выпуск №"+ntvcombo[i].id+". Эфир "+zeroadd(ntvcombo[i].DateTV.getDate())+"."+zeroadd(ntvcombo[i].DateTV.getMonth()+1)+"."+ntvcombo[i].DateTV.getFullYear()+". Игрок vs Эксперт.";

clearInterval(ntvinterval);
ntvchange();
//ntvtime();
ntvinterval=setInterval(ntvtime,300000);
break;



case 52: {
stream=decode64(mes);
temp6=readUTF(stream);

hesh=readUTF(stream);
paysumm=readUnsignedInt(stream);

//console.log("paysumm="+paysumm+" temp6="+temp6+" hesh="+hesh);
	
if(mons[schet_current1]==5){
    var post = "amount=" + paysumm.toString() + "&payment_group_id=2&followup=1&payment_type_id=" + (10 + Reg155[3].selectedIndex) + "&external_id=" + temp6 + "&site_id=50&description=Пополнение аккаунта "+mClient.login+" на сайте БК WinLineBet&sign=" + hesh;
}
if(mons[schet_current1]==6){
var post="amount="+paysumm.toString()+"&payment_group_id=5&followup=1&external_payment_type_id="+aric[Reg155[4].selectedIndex];
if(aric[Reg155[4].selectedIndex]==1017) post=post+"&external_account_id="+Reg155[5].value;
post=post+"&external_id="+temp6+"&site_id=50&sign="+hesh;
}



if(mons[schet_current1]==8){
var post="amount="+paysumm.toString()+"&payment_group_id=7&followup=1&phone="+Reg155[7].value+"&external_id="+temp6+"&site_id=50&sign="+hesh;
}

if(mons[schet_current1]==9){
var post="amount="+paysumm.toString()+"&payment_group_id=7&followup=1&phone="+Reg155[8].value+"&external_id="+temp6+"&site_id=50&sign="+hesh;
}

if(mons[schet_current1]==10){
var post="amount="+paysumm.toString()+"&payment_group_id=7&followup=1&phone="+Reg155[9].value+"&external_id="+temp6+"&site_id=50&sign="+hesh;
}



if(mons[schet_current1]==3){
//var post="amount="+paysumm.toString()+"&payment_group_id=6&followup=1&phone="+Reg155[2].value+"&external_id="+temp6+"&site_id=50&sign="+hesh;
var post="shop="+hesh+"&transaction="+temp6+"&successUrl=http://"+domen+"/pomosch/payment_success/&failUrl=http://www."+domen+"/pomosch/payment_fail/";
}


if (mons[schet_current1] == 12) {


    var post = "amount=" + paysumm.toString() + "&currency=" + Reg291[2].value + "&external_id=" + temp6.split("#")[0];
    if (temp6.split("#")[1] != null) post = post + "&site_login=" + temp6.split("#")[1];
    post = post + "&site_id=2952&signature=" + hesh;//+"&successUrl=http://"+domen+"/pomosch/payment_success/&decline_url=http://www."+domen+"/pomosch/payment_fail/";
}


if(mons[schet_current1]==4){
var post="amount="+paysumm.toString()+"&payment_group_id=3&external_id="+temp6+"&site_id=50&sign="+hesh;
}





if(mons[schet_current1]==1){
 if (temp6.indexOf("@BANANZZZAA") > -1){
     var post = "amount=" + paysumm.toString() + "&followup=1&payment_group_id=1&currency=RUB&site_login=" + temp6.split("#")[1] + "&external_id=" + temp6.split("@")[0] + "&site_id=3070&signature=" + hesh;//+"&successUrl=http://"+domen+"/pomosch/payment_success/&decline_url=http://www."+domen+"/pomosch/payment_fail/";	

     
} else
 if (temp6.indexOf("@") > -1) {
temp6=temp6.split("@");
var post="product_id=006486-0001-0001&product_price="+(paysumm/100).toString()+"&order_id="+temp6[0]+"&initTransaction="+temp6[1]+
"&cb_url=http://web.easyanalitics.com:1066&sign=" + hesh;
} else {
var post="product_id=006486-0001-0001&product_price="+(paysumm/100).toString()+"&currency=RUB"+"&order_id="+temp6+"&f_name="+mClient.I+"&s_name="+mClient.F+"&email="+mClient.email+"&street="+mClient.address+"&city="+mClient.city+
"&country=RUS&zip="+mClient.index+
"&cb_url=http://web.easyanalitics.com:1066&success_url=http://www." + domen + "/pomosch/payment_success/&decline_url=http://www." + domen + "/pomosch/payment_fail/&sign=" + hesh;
}


post=post.split(' ').join('');
//+;mClient.Val[mClient.valuta-1].replace("RUR","RUB")
}


if(mons[schet_current1]!=1&&mons[schet_current1]!=3&&mons[schet_current1]!=11&&mons[schet_current1]!=12&&mons[schet_current1]!=7&&mons[schet_current1]!=2&&mons[schet_current1]!=16&&mons[schet_current1]!=16&&mons[schet_current1]!=18){
post=post+"&currency="+mClient.Val[mClient.valuta-1].replace("RUR","RUB")+"&success_url=http://"+domen+"/pomosch/payment_success/&decline_url=http://www."+domen+"/pomosch/payment_fail/";}

var url="https://terminal.accentpay.ru/";
if(mons[schet_current1]==1) url="https://payments.chronopay.com/";
if(mons[schet_current1]==3) url="https://w.qiwi.com/order/external/main.action";
if(mons[schet_current1]==7||mons[schet_current1]==2) url="https://www.moneybookers.com/app/payment.pl";
if (mons[schet_current1] == 12 || temp6.indexOf("BANANZZZAA") > -1) url = "https://terminal.ecommpay.com/";



if(mons[schet_current1]==11||mons[schet_current1]==16||mons[schet_current1]==17||mons[schet_current1]==18){
var modtype=new Array();
modtype[11]=360;
modtype[16]=75;
modtype[17]=54;
modtype[18]=62;
var modv=new Array();
modv[11]="RUB";
modv[16]="RUB";
modv[17]="RUB";
modv[18]="RUB";


url="http://www.onlinedengi.ru/wmpaycheck.php";
post="project=5226&nickname="+transliterate(mClient.I)+"&order_id="+temp6+"&source=5226&amount="+(paysumm/100).toString()+"&paymentCurrency="+modv[mons[schet_current1]]
+"&mode_type="+modtype[mons[schet_current1]]+"&xml=0&md5="+hesh;
//+mClient.Val[mClient.valuta-1].replace("RUR","RUB")+
}




if((mons[schet_current1]==7||mons[schet_current1]==2)){
post="pay_to_email=delcy@winlinebet.com&transaction_id="+
temp6 + "&cancel_url=http://www." + domen + "/pomosch/payment_fail/&return_url=http://" + domen + "/pomosch/payment_success/&status_url=http://web.easyanalitics.com:2221&language=RU&amount=" +
+(paysumm/100).toString()+"&currency=";
if(mons[schet_current1]==7) post=post+Reg291[1].value+"&pay_from_email="+Reg155[6].value;
if(mons[schet_current1]==2) post=post+Reg291[0].value+"&pay_from_email="+Reg155[1].value;
post=post+"&recipient_description=Winline&firstname="+mClient.I+"&lasttname="+mClient.F+"&date_of_birth="+mClient.dmy+"&address="+mClient.address+"&city="+mClient.city+"&postal_code="+mClient.index;
}

//console.log(mons[schet_current1]);
console.log(url+"?"+post);
/*
var warus="Внимание! Для продолжения платежа пройдите по ссылке <a href='javascript:' onclick='window.open(&quot;"+url+"?"+post+"&quot;,&quot;_blank&quot;,&quot;,resizable=yes,scrollbars=yes,status=yes&quot;);' style='text-decoration:none;color:#F47621;'><b>Платежная систмеа<b></a>";
showWarning(warus,"Отмена","",0,null)
*/
//if(!window.open(url+"?"+post,"_blank")) window.open(url+"?"+post,"_self");
opchild.window.location.href=url+"?"+post;

//schetsummchange11();
schetsummchange1();
sendinner=0;

break

        }
        
        case 37: {
            stream=decode64(mes);
            order=(readUnsignedInt(stream)).toString();
            paysumm2=parseInt(readDouble(stream)*100)/100;
            paysys=readUTF(stream);
            hesh=readUTF(stream);
            if(for11==1) temp6=paysystem2[curopen]; else temp6=paysystem[mons[schet_current1]];
            for11=0;

            var post="PAYMENT_MERCHANT_ID=863-3155052153&PAYMENT_ORDER_NR="+ order+"&PAYMENT_AMOUNT="+paysumm2.toString()+
            "&PAYMENT_CURRENCY=" + paysys + "&PAYMENT_SYSTEM=" + temp6 + "&PAYMENT_DESC=" + encodeURIComponent("Описание платежа") + "&PAYMENT_SITE_CHARSET=UTF-8&PAYMENT_RESULT_URL=http://web.easyanalitics.com:1049&PAYMENT_RESULT_METHOD=POST&PAYMENT_SUCCESS_URL=http://" + domen + "/pomosch/payment_success/&PAYMENT_SUCCESS_METHOD=POST&PAYMENT_CANCEL_URL=http://www." + domen + "/pomosch/payment_fail/" +
            "&PAYMENT_CANCEL_METHOD=POST&PAYMENT_INFO_xxx="+encodeURIComponent(userlogin)+"&PAYMENT_TRANSPARENT=1"+"&PAYMENT_HASH="+hesh;

            var url="https://www.mig-pay.com/process/payment";


            if(!window.open(url+"?"+post,"_blank")) window.open(url+"?"+post,"_self");

            Schet1[mons[schet_current1]].style.display="none";
            mons[schet_current1]=0;
            for(i=0;i<Money1.length;i++) Money1[i].childNodes[0].src="/resources/money/mon"+(i+1)+".png?8";
            Schet1[mons[schet_current1]].style.display="";
            break;
        }
                        
        case 42: {
            stream=decode64(mes);
            if(readUnsignedByte(stream)==1) {Reg4[23].style.border="2px solid #FF0000";Reg4[23].focus();} else 
            {
			showWarning("Регистрационные данные отправлены на Ваш почтовый ящик","OK","",0,null);clearRegister3();
			try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};			
			_gaq.push(['_trackPageview',"virtual/demoregcomp"]);}
            break;


        }
        
        case 43: {
            stream=decode64(mes);
            i=readUnsignedInt(stream);
            if(i>0) {j=Math.floor(i/3600);m=Math.round((i-3600*j)/60); 
			showWarning("Вы можете пополнять счет не более одного раза в сутки.<br />Осталось:&nbsp;"+j+"часа(ов)&nbsp;"+m+"минут&nbsp;","OK","",0,null);} else 
			{showWarning("Вы успешно пополнили счет","OK","",0,null);webSocket.send("balance");}
            break;

        }
        
        case 44: {
			
			//if(loginstate==0) break;
			stream=decode64(mes);
			if(stream.length<16){
		    bonuskoef=1000;
            bonusprocent=new Array();
	        for(i=0;i<25;i++) bonusprocent[i]=2*i;
            bonpr=0;otkat=0;break;}
			
            bonuskoef=readDouble(stream);
			otkat=1;
            temp4=readUTF(stream);
            col=temp4.split("-");
            for(i=0;i<col.length;i++) bonusprocent[i]=parseInt(col[i]);
            for(i=col.length;i<25;i++) bonusprocent[i]=parseInt(col[col.length-1]);

            break;



        }
        
        case 36: {
            showWarning(war191,"OK","",0,null);
            userpass="";
            userlogin="";
            history.back();
            break;
        }
        
        case 40: {
            stream=decode64(mes);
            userlogin=readUTF(stream);
            userpass=readUTF(stream);
            sendindex=0;
            sendarray.splice(0);
            writeUTF(userlogin);
            writeUTF(userpass);
            writeUTF(ipadres);
            sendarray[sendindex]=0;
            webSocket.send("clientlogin");
            webSocket.send(EncodeBase64_2(sendarray));

            //if(iphone==1) showWarning("Запомните или скопируйте Ваши данные для игры!\nЛогин: "+userlogin+"\nПароль:"+userpass);else  
			showWarning("Запомните или скопируйте Ваши данные для игры!<br /><span style='-moz-user-select:text;-o-user-select:text;-khtml-user-select:text;-webkit-user-select:text;user-select:text;'>Логин:&nbsp;<b>"+userlogin+" </b><br />Пароль:&nbsp;<b>"+userpass+"</b></span>","OK","",0,null);
            history.back();
            break;
        }
        
        case 9: {
            removeAll(ResultBoxData);
            removeAll(ResultBoxSport);
            dating=new Array();
            sporting=new Array();
            sportname=new Array();
            datesport=new Array();
            sportdate=new Array();
            var id_sport=0;
            var date_event=0;
            stream=decompress(mes);
            l=readUnsignedInt(stream);
            for(i=0;i<l;i++){
            sporting[i]=readUnsignedInt(stream);
            sportname[i]=readUTF(stream)
            datesport[i]=new Array();}

            readUnsignedInt(stream);
            while(stream.length>seek){
            id_sport=readUnsignedInt(stream);
            date_event=readUnsignedInt(stream);
            readUnsignedInt(stream);
            readUnsignedInt(stream);
            for(j=0;j<l;j++) if(sporting[j]==id_sport) datesport[j].push(date_event);
            for(j=0;j<sportdate.length;j++){if(date_event==sportdate[j]) break;
            if(date_event<sportdate[j]) {sportdate.splice(j,0,date_event); break;};}
            if(j==sportdate.length) sportdate.push(date_event);
            }

            var Date6=new Date();
            for(j=0;j<sportdate.length;j++){Date6.setTime(sportdate[sportdate.length-j-1]*1000);
            ResultBoxData.options.add(new Option(zeroadd(Date6.getDate())+"-"+zeroadd(Date6.getMonth()+1)+"-"+zeroadd(Date6.getFullYear()),Date6.getTime()));
            }

            sportname.splice(0);

            for(j=0;j<sporting.length;j++) for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==sporting[j]){sportname.push(mSport[i].NAME_RUS);break;}



            for(j=0;j<sporting.length;j++) for(i=0;i<datesport[j].length;i++){
            if(datesport[j][i]==ResultBoxData.options[ResultBoxData.selectedIndex].value/1000) 
            {ResultBoxSport.options.add(new Option(sportname[j],sporting[j]));break;}}
            resultstate=1;
            extractResult();
            break;
        }
        
        case 8: {

            var mChampstring=new Array();
            removeAll(ResultBoxChamp);
            mResults.splice(0);
            mChamps.splice(0);
            stream=decompress(mes);

            l=readUnsignedInt(stream);



            for(i=0;i<l;i++){
            mResults[i]=new TResult();
            mResults[i].ID_RADAR=readUnsignedInt(stream);

            mResults[i].DATE_EVENT.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);                   
            mResults[i].Data=zeroadd(mResults[i].DATE_EVENT.getDate())+"/"+zeroadd(mResults[i].DATE_EVENT.getMonth()+1)+" "+zeroadd(mResults[i].DATE_EVENT.getHours())+":"+zeroadd(mResults[i].DATE_EVENT.getMinutes());
            mResults[i].score=readUTF(stream);
            mResults[i].Champ=readUTF(stream);
            mResults[i].U1=readUTF(stream);
            mResults[i].U2=readUTF(stream);

            for(j=0;j<mChampstring.length;j++){if(mChampstring[j]==mResults[i].Champ) break;}
            if(j==mChampstring.length) {mChampstring[j]=mResults[i].Champ};}


            mChampstring=mChampstring.sort();

            for(j=0;j<mChampstring.length;j++)
            mChamps[j]=mChampstring[j];

            ResultBoxChamp.options.add(new Option("Все чемпионаты",1));



            for(j=0;j<mChamps.length;j++) 
            ResultBoxChamp.options.add(new Option(mChamps[j],mChamps[j]));
            extractResult3();
			/*if(resultcount==0) resulttimer1=new Date().getTime();
			resultcount++;
			if(resultcount<100)  extractResult();
			if(resultcount==100) console.log("100 результатов выполнено за"+ (new Date().getTime()-resulttimer1)/1000+"секунд");*/
			//timerus2();
            break;


        }
        
        case 48: {break;

  

        }
        
        case 49: {break;
  

        }



        case 85: {
			
            var bonusdate=new Array();
            var bonustip=new Array();
            var bonusvid=new Array();
            var bonuscasa=new Array();
            var bonussumma=new Array();
            var bonusId=new Array();
            var valutavidbonus=new Array();
            var inner="";
			stream=decode64(mes);
            p=readUnsignedInt(stream);
            i=p-1;
            j=0;

            while(stream.length>seek){
            bonusId[i] = readUnsignedInt(stream);
            readUnsignedByte(stream);
            dateb.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            bonusdate[i]='<div style="float:right;margin-right:20px;margin-top:25px;font-size:14px;color:#656565">'+zeroadd(dateb.getDate())+"."+zeroadd(dateb.getMonth()+1)+"."+dateb.getFullYear()+'</div>';
            N=readDouble(stream);
            bonusvid[i]=readUnsignedByte(stream);

            if(bonusvid[i]==2) valutavidbonus[i]='&nbsp;'+mClient.Val[readUnsignedByte(stream)-1];
            if(bonusvid[i]==1) valutavidbonus[i]='&nbsp;'+mClient.Val[mClient.valuta-1];

            bonussumma[i]='<div style="float:right;margin-right:20px;margin-top:10px;font-size:16px;color:#000;font-weight:bold;">'+zeroinsert(Math.round((N)*100)/100,1)+valutavidbonus[i]+
			'</div>';

            bonuscasa[i]=readUTF(stream);
            if(bonuscasa[i].length==0) bonuscasa[i]="&nbsp;";
            if(bonusvid[i]==2){
            bonustip[i]='<span style="color:#E97323;"><b>Заказ</b></span>';
            }
            else{
            if(N<0)bonustip[i]='<span style="color:#E97323;"><b>Вывод средств</b></span>'; else bonustip[i]='<span style="color:#E97323;"><b>Пополнение счета</b></span>';}
            i--;
            };


for(i=0;i<bonuscasa.length;i++){
inner=inner+'<div style="width:100%;border-top:1px solid #DADADA;float:left;"><img style="float:left;margin-left:15px;margin-top:20px;" src="/resources/images/bonplat.png"/>'+bonusdate[i]+'</div><div style="float:left;height:5px;width:100%;"></div><div style="font-size:12px;font-weight:bold;font-style:italic;float:left;margin-left:15px;">'+bonuscasa[i].replace('Бонус<br />','').replace('Бонус<br>','')+'</div>'+bonussumma[i]+'<div style="float:left;height:5px;width:100%;"></div><a href="/novosti/" style="color:#E97323;float:left;margin-left:15px;">Подробнее</a><div style="float:left;height:15px;width:100%;"></div></div>';
}


if(inner.length>0) {if(authstate!=null)  id_("innermybonus2").innerHTML=inner; else innerbonus2=inner;}



 $('a').unbind('click');
        $('a').bind('click', ajaxLoad);
            break;
        }





        
        case 11: {

            platadate.splice(0);
            platatip.splice(0);
            platavid.splice(0);
            platacasa.splice(0);
            platasumma.splice(0);
            plataId.splice(0);
            valutavid.splice(0);
            stream=decode64(mes);
            p=readUnsignedInt(stream);
            i=p-1;
            j=0;

            while(stream.length>seek){
            plataId[i] = readUnsignedInt(stream);
            readUnsignedByte(stream);
            dateb.setTime(readUnsignedInt(stream)*1000+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
            platadate[i]=zeroadd(dateb.getDate())+"."+zeroadd(dateb.getMonth()+1)+"."+zeroadd(dateb.getFullYear())+"<br/>"+zeroadd(dateb.getHours())+":"+zeroadd(dateb.getMinutes())+'<br />&nbsp;';
            N=readDouble(stream);
            platavid[i]=readUnsignedByte(stream);
            if(platavid[i]==2) valutavid[i]='<br />'+mClient.Val[readUnsignedByte(stream)-1];
            if(platavid[i]==1) valutavid[i]='<br />'+mClient.Val[mClient.valuta-1];

            platasumma[i]='<b>'+zeroinsert(Math.round((N)*100)/100,1)+
            '</b>'+valutavid[i];

            platacasa[i]=readUTF(stream);
            if(platacasa[i].length==0) platacasa[i]="&nbsp;";
            if(platavid[i]==2){
            platatip[i]='<span style="color:#E97323;"><b>Заказ</b></span>';
            }
            else{
            if(N<0)platatip[i]='<span style="color:#E97323;"><b>Вывод средств</b></span>'; else platatip[i]='<span style="color:#E97323;"><b>Пополнение счета</b></span>';}
            i--;
            };


            plataChange2();


            break;
        }
        
        default:
            break;
    
    }















}

function getElementsByName(tag, name) {
	if(!$.browser.msie) return document.getElementsByName(name);
     var elem = document.getElementsByTagName(tag);
     var arr = new Array();
     for(i = 0,iarr = 0; i < elem.length; i++) {
     att = elem[i].getAttribute("name");
     if(att == name) {
     arr[iarr] = elem[i];
     iarr++;
          }
     }
     return arr;
}

function newreg5(){
//if((id_("OPSCHET").style.display!="none")&&(loginstate==1)) return;
Msh2.innerHTML="";
Msh2.style.cursor="default";
Msh2.style.textDecoration="none";
Cupon.style.display="none";
Opencupon.style.display="";
/*
if(cookvirt==1||cookvirtcount<4){id_("OS").style.backgroundImage="url(/resources/images/os7n.jpg)";
id_("OS").parentNode.href="/novosti/683.html";}
else{
id_("OS").style.backgroundImage="url(/resources/images/os5.jpg)";
id_("OS").parentNode.href="/novosti/86.html";
}*/

}

function newreg(){
hashnav("registration");
return;    
}


function newreg4(){
hashnav("demoreg");
return;    
}




function hideplataopen(){
if(Cupon.style.display=="none"){
Cupon.style.display="";
Opencupon.style.display="none";}
else{
if(loginstate==0) return;
if(demo==1){webSocket.send("demoaddmoney");return;}
Cupon.style.display="none";
Opencupon.style.display="";}
drawscroll2();
}


function identif2(){
if(aric[Reg155[4].selectedIndex]==1017)
{Reg155[5].style.display="";Reg155[5].nextSibling.style.display="";Reg155[5].nextSibling.nextSibling.style.display="";Reg155[5].previousSibling.style.display="";}
else{Reg155[5].style.display="none";Reg155[5].nextSibling.style.display="none";Reg155[5].previousSibling.style.display="none";Reg155[5].nextSibling.nextSibling.style.display="none";}
}



function sendformmoney2(t){
	
var i=0;
if((loginstate==0)||(demo==1)) {
showWarningReg();
//showWarning(war205,"Зарегистрироваться","Отмена",1,null);
return;}	

if(mClient.city.length<1||mClient.index.length<1||mClient.address.length<1||mClient.country.length<1||mClient.mobil.length<1||mClient.region.length<1)
{hashnav("personal");showWarning("Приносим извинения. Для проведения операций по выводу денежных средств необходимо заполнить дополнительные данные в личном кабинете и загрузить цветную фотографию документа, удостоверяющего личность.","OK","",0,null);return;
}


paysumm2=parseFloatExt(Reg252[mons2[schet_current2]-1].value);


if(mons2[schet_current2]==3&&paysumm2>15000*mClient.kurs) {showWarning("Внимание! В данной платежной системе, Вы не можете вывести более 15000 рублей за один раз","OK","",0,null);return;}

if(mons2[schet_current2]==1&&crdarray.length==0) {showWarning("Внимание! Вывод средств на банковскую карту возможен только на ту карту, c которой проводилось пополнение.","OK","",0,null);return;}

/*
if(!t||t!=1) {showWarning("ВЫВОД СРЕДСТВ.Вы запросили на вывод "+paysumm2+".<br/><br/>Обращаем Ваше внимание, что после подтвержения вывода средств, Ваши бонус и выигрыши будут аннулированы, так как Вы не выполнили условия предоставления бонуса.<br /><br />Узнать о текущем статусе бонуса можно пройдя по ссылке рядом с балансом.","Вывести","Отмена",1,function(){sendformmoney2(1);});return;}
*/


if((bonusactiv==2)&&(!t||t!=1)){ showWarning('ВAШ БОНУС. Обращаем Ваше внимание, что после подтвержения вывода средств, Вы автоматически отказываетесь от нашего бонусного предложения <a style="color:#F47621;text-decoration:none;width:100%;text-align:center;" href="#" onclick="javascript:hashnav(&quot;bonusaccept&quot;);CloseWarning();return false;">Дадим при знакомстве</a>',"Вывести","Отмена",1,function(){sendformmoney2(1);});return;}

if(bonusactiv==2) {bonusactiv=0;webSocket.send("NOBONUS24");}

if((bonusactiv==1)&&(!t||t!=1)) {webSocket.send("STATUS_BONUS24_OPLAT");return;}


var Byte=0;
Sneatie[mons2[schet_current2]-1].style.opacity="0.6";
Sneatie[mons2[schet_current2]-1].style.cursor="default";
Sneatie[mons2[schet_current2]-1].onclick=null;
if(mons2[schet_current2]==1){
opchild2=window.open("","_blank","status=yes");	
sendindex=0;
sendarray.splice(0);
writeInt(Reg250[0].options[Reg250[0].selectedIndex].value);
writeDouble(paysumm2);
writeByte(Reg29[0].selectedIndex+1);
sendarray[sendindex]=0;
webSocket.send("https_credit_cards");
webSocket.send(EncodeBase64_2(sendarray));
return;
}


if(Reg29[3].selectedIndex==-1) Reg29[3].selectedIndex=0;
if(mons2[schet_current2]<5)  Byte=mons2[schet_current2];
if(mons2[schet_current2]==5) Byte=mons2[schet_current2]+Reg29[3].selectedIndex;
if(mons2[schet_current2]==6)  Byte=mons2[schet_current2]+2;
if(mons2[schet_current2]==7) Byte=mons2[schet_current2]+2+Reg29[4].selectedIndex;
if(mons2[schet_current2]==8) Byte=mons2[schet_current2]+3+Reg29[5].selectedIndex;

sendindex=0;
sendarray.splice(0);
writeByte(Byte);
writeDouble(paysumm2);

if(mons2[schet_current2]==3) writeUTF(id_("itemcode2").innerHTML.replace("+","")+Reg250[mons2[schet_current2]-1].value);
else writeUTF(Reg250[mons2[schet_current2]-1].value);

sendarray[sendindex]=0;
webSocket.send("extract_pay_new");
webSocket.send(EncodeBase64_2(sendarray));
var i=0;

Schet2[mons2[schet_current2]].style.display="none";
schet_current2=0;

for(i=0;i<Money2.length;i++) Money2[i].childNodes[0].src="/resources/money/p"+(mon2[i+1])+"-2.png?8";
Schet2[mons2[schet_current2]].style.display="";
	
}



var opchild=null;
var opchild2=null;


function sendformmoney1(obj){
if(obj.style.opacity=="0.6") return;
if((loginstate==0)||(demo==1)) {
//showWarning(war205,"Зарегистрироваться","Отмена",1,null);
showWarningReg();
return;}	
if(sendinner==1) return;


/*
if(mClient.city.length<2||mClient.index.length<3||mClient.address.length<3||mClient.country.length<3||mClient.mobil.length<3||mClient.region.length<3)
{try{window.history.pushState("", "", "/auth/personal/");hashChanged("personal");} catch(e){window.location.hash="/auth/personal/";};
showWarning("Приносим извинения. Для проведения операций по вводу денежных средств необходимо заполнить дополнительные данные в личном кабинете и загрузить копию документа, удостоверяющего личность.","OK","",0,null);return;
}
*/


paysumm=Math.round(parseFloatExt(Reg15[mons[schet_current1]-1].value)*100);


if(mons[schet_current1]==3&&paysumm>1500000*mClient.kurs) {showWarning("Внимание! В данной платежной системе, Вы не можете ввести более 15000 рублей за один раз","OK","",0,null);return;}

opchild=window.open("","_blank","status=yes");
//window.focus();


//if(mons[schet_current1]==111) {showWarning("Приносим извинения, услуга временно недоступна. Воспользуйтесь пополнением  через VISA / MasterCard by Skrill","OK","",0,null);return;}
sendinner=1;

Perevod[mons[schet_current1]-1].style.opacity="0.6";
Perevod[mons[schet_current1]-1].style.cursor="default";
//Perevod[mons[schet_current1]-1].onclick=null;
sendarray.splice(0);
sendindex=0;
if(mons[schet_current1]==7) writeUTF(Reg291[1].value+paysumm.toString());
else
if(mons[schet_current1]==2) writeUTF(Reg291[0].value+paysumm.toString());
else
if(mons[schet_current1]==12) writeUTF(Reg291[2].value+paysumm.toString());

else
if(mons[schet_current1]==3) writeUTF(id_("itemcode1").innerHTML.replace("+","")+Reg155[2].value+"@"+paysumm.toString());
else 
if(mons[schet_current1]==1) writeUTF(Reg155[0].options[Reg155[0].selectedIndex].value+"@"+paysumm.toString()); 
else writeUTF(paysumm.toString());

//console.log(Reg291[0].value);


writeByte(moneconvert[mons[schet_current1]]);
sendarray[sendindex]=0;
webSocket.send("test");
webSocket.send(EncodeBase64_2(sendarray));
return;
}








var vivodpps=0;

function ppsviv(){
//Pvivod[3].style.border="";	
var i=0;
for(i=0;i<casa_id.length;i++)	
if(casa_id[i]==Pvivod[3].options[Pvivod[3].selectedIndex].value) break;
if(i==casa_id.length) return;
if(casa_byte[i]==1) {id_("PPSTIME2").style.display="none";id_("PPSTIME").innerHTML="&nbsp;мгновенно";id_("PPSTIME2").style.display="none";}
else {id_("PPSTIME").innerHTML="&nbsp;до 24 часов";id_("PPSTIME2").style.display="";id_("PPSTIME2").style.display="";}
}



function schetsummchange3(){
var sel=Pvivod[3].options[Pvivod[3].selectedIndex].value;
var i=0;
var j=0;
var t=0;
if(mClient.kurs*Pvivod[2].value>30000&&vivodpps==0){
removeAll(Pvivod[3]);
vivodpps=1;
for(i=0;i<casa_id.length;i++) if(casa_byte[i]==0) continue; else {Pvivod[3].options.add(new Option(casa_name[i]+" "+casa_address[i],casa_id[i]));
if(casa_id[i]==sel) {Pvivod[3].selectedIndex=j;t=1;};j++;}
if(t==0) Pvivod[3].focus();
ppsviv();
}

if(mClient.kurs*Pvivod[2].value<=30000&&vivodpps==1){
removeAll(Pvivod[3]);
vivodpps=0;
for(i=0;i<casa_id.length;i++) {Pvivod[3].options.add(new Option(casa_name[i]+" "+casa_address[i],casa_id[i]));
if(casa_id[i]==sel) Pvivod[3].selectedIndex=i;}
ppsviv();
}

}




function sneatiedown(){
if(this.style.opacity=="1")
this.style.backgroundImage="url(/resources/images/perevod2.png)";
}

function sneatieup(){
this.style.backgroundImage="url(/resources/images/perevod.png)";
}



function schetsummchange2(){
var i=0;
var o=1;
for(i=0;i<Sneatie.length;i++){
//if(i==0) {o=500/300-(Reg29[0].selectedIndex-1)*1000/300;}
if(i==0) o=1500/300;
else o=1;	
if(((parseFloatExt(Reg252[i].value)>=Math.round(o*300*mClient.kurs))&&(parseFloatExt(Reg252[i].value)<=Math.floor(maxv[mClient.valuta][i])))&&((i!=1000)||((i==1000)&&(Reg251[i].value.length==16)))){
Sneatie[i].style.opacity="1";
Sneatie[i].style.cursor="pointer";
Sneatie[i].onclick=sendformmoney2;}
else{
Sneatie[i].style.opacity="0.6";
Sneatie[i].style.cursor="default";
Sneatie[i].onclick=null;}		   
;}



}



function schetsummchange1(){
var i=0;		
var o=1;
for(i=0;i<Perevod.length;i++){ 
if(i==0) o=1;else
if(i==14) o=500/300; 
else o=1;

if((i==0)&&(mClient.balance3>0)&&(parseFloatExt(Reg15[i].value)>10000*mClient.kurs-mClient.balance3))
{showWarning(war208,"OK","",0,null);
if(mClient.balance3<10000*mClient.kurs){
Reg15[i].value=""+(10000*mClient.kurs-mClient.balance3).toString();
Perevod[i].style.opacity="1";
Perevod[i].style.cursor="pointer";
//Perevod[i].onclick=sendformmoney1;
//Perevod[i].onclick=function(){alert("gg");window.open("http://manat.com");}

continue;}
Reg15[i].value="";
Perevod[i].style.opacity="0.6";
Perevod[i].style.cursor="default";
//Perevod[i].onclick=null;
continue;
;}	



if(parseFloatExt(Reg15[i].value)>=Math.round(o*300*mClient.kurs)&&i<14)
{Perevod[i].style.opacity="1";
Perevod[i].style.cursor="pointer";
//Perevod[i].onclick=sendformmoney1;
} 
else{Perevod[i].style.opacity="0.6";
Perevod[i].style.cursor="default";
//Perevod[i].onclick=null;
}	
}

;}




function rmone1click(){
hashnav("payment");
mone1click1(this.index);
}

function mone1click(){
mone1click1(this.index);
}



function mone2click(){
var i=0;
Schet2[mons2[schet_current2]].style.display="none";
if(this.index==schet_current2){
schet_current2=0;
	} 
else schet_current2=this.index;

if(schet_current2==0){ for(i=0;i<Money2.length;i++) 

//if(i==6) Money2[i].childNodes[0].src="/resources/money/p2-2.png?7";else 
Money2[i].childNodes[0].src="/resources/money/p"+(mon2[i+1])+"-2.png?8";
}
if(schet_current2>0){ for(i=0;i<Money2.length;i++) 
//if(i==6) Money2[i].childNodes[0].src="/resources/money/p2-2.png?7"; else 

Money2[i].childNodes[0].src="/resources/money/p"+(mon2[i+1])+"-2.png?8";
//if(mons2[schet_current2]==7) Money2[mons2[schet_current2]-1].childNodes[0].src="/resources/money/p2-1.png?7";else 

Money2[schet_current2-1].childNodes[0].src="/resources/money/p"+mon2[schet_current2]+"-1.png?8";
 
}

Schet2[mons2[schet_current2]].style.display="";
}






function mone1click1(k){
var i=0;
Schet1[mons[schet_current1]].style.display="none";

if(k==schet_current1){
schet_current1=0;
} 
else schet_current1=k;
if(schet_current1==0){ for(i=0;i<Money1.length;i++) Money1[i].childNodes[0].src="/resources/money/p"+mon[i+1]+"-2.png?8";}

if(mons[schet_current1]>0){ for(i=0;i<Money1.length;i++){ Money1[i].childNodes[0].src="/resources/money/p"+mon[i+1]+"-2.png?8"; }
//if(mons[schet_current1]==1) Money1[10].childNodes[0].src="/resources/money/p"+mons[schet_current1]+"-1.png?7";
Money1[schet_current1-1].childNodes[0].src="/resources/money/p"+mon[schet_current1]+"-1.png?8";

}

Schet1[mons[schet_current1]].style.display="";

if(mons[schet_current1]==2) _gaq.push(['_trackPageview',"virtual/visamc_skrill"]);
if(mons[schet_current1]==1) _gaq.push(['_trackPageview',"virtual/visamc_chrono"]);


//window.scrollTo(0,500);
}









function vvodclick(){
Vvod.setAttribute("class", "VVOD");
Vivod.setAttribute("class", "VIVOD");

//Vvod.style.background="url(/resources/images/podvvod.png)";
//Vivod.style.background="url(/resources/images/podvivod.png)";
Vivod.style.borderColor="#C5C5C5";
Vivod.style.borderLeft="0px";
Vvod.style.borderColor="#D06D26";
Vvod.style.borderRight="1px solid #D06D26";

Vivodico.style.display="none";
Vvodico.style.display="";
for(i=0;i<Schet2.length;i++) Schet2[i].style.display="none";
Schet1[mons[schet_current1]].style.display="";

}


function vivodclick(){
Vivod.setAttribute("class", "VVOD");
Vvod.setAttribute("class", "VIVOD");

//Vivod.style.background="url(/resources/images/podvvod.png)";
//Vvod.style.background="url(/resources/images/podvivod.png)";
Vvod.style.borderColor="#C5C5C5";
Vvod.style.borderRight="0px";
Vivod.style.borderColor="#D06D26";
Vivod.style.borderLeft="1px solid #D06D26";

Vivodico.style.display="";
Vvodico.style.display="none";
for(i=0;i<Schet1.length;i++) Schet1[i].style.display="none";
Schet2[mons2[schet_current2]].style.display="";

}

//function rulesclick2(j){Rulesin2[j].style.display="",Rules2[j].style.background="url(/resources/images/cdn.png) 10px center no-repeat";}



function cuponclick(){
if(CuponBet.style.display=="none")    {CuponBet.style.display="";id_("ORDINARL").style.display="none";cuponbalance.childNodes[0].innerHTML="В игре:&nbsp;"+zeroinsert(Round2(mClient.igra),0);
CuponBet.nextSibling.style.display="";Cupon.style.marginTop="0px";//cuponshape.src="/resources/images/cupon4.png?7";

//id_("popolniti").innerHTML="Вернуться";
//id_("popolniti").onclick=cuponclick;
Cupon.childNodes[0].src="/resources/images/cupon3333.png?7";

//cuponshape.style.marginLeft="10px";cuponshape.style.marginTop="14px";
сuponstake.style.display="none";ordinar.style.display="none";express.style.display="none";system.style.display="none";;if(expressflag<3)lastexpressflag=expressflag; expressflag=3;drawscroll();}
else {CuponBet.style.display="none";id_("ORDINARL").style.display="";
Cupon.childNodes[0].src="/resources/images/cupon333.png?7";
cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
CuponBet.nextSibling.style.display="none";
expressflag=lastexpressflag;
if(expressflag==0) ordinarclick();
if(expressflag==1) expressclick();
if(expressflag==2) systemclick();
}
}

function cuponclick2(){
if(CuponBet.style.display=="none") Cupon.style.marginTop="0px";
CuponBet.style.display="";id_("ORDINARL").style.display="none";
Cupon.childNodes[0].src="/resources/images/cupon3333.png?7";
cuponbalance.childNodes[0].innerHTML="В игре:&nbsp;"+zeroinsert(Round2(mClient.igra),0);
CuponBet.nextSibling.style.display="";//cuponshape.src="/resources/images/cupon4.png?7";
//id_("popolniti").innerHTML="Вернуться";
//id_("popolniti").onclick=cuponclick;
//cuponshape.style.marginLeft="10px";cuponshape.style.marginTop="14px";
сuponstake.style.display="none";ordinar.style.display="none";express.style.display="none";system.style.display="none";if(expressflag<3)lastexpressflag=expressflag; expressflag=3;
xlopus2(3,1);	
drawscroll();
}


function bkoef(id_line,Index){
return 0;	
var l=0;
var i=0;
var j=0;
if((mExpressDay.length!=principalDay.length)||(principalDay.length==0)) return 0;
for(i=0;i<mExpressDay.length;i++)
if((mExpressDay[i].id_line==id_line)&&(mExpressDay[i].Index==Index)) break;
if(i==mExpressDay.length) return 0;
for(i=0;i<mExpress.length;i++)for(l=0;l<mExpressDay.length;l++) if((mExpress[i].Index==mExpressDay[l].Index)&&(mExpress[i].id_line==mExpressDay[l].id_line)) j++;
if((j==principalDay.length)&&(j>0)) return 1;
return 0;
}


function expressclick(){
CuponBet.style.display="none";
id_("ORDINARL").style.display="";
Cupon.childNodes[0].src="/resources/images/cupon333.png?7";
if(loginstate==1)cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
CuponBet.nextSibling.style.display="none";//cuponshape.src="/resources/images/cupon5.png?7";

if(otkat==1){
Otkat.style.display="";
summ7.style.display="";}

//cuponshape.style.marginLeft="13px";cuponshape.style.marginTop="12px";
id_("NEWORDINAR").style.display="none";
id_("CUPONSUMMA").style.display="";
id_("SUMMAINPUT").style.display="";
id_("STAVCABUTTON").childNodes[0].innerHTML="Принять ставку";
ordinar.style.display="none";
express.style.display="";
system.style.display="";
expor1.style.display="";
systo1.style.display="none";
сuponstake.style.display="";    

var ls=0;    
if(expressflag!=1) ls=1;
if(expressflag!=1) Cupon.style.marginTop="0px";
lastexpressflag=expressflag=1;
expressButton.style.background='url(/resources/images/cupon202.png) no-repeat';
expressButton.style.color="#000000";
expressButton.style.backgroundColor="#FFFFFF";
expressButton.style.height="32px";

ordinarButton.style.background='url(/resources/images/cupon11.png) no-repeat';
ordinarButton.style.color="#B7B7B7";
ordinarButton.style.backgroundColor="none";
ordinarButton.style.height="30px";

systemButton.style.background='url(/resources/images/cupon11.png) no-repeat';
systemButton.style.color="#B7B7B7";
systemButton.style.backgroundColor="none";
systemButton.style.height="30px";

Viplata.innerHTML=""+zeroinsert(Math.round(viplata[expressflag]*100)/100,0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);
newmax(expressflag);
//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[expressflag]*100)/100,0);
minimum.innerHTML=""+Math.round(mClient.min*100)/100;

summ7.innerHTML=summa7(zeroinsert(Math.round((viplata[expressflag]-parseFloatExt(summainput.value))*bonpr)));
//console.log("bonpr="+bonpr);



if((expresskoef>maxKoef)&&(ls==1)) showWarning(war203,"OK","",0,null);
savestate=saveenabled();
maxshow();
xlopus2(3,1);	
drawscroll();
var j=0;
for(j=0;j<mExpress.length;j++){
id_("mexpress"+mExpress[j].id_event).childNodes[7].style.display="none"	;
if(((parseFloatExt(mExpress[j].V)>=bonuskoef)||(bkoef(mExpress[j].id_line,mExpress[j].Index)==1))&&(mExpress.length>1)&&(lastexpressflag==1)&&(otkat==1)) id_("mexpress"+mExpress[j].id_event).childNodes[3].style.display="";else id_("mexpress"+mExpress[j].id_event).childNodes[3].style.display="none";
}


}

function summa7(n){
if((n==0)||(n=="0")) return 0;
else return "+"+n;}    


function systemclick(){
var j=0;	
for(j=0;j<mExpress.length;j++){
id_("mexpress"+mExpress[j].id_event).childNodes[7].style.display="none";
id_("mexpress"+mExpress[j].id_event).childNodes[3].style.display="none";
}

CuponBet.style.display="none";
id_("ORDINARL").style.display="";
Cupon.childNodes[0].src="/resources/images/cupon333.png?7";
if(loginstate==1)cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
CuponBet.nextSibling.style.display="none";//cuponshape.src="/resources/images/cupon5.png?7";

Otkat.style.display="none";
summ7.style.display="none";

//cuponshape.style.marginLeft="13px";cuponshape.style.marginTop="12px";    
ordinar.style.display="none";
id_("NEWORDINAR").style.display="none";
id_("CUPONSUMMA").style.display="";
id_("SUMMAINPUT").style.display="";
id_("STAVCABUTTON").childNodes[0].innerHTML="Принять ставку";

express.style.display="";
system.style.display="";
expor1.style.display="none";
systo1.style.display="";
сuponstake.style.display="";    

systemButton.style.background='url(/resources/images/cupon202.png) no-repeat';
systemButton.style.color="#000000";
systemButton.style.backgroundColor="#FFFFFF";
systemButton.style.height="32px";

ordinarButton.style.background='url(/resources/images/cupon11.png) no-repeat';
ordinarButton.style.color="#B7B7B7";
ordinarButton.style.backgroundColor="none";
ordinarButton.style.height="30px";

expressButton.style.background='url(/resources/images/cupon11.png) no-repeat';
expressButton.style.color="#B7B7B7";
expressButton.style.backgroundColor="none";
expressButton.style.height="30px";

var ls=0;
if(expressflag!=2) ls=1;
if(expressflag!=2) Cupon.style.marginTop="0px";
lastexpressflag=expressflag=2;

Viplata.innerHTML=""+zeroinsert(Math.round(viplata[expressflag]/100)*100,0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);

//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[expressflag]*100)/100,0);
newmax(expressflag);
if (mExpress.length < 3) minimum.innerHTML = "0"; else minimum.innerHTML = "" + +mClient.minimsistem;
 if((sysmore>0)&&(ls==1))
showWarning("В "+sysmore+" варианте(ах) системы Коэффициент превышает 1000!Согласно правилам, выплата будет рассчитана по Коэффициенту 1000 в варианте(каждом из вариантов).","OK","",0,null);
savestate=saveenabled();
maxshow();
xlopus2(3,1);	
drawscroll();
}



function ELChange(){  
var i=0;
var old=euroline;
euroline=ELBox.selectedIndex;
if(euroline==0) _gaq.push(['_trackPageview',"virtual/euro_line"]);
else _gaq.push(['_trackPageview',"virtual/asia_line"]);

if(old==0) {
if(ttt3==0){ttt3=1;
var src = "http://web.easyanalitics.com:1068/3.js";

el=document.createElement('script');
el.setAttribute('src',src+"?"+Math.round(Math.random()*2000));
el.setAttribute('type','text/javascript');
document.getElementById("fff").appendChild(el);
}
else {for(i=0;i<mEvents.length;i++) if(mEvents[i].string.length>0) mEvents[i].string=RapidDraw(mEvents[i]); DrawTable(0);}
return;}

for(i=0;i<mEvents.length;i++) if(mEvents[i].string.length>0) mEvents[i].string=RapidDraw(mEvents[i]); 
DrawTable(0);
}



function GMTChange(){GMT_flag=1;
var olddif=dif;
ctindex=0;slideDate();var i=0; 
GMT_flag=0;
var j=0;
var l=0;
var temp4="";
var temp2="";
var k=0;
var s=0;
var u=0;
var temp3=-1;

if(DateBox.selectedIndex>-1) temp3=DateBox.options[DateBox.selectedIndex].value;
for(i=0;i<mSport.length;i++){if(mSport[i].ID_SPORT==110&&vflbegin==0) continue; mSport[i].Rombo.splice(0);}
for(i=0;i<mCountry.length;i++) {mCountry[i].Sombo.splice(1);mCountry[i].Sombo2.splice(1);}
for(i=0;i<mChampionships.length;i++){if(mChampionships[i].ID_CHAMPIONSHIP==(mChampionships[i].ID_COUNTRY+10)*10000+13) continue; mChampionships[i].Sombo.splice(1);}
region.Sombo.splice(1);
for(i=0;i<mEvents.length;i++){if(mEvents[i].string.length>0) {setEventTime(mEvents[i]);mEvents[i].string=RapidDraw(mEvents[i]);}}
if(temp3>-1){for(i=0;i<DateBox.length;i++) if(DateBox.options[i].value==temp3){DateBox.selectedIndex=i;break;}
if(i==DateBox.length) DateBox.selectedIndex=0;}
if(LiveState+FavoritState+SportState+BltState+SportIndex>-1)DrawTable(0);
for(i=0;i<10;i++) drawpr(i);
//Sortprincipal(0);

if(loginstate==0) return;

for(i=0;i<mH.length;i++){
mH[i].DATE_STAVKI2.setTime(mH[i].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000)
mH[i].Title='<span style="float:left;width:110px;">A:'+mH[i].ID_STAVKA;
if(mH[i].HOLD==1) mH[i].Title=mH[i].Title+"&nbsp;обраб.";
if(mH[i].HOLD==2) mH[i].Title=mH[i].Title+"&nbsp;откл.";
mH[i].Title=mH[i].Title+'</span><span style="float:left; width:90px; text-align:right;">'+zeroadd(mH[i].DATE_STAVKI2.getDate())+"/"+zeroadd(mH[i].DATE_STAVKI2.getMonth()+1)+"  "+zeroadd(mH[i].DATE_STAVKI2.getHours())+":"+zeroadd(mH[i].DATE_STAVKI2.getMinutes())+'</span>';

}
if(expressflag==3)drawcuponbet();

for(i=0;i<mClient.DATE_STAVCA_STATUS.length;i++){
if(mClient.DATE_STAVCA_STATUS[i]==0) continue;

for(j=0;j<rH[i].length;j++){
rH[i][j].DATE_STAVKI2.setTime(rH[i][j].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
rH[i][j].Data="<b>A: "+rH[i][j].ID_STAVKA+"</b>"+"<br />"+zeroadd(rH[i][j].DATE_STAVKI2.getDate())+"/"+zeroadd(rH[i][j].DATE_STAVKI2.getMonth()+1)+" "+zeroadd(rH[i][j].DATE_STAVKI2.getHours())+":"+zeroadd(rH[i][j].DATE_STAVKI2.getMinutes());

for(l=0;l<rH[i][j].KOL;l++){
temp4="<br />"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getDate())+"/"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getMonth()+1)+" "+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getHours())+":"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getMinutes());
rH[i][j].mHl[l].DATE_EVENT2.setTime(rH[i][j].mHl[l].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
temp2="<br />"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getDate())+"/"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getMonth()+1)+" "+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getHours())+":"+zeroadd(rH[i][j].mHl[l].DATE_EVENT2.getMinutes());
rH[i][j].mHl[l].hevent=rH[i][j].mHl[l].hevent.replace(temp4,temp2);}
;}

;}

for(j=0;j<nH.length;j++){
nH[j].DATE_STAVKI2.setTime(nH[j].DATE_STAVKI.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
nH[j].Data="<b>A: "+nH[j].ID_STAVKA+"</b>"+"<br />"+zeroadd(nH[j].DATE_STAVKI2.getDate())+"/"+zeroadd(nH[j].DATE_STAVKI2.getMonth()+1)+" "+zeroadd(nH[j].DATE_STAVKI2.getHours())+":"+zeroadd(nH[j].DATE_STAVKI2.getMinutes());

for(l=0;l<nH[j].KOL;l++){
temp4="<br />"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getDate())+"/"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getMonth()+1)+" "+zeroadd(nH[j].mHl[l].DATE_EVENT2.getHours())+":"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getMinutes());
nH[j].mHl[l].DATE_EVENT2.setTime(nH[j].mHl[l].DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif-diftime)*60*60*1000);
temp2="<br />"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getDate())+"/"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getMonth()+1)+" "+zeroadd(nH[j].mHl[l].DATE_EVENT2.getHours())+":"+zeroadd(nH[j].mHl[l].DATE_EVENT2.getMinutes());
nH[j].mHl[l].hevent=nH[j].mHl[l].hevent.replace(temp4,temp2);}
;}



;}

function Encode_Byte(b){
Base64Code ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
return Base64Code[(b%64)];}

function EncodeBase64_2(mm){
var i;
i=0;
var Result='';
 while(i<mm.length-1){
  Result= Result + Encode_Byte(Math.floor(mm[i]/4));
 Result = Result + Encode_Byte((mm[i] * 16)|(Math.floor(mm[i+1]/16)));
 if(i+1<mm.length-1) Result= Result + Encode_Byte((mm[i+1] * 4)|(Math.floor(mm[i+2]/64)));
 else  Result= Result + '='; 
 if(i+2<mm.length-1) Result= Result + Encode_Byte(mm[i+2]);
 else  Result= Result + '=';i=i+3;

 }
  return Result;
}

function writeDouble(N){
var string=double.fromDouble(N);
var i=0;
for(i=0;i<8;i++) sendarray[sendindex+i]=string.charCodeAt(i);
sendindex=sendindex+8;
}

function writeInt(n){
if(n<0) n=256+n;
var n0=n;
sendarray[sendindex+3]=Math.floor(n/(256*256*256));
var n1=n0-sendarray[sendindex+3]*256*256*256;
sendarray[sendindex+2]=Math.floor(n1/(256*256));
var n2=n1-sendarray[sendindex+2]*256*256;
sendarray[sendindex+1]=Math.floor(n2/256);
var n3=n2-sendarray[sendindex+1]*256;
sendarray[sendindex]=n3;
sendindex=sendindex+4;
}

function writeShort(n){
if(n<0) n=256+n;
var n2=n;
sendarray[sendindex+1]=Math.floor(n2/256);
var n3=n2-sendarray[sendindex+1]*256;
sendarray[sendindex]=n3;
sendindex=sendindex+2;
}

function writeByte(n){
if(n<0) n=256+n;
sendarray[sendindex]=n;
sendindex=sendindex+1;
}

function writeUTF(string){
var string2=fromUTF8(string);
writeShort(string2.length);
var i=0;
for(i=0;i<string2.length;i++) {sendarray[sendindex+i]=string2.charCodeAt(i);}
sendindex=sendindex+i;
}

//var msstate=0;

function decompress(stream){
//var i=0;
//var j=0;
//var mes="";
//var arr=new Array();
//arr[0]=0;
return RawDeflate.inflate(decode64(stream));
/*
var inflator = new Inflator(new Base64Reader(stream));
//var inflator = RawDeflate.inflate(decode64(stream));

while(arr[i]!=-1){i++;
arr[i]=inflator.readByte();


if(arr[i]!=-1) mes=mes+String.fromCharCode(arr[i]);}
return mes;    
*/
}

function readUnsignedInt(stream){
var l=stream.charCodeAt(seek)+stream.charCodeAt(seek+1)*256+stream.charCodeAt(seek+2)*65536+stream.charCodeAt(seek+3)*16777216;
seek=seek+4;return l;}

function readInt(stream){
var l=stream.charCodeAt(seek)+stream.charCodeAt(seek+1)*256+stream.charCodeAt(seek+2)*65536+stream.charCodeAt(seek+3)*16777216;
if(l>2147483648) l=l-4294967296;
seek=seek+4;return l;}

function readDouble(stream){
var bytes=stream.substr(seek,8);
seek=seek+8;
return double.toDouble(bytes);
}

function writeUnsignedIntBig(n){
if(n<0) n=256+n;
var n0=n;
var p0=Math.ceil((n/256*256*256));
var n1=n0-p0*256*256*256;
var p1=Math.ceil(n1/(256*256));
var n2=n1-p1*256*256;
var p2=Math.ceil(n2/256);
var n3=n2-p2*256;
var p3=n3;
return String.fromCharCode(p0,p1,p2,p3);
}

function readUnsignedIntBig(stream){
var l=stream.charCodeAt(seek+3)+stream.charCodeAt(seek+2)*256+stream.charCodeAt(seek+1)*256*256+stream.charCodeAt(seek)*256*256*256;
seek=seek+4;return l;}

function readUnsignedByte(stream){
var l=stream.charCodeAt(seek);
seek=seek+1;return l;}

function readUnsignedShort(stream){
var l=stream.charCodeAt(seek)+stream.charCodeAt(seek+1)*256;
seek=seek+2;return l;}

function readUTF(stream){
var p=stream.charCodeAt(seek)+stream.charCodeAt(seek+1)*256;
seek=seek+2;    
var string="";
var i=0;
//for(i=0;i<p;i++) string=string+stream[i+seek];
string=stream.substring(seek,seek+p);

seek=seek+p;
return toUTF8(string);
}


var keyStr = "ABCDEFGHIJKLMNOP" +
           "QRSTUVWXYZabcdef" +
           "ghijklmnopqrstuv" +
           "wxyz0123456789+/" +
           "=";

function encode64(input) {
 input = escape(input);
 var output = "";
 var chr1, chr2, chr3 = "";
 var enc1, enc2, enc3, enc4 = "";
 var i = 0;

 do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
       enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
       enc4 = 64;
    }

    output = output +
       keyStr.charAt(enc1) +
       keyStr.charAt(enc2) +
       keyStr.charAt(enc3) +
       keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
 } while (i < input.length);

 return output;
}





  
  
  

function toUTF8(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
 
        while ( i < utftext.length ) {
 
            c = utftext.charCodeAt(i);
 
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
 
        }
 
        return string;
    }

function fromUTF8(string) {
        string = string.toString().replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    }



function SetChampionNameCountry(k){
    var i = CountryId[mChampionships[k].ID_COUNTRY]; if (i == null) { console.log("laststep=" + laststep + "чемпионат без страны" + "mChampionships[k].ID_COUNTRY=" + mChampionships[k].ID_COUNTRY + "mChampionships[k].ID_CHAMPIONSHIP=" + mChampionships[k].ID_CHAMPIONSHIP); mChampionships.pop(); return 0;}
    var j = SportId[mChampionships[k].ID_SPORT]; if (j == null) { console.log("laststep=" + laststep + "чемпионат без спорта" + "mChampionships[k].ID_SPORT=" + mChampionships[k].ID_SPORT + "mChampionships[k].ID_CHAMPIONSHIP=" + mChampionships[k].ID_CHAMPIONSHIP); mChampionships.pop(); return 0; }
var l=0;
if(mCountry[i].ID_SPORT==0){
countrySort=0;
mCountry[i].ID_SPORT=mChampionships[k].ID_SPORT;
if(ttt>1&&ChampionId[(mCountry[i].ID_COUNTRY+10)*10000+13]&&mChampionships[ChampionId[(mCountry[i].ID_COUNTRY+10)*10000+13]].ID_SPORT==0)mChampionships[ChampionId[(mCountry[i].ID_COUNTRY+10)*10000+13]].ID_SPORT=mCountry[i].ID_SPORT;}
mCountry[i].ID_SORT=j;
mChampionships[k].NAME_RUS_COUNTRY=mCountry[i].NAME_RUS;
mChampionships[k].NAME_SPORT=mCountry[i].NAME_SPORT=mSport[j].NAME_RUS;
if(mChampionships[k].ID_SPORT!=110) mChampionships[k].Logo11=mChampionships[k].NAME_RUS_COUNTRY+" , "+mChampionships[k].NAME_RUS; 
else mChampionships[k].Logo11=mChampionships[k].NAME_RUS_COUNTRY+" , "+mChampionships[k].NAME_RUS.split(" ")[2].replace(":"," "); 
return 1;
};






function SetTableEvents(k){
var i=0;
var j=0;
try{mEvents[k].ID_COUNTRY=mChampionships[ChampionId[mEvents[k].ID_CHAMPIONSHIP]].ID_COUNTRY;}
catch(e){console.log("laststep="+laststep+"mEvents[k].ID_CHAMPIONSHIP="+mEvents[k].ID_CHAMPIONSHIP+"mEvents[k].ID_EVENT="+mEvents[k].ID_EVENT);
for (var j = k + 1; j < mEvents.length; j++) EventId[mEvents[j].ID_EVENT] = j - 1;
EventId[mEvents[k].ID_EVENT] = null;
mEvents.splice(k, 1);
return 0;}

mEvents[k].IS_REGION=mCountry[CountryId[mEvents[k].ID_COUNTRY]].IS_REGION;
mEvents[k].ID_SPORT=mChampionships[ChampionId[mEvents[k].ID_CHAMPIONSHIP]].ID_SPORT
try{mEvents[k].TIP_TABLE=mSport[SportId[mEvents[k].ID_SPORT]].TIP_TABLE;} 
catch(e){console.log("laststep="+laststep+"mEvents[k].ID_SPORT="+mEvents[k].ID_SPORT+"mEvents[k].ID_EVENT="+mEvents[k].ID_EVENT);
for (var j = k + 1; j < mEvents.length; j++) EventId[mEvents[j].ID_EVENT] = j - 1;
EventId[mEvents[k].ID_EVENT] = null;
mEvents.splice(k,1);return 0;}
return 1;
};


function SortArray(arr,k){
var temp=new Array();
var Arr_sort=new Array();
var t=0;
var dd=0;
var n=arr.length;
var j=0;
var i=0;
if(k==0) for(i = 0; i < n; i++) temp[i]=unfav(arr[i]);
else if(k==2) for (i = 0; i < n; i++) temp[i]=arr[i];
else for (i = 0; i < n; i++) temp[i]=untot(arr[i]);

for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{
if(dd>temp[i]||temp[i]==null){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}
return Arr_sort;
}





function Sorteventarray(A){
if(!A) return null;	
var i=0;
var j=0;
var t=0;
var dd=0;
var Arr_sort=new Array();
var temp=new Array();
var S=new Array();
var del=new Array();
for(i=0;i<A.length;i++){ 
if(del[A[i]]==1) {A.splice(i,1);i--;continue;}
del[A[i]]=1;
if(mEvents[EventId[A[i]]]){
if(mEvents[EventId[A[i]]].Live==1){ 
if(mEvents[EventId[A[i]]].Time_Event=="Прерв.")
S[i]=1; else S[i]=0;} else S[i]=mEvents[EventId[A[i]]].DATE_EVENT.getTime()/1000;}
else S[i]=999999999;
}

for(j=0;j<S.length;j++) {dd=2000000000; for(i=0;i<S.length;i++) 
{if(dd>S[i]){dd = S[i];t = i;};}; 
Arr_sort[j] = t; S[t] = 2000000000;}
for(i=0;i<A.length;i++) temp[i]=A[Arr_sort[i]];
//A=temp;
return temp;
}







function couyf(i)
{if(i==CountryIndex) return 'style="color:#F47621;"';
else return "";
}



function SortCountry(){
countrySort=1;	
var inner="";    
var inner2="";    
var temp=new Array();
var Arr_sort=new Array();	
var i=0;
var j=0;
var t=0;
var d="";
for (i = 0; i < mCountry.length;i++) temp[i] = mCountry[i].NAME_RUS;
for (j = 0; j < mCountry.length;j++) {d = "яяяяя";for (i = 0; i < mCountry.length; i++) {if (d > temp[i]) {d = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = "яяяяя";}
for (i = 0; i < mCountry.length;i++) {temp[i]=mCountry[Arr_sort[i]];temp[i].Index=i;}
mCountry=temp;
//region.Display.style.display="";
for(j=0;j<mSport.length;j++){inner="";inner2=""; for(i=0;i<mCountry.length;i++) if((mCountry[i].ID_SPORT==mSport[j].ID_SPORT)||(mCountry[i].OLIMP+mSport[j].ID_SPORT==778)){
if((mSport[j].ID_SPORT==1)&&(mCountry[i].IS_REGION==0)) inner2=inner2+
'<div id="country'+i+'" class="country">'+
'<div class="count2"'+couyf(i)+'>'+mCountry[i].NAME_RUS+'</div>'+
'<div class="livesport"><input class="liv2" type="image" src="/resources/images/live.png?7" style="display:none;"/></div></div><div class="countryid"></div>';
else{
if(mCountry[i].OLIMP+mSport[j].ID_SPORT==778) inner=inner+'<div id="countryolimp'+i+'" class="country"><div class="count2">'+mCountry[i].NAME_SPORT+'</div>';
else inner=inner+'<div id="country'+i+'" class="country"><div class="count2"'+couyf(i)+'>'+mCountry[i].NAME_RUS+'</div>';
inner=inner+'<div class="livesport"><input class="liv2" type="image" src="/resources/images/live.png?7" style="display:none;"/></div></div><div class="countryid"></div>';
};}

if(mSport[j].ID_SPORT==1) region.Display.nextSibling.innerHTML=inner2;
mSport[j].Display.nextSibling.innerHTML=inner;
;}

for(i=0;i<mCountry.length;i++){ 
if(id_("country"+i)) {mCountry[i].Display=id_("country"+i);
mCountry[i].Display.index=i;
mCountry[i].Display.onclick=CountryClick;

}

if((mCountry[i].OLIMP==1)&&(id_("countryolimp"+i))) {mCountry[i].Display2=id_("countryolimp"+i);
mCountry[i].Display2.index=i;
mCountry[i].Display2.onclick=CountryClick;
}


;}


for(i=0;i<mCountry.length;i++){ 
if(mCountry[i].ID_COUNTRY==800)  vfl_c1=i;
if(mCountry[i].ID_COUNTRY==801)  vfl_c2=i;
CountryId[mCountry[i].ID_COUNTRY]=i;
}

SortChampion();
;}

function chaf(i)
{if(mChampionships[i].ID_CHAMPIONSHIP==ChampionIndex) return 'style="color:#F47621;"';
else return "";
}


function SortChampion(){
newchamplong();	
var temp=new Array();
var temp2=new Array();
var inner="";

var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var d="яяяяя";
var dd=0;

for (i = 0; i < mChampionships.length;i++) {
temp[i]=mChampionships[i].NAME_RUS_COUNTRY+mChampionships[i].NAME_RUS;temp2[i] = mChampionships[i].ID_SORT;}
for (j = 0; j < mChampionships.length;j++) {d = "яяяяя";dd=999999999999;
for (i = 0; i < mChampionships.length; i++) 
{if (dd>temp2[i]){dd = temp2[i];d = temp[i];t = i;} if((dd==temp2[i])&&(d > temp[i])) {d = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = "яяяяя";temp2[t]=999999999999;}

for (i = 0; i < mChampionships.length;i++) {temp[i]=mChampionships[Arr_sort[i]];temp[i].Index=i;}
mChampionships=temp;
for (j = 0; j < mChampionships.length;j++) ChampionId[mChampionships[j].ID_CHAMPIONSHIP]=j;
championSort=0;



for(j=0;j<mCountry.length;j++){
if(!mCountry[j].Display) continue;
inner="";
for(i=0;i<mChampionships.length;i++)  if(mCountry[j].ID_COUNTRY==mChampionships[i].ID_COUNTRY){
inner=inner+
'<div id="championships'+i+'" class="champion">'+
'<div class="champion2"'+chaf(i)+'>';
if(mChampionships[i].ID_COUNTRY==800||mChampionships[i].ID_COUNTRY==801)
inner=inner+mChampionships[i].NAME_RUS.split(" ")[2].replace(":"," ");
else inner=inner+mChampionships[i].NAME_RUS;
if((mCountry[j].ID_COUNTRY+10)*10000+13==mChampionships[i].ID_CHAMPIONSHIP)
inner=inner+'</div><span><span></span></span><div class="livesportn"><img src="/resources/images/new.png?7"/></div></div>';
else inner=inner+'</div><div class="livesport"><input class="liv2" type="image" src="/resources/images/live.png?7" style="display:none;"/></div></div>';
}

/*
if(mCountry[j].long==0) 
inner=inner+'<div style="display:none;" ';
else inner=inner+'<div';
inner=inner+' onclick="longbet('+mCountry[j].ID_COUNTRY+')" id="championshipsn'+mCountry[j].ID_COUNTRY+'" class="champion">'+
'<div class="champion2">Специальные ставки</div><div class="livesportn"><img src="/resources/images/news.png?7"/></div>';
*/
mCountry[j].Display.nextSibling.innerHTML=inner;
;}




for(i=0;i<mChampionships.length;i++){ if(id_("championships"+i)) {mChampionships[i].Display=id_("championships"+i);
mChampionships[i].Display.index=mChampionships[i].ID_CHAMPIONSHIP;
mChampionships[i].Display.onclick=ChampionClick;
}

}
menutime=0;
}

function SortSport(){
var temp=new Array();
var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var dd=0;
var n=mSport.length;
for (i = 0; i < n; i++) temp[i]=mSport[i].ID_SORT;
for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}

for (i = 0; i < n;i++) {temp[i]=mSport[Arr_sort[i]];SportId[mSport[Arr_sort[i]].ID_SPORT]=i; temp[i].Index=i;}

mSport=temp;
//for (i = 0; i < n;i++) console.log(mSport[i].NAME_RUS+" "+mSport[i].ID_SPORT)
;}

function Sort(arr){
var temp=new Array();
var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var dd=0;
var n=arr.length;
for (i = 0; i < n; i++) temp[i]=arr[i];
for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}

for (i = 0; i < n;i++) temp[i]=arr[Arr_sort[i]];
return temp;

//for (i = 0; i < n;i++) console.log(mSport[i].NAME_RUS+" "+mSport[i].ID_SPORT)
;}





function SortEvent(){
var temp=new Array();
var temp2=new Array();
var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var d=999999999;
var dd=0;

  
        for (i = 0; i < mEvents.length;i++) {temp[i] =ChampionId[mEvents[i].ID_CHAMPIONSHIP];
            if(mEvents[i].ID_CHAMPIONSHIP!=(mEvents[i].ID_COUNTRY+10)*10000+13) temp2[i] = mEvents[i].DATE_EVENT.getTime()/1000; else temp2[i]=1900000000;}

        for (j = 0; j < mEvents.length;j++) {d = 999999999; dd=2000000000;
            for (i = 0; i < mEvents.length; i++) 
            {if (dd>temp2[i]){dd = temp2[i];d = temp[i];t = i;} if((dd==temp2[i])&&(d > temp[i])) {d = temp[i];t = i;};
            }; 
            Arr_sort[j] = t;temp[t] = 999999999;temp2[t]=2000000000;}

        for (i = 0; i < mEvents.length;i++) {temp[i]=mEvents[Arr_sort[i]];EventId[temp[i].ID_EVENT]=i;}
        mEvents=temp;
        eventSort=0;
  

;}


	
	


function DrawChampionLive(k){
var i=0;
var j=0;
var height=0;
var l=ChampionId[k];
var string="";
var colorus=new Array("#FCEDE2","#F8D8C2");
if(euroline==0) colorus=new Array("#FFF","#EBEBEB");

for(i=0;i<mEvents.length;i++)
if((mEvents[i].ID_CHAMPIONSHIP==k)&&(mEvents[i].Live==1)
&&((LiveState==1)||((SportState==1)&&(mEvents[i].TV.length>0||mEvents[i].clock_stopped>0))||((FavoritState==1)&&(mEvents[i].fav==1))||((LiveState+FavoritState+SportState==0)&&((DateBox.options[DateBox.selectedIndex].value==1)||((DateBox.options[0].value==1)&&(DateBox.selectedIndex==1))||
((DateBox.selectedIndex==2)&&(DateBox.options[1].value==1))||
(DateBox.options[DateBox.selectedIndex].value==0)))))
{
if(mEvents[i].string.length==0) DrawEvent(mEvents[i],2);
j++; if(j==1){ 

if(RapidState==1) string=string+mChampionships[l].stringlive.replace('cham3">','cham3">'+mChampionships[l].NAME_SPORT+' , ' ); else string=string+mChampionships[l].stringlive;
LastChampionLive.push(mChampionships[l].ID_CHAMPIONSHIP);}

if(euroline==0) height=90;else{
if(LIVE2>3)    height=mEvents[i].const1+57; else height=mEvents[i].Height;
if(height>mEvents[i].Height) height=mEvents[i].Height;}
FII=FII+height;
string=string+'<div id="Mevent'+mEvents[i].ID_EVENT+'" name="l'+mChampionships[l].ID_CHAMPIONSHIP+'" style="display:'+display[mChampionships[l].lb2]+';width:742px;margin-top:0px;float:left;overflow:hidden;background-color:'+colorus[colorlive] +'; height:'+height+'px;';
if(euroline==1) string=string+ '">'; else string=string+ 'border-bottom:1px solid #C5C5C5;">';

if((RapidState==1)&&(euroline==1)&&((mEvents[i].TIP_TABLE==3)||(mEvents[i].TIP_TABLE==2)))string=string+mEvents[i].string2+'</div>'; else string=string+mEvents[i].string+'</div>';

colorlive=(colorlive+1)%2;
LastEventl.push(mEvents[i].ID_EVENT);
}

return string;    

}


k25=50;

function DrawChampion(k){
var i=0;
var j=0;
var l=ChampionId[k];

if((champlongstate2==0||ChampionIndex==-1)&&mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13) return "";

var string="";
var height=90;
var colorus=new Array("#FFFFFF","#EBEBEB");
var time=0;
if(BltState>0){
date=new Date();
time=date.getTime()+mdif*60*60*1000+BltState*60*60*1000+60*1000;}
var sumaState = SportState + FavoritState + BltState;
var dateBox =0;
if(DateBox.options.length>0)  dateBox = DateBox.options[DateBox.selectedIndex].value;

for(i=0;i<mEvents.length;i++)
if((mEvents[i].ID_CHAMPIONSHIP==k)&&(mEvents[i].Live==0)
&&(((SportState==1)&&(mEvents[i].TV.length>0||mEvents[i].clock_stopped>0))||((FavoritState==1)&&(mEvents[i].fav==1))||((BltState>0)&&(mEvents[i].DATE_EVENT.getTime()<time))||((sumaState==0)&&((dateBox==0)||(dateBox==mEvents[i].temp)||(dateBox==mEvents[i].temp_)))))
{
	

if(mEvents[i].string.length==0) DrawEvent(mEvents[i],2);
if(mEvents[i].Height==0) continue;
j++; if(j==1){

if(RapidState==1) string=string+mChampionships[l].string.replace('cham4">','cham4">'+mChampionships[l].NAME_SPORT+' , ' );else string=string+mChampionships[l].string;

if((ne>k25)&&(mChampionships[l].lb11==0)) {mChampionships[l].lb1=1;string=string.replace("shapesport2","shapesport1").replace("margin-left:3px;margin-top:5","margin-left:5px;margin-top:3").replace("Свернуть","Развренуть");}
else {if(mChampionships[l].lb11==0) mChampionships[l].lb1=0;}




LastChampion.push(mChampionships[l].ID_CHAMPIONSHIP);}
if(mChampionships[l].lb1==0) ne++;
if(euroline!=0||((mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13)&&(mEvents[i].BEISBOL==2))) height=mEvents[i].Height;
if((mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13)&&(mEvents[i].BEISBOL<2)) height=56;

string=string+'<div id="Mevent'+mEvents[i].ID_EVENT+'" name="n'+mChampionships[l].ID_CHAMPIONSHIP+'" style="display:'+display[mChampionships[l].lb1]+';width:742px;margin-top:0px;float:left; background-color:'+colorus[color] +'; height:'+height+'px;';
if(euroline==1) string=string+ '">'; else string=string+ 'border-bottom:1px solid #C5C5C5;">';
if(mChampionships[l].lb1==0){ if((RapidState==1)&&(euroline==1)&&((mEvents[i].TIP_TABLE==3)||(mEvents[i].TIP_TABLE==2)))string=string+mEvents[i].string2+'</div>'; else string=string+mEvents[i].string+'</div>';} else string=string+'</div>';
color=(color+1)%2;
LastEventn.push(mEvents[i].ID_EVENT);}

return string;	
}


var lastchampblt=-1;



function DrawChampionBlt(k,time1,time2){
var i=0;
var j=0;
var l=ChampionId[k];
if((champlongstate2==0||ChampionIndex==-1)&&mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13) return "";
var string="";
var height=90;
var colorus=new Array("#FFFFFF","#EBEBEB");

for(i=0;i<mEvents.length;i++)
if((mEvents[i].ID_CHAMPIONSHIP==k)&&(mEvents[i].DATE_EVENT.getTime()>=time1)&&(mEvents[i].DATE_EVENT.getTime()<=time2)&&(mEvents[i].Live==0)&&((SportState==0)||(mEvents[i].TV.length>0||mEvents[i].clock_stopped>0)))
{if(mEvents[i].string.length==0) DrawEvent(mEvents[i],2);
if(mEvents[i].Height==0) continue;
j++; if((j==1)&&(lastchampblt!=k)){
if((ne>k25)&&(mChampionships[l].lb11==0)) mChampionships[l].lb1=1;
else {if(mChampionships[l].lb11==0) mChampionships[l].lb1=0;}
if(RapidState==1) string=string+mChampionships[l].string.replace('cham4">','cham4">'+mChampionships[l].NAME_SPORT+' , ' );else string=string+mChampionships[l].string;
LastChampion.push(mChampionships[l].ID_CHAMPIONSHIP);}
if(mChampionships[l].lb1==0) ne++;
if(euroline!=0||((mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13)&&(mEvents[i].BEISBOL==2))) height=mEvents[i].Height;
if((mChampionships[l].ID_CHAMPIONSHIP==(mChampionships[l].ID_COUNTRY+10)*10000+13)&&(mEvents[i].BEISBOL<2)) height=56;

string=string+'<div id="Mevent'+mEvents[i].ID_EVENT+'" name="n'+mChampionships[l].ID_CHAMPIONSHIP+'" style="display:'+display[mChampionships[l].lb1]+';width:742px;margin-top:0px;float:left; background-color:'+colorus[color] +'; height:'+height+'px;';
if(euroline==1) string=string+ '">'; else string=string+ 'border-bottom:1px solid #C5C5C5;">';
if(mChampionships[l].lb1==0){if((RapidState==1)&&(euroline==1)&&((mEvents[i].TIP_TABLE==3)||(mEvents[i].TIP_TABLE==2)))string=string+mEvents[i].string2+'</div>'; else string=string+mEvents[i].string+'</div>';} else string=string+'</div>';
color=(color+1)%2;
LastEventn.push(mEvents[i].ID_EVENT);
}

lastchampblt=k;

return string;	
	
}

var ne=0;


function DrawTable(step){
if(step!=3&&step!=4) step=0;	
	
ne=0;
lastchampblt=-1;
ttt1=1;
var i=0;
var j=0;
var k=0;
if(step==3||step==0) {LastEventn.splice(0);LastChampion.splice(0);}
if(step==4||step==0) {LastEventl.splice(0);LastChampionLive.splice(0);}
LastChampionLive.splice(0);
colorlive=0;
color=0;
LIVE2=0;
var ar=new Array();
var time=0;
var stringlive="";
var string="";

RapidState=1;
//console.log("champlongstate2="+champlongstate2+" ChampionIndex="+ChampionIndex);

if(champlongstate2==1&&ChampionIndex>-1){for(i=0;i<table.length;i++) table[i].style.display="none"; table_.style.display="none";}
else{champlongstate2=0;
if((SportState+BltState+LiveState+FavoritState>0)||((SportIndex>-1)&&(CountryIndex==-1)&&(mSport[SportIndex].ID_SPORT==777))){for(i=0;i<table.length;i++) 
{table[i].style.display="none"; if(i==0){if(euroline==0) table_.style.display=""; else {table_.style.display="none";table[i].style.display="";}}}}}

if(SportState+BltState+LiveState+FavoritState+SportIndex==-1){
Tablel.innerHTML="";
Tablen.innerHTML="";
drawscroll();
LastEventl.splice(0);
LastEventn.splice(0);
return;}



if(LiveState==1){
for(j=0;j<mSport.length;j++)LIVE2=LIVE2+mSport[j].LIVE;	
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
Tablel.innerHTML=stringlive;
Tablen.innerHTML="";
drawscroll();
LastEventn.splice(0);
LastEvent=LastEventl.concat(LastEventn);
return;}





if(FavoritState==1){
if(step==4||step==0){
for(j=0;j<mEvents.length;j++) if((mEvents[j].Live==1)&&(mEvents[j].fav==1)) LIVE2++;
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
Tablel.innerHTML=stringlive;}

if(step==3||step==0){
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);Tablen.innerHTML=string;}
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}

if(SportState==1) {
if(BltBox.selectedIndex==0){	
if(step==4||step==0){
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
Tablel.innerHTML=stringlive;}

if(step==3||step==0){
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);
Tablen.innerHTML=string;}
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}

if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}

if(step==4||step==0){
for(j=0;j<mSport.length;j++) for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
Tablel.innerHTML=stringlive;}

if(step==3||step==0){
date=new Date();
i=0;
time=date.getTime()+mdif*60*60*1000+10000000*60*60*1000+60*1000;
while(i<mEvents.length-1){
if((ar[mEvents[i].ID_CHAMPIONSHIP])&&(mEvents[i].DATE_EVENT.getTime()<=ar[mEvents[i].ID_CHAMPIONSHIP])) {i++; continue;}
if(k==0) j=i; 
if((mEvents[i].ID_CHAMPIONSHIP==mEvents[i+1].ID_CHAMPIONSHIP)&&(mEvents[i+1].DATE_EVENT.getTime()<time+100)){i++;k++;continue;}
if(mEvents[j].DATE_EVENT.getTime()>time+99) break;

string=string+DrawChampionBlt(mEvents[i].ID_CHAMPIONSHIP,mEvents[j].DATE_EVENT.getTime(),mEvents[i].DATE_EVENT.getTime());
ar[mEvents[i].ID_CHAMPIONSHIP]=mEvents[i].DATE_EVENT.getTime();
if(mEvents[i+1].DATE_EVENT.getTime()>time)break; else i++;k=0;};
ar=null;
Tablen.innerHTML=string;}
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;
}


if((BltState>0)&&(BltBox.selectedIndex==0)){
if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}
if(step==3||step==0){
for(j=0;j<mSport.length;j++){ if(mSport[j].ID_SPORT==110)continue;for(i=0;i<mChampionships.length;i++)if(mChampionships[i].ID_SPORT==mSport[j].ID_SPORT) {string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);}} Tablen.innerHTML=string;}
Tablel.innerHTML="";
drawscroll();
LastEventl.splice(0);
LastEvent=LastEventl.concat(LastEventn);
return;}

if((BltState>0)&&(BltBox.selectedIndex==1)){
if(step==3||step==0){
date=new Date();
i=0;
time=date.getTime()+mdif*60*60*1000+BltState*60*60*1000+60*1000;
while(i<mEvents.length-1){
if(mEvents[i].ID_SPORT==110) {i++; continue;}	
if((ar[mEvents[i].ID_CHAMPIONSHIP])&&(mEvents[i].DATE_EVENT.getTime()<=ar[mEvents[i].ID_CHAMPIONSHIP])) {i++; continue;}
if(k==0) j=i; 
if((mEvents[i].ID_CHAMPIONSHIP==mEvents[i+1].ID_CHAMPIONSHIP)&&(mEvents[i+1].DATE_EVENT.getTime()<time+100)){i++;k++;continue;}
if(mEvents[j].DATE_EVENT.getTime()>time+99) break;
string=string+DrawChampionBlt(mEvents[i].ID_CHAMPIONSHIP,mEvents[j].DATE_EVENT.getTime(),mEvents[i].DATE_EVENT.getTime());
ar[mEvents[i].ID_CHAMPIONSHIP]=mEvents[i].DATE_EVENT.getTime();
if(mEvents[i+1].DATE_EVENT.getTime()>time)break; else i++;k=0;};ar=null;Tablen.innerHTML=string;}
Tablel.innerHTML="";
drawscroll();
LastEventl.splice(0);
LastEvent=LastEventl.concat(LastEventn);
return;}


RapidState=0;
if(champlongstate2==1&&ChampionIndex>-1){for(i=0;i<table.length;i++) table[i].style.display="none"; table_.style.display="none";}
else{
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==777)&&(CountryIndex==-1)) RapidState=1;
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT!=777)){
for(i=0;i<table.length;i++){table[i].style.display="none";
if(i==mSport[SportIndex].TIP_TABLE-1){if(euroline==0) table_.style.display=""; else {table[i].style.display="";table_.style.display="none";} }
};}
if(SportIndex==-1){for(i=0;i<table.length;i++)table[i].style.display="none";
if(euroline==0) table_.style.display=""; else {table[0].style.display="";table_.style.display="none";}}

}




if(BltBox.selectedIndex==0){
if(ChampionIndex>-1){
if(step==0||step==4) {LIVE2=mChampionships[ChampionId[ChampionIndex]].LIVE; Tablel.innerHTML=DrawChampionLive(ChampionIndex);}
if(step==0||step==3) Tablen.innerHTML=DrawChampion(ChampionIndex);
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}


if(CountryIndex>-1) {
LIVE2=mCountry[CountryIndex].LIVE;for(i=0;i<mChampionships.length;i++) if(mChampionships[i].ID_COUNTRY==mCountry[CountryIndex].ID_COUNTRY)
{if(step==0||step==4)stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
if(step==0||step==3)string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);}
if(step==0||step==4) Tablel.innerHTML=stringlive;
if(step==0||step==3)Tablen.innerHTML=string;
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}

if((RegionIndex==0)&&(mSport[SportIndex].ID_SPORT==1)){

LIVE2=region.LIVE;
for(i=0;i<mChampionships.length;i++)for(j=0;j<mCountry.length;j++) 
if((mChampionships[i].ID_SPORT==1)&&(mCountry[j].ID_COUNTRY==mChampionships[i].ID_COUNTRY)&&(mCountry[j].IS_REGION==0))
{if(step==4||step==0)stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);
if(step==3||step==0) string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);}
if(step==4||step==0) Tablel.innerHTML=stringlive;
if(step==3||step==0) Tablen.innerHTML=string;
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}


if(SportIndex>-1) {LIVE2=mSport[SportIndex].LIVE;for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_SPORT==mSport[SportIndex].ID_SPORT)||((mSport[SportIndex].ID_SPORT==777)&&(mChampionships[i].OLIMP==1)))
{if(step==4||step==0)stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);if(step==3||step==0)string=string+DrawChampion(mChampionships[i].ID_CHAMPIONSHIP);}
if(step==4||step==0) Tablel.innerHTML=stringlive;
if(step==3||step==0) Tablen.innerHTML=string;
drawscroll();
LastEvent=LastEventl.concat(LastEventn);
return;}


;}

else{
if(SportIndex==-1) 	{Tablen.innerHTML="";Tablel.innerHTML="";
LastEventl.splice(0);
LastEventn.splice(0);
return;}

if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}
if(step==4||step==0){
if(ChampionIndex>-1) {stringlive=DrawChampionLive(ChampionIndex);LIVE2=mChampionships[ChampionId[ChampionIndex]].LIVE;}else
if(CountryIndex>-1) {LIVE2=mCountry[CountryIndex].LIVE;for(i=0;i<mChampionships.length;i++) if(mChampionships[i].ID_COUNTRY==mCountry[CountryIndex].ID_COUNTRY)
stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);} else
if((RegionIndex==0)&&(mSport[SportIndex].ID_SPORT==1)){LIVE2=region.LIVE;
for(i=0;i<mChampionships.length;i++)for(j=0;j<mCountry.length;j++) 
if((mChampionships[i].ID_SPORT==1)&&(mCountry[j].ID_COUNTRY==mChampionships[i].ID_COUNTRY)&&(mCountry[j].IS_REGION==0))
stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);}else
if(SportIndex>-1) {LIVE2=mSport[SportIndex].LIVE;for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_SPORT==mSport[SportIndex].ID_SPORT)||(mSport[SportIndex].ID_SPORT+mChampionships[i].OLIMP==778))
stringlive=stringlive+DrawChampionLive(mChampionships[i].ID_CHAMPIONSHIP);}
}
if(step==3||step==0){
date=new Date();

i=0;
if((DateBox.options[DateBox.selectedIndex].value!=1)&&(DateBox.options[DateBox.selectedIndex].value!=0))
time=DateBox.options[DateBox.selectedIndex].value-GMTBox.options[GMTBox.selectedIndex].value*60*60*1000+24*60*60*1000-mdif*60*60*1000;
if(DateBox.options[DateBox.selectedIndex].value==0) time=24*60*60*1000+1000+parseInt(DateBox.options[DateBox.length-1].value);
if(DateBox.options[DateBox.selectedIndex].value==1) {
date.setTime(date.getTime()+GMTBox.options[GMTBox.selectedIndex].value*60*60*1000+1000);
date.setUTCHours(0,0,0,0);
date.setTime(date.getTime()+32*60*60*1000+1000);
time=date.getTime()-GMTBox.options[GMTBox.selectedIndex].value*60*60*1000+mdif*60*60*1000;
}

while(i<mEvents.length){
if(i==mEvents.length-1&&k>0)
string=string+DrawChampionBlt(mEvents[i-1].ID_CHAMPIONSHIP,mEvents[j].DATE_EVENT.getTime(),time+100);
if(i==mEvents.length-1) break;
if(mEvents[i].temp<DateBox.options[DateBox.selectedIndex].value) {i++; continue;}
if((ar[mEvents[i].ID_CHAMPIONSHIP])&&(mEvents[i].DATE_EVENT.getTime()<=ar[mEvents[i].ID_CHAMPIONSHIP])) {i++; continue;}
if(ChampionIndex>-1){if(ChampionIndex!=mEvents[i].ID_CHAMPIONSHIP){i++; continue;};}
else if(CountryIndex>-1){if((mEvents[i].ID_COUNTRY!=mCountry[CountryIndex].ID_COUNTRY)||(mSport[SportIndex].ID_SPORT+mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].OLIMP==777)){i++; continue;};}
else if(RegionIndex==0){if((mEvents[i].IS_REGION!=0)||(mEvents[i].ID_SPORT!=1)) {i++; continue;};}

else if((SportIndex>-1)&&(mEvents[i].ID_SPORT!=mSport[SportIndex].ID_SPORT)&&(mSport[SportIndex].ID_SPORT+mChampionships[ChampionId[mEvents[i].ID_CHAMPIONSHIP]].OLIMP!=778)){i++; continue;} 
if(k==0) j=i; 
if((mEvents[i].ID_CHAMPIONSHIP==mEvents[i+1].ID_CHAMPIONSHIP)&&(mEvents[i+1].DATE_EVENT.getTime()<time+100)){i++;k++;continue;}
if(mEvents[j].DATE_EVENT.getTime()>time+99) break;
string=string+DrawChampionBlt(mEvents[i].ID_CHAMPIONSHIP,mEvents[j].DATE_EVENT.getTime(),mEvents[i].DATE_EVENT.getTime());
ar[mEvents[i].ID_CHAMPIONSHIP]=mEvents[i].DATE_EVENT.getTime();
if(mEvents[i+1].DATE_EVENT.getTime()>time+99) break; else i++;k=0;};
ar=null;
}

if(step==4||step==0)Tablel.innerHTML=stringlive;
if(step==3||step==0)Tablen.innerHTML=string;drawscroll();
LastEvent=LastEventl.concat(LastEventn);

return;}
LastEventl.splice(0);
LastEventn.splice(0);
Tablel.innerHTML="";
Tablen.innerHTML="";

}


var menutime=0;
var newmenutime=0;



function MenuClick(step){
newmenutime=(new Date()).getTime();
var os=0;
var osl=0;
var i=0;
var j=0;
if(step==0||newmenutime-menutime>1000||ttt<5){
if(cookierefresh==1){cookierefresh=0;
for(i=0;i<mSport.length;i++) if(mSport[i].favorit>0){zvezda=1;break;}
if(i==mSport.length) zvezda=0;Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
drawlivenow();
}
for(i=0;i<mSport.length;i++)
if((i!=SportIndex)||(SportIndex2==1)) {mSport[i].Display.nextSibling.style.display="none";
if(i!=SportIndex) {mSport[i].Display.style.backgroundColor="#383838";mSport[i].Display.childNodes[1].style.color="#FFF";} else {mSport[i].Display.style.backgroundColor="#000000";mSport[i].Display.childNodes[1].style.color="#F47621";}	
if(mSport[i].LIVE==0) mSport[i].Display.childNodes[2].childNodes[0].style.display="none"; else mSport[i].Display.childNodes[2].childNodes[0].style.display="";
if((mSport[i].count==0)||((mSport[i].Rombo.length==0&&timeinit==1)&&(ttt>0))||((os>4)&&(OverSport==0))) 
{mSport[i].Display.style.display="none";if(mSport[i].LIVE>0) osl=1;} else {mSport[i].Display.style.display="";
os++;}

mSport[i].Display.childNodes[0].childNodes[0].src="/resources/images/shapesport1.png?7";
mSport[i].Display.childNodes[0].childNodes[0].style.marginTop="9px";
mSport[i].Display.childNodes[0].childNodes[0].style.marginLeft="12px";
if(mSport[i].ID_SPORT==1) {region.Display.style.display="none";region.Display.nextSibling.style.display="none";};}
else{
mSport[i].Display.style.backgroundColor="#000000";	
region.count=0;
if(mSport[i].ID_SPORT==1) for(j=0;j<mCountry.length;j++){if((mCountry[j].count>0)&&(mCountry[j].Sombo.length>1||timeinit==0)&&(mCountry[j].IS_REGION==0)&&(mCountry[j].ID_SPORT==1)) {region.count=1;break;};}
if((mSport[i].ID_SPORT==1)&&(region.count>0)&&(region.Sombo.length>1||timeinit==0)) {region.Display.style.display="";if(RegionIndex==-1) region.Display.nextSibling.style.display="none";else region.Display.nextSibling.style.display="";} else {region.Display.style.display="none"; region.Display.nextSibling.style.display="none";}
if(mSport[i].ID_SPORT==1){if(region.LIVE>0) region.Display.childNodes[1].childNodes[0].style.display="";else region.Display.childNodes[1].childNodes[0].style.display="none";}
if(mSport[i].LIVE==0) mSport[i].Display.childNodes[2].childNodes[0].style.display="none"; else mSport[i].Display.childNodes[2].childNodes[0].style.display="";
if((mSport[i].count==0)||(mSport[i].Rombo.length==0&&timeinit==1)) {mSport[i].Display.style.display="none";SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;ChampionIndex=-1;mSport[i].Display.nextSibling.style.display="none";
if(mSport[i].ID_SPORT==1) {region.Display.nextSibling.style.display="none";region.Display.style.display="none";RegionIndex=-1;}
} else {mSport[i].Display.style.display="";os++;mSport[i].Display.nextSibling.style.display="";}

mSport[i].Display.childNodes[0].childNodes[0].src="/resources/images/shapesport2.png?7";
mSport[i].Display.childNodes[0].childNodes[0].style.marginTop="11px";
mSport[i].Display.childNodes[0].childNodes[0].style.marginLeft="9px";
}

if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT!=777)){
for(i=0;i<mCountry.length;i++){if(!mCountry[i].Display) continue;
if(mCountry[i].ID_SPORT!=mSport[SportIndex].ID_SPORT) continue;
if(i!=CountryIndex){ mCountry[i].Display.nextSibling.style.display="none";
if(mCountry[i].LIVE==0) {mCountry[i].Display.childNodes[1].childNodes[0].style.display="none";mCountry[i].Display.childNodes[0].style.width="215px";} else {mCountry[i].Display.childNodes[1].childNodes[0].style.display="";mCountry[i].Display.childNodes[0].style.width="183px";}
if((mCountry[i].count==0)||(mCountry[i].Sombo.length==1&&timeinit==1)) mCountry[i].Display.style.display="none"; else mCountry[i].Display.style.display="";}
else {mCountry[i].Display.nextSibling.style.display="";
if(mCountry[i].LIVE==0) {mCountry[i].Display.childNodes[1].childNodes[0].style.display="none";mCountry[i].Display.childNodes[0].style.width="215px";} else {mCountry[i].Display.childNodes[1].childNodes[0].style.display="";mCountry[i].Display.childNodes[0].style.width="183px";}
if((mCountry[i].count==0)||(mCountry[i].Sombo.length==1&&timeinit==1)) {mCountry[i].Display.style.display="none";if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";CountryIndex=-1;mCountry[i].Display.nextSibling.style.display="none";} else mCountry[i].Display.style.display="";
}
}
if(CountryIndex>-1){
for(i=0;i<mChampionships.length;i++){
if(!mChampionships[i].Display) continue;
if(mChampionships[i].ID_COUNTRY!=mCountry[CountryIndex].ID_COUNTRY) continue;
if(mChampionships[i].LIVE==0) {mChampionships[i].Display.childNodes[1].childNodes[0].style.display="none";mChampionships[i].Display.childNodes[0].style.width="210px";} else {mChampionships[i].Display.childNodes[1].childNodes[0].style.display="";mChampionships[i].Display.childNodes[0].style.width="178px";}
if((mChampionships[i].count==0)||(mChampionships[i].Sombo.length==1&&timeinit==1)) mChampionships[i].Display.style.display="none"; else mChampionships[i].Display.style.display="";

}}}

if(ttt>0){if(osl==1) id_("sport999").childNodes[2].childNodes[0].style.display=""; else id_("sport999").childNodes[2].childNodes[0].style.display="none";}
}

if(LIVE==1){LIVE=-1;}

if(ttt1==1){DrawTable(step);}
ttt1=0;
menutime=newmenutime;
}



var	transliterate = (
    function() {

        var
			rus = "кий щ   ш  ч  ц  ю  я  ё  ж  ъ   э  ь  ы а б в г д е з и й к л м н о п р с т у ф х".split(/ +/g),
			eng = "kij shh sh ch cz yu ya yo zh jj  eh ij y a b v g d e z i j k l m n o p r s t u f x".split(/ +/g)

       ;

       return function(text, engToRus) {

            var x;

            for(x = 0; x < rus.length; x++) {

                text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);

                text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
            }

           if(!engToRus) text=text.split(",").join("").split("(").join("").split(")").join("");
		   
           return text.split(engToRus ? "_" : " ").join(engToRus ? " " : "_");

        }

    }

)();




function SportClick2(k,state){
if(state==1){window.currentAjax ? window.currentAjax.abort() : false;
;}	
if(k<0) return;
showTitle(false,mSport[k].NAME_RUS);
if(SportIndex>-1)mSport[SportIndex].Display.childNodes[1].style.color="#FFF";

var i=0;
var si=SportIndex;
var ci=CountryIndex;
var ri=RegionIndex;
var st="";
BltBox.style.display="";
GMTBox.style.display="";
DateBox.style.display="";
IndexScroll=0;




BltState=0;
FavoritState=0;
SportState=0;
LiveState=0;


for(i=0;i<Smenu.length;i++){
Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";


SportIndex=k;DateBoxSport(mSport[SportIndex]);
if(vflbegin==0&&k>-1&&mSport[k].ID_SPORT==110&&ttt>3) webSocket.send("vflbegin");

if(mSport[SportIndex].ID_SPORT==16) Titles.innerHTML="АМЕРИК. ФУТБОЛ";
else Titles.innerHTML=mSport[SportIndex].NAME_RUS.toUpperCase();

hashstate=state;
RegionIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
ChampionIndex=-1;
if((SportIndex==si)&&(ri+ci==-2))ttt1=0;else ttt1=1;

//console.log("state="+state+" ttt1="+ttt1);
if(state==1){
st="/stavki/sport/"+transliterate(mSport[SportIndex].NAME_RUS.toLowerCase())+"/";

if(window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain))!=st)
{_gaq.push(['_trackPageview',st]);
try{window.history.pushState("", "", st);} catch(e){window.location.hash=st;};}

}
if(ttt==0) return;
showsport();
mSport[SportIndex].Display.childNodes[1].style.color="#F47621";
MenuClick(0);
}


function SportClick(){
if((SportIndex==this.index)&&(SportIndex2==-1)&&(CountryIndex==-1)&&(RegionIndex==-1)) {SportIndex2=1;} 
else SportIndex2=-1;
SportClick2(this.index,1);
}

function CountryClick(){
if((CountryIndex==this.index)&&(ChampionIndex==-1)){
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==1)&&(mCountry[CountryIndex].IS_REGION==0))
{RegionIndex=-1;RegionClick(1);} 
else {SportClick2(SportIndex,1);};} else
CountryClick2(this.index,1);
}


function ChampionClick(){

if(ChampionIndex==this.index){mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";	
ChampionIndex=-1; CountryClick2(CountryIndex,1);}
else ChampionClick2(this.index,1);
return;
}



function RegionClick(state){
if(state==1){window.currentAjax ? window.currentAjax.abort() : false;}	

ttt1=1;
var st="";	
IndexScroll=0;
if(RegionIndex==-1) {RegionIndex=0; DateBoxRegion();
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
}
else if(CountryIndex==-1) {SportClick2(SportIndex,state);return;}
else{RegionIndex=0;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;ChampionIndex=-1;DateBoxRegion();}
CountryIndex=-1; 
ChampionIndex=-1;
hashstate=state;
region.Display.childNodes[0].style.color="#F47621";
showTitle(false,mSport[SportIndex].NAME_RUS+", регионы");

if(state==1){
st="/stavki/sport/"+transliterate(mSport[SportIndex].NAME_RUS.toLowerCase())+"/"+transliterate("регионы")+"/";
_gaq.push(['_trackPageview',st]);
try{window.history.pushState("", "",st);} catch(e){window.location.hash=st;};
}
showsport();
MenuClick(0);	
}

function zeroadd(i){if(i<10) return "0"+i; else return ""+i;}

function round(n){
if(n<20) return n;
if(n<100) return 10*Math.ceil(n/10);
if(n<1000) return 100*Math.ceil(n/100);
if(n<10000) return 1000*Math.ceil(n/1000);
return n;
}


function Round(k){
//return Math.floor(k);	
//return k;	
if(mClient.valuta==1||mClient.valuta==5){
//if(k>100) k=Math.floor(k/100)*100; else 
k=Math.floor(k);} 
else k=Math.floor(k*100)/100; 
return k;
}




function Round2(k){
k=Math.floor(k*100)/100; 	
if(mClient.valuta==1||mClient.valuta==5)k=Math.floor(k);return k;
}

function zeroinsert(i,k){ 
i=Math.round(i*100)/100;
var s="";
var a=new Array();
if(i>-1)a=(""+i).split(".");else a=(""+(0-i)).split(".")
var l=a[0].length;
if(k==1){if(a.length==1) a[1]=".00"; else {if(a[1].length==1) a[1]="."+a[1]+"0";else a[1]="."+a[1];};}
else  {if(a.length==1) a[1]=""; else {if(a[1].length==1) a[1]="."+a[1]+"0"; else a[1]="."+a[1];};}
var l2=l%3;
var l3=(l-l2)/3;
var j=0;
for(j=0;j<l3;j++){if(j<l3-1)s=s+a[0].substr(3*j+l2,3)+" ";else s=s+a[0].substr(3*j+l2,3)}
if((l2>0)&&(s.length>0)) s=a[0].substr(0,l2)+" "+s; else if(l2>0) s=a[0].substr(0,l2);           
if(i<0) return ("-"+s+a[1]).replace('--','-'); else return s+a[1];
}

function zeroinsert2(i,k){ 
i=Math.round(i*100)/100;
var s=new String();
var a=new Array();
if(i>-1)a=(""+i).split(".");else a=(""+(0-i)).split(".")
var l=a[0].length;
if(k==1){if(a.length==1) a[1]=".00"; else {if(a[1].length==1) a[1]="."+a[1]+"0";else a[1]="."+a[1];};}
else  {if(a.length==1) a[1]=""; else {if(a[1].length==1) a[1]="."+a[1]+"0"; else a[1]="."+a[1];};}
var l2=l%3;
var l3=(l-l2)/3;
var j=0;
for(j=0;j<l3;j++){if(j<l3-1)s=s+a[0].substr(3*j+l2,3)+" ";else s=s+a[0].substr(3*j+l2,3)}
if((l2>0)&&(s.length>0)) s=a[0].substr(0,l2)+" "+s; else if(l2>0) s=a[0].substr(0,l2);           
if(i<0) return "-"+s+a[1]; else return "+"+s+a[1];
}

function removeAll(sel){var n=sel.options.length; for(i=0;i<n;i++){sel.options[0]=null;};};


function DateBoxSport(msport){
var i=0;
if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}

removeAll(DateBox);
var date3=new Date();
for(i=0;i<msport.Rombo.length;i++){ 
if((i==0)&&(msport.Rombo[i]==1))DateBox.options.add(new Option(today,1));else{
date3.setTime(msport.Rombo[i]);DateBox.options.add(new Option(zeroadd(date3.getUTCDate())+"-"+zeroadd(date3.getUTCMonth()+1)+"-"+date3.getFullYear(),msport.Rombo[i]));};}    

;}

function DateBoxCountry(mCountry){
var i=0;
if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}
removeAll(DateBox);
var date3=new Date();
DateBox.options.add(new Option("Все даты",0))
for(i=1;i<mCountry.Sombo.length;i++){
if((mSport[SportIndex].ID_SPORT==777)&&(mCountry.OLIMP==1)&&(mCountry.Sombo2[i]==0)) continue;
if((i==1)&&(mCountry.Sombo[i]==1))DateBox.options.add(new Option(today,1));else{    
date3.setTime(mCountry.Sombo[i]);DateBox.options.add(new Option(zeroadd(date3.getUTCDate())+"-"+zeroadd(date3.getUTCMonth()+1)+"-"+date3.getUTCFullYear(),mCountry.Sombo[i]));};}    
;}


function DateBoxRegion(){
var i=0;
if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}
removeAll(DateBox);
var date3=new Date();
DateBox.options.add(new Option("Все даты",0))
for(i=1;i<region.Sombo.length;i++){
if((i==1)&&(region.Sombo[i]==1))DateBox.options.add(new Option(today,1));else{
date3.setTime(region.Sombo[i]);DateBox.options.add(new Option(zeroadd(date3.getUTCDate())+"-"+zeroadd(date3.getUTCMonth()+1)+"-"+date3.getUTCFullYear(),region.Sombo[i]));};}    
;}

function DateBoxChampion(mChampionship){
var i=0;
if(timeinit==0){timeinit=2;for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);timeinit=1;}
removeAll(DateBox);
var date3=new Date();
DateBox.options.add(new Option("Все даты",0))
for(i=1;i<mChampionship.Sombo.length;i++){
if((i==1)&&(mChampionship.Sombo[i]==1))DateBox.options.add(new Option(today,1));else{
date3.setTime(mChampionship.Sombo[i]);DateBox.options.add(new Option(zeroadd(date3.getUTCDate())+"-"+zeroadd(date3.getUTCMonth()+1)+"-"+date3.getUTCFullYear(),mChampionship.Sombo[i]));};}    
;}





function setEventTime(mEvent){
var olimp=0;
var i=0;
var j=0;
var l=0;
var m=0;
var temp=0;
var temp2=0;
var temp3=0;
var temp4=new Array();
if(DateBox.selectedIndex>-1) temp3=DateBox.options[DateBox.selectedIndex].value; 
var date1=new Date();
if(mEvent.Live==0) date1.setTime(mEvent.DATE_EVENT.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif)*60*60*1000); 
if(mEvent.Live==1) date1.setTime(date1.getTime()+(GMTBox.options[GMTBox.selectedIndex].value-mdif)*60*60*1000); 

if(mEvent.Live==0) {mEvent.Data=zeroadd(date1.getUTCDate())+"/"+zeroadd(date1.getUTCMonth()+1)+"<br />"+zeroadd(date1.getUTCHours())+":"+zeroadd(date1.getUTCMinutes());
if(mEvent.ID_LIVE==1)mEvent.Data=mEvent.Data+"<br /><div class='future' title='Будут доступны ставки LIVE'></div>";
}
else{
mEvent.Data2='<div style="width:180px;float:left;margin-left:7px;">';
if(mEvent.ID_SPORT==1){
mEvent.Data=mEvent.Time_Event;	
if(mEvent.DURATION!=0&&mEvent.DURATION!=45) mEvent.Data=mEvent.Data+' (тайм '+mEvent.DURATION+' мин.)';
mEvent.Data=mEvent.Data+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R1>0) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/redcard2.png?7" style="float:left;margin-top:3px;margin-right:3px;"/>';
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R2>0) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/redcard2.png?7" style="float:left;margin-top:3px;margin-left:3px;"/>';
//if(mEvent.CARDS_R1+mEvent.CARDS_R2==0)mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:10px;font-weight:bold;color:#000;font-size:12px;' title='Количество игроков'>"+(11-mEvent.CARDS_R1)+"x"+(11-mEvent.CARDS_R2)+"</span>"; 
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event;
if(mEvent.DURATION!=0&&mEvent.DURATION!=45) mEvent.Data2=mEvent.Data2+' (тайм '+mEvent.DURATION+' мин.)';
mEvent.Data2=mEvent.Data2+'</span>';
}

if(mEvent.ID_SPORT==2){ 
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
}
if(mEvent.ID_SPORT==16){ 
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
}

if(mEvent.ID_SPORT==4){mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0)mEvent.Data=mEvent.Data+"<br /><span title='Количество игроков'>"+(5-mEvent.CARDS_R1)+"x"+(5-mEvent.CARDS_R2)+"</span>"; 
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0)mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:10px;font-weight:bold;color:#000;font-size:12px;' title='Количество игроков'>"+(5-mEvent.CARDS_R1)+"x"+(5-mEvent.CARDS_R2)+"</span>"; 

;}
if(mEvent.ID_SPORT==6) {mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0) mEvent.Data=mEvent.Data+"<br /><span title='Количество игроков'>"+(7-mEvent.CARDS_R1)+"x"+(7-mEvent.CARDS_R2)+"</span>";
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0)mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:10px;font-weight:bold;color:#000;font-size:12px;' title='Количество игроков'>"+(7-mEvent.CARDS_R1)+"x"+(7-mEvent.CARDS_R2)+"</span>"; 

;}

if(mEvent.ID_SPORT==29) {mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0) mEvent.Data=mEvent.Data+"<br /><span title='Количество игроков'>"+(5-mEvent.CARDS_R1)+"x"+(5-mEvent.CARDS_R2)+"</span>";
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0)mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:15px;font-weight:bold;color:#000;font-size:12px;' title='Количество игроков'>"+(5-mEvent.CARDS_R1)+"x"+(5-mEvent.CARDS_R2)+"</span>"; 
}

if(mEvent.ID_SPORT==12) {mEvent.Data=mEvent.Time_Event+"<br /><span style='font-size:14px;font-weight:bold;'>"+mEvent.SCORE+"</span>";
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0) mEvent.Data=mEvent.Data+"<br /><span title='Количество игроков'>"+(15-mEvent.CARDS_R1)+"x"+(15-mEvent.CARDS_R2)+"</span>";
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
mEvent.Data2=mEvent.Data2+'<span style="float:left;margin-left:15px;font-size:12px;color:#000;">'+mEvent.Time_Event+'</span>';
if(mEvent.CARDS_R1+mEvent.CARDS_R2>0)mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:15px;font-weight:bold;color:#000;font-size:12px;' title='Количество игроков'>"+(15-mEvent.CARDS_R1)+"x"+(15-mEvent.CARDS_R2)+"</span>"; 
}



if(mEvent.ID_SPORT==5){temp4=mEvent.SETSCORES.split(" - "); if(temp4.length==0) {temp4[0]="";temp4[1]="";} 
mEvent.Data=mEvent.Time_Event+"<br /><div style='font-size:14px;font-weight:bold;line-height:16px;'>"+temp4[temp4.length-1]+"<br />"+mEvent.SCORE+"</div>";
if(mEvent.PODACHA==1) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon4.png?7" style="float:left;margin-top:4px;margin-right:3px;"/>';
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
if(mEvent.PODACHA==2) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon4.png?7" style="float:left;margin-top:4px;margin-left:3px;"/>';
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;margin-left:15px;'>"+temp4[temp4.length-1]+"</span>";
if(mEvent.SETSCORES.split(" - ").length>1)
{mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:15px;color:#555;font-size:12px;'>( "+mEvent.SETSCORES.split("-").join("").replace(temp4[temp4.length-1],"")+")";if(mEvent.Time_Event.indexOf("Прерв")>-1) mEvent.Data2=mEvent.Data2+"<br /><center>"+mEvent.Time_Event+"</center>";
mEvent.Data2=mEvent.Data2+"</span>"; }
else mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:15px;color:#555;font-size:12px;'>"+mEvent.Time_Event+"</span>"; 
}

if((mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==34)||(mEvent.ID_SPORT==19)||(mEvent.ID_SPORT==3)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20)){temp4=mEvent.SETSCORES.split(" - ");if(temp4.length==0) {temp4[0]="";temp4[1]="";} mEvent.Data=mEvent.Time_Event+"<br /><div style='font-size:14px;font-weight:bold;line-height:16px;'>"+mEvent.SCORE+"<br />"+temp4[temp4.length-1]+"</div>";
if(mEvent.PODACHA==1){if(mEvent.ID_SPORT!=3) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon4.png?7" style="float:left;margin-top:4px;margin-right:3px;"/>';
else mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon3.png?7" style="float:left;margin-top:1px;margin-right:3px;"/>';
}

mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;'>"+mEvent.SCORE+"</span>";
	

if(mEvent.PODACHA==2){if(mEvent.ID_SPORT!=3) mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon4.png?7" style="float:left;margin-top:4px;margin-left:3px;"/>';else
mEvent.Data2=mEvent.Data2+'<img src="/resources/images/tennbalon3.png?7" style="float:left;margin-top:1px;margin-right:3px;"/>';
}
mEvent.Data2=mEvent.Data2+"<span style='float:left;color:#F47621;font-weight:bold;font-size:14px;margin-left:15px;'>"+temp4[temp4.length-1]+"</span>";
mEvent.Data2=mEvent.Data2+"<span style='float:left;margin-left:15px;color:#555;font-size:12px;'>"+mEvent.Time_Event+"</span>"; 
}

mEvent.Data2=mEvent.Data2+'</div>';
}

date2.setUTCHours(23,59,59,0);

if(mEvent.Live==0) {temp=date2.setUTCFullYear(date1.getUTCFullYear(),date1.getUTCMonth(),date1.getUTCDate());
date2=new Date();date2.setTime(date2.getTime()+GMTBox.options[GMTBox.selectedIndex].value*60*60*1000+1000);
date2.setUTCHours(0,0,0,0);date2.setTime(date2.getTime()+32*60*60*1000+1000);
if(date1.getTime()<=date2.getTime()) mEvent.temp_=1;else mEvent.temp_=-1;}
//else {temp=date2.setUTCFullYear(date1.getFullYear(),date1.getMonth(),date1.getDate());mEvent.temp_=1;}
else {temp=date2.setUTCFullYear(date1.getUTCFullYear(),date1.getUTCMonth(),date1.getUTCDate());mEvent.temp_=1;}
mEvent.temp=temp;

if(timeinit==0) return;

if(timeinit==2){
if(mEvent.mlines.length==0&&mEvent.Live==0) return;		
l=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length;	
if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[l-1]!=temp) 
mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.push(temp);	

if(mEvent.temp_==1){
if((mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length==1)||(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[1]!=1))
mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.splice(1,0,1);}

if(mEvent.ID_CHAMPIONSHIP==(mEvent.ID_COUNTRY+10)*10000+13) return;

l=mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo.length;
if(mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo[l-1]!=temp)  
mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo.push(temp);
if(mEvent.temp_==1){
if((mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo.length==1)||(mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo[1]!=1))mCountry[CountryId[mEvent.ID_COUNTRY]].Sombo.splice(1,0,1)
}
	
if((mEvent.ID_SPORT==1)&&(mCountry[i].IS_REGION==0))
{l=region.Sombo.length;if(region.Sombo[l-1]!=temp) region.Sombo.push(temp);
if(mEvent.temp_==1){
if((region.Sombo.length==1)||(region.Sombo[1]!=1))region.Sombo.splice(1,0,1);
}
} 
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT) break;
if(i==mSport.length) return;
l=mSport[i].Rombo.length;
if(mSport[i].Rombo[l-1]!=temp) mSport[i].Rombo.push(temp);
if(mEvent.temp_==1){
if((mSport[i].Rombo.length==0)||(mSport[i].Rombo[0]!=1))mSport[i].Rombo.splice(0,0,1);	
}
return;
}



l=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length;
for(j=0;j<l;j++){if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[j]==temp) break;
if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[j]<temp) continue; 
if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[j]>temp) {mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.splice(j,0,temp);if((ChampionIndex==mEvent.ID_CHAMPIONSHIP)&&(langmod2==0)&&timeinit==1)
{DateBoxChampion(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]]);DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};}
break};
}
if(j==l){
mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.push(temp);if((ChampionIndex==mEvent.ID_CHAMPIONSHIP)&&(langmod2==0)&&timeinit==1){DateBoxChampion(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]]);DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};}

if(mEvent.ID_CHAMPIONSHIP==(mEvent.ID_COUNTRY+10)*10000+13) return;



if(ChampionIndex>-1) temp2=1;
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].ID_COUNTRY) break;
if(i==mCountry.length)return;

olimp=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].OLIMP;

l=mCountry[i].Sombo.length;
for(j=0;j<l;j++) {if(mCountry[i].Sombo[j]==temp) break; 
if(mCountry[i].Sombo[j]<temp) continue; 
if(mCountry[i].Sombo[j]>temp) {mCountry[i].Sombo.splice(j,0,temp);mCountry[i].Sombo2.splice(j,0,olimp);if((temp2==0)&&(CountryIndex==i)&&(langmod2==0)&&timeinit==1){DateBoxCountry(mCountry[i]);DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};
break;};}
if(j==l){ mCountry[i].Sombo.push(temp);mCountry[i].Sombo2.push(olimp);if((temp2==0)&&(CountryIndex==i)&&(langmod2==0)&&timeinit==1){DateBoxCountry(mCountry[i]);DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};}
if(CountryIndex>-1) temp2=1;




if((mEvent.ID_SPORT==1)&&(mCountry[i].IS_REGION==0))
{l=region.Sombo.length;
for(j=0;j<l;j++) {if(region.Sombo[j]==temp) break;if(region.Sombo[j]<temp) continue; if(region.Sombo[j]>temp) {region.Sombo.splice(j,0,temp);if((temp2==0)&&(RegionIndex==0)&&(langmod2==0)&&timeinit==1){DateBoxRegion();DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};}
;break;};}
if(j==l) {region.Sombo.push(temp);if((temp2==0)&&(RegionIndex==0)&&(langmod2==0)&&timeinit==1){DateBoxRegion();DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};}
;}

if(RegionIndex==0) temp2=1;



if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].OLIMP==1)
{i=0;
l=mSport[i].Rombo.length;
for(j=0;j<l;j++) {if(mSport[i].Rombo[j]==temp) break;
if(mSport[i].Rombo[j]<temp) continue; if(mSport[i].Rombo[j]>temp) {mSport[i].Rombo.splice(j,0,temp);
if((temp2==0)&&(SportIndex==i)&&(langmod2==0)&&timeinit==1){DateBoxSport(mSport[i]);for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};break;};}
if(j==l){mSport[i].Rombo.push(temp);if((temp2==0)&&(SportIndex==i)&&(langmod2==0)&&timeinit==1){DateBoxSport(mSport[i]);DateBox.selectedIndex=0;DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};};
;}





for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT) break;
if(i==mSport.length) return;

l=mSport[i].Rombo.length;
for(j=0;j<l;j++) {if(mSport[i].Rombo[j]==temp) break;if(mSport[i].Rombo[j]<temp) continue; if(mSport[i].Rombo[j]>temp) {mSport[i].Rombo.splice(j,0,temp);if((temp2==0)&&(SportIndex==i)&&(langmod2==0)&&timeinit==1){DateBoxSport(mSport[i]);for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};break;};}
if(j==l){mSport[i].Rombo.push(temp);if((temp2==0)&&(SportIndex==i)&&(langmod2==0)&&timeinit==1){
DateBoxSport(mSport[i]);
DateBox.selectedIndex=0;for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};};


if(mEvent.temp_==1){
if((mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length==1)||(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[1]!=1)){
mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.splice(1,0,1);
if((ChampionIndex==mEvent.ID_CHAMPIONSHIP)&&(langmod2==0)&&timeinit==1) {DateBoxChampion(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if(DateBox.selectedIndex==-1)DateBox.selectedIndex=0;};}

for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].ID_COUNTRY) break;
olimp=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].OLIMP;
if(i==mCountry.length) return;

if((mCountry[i].Sombo.length>1)&&(mCountry[i].Sombo[1]==1)&&(olimp==1)) mCountry[i].Sombo2[1]=1;

if((mCountry[i].Sombo.length==1)||(mCountry[i].Sombo[1]!=1)){mCountry[i].Sombo.splice(1,0,1);mCountry[i].Sombo2.splice(1,0,olimp);
if((CountryIndex==i)&&(ChampionIndex==-1)&&(langmod2==0)&&timeinit==1){DateBoxCountry(mCountry[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if(DateBox.selectedIndex==-1)DateBox.selectedIndex=0;};}

if(((mEvent.ID_SPORT==1)&&(mCountry[i].IS_REGION==0))&&((region.Sombo.length==1)||(region.Sombo[1]!=1))){
region.Sombo.splice(1,0,1);
if((RegionIndex==0)&&(langmod2==0)&&(CountryIndex==-1)&&(ChampionIndex==-1)&&timeinit==1){DateBoxRegion();
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if(DateBox.selectedIndex==-1)DateBox.selectedIndex=0;};}



if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].OLIMP==1)
{i=0;
if((mSport[i].Rombo.length==0)||(mSport[i].Rombo[0]!=1)){mSport[i].Rombo.splice(0,0,1);
if((SportIndex==i)&&(ChampionIndex==-1)&&(RegionIndex==-1)&&(CountryIndex==-1)&&(langmod2==0)&&timeinit==1){DateBoxSport(mSport[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if(DateBox.selectedIndex==-1)DateBox.selectedIndex=0;};}
}



for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT) break;
if(i==mSport.length) return;
if((mSport[i].Rombo.length==0)||(mSport[i].Rombo[0]!=1)){mSport[i].Rombo.splice(0,0,1);
if((SportIndex==i)&&(ChampionIndex==-1)&&(RegionIndex==-1)&&(CountryIndex==-1)&&(langmod2==0)&&timeinit==1){DateBoxSport(mSport[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if(DateBox.selectedIndex==-1)DateBox.selectedIndex=0;};}
}

;}

function deleteEventTime(mEvent){

var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var temp2=0;
var temp3=0;
if(DateBox.selectedIndex>-1) temp3=DateBox.options[DateBox.selectedIndex].value; 

if(mEvent.temp==1000) return;

for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_CHAMPIONSHIP==mEvent.ID_CHAMPIONSHIP)&&(mEvents[i].temp==mEvent.temp)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 
l=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length;
for(j=0;j<l;j++)if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[j]==mEvent.temp) {mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.splice(j,1);
if(ChampionIndex==mEvent.ID_CHAMPIONSHIP){DateBoxChampion(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]]);if(DateBox.options.length==0) break;if(temp3==mEvent.temp) DateBox.selectedIndex=0; else for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};break;}
;}

if(mEvent.ID_CHAMPIONSHIP==(mEvent.ID_COUNTRY+10)*10000+13) return;

if(ChampionIndex>-1) temp2=1;

for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_COUNTRY==mEvent.ID_COUNTRY)&&(mEvents[i].temp==mEvent.temp)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mEvent.ID_COUNTRY) break;
if(i<mCountry.length){
l=mCountry[i].Sombo.length;
for(j=0;j<l;j++) if(mCountry[i].Sombo[j]==mEvent.temp) {mCountry[i].Sombo.splice(j,1);mCountry[i].Sombo2.splice(j,1);if((temp2==0)&&(CountryIndex==i)){DateBoxCountry(mCountry[i]);if(DateBox.options.length==0) break; if(temp3==mEvent.temp) DateBox.selectedIndex=0; else for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};}; break;}
;};}


if(CountryIndex>-1) temp2=1;


if((mEvent.IS_REGION==0)&&(mEvent.ID_SPORT==1)){
for(i=0;i<mEvents.length;i++) if((mEvents[i].IS_REGION==0)&&(mEvents[i].ID_SPORT==1)&&(mEvents[i].temp==mEvent.temp)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 
l=region.Sombo.length;
for(j=0;j<l;j++) if(region.Sombo[j]==mEvent.temp) {region.Sombo.splice(j,1);if((temp2==0)&&(RegionIndex==0)){DateBoxRegion();if(DateBox.options.length==0) break;if(temp3==mEvent.temp) DateBox.selectedIndex=0; else for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};break;}
;};}
if(RegionIndex==0) temp2=1;


for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_SPORT==mEvent.ID_SPORT)&&(mEvents[i].temp==mEvent.temp)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT) break;
if(i<mSport.length){ 
l=mSport[i].Rombo.length;
for(j=0;j<l;j++) if(mSport[i].Rombo[j]==mEvent.temp) {mSport[i].Rombo.splice(j,1);if((temp2==0)&&(SportIndex==i)){DateBoxSport(mSport[i]);if(DateBox.options.length==0) break;if(temp3==mEvent.temp) DateBox.selectedIndex=0; else for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;};};break;};
;}
;}

if(mEvent.temp_==1){

for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_CHAMPIONSHIP==mEvent.ID_CHAMPIONSHIP)&&(mEvents[i].temp_==1)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length)
if((mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.length>1)&&(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo[1]==1)){
mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].Sombo.splice(1,1);
if((ChampionIndex==mEvent.ID_CHAMPIONSHIP)&&(langmod2==0)) {DateBoxChampion(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if((DateBox.selectedIndex==-1)&&(DateBox.options.length>0))DateBox.selectedIndex=0;};}


for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_COUNTRY==mEvent.ID_COUNTRY)&&(mEvents[i].temp_==1)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].ID_COUNTRY) break;
if(i==mCountry.length) return;
if((mCountry[i].Sombo.length>1)&&(mCountry[i].Sombo[1]==1)){mCountry[i].Sombo.splice(1,1);mCountry[i].Sombo2.splice(1,1);
if((CountryIndex==i)&&(ChampionIndex==-1)&&(langmod2==0)){DateBoxCountry(mCountry[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if((DateBox.selectedIndex==-1)&&(DateBox.options.length>0))DateBox.selectedIndex=0;};}
}



if((mEvent.ID_SPORT==1)&&(mEvent.IS_REGION==0)){
for(i=0;i<mEvents.length;i++) if((mEvents[i].IS_REGION==0)&&(mEvents[i].ID_SPORT==1)&&(mEvents[i].temp_==1)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 
if((region.Sombo.length>1)&&(region.Sombo[1]==1)){
region.Sombo.splice(1,1);
if((RegionIndex==0)&&(langmod2==0)&&(CountryIndex==-1)&&(ChampionIndex==-1)){DateBoxRegion();
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if((DateBox.selectedIndex==-1)&&(DateBox.options.length>0))DateBox.selectedIndex=0;};}
;}
;}

for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_SPORT==mEvent.ID_SPORT)&&(mEvents[i].temp_==1)&&(mEvents[i].ID_EVENT!=mEvent.ID_EVENT)) break;
if(i==mEvents.length){ 

if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].OLIMP==1){
i=0;
if((mSport[i].Rombo.length>0)&&(mSport[i].Rombo[0]==1)){mSport[i].Rombo.splice(0,1);
if((SportIndex==i)&&(ChampionIndex==-1)&&(RegionIndex==-1)&&(CountryIndex==-1)&&(langmod2==0)){DateBoxSport(mSport[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if((DateBox.selectedIndex==-1)&&(DateBox.options.length>0)) DateBox.selectedIndex=0;};}
;}



for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT) break;
if(i==mSport.length) return;
if((mSport[i].Rombo.length>0)&&(mSport[i].Rombo[0]==1)){mSport[i].Rombo.splice(0,1);
if((SportIndex==i)&&(ChampionIndex==-1)&&(RegionIndex==-1)&&(CountryIndex==-1)&&(langmod2==0)){DateBoxSport(mSport[i]);
for(m=0;m<DateBox.options.length;m++) if(DateBox.options[m].value==temp3){DateBox.selectedIndex=m;break;}
if((DateBox.selectedIndex==-1)&&(DateBox.options.length>0)) DateBox.selectedIndex=0;};}
;}
;}

;}

function favkoef(s){
if(s=="") return s;if((s=="0")||(s=="0.0")) return "0.0";
return "-"+s;
var i=parseFloatExt(s)*100; if((i%100)==0) return "-"+i/100+".0";if((i%50)==0) return "-"+s;
return "-"+((i-25)/100)+"-"+((i+25)/100);}

function totkoef(s){
if(parseFloatExt(s).toString()!=s) return totkoef2(s);
return ""+s;
if(s=="") return s; 
var i=parseFloatExt(s)*100;if((i%100)==0) return ""+i/100+".0";if((i%50)==0) return s; return ""+((i-25)/100)+"-"+((i+25)/100);} 


function gl(){
var g=glob;
glob="";
return g;}
	


function totkoef2(s,t,t1){
if(t==0){glob="";
if(s.indexOf("-")>-1&&s.indexOf("and")>-1) {if(t1>-1) glob=" "+s.split("-")[0]; 
return s.split("-")[1].replace("and"," и ");}
else return s;
}
if(t==1){glob="";
return totkoef(s)
}

if(s=="") return s; if(s.indexOf(":")>-1) return s; if(s.indexOf(",")>-1) return s;
var i=parseFloatExt(s)*100;if((i%100)==0) return s; if((i%50)==0) return s; return ""+((i-25)/100)+"-"+((i+25)/100);} 


function favkoef2(s){if(s=="") return s;if((s=="0")||(s=="0.0")) return "0.0";
return "+"+s;
var i=parseFloatExt(s)*100; if((i%100)==0) return "+"+i/100+".0";if((i%50)==0) return "+"+s;return "+"+((i-25)/100)+"+"+((i+25)/100);}

function favkoef3(s){if(s=="") return s;if((s=="0")||(s=="0.0")) return "0.0";
return ""+s;
var i=parseFloatExt(s)*100; if((i%100)==0) return ""+i/100+".0";if((i%50)==0) return ""+s;return ""+((i-25)/100)+"-"+((i+25)/100);}

function Vkoef(n){if(n/100<=1)return "-"; var s=""; s=""+n;return s.substr(0,s.length-2)+"."+s.substr(s.length-2);}

function Vkoef3(n){if(n/100<=1)return "-"; 
var s=""; 
s=""+n;
if((n>=10000)&&(s.substr(s.length-1)=="0")) return s.substr(0,s.length-2)+"."+s.substr(s.length-1);

return s.substr(0,s.length-2)+"."+s.substr(s.length-2);



}


function Vkoef2(n){var s="";
if(n==0) return "0";
n=Math.round(n*100)/100;
s=""+n;
if(s.split(".").length==1) return s+".00";
if(s.split(".")[1].length==1) return s+"0";
return s;}


function asia(koef){
if(koef.indexOf("Победитель")>-1) return 6;
if(koef.indexOf("Полуфиналист")>-1) return 4;
if(koef.indexOf("Групповой этап")>-1) return 1;
if(koef.indexOf("Серебряный призер")>-1) return 5;
if(koef.indexOf("Четвертьфиналист")>-1) return 3;
if(koef.indexOf("1/8 финала")>-1) return 2;
}



function asiansort2(mEvent){
var temp=new Array();
var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var dd=0;
var n=mEvent.mlines.length;

if(mEvent.DURATION==0) for (i = 0; i < n; i++) temp[i]=parseFloatExt(mLines[LineId[mEvent.mlines[i]]].V[0]);
else for (i = 0; i < n; i++) temp[i]=asia(mLines[LineId[mEvent.mlines[i]]].KOEF);

for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}

for (i = 0; i < n;i++) temp[i]=mEvent.mlines[Arr_sort[i]];
mEvent.mlines=temp;	
}

function asiansort(mEvent){
var i=0;
var j=0;
var k=0;
var l=0;

var sort1=new Array();
var sort2=new Array();
var mlines=new Array();
var mlines2=new Array();
var sort3=new Array();
var mlines3=new Array();
var mlines4=new Array();
var mlines5=new Array();
var mlines6=new Array();

var d=100000;
var d2=100000;


for(i=0;i<mEvent.mlines.length;i++){
try{l=mTip_Line[tipLineId[mEvent.Live][mLines[LineId[mEvent.mlines[i]]].ID_TIP_RADAR]].ID_TIP_EVENT;}
catch(e){
console.log("laststep="+laststep+"lastblock="+lastblock+"mEventID_EVENT="+ mEvent.ID_EVENT+"mEvent.Live="+ mEvent.Live+"mEvent.mlines[i]="+mEvent.mlines[i]);
if (LineId[mEvent.mlines[i]] == null || mLines[LineId[mEvent.mlines[i]]] == null) {
      console.log("асиансорт  удален mEvent.mlines[i]=" + mEvent.mlines[i] + "ID_EVENT=" + mEvent.ID_EVENT ); 
 mEvent.mlines.splice(i, 1); i--; continue;
}


console.log("асиансорт не найден шаблон идтипрадар ID_LINE=" + mEvent.mlines[i] + "ID_EVENT=" + mEvent.ID_EVENT + "mLines[LineId[mEvent.mlines[i]]].ID_TIP_RADAR=" + mLines[LineId[mEvent.mlines[i]]].ID_TIP_RADAR); continue;

//for(j=0;j<mTip_Line.length;j++) console.log(mTip_Line[j].ID_TIP_RADAR);
}

if((l%3<2)&&(l>1)&&(l<8)) {
if((parseFloatExt(mLines[LineId[mEvent.mlines[i]]].KOEF)*100)%100==0)
{sort1.push(i);mlines.push(mEvent.mlines[i]);}
else 
if((parseFloatExt(mLines[LineId[mEvent.mlines[i]]].KOEF)*100)%50==0)
{sort1.push(i);mlines2.push(mEvent.mlines[i]);}
else {sort1.push(i);mlines4.push(mEvent.mlines[i]);}



}}

j=0;
while(mlines2.length>0){
d=100000;
for(i=0;i<mlines2.length;i++) {d2=Math.abs(mLines[LineId[mlines2[i]]].V[0]-mLines[LineId[mlines2[i]]].V[1]) 
if(d>d2) {d=d2;k=i;};}
mlines3[j]=mlines2[k];mlines2.splice(k,1);j++;}


j=0;
while(mlines.length>0){
d=100000;
for(i=0;i<mlines.length;i++) {d2=Math.abs(mLines[LineId[mlines[i]]].V[0]-mLines[LineId[mlines[i]]].V[1]) 
if(d>d2) {d=d2;k=i;};}
mlines5[j]=mlines[k];mlines.splice(k,1);j++;}


for(j=0;j<sort1.length;j++) mEvent.mlines.splice(sort1[j]-j,1);
mEvent.mlines=mEvent.mlines.concat(mlines3);
mEvent.mlines=mEvent.mlines.concat(mlines5);
mEvent.mlines=mEvent.mlines.concat(mlines4);
}





function DrawEvent(mEvent,b){
if(b==null) b=0;	
if(!mEvent) return;	
var mLine=null;
var mtipLine=null;
var m=0;
var i=0;
var j=0;
var temp=0;
var temp2=0;
var temp3=new Array();
var id_line="";
mEvent.Height=0;
var tmp="";

for(i=0;i<3;i++){mEvent.fora2[i].splice(0);mEvent.fora2_[i].splice(0);mEvent.total2[i].splice(0);mEvent.total2_[i].splice(0);mEvent.T1x2[i]="";mEvent.T1x2_[i]="";mEvent.W1x2[i]="";}
for(i=0;i<30;i++) mEvent.favorit[i]=0;    

mEvent.Title.splice(0);
mEvent.fora1.splice(0);
mEvent.fora1_.splice(0);
mEvent.total1.splice(0);
mEvent.total1_.splice(0);



if((mEvent.mlines.length==0)&&(mEvent.Live==0)){
if(timeinit==1) deleteEventTime(mEvent); return;}

if(b<2||mEvent.Data.length==0){
//if(mEvent.Live==0&&timeinit==2) deleteEventTime(mEvent);
setEventTime(mEvent);
}


if(mEvent.ID_CHAMPIONSHIP==(mEvent.ID_COUNTRY+10)*10000+13){
asiansort2(mEvent);
mEvent.string='<div class="TShow"><div class="free5" style="margin-bottom:10px;margin-left:10px;"><span>'+mEvent.UCHASTNIK1+mEvent.TV+'</span><div class="shappac'+mEvent.BEISBOL+'" onclick="spetclick(this,'+mEvent.ID_EVENT+')"></div></div><div';
if(mEvent.BEISBOL<2) mEvent.string=mEvent.string+' style="display:none;"';	
mEvent.string=mEvent.string+'>';	

for(j=0;j<mEvent.mlines.length;j++) 
mEvent.string=mEvent.string+'<div style="width:228px;float:left;font-weight:bold;margin-left:20px;font-size:12px;color:#000;">'+mLines[LineId[mEvent.mlines[j]]].KOEF+'</div><div class="cell2short"'+inred(Vkoef3(mLines[LineId[mEvent.mlines[j]]].V[0])+'<br />#'+mEvent.mlines[j]+'<br />#0')+' onclick="lineclick(this,0);"><div class="plus333" style="margin-top:1px;width:259px;text-align:center;">'+Vkoef3(mLines[LineId[mEvent.mlines[j]]].V[0])+'<br />#'+mLines[LineId[mEvent.mlines[j]]].ID_LINE+'<br />#0</div></div><div style="float:left;width:100%;height:1px;"></div>';

mEvent.Title[0]="";
mEvent.Data=" ";
mEvent.string=mEvent.string+'</div></div>';	
mEvent.string2=mEvent.string3=mEvent.string;
mEvent.Height=60+mEvent.mlines.length*24;
return mEvent.string;
}






if(mEvent.ID_SPORT==110) mEvent.CountAdd2=mEvent.mlines.length;
if(mEvent.Live==1){mEvent.CountAdd=0; 
}
else mEvent.CountAdd=mEvent.CountAdd3=mEvent.CountAdd2;



asiansort(mEvent);    


if((mEvent.TIP_TABLE==1)||(mEvent.TIP_TABLE==4)){

for(i=0;i<mEvent.mlines.length;i++){

try { mLine = mLines[LineId[mEvent.mlines[i]]]; } catch (e) { mEvent.mlines.splice(i, 1); i--; continue;}
    try { mtipLine = mTip_Line[tipLineId[mEvent.Live][mLine.ID_TIP_RADAR]]; } catch (e) { continue;}
if(mEvent.Live==1) mEvent.CountAdd++;


temp3=mtipLine.SPORTS.split(",");//catch(e){console.log("ошибка mEvent.ID_EVENT="+mEvent.ID_EVENT+"mEvent.mlines[i]="+mEvent.mlines[i]+"mLine.ID_TIP_RADAR="+mLine.ID_TIP_RADAR);}

if((temp3.length>1)&&(mtipLine.ID_TIP_EVENT!=101)){
for(m=1;m<temp3.length-1;m++) if(parseInt(temp3[m])==mEvent.ID_SPORT) break;
if(m==temp3.length-1) {/*if(mEvent.Live==0) mEvent.CountAdd++;*/continue;};}

if(mtipLine.ID_TIP_EVENT>8) {/*if(mEvent.Live==0) mEvent.CountAdd++;*/if(mtipLine.ID_TIP_EVENT!=101) continue;}

id_line="<br />#"+mLine.ID_LINE+"<br />#";
if((mEvent.State!=2)||(euroline==0))   
   switch(mtipLine.ID_TIP_EVENT){ 
    case 1:
	if(mEvent.Live==0) {mEvent.CountAdd--; mEvent.CountAdd3--;} 
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
    
    if(mtipLine.KOL_V==3){mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.T1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
    else{mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.T1x2[2]="";}
    
        

    
    break;
    
    case 2:
	if(mEvent.Live==0) {mEvent.CountAdd--; mEvent.CountAdd3--;}
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
    
    if(mtipLine.KOL_V==3){mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.T1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
    else{mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.T1x2[2]="";}
               
    break;
	
			
	case 101: 
	if(mEvent.Live==0) mEvent.CountAdd--;
	if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
	mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
	if(mtipLine.KOL_V==3){mEvent.W1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.W1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.W1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
	else{mEvent.W1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.W1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.W1x2[2]="";}
		
	break;
        
    
    case 3:
    temp=mEvent.fora1.length;
    mEvent.fora1[temp]="";
    if(mEvent.Title.length<mEvent.fora1.length){temp2=mEvent.Title.length;mEvent.Title[temp2]="";
    if(temp2==0) {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}else
    {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;} 
    };
     mEvent.favorit[temp]=0;
     if(mtipLine.ROS_FAV==1){if((mLine.FAVORIT==1)||(mLine.KOEF=="0.0")||(mLine.KOEF=="0")){ mEvent.fora1[temp]=favkoef(mLine.KOEF)+"<br />"+favkoef2(mLine.KOEF); 
    if((mLine.KOEF=="0.0")||(mLine.KOEF=="0")) mEvent.favorit[temp]=0;else  mEvent.favorit[temp]=1;}
    else {mEvent.favorit[temp]=2;mEvent.fora1[temp]=favkoef2(mLine.KOEF)+"<br />"+favkoef(mLine.KOEF);};}
    
    for(m=0;m<mtipLine.KOL_V;m++){mEvent.fora2[m][temp]="";mEvent.fora2[m][temp]=Vkoef(mLine.V[m])+id_line+m;}
    
    if((mEvent.fora1.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;
	if((mEvent.fora1.length<2)&&(mEvent.Live==0)) mEvent.CountAdd--;
    break;
    
    case 4:
    temp=mEvent.total1.length;
    mEvent.total1[temp]="";
    if(mEvent.Title.length<mEvent.total1.length){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    if(temp2==0) {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}else
    {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;} 
    ;}
    
    mEvent.total1[temp]=totkoef(mLine.KOEF)+"<br />"+totkoef(mLine.KOEF); 
    
    if(mtipLine.KOL_V==2){
    mEvent.total2[0][temp]="";mEvent.total2[1][temp]="";
    mEvent.total2[0][temp]=Vkoef(mLine.V[0])+id_line+0;
    mEvent.total2[1][temp]=Vkoef(mLine.V[1])+id_line+1;}
    
    if((mEvent.total1.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;
	if((mEvent.total1.length<2)&&(mEvent.Live==0)) mEvent.CountAdd--;
    break;
    
    case 8:
    //if((mtipLine.KOL_V==2)&&(mEvent.Live==0))mEvent.CountAdd++;
    
    break;
    
    case 5:
	
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya; 
    ;}
    
    if(mtipLine.KOL_V==3){mEvent.T1x2_[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2_[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.T1x2_[2]=Vkoef(mLine.V[1])+id_line+1;}
    else{mEvent.T1x2_[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2_[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.T1x2_[2]="";}
    
    

    break;
    
    case 6:

    temp=mEvent.fora1_.length;
    mEvent.fora1_[temp]="";
    
    if(mEvent.Title.length<mEvent.fora1_.length){temp2=mEvent.Title.length;mEvent.Title[temp2]="";
    if(temp2==0){mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
    else{mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;} 

    ;}
    
    if(mtipLine.ROS_FAV==1){if((mLine.FAVORIT==1)||(mLine.KOEF=="0.0")||(mLine.KOEF=="0")) mEvent.fora1_[temp]=favkoef(mLine.KOEF)+"<br />"+favkoef2(mLine.KOEF);else mEvent.fora1_[temp]=favkoef2(mLine.KOEF)+"<br />"+favkoef(mLine.KOEF);}
    
    for(m=0;m<mtipLine.KOL_V;m++){mEvent.fora2_[m][temp]="";mEvent.fora2_[m][temp]=Vkoef(mLine.V[m])+id_line+m;}
    if((mEvent.fora1_.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;

    break;
    
    case 7:
    temp=mEvent.total1_.length;
    mEvent.total1_[temp]="";
    
    if(mEvent.Title.length<mEvent.total1_.length){temp2=mEvent.Title.length;mEvent.Title[temp2]="";
    if(temp2==0) {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
    else{mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;}
    }
    mEvent.total1_[temp]=totkoef(mLine.KOEF)+"<br />"+totkoef(mLine.KOEF); 
    
    if(mtipLine.KOL_V==2){
    mEvent.total2_[0][temp]="";mEvent.total2_[1][temp]="";
    mEvent.total2_[0][temp]=Vkoef(mLine.V[0])+id_line+0;
    mEvent.total2_[1][temp]=Vkoef(mLine.V[1])+id_line+1;}
    
    
    if((mEvent.total1_.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;
    break;
    
    default:break;
    ;}
    
    ;}
    

    if((mEvent.CountAdd>0)||(mEvent.Live==1)){ mEvent.Count="+"+mEvent.CountAdd;
	}
    
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;if(mEvent.TIP_TABLE==1) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya; 
    
    ;}
    
    
        
    
    if((mEvent.TIP_TABLE==4)&&(mEvent.Live==0)&&(mEvent.TV.length==0)) mEvent.const1=57; else mEvent.const1=78;
    if(mEvent.ID_LIVE==1||mEvent.clock_stopped>0) mEvent.const1=78;
    
    mEvent.Height=mEvent.const1+(mEvent.Title.length-1)*57;
    if((mEvent.Height>mEvent.const1)&&(mEvent.Live==0)) mEvent.Height=mEvent.const1+57;
    
    ;}
    
    
    if((mEvent.TIP_TABLE==2)||(mEvent.TIP_TABLE==3)){

        
    for(i=0;i<mEvent.mlines.length;i++){
    mLine=mLines[LineId[mEvent.mlines[i]]];
    mtipLine=mTip_Line[tipLineId[mEvent.Live][mLine.ID_TIP_RADAR]];

    if(mEvent.Live==1) mEvent.CountAdd++;


    temp3=mtipLine.SPORTS.split(",");
    if((temp3.length>1)&&(mtipLine.ID_TIP_EVENT!=11)){
    for(m=0;m<temp3.length;m++) if(parseInt(temp3[m])==mEvent.ID_SPORT) break;
    if(m==temp3.length){/*if(mEvent.Live==0) mEvent.CountAdd++;*/continue;};}
    if(mtipLine.ID_TIP_EVENT>8) {/*if(mEvent.Live==0) mEvent.CountAdd++;*/if(mtipLine.ID_TIP_EVENT>11) continue;}
    
    id_line="<br />#"+mLine.ID_LINE+"<br />#";

        
    if((mEvent.State!=2)||(euroline==0))          

    switch(mtipLine.ID_TIP_EVENT){ 
    
    case 1:
	if(mEvent.Live==0){ mEvent.CountAdd--;  mEvent.CountAdd3--;} 
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya; 
    }
    
    if(mtipLine.KOL_V==3){mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.T1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
    else{mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.T1x2[2]="";}
    
    break;
    
    
    case 2: 
    if(mEvent.Live==0) {mEvent.CountAdd--; mEvent.CountAdd3--;}  
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya; 
    }
    
    if(mtipLine.KOL_V==3){mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.T1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
    else{mEvent.T1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.T1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.T1x2[2]="";}
    
    break;
    
	case 101: 
	if(mEvent.Live==0) mEvent.CountAdd--; 
	if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
	mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
	if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya; 
	}
	
	if(mtipLine.KOL_V==3){mEvent.W1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.W1x2[1]=Vkoef(mLine.V[2])+id_line+2;mEvent.W1x2[2]=Vkoef(mLine.V[1])+id_line+1;}
	else{mEvent.W1x2[0]=Vkoef(mLine.V[0])+id_line+0;mEvent.W1x2[1]=Vkoef(mLine.V[1])+id_line+1;mEvent.W1x2[2]="";}
	
	break;
	
    case 3:
    temp=mEvent.fora1.length;
    mEvent.fora1[temp]="";
    
    if(mEvent.Title.length<mEvent.fora1.length){temp2=mEvent.Title.length;mEvent.Title[temp2]="";
    if(temp2==0) {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}else
    {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;} 
    
    };
    
    
     mEvent.favorit[temp]=0;
    if(mtipLine.ROS_FAV==1){if((mLine.FAVORIT==1)||(mLine.KOEF=="0.0")||(mLine.KOEF=="0")){ mEvent.fora1[temp]=favkoef(mLine.KOEF)+"<br />"+favkoef2(mLine.KOEF); 
    if((mLine.KOEF=="0.0")||(mLine.KOEF=="0")) mEvent.favorit[temp]=0;else  mEvent.favorit[temp]=1;	;}
    else {mEvent.favorit[temp]=2;mEvent.fora1[temp]=favkoef2(mLine.KOEF)+"<br />"+favkoef(mLine.KOEF);};}

    for(m=0;m<mtipLine.KOL_V;m++){mEvent.fora2[m][temp]="";mEvent.fora2[m][temp]=Vkoef(mLine.V[m])+id_line+m;}
    

    if((mEvent.fora1.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;
	if((mEvent.fora1.length<2)&&(mEvent.Live==0)) mEvent.CountAdd--;
    break;
    

    case 4:
	  
    temp=mEvent.total1.length;
    mEvent.total1[temp]="";
    if(mEvent.Title.length<mEvent.total1.length){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    if(temp2==0) {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}else
    {mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;} 
    ;}
    
    mEvent.total1[temp]=totkoef(mLine.KOEF)+"<br />"+totkoef(mLine.KOEF); 
    
    if(mtipLine.KOL_V==2){
    mEvent.total2[0][temp]="";mEvent.total2[1][temp]="";
    mEvent.total2[0][temp]=Vkoef(mLine.V[0])+id_line+0;
    mEvent.total2[1][temp]=Vkoef(mLine.V[1])+id_line+1;}
    
    if((mEvent.total1.length<3)&&(mEvent.Live==0)) mEvent.CountAdd3--;
	if((mEvent.total1.length<2)&&(mEvent.Live==0)) mEvent.CountAdd--;
    break;
    

    case 8:
	//if((mtipLine.KOL_V==2)&&(mEvent.Live==0)) mEvent.CountAdd++;
	break;
    default:break;
    
    
    ;}
    
    ;}
    
    if((mEvent.CountAdd>0)||(mEvent.Live==1)){mEvent.Count="+"+mEvent.CountAdd;}
    if(mEvent.Title.length==0){temp2=mEvent.Title.length;mEvent.Title[temp2]=""; 
    mEvent.Title[temp2]=mEvent.UCHASTNIK1+"<br />"+mEvent.UCHASTNIK2;
    if(mEvent.TIP_TABLE==3) mEvent.Title[temp2]=mEvent.Title[temp2]+"<br /><br />"+Nichya;}
    
    if((mEvent.TIP_TABLE==2)&&(mEvent.Live==0)&&(mEvent.TV.length==0)) mEvent.const1=57; else mEvent.const1=78;
    if(mEvent.ID_LIVE==1||mEvent.clock_stopped>0) mEvent.const1=78;
    mEvent.Height=mEvent.const1+(mEvent.Title.length-1)*57;
    if((mEvent.Height>mEvent.const1)&&(mEvent.Live==0)) mEvent.Height=mEvent.const1+57;
    ;}

    
if((mEvent.total1.length>2)&&(mEvent.total1[0]==mEvent.total1[1])){
mEvent.total1[1]=mEvent.total1[2];
mEvent.total1[2]=mEvent.total1[0];
tmp=mEvent.total2[0][1];
mEvent.total2[0][1]=mEvent.total2[0][2];
mEvent.total2[0][2]=tmp;

tmp=mEvent.total2[1][1];
mEvent.total2[1][1]=mEvent.total2[1][2];
mEvent.total2[1][2]=tmp;
}


if((mEvent.total1_.length>2)&&(mEvent.total1_[0]==mEvent.total1_[1])){
mEvent.total1_[1]=mEvent.total1_[2];
mEvent.total1_[2]=mEvent.total1_[0];
tmp=mEvent.total2_[0][1];
mEvent.total2_[0][1]=mEvent.total2_[0][2];
mEvent.total2_[0][2]=tmp;
tmp=mEvent.total2_[1][1];
mEvent.total2_[1][1]=mEvent.total2_[1][2];
mEvent.total2_[1][2]=tmp;
}

if(mEvent.Live==1){mEvent.CountAdd3=mEvent.CountAdd; mEvent.CountAdd2=mEvent.mlines.length;}    
if(b==1) return;
mEvent.string=RapidDraw(mEvent);
}




function drawpr(k){
var PR="PRTABLE"+k;	
if(!id_(PR)) return;
if(id_(PR).style.display=="none") return;      
if(k==9) {drawseo();return;}
LastEventAction=new Array();
if(!prinarray[k]){
id_(PR).innerHTML="";return;}
var nhl=0;
//var h=29;
//if(iphone==1) h=10;	
if(k!=0) prinarray[k]=Sorteventarray(prinarray[k]);
if(k==6) prinarray[8]=Sorteventarray(prinarray[8]);
if(k==7&&window.location.href.indexOf("videonhl")>-1) nhl=1;


var i=0;
var string="";
var j=0;

for(i=0;i<prinarray[k].length;i++){ if(!mEvents[EventId[prinarray[k][i]]]) continue;
if(mEvents[EventId[prinarray[k][i]]].Live==0&&mEvents[EventId[prinarray[k][i]]].mlines.length==0) continue;
if(nhl==1&&mEvents[EventId[prinarray[k][i]]].ID_CHAMPIONSHIP!=142&mEvents[EventId[prinarray[k][i]]].ID_CHAMPIONSHIP!=10560) continue;
string=string+'<div id="AC'+prinarray[k][i]+'" style="width:742px;float:left;background-color:#fff;border-bottom:1px solid #C7C7C7;">'+Rapidstring(mEvents[EventId[prinarray[k][i]]])+'</div>';
LastEventAction.push(prinarray[k][i]); j++;
if(k==7||k==8){if(j==100) break;}
else if(k!=0&&j==100) break;
}

if(k==6){j=0;
for(i=0;i<prinarray[8].length;i++){ if(!mEvents[EventId[prinarray[8][i]]]) continue;
if(mEvents[EventId[prinarray[8][i]]].Live==0&&mEvents[EventId[prinarray[8][i]]].mlines.length==0) continue;
string=string+'<div id="AC'+prinarray[8][i]+'" style="width:742px;float:left;background-color:#fff;border-bottom:1px solid #C7C7C7;">'+Rapidstring(mEvents[EventId[prinarray[8][i]]])+'</div>';
LastEventAction.push(prinarray[8][i]); j++;
if(j==100) break;}
}

id_(PR).innerHTML=string;
//alert(string);
}



function expressDayAdd(){
expressclick();
var i=0;
for(i=0;i<mExpressDay.length;i++)
lineclick1(mExpressDay[i].V+"<br />#"+mExpressDay[i].id_line+"<br />#"+mExpressDay[i].Index,0);
}

function expressDayLiveAdd(){
expressclick();
var i=0;
for(i=0;i<mExpressDayLive.length;i++)
lineclick1(mExpressDayLive[i].V+"<br />#"+mExpressDayLive[i].id_line+"<br />#"+mExpressDayLive[i].Index,0);
}


function psh(k,arr)
{var i=0;
var j=0;
for(i=0;i<arr.length;i++)
if(arr[i]==k) break;
if(i==arr.length) return 1;
return 0;
}


function RandomArray(arr){
var i=0;
var j=0;
var k=0;
var tempindex=new Array();
var temp=new Array();
var n = arr.length;
for(i=0;i<n;i++){
do{k=Math.floor(Math.random()*n)} while(psh(k,tempindex)==0)
temp[k]=arr[i];tempindex.push(k);
}

return temp;	
}



function expressday(t){
//console.log("expressday"+t);	
var i=0;
var k=0;
var l=0;
var m=0;
var u=0;
var temp3=new Array();
var mline=null;
var mEvent=null;
var mtipLine=null;
var string="";

if(CuponDay.style.display=="none"&&t==0) t=3;

if(t!=1){
	
if(t==3)mExpressDay.splice(0);
//console.log("principalDay.length="+principalDay.length);
for(i=0;i<principalDay.length;i++){
if(!mEvents[EventId[principalDay[i]]]) continue;
mEvent=mEvents[EventId[principalDay[i]]];
if(mEvent.State==2) continue;  
for(l=0;l<mEvent.mlines.length;l++) 
{mLine=mLines[LineId[mEvent.mlines[l]]];
mtipLine=mTip_Line[tipLineId[mEvent.Live][mLine.ID_TIP_RADAR]];
temp3=mtipLine.SPORTS.split(",");
if(temp3.length>1){for(m=1;m<temp3.length-1;m++) if(parseInt(temp3[m])==mEvent.ID_SPORT) break; if(m==temp3.length-1) continue;}
else if(parseInt(temp3[0])!=mEvent.ID_SPORT) continue;
if(mtipLine.ID_TIP_EVENT>2) continue; else break;}
if(l==mEvent.mlines.length) continue;

if(t==3) mExpressDay[k]=new TExpress();
if(t==3) mExpressDay[k].Max=0;
mExpressDay[k].Index=principalDayIndex[i]-1;
mExpressDay[k].V=Vkoef(mLine.V[mExpressDay[k].Index]);
mExpressDay[k].id_line=mLine.ID_LINE;
mExpressDay[k].live=mtipLine.Live;
mExpressDay[k].ID_TIP_RADAR=mtipLine.ID_TIP_RADAR;
mExpressDay[k].ID_COUNTRY=mEvent.ID_COUNTRY;
mExpressDay[k].ID_RADAR=mEvent.ID_RADAR;
mExpressDay[k].ID_CHAMPIONSHIP=mEvent.ID_CHAMPIONSHIP;
mExpressDay[k].ID_SPORT=mEvent.ID_SPORT;
mExpressDay[k].U1=mEvent.UCHASTNIK1;
mExpressDay[k].U2=mEvent.UCHASTNIK2;
mExpressDay[k].id_event=mEvent.ID_EVENT;
mExpressDay[k].DATE_EVENT.setTime(mEvent.DATE_EVENT.getTime());
mExpressDay[k].KOEF=mLine.KOEF;
mExpressDay[k].FAVORIT=mLine.FAVORIT;
mExpressDay[k].ID_TIP_SAMPLE=mtipLine.ID_TIP_SAMPLE;

if(mEvents[EventId[mLine.ID_EVENT]].ID_SAMPLE==0)
mExpressDay[k].ID_SAMPLE=mChampionships[ChampionId[mEvents[EventId[mLine.ID_EVENT]].ID_CHAMPIONSHIP]].ID_SAMPLE;
else mExpressDay[k].ID_SAMPLE=mEvents[EventId[mLine.ID_EVENT]].ID_SAMPLE;


if(mtipLine.R[mExpressDay[k].Index]=="1")    mExpressDay[k].R=mEvent.UCHASTNIK1;
if(mtipLine.R[mExpressDay[k].Index]=="2")    mExpressDay[k].R=mEvent.UCHASTNIK2;
if((mtipLine.R[mExpressDay[k].Index]=="X")||(mtipLine.R[mExpressDay[k].Index]=="x")) mExpressDay[k].R=Nichya;
mExpressDay[k].string='<div style="margin-left:9px;float:left;width:217px;margin-top:3px;"><div class="eport as'+mEvent.ID_SPORT+'"></div><div class="express1">'+
mExpressDay[k].R+'</div><div class="express2">'+Vkoef3(mLine.V[mExpressDay[k].Index])+'</div><div class="express3" onclick="plushash('+mEvent.ID_EVENT+');">'+mEvent.UCHASTNIK1+' - ' +mEvent.UCHASTNIK2+'</div></div><span style="float:left;height:1px;width:217px;margin-left:9px;margin-top:5px;background-color:#C1C1C1;"></span>';


if(t==3) recalcul(mExpressDay[k],3);

string=string+mExpressDay[k].string;
k++;
}

;}






m=1;

if(t!=1){
if((k<principalDay.length)||(principalDay.length==0)) CuponDay.style.display="none";else CuponDay.style.display="";
for(i=0;i<mExpressDay.length;i++) m=m*parseFloatExt(mExpressDay[i].V);
expresskoefDay=Math.round(m*100)/100;
expressDay2.innerHTML=""+expresskoefDay;
minimumDay.innerHTML=""+Math.round(mClient.min*100)/100;}

minExpressDay=maxExpressDay();


if(expresskoefDay>=1.01) min2ExpressDay=Round(Math.min(minExpressDay,mClient.maxexpress/(Math.min(expresskoefDay,maxKoef)-1),maxexpressDay/Math.min(expresskoefDay,maxKoef)));
else min2ExpressDay=Round(minExpressDay);
viplataDay=Round2(Math.min(Math.round((Math.min(expresskoefDay,maxKoef))*(parseFloatExt(summainputDay.value))*100)/100,minpayexpressDay()));
minExpressDay=maxExpressDay();
if(minExpressDay==999999999) maximumDay.innerHTML=maxex.replace("F47621","C40000").replace("ss(1)","ss(2)");
else maximumDay.innerHTML=""+zeroinsert(Math.round(min2ExpressDay*100)/100,0);


ViplataDay.innerHTML=""+zeroinsert(Math.round(viplataDay*100)/100,0);

if(t!=1){
id_("PREXPRESS").innerHTML='<span style="float:left;height:9px;width:217px;margin-left:9px;"></span>'+string+'<span style="float:left;height:1px;width:217px;margin-left:9px;margin-top:-1px;background-color:#FFF;"></span>';
//if(principalDayLiveCurrent!=principalDayLiveCurrentOld&&loginstate==1) setMaxExpress(3);
}

savestateDay=saveenabledDay();
}



function SortLiveExpress(arr,radararr){
var i=0;
var j=0;
var k=0;
var radararrindex=new Array();
for(i=0;i<radararr.length;i++) radararrindex[radararr[i]]=i;
var temp=new Array();
var Arr_sort=new Array();
var t=0;
var dd=10000;
var n=arr.length;
for (i = 0; i < n; i++) try{temp[i]=radararrindex[mLines[LineId[arr[i]]].ID_TIP_RADAR];
if(!temp[i]) temp[i]=1000;
}catch(e){temp[i]=1000;}
for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}
for (i = 0; i < n;i++) temp[i]=arr[Arr_sort[i]];
return temp;



}












function expressdaylive(t){
if(iphone==1) return;	
var radararr=new Array(254,252,6322,10997,10,11);
var mlines=new Array();
var i=0;
var j=0;
var q=0;
var k=0;
var l=0;
var	m=0;
var u=0;
var koef=156;
var temp3=new Array();
var temp4="";
var temp5="";
var mline=null;
var mEvent=null;
var mtipLine=null;
var string="";
var score="";
var Last=0;
var LastState=0;
var corotu="";
var maxim=0;
var mExpressDayLiveOld=new Array();
var mExpressDayLiveOld=new Array();
var Max_pay=new Array();
var Max=new Array();
var MAX_PAY=new Array();

if(t==0){
for(i=0;i<mExpressDayLive.length;i++){mExpressDayLiveOld[i]=mExpressDayLive[i].id_line; Max_pay[i]=mExpressDayLive[i].Max_pay; Max[i]=mExpressDayLive[i].Max; MAX_PAY[i]=mExpressDayLive[i].MAX_PAY;}
maxexpressDayLive=999999999; 
mExpressDayLive.splice(0);
//principalDayLiveCurrentOld=principalDayLiveCurrent;//.splice(0);
principalDayLiveCurrent=new Array();
if(RandomLive==1){RandomLive2=1;LastState=1; principalDayLive=RandomArray(principalDayLive);}
if(RandomLive2==1) LastState=1;

for(i=0;i<principalDayLive.length;i++){
if(LastState==1){for(j=0;j<principalDayLiveCurrent.length;j++) if(principalDayLiveCurrent[j]==principalDayLive[i]) break;
if(j<principalDayLiveCurrent.length) continue;}
//console.log("LastState="+LastState+"  i="+i);// principalDayLive.length="+principalDayLive.length+" k="+k);
if(!mEvents[EventId[principalDayLive[i]]]) {//console.log("1LastState="+LastState+"  i="+i+" principalDayLive.length="+principalDayLive.length+" k="+k);
if(i==principalDayLive.length-1&&k<3&&LastState==0){LastState=1;i=-1;};continue;}
mEvent=mEvents[EventId[principalDayLive[i]]];
if(mEvent.ID_SPORT!=1&&mEvent.ID_SPORT!=5) {//console.log("2LastState="+LastState+"  i="+i+" principalDayLive.length="+principalDayLive.length+" k="+k);
if(i==principalDayLive.length-1&&k<3&&LastState==0){LastState=1;i=-1;};continue;}
if(mEvent.State==2) {//console.log("3LastState="+LastState+"  i="+i+" principalDayLive.length="+principalDayLive.length+" k="+k);
if(i==principalDayLive.length-1&&k<3&&LastState==0){LastState=1;i=-1;};continue;} 
if(RandomLive==1) 
mlines=RandomArray(mEvent.mlines);// SortLiveExpress(mEvent.mlines,radararr);
else mlines=mEvent.mlines;
//console.log(mlines);
//console.log(mEvent.mlines);

if(LastState==1) koef=171;

for(l=0;l<mlines.length;l++) 
{mLine=mLines[LineId[mlines[l]]];
//if(LastState==0){
for(j=0;j<radararr.length;j++) if(mLine.ID_TIP_RADAR==radararr[j]){
for(q=0;q<mLine.KOL_V;q++){if(mLine.V[q]>134&&mLine.V[q]<koef&&mLine.KOEF.indexOf(".25")==-1&&mLine.KOEF.indexOf(".0")==-1&&mLine.KOEF.indexOf(".75")==-1) break;}
if(q==mLine.KOL_V) continue; else {principalDayLiveIndex[i]=q;break;};}
if(j<radararr.length) break;//}
//else{for(q=0;q<mLine.KOL_V;q++){if(mLine.V[q]>134&&mLine.V[q]<155) break;}if(q==mLine.KOL_V) continue; else {principalDayLiveIndex[i]=q;break;}}
;}


if(l==mlines.length) {//console.log("4LastState="+LastState+"  i="+i+" principalDayLive.length="+principalDayLive.length+" k="+k);
if(i==principalDayLive.length-1&&k<3&&LastState==0){LastState=1;i=-1;};continue;}
//console.log("k="+k+" i="+i);

mtipLine=mTip_Line[tipLineId[mEvent.Live][mLine.ID_TIP_RADAR]];
principalDayLiveCurrent.push(mEvent.ID_EVENT);
mExpressDayLive[k]=new TExpress();
//mExpressDayLive[k].Max=0;
mExpressDayLive[k].Index=principalDayLiveIndex[i];
mExpressDayLive[k].V=Vkoef(mLine.V[mExpressDayLive[k].Index]);
mExpressDayLive[k].id_line=mLine.ID_LINE;
if(mExpressDayLiveOld[k]!=mExpressDayLive[k].id_line) {mExpressDayLive[k].Max=0;maxim=1;}
mExpressDayLive[k].live=mtipLine.Live;
mExpressDayLive[k].ID_TIP_RADAR=mtipLine.ID_TIP_RADAR;
mExpressDayLive[k].ID_COUNTRY=mEvent.ID_COUNTRY;
mExpressDayLive[k].ID_RADAR=mEvent.ID_RADAR;
mExpressDayLive[k].ID_CHAMPIONSHIP=mEvent.ID_CHAMPIONSHIP;
mExpressDayLive[k].ID_SPORT=mEvent.ID_SPORT;
mExpressDayLive[k].U1=mEvent.UCHASTNIK1;
mExpressDayLive[k].U2=mEvent.UCHASTNIK2;
mExpressDayLive[k].id_event=mEvent.ID_EVENT;
mExpressDayLive[k].DATE_EVENT.setTime(mEvent.DATE_EVENT.getTime());
mExpressDayLive[k].KOEF=mLine.KOEF;
mExpressDayLive[k].FAVORIT=mLine.FAVORIT;
mExpressDayLive[k].ID_TIP_SAMPLE=mtipLine.ID_TIP_SAMPLE;
if(mEvents[EventId[mLine.ID_EVENT]].ID_SAMPLE==0)
mExpressDayLive[k].ID_SAMPLE=mChampionships[ChampionId[mEvents[EventId[mLine.ID_EVENT]].ID_CHAMPIONSHIP]].ID_SAMPLE;
else mExpressDayLive[k].ID_SAMPLE=mEvents[EventId[mLine.ID_EVENT]].ID_SAMPLE;


/*
mExpressDayLive[k].R=mtipLine.R[mExpressDayLive[k].Index]+" "+totkoef(mExpressDayLive[k].KOEF);
if(mtipLine.R[mExpressDayLive[k].Index]=="1")    mExpressDayLive[k].R=mEvent.UCHASTNIK1;
if(mtipLine.R[mExpressDayLive[k].Index]=="2")    mExpressDayLive[k].R=mEvent.UCHASTNIK2;
if((mtipLine.R[mExpressDayLive[k].Index]=="X")||(mtipLine.R[mExpressDayLive[k].Index]=="x")) mExpressDayLive[k].R=Nichya;
*/

if(mtipLine.FREE_TEXT_R.indexOf("@n")>-1)
temp4=mtipLine.FREE_TEXT_R.replace("@x",mLine.KOEF.substr(2,1)).replace("@n",mLine.KOEF.substr(0,1)).replace("@y",mLine.KOEF.substr(6,1));
else temp4=mtipLine.FREE_TEXT_R.replace("@x",mLine.KOEF).replace("@h",mLine.KOEF.split("/")[1]).replace("@z",mLine.KOEF.split("/")[0]);
if(mEvent.ID_SPORT==2) temp4=temp4.replace("@p",quarter);
if(mEvent.ID_SPORT==4) temp4=temp4.replace("@p",period);
if(mEvent.ID_SPORT==3) temp4=temp4.replace("@p",inning);
if(mEvent.ID_SPORT==16) temp4=temp4.replace("@p",quarter);
if(mEvent.ID_SPORT==19) temp4=temp4.replace("@p","фрейм");



if((mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==34)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20)) temp4=temp4.replace("@p",sete);

mExpressDayLive[k].Free=temp4;


corotu=mExpressDayLive[k].R=mtipLine.R[mExpressDayLive[k].Index];
if(mtipLine.R[mExpressDayLive[k].Index]=="1")   {mExpressDayLive[k].R=mEvent.UCHASTNIK1;corotu=corot(mEvent.UCHASTNIK1);}
if(mtipLine.R[mExpressDayLive[k].Index]=="2")    {mExpressDayLive[k].R=mEvent.UCHASTNIK2;corotu=corot(mEvent.UCHASTNIK2);}
if((mtipLine.R[mExpressDayLive[k].Index]=="X")||(mtipLine.R[mExpressDayLive[k].Index]=="x")) mExpressDayLive[k].R=corotu=Nichya;

if((mtipLine.ROS_FAV==0)&&(mLine.KOEF.length>0)&&(mtipLine.FREE_TEXT_R.indexOf("@x")==-1)) temp5=' '+totkoef(mLine.KOEF);
if((mtipLine.ROS_FAV==1)&&(mLine.FAVORIT==(mExpressDayLive[k].Index+1))) temp5=+' '+favkoef(mLine.KOEF);else{
if((mtipLine.ROS_FAV==1)&&(mLine.FAVORIT!=(mExpressDayLive[k].Index+1))) temp5=' '+favkoef2(mLine.KOEF);else
if((mtipLine.ROS_FAV==1)&&(mLine.FAVORIT==0)) temp5=' '+favkoef3(mLine.KOEF);}


if(mEvent.ID_SPORT==5) score=splitscore(mEvent.SETSCORES,mEvent.DURATION,mEvent.Time_Event,mEvent.BEISBOL); else score=mEvent.SCORE;


mExpressDayLive[k].string='<div style="margin-left:9px;float:left;width:217px;margin-top:3px;"><div class="lport as'+mEvent.ID_SPORT+'"></div><div class="expresslive"><div class="express0live"></div><div class="express00live">'+score+'</div><div class="express5live">'+mEvent.Time_Event+'</div></div><div class="express1live">'+
corotu+temp5+'</div><div style="float:left;width:8px;height:18px;margin-top:2px;';
if(mLine.D[mExpressDayLive[k].Index]){
if(mLine.D[mExpressDayLive[k].Index]==1) mExpressDayLive[k].string=mExpressDayLive[k].string+'background:url(/resources/images/cupon10.png) no-repeat;';
if(mLine.D[mExpressDayLive[k].Index]==2) mExpressDayLive[k].string=mExpressDayLive[k].string+'background:url(/resources/images/cupon9.png) no-repeat;';
}

//mExpressDayLive[k].string=mExpressDayLive[k].string+'"></div><div class="express2live">'+Vkoef3(mLine.V[mExpressDayLive[k].Index])+'</div><div class="express4live">'+mExpressDayLive[k].Free+'</div><div class="express3live" onclick="plushash('+mEvent.ID_EVENT+');">'+mEvent.UCHASTNIK1+' - ' +mEvent.UCHASTNIK2+'</div></div><span style="float:left;height:1px;width:217px;margin-left:9px;margin-top:5px;background-color:#C1C1C1;"></span>';

mExpressDayLive[k].string=mExpressDayLive[k].string+'"></div><div class="express2live">'+Vkoef3(mLine.V[mExpressDayLive[k].Index])+'</div><div class="express4live" onclick="plushash('+mEvent.ID_EVENT+');" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'">'+corot(mEvent.UCHASTNIK1)+' - ' +corot(mEvent.UCHASTNIK2)+'</div></div><span style="float:left;height:1px;width:217px;margin-left:9px;margin-top:5px;background-color:#C1C1C1;"></span>';


mExpressDayLive[k].Free=mExpressDayLive[k].Free+temp5;
temp5="";

if(maxim==1) recalcul(mExpressDayLive[k],3); else {mExpressDayLive[k].Max=Max[k];mExpressDayLive[k].Max_pay=Max_pay[k];mExpressDayLive[k].MAX_PAY=MAX_PAY[k];}

if(maxim==1) {recalcul(mExpressDayLive[k],3);} else {mExpressDayLive[k].Max=Max[k];mExpressDayLive[k].Max_pay=Max_pay[k];}


string=string+mExpressDayLive[k].string;
k++;

if(k>2) break;
//console.log("5LastState="+LastState+"  i="+i+" principalDayLive.length="+principalDayLive.length+" k="+k);

if(i==principalDayLive.length-1&&k<3&&LastState==0){LastState=1;i=-1;continue;}

}

}
m=1;
//if((k<principalDayLive.length)||(principalDayLive.length==0)) CuponDayLive.style.display="none";else 

if(t==0){

if(k<3) {id_("cpy").style.display="none";id_("cpn").style.display="";} else {id_("cpn").style.display="none";id_("cpy").style.display="";}


for(i=0;i<mExpressDayLive.length;i++) m=m*parseFloatExt(mExpressDayLive[i].V);
expresskoefDayLive=Math.round(m*100)/100;
expressDay3.innerHTML=""+expresskoefDayLive;
minimumDayLive.innerHTML=""+Math.round(mClient.min*100)/100;}

minExpressDayLive=maxExpressDayLive();
if(expresskoefDayLive>=1.01) min2ExpressDayLive=Round(Math.min(minExpressDayLive,mClient.maxexpress/(Math.min(expresskoefDayLive,maxKoef)-1),maxexpressDayLive/Math.min(expresskoefDayLive,maxKoef)));
else min2ExpressDayLive=Round(minExpressDayLive);
viplataDayLive=Round2(Math.min(Math.round((Math.min(expresskoefDayLive,maxKoef))*(parseFloatExt(summainputDayLive.value))*100)/100,minpayexpressDayLive()));
minExpressDayLive=maxExpressDayLive();
if(minExpressDayLive==999999999) maximumDayLive.innerHTML=maxex.replace("ss(1)","ss(3)");
else maximumDayLive.innerHTML=""+zeroinsert(Math.round(min2ExpressDayLive*100)/100,0);
ViplataDayLive.innerHTML=""+zeroinsert(Math.round(viplataDayLive*100)/100,0);

if(t==0){
id_("PREXPRESSLIVE").innerHTML='<span style="float:left;height:9px;width:217px;margin-left:9px;"></span>'+string+'<span style="float:left;height:1px;width:217px;margin-left:9px;margin-top:-1px;background-color:#FFF;"></span>';}
savestateDayLive=saveenabledDayLive();
if(t==0) RandomLive=0;
//console.log("t="+t+"maxim="+maxim);
//if(maxim==1&&loginstate==1) setMaxExpress(3);
}




function summ2Daychange(){
var t1="";
var t2="";
EndIndexDay=summainputDay.selectionStart;

if(summainputDay.value.indexOf(".")>-1) {restrictDay2="1234567890";
if(summainputDay.value.indexOf(".")<summainputDay.value.length-3)
{t1=summainputDay.value.split(".")[0];
t2=summainputDay.value.split(".")[1].split(" ").join("").substr(0,2);
summainputDay.value=t1+"."+t2;}}
else restrictDay2="1234567890.";
var u=new Array();
var u2="";
u=summainputDay.value.split(".");
if(u.length>1) {u2="."+u[1];summainputDay.value=u[0];} else u2="";
	
	
var p1=summainputDay.value.split(" ").length;
var l=0;
var l2=0;
var l3=0;
var i=0;
var s="";
var ss="";
ss=summainputDay.value.split(" ").join("");
if(ss.length>3){
l=ss.length;
l2=l%3;
l3=(l-l2)/3;
if(l2>0) s=ss.substr(0,l2);else s="";
for(i=0;i<l3;i++) {if(s.length>0) s=s+" "+ss.substr(l2+3*i,3);else s=s+ss.substr(l2+3*i,3);}
summainputDay.value=s;
} else summainputDay.value=ss;
var p2=summainputDay.value.split(" ").length;
summainputDay.value=summainputDay.value+u2;
if(summainputDay.selectionStart) summainputDay.setSelectionRange(EndIndexDay+p2-p1,EndIndexDay+p2-p1);
var n=mExpressDay.length;
var k=0;
minExpressDay=maxExpressDay();
if(expresskoefDay>=1.01) min2ExpressDay=Round(Math.min(minExpressDay,mClient.maxexpress/(Math.min(expresskoefDay,maxKoef)-1),maxexpressDay/Math.min(expresskoefDay,maxKoef)));
else min2ExpressDay=Round(minExpressDay);


viplataDay=Round2(Math.min(Math.round((Math.min(expresskoefDay,maxKoef))*(parseFloatExt(summainputDay.value))*100)/100,minpayexpressDay()));
minExpressDay=maxExpressDay();
ViplataDay.innerHTML=""+zeroinsert(Math.round(viplataDay*100/100),0);
if(minExpressDay==999999999) maximumDay.innerHTML=maxex.replace("F47621","C40000").replace("ss(1)","ss(2)");
else maximumDay.innerHTML=""+zeroinsert(Math.round(min2ExpressDay*100)/100,0);


savestateDay=saveenabledDay();
;}



function summ3Daychange(){

var t1="";
var t2="";
EndIndexDayLive=summainputDayLive.selectionStart;

if(summainputDayLive.value.indexOf(".")>-1) {restrictDayLive2="1234567890";
if(summainputDayLive.value.indexOf(".")<summainputDayLive.value.length-3)
{t1=summainputDayLive.value.split(".")[0];
t2=summainputDayLive.value.split(".")[1].split(" ").join("").substr(0,2);
summainputDayLive.value=t1+"."+t2;}}
else restrictDayLive2="1234567890.";

var u=new Array();
var u2="";
u=summainputDayLive.value.split(".");
if(u.length>1) {u2="."+u[1];summainputDayLive.value=u[0];} else u2="";


var p1=summainputDayLive.value.split(" ").length;
var l=0;
var l2=0;
var l3=0;
var i=0;
var s="";
var ss="";
ss=summainputDayLive.value.split(" ").join("");
if(ss.length>3){
l=ss.length;
l2=l%3;
l3=(l-l2)/3;
if(l2>0) s=ss.substr(0,l2);else s="";
for(i=0;i<l3;i++) {if(s.length>0) s=s+" "+ss.substr(l2+3*i,3);else s=s+ss.substr(l2+3*i,3);}
summainputDayLive.value=s;
} else summainputDayLive.value=ss;
var p2=summainputDayLive.value.split(" ").length;
summainputDayLive.value=summainputDayLive.value+u2;
if(summainputDayLive.selectionStart) summainputDayLive.setSelectionRange(EndIndexDayLive+p2-p1,EndIndexDayLive+p2-p1);
var n=mExpressDayLive.length;
var k=0;
minExpressDayLive=maxExpressDayLive();
if(expresskoefDayLive>=1.01) min2ExpressDayLive=Round(Math.min(minExpressDayLive,mClient.maxexpress/(Math.min(expresskoefDayLive,maxKoef)-1),maxexpressDayLive/Math.min(expresskoefDayLive,maxKoef)));
else min2ExpressDayLive=Round(minExpressDayLive);
viplataDayLive=Round2(Math.min(Math.round((Math.min(expresskoefDayLive,maxKoef))*(parseFloatExt(summainputDayLive.value))*100)/100,minpayexpressDayLive()));
//minExpressDayLive=maxExpressDayLive();
ViplataDayLive.innerHTML=""+zeroinsert(Math.round(viplataDayLive*100/100),0);
if(minExpressDayLive==999999999) maximumDayLive.innerHTML=maxex.replace("ss(1)","ss(3)");
else maximumDayLive.innerHTML=""+zeroinsert(Math.round(min2ExpressDayLive*100)/100,0);

savestateDayLive=saveenabledDayLive();
;}




function minpayexpressDay(){
return Math.round(min2ExpressDay*Math.min(expresskoefDay,maxKoef))
}

function minpayexpressDayLive(){
return Math.round(min2ExpressDayLive*Math.min(expresskoefDayLive,maxKoef))
}



function maxExpressDay(){
var n=99999999999;
var i=0;
var k=0;
var s=0;
var u=0;
for(i=0;i<mExpressDay.length;i++){
minsumpay(mExpressDay[i]); 
u++;
if(n>mExpressDay[i].Maxim_real) n=mExpressDay[i].Maxim_real;
if(mExpressDay[i].MAX_PAY==999999999) n=999999999;}
//console.log("viplataDay="+viplataDay);
if(mExpressDay.length==5){ OtkatDay.innerHTML="Бонус&nbsp;+"+2*u+"%";bonprDay=2*u/100;}

summ7Day.innerHTML=summa7(zeroinsert(Math.round(viplataDay*bonprDay)))+"&nbsp;";
if(n==99999999999)  return 0; else return n;
}


function maxExpressDayLive(){
var n=99999999999;
var i=0;
var k=0;
var s=0;
var u=0;
for(i=0;i<mExpressDayLive.length;i++){
minsumpay(mExpressDayLive[i]); 
u++;
if(n>mExpressDayLive[i].Maxim_real) n=mExpressDayLive[i].Maxim_real;
if(mExpressDayLive[i].MAX_PAY==999999999) n=999999999;
}
//if(mExpressDayLive.length>1){ OtkatDayLive.innerHTML="Бонус&nbsp;+"+bonusprocent[u-1]+"%";bonprDayLive=bonusprocent[u-1]/100;}
if(mExpressDayLive.length>1){ OtkatDayLive.innerHTML="Бонус&nbsp;10%";bonprDayLive=10/100;}
summ7DayLive.innerHTML=summa7(zeroinsert(Math.round(viplataDayLive*bonprDayLive)))+"&nbsp;";
if(n==99999999999)  return 0; else return n;
}






function Rapidstring(mEvent){
if(!mEvent) return "";
if(mEvent.Title.length==0) DrawEvent(mEvent,1);		
if(id_("PRTABLE9")&&id_("PRTABLE9").style.display!="none") return RapidDraw4(mEvent);
var temp=new Array();
var u=0;
var i=0;
var j=0;
var ww=new Array(0,2,1);
var string4="";
var line="";
var score="";
var score2=new Array();
if(mEvent.Live==1){
if((mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20)||(mEvent.ID_SPORT==34)){score2=mEvent.SETSCORES.split(" - ");
score=score2[score2.length-1];if(score.split(":").length<2) score="0:0";} else score=mEvent.SCORE;}

var uc=mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2;

string4='<div style="width:62px;height:30px;float:left;"><div class="port as'+mEvent.ID_SPORT+'"></div>';

if(mEvent.Live==1)
string4=string4+'<div class="splive"></div></div><div class="rst5">'+mEvent.Time_Event+'</div>';
else string4=string4+'<div class="rst4">'+mEvent.Data.split("<br />")[0]+'</div></div><div class="rst6">'+mEvent.Data.split("<br />")[1]+'</div>';




if(mEvent.Live==1){
string4=string4+'<div style="width:55px;float:left;">'+
'<div style="width:7px;height:7px;float:left;margin-top:9px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:left;margin-left:-2px;display:'+display3[mEvent.PODACHA+1]+';"/></div><div style="font-size:12px;float:left;margin-top:8px;color:#E97323;font-weight:bold;width:25px;margin-left:-7px;text-align:right;">'+score.split(":")[0]+':</div><div style="font-size:12px;float:left;margin-top:8px;color:#E97323;font-weight:bold;width:12px;text-align:left;">'+score.split(":")[1]+'</div>'+
'<div style="width:7px;height:7px;float:left;margin-top:9px;"><input type="image" src="/resources/images/tennbalon2.png?7" style="float:left;display:'+display3[mEvent.PODACHA]+';"/></div></div><div class="str4'+mEvent.Live+'" onclick="plushash('+mEvent.ID_EVENT+')" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'"';
if(mEvent.chet>0) string4=string4+'style="width:227px;"';
string4=string4+'>'+uc+'</div>';}

else{
string4=string4+'<div style="width:55px;height:7px;float:left;"></div><div class="str4'+mEvent.Live+'" onclick="plushash('+mEvent.ID_EVENT+')" title="'+mEvent.UCHASTNIK1+' - '+mEvent.UCHASTNIK2+'"';
if(mEvent.chet>0)string4=string4+'style="width:227px;"';
string4=string4+'>'+uc+'</div>';
}

if(mEvent.chet>0) string4=string4+'<div class="bonx'+mEvent.chet+'p" title="'+bxb[mEvent.chet]+' бонусы на этот матч"></div>';




for(i=0;i<3;i++){
if(mEvent.State!=2){
if(mEvent.T1x2[ww[i]].length>0){
temp=mEvent.T1x2[ww[i]].split("#");
line=temp[1].replace("<br />","A")+temp[2];
if((LineId[parseFloatExt(temp[1])])&&(mLines[LineId[parseFloatExt(temp[1])]])&&(mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]))
string4=string4+'<div class="class31"'+inred(mEvent.T1x2[ww[i]])+'onclick="lineclick(this,'+mEvent.Live+',0,1);">'+'<div class="up'+mLines[LineId[parseFloatExt(temp[1])]].D[parseFloatExt(temp[2])]+'" id="'+line+'"></div><div class="class41" >'+mEvent.T1x2[ww[i]]+'</div></div>';else 
string4=string4+'<div class="class31"'+inred(mEvent.T1x2[ww[i]])+'onclick="lineclick(this,'+mEvent.Live+',0,1);"><div id="'+line+'"></div><div class="class41" >'+mEvent.T1x2[ww[i]]+'</div></div>';
}
else string4=string4+'<div class="class311"></div>';}else
{
if(mEvent.T1x2[ww[i]].length>0)
string4=string4+'<div class="class31e"><div class="class41e" >'+mEvent.T1x2[ww[i]]+'</div></div>';
else string4=string4+'<div class="class311"></div>';	
}

}

string4=string4+'<div class="Add33">'

if(mEvent.clock_stopped>0){
string4=string4+'<div class="ad9"><div onclick="plushash('+mEvent.ID_EVENT+')" class="ix'+(12-mEvent.Live)+'" title="трансляция на сайте"></div></div>';
}
else 
if(mEvent.TV.length>0){
temp=mEvent.TV.split(",");
tvstring="";
for(u=0;u<temp.length;u++) tvstring=tvstring+mTV[parseInt(temp[u])]+" \n";
string4=string4+'<div class="ad8" onmouseover="this.style.color=&quot;#FFFFFF&quot;;this.style.backgroundColor=&quot;#F47621&quot;;" onmouseout="this.style.color=&quot;#F47621&quot;;this.style.backgroundColor=&quot;#3B3B3B&quot;;"><div class="ad2" title="'+tvstring+'">ТВ</div></div>';}
else string4=string4+'<div class="ad9"><div class="ad2"></div></div>'

if((mEvent.CountAdd2>0)||(mEvent.Live==1)){ 
string4=string4+'<div class="ad1" style="margin-top:1px;margin-left:1px;">'+
'<div class="ad2" title="Дополнительные линии" onclick="plushash('+mEvent.ID_EVENT+')">';
string4=string4+"+";
if(mEvent.T1x2[0].length>0&&mEvent.Live==0) string4=string4+(mEvent.CountAdd2-1);
else string4=string4+mEvent.CountAdd2;
string4=string4+'</div></div>';}
else string4=string4+'<div class="ad3" style="margin-top:1px;margin-left:2px;"><div class="ad2"></div></div>';

if(mEvent.ID_RADAR>0&&(mEvent.ID_EVENT<1000000000||mEvent.Live==1))
string4=string4+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid='+mEvent.ID_RADAR+'" target="_blank"><div class="ad4" style="margin-left:1px;" title="Статистика"></div></a>';else string4=string4+'<div class="ad5" style="margin-left:1px;"></div>';

string4=string4+'<div class="ad6" style="margin-left:1px;" title="Добавить в избранное" onclick="starclick('+mEvent.ID_EVENT+')">'+
'<div class="ad7'+(mEvent.fav+1)+'"></div></div></div>';

//if(mEvent.State==2) string4=string4.split('"class31"').join('"class31e"').split("class41").join("class41e").split('onclick="lineclick(this,'+mEvent.Live+',0,'+k+');"').join('');

return string4;
}










function nolineclick(a,b,c){
return;	
}


function inred2(t,state,str){
//return ' class="class03" ';

var s=str.split("<br />")[1].replace("#","");
var s1=parseInt(str.split("<br />")[2].replace("#",""));
var i=0;
for(i=0;i<mExpress.length;i++) 
if((mExpress[i].id_line==s)&&(mExpress[i].Index==s1)) return ' class="class035" ';
if(t==1) return ' class="class03" ';

for(i=0;i<LastLine.length/3;i++) 
if(LastLine[3*i]==s&&LastLine[3*i+1]==s1){
if(LineId[s]&&mLines[LineId[s]]&&mLines[LineId[s]].D[s1]==1){clearTimeout(inserttime);inserttime=setTimeout(insertkoef,4000); return ' class="class033" ';}
if(LineId[s]&&mLines[LineId[s]]&&mLines[LineId[s]].D[s1]==2){clearTimeout(inserttime);inserttime=setTimeout(insertkoef,4000); return ' class="class034" ';}
break;
}


return ' class="class03" ';
}




function inredr(t,state,str){
if(str.length==0) return "";	
if(str=="-") return "";	
var s=str.split("<br />")[1].replace("#","");
var s1=parseInt(str.split("<br />")[2].replace("#",""));
if(state==2) return ' style="color:#585858;cursor:default;" onmouseover="this.style.background=&quot;#000&quot;;this.style.color=&quot;#585858&quot;;" ';
var i=0;
for(i=0;i<mExpress.length;i++) 
if((mExpress[i].id_line==s)&&(mExpress[i].Index==s1)) return ' onmouseover="this.style.background=&quot;#f37021&quot;;this.style.color=&quot;#FFFFFF&quot;;" style="background-color:#f37021;color:#FFFFFF;" ';

if(t==1) return "";

for(i=0;i<LastLine.length/3;i++) 
if(LastLine[3*i]==s&&LastLine[3*i+1]==s1){
if(LineId[s]&&mLines[LineId[s]]&&mLines[LineId[s]].D[s1]==1) return ' style="background-color:#00960B;color:#FFFFFF;" ';
if(LineId[s]&&mLines[LineId[s]]&&mLines[LineId[s]].D[s1]==2) return ' style="background-color:#E30000;color:#FFFFFF;" ';
break;
}


//if((mOrdinar.id_line==s)&&(mOrdinar.Index==s1)&&(mOrdinar.State!=1)) return ' style="background-image:url(/resources/images/pod3.png);border:1px solid #EB6F24;color:#FFFFFF;" '
return '';

}










function inrednov(str,k){
if(str.length==0) return "";	
if(str=="-") return "";	
var s=str.split("<br />")[1].replace("#","");
var s1=parseInt(str.split("<br />")[2].replace("#",""));
var i=0;


for(i=0;i<mExpress.length;i++) 
if((mExpress[i].id_line==s)&&(mExpress[i].Index==s1)){ 
if(mExpress[i].ID_TIP_RADAR==26){
id_("NOVSEND").index=mExpress[i].id_event;
id_("NOVSEND").onclick=function(){sendnewordinar(this.index); _gaq.push(['_trackPageview',"/virtual/bet_on_shet/"]);}
if(k==1)mExpress[i].summo=parseFloatExt(cs_("kord5")[0].value);
}

if(mExpress[i].ID_TIP_RADAR==254){
id_("NOVSEND2").index=mExpress[i].id_event;
id_("NOVSEND2").onclick=function(){sendnewordinar(this.index);_gaq.push(['_trackPageview',"/virtual/bet_on_winner/"]);}
if(k==1)mExpress[i].summo=parseFloatExt(cs_("kord5")[1].value);
}

if(mExpress[i].ID_TIP_RADAR==2){
id_("NOVSEND3").index=mExpress[i].id_event;
id_("NOVSEND3").onclick=function(){sendnewordinar(this.index);_gaq.push(['_trackPageview',"/virtual/bet_on_shet/"]);}
if(k==1)mExpress[i].summo=parseFloatExt(cs_("kord5")[2].value);
}
if(mExpress[i].ID_TIP_RADAR==10){
id_("NOVSEND4").index=mExpress[i].id_event;
id_("NOVSEND4").onclick=function(){sendnewordinar(this.index);_gaq.push(['_trackPageview',"/virtual/bet_on_winner/"]);}
if(k==1)mExpress[i].summo=parseFloatExt(cs_("kord5")[3].value);
}


if(k==1){
newexpress(mExpress[i]);
newordsumm();
savestate=saveenabled();}
return ' onmouseover="this.style.backgroundImage=&quot;none&quot;;" style="background-color:#FF6D00;color:#FFFFFF;background-image:none;" ';

}
return '';

}





function inred(str){
if(str.length==0) return "";	
if(str=="-") return "";	
var s=str.split("<br />")[1].replace("#","");
var s1=parseInt(str.split("<br />")[2].replace("#",""));

var i=0;



for(i=0;i<mExpress.length;i++) 
if((mExpress[i].id_line==s)&&(mExpress[i].Index==s1)) return ' style="background-image:url(/resources/images/pod3.png);border:1px solid #EB6F24;color:#FFFFFF;" ';
//if((mOrdinar.id_line==s)&&(mOrdinar.Index==s1)&&(mOrdinar.State!=1)) return ' style="background-image:url(/resources/images/pod3.png);border:1px solid #EB6F24;color:#FFFFFF;" '
return '';
}


function lb2Click(k){
var i=0;
var j=0;
mChampionships[ChampionId[k]].lb2=(mChampionships[ChampionId[k]].lb2+1)%2;

mChampionships[ChampionId[k]].stringlive='<div name="ChampnameLive'+k+'" class="cham1">'+
'<div class="cham2" title="'+lbarray[mChampionships[ChampionId[k]].lb2]+'" onClick="lb2Click('+k+')">'+
'<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[ChampionId[k]].lb2)+'px;margin-top:'+(5-2*mChampionships[ChampionId[k]].lb2)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb2)+'.png?7"/></div>'+
'<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[ChampionId[k]].fav2+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickcl('+k+')"></div>'+
'<div class="cham7"></div><div class="cham3">'+mChampionships[ChampionId[k]].Logo11+'</div>';
if(k<1000000000) mChampionships[ChampionId[k]].stringlive=mChampionships[ChampionId[k]].stringlive+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+k+'" target="_blank"><div class="cham5"></div></a>';
mChampionships[ChampionId[k]].stringlive=mChampionships[ChampionId[k]].stringlive+'</div>';


var mevents=getElementsByName("div","l"+k);
if(mChampionships[ChampionId[k]].lb2==1)
for(i=0;i<mevents.length;i++) mevents[i].style.display="none";
else for(i=0;i<mevents.length;i++) mevents[i].style.display="";

var mchamps=getElementsByName("div","ChampnameLive"+k);

for(j=0;j<mchamps.length;j++) {
mchamps[j].childNodes[0].childNodes[0].src='/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb2)+'.png';
mchamps[j].childNodes[0].childNodes[0].style.marginLeft=""+(3+2*mChampionships[ChampionId[k]].lb2)+"px";
mchamps[j].childNodes[0].childNodes[0].style.marginTop=""+(5-2*mChampionships[ChampionId[k]].lb2)+"px";
mchamps[j].childNodes[0].title=lbarray[mChampionships[ChampionId[k]].lb2];
}




}

function lb1Click(k){
var i=0;
var j=0;	
mChampionships[ChampionId[k]].lb1=(mChampionships[ChampionId[k]].lb1+1)%2;
mChampionships[ChampionId[k]].lb11=1;
mChampionships[ChampionId[k]].string='<div name="Champname'+k+'" class="cham1">'+
'<div class="cham2" title="'+lbarray[mChampionships[ChampionId[k]].lb1]+'" onClick="lb1Click('+k+')">'+
'<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[ChampionId[k]].lb1)+'px;margin-top:'+(5-2*mChampionships[ChampionId[k]].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb1)+'.png?7"/></div>'+
'<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[ChampionId[k]].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+k+')"></div>'+
'<div class="cham4">'+mChampionships[ChampionId[k]].Logo11+'</div>';
if(k<1000000000) mChampionships[ChampionId[k]].string=mChampionships[ChampionId[k]].string+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+k+'" target="_blank"><div class="cham5"></div></a>';
mChampionships[ChampionId[k]].string=mChampionships[ChampionId[k]].string+'<div class="cham6"></div></div>';

var mevents=getElementsByName("div","n"+k);
var temp=0;

if(mChampionships[ChampionId[k]].lb1==1)

for(i=0;i<mevents.length;i++) mevents[i].style.display="none";

else for(i=0;i<mevents.length;i++){
mevents[i].style.display="";
temp=parseInt(mevents[i].id.replace("Mevent",""));
if(LiveState+FavoritState+SportState+BltState+SportIndex>-1){ 
if((RapidState==1)&&(euroline==1)&&((mEvents[EventId[temp]].TIP_TABLE==3)||(mEvents[EventId[temp]].TIP_TABLE==2)))
mevents[i].innerHTML=mEvents[EventId[temp]].string2;else mevents[i].innerHTML=mEvents[EventId[temp]].string;

if(mEvents[EventId[temp]].ID_CHAMPIONSHIP==(mEvents[EventId[temp]].ID_COUNTRY+10)*10000+13) mevents[i].style.height=mEvents[EventId[temp]].Height+"px";
else 
if(euroline==1){
if((LIVE2>3)&&(mEvents[EventId[temp]].Live==1)&&(mEvents[EventId[temp]].const1+57<mEvents[EventId[temp]].Height))
mevents[i].style.height=(mEvents[EventId[temp]].const1+57)+"px";
else mevents[i].style.height=mEvents[EventId[temp]].Height+"px";}
else mevents[i].style.height="90px";

}


}



var mchamps=getElementsByName("div","Champname"+k);

for(j=0;j<mchamps.length;j++) {
mchamps[j].childNodes[0].childNodes[0].src='/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb1)+'.png';
mchamps[j].childNodes[0].childNodes[0].style.marginLeft=""+(3+2*mChampionships[ChampionId[k]].lb1)+"px";
mchamps[j].childNodes[0].childNodes[0].style.marginTop=""+(5-2*mChampionships[ChampionId[k]].lb1)+"px";
mchamps[j].childNodes[0].title=lbarray[mChampionships[ChampionId[k]].lb1];
}

}

function starclick(k){
if(k==0) k=LastFrontLive;
if(k==1) k=EventRospisi;
if(!mEvents[EventId[k]]) return;
mEvents[EventId[k]].fav=(mEvents[EventId[k]].fav+1)%2;    



if(LastFrontLive>-1){if((mEvents[EventId[k]].ID_SPORT==1)||(mEvents[EventId[k]].ID_SPORT==4)||(mEvents[EventId[k]].ID_SPORT==6)||(mEvents[EventId[k]].ID_SPORT==60)) 
{id_("starscaut").style.background=Plus.childNodes[2].childNodes[0].childNodes[0].style.background='url(/resources/images/star'+(mEvents[EventId[k]].fav+1)+'.png) no-repeat';}
else
if(mEvents[EventId[k]].ID_SPORT==5||(mEvents[EventId[k]].ID_SPORT==2&&mEvents[EventId[k]].clock_stopped>0)||(mEvents[EventId[k]].ID_SPORT==23&&mEvents[EventId[k]].clock_stopped>0)||(mEvents[EventId[k]].ID_SPORT==31&&mEvents[EventId[k]].clock_stopped>0)||(mEvents[EventId[k]].ID_SPORT==20&&mEvents[EventId[k]].clock_stopped>0)){id_("starscautlarg").style.background=Pluslarge.childNodes[2].childNodes[0].childNodes[0].style.background='url(/resources/images/star'+(mEvents[EventId[k]].fav+1)+'.png) no-repeat';}

else 
Pluslarge.childNodes[1].childNodes[0].style.background='url(/resources/images/star'+(mEvents[EventId[k]].fav+1)+'.png) no-repeat';}
if(EventRospisi>-1){ Rospis.childNodes[1].childNodes[0].style.background='url(/resources/images/star'+(mEvents[EventId[k]].fav+1)+'.png) no-repeat';
if((mEvents[EventId[k]].ID_SPORT==4||mEvents[EventId[k]].ID_SPORT==5||mEvents[EventId[k]].ID_SPORT==2||mEvents[EventId[k]].ID_SPORT==1||mEvents[EventId[k]].ID_SPORT==6||mEvents[EventId[k]].ID_SPORT==60||mEvents[EventId[k]].ID_SPORT==23||mEvents[EventId[k]].ID_SPORT==31||mEvents[EventId[k]].ID_SPORT==20)&&mEvents[EventId[k]].clock_stopped>0) id_("starscauthok").style.background='url(/resources/images/star'+(mEvents[EventId[k]].fav+1)+'.png) no-repeat';
}

var m=0;
var j=0;
if(mEvents[EventId[k]].fav==1){m=1;insertcookie(k);} else  {m=-1; deletecookie(k);}

mEvents[EventId[k]].string=mEvents[EventId[k]].string.replace("ad7"+((mEvents[EventId[k]].fav+1)%2+1),"ad7"+(mEvents[EventId[k]].fav+1));
mEvents[EventId[k]].string2=mEvents[EventId[k]].string2.replace("ad7"+((mEvents[EventId[k]].fav+1)%2+1),"ad7"+(mEvents[EventId[k]].fav+1));
if(mEvents[EventId[k]].Live==1) mEvents[EventId[k]].string3=mEvents[EventId[k]].string3.replace("star"+((mEvents[EventId[k]].fav+1)%2+1),"star"+(mEvents[EventId[k]].fav+1));

//mEvents[EventId[k]].string=mEvents[EventId[k]].string.replace("ad7"+((mEvents[EventId[k]].fav+1)%2+1),"ad7"+(mEvents[EventId[k]].fav+1));
//mEvents[EventId[k]].string2=mEvents[EventId[k]].string2.replace("ad7"+((mEvents[EventId[k]].fav+1)%2+1),"ad7"+(mEvents[EventId[k]].fav+1));
//if(mEvents[EventId[k]].Live==1) mEvents[EventId[k]].string3=mEvents[EventId[k]].string3.replace("ad7"+((mEvents[EventId[k]].fav+1)%2+1),"ad7"+(mEvents[EventId[k]].fav+1));



mChampionships[ChampionId[mEvents[EventId[k]].ID_CHAMPIONSHIP]].favorit=mChampionships[ChampionId[mEvents[EventId[k]].ID_CHAMPIONSHIP]].favorit+m;

for(j=0;j<mCountry.length;j++) if(mCountry[j].ID_COUNTRY==mChampionships[ChampionId[mEvents[EventId[k]].ID_CHAMPIONSHIP]].ID_COUNTRY) {mCountry[j].favorit=mCountry[j].favorit+m;break;}
for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==mChampionships[ChampionId[mEvents[EventId[k]].ID_CHAMPIONSHIP]].ID_SPORT) {mSport[j].favorit=mSport[j].favorit+m;break;}
for(i=0;i<mSport.length;i++) if(mSport[i].favorit>0){zvezda=1;break;}
if(i==mSport.length) zvezda=0;Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
if(FavoritState==1) DrawTable(0); else redrawevent(k);
redraweventaction(k);
if(mEvents[EventId[k]].Live==1) drawlivenow();
}


function starclickcl(k){
var i=0;
var m=0;
var j=0;
mChampionships[ChampionId[k]].fav2=(mChampionships[ChampionId[k]].fav2+1)%2;
for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_CHAMPIONSHIP==mChampionships[ChampionId[k]].ID_CHAMPIONSHIP)&&(mEvents[i].Live==1))
{if(mEvents[i].fav!=mChampionships[ChampionId[k]].fav2)m++;mEvents[i].fav=mChampionships[ChampionId[k]].fav2;
mEvents[i].string=mEvents[i].string.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
mEvents[i].string2=mEvents[i].string2.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
mEvents[i].string3=mEvents[i].string3.replace("star"+((mEvents[i].fav+1)%2+1),"star"+(mEvents[i].fav+1));
//if(id_("now"+mEvents[i].ID_EVENT)) id_("now"+mEvents[i].ID_EVENT).src="/resources/images/star"+(mEvents[i].fav+1)+".png?7";
redraweventaction(mEvents[i].ID_EVENT);
if(FavoritState!=1) redrawevent(mEvents[i].ID_EVENT);
}

if(mChampionships[ChampionId[k]].fav2==0){deletechampcookielive(k);mChampionships[ChampionId[k]].favorit=mChampionships[ChampionId[k]].favorit-m;
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[k]].ID_COUNTRY) {mCountry[i].favorit=mCountry[i].favorit-m;break;}
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mChampionships[ChampionId[k]].ID_SPORT) {mSport[i].favorit=mSport[i].favorit-m;break;}
}
else {insertchampcookielive(k);mChampionships[ChampionId[k]].favorit=mChampionships[ChampionId[k]].favorit+m;
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[k]].ID_COUNTRY) {mCountry[i].favorit=mCountry[i].favorit+m;break;}
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mChampionships[ChampionId[k]].ID_SPORT) {mSport[i].favorit=mSport[i].favorit+m;break;}
}


for(i=0;i<mSport.length;i++) if(mSport[i].favorit>0){zvezda=1;break;}
if(i==mSport.length) zvezda=0;Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";


mChampionships[ChampionId[k]].stringlive='<div name="ChampnameLive'+k+'" class="cham1">'+
'<div class="cham2" title="'+lbarray[mChampionships[ChampionId[k]].lb2]+'" onClick="lb2Click('+k+')">'+
'<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[ChampionId[k]].lb2)+'px;margin-top:'+(5-2*mChampionships[ChampionId[k]].lb2)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb2)+'.png?7"/></div>'+
'<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[ChampionId[k]].fav2+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickcl('+k+')"></div>'+
'<div class="cham7"></div><div class="cham3">'+mChampionships[ChampionId[k]].Logo11+'</div>';
if(k<1000000000) mChampionships[ChampionId[k]].stringlive=mChampionships[ChampionId[k]].stringlive+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+k+'" target="_blank"><div class="cham5"></div></a>';
mChampionships[ChampionId[k]].stringlive=mChampionships[ChampionId[k]].stringlive+'</div>';

if(FavoritState==0){ 
var node=getElementsByName("div","ChampnameLive"+k);
m=node.length
for(j=0;j<m;j++) 
node[j].childNodes[1].style.backgroundImage='url(/resources/images/star'+(mChampionships[ChampionId[k]].fav2+1)+'.png)';

}
if(FavoritState==1)DrawTable(0);
drawlivenow();
}





function starclickc(k){
var i=0;
var m=0;
var j=0;
mChampionships[ChampionId[k]].fav1=(mChampionships[ChampionId[k]].fav1+1)%2;

for(i=0;i<mEvents.length;i++) if((mEvents[i].ID_CHAMPIONSHIP==k)&&(mEvents[i].Live==0))
{if(mEvents[i].fav!=mChampionships[ChampionId[k]].fav1) m++; mEvents[i].fav=mChampionships[ChampionId[k]].fav1;
mEvents[i].string=mEvents[i].string.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
mEvents[i].string2=mEvents[i].string2.replace("ad7"+((mEvents[i].fav+1)%2+1),"ad7"+(mEvents[i].fav+1));
//mEvents[i].string3=mEvents[i].string3.replace("star"+((mEvents[i].fav+1)%2+1),"star"+(mEvents[i].fav+1));

if(FavoritState!=1) redrawevent(mEvents[i].ID_EVENT);
redraweventaction(mEvents[i].ID_EVENT);
}



if(mChampionships[ChampionId[k]].fav1==0){deletechampcookie(k);mChampionships[ChampionId[k]].favorit=mChampionships[ChampionId[k]].favorit-m;
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[k]].ID_COUNTRY) {mCountry[i].favorit=mCountry[i].favorit-m;break;}
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mChampionships[ChampionId[k]].ID_SPORT) {mSport[i].favorit=mSport[i].favorit-m;break;}
}
else {insertchampcookie(k);mChampionships[ChampionId[k]].favorit=mChampionships[ChampionId[k]].favorit+m;
for(i=0;i<mCountry.length;i++) if(mCountry[i].ID_COUNTRY==mChampionships[ChampionId[k]].ID_COUNTRY) {mCountry[i].favorit=mCountry[i].favorit+m;break;}
for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mChampionships[ChampionId[k]].ID_SPORT) {mSport[i].favorit=mSport[i].favorit+m;break;}
}

for(i=0;i<mSport.length;i++) if(mSport[i].favorit>0){zvezda=1;break;}
if(i==mSport.length) zvezda=0;Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";


mChampionships[ChampionId[k]].string='<div name="Champname'+k+'" class="cham1">'+
'<div class="cham2" title="'+lbarray[mChampionships[ChampionId[k]].lb1]+'" onClick="lb1Click('+k+')">'+
'<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[ChampionId[k]].lb1)+'px;margin-top:'+(5-2*mChampionships[ChampionId[k]].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[ChampionId[k]].lb1)+'.png?7"/></div>'+
'<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[ChampionId[k]].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+k+')"></div>'+
'<div class="cham4">'+mChampionships[ChampionId[k]].Logo11+'</div>';
if(k<1000000000) mChampionships[ChampionId[k]].string=mChampionships[ChampionId[k]].string+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&tournamentid='+k+'" target="_blank"><div class="cham5"></div></a>';
mChampionships[ChampionId[k]].string=mChampionships[ChampionId[k]].string+'<div class="cham6"></div></div>';

if(FavoritState==0){ 
var node=getElementsByName("div","Champname"+k);
m=node.length;
for(j=0;j<m;j++) 
node[j].childNodes[1].style.backgroundImage='url(/resources/images/star'+(mChampionships[ChampionId[k]].fav1+1)+'.png)';

}
if(FavoritState==1)
DrawTable(0);
}

function liveclick(state){
if(state==1) window.currentAjax ? window.currentAjax.abort() : false;
IndexScroll=0;
var i=0;
BltState=0;
FavoritState=0;
SportState=0;
LiveState=1;
SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
RegionIndex=-1;
ChampionIndex=-1;

for(i=0;i<Smenu.length;i++){
if(i==0) Smenu[i].style.backgroundImage="url(/resources/images/plapod2.png)";	
else Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

hashstate=state;
showTitle(false,"LIVE ставки");	

if(state==1){
_gaq.push(['_trackPageview',"/stavki/sport/live/"]);
try{window.history.pushState("", "", "/stavki/sport/live/");} catch(e){window.location.hash="/stavki/sport/live/";};
}

showsport();
ttt1=1;
MenuClick(0);
BltBox.style.display="none";
GMTBox.style.display="none";
DateBox.style.display="none";
Titles.innerHTML="СТАВКИ LIVE";
};

function favoritclick(state){
if(state==1) window.currentAjax ? window.currentAjax.abort() : false;
IndexScroll=0;
var i=0;
BltState=0;
FavoritState=1;
SportState=0;
LiveState=0;
SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
RegionIndex=-1;
ChampionIndex=-1;
for(i=0;i<Smenu.length;i++){
if(i==3)Smenu[i].style.backgroundImage="url(/resources/images/plapod2.png)";	
else Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

showTitle(false,"Избранные чемпионаты и события");	
if(state==1){
_gaq.push(['_trackPageview',"/stavki/sport/favorites/"]);
try{window.history.pushState("", "", "/stavki/sport/favorites/");} catch(e){window.location.hash="/stavki/sport/favorites/";};
}
showsport();
ttt1=1;
MenuClick(0);
BltBox.style.display="none";
GMTBox.style.display="";
DateBox.style.display="none";
Titles.innerHTML="ИЗБРАННОЕ";
};

function tvclick(state){
if(state==1) window.currentAjax ? window.currentAjax.abort() : false;
IndexScroll=0;
var i=0;
BltState=0;
FavoritState=0;
SportState=1;
LiveState=0;
SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
RegionIndex=-1;
ChampionIndex=-1;
for(i=0;i<Smenu.length;i++){
if(i==4)Smenu[i].style.backgroundImage="url(/resources/images/plapod2.png)";	
else Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

ttt1=1;
hashstate=state;
showTitle(false,"Матчи по ТВ");	
if(state==1){
_gaq.push(['_trackPageview',"/stavki/sport/"+transliterate("матчи по ТВ")+"/"]);
try{window.history.pushState("", "", "/stavki/sport/"+transliterate("матчи по ТВ")+"/");} catch(e){window.location.hash="/stavki/sport/"+transliterate("матчи по ТВ")+"/";};

}
showsport();
MenuClick(0);
BltBox.style.display="";
GMTBox.style.display="";
DateBox.style.display="none";
Titles.innerHTML="МАТЧИ ПО ТВ";

};

function bltclick(k,state){
		
if(state==1) window.currentAjax ? window.currentAjax.abort() : false;
IndexScroll=0;
BltState=k;
FavoritState=0;
SportState=0;
LiveState=0;
SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";
region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
RegionIndex=-1;
ChampionIndex=-1;

for(i=0;i<Smenu.length;i++){
if(i==(BltState/2)) 
Smenu[i].style.backgroundImage="url(/resources/images/plapod2.png)";	
else Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

hashstate=state;
showTitle(false,"Ближайшие события");	
if(state==1){
_gaq.push(['_trackPageview',"/stavki/sport/"+transliterate("ближайшие ставки")+"/"+k+"/"]);
try{window.history.pushState("", "", "/stavki/sport/"+transliterate("ближайшие ставки")+"/"+k+"/");} catch(e){window.location.hash="/stavki/sport/"+transliterate("ближайшие ставки")+"/"+k+"/";};
}
showsport();
ttt1=1;
MenuClick(0);
BltBox.style.display="";
GMTBox.style.display="";
DateBox.style.display="none";
Titles.innerHTML="БЛИЖАЙШИЕ СТАВКИ";
//if(vflbegin==0&&ttt>3) webSocket.send("vflbegin");

}


function plushash(id){
var temp="";	
showTitle(false);	
if(!mEvents[EventId[id]]) return;    
hashstateb=1;
_gaq.push(['_trackPageview',"/plus/"+id+temp+"/"+transliterate(mEvents[EventId[id]].UCHASTNIK1)+"_vs_"+transliterate(mEvents[EventId[id]].UCHASTNIK2)+"/"]);
try{window.history.pushState("", "", "/plus/"+id+temp+"/"+transliterate(mEvents[EventId[id]].UCHASTNIK1)+"_vs_"+transliterate(mEvents[EventId[id]].UCHASTNIK2)+"/");} catch(e){window.location.hash="/plus/"+id+temp+"/"+transliterate(mEvents[EventId[id]].UCHASTNIK1)+"_vs_ "+transliterate(mEvents[EventId[id]].UCHASTNIK2)+"/";}; 
hideall();
window.scrollTo(0,0);
plus(id);

}


function plus(id){
if(!mEvents[EventId[id]]) return;
if(mEvents[EventId[id]].Live==1){initscaut(mEvents[EventId[id]]);pluslive(id);Scaut.events.splice(0);webSocket.send("LIVEEVENT="+mEvents[EventId[id]].ID_RADAR);return;}
if(mEvents[EventId[id]].ID_SPORT==110) {pluslive(id);return;}
plusoff(id);return;
if(mEvents[EventId[id]].CountAdd2>0) {plusoff(id);return;}
if(mRospis) mRospis.splice(0);plusrospisi(id);
}

function plusoff(id){EventRospisi=id;webSocket.send("rospis@"+id);
}

function rosclick(){
rosclick_(this.index)}

function rosclick_(index){
_gaq.push(['_trackPageview',"virtual/"+grupvirtual[index]]);	
var i=0;
for(i=0;i<Rosmenu.length;i++)
if(i==index){if(i==Rosmenu.length-1) Rosmenu[i].setAttribute("class", "rosmenu3"); else Rosmenu[i].setAttribute("class", "rosmenu2");}
else{if(i==Rosmenu.length-1) Rosmenu[i].setAttribute("class", "rosmenu4"); else Rosmenu[i].setAttribute("class", "rosmenu"); }
rosstate=index;
if(Rospis.style.display!="none") plusrospisi(EventRospisi);
}


function rosclick1(){
rosclick1_(this.index);
}

function rosclick1_(index){
_gaq.push(['_trackPageview',"virtual/"+grupvirtual[index]]);	
var i=0;
for(i=0;i<Plusmenu.length;i++)
if(i==index) {
if(i==Plusmenu.length-1) Plusmenu[i].setAttribute("class", "rosmenu3"); else Plusmenu[i].setAttribute("class", "rosmenu2");
}
else {if(i==Plusmenu.length-1) Plusmenu[i].setAttribute("class", "rosmenu4"); else Plusmenu[i].setAttribute("class", "rosmenu");}
plusstate=index;
if(Plus.style.display!="none") pluslive(LastFrontLive);
}


function rosclick2(){
var i=0;
for(i=0;i<Pluslargemenu.length;i++)
if(i==this.index) Pluslargemenu[i].setAttribute("class", "rosmenu2");
else Pluslargemenu[i].setAttribute("class", "rosmenu");
pluslargestate=this.index;
_gaq.push(['_trackPageview',"virtual/"+grupvirtual[this.index]]);	
if(Pluslarge.style.display!="none") pluslive(LastFrontLive);

}


function unkoef(s){
if(s==null) return 0;
var t=0;
if(s.indexOf(":")>-1){
var t1=s.split(":");if(t1.length==2) {t=t+10-parseFloatExt(t1[0])+parseFloatExt(t1[1]);return t;}
}
return parseFloatExt(s);
}




function SortRospis(arr,Live){
var i=0;
var j=0;
var k=0;
var temp2=new Array();
var temp=new Array();
var Arr_sort=new Array();
var t=0;
var dd=0;
var n=arr.length;

for(i = 0; i < n; i++){temp[i]=unkoef(arr[i].KOEF);

for(k=0;k<mTip_Line.length;k++) if(mTip_Line[k].ID_TIP_RADAR==arr[i].ID_TIP_RADAR&&mTip_Line[k].Live==Live)
{
if((mTip_Line[k].ROS_FAV==0)&&(arr[i].KOEF.length>0)&&(mTip_Line[k].FREE_TEXT_R.indexOf("@x")==-1))for(t=0;t<arr[i].KOL;t++) arr[i].DOP_KOEF.push(totkoef(arr[i].KOEF));
else
if((mTip_Line[k].ROS_FAV==0)&&(arr[i].KOEF.length>0)&&(mTip_Line[k].FREE_TEXT_R.indexOf("@x")>-1))for(t=0;t<arr[i].KOL;t++) arr[i].DOP_KOEF.push(totkoef2(arr[i].KOEF));
else
if((mTip_Line[k].ROS_FAV==1)&&(arr[i].FAVORIT==1)) {arr[i].DOP_KOEF[0]=favkoef(arr[i].KOEF);arr[i].DOP_KOEF[1]=favkoef2(arr[i].KOEF);temp[i]= -temp[i];}
else
if((mTip_Line[k].ROS_FAV==1)&&(arr[i].FAVORIT==2)) {arr[i].DOP_KOEF[1]=favkoef(arr[i].KOEF);arr[i].DOP_KOEF[0]=favkoef2(arr[i].KOEF);}
else
if((mTip_Line[k].ROS_FAV==1)&&(arr[i].FAVORIT==0)) {arr[i].DOP_KOEF[1]=favkoef3(arr[i].KOEF);arr[i].DOP_KOEF[0]=favkoef3(arr[i].KOEF);}	
else for(t=0;t<arr[i].KOL;t++) arr[i].DOP_KOEF.push(arr[i].KOEF);
break;}}


for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}
for (i = 0; i < arr.length;i++) temp2[i]=arr[Arr_sort[i]];
return temp2;



}


function doublecell(W,D){
if(D==0) return W;
if(W==6) return 3;
if(W==4) return 2;
return W;
}

function inband(str){
if(str&&str.indexOf("<br />")==-1) return "";
else return 'style="margin-top:-15px;"';
	
	
}



function plusrospisi(id){
pluslive(id);
return;}	



function inplus(str,height){
if(str.length==0) return "";	
if(str=="-") return "";
if(!height) height=0;
height++;
var r="";
if(height==2) r="r";

var s=str.split("<br />")[1].replace("#","");
var s1=parseInt(str.split("<br />")[2].replace("#",""));
var i=0;

if((LineId[s])&&(mLines[LineId[s]])&&(EventId[mLines[LineId[s]].ID_EVENT])&&(mEvents[EventId[mLines[LineId[s]].ID_EVENT]])&&(mEvents[EventId[mLines[LineId[s]].ID_EVENT]].Live==1)&&(mEvents[EventId[mLines[LineId[s]].ID_EVENT]].State==2)) return "";

if(!Plusup.line[s1]) {Plusup.line[s1]=new Array();Plusup.state[s1]=new Array();plusinterval[s1]=new Array();}
if(!Plusup.line[s1][s]) {Plusup.line[s1][s]=str.split("<br />")[0];
Plusup.state[s1][s]=0;
}

if(Plusup.state[s1][s]==1) Plusup.state[s1][s]=-1;
if(Plusup.state[s1][s]==2) Plusup.state[s1][s]=-2;



if(parseFloatExt(Plusup.line[s1][s])>parseFloatExt(str.split("<br />")[0])){Plusup.state[s1][s]=2;Plusup.line[s1][s]=str.split("<br />")[0];}
if(parseFloatExt(Plusup.line[s1][s])<parseFloatExt(str.split("<br />")[0])){Plusup.state[s1][s]=1;Plusup.line[s1][s]=str.split("<br />")[0];}




if(Plusup.state[s1][s]>0) return '<div class="up'+r+Plusup.state[s1][s]+' flash" id="pl'+s+'#'+s1+'"></div>';
if(Plusup.state[s1][s]<0) return '<div class="up'+r+(0-Plusup.state[s1][s])+'" id="pl'+s+'#'+s1+'"></div>';

return ' ';}


function radar12(mRospis,mEvent,t,s1,s2){
return '<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">'+s1+'</div><div style="float:left;margin-top:13px;font-size:12px;color:#fff;width:82px;text-align:right;">'+s2+'</div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1+'</div></div></div>';}


function radar1x2short(mRospis,mEvent,t,s1){
return '<div style="float:left;margin-top:13px;font-size:12px;color:#fff;width:47px;text-align:right;">'+s1+'</div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[2])+"<br />#"+mRospis.ID_LINE+"<br />#"+2)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[2])+"<br />#"+mRospis.ID_LINE+"<br />#"+2+'</div></div>';	
}

function radar12short(mRospis,mEvent,t,s1){
return '<div style="float:left;margin-top:13px;font-size:12px;color:#fff;width:82px;text-align:right;">'+s1+'</div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1+'</div></div></div>';
}



function radar1x2(mRospis,mEvent,t,s1,s2){
return	'<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">'+s1+'</div><div style="float:left;margin-top:13px;font-size:12px;color:#fff;width:47px;text-align:right;">'+s2+'</div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[2])+"<br />#"+mRospis.ID_LINE+"<br />#"+2)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[2])+"<br />#"+mRospis.ID_LINE+"<br />#"+2+'</div></div>';}

function radartotalshort(mRospis,mEvent,t,s1){return '<div style="float:left;margin-top:13px;font-size:12px;color:#fff;width:47px;text-align:right;">'+s1+'</div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[1])+"<br />#"+mRospis.ID_LINE+"<br />#"+1+'</div></div><div class="blackt"><div class="blacko" style="color:#fff;">'+totkoef(mRospis.KOEF)+'</div></div><div class="blackp"'+inredr(t,mEvent.State,Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0)+' onclick="lineclick(this,'+mEvent.Live+',1);"><div class="blacko">'+Vkoef3(mRospis.V[0])+"<br />#"+mRospis.ID_LINE+"<br />#"+0+'</div></div>';}

function radartotal(mRospis,mEvent,t,s1,s2){return '<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+radartotalshort(mRospis,mEvent,t,s2);}


function radarkoefhand(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==254&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч');
if(mRospis[i].ID_TIP_RADAR==22&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'1-й тайм');
if((mRospis[i].ID_TIP_RADAR==64)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ЗАБЬЕТ',mRospis[i].KOEF+" очко"); 
if((mRospis[i].ID_TIP_RADAR==66)&&rapidinner[3].length==0) rapidinner[3]=radar12(mRospis[i],mEvent,t,'КТО ПЕРВЫЙ',mRospis[i].KOEF+" очков"); 
if((mRospis[i].ID_TIP_RADAR==252)&&rapidinner[4].length==0) rapidinner[4]=radartotal(mRospis[i],mEvent,t,"","матч");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[1];
rapidinner[5]="";
var ct=0;
for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(ct==5&&i==4) continue; if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframek").innerHTML=rapidinner[5];
}


function radarkoefpl(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==254&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч');
if(mRospis[i].ID_TIP_RADAR==22&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'1-й тайм');
if((mRospis[i].ID_TIP_RADAR==64)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ЗАБЬЕТ',mRospis[i].KOEF+" очко"); 
if((mRospis[i].ID_TIP_RADAR==66)&&rapidinner[3].length==0) rapidinner[3]=radar12(mRospis[i],mEvent,t,'КТО ПЕРВЫЙ',mRospis[i].KOEF+" очков"); 
if((mRospis[i].ID_TIP_RADAR==252)&&rapidinner[4].length==0) rapidinner[4]=radartotal(mRospis[i],mEvent,t,"","матч");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[1];
rapidinner[5]="";
var ct=0;
for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(ct==5&&i==4) continue; if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframek").innerHTML=rapidinner[5];
}




function radarkoefhockey(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==106&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','вкл ОТ+Б');
if(mRospis[i].ID_TIP_RADAR==254&&rapidinner[1].length==0) rapidinner[1]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч');
if(mRospis[i].ID_TIP_RADAR==6&&rapidinner[1].length==0) rapidinner[1]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','ОТ');
if(mRospis[i].ID_TIP_RADAR==13&&rapidinner[2].length==0) rapidinner[2]=radar1x2(mRospis[i],mEvent,t,'СЛЕДУЮЩИЙ ГОЛ (1X2)','&nbsp;');
if((mRospis[i].ID_TIP_RADAR==252||mRospis[i].ID_TIP_RADAR==33)&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==43||mRospis[i].ID_TIP_RADAR==47||mRospis[i].ID_TIP_RADAR==50)&&rapidinner[4].length==0)
rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,(1+Math.floor((mRospis[i].ID_TIP_RADAR-43)/3))+' пер');
}
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
var ct=0;
for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(ct==5&&i==4) continue; if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframek").innerHTML=rapidinner[5];
}

function radarkoefpln(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==10&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if((mRospis[i].ID_TIP_RADAR==42)&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'1 тайм');
if(mRospis[i].ID_TIP_RADAR==82&&rapidinner[2].length==0) rapidinner[2]=radar1x2short(mRospis[i],mEvent,t,'2 тайм');
if((mRospis[i].ID_TIP_RADAR==60||mRospis[i].ID_TIP_RADAR==5||mRospis[i].ID_TIP_RADAR==52||mRospis[i].ID_TIP_RADAR==203)&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==207||mRospis[i].ID_TIP_RADAR==54)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,"1 тайм");

}

if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[1];
if(rapidinner[0].length==0&&rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[2];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
//var ct=0;
//for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}



function radarkoefhandn(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==10&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if((mRospis[i].ID_TIP_RADAR==42)&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'1 тайм');
if(mRospis[i].ID_TIP_RADAR==82&&rapidinner[2].length==0) rapidinner[2]=radar1x2short(mRospis[i],mEvent,t,'2 тайм');
if((mRospis[i].ID_TIP_RADAR==60||mRospis[i].ID_TIP_RADAR==5||mRospis[i].ID_TIP_RADAR==52||mRospis[i].ID_TIP_RADAR==203)&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==207||mRospis[i].ID_TIP_RADAR==54)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,"1 тайм");

}

if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[1];
if(rapidinner[0].length==0&&rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[2];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
//var ct=0;
//for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}

function radarkoefhockeyn(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==165&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','вкл ОТ+Б');
if(mRospis[i].ID_TIP_RADAR==10&&rapidinner[1].length==0) rapidinner[1]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if(mRospis[i].ID_TIP_RADAR==14&&rapidinner[2].length==0) rapidinner[2]=radar1x2short(mRospis[i],mEvent,t,'1 пер');
if(mRospis[i].ID_TIP_RADAR==5&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if(mRospis[i].ID_TIP_RADAR==16&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,"1 пер");
}
if(rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[2];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
var ct=0;
for(i=0;i<5;i++) if(rapidinner[i].length>0) ct++;
for(i=0;i<5;i++){if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; }
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}




function radarkoefn(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==192&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','вкл ОТ+П');
if((mRospis[i].ID_TIP_RADAR==201||mRospis[i].ID_TIP_RADAR==415||mRospis[i].ID_TIP_RADAR==10)&&rapidinner[1].length==0) rapidinner[1]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if((mRospis[i].ID_TIP_RADAR==205||mRospis[i].ID_TIP_RADAR==42||mRospis[i].ID_TIP_RADAR==403)&&rapidinner[2].length==0) rapidinner[2]=radar1x2short(mRospis[i],mEvent,t,'1 тайм');
if((mRospis[i].ID_TIP_RADAR==82||mRospis[i].ID_TIP_RADAR==379)&&rapidinner[3].length==0) rapidinner[3]=radar1x2short(mRospis[i],mEvent,t,'2 тайм');
if((mRospis[i].ID_TIP_RADAR==203||mRospis[i].ID_TIP_RADAR==418||mRospis[i].ID_TIP_RADAR==5)&&rapidinner[4].length==0)rapidinner[4]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==207||mRospis[i].ID_TIP_RADAR==106||mRospis[i].ID_TIP_RADAR==405)&&rapidinner[6].length==0) rapidinner[6]=radartotalshort(mRospis[i],mEvent,t,"1 тайм");
}
if(rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[2];
if(rapidinner[1].length==0&&rapidinner[2].length==0&&rapidinner[3].length>0)
rapidinner[3]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[3];
if(rapidinner[4].length==0&&rapidinner[6].length>0)
rapidinner[6]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[6];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(rapidinner[0].length==0) rapidinner[5]=rapidinner[5]+rapidinner[6];
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}



function radarkoefbadn(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==20&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (12)','матч');
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (12)</div>'+rapidinner[2];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}


function radarkoefvoln(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==20&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (12)','матч');
if(mRospis[i].ID_TIP_RADAR==9&&rapidinner[1].length==0) rapidinner[1]=radar12short(mRospis[i],mEvent,t,'1-й сет');
if(mRospis[i].ID_TIP_RADAR==39&&rapidinner[2].length==0) rapidinner[2]=radar12short(mRospis[i],mEvent,t,'2-й сет');
if(mRospis[i].ID_TIP_RADAR==157&&rapidinner[3].length==0) rapidinner[3]=radar12short(mRospis[i],mEvent,t,'3-й сет');
if(mRospis[i].ID_TIP_RADAR==28&&rapidinner[4].length==0) rapidinner[4]=radartotal(mRospis[i],mEvent,t,"","матч");}

if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (12)</div>'+rapidinner[1];
if(rapidinner[0].length==0&&rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (12)</div>'+rapidinner[2];
if(rapidinner[0].length==0&&rapidinner[1].length==0&&rapidinner[2].length==0&&rapidinner[3].length>0)
rapidinner[3]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (12)</div>'+rapidinner[3];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}



function radarkoefbn(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==20&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (12)','матч+ОТ');
if(mRospis[i].ID_TIP_RADAR==32&&rapidinner[1].length==0) rapidinner[1]=radar12short(mRospis[i],mEvent,t,'1 пол');
if(mRospis[i].ID_TIP_RADAR==10||mRospis[i].ID_TIP_RADAR==34&&rapidinner[2].length==0) rapidinner[2]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if(mRospis[i].ID_TIP_RADAR==203||mRospis[i].ID_TIP_RADAR==60&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==54||mRospis[i].ID_TIP_RADAR==207)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,"1 пол");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (12)</div>'+rapidinner[1];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}



function radarkoefb(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==37&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','матч+ОТ');
if(mRospis[i].ID_TIP_RADAR==254&&rapidinner[1].length==0) rapidinner[1]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if(mRospis[i].ID_TIP_RADAR==39&&rapidinner[2].length==0) rapidinner[2]=radartotal(mRospis[i],mEvent,t,"","вкл ОТ");
if((mRospis[i].ID_TIP_RADAR==21)&&rapidinner[3].length==0)rapidinner[3]=radartotalshort(mRospis[i],mEvent,t,"1 пол");
if((mRospis[i].ID_TIP_RADAR==43||mRospis[i].ID_TIP_RADAR==47||mRospis[i].ID_TIP_RADAR==50||mRospis[i].ID_TIP_RADAR==53)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,(1+Math.floor((mRospis[i].ID_TIP_RADAR-43)/3))+' чет');
}
if(rapidinner[2].length==0&&rapidinner[3].length>0)
rapidinner[3]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[3];
if(rapidinner[2].length==0&&rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframeklarg").innerHTML=rapidinner[5];
}




function radarkoefbad(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if((mRospis[i].ID_TIP_RADAR==102||mRospis[i].ID_TIP_RADAR==11)&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','матч');
if((mRospis[i].ID_TIP_RADAR==11)&&rapidinner[1].length==1) rapidinner[1]=radar12short(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)', mRospis[i].KOEF+' сет');
if((mRospis[i].ID_TIP_RADAR==77||mRospis[i].ID_TIP_RADAR==78)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ЗАБЬЕТ',mRospis[i].KOEF+" очко ("+(mRospis[i].ID_TIP_RADAR-76)+"сет)"); 
if((mRospis[i].ID_TIP_RADAR==71||mRospis[i].ID_TIP_RADAR==72)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ПЕРВЫЙ',mRospis[i].KOEF+" очков ("+(mRospis[i].ID_TIP_RADAR-70)+"с)"); 
if(mRospis[i].ID_TIP_RADAR==252&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==43||mRospis[i].ID_TIP_RADAR==47||mRospis[i].ID_TIP_RADAR==50)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,(1+Math.floor((mRospis[i].ID_TIP_RADAR-43)/3))+' сет');
}

if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:42px;">ИСХОД (ПОБЕДИТЕЛЬ)</div>'+rapidinner[1];

if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframeklarg").innerHTML=rapidinner[5];
}


function radarkoefvol(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
var koef=0;
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]=rapidinner[6]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){

if((mRospis[i].ID_TIP_RADAR==102)&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','матч');
if((mRospis[i].ID_TIP_RADAR==103)&&(rapidinner[1].length==0||parseInt(mRospis[i].KOEF)<koef)){rapidinner[1]=radar12short(mRospis[i],mEvent,t,mRospis[i].KOEF+" сет");koef=parseInt(mRospis[i].KOEF);}

if((mRospis[i].ID_TIP_RADAR>76&&mRospis[i].ID_TIP_RADAR<82)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ЗАБЬЕТ',mRospis[i].KOEF+" очко ("+(mRospis[i].ID_TIP_RADAR-76)+"сет)"); 
if((mRospis[i].ID_TIP_RADAR>70&&mRospis[i].ID_TIP_RADAR<76)&&rapidinner[2].length==0) rapidinner[2]=radar12(mRospis[i],mEvent,t,'КТО ПЕРВЫЙ',mRospis[i].KOEF+" очков ("+(mRospis[i].ID_TIP_RADAR-70)+"с)"); 

if(mRospis[i].ID_TIP_RADAR==252&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==43||mRospis[i].ID_TIP_RADAR==47||mRospis[i].ID_TIP_RADAR==50||mRospis[i].ID_TIP_RADAR==53)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,(1+Math.floor((mRospis[i].ID_TIP_RADAR-43)/3))+' сет');
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:42px;">ИСХОД (ПОБЕДИТЕЛЬ)</div>'+rapidinner[1];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[3]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[3];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframeklarg").innerHTML=rapidinner[5];
}






function radarkoef(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if(mRospis[i].ID_TIP_RADAR==254&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','матч'); 
if(mRospis[i].ID_TIP_RADAR==6&&rapidinner[0].length==0) rapidinner[0]=radar1x2(mRospis[i],mEvent,t,'ИСХОД (1X2)','ОТ');
if(mRospis[i].ID_TIP_RADAR==22&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'1 тайм');
if(mRospis[i].ID_TIP_RADAR==115&&rapidinner[1].length==0) rapidinner[1]=radar1x2short(mRospis[i],mEvent,t,'ОТ 1т.');
if(mRospis[i].ID_TIP_RADAR==13&&rapidinner[2].length==0) rapidinner[2]=radar1x2(mRospis[i],mEvent,t,'СЛЕДУЮЩИЙ ГОЛ (1X2)','&nbsp;'); 
if(mRospis[i].ID_TIP_RADAR==14&&rapidinner[2].length==0) rapidinner[2]=radar1x2(mRospis[i],mEvent,t,'СЛЕДУЮЩИЙ ГОЛ (ОТ)','&nbsp;'); 
if(mRospis[i].ID_TIP_RADAR==15&&rapidinner[2].length==0)rapidinner[2]=radar1x2(mRospis[i],mEvent,t,'СЛЕДУЮЩИЙ ГОЛ (ПЕН)','&nbsp;'); 
if((mRospis[i].ID_TIP_RADAR==252||mRospis[i].ID_TIP_RADAR==33||mRospis[i].ID_TIP_RADAR==7)&&rapidinner[3].length==0)
rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","матч");
if((mRospis[i].ID_TIP_RADAR==21||mRospis[i].ID_TIP_RADAR==35)&&rapidinner[4].length==0) rapidinner[4]=radartotalshort(mRospis[i],mEvent,t,"1 тайм");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;">ИСХОД (1X2)</div>'+rapidinner[1];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:44px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframek").innerHTML=rapidinner[5];
}


function radarkoeflarg(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var koef=0;
function genius(n){
if(n<10) return ' ('+n+'сет)';
return "";
if(mEvent.Time_Event.indexOf("сет")>-1)
return  ' ('+mEvent.Time_Event+')';}
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if((mRospis[i].ID_TIP_RADAR==10||mRospis[i].ID_TIP_RADAR==6322)&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','матч');
if((mRospis[i].ID_TIP_RADAR==11||mRospis[i].ID_TIP_RADAR==10997)&&(rapidinner[1].length==0||parseInt(mRospis[i].KOEF)<koef)){rapidinner[1]=radar12short(mRospis[i],mEvent,t,mRospis[i].KOEF+" сет");koef=parseInt(mRospis[i].KOEF);}
if(((mRospis[i].ID_TIP_RADAR<94&&mRospis[i].ID_TIP_RADAR>88)||mRospis[i].ID_TIP_RADAR==10979||mRospis[i].ID_TIP_RADAR==11047)&&rapidinner[2].length==0)
rapidinner[2]=radar12(mRospis[i],mEvent,t,'ВЫИГРАЕТ ГЕЙМ',mRospis[i].KOEF+' гейм'+genius(mRospis[i].ID_TIP_RADAR-88));
if((mRospis[i].ID_TIP_RADAR==83||mRospis[i].ID_TIP_RADAR==6481)&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","геймов<br/>в матче");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:42px;">ИСХОД (ПОБЕДИТЕЛЬ)</div>'+rapidinner[1];
if(rapidinner[3].length==0&&rapidinner[4].length>0)
rapidinner[4]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:46px;"><div style="float:left;margin-left:8px;width:63px;">м</div><div style="float:left;width:79px;">ТОТАЛ</div><div style="float:left;width:63px;">б</div></div>'+rapidinner[4];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframeklarg").innerHTML=rapidinner[5];
}







function radarkoeften(mRos,mEvent,t){
if(!mEventradar) return;
var rapidinner=new Array();
rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
var i=0;
var koef=0;
var mRospis=new Array();for(i=0;i<mEvent.mlines.length;i++) mRospis.push(mLines[LineId[mEvent.mlines[i]]]);for(i=0;i<mRos.length;i++) mRospis.push(mRos[i]);
for(i=0;i<mRospis.length;i++){
if((mRospis[i].ID_TIP_RADAR==20)&&rapidinner[0].length==0) rapidinner[0]=radar12(mRospis[i],mEvent,t,'ИСХОД (ПОБЕДИТЕЛЬ)','матч');
if((mRospis[i].ID_TIP_RADAR==9)&&(rapidinner[1].length==0))rapidinner[1]=radar12short(mRospis[i],mEvent,t,'1 сет');
if((mRospis[i].ID_TIP_RADAR==39)&&(rapidinner[2].length==0)) rapidinner[2]=radar12short(mRospis[i],mEvent,t,'2 сет');
if((mRospis[i].ID_TIP_RADAR==203||mRospis[i].ID_TIP_RADAR==28)&&rapidinner[3].length==0) rapidinner[3]=radartotal(mRospis[i],mEvent,t,"","геймов<br/>в матче");
}
if(rapidinner[0].length==0&&rapidinner[1].length>0)
rapidinner[1]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:42px;">ИСХОД (ПОБЕДИТЕЛЬ)</div>'+rapidinner[1];
if(rapidinner[0].length==0&&rapidinner[1].length==0&&rapidinner[2].length>0)
rapidinner[2]='<div style="float:left;margin-top:17px;color:#fff;font-size:14px;width:229px;text-align:center;margin-left:42px;">ИСХОД (ПОБЕДИТЕЛЬ)</div>'+rapidinner[2];
rapidinner[5]=""
for(i=0;i<5;i++) if(rapidinner[i].length>0) rapidinner[5]=rapidinner[5]+rapidinner[i]; 
if(mEvent.State==2) rapidinner[5]=rapidinner[5].split("lineclick").join("nolineclick");
id_("radarframekhok").innerHTML=rapidinner[5];
}










var novarray=new Array(12,0,1,3,16,13,2,4,17,22,14,5,18,23,26,15);

//var drawnovstate=0;

function drawnov(mRospis,mEvent,k){ 
//console.log("drawnov");
//console.log("k="+k);
//console.log("drawnovstate="+drawnovstate);

var i=0;
var j=0;
var l=0;
var temp4="";
var temp5="";
var n=new Array();

if(k!=1){
for(i=0;i<mExpress.length;i++){
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==26&&mExpress[i].Index!=16)
{cs_("kord5")[0].value=mExpress[i].summo;}
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==254)
{cs_("kord5")[1].value=mExpress[i].summo;}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==2)
{for(j=0;j<novarray.length;j++) if(novarray[j]==mExpress[i].Index) break;
if(j<novarray.length){ cs_("kord5")[2].value=mExpress[i].summo;}}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==10)
{cs_("kord5")[3].value=mExpress[i].summo;}
}
}



for(i=0;i<mRospis.length;i++) if((mRospis[i].ID_TIP_RADAR==26&&mEvent.Live==1)||(mRospis[i].ID_TIP_RADAR==2&&mEvent.Live==0)){
if(mRospis[i].ID_TIP_RADAR==2) n=novarray;
else n=new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
for(j=0;j<4;j++)
for(l=0;l<4;l++){
if(j>3||l>3) continue;	
//if(mRospis[i].ID_TIP_RADAR==2&&(i==
temp4=temp4+'<div style="width:143px;float:left;"><div class="nov2">'+mTip_Line[tipLineId[mEvent.Live][mRospis[i].ID_TIP_RADAR]].R[n[4*l+j]]+'</div>';
temp4=temp4+'<div class="nov3">'+Vkoef3(mRospis[i].V[n[4*l+j]])+'</div>';
if(mEvent.State!=2){
if(mRospis[i].V[n[4*l+j]]/100>1) 
temp4=temp4+'<div class="nov"'+inrednov(Vkoef3(mRospis[i].V[n[4*l+j]])+"<br />#"+mRospis[i].ID_LINE+"<br />#"+n[4*l+j],k)+' onclick="LastSumm=cs_(&quot;kord5&quot;)['+2*(1-mEvent.Live)+'].value;lineclick1(&quot;'+Vkoef3(mRospis[i].V[n[4*l+j]])+'<br />#'+mRospis[i].ID_LINE+'<br />#'+n[4*l+j]+'&quot;,0);">'+Math.round(parseFloatExt(cs_('kord5')[0+2*(1-mEvent.Live)].value)*mRospis[i].V[n[4*l+j]])/100+
'&nbsp;<span style="font-size:18px;">'+mClient.Val3[mClient.valuta-1]+'</span>';else temp4=temp4+'<div class="novn">'
temp4=temp4+'</div></div>';} else
{if(mRospis[i].V[n[4*l+j]]/100>1) 
temp4=temp4+'<div class="novs">'+Math.round(parseFloatExt(cs_('kord5')[2*(1-mEvent.Live)].value)*mRospis[i].V[n[4*l+j]])/100+
'&nbsp;<span style="font-size:18px;">'+mClient.Val3[mClient.valuta-1]+'</span>';else temp4=temp4+'<div class="novs">'
temp4=temp4+'</div></div>';}
}
if(temp4.length>0) temp4='<div style="float:left;width:572px;margin-top:10px;margin-left:75px;">'+temp4+'</div>';
}



for(i=0;i<mRospis.length;i++) if((mRospis[i].ID_TIP_RADAR==254&&mEvent.Live==1)||(mRospis[i].ID_TIP_RADAR==10&&mEvent.Live==0)){
for(j=0;j<mRospis[i].KOL;j++){
temp5=temp5+'<div style="width:143px;float:left;">';
temp5=temp5+'<div class="nov3" style="width:100%;">'+Vkoef3(mRospis[i].V[j])+'</div>';
if(mEvent.State!=2){
if(mRospis[i].V[j]/100>1) 
temp5=temp5+'<div class="nov"'+inrednov(Vkoef3(mRospis[i].V[j])+"<br />#"+mRospis[i].ID_LINE+"<br />#"+j,k)+' onclick="LastSumm=cs_(&quot;kord5&quot;)['+(1+2*(1-mEvent.Live))+'].value;lineclick1(&quot;'+Vkoef3(mRospis[i].V[j])+'<br />#'+mRospis[i].ID_LINE+'<br />#'+j+'&quot;,0);" >'+Math.round(parseFloatExt(cs_('kord5')[1+2*(1-mEvent.Live)].value)*mRospis[i].V[j])/100+
'&nbsp;<span style="font-size:18px;">'+mClient.Val3[mClient.valuta-1]+'</span>';else temp5=temp5+'<div class="novn">'
temp5=temp5+'</div></div>';} else
{if(mRospis[i].V[j]/100>1) 
temp5=temp5+'<div class="novs">'+Math.round(parseFloatExt(cs_('kord5')[1+2*(1-mEvent.Live)].value)*mRospis[i].V[j])/100+
'&nbsp;<span style="font-size:18px;">'+mClient.Val3[mClient.valuta-1]+'</span>';else temp5=temp5+'<div class="novs">';
temp5=temp5+'</div></div>';}
}
if(temp5.length>0) temp5='<div style="float:left;width:429px;margin-top:10px;margin-left:147px;">'+temp5+'</div>';
}


if(mEvent.Live==1){
Plus.childNodes[3].childNodes[2].childNodes[1].innerHTML=temp4;
if(temp4.length>0) {Plus.childNodes[3].childNodes[2].childNodes[0].style.display=Plus.childNodes[3].childNodes[2].childNodes[2].style.display="";}
else {Plus.childNodes[3].childNodes[2].childNodes[0].style.display=Plus.childNodes[3].childNodes[2].childNodes[2].style.display="none";}
Plus.childNodes[3].childNodes[2].childNodes[4].innerHTML=temp5;
if(temp5.length>0) {Plus.childNodes[3].childNodes[2].childNodes[3].style.display=Plus.childNodes[3].childNodes[2].childNodes[5].style.display="";}
else {Plus.childNodes[3].childNodes[2].childNodes[3].style.display=Plus.childNodes[3].childNodes[2].childNodes[5].style.display="none";}

Plus.childNodes[3].childNodes[1].innerHTML="";
Plus.childNodes[3].childNodes[2].style.display="";
id_("unov1").innerHTML=mEvent.UCHASTNIK1.toUpperCase()+" - "+mEvent.UCHASTNIK2.toUpperCase();
id_("unov2").innerHTML=mEvent.UCHASTNIK1.toUpperCase()+" - НИЧЬЯ - "+mEvent.UCHASTNIK2.toUpperCase();

} else
{
Rospis.childNodes[4].childNodes[2].childNodes[1].innerHTML=temp4;
if(temp4.length>0) {Rospis.childNodes[4].childNodes[2].childNodes[0].style.display=Rospis.childNodes[4].childNodes[2].childNodes[2].style.display="";}
else {Rospis.childNodes[4].childNodes[2].childNodes[0].style.display=Rospis.childNodes[4].childNodes[2].childNodes[2].style.display="none";}
Rospis.childNodes[4].childNodes[2].childNodes[4].innerHTML=temp5;
if(temp5.length>0) {Rospis.childNodes[4].childNodes[2].childNodes[3].style.display=Rospis.childNodes[4].childNodes[2].childNodes[5].style.display="";}
else {Rospis.childNodes[4].childNodes[2].childNodes[3].style.display=Rospis.childNodes[4].childNodes[2].childNodes[5].style.display="none";}
id_("unov3").innerHTML=mEvent.UCHASTNIK1.toUpperCase()+" - "+mEvent.UCHASTNIK2.toUpperCase();
id_("unov4").innerHTML=mEvent.UCHASTNIK1.toUpperCase()+" - НИЧЬЯ - "+mEvent.UCHASTNIK2.toUpperCase();

Rospis.childNodes[4].childNodes[1].innerHTML="";
Rospis.childNodes[4].childNodes[2].style.display="";	
	
}



}


function pluslive(id,logstate){

var lk=new Array();
var lk1=new Array();
var i=0;
var i=0;
var j=0;
var m=0;
var s=0;
var l=0;
var k=0;
var kk=0;
var t=0;
var ss=0;
var temp4="";
var temp5="";
var id_line="";
var temp=new Array();
var mEvent=mEvents[EventId[id]];
if(!mEvent) return;

//alert(hls);
if(mEvent.string.length==0) DrawEvent(mEvent);
if(mEvent.Live==0) EventRospisi=id;
else {LastFrontLive=id;Render.style.display="none";
drawscaut2(mEvent);}



var ck=0;
var cсk=0;
var u=0;
var r1l=0;
var l222=new Array(0,0,203,121,74,0,30);
var l333=new Array(0,0,259,167,121,0,74);
var short=new Array("short","");
var margin=new Array(1,8);
var J=0;
var I=0;
var Rosstate=null;
var beisarray=new Array();
var basis=new Array();
var t1=new Array();
var temp3=new Array();
var h=0;
var q=0;
var b=0;
var xx=0;
var zz=0;

var cellstring=new Array();
var linestring=new Array();
var linestring1=new Array();
var band1string="";
var band2string="";
var row1string="";
var row2string="";
var row1string1="";
var row2string1="";



var grup=new Array();
for(i=0;i<grupp.length;i++) grup[i]=0;

var grup1=0;
var grup2=0;
var grup3=0;
var cook1=mEvent.Live;
var cook2=mEvent.ID_SPORT;
var cook3=new Array();


if(grandstate==0){
try{
var ur=getCookie("GrandCookie");
temp=ur.replace("%","").split("%");
for(i=0;i<temp.length;i++){
temp[i]=temp[i].replace("*","").split("*");
for(j=0;j<temp[i].length;j++){
if(temp[i][j])temp[i][j]=temp[i][j].split(",");
}}

if((temp.length==2)&&(temp[0].length==120)) GrandCookie=temp;
else{deleteCookie("GrandCookie", "/", "");	for(i=0;i<2;i++){GrandCookie[i]=new Array();for(j=0;j<120;j++) GrandCookie[i][j]=new Array();};}
}
catch(e)
{deleteCookie("GrandCookie", "/", "");	for(i=0;i<2;i++){GrandCookie[i]=new Array();for(j=0;j<120;j++) GrandCookie[i][j]=new Array();};}
grandstate=1;
}


id_("NOVSEND4").onclick=id_("NOVSEND3").onclick=id_("NOVSEND2").onclick=id_("NOVSEND").onclick=null;
//function(){showWarning("Вы не выбрали ни один коэффициент","OK","",0,null);}

if(Plusup.ID_EVENT!=id){Plusup.ID_EVENT=id;
pluslargestate=0;
id_("ulogo2").childNodes[0].src=id_("ulogo1").childNodes[0].src="";
id_("ulogo2larg").childNodes[0].src=id_("ulogo1larg").childNodes[0].src="";
id_("ulogo2hok").childNodes[0].src=id_("ulogo1hok").childNodes[0].src="";



if((mEvent.Live==1&&mEvent.ID_SPORT==1)||((mEvent.ID_SPORT==4||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60)&&mEvent.clock_stopped>0)||(mEvent.ID_SPORT==5&&mEvent.clock_stopped>0)||(mEvent.ID_SPORT==1&&mEvent.clock_stopped>0)||((mEvent.ID_SPORT==2||mEvent.ID_SPORT==23||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20)&&mEvent.clock_stopped>0)){
if(mEvent.ID_SPORT!=5){
sendindex=0;
sendarray.splice(0);
writeInt(mEvent.ID_EVENT);
sendarray[sendindex]=0;
webSocket.send("givesuperid");
webSocket.send(EncodeBase64_2(sendarray));
}

id_("ulogo1").style.display=id_("ulogo2").style.display="none";	
id_("ulogo1larg").style.display=id_("ulogo2larg").style.display="none";	
id_("ulogo1hok").style.display=id_("ulogo2hok").style.display="none";	


//LastFrontLive=mEvent.ID_EVENT;
if((mEvent.ID_SPORT==4||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60)&&mEvent.Live==1) lmtclick2(1);
else if(mEvent.ID_SPORT==1&&mEvent.Live==1){if(mEvent.clock_stopped==0) lmtclick2(0); else  lmtclick2(1);}
else {id_("radarframe").innerHTML="";id_("radarframep").style.display="none";} 


if((mEvent.ID_SPORT==4||mEvent.ID_SPORT==5||mEvent.ID_SPORT==1||mEvent.ID_SPORT==2||mEvent.ID_SPORT==23||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60)&&mEvent.Live==0){
id_("radarframehok").innerHTML=imglogin[mEvent.ID_SPORT+""+(loginstate+1)];id_("radarframephok").style.display="";nhltime(); nhltimer=setInterval(nhltime,1000);}
}
else{ id_("radarframehok").innerHTML="";id_("radarframephok").style.display="none";}


//mEvent.Time_Event="Прерв."


if((mEvent.ID_SPORT==5&&mEvent.Live==1&&(mEvent.ID_RADAR!=0||mEvent.clock_stopped>0))||((mEvent.ID_SPORT==2||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23)&&mEvent.Live==1&&mEvent.clock_stopped>0)){
Pluslarge.childNodes[0].style.display="";
Pluslarge.childNodes[1].style.display="none";
id_("ulogo1larg").style.display=id_("ulogo2larg").style.display="none";	
lmtclick(1);}else{ id_("radarframeplarg").style.display="none";id_("radarframelarg").innerHTML="";
Pluslarge.childNodes[1].style.display="";
Pluslarge.childNodes[0].style.display="none";	
}










for(i=0;i<Pluslargemenu.length;i++)
if(i==0) Pluslargemenu[i].setAttribute("class", "rosmenu2");
else Pluslargemenu[i].setAttribute("class", "rosmenu");

plusstate=0;
for(i=0;i<Plusmenu.length;i++)
if(i==0) Plusmenu[i].setAttribute("class", "rosmenu2");
else if(i==Plusmenu.length-1) Plusmenu[i].setAttribute("class", "rosmenu4");
else Plusmenu[i].setAttribute("class", "rosmenu");

rosstate=0;
for(i=0;i<Rosmenu.length;i++)
if(i==0) Rosmenu[i].setAttribute("class", "rosmenu2");
else if(i==Rosmenu.length-1) Rosmenu[i].setAttribute("class", "rosmenu4");
else Rosmenu[i].setAttribute("class", "rosmenu");


plusinterval.splice(0);
Plusup.state.splice(0);
Plusup.line.splice(0);
}



if((mEvent.ID_SPORT==4||mEvent.ID_SPORT==5||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60||mEvent.ID_SPORT==1||mEvent.ID_SPORT==2)&&mEvent.Live==0&&mEvent.clock_stopped>0&&(id_("radarframehok").innerHTML==''||logstate==1)){
id_("radarframehok").innerHTML=imglogin[mEvent.ID_SPORT+""+(loginstate+1)];
id_("radarframephok").style.display="";
nhltime(); if(nhltimer==null) nhltimer=setInterval(nhltime,1000);
}


if(mEvent.ID_SPORT==1&&mEvent.Live==1&&(id_("radarframe").innerHTML==''||(logstate==1&&mEvent.clock_stopped>0))){
if(mEvent.clock_stopped==0) lmtstate2=0; else lmtstate2=1; lmtclick2(lmtstate2);
}
if((mEvent.ID_SPORT==4||mEvent.ID_SPORT==60||mEvent.ID_SPORT==6)&&mEvent.Live==1&&mEvent.clock_stopped>0&&(id_("radarframe").innerHTML==''||logstate==1)) lmtclick2(1);

if(((mEvent.ID_SPORT==5&&mEvent.Live==1&&(mEvent.ID_RADAR!=0||mEvent.clock_stopped>0))||((mEvent.ID_SPORT==2||mEvent.ID_SPORT==23||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20)&&mEvent.Live==1&&mEvent.clock_stopped>0))&&(id_("radarframelarg").innerHTML==""||logstate==1||(mEvent.ID_SPORT==5&&mEvent.Time_Event!="Прерв."&&id_("radarframelarg").innerHTML==imglogin[0]&&loginstate==1)||(mEvent.ID_SPORT==5&&mEvent.Time_Event=="Прерв."&&id_("radarframelarg").innerHTML!=imglogin[0]&&loginstate==1))){
Pluslarge.childNodes[0].style.display="";
Pluslarge.childNodes[1].style.display="none";
lmtclick(1);
}





if(mEvent.Live==1){
id_("vfl").innerHTML="";	
if((mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==31)||(mEvent.ID_SPORT==20)||(mEvent.ID_SPORT==34)||(mEvent.ID_SPORT==19)||(mEvent.ID_SPORT==5)||(mEvent.ID_SPORT==2)||(mEvent.ID_SPORT==3)||(mEvent.ID_SPORT==16)){
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[0].style.width="240px";Plus.childNodes[2].childNodes[1].childNodes[1].style.width="142px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[0].style.width="142px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[1].style.width="142px";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.marginLeft="250px";Plus.childNodes[2].childNodes[1].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].style.width="299px";	
Pluslarge.style.display="";
Plus.style.display="none";
Rosstate=pluslargestate;	
if(mEvent.fav==1)Pluslarge.childNodes[1].childNodes[0].style.background="url(/resources/images/star2.png) no-repeat" ;else Pluslarge.childNodes[1].childNodes[0].style.background="url(/resources/images/star1.png) no-repeat";
Pluslarge.childNodes[1].childNodes[2].innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;


if((mEvent.ID_SPORT==5&&(mEvent.ID_RADAR>0||mEvent.clock_stopped>0))||((mEvent.ID_SPORT==2||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23)&&mEvent.clock_stopped>0)){
if(mEvent.fav==1) id_("starscautlarg").style.background="url(/resources/images/star2.png) no-repeat" ;else id_("starscautlarg").style.background="url(/resources/images/star1.png) no-repeat";
id_("champscautlarg").innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;
}



Pluslarge.childNodes[2].childNodes[1].childNodes[1].innerHTML=mEvent.SCORE.replace(":","<br />");
if(mEvent.ID_SPORT==3) {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].src="/resources/images/beisballon.png?7";
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginLeft="0px";
}
else {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].src="/resources/images/tennbalon.png?7";
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginLeft="10px";
}
if(mEvent.ID_SPORT==3){
if(mEvent.PODACHA==1) {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginTop="-4px";
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="";}
if(mEvent.PODACHA==2) {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginTop="24px"
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="";}
if(mEvent.PODACHA==0) Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="none";
}
else{
if(mEvent.PODACHA==1) {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginTop="7px";
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="";}
if(mEvent.PODACHA==2) {Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.marginTop="34px"
Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="";}
if(mEvent.PODACHA==0) Pluslarge.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.display="none";
}

temp3=mEvent.SETSCORES.split(" - "); k=temp3.length; if(k==0){temp3[0]=":";temp3[1]=":";k=1}; 


if(mEvent.ID_SPORT!=3){ if(k>10) kk=k-10;}


if(mEvent.ID_SPORT==3){
if(k>9) kk=k-9;	
beisarray=mEvent.BEISBOL.split("@");
if(beisarray.length<2) {beisarray[0]=0;beisarray[1]=0;beisarray[2]=0;beisarray[3]="0,0,0";}


basis=beisarray[3].split(",");


Pluslarge.childNodes[2].childNodes[0].childNodes[0].childNodes[0].src="/resources/images/beisboll"+basis[0]+basis[1]+basis[2]+".png?7";


Pluslarge.childNodes[2].childNodes[0].childNodes[0].style.display="";
Pluslarge.childNodes[2].childNodes[4].style.display="";
q=parseInt(beisarray[0]);
for(b=0;b<q;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[0].childNodes[b+1].src="/resources/images/beisboll3.png?7";
for(b=q;b<4;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[0].childNodes[b+1].src="/resources/images/beisboll1.png?7";		
q=parseInt(beisarray[1]);
for(b=0;b<q;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[1].childNodes[b+1].src="/resources/images/beisboll2.png?7";
for(b=q;b<3;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[1].childNodes[b+1].src="/resources/images/beisboll1.png?7";		
q=parseInt(beisarray[2]);
for(b=0;b<q;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[2].childNodes[b+1].src="/resources/images/beisboll2.png?7";
for(b=q;b<3;b++) Pluslarge.childNodes[2].childNodes[4].childNodes[2].childNodes[b+1].src="/resources/images/beisboll1.png?7";		
}

else {Pluslarge.childNodes[2].childNodes[0].childNodes[0].style.display="none";
Pluslarge.childNodes[2].childNodes[4].style.display="none";
}

Pluslarge.childNodes[2].childNodes[0].childNodes[1].innerHTML=mEvent.UCHASTNIK1;
Pluslarge.childNodes[2].childNodes[0].childNodes[2].innerHTML=mEvent.UCHASTNIK2;


if((mEvent.ID_SPORT==5&&(mEvent.ID_RADAR!=0||mEvent.clock_stopped>0))||((mEvent.ID_SPORT==2||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23)&&mEvent.clock_stopped>0)){
id_("urad1larg").innerHTML=mEvent.UCHASTNIK1.toUpperCase();
id_("urad2larg").innerHTML=mEvent.UCHASTNIK2.toUpperCase();
id_("urad1larg").title=mEvent.UCHASTNIK1;
id_("urad2larg").title=mEvent.UCHASTNIK2;

if(mEvent.ID_SPORT==2||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23){id_("radarscore3larg").style.height="29px";id_("radarscore3larg").style.fontSize="28px";id_("radarscore3larg").style.marginTop="1px"; id_("radarscore4larg").innerHTML=mEvent.Time_Event;
id_("urad1larg").style.width="214px";
id_("radscorlarg").style.marginLeft="70px";
id_("urad2larg").style.width="228px";
id_("radarscore3larg").innerHTML=mEvent.SCORE;
} else {id_("radarscore3larg").style.height="36px";id_("radarscore3larg").style.fontSize="36px";id_("radarscore3larg").style.marginTop="2px";id_("radarscore4larg").innerHTML="";
id_("urad1larg").style.width="249px";
id_("urad2larg").style.width="263px";
id_("radscorlarg").style.marginLeft="35px";
id_("radarscore3larg").innerHTML=splitscore(mEvent.SETSCORES,mEvent.DURATION,mEvent.Time_Event,mEvent.BEISBOL);
}







//mEvent.Time_Event;
id_("radarstatslarg").href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;

}



for(j=0;j<k-kk;j++){if(temp3[j].split(":").length<2) temp3[j]=":"; 
Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.borderLeft="1px solid #434343";
Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.borderRight="0px solid #434343";
Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].innerHTML=temp3[j+kk].split(":")[0];
Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].innerHTML=temp3[j+kk].split(":")[1];




if(mEvent.ID_SPORT==3) Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.width="23px";else if(mEvent.ID_SPORT==19||mEvent.ID_SPORT==20) Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.width="30px"; else Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.width="62px";
if(Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].innerHTML==Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].innerHTML)
{Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].style.color="#F47621";Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].style.color="#F47621";}
if(parseInt(Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].innerHTML)<parseInt(Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].innerHTML))
{Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].style.color="#FFFFFF";Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].style.color="#F47621";}
if(parseInt(Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].innerHTML)>parseInt(Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].innerHTML))
{Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].style.color="#FFFFFF";Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].style.color="#F47621";}


if(mEvent.ID_SPORT==3) Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.width="24px"; else
if(mEvent.ID_SPORT==19||mEvent.ID_SPORT==20) Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.width="31px"; else Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.width="62px";

if((mEvent.ID_SPORT==22)||(mEvent.ID_SPORT==23)||(mEvent.ID_SPORT==34))Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1+kk)+"-я пар.";
if(mEvent.ID_SPORT==19)Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1+kk)+"ф";
if(mEvent.ID_SPORT==20)Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1+kk)+"cет";
if(mEvent.ID_SPORT==5||mEvent.ID_SPORT==31)Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1+kk)+"-й сет";
if(mEvent.ID_SPORT==2)Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1+kk)+"-я чет.";
if(mEvent.ID_SPORT==3) {Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML="&nbsp;"+(j+kk+1);Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.textAlign="center";}
else {Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.textAlign="left";
}
if(mEvent.ID_SPORT==16)Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML=(j+1)+"-й тайм";

Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.color="#FFFFFF";
if(j==k-1-kk) Pluslarge.childNodes[2].childNodes[2].childNodes[j].style.color="#F47621";
if(j==k-1-kk)Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.borderRight="1px solid #434343";
}


if(mEvent.ID_SPORT==3) {Pluslarge.childNodes[2].childNodes[2].style.marginLeft="-15px";Pluslarge.childNodes[2].childNodes[2].style.width="223px";
Pluslarge.childNodes[2].childNodes[3].style.width="233px";
Pluslarge.childNodes[2].childNodes[0].childNodes[1].style.width="238px";
Pluslarge.childNodes[2].childNodes[0].childNodes[2].style.width="238px";
Pluslarge.childNodes[2].childNodes[0].style.width="301px";
}

else if(mEvent.ID_SPORT==19||mEvent.ID_SPORT==20) Pluslarge.childNodes[2].childNodes[2].style.marginLeft="-10px";

else {Pluslarge.childNodes[2].childNodes[2].style.marginLeft="0px";Pluslarge.childNodes[2].childNodes[2].style.width="340px";
Pluslarge.childNodes[2].childNodes[3].style.marginLeft="-14px";
Pluslarge.childNodes[2].childNodes[3].style.width="330px";

Pluslarge.childNodes[2].childNodes[0].childNodes[1].style.width="320px";
Pluslarge.childNodes[2].childNodes[0].childNodes[2].style.width="320px";
Pluslarge.childNodes[2].childNodes[0].style.width="320px";

}


for(j=k-kk;j<10;j++){
Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[0].innerHTML="";	
Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.borderLeft="0px solid #434343";
Pluslarge.childNodes[2].childNodes[3].childNodes[j].style.borderRight="0px solid #434343";
Pluslarge.childNodes[2].childNodes[3].childNodes[j].childNodes[2].innerHTML="";
Pluslarge.childNodes[2].childNodes[2].childNodes[j].innerHTML="";

}

if(mEvent.ID_RADAR==0) {Pluslarge.childNodes[1].childNodes[3].childNodes[0].style.background="none" ;Pluslarge.childNodes[1].childNodes[3].href="";} else
{Pluslarge.childNodes[1].childNodes[3].childNodes[0].style.background="url(/resources/images/stats.png)" ;Pluslarge.childNodes[1].childNodes[3].href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;}
}

if((mEvent.ID_SPORT==1)||(mEvent.ID_SPORT==4)||(mEvent.ID_SPORT==6)||(mEvent.ID_SPORT==60)||(mEvent.ID_SPORT==29)||(mEvent.ID_SPORT==12)){
Pluslarge.style.display="none";
Plus.style.display="";
if(mEvent.ID_SPORT==1||((mEvent.ID_SPORT==4||mEvent.ID_SPORT==60||mEvent.ID_SPORT==6)&&mEvent.clock_stopped>0)) {id_("NOSCAUT").style.display="none";id_("SCAUT").style.display="";
if(mEvent.ID_SPORT==1) {id_("SCAUT").childNodes[1].style.display="";id_("radperiod").style.display="none"; }else {id_("SCAUT").childNodes[1].style.display="none";
id_("radperiod").style.display="";
var sets=mEvent.SETSCORES.split("-");
var sets2=mEvent.SETSCORES;
if(sets.length>0) {sets[sets.length-1]='<span style="color:#F47621">'+sets[sets.length-1]+'</span>';
sets2=sets.join("&nbsp;");
}
id_("radperiod2").innerHTML=sets2;

}
}
else {id_("NOSCAUT").style.display="";id_("SCAUT").style.display="none";}

Rosstate=plusstate;	
if(mEvent.fav==1)Plus.childNodes[2].childNodes[0].childNodes[0].style.background="url(/resources/images/star2.png) no-repeat" ;else Plus.childNodes[2].childNodes[0].childNodes[0].style.background="url(/resources/images/star1.png) no-repeat";
if(mEvent.ID_SPORT==1||((mEvent.ID_SPORT==4||mEvent.ID_SPORT==60||mEvent.ID_SPORT==6)&&mEvent.clock_stopped>0)){
if(mEvent.fav==1) id_("starscaut").style.background="url(/resources/images/star2.png) no-repeat" ;else id_("starscaut").style.background="url(/resources/images/star1.png) no-repeat";
id_("champscaut").innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;
}


Plus.childNodes[2].childNodes[0].childNodes[2].innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;


Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[1].innerHTML=mEvent.SCORE;
Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[0].childNodes[1].innerHTML=mEvent.SETSCORES;

if(mEvent.SETSCORES.length>16) {Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[0].style.width="220px";Plus.childNodes[2].childNodes[1].childNodes[1].style.width="182px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[0].style.width="182px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[1].style.width="182px";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.marginLeft="230px";Plus.childNodes[2].childNodes[1].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].style.width="279px";

} else {Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[0].style.width="240px";Plus.childNodes[2].childNodes[1].childNodes[1].style.width="142px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[0].style.width="142px";Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[1].style.width="142px";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.marginLeft="250px";Plus.childNodes[2].childNodes[1].childNodes[0].style.width=Plus.childNodes[2].childNodes[1].childNodes[2].style.width="299px";
}

Plus.childNodes[2].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML=mEvent.Time_Event+"&nbsp;&nbsp;&nbsp;";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[0].innerHTML=mEvent.UCHASTNIK1;
Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[0].innerHTML=mEvent.UCHASTNIK2;


if(mEvent.ID_SPORT==1||((mEvent.ID_SPORT==4||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60)&&mEvent.clock_stopped>0)){
id_("urad1").innerHTML=mEvent.UCHASTNIK1.toUpperCase();
id_("urad2").innerHTML=mEvent.UCHASTNIK2.toUpperCase();
id_("urad1").title=mEvent.UCHASTNIK1;
id_("urad2").title=mEvent.UCHASTNIK2;

id_("uscaut1").innerHTML=mEvent.UCHASTNIK1;
id_("uscaut2").innerHTML=mEvent.UCHASTNIK2;
id_("radarscore3").innerHTML=mEvent.SCORE;
id_("radarscore4").innerHTML=mEvent.Time_Event;
if(mEvent.ID_SPORT==1&&mEvent.DURATION!=0&&mEvent.DURATION!=45) {id_("radtime").title="тайм "+mEvent.DURATION +" минут";id_("radtime").innerHTML="&nbsp;"+mEvent.DURATION;id_("radtime").style.display="";}
else {id_("radtime").innerHTML="";id_("radtime").style.display="none";}


if(mEvent.ID_SPORT==1){
if(mEvent.Time_Event.indexOf("'")>-1){
if((ScautTime.indexOf("45")>-1||ScautTime.indexOf("90")>-1||ScautTime.indexOf("105")>-1||ScautTime.indexOf("120")>-1)&&(
ScautTime==mEvent.Time_Event)) {clearInterval(scautTime);id_("scauttime").innerHTML=mEvent.Time_Event.replace("'","");}
else{
if(ScautTime!=scauttimecorect(mEvent.Time_Event)) {ScautTime=scauttimecorect(mEvent.Time_Event);
clearInterval(scautTime);
scautTimeCount=0;
timerscaut();
scautTime=setInterval(timerscaut,1000);};};}
else {clearInterval(scautTime);id_("scauttime").innerHTML=mEvent.Time_Event.replace("'","");}
id_("scautscore1").innerHTML=mEvent.SCORE;
}
//id_("scautscore2").innerHTML=mEvent.SETSCORES;
}



//if((mEvent.ID_SPORT!=1&&mEvent.ID_SPORT!=4)||(mEvent.ID_SPORT==4&&mEvent.clock_stopped==0))
if(mEvent.ID_SPORT!=1){
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.display="none";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].style.display="none";
Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].style.display="none";
Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].style.display="none";}

if(mEvent.ID_SPORT==1){
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.display="";
Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].style.display="";
Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].style.display="";
Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].style.display="";	

if(mEvent.CARDS_R1>0){Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.background="url(/resources/images/redcard.png) no-repeat";Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].innerHTML=mEvent.CARDS_R1;}
else {Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].style.background="none";Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[1].innerHTML="";}
if(mEvent.CARDS_Y1>0){Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].style.background="url(/resources/images/yellowcard.png) no-repeat";Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].innerHTML=mEvent.CARDS_Y1;}
else {Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].style.background="none";Plus.childNodes[2].childNodes[1].childNodes[0].childNodes[2].innerHTML="";}

if(mEvent.CARDS_R2>0){Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].style.background="url(/resources/images/redcard.png) no-repeat";Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].innerHTML=mEvent.CARDS_R2;}
else {Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].style.background="none";Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[2].innerHTML="";}
if(mEvent.CARDS_Y2>0){Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].style.background="url(/resources/images/yellowcard.png) no-repeat";Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].innerHTML=mEvent.CARDS_Y2;}
else {Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].style.background="none";Plus.childNodes[2].childNodes[1].childNodes[2].childNodes[1].innerHTML="";}
}
if(mEvent.ID_RADAR==0) {Plus.childNodes[2].childNodes[0].childNodes[3].childNodes[0].style.background="none" ;Plus.childNodes[2].childNodes[0].childNodes[3].href="";

if(mEvent.ID_SPORT==1||(mEvent.ID_SPORT==4&&mEvent.clock_stopped>0)||(mEvent.ID_SPORT==6&&mEvent.clock_stopped>0)||(mEvent.ID_SPORT==60&&mEvent.clock_stopped>0)){id_("radarscaut").childNodes[0].style.background="none";id_("radarstats").childNodes[0].style.background="none"; id_("radarscaut").href="";id_("radarstats").href="";}

} else
{Plus.childNodes[2].childNodes[0].childNodes[3].childNodes[0].style.background="url(/resources/images/stats.png)" ;Plus.childNodes[2].childNodes[0].childNodes[3].href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;
if(mEvent.ID_SPORT==1||(mEvent.ID_SPORT==4&&mEvent.clock_stopped>0)){id_("radarscaut").childNodes[0].style.background="url(/resources/images/stats.png)" ;id_("radarscaut").href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;id_("radarstats").childNodes[0].style.background="url(/resources/images/stats.png)" ;id_("radarstats").href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;}

}
}
;}
else{
Rosstate=rosstate;
Rospis.style.display="";
//if(mEvent.ID_CHAMPIONSHIP>3953&&mEvent.ID_CHAMPIONSHIP<3962||mEvent.ID_CHAMPIONSHIP==3948)id_("sukh").style.display=""; else id_("sukh").style.display="none";

if(mEvent.ID_SPORT==110) {id_("vfl").style.display="";
if(id_("vfl").innerHTML=="") id_("vfl").innerHTML=framestr;

id_("vfl").style.marginTop="0px";id_("vfl").style.marginBottom="15px";}
else {id_("vfl").style.display="none";id_("vfl").innerHTML="";}
    
if(mEvent.fav==1)Rospis.childNodes[1].childNodes[0].style.background="url(/resources/images/star2.png) no-repeat" ;else Rospis.childNodes[1].childNodes[0].style.background="url(/resources/images/star1.png) no-repeat";

if((mEvent.ID_SPORT==4||mEvent.ID_SPORT==5||mEvent.ID_SPORT==2||mEvent.ID_SPORT==1||mEvent.ID_SPORT==31||mEvent.ID_SPORT==20||mEvent.ID_SPORT==23||mEvent.ID_SPORT==6||mEvent.ID_SPORT==60)&&mEvent.clock_stopped>0){
id_("urad1hok").innerHTML=mEvent.UCHASTNIK1.toUpperCase();
id_("urad2hok").innerHTML=mEvent.UCHASTNIK2.toUpperCase();
id_("urad1hok").title=mEvent.UCHASTNIK1;
id_("urad2hok").title=mEvent.UCHASTNIK2;

id_("radarscore3hok").innerHTML=mEvent.Data.split("<br />")[0];
id_("radarscore4hok").innerHTML=mEvent.Data.split("<br />")[1];
//mEvent.Time_Event;
id_("radarstatshok").href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;
Rospis.childNodes[0].style.display="";
Rospis.childNodes[1].style.display="none";
Rospis.childNodes[2].style.display="none";

if(mEvent.fav==1) id_("starscauthok").style.background="url(/resources/images/star2.png) no-repeat" ;else id_("starscauthok").style.background="url(/resources/images/star1.png) no-repeat";
id_("champscauthok").innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;
} else {
Rospis.childNodes[0].style.display="none";
Rospis.childNodes[1].style.display="";
Rospis.childNodes[2].style.display="";

}



Rospis.childNodes[1].childNodes[1].innerHTML=mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS_COUNTRY+", "+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;

if(mEvent.ID_SPORT==110) Rospis.childNodes[1].style.display="none";
//else Rospis.childNodes[1].style.display="";

Rospis.childNodes[2].childNodes[1].childNodes[0].innerHTML=mEvent.Data.replace("<br /><div class='future' title='Будут доступны ставки LIVE'></div>","");

Rospis.childNodes[2].childNodes[0].childNodes[0].title=mEvent.UCHASTNIK1;
Rospis.childNodes[2].childNodes[0].childNodes[0].innerHTML=mEvent.UCHASTNIK1.toUpperCase();
Rospis.childNodes[2].childNodes[2].childNodes[0].title=mEvent.UCHASTNIK2;
Rospis.childNodes[2].childNodes[2].childNodes[0].innerHTML=mEvent.UCHASTNIK2.toUpperCase();

}

var GrandCell=new Array();
var mRospis2=new Array();

if(mEvent.Live==1||mEvent.ID_SPORT==110){ mRospis=new Array();
for(i=0;i<mEvent.mlines.length;i++){
            mRospis2[i]=mRospis[i]=new Trospis();
            mRospis2[i].ID_LINE=mRospis[i].ID_LINE=mEvent.mlines[i];
            mRospis2[i].ID_TIP_RADAR=mRospis[i].ID_TIP_RADAR=mLines[LineId[mEvent.mlines[i]]].ID_TIP_RADAR;
			//console.log("mRospis[i].ID_TIP_RADAR="+mRospis[i].ID_TIP_RADAR);
			mRospis2[i].FAVORIT=mRospis[i].FAVORIT=mLines[LineId[mEvent.mlines[i]]].FAVORIT;
            mRospis2[i].KOEF=mRospis[i].KOEF=mLines[LineId[mEvent.mlines[i]]].KOEF;
            mRospis2[i].KOL=mRospis[i].KOL=mLines[LineId[mEvent.mlines[i]]].KOL_V;
            mRospis2[i].ID_EVENT=mRospis[i].ID_EVENT=id;
            for(j=0;j<mLines[LineId[mEvent.mlines[i]]].KOL_V;j++) mRospis2[i].V[j]=mRospis[i].V[j]=mLines[LineId[mEvent.mlines[i]]].V[j]; 	
}
;}

mRospis=SortRospis(mRospis,mEvent.Live);

var temp33="";
var ii=0;
//var rapidinner=new Array();
//rapidinner[0]=rapidinner[1]=rapidinner[2]=rapidinner[3]=rapidinner[4]="";
if(mEvent.ID_SPORT==1){
for(i=0;i<mRospis.length;i++){
for(j=0;j<poparray.length;j++) if(mRospis[i].ID_TIP_RADAR==poparray[j]) break;
if(j<poparray.length) break;}
if(i<mRospis.length) grup[grup.length-2]=1;

i=0;j=0;
for(i=0;i<mRospis.length;i++){
for(j=0;j<poparray2.length;j++) if(mRospis[i].ID_TIP_RADAR==poparray2[j]) break;
if(j<poparray2.length) break;}
if(i<mRospis.length) grup[grup.length-1]=1;

}


if(mEvent.ID_SPORT==1&&mEvent.Live==1) {
mRospisradar=mRospis2;
mEventradar=mEvent;
radarkoef(mRospis2,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoef(mRospisradar,mEventradar,1)",4000);}


if(mEvent.ID_SPORT==4&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis2;
mEventradar=mEvent;
radarkoefhockey(mRospis2,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefhockey(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==6&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis2;
mEventradar=mEvent;
radarkoefhand(mRospis2,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefhand(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==60&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis2;
mEventradar=mEvent;
radarkoefpl(mRospis2,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefpl(mRospisradar,mEventradar,1)",4000);}



if(mEvent.ID_SPORT==4&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefhockeyn(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefhockeyn(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==6&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefhandn(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefhandn(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==60&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefpln(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefpln(mRospisradar,mEventradar,1)",4000);}



if(mEvent.ID_SPORT==1&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefn(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefn(mRospisradar,mEventradar,1)",4000);}


if(mEvent.ID_SPORT==2&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefbn(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefbn(mRospisradar,mEventradar,1)",4000);}


if(mEvent.ID_SPORT==23&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefvoln(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefvoln(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==31&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefbadn(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefbadn(mRospisradar,mEventradar,1)",4000);}



if(mEvent.ID_SPORT==2&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefb(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefb(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==23&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefvol(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefvol(mRospisradar,mEventradar,1)",4000);}

if(mEvent.ID_SPORT==31&&mEvent.Live==1&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoefbad(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoefbad(mRospisradar,mEventradar,1)",4000);}


if(mEvent.ID_SPORT==5&&mEvent.Live==0&&mEvent.clock_stopped>0) {
mRospisradar=mRospis;
mEventradar=mEvent;
radarkoeften(mRospis,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoeften(mRospisradar,mEventradar,1)",4000);}



if(mEvent.ID_SPORT==5&&mEvent.Live==1&&(mEvent.ID_RADAR!=0||mEvent.clock_stopped>0)) {
mRospisradar=mRospis2;
mEventradar=mEvent;
radarkoeflarg(mRospis2,mEventradar,0);
clearTimeout(rardtime);
rardtime=setTimeout("radarkoeflarg(mRospisradar,mEventradar,1)",4000);}




for(l=0;l<tPlus.length;l++)
{
if(tPlus[l].ID_SPORT>0&&mEvent.ID_SPORT!=tPlus[l].ID_SPORT) continue;
if(tPlus[l].Live!=mEvent.Live) continue;

if(s!=999999){s=0;J=0;u=0;ck=0;cck=0;ccck=0;I=0;
if((Rosstate>1)&&(Rosstate!=grup.length)&&(Rosstate!=grup.length+1)&&(tPlus[l].GRUP+1!=Rosstate)) u=-1;;


//console.log(tPlus[l].GRUP+" "+tPlus[l].FREE);
//for(k=0;k<grupp.length;k++)
if(grup[tPlus[l].GRUP-1]==0){if((u==0)&&(Rosstate!=1)&&(Rosstate!=grup.length)&&(Rosstate!=grup.length+1)) temp33='<div class="free5">'+grupp[tPlus[l].GRUP-1]+'</div>';}

//console.log(Rosstate+" "+(grup.length-1)+" "+u);

if((u==-1)&&(Rosstate!=1)){
for(xx=0;xx<tPlus[l].ID_TIP_RADAR.length;xx++)
{for(zz=0;zz<mRospis.length;zz++) if(mRospis[zz].ID_TIP_RADAR==tPlus[l].ID_TIP_RADAR[xx]) break; if(zz<mRospis.length) break;}
if(xx<tPlus[l].ID_TIP_RADAR.length) grup[tPlus[l].GRUP-1]=1; continue;
}


if((grup2==0)&&(Rosstate==grup.length)){temp4=temp4+'<div class="free5">Популярные</div>';grup2=1;}
if((grup3==0)&&(Rosstate==grup.length+1)){temp4=temp4+'<div class="free5">Новичок</div>';grup3=1;}


if((grup1==0)&&(Rosstate==1)){temp4=temp4+'<div class="free5">Избранное</div>';grup1=1;}


for(u=0;u<GrandCookie[cook1][cook2].length;u++)for(k=0;k<tPlus[l].ID_TIP_RADAR.length;k++) if(tPlus[l].ID_TIP_RADAR[k]==GrandCookie[cook1][cook2][u]) {ck=1;break;} if((ck==0)&&(Rosstate==1)) { 
for(xx=0;xx<tPlus[l].ID_TIP_RADAR.length;xx++){for(zz=0;zz<mRospis.length;zz++) if(mRospis[zz].ID_TIP_RADAR==tPlus[l].ID_TIP_RADAR[xx]) break;
if(zz<mRospis.length) break;
}
if(xx<tPlus[l].ID_TIP_RADAR.length) grup[tPlus[l].GRUP-1]=1; continue;}

for(u=0;u<poparray.length;u++)for(k=0;k<tPlus[l].ID_TIP_RADAR.length;k++) if(tPlus[l].ID_TIP_RADAR[k]==poparray[u]) {cck=1;break;} 

if((cck==0)&&(Rosstate==grup.length)) { 
for(xx=0;xx<tPlus[l].ID_TIP_RADAR.length;xx++){for(zz=0;zz<mRospis.length;zz++) if(mRospis[zz].ID_TIP_RADAR==tPlus[l].ID_TIP_RADAR[xx]) break;
if(zz<mRospis.length) break;
}
if(xx<tPlus[l].ID_TIP_RADAR.length) grup[tPlus[l].GRUP-1]=1; continue;}

for(u=0;u<poparray2.length;u++)for(k=0;k<tPlus[l].ID_TIP_RADAR.length;k++) if(tPlus[l].ID_TIP_RADAR[k]==poparray2[u]) {ccck=1;break;} 

if((ccck==0)&&(Rosstate==grup.length+1)) { 
for(xx=0;xx<tPlus[l].ID_TIP_RADAR.length;xx++){for(zz=0;zz<mRospis.length;zz++) if(mRospis[zz].ID_TIP_RADAR==tPlus[l].ID_TIP_RADAR[xx]) break;
if(zz<mRospis.length) break;
}
if(xx<tPlus[l].ID_TIP_RADAR.length) grup[tPlus[l].GRUP-1]=1; continue;}



}






m=0;
cellstring=new Array();
linestring=new Array();
linestring1=new Array();
lk=new Array();
lk1=new Array();

band1string="";
band2string="";
row1string="";
row2string="";
row1string1="";
row2string1="";
row1string="";
row1string="";
ss=0;

//if(tPlus[l].FREE=="Точный&nbsp;счет") console.log(tPlus[l].ID_TIP_RADAR);


for(j=J;j<tPlus[l].ID_TIP_RADAR.length;j++){
if(s==999999) s=888888;
if(j>J) I=0;

for(i=I;i<mRospis.length;i++) if(mRospis[i].ID_TIP_RADAR==tPlus[l].ID_TIP_RADAR[j]){
ii=i;
ss++;	
if(s==0){temp4=temp4+temp33+'<div class="fr1"><div class="fr2">'+tPlus[l].FREE+'</div><div class="fr'+(ck+3)+'" onclick="rfavcl(this,'+cook1+','+cook2+',['+tPlus[l].ID_TIP_RADAR+'],'+ck+');"/></div></div>';temp33="";grup[tPlus[l].GRUP-1]=1;}


if(s==888888)temp4=temp4+'<div class="fr1" style="background-color:#FFF;"></div>';
s++;

cellstring[m]=new Array();

if(tPlus[l].TIP_RADAR==1){linestring[m]='<div style="width:'+560/tPlus[l].CELL_WIDTH+'px;float:left">';
if(tPlus[l].TYPEBAND==1) linestring1[m]='<div style="width:'+560/tPlus[l].CELL_WIDTH+'px;float:left">';
if(tPlus[l].NUMKOLBAND1>j) band1string=band1string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND1[j])+'>'+tPlus[l].KOLBAND1[j].replace("@d",totkoef2(mRospis[i].KOEF,tPlus[l].FORA,tPlus[l].KOLBAND1[j].indexOf("@d"))).replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья")+gl()+'</span>';
if(tPlus[l].NUMKOLBAND2>j) band2string=band2string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND2[j])+'>'+tPlus[l].KOLBAND2[j].replace("@d",totkoef2(mRospis[i].KOEF,tPlus[l].FORA,tPlus[l].KOLBAND2[j].indexOf("@d"))).replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья")+gl()+'</span>';
}


if(tPlus[l].TIP_RADAR==2){linestring[m]='<div style="width:'+tPlus[l].CELL_KOL*560/tPlus[l].CELL_WIDTH+'px;float:left">';
if(tPlus[l].NUMROWBAND1>j) row1string=row1string+tPlus[l].ROWBAND1[j].replace("@d",totkoef2(mRospis[i].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND1[j].indexOf("@d"))).replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья")+gl()+'<br/>';
if(tPlus[l].NUMROWBAND2>j) row2string=row2string+tPlus[l].ROWBAND2[j].replace("@d",totkoef2(mRospis[i].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND2[j].indexOf("@d"))).replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья")+gl()+'<br/>';}

if(tPlus[l].TIP_RADAR==3&&mRospis[i].KOEF.indexOf("1@")>-1) {linestring[m]="";lk[m]=mRospis[i].V[0];}
if(tPlus[l].TIP_RADAR==3&&mRospis[i].KOEF.indexOf("2@")>-1) {linestring1[m]="";lk1[m]=mRospis[i].V[0];}

if(tPlus[l].TIP_RADAR==0)linestring[m]='<div style="width:'+tPlus[l].CELL_KOL*560/tPlus[l].CELL_WIDTH+'px;float:left">';


for(k=0;k<tPlus[l].NUM_CELL;k++)
{
if(tPlus[l].CELL[k].V!=0&&tPlus[l].CELL[k].R.length==0){ continue;}

if(tPlus[l].CELL[k].V==0) V=Vkoef3(mRospis[i].V[tryodd(tPlus[l].CELL[k].ODD_NOMER-1,mRospis[i].ID_TIP_RADAR,mEvent.Live)])+"<br />#"+mRospis[i].ID_LINE+"<br />#"+tryodd(tPlus[l].CELL[k].ODD_NOMER-1,mRospis[i].ID_TIP_RADAR,mEvent.Live);
else V="-";
cellstring[m][k]='<div class="cell'+doublecell(tPlus[l].CELL_WIDTH,tPlus[l].CELL[k].DOUBLE)+short[tPlus[l].CELL_HEIGHT]+'"'+inred(V)+'onclick="lineclick(this,'+mEvent.Live+');">'+inplus(V,tPlus[l].CELL_HEIGHT)+'<div class="plus222" style="width:';
if(tPlus[l].CELL[k].R.length>0){
cellstring[m][k]=cellstring[m][k]+l222[doublecell(tPlus[l].CELL_WIDTH,tPlus[l].CELL[k].DOUBLE)]+'px;">';
if(tPlus[l].CELL[k].V!=0) cellstring[m][k]=cellstring[m][k]+'<span class="gr9">';
cellstring[m][k]=cellstring[m][k]+tPlus[l].CELL[k].R.replace("@d",mRospis[i].DOP_KOEF[tryodd(tPlus[l].CELL[k].ODD_NOMER-1,mRospis[i].ID_TIP_RADAR,mEvent.Live)]).replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@b","<span class='gr8'>б&nbsp;</span>").replace("@m","<span class='gr8'>м&nbsp;</span>").replace("1@","").replace("2@","");
if(tPlus[l].CELL[k].V!=0) cellstring[m][k]=cellstring[m][k]+'</span>';
cellstring[m][k]=cellstring[m][k]+'</div><div class="plus333" style="margin-top:'+margin[tPlus[l].CELL_HEIGHT]+'px;">'+V+'</div></div>';
}
else cellstring[m][k]=cellstring[m][k]+'0px;"></div><div class="plus333" style="margin-top:'+margin[tPlus[l].CELL_HEIGHT]+'px;width:'+l333[doublecell(tPlus[l].CELL_WIDTH,tPlus[l].CELL[k].DOUBLE)]+'px;text-align:center;">'+V+'</div></div>';


if(tPlus[l].TIP_RADAR==3&&mRospis[i].KOEF.indexOf("2@")>-1) linestring1[m]=linestring1[m]+cellstring[m][k];
if(tPlus[l].TIP_RADAR==3&&mRospis[i].KOEF.indexOf("1@")>-1) linestring[m]=linestring[m]+cellstring[m][k];

if(tPlus[l].TIP_RADAR!=3){
if(tPlus[l].TYPEBAND==0) linestring[m]=linestring[m]+cellstring[m][k];
else { if(k<tPlus[l].NUM_CELL/2) linestring[m]=linestring[m]+cellstring[m][k];
else linestring1[m]=linestring1[m]+cellstring[m][k];}
}
}

if(tPlus[l].TYPEBAND==1) linestring1[m]=linestring1[m]+'</div>';
if(tPlus[l].TIP_RADAR!=3)linestring[m]=linestring[m]+'</div>';

m++;
if(tPlus[l].TIP_RADAR==1&&(((m+1)/tPlus[l].CELL_WIDTH))>1) {s=999999;I=i+1;
;break;}

}
if(s==999999) {J=j;break;};
}

if(ss==0) continue;

if(tPlus[l].TIP_RADAR==1){
if(tPlus[l].TYPEBAND==0){
for(k=0;k<tPlus[l].NUMROWBAND1;k++) row1string=row1string+tPlus[l].ROWBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND1[k].indexOf("@d")))+gl()+'<br/>';
for(k=0;k<tPlus[l].NUMROWBAND2;k++) row2string=row2string+tPlus[l].ROWBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья".replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND2[k].indexOf("@d"))))+gl()+'<br/>';}
else{
for(k=0;k<tPlus[l].NUMROWBAND1;k++) if(k<tPlus[l].NUMROWBAND1/2)
row1string=row1string+tPlus[l].ROWBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND1[k].indexOf("@d")))+gl()+'<br/>';
else row1string1=row1string1+tPlus[l].ROWBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND1[k].indexOf("@d")))+gl()+'<br/>';
for(k=0;k<tPlus[l].NUMROWBAND2;k++) if(k<tPlus[l].NUMROWBAND2/2) 
row2string=row2string+tPlus[l].ROWBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND2[k].indexOf("@d")))+gl()+'<br/>';
else row2string1=row2string1+tPlus[l].ROWBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND2[k].indexOf("@d")))+gl()+'<br/>';
}
}



if(tPlus[l].TIP_RADAR==2||tPlus[l].TIP_RADAR==3){
for(k=0;k<tPlus[l].NUMKOLBAND1;k++) band1string=band1string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND1[k])+'>'+tPlus[l].KOLBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA),tPlus[l].KOLBAND1[k].indexOf("@d"))+gl()+'</span>';
for(k=0;k<tPlus[l].NUMKOLBAND2;k++) band2string=band2string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND2[k])+'>'+tPlus[l].KOLBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].KOLBAND2[k].indexOf("@d")))+gl()+'</span>';}



if(tPlus[l].TIP_RADAR==0){
for(k=0;k<tPlus[l].NUMROWBAND1;k++) row1string=row1string+tPlus[l].ROWBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND1[k].indexOf("@d")))+gl()+'<br/>';
for(k=0;k<tPlus[l].NUMROWBAND2;k++) row2string=row2string+tPlus[l].ROWBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].ROWBAND2[k].indexOf("@d")))+gl()+'<br/>';
for(k=0;k<tPlus[l].NUMKOLBAND1;k++) band1string=band1string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND1[k])+'>'+tPlus[l].KOLBAND1[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].KOLBAND1[k].indexOf("@d")))+gl()+'</span>';

for(k=0;k<tPlus[l].NUMKOLBAND2;k++) band2string=band2string+'<span class="rad'+tPlus[l].CELL_WIDTH+'"'+inband(tPlus[l].KOLBAND2[k])+'>'+tPlus[l].KOLBAND2[k].replace("@1",corot(mEvent.UCHASTNIK1)).replace("@2",corot(mEvent.UCHASTNIK2)).replace("@x","Ничья").replace("@d",totkoef2(mRospis[ii].KOEF,tPlus[l].FORA,tPlus[l].KOLBAND2[k].indexOf("@d")))+gl()+'</span>';


;}




temp4=temp4+'<div class="free4"></div>';
temp4=temp4+'<div style="width:560px;float:left;margin-left:163px;font-weight:bold;text-align:center;margin-top:-20px;margin-bottom:10px;">'+band2string+'</div>';
temp4=temp4+'<div style="width:560px;float:left;margin-left:163px;margin-bottom:5px;font-weight:bold;text-align:center;margin-top:0px;">';
if(tPlus[l].TYPEBAND==0) temp4=temp4+band1string+'</div>'; else temp4=temp4+'</div>'

if(row1string.length==0)
temp4=temp4+'<div style="width:158px;float:left;font-weight:bold;text-align:right;min-height:30px;line-height:'+(23*(tPlus[l].CELL_HEIGHT+1)-5*tPlus[l].CELL_HEIGHT)+'px;">'+row2string+'</div>';
else{
r1l=8*(row1string.split("<br/>")[0].length)+10;
temp4=temp4+'<div style="width:158px;float:left;font-weight:bold;text-align:right;min-height:30px;line-height:'+(23*(tPlus[l].CELL_HEIGHT+1)-5*tPlus[l].CELL_HEIGHT)+'px;"><div style="width:'+(158-r1l)+'px;float:left;">'+row2string+'</div><div style="width:'+r1l+'px;float:left;">'+row1string+'</div></div>';
}

if(tPlus[l].TIP_RADAR==3){
temp4=temp4+'<div style="width:272px;float:left;margin-left:8px;">';
temp5=SortArray(lk,2);
for(k=0;k<m;k++) if(linestring[temp5[k]]&&lk[temp5[k]]!=100) temp4=temp4+linestring[temp5[k]];

temp4=temp4+'</div>'
temp4=temp4+'<div style="width:276px;float:left;margin-left:8px;">';

temp5=SortArray(lk1,2);
for(k=0;k<m;k++) if(linestring1[temp5[k]]&&lk1[temp5[k]]!=100) temp4=temp4+linestring1[temp5[k]];
temp4=temp4+'</div>'
}
else{if(tPlus[l].TIP_RADAR==2) temp4=temp4+'<div style="width:'+tPlus[l].CELL_KOL*560/tPlus[l].CELL_WIDTH+'px;float:left;margin-left:8px;">';
else temp4=temp4+'<div style="width:560px;float:left;margin-left:8px;">';
for(k=0;k<m;k++)temp4=temp4+linestring[k];
}


if(tPlus[l].TYPEBAND==1){
temp4=temp4+'</div><div style="width:560px;float:left;margin-left:163px;margin-bottom:0px;font-weight:bold;text-align:center;margin-top:5px;">'+band1string+'</div><div class="free4" style="margin-bottom:10px;"></div>';	
temp4=temp4+'<div style="width:158px;float:left;font-weight:bold;text-align:right;min-height:30px;line-height:'+(23*(tPlus[l].CELL_HEIGHT+1)-5*tPlus[l].CELL_HEIGHT)+'px;">'+row2string1+'</div><div style="width:560px;float:left;margin-left:8px;">'
for(k=0;k<m;k++)temp4=temp4+linestring1[k];	
}
temp4=temp4+'</div></div><div class="free3"></div>';
if(s==999999) l--;

}



if(temp4.length>0) temp4=temp4+'<div style="width:100%;float:left;height:10px;"></div>';
if(mEvent.State==2) temp4=temp4.split("cell").join("ecell").split("plus222").join("plus222e").split('onclick="lineclick(this,'+mEvent.Live+');"').join('');



for(i=0;i<mSport.length;i++) if(mSport[i].ID_SPORT==mEvent.ID_SPORT){
    showTitle(true, mSport[i].NAME_RUS.toUpperCase());
	id_("bigl").style.marginLeft=id_("bigllarg").style.marginLeft=id_("bigr").style.marginLeft=""+(20+mSport[i].NAME_RUS.length*12)+"px";
    break;
}



if(mEvent.Live==0){

if(Rosstate==grup.length+1&&mEvent.ID_SPORT==1){
mRospisradar2=mRospis;
mEventradar2=mEvent; drawnov(mRospis,mEvent);}
else {
if(mEvent.chet>0) Rospis.childNodes[4].childNodes[1].innerHTML='<img src="/resources/images/bonx'+mEvent.chet+'b.jpg" style="float:left;margin-top:20px;margin-left:-10px;cursor:pointer;" onclick="javascript:hashnav(&quot;loyal&quot;);return false;">'+temp4;
else Rospis.childNodes[4].childNodes[1].innerHTML=temp4;


Rospis.childNodes[4].childNodes[2].childNodes[1].innerHTML="";
Rospis.childNodes[4].childNodes[2].childNodes[4].innerHTML="";
Rospis.childNodes[4].childNodes[2].style.display="none";
}

Rospis.childNodes[1].style.marginLeft=(mSport[i].NAME_RUS.length*11+13)+"px";


for(i=0;i<grup.length;i++) 
if(grup[i]==0) Rosmenu[i+2].style.display="none"; else Rosmenu[i+2].style.display="";
if(GrandCookie[cook1][cook2].length>0) Rosmenu[1].childNodes[0].src="/resources/images/fv01.png?7";else Rosmenu[1].childNodes[0].src="/resources/images/fv00.png?7"

if((mEvent.ID_RADAR==0||mEvent.ID_EVENT>=1000000000)&&mEvent.ID_SPORT!=110) {Rospis.childNodes[2].childNodes[3].childNodes[0].style.background="none" ;Rospis.childNodes[2].childNodes[3].href="";} else
{Rospis.childNodes[2].childNodes[3].childNodes[0].style.background="url(/resources/images/stats.png)";
if(mEvent.ID_SPORT==110) Rospis.childNodes[2].childNodes[3].href="http://vfl.betradar.com/s4/?clientid=476&language=ru&h2hmatchid="+mEvent.ID_RADAR;
else Rospis.childNodes[2].childNodes[3].href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&h2hmatchid="+mEvent.ID_RADAR;

}
Rospis.childNodes[1].childNodes[0].style.background='url(/resources/images/star'+(mEvent.fav+1)+'.png) no-repeat';
}

else{
if((mEvent.ID_SPORT==1)||(mEvent.ID_SPORT==4)||(mEvent.ID_SPORT==6)||(mEvent.ID_SPORT==60)||(mEvent.ID_SPORT==29)||(mEvent.ID_SPORT==12)) {

if(Rosstate==grup.length+1&&mEvent.ID_SPORT==1){mRospisradar2=mRospis2;
mEventradar2=mEvent; drawnov(mRospis,mEvent);}
else {
if(mEvent.chet>0) Plus.childNodes[3].childNodes[1].innerHTML='<img src="/resources/images/bonx'+mEvent.chet+'b.jpg" onclick="javascript:hashnav(&quot;loyal&quot;);return false;" style="float:left;margin-top:20px;margin-left:-10px;cursor:pointer;">'+temp4;else Plus.childNodes[3].childNodes[1].innerHTML=temp4;

Plus.childNodes[3].childNodes[2].childNodes[1].innerHTML="";
Plus.childNodes[3].childNodes[2].childNodes[4].innerHTML="";
Plus.childNodes[3].childNodes[2].style.display="none";
}

if(GrandCookie[cook1][cook2].length>0) Plusmenu[1].childNodes[0].src="/resources/images/fv01.png?7";else Plusmenu[1].childNodes[0].src="/resources/images/fv00.png?7"

for(i=0;i<grup.length;i++){ 
if(grup[i]==0) Plusmenu[i+2].style.display="none"; else Plusmenu[i+2].style.display="";
}
}
else 
{if(mEvent.chet>0) Pluslarge.childNodes[3].childNodes[1].innerHTML='<img src="/resources/images/bonx'+mEvent.chet+'b.jpg" style="float:left;margin-top:20px;margin-left:-10px;cursor:pointer;" onclick="javascript:hashnav(&quot;loyal&quot;);return false;">'+temp4; else	Pluslarge.childNodes[3].childNodes[1].innerHTML=temp4;

if(GrandCookie[cook1][cook2].length>0) Pluslargemenu[1].childNodes[0].src="/resources/images/fv01.png?7";else Pluslargemenu[1].childNodes[0].src="/resources/images/fv00.png?7"
for(i=0;i<grup.length;i++) 
if(grup[i]==0) Pluslargemenu[i+2].style.display="none"; else Pluslargemenu[i+2].style.display="";
}




if((mEvents[EventId[id]].ID_SPORT==1)||(mEvents[EventId[id]].ID_SPORT==4)||(mEvents[EventId[id]].ID_SPORT==6)||(mEvents[EventId[id]].ID_SPORT==60)) 
Plus.childNodes[2].childNodes[0].childNodes[0].style.background='url(/resources/images/star'+(mEvents[EventId[id]].fav+1)+'.png) no-repeat'; else
Pluslarge.childNodes[1].childNodes[0].style.background='url(/resources/images/star'+(mEvent.fav+1)+'.png) no-repeat';
;}
;}



function loginout(){
if(Login.value.split(" ").join("").length==0)
Login.value="логин";}

function loginin(){if(Login.value=="логин") Login.value="";}

function passwordout(){if(Password.value.split(" ").join("").length==0){Password.value="пароль";Password.type="text"};}

function passwordin(){if(Password.value=="пароль")Password.value="";Password.type="password";}

function loginclick2(){
if((Open4[0].value.length<3)||(Open4[1].value.length<3)){showWarning2(war13);return;}
sendindex=0;
log2=1;
sendarray.splice(0);
writeUTF(Open4[0].value);
writeUTF(Open4[1].value);
writeUTF(ipadres);
userpass=Open4[1].value;
userlogin=Open4[0].value;
sendarray[sendindex]=0;
webSocket.send("clientlogin");
webSocket.send(EncodeBase64_2(sendarray));
return;
}

function loginclick3(){
if((cs_("open44")[0].value.length<3)||(cs_("open44")[1].value.length<3)){
id_("OPWAR").style.fontWeight="bold";
id_("OPWAR").style.color="#DD0000";
id_("OPWAR").innerHTML="Неправильный логин или пароль";	
return;}

sendindex=0;
log2=2;
sendarray.splice(0);
writeUTF(cs_("open44")[0].value);
writeUTF(cs_("open44")[1].value);
writeUTF(ipadres);
userpass=cs_("open44")[1].value;
userlogin=cs_("open44")[0].value;
sendarray[sendindex]=0;
webSocket.send("clientlogin");
webSocket.send(EncodeBase64_2(sendarray));
return;
}


function loginclick(){
    
/*    var data = Cookie.get('__userdata');
    if(data) {
        data = hex2bin(data);
        
        data = data.split(':');
        if(data.length > 1) {
            
            Login.value = data[0];
            Password.value = data[1];
            
        }
    }
*/	
 
if((Login.value.length<3)||(Password.value.length<3)){Login.value="логин";
Password.value="пароль";Password.type="text";
showWarning(war13,"OK","",0,null);
return;}
log2=0;    
sendindex=0;
sendarray.splice(0);
writeUTF(Login.value);
writeUTF(Password.value);
writeUTF(ipadres);
userpass=Password.value;
userlogin=Login.value;
sendarray[sendindex]=0;
webSocket.send("clientlogin");
webSocket.send(EncodeBase64_2(sendarray));
log1=1;
//data = bin2hex(Login.value + ':' + Password.value);
//Cookie.set('__userdata', data, 10);
return;
}



function insertkoef(){
clearTimeout(inserttime);
if(!id_("HOME-ACTIONS")) return;
var string="";    
var i=0;
var j=0;

//console.log("iternews="+iternews);


//console.log("iternews/2="+(iternews-1)/2);
//console.log(prinarray);

for(i=1;i<6;i++){
if(prinarray[i]&&prindex2[i]!=-1&&prpoz[prindex2[i]]==(iternews)/2&&prinarray[i].length>0&&prshow[prindex2[i]]==1) break;

}
if(i==6) {id_("KOEF") ? id_("KOEF").parentNode.style.display="none" : false; return;}

try{
//console.log("i="+i+"prinarray[i].length="+prinarray[i].length);
for(j=0;j<prinarray[i].length;j++)
if(mEvents[EventId[prinarray[i][j]]]) break;
//j=0;

if(j<prinarray[i].length)
{

var mEvent=mEvents[EventId[prinarray[i][j]]]; 
id_("insertu1").src="";//"/resources/images/actions/"+mPrin[j].ID_EVENT+"1.png";
id_("insertu2").src="";//"/resources/images/actions/"+mPrin[j].ID_EVENT+"2.png";
id_("insertu1").style.display=id_("insertu2").style.display="none";

if(mEvent.Data.length==0) DrawEvent(mEvent,1);

if(mEvent.T1x2[0].length>0){
if(mEvent.TIP_TABLE==2||mEvent.TIP_TABLE==4)
for(i=0;i<2;i++){ 
string=string+'<span '+inred2(0,mEvent.State,mEvent.T1x2[i])+' onclick="lineclick(this,0)">'+mEvent.T1x2[i]+'</span>';
if(i==0) string=string+'<span class="class03" style="background:none;border:0px;cursor:default;"></span>';
 }

else
for(i=0;i<3;i++) 
 string=string+'<span '+inred2(0,mEvent.State,mEvent.T1x2[x12[i]])+' onclick="lineclick(this,0)">'+mEvent.T1x2[x12[i]]+'</span>';

 }
    id_("KOEF1").innerHTML=corot2(mEvent.UCHASTNIK1).toUpperCase();
	id_("KOEF2").innerHTML=corot2(mEvent.UCHASTNIK2).toUpperCase();
    id_("KOEF").innerHTML=string;
    id_("KOEF").parentNode.style.display="";
	if(mEvent.Live==1){
	id_("KOEF4").style.display="none";
	id_("KOEF5").innerHTML="";//mEvent.Time_Event;		
	id_("KOEF3").innerHTML='<div style="font-size:26px;font-style:italic;color:#fff;margin-top:7px;width:96px;float:left;text-align:center;line-height:16px;"><b>'+
		mEvent.SCORE+'</b><br /><span style="font-size:14px;">'+
		mEvent.Time_Event+'</span></div>';
	
	//+mEvent.SCORE
	
	}
	else {id_("KOEF4").style.display="none";
		id_("KOEF5").innerHTML="";
		id_("KOEF3").innerHTML='<div style="font-size:20px;font-style:italic;color:#fff;margin-top:4px;float:left;margin-left:21px;line-height:19px;"><b>'+
		mEvent.Data.replace("<br /><div class='future' title='Будут доступны ставки LIVE'></div>","").split("<br />")[0]+'</b><br /><span style="font-size:18px;">'+
		mEvent.Data.replace("<br /><div class='future' title='Будут доступны ставки LIVE'></div>","").split("<br />")[1]
		+'</span></div>';
			
		}	
}
else   id_("KOEF") ? id_("KOEF").parentNode.style.display="none" : false;

} catch(e){id_("KOEF") ? id_("KOEF").parentNode.style.display="none" : false;}

}




function hideall(){
clearInterval(ntvinterval);
var i=0;
for(i=0;i<10;i++){
if(id_("PRTABLE"+i)) {id_("PRTABLE"+i).style.display="none";id_("PRTABLE"+i).innerHTML="";}	
}

LastEventAction=new Array();	
if(authstate!=null){id_("PRH").innerHTML='';id_("PRV").innerHTML='';}
id_("radarframe").innerHTML="";
id_("radarframep").style.display="none";
id_("radarframelarg").innerHTML="";
id_("radarframeplarg").style.display="none";
id_("radarframehok").innerHTML="";
id_("radarframephok").style.display="none";

				
//hidus();	
Filtru1.style.zIndex="0";
Sportmenu.style.zIndex="0";
id_("root").parentNode.style.zIndex="6";
id_("DEMOREG").style.display="none";
id_("HUroot").style.display="none";
//if(id_("HOME-ACTIONS"))id_("HOME-ACTIONS").style.zIndex="0";
//if(id_("PRINCIP"))id_("PRINCIP").style.zIndex="0";
Cupon.childNodes[0].style.zIndex="0";
id_("OPLOGIN").style.zIndex="0";
//id_("OPSCHET").style.zIndex="0";
id_("MYDOC").style.display="none";
id_("MYBONUS").style.display="none";
id_("SEOSTAVKI").style.display="none";
id_("VIDEOLIVE").style.display="none";
id_("VIDEONHL").style.display="none";
id_("NIGHTBONUS").style.display="none";

Render.style.display="none";
id_("vfl").style.display="none";


if(window.location.href.indexOf("virtualijnyj_futbol")==-1&&window.location.href.indexOf("plus")==-1) id_("vfl").innerHTML="";


LastFrontLive=-1;
Plus.style.display="none";
Pluslarge.style.display="none";
Rospis.style.display="none";
History.style.display="none";
Register.style.display="none";
id_("KABINET").style.display="none";

if(id_("ajax-content")) id_("ajax-content").style.display = 'none';



if(hrefcount==1&&cs_("seo-texts").length>0) {
var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
if(page2=='/stavki/sport/') id_("white-block2").childNodes[0].innerHTML=id_("ajax-content").innerHTML;	
else id_("white-block").childNodes[0].innerHTML=cs_("seo-texts")[0].innerHTML;
id_("ajax-content").innerHTML="";
}
else {id_("white-block").innerHTML="";id_("white-block2").innerHTML="";}




Remember1.style.display="none";
Remember2.style.display="none";

Filtru.style.display="";
Familia.style.display="none";
Result.style.display="none";
Plata.style.display="none";
Schet.style.display="none";
Scan.style.display="none";
Linia.style.display="none";
Bonus2000.style.display="none";
Bonusaccept.style.display="none";
id_("LOYAL").style.display="none";
id_("NTVPLUS").style.display="none";
Regfinal.style.display="none";
NYbonus.style.display="none";
Hu.style.display="none";
}


function showsport(){
hideall();
//id_("radarframe").innerHTML="";id_("radarframep").style.display="none";	
if(id_("PROMO"))id_("PROMO").style.display="none";
Render.style.display=""

if(SportIndex>0&&mSport[SportIndex].ID_SPORT==110){id_("vfltitle").style.marginTop="-550px";id_("vfltitle").style.marginBottom="530px";
id_("vfl").style.marginTop="36px";id_("vfl").style.marginBottom="0px";id_("vfl").style.display="";
if(id_("vfl").innerHTML=="") id_("vfl").innerHTML=framestr;
id_("TIMER").style.display="none";}
else {id_("vfltitle").style.marginTop="0px";id_("vfltitle").style.marginBottom="0px";id_("TIMER").style.display="";
id_("vfl").style.display="none";id_("vfl").innerHTML="";}
$('.ceo').hide();
if(IndexScroll==1) window.scrollTo(0,LastScroll);
}



function setkabmenu(k){
id_("KABINET").style.display="";
var i=0;	
for(i=0;i<Kabmenu.length;i++) {
if(i==k){Kabmenu[i].setAttribute("class", "kabmenu2");
if(i==5||i==4) Kabmenu[i].style.backgroundColor="#EBEBEB";
if(i==3)Kabmenu[i].style.backgroundImage="none";

}
else{
if(i==5||i==4) Kabmenu[i].style.backgroundColor="transparent";	
Kabmenu[i].setAttribute("class", "kabmenu");if(i==3) Kabmenu[i].style.backgroundImage="url(/resources/images/kab1.png)";
}
}
}




function hashChanged(hashus){
if(hashus) hashus=hashus.replace("/","");
if((hashus=="#personal")||(hashus=="personal")||(hashus=="#mydoc")||(hashus=="mydoc")||(hashus=="#scan")||(hashus=="scan")||(hashus=="#istoria")||(hashus=="istoria")||(hashus=="#mybonus")||(hashus=="mybonus")||(hashus=="#plata")||(hashus=="plata")) {if(loginstate==0) {
//showWarning(war205,"Зарегистрироваться","Отмена",1,null);
if(ttt>3) showWarningReg(); hashus="";return;};} 





prinarray[9]=new Array();

if((hashus=="#personal")||(hashus=="personal")||(hashus=="#scan")||(hashus=="scan")||(hashus=="#plata")||(hashus=="plata")||(hashus=="#mydoc")||(hashus=="mydoc")||(hashus=="#mybonus")||(hashus=="mybonus")){
if(demo==1) {hashus="";showWarning("Эта функция недоступна из виртуальной игры","OK","",0,null); return;};}
if(IndexScroll==0) IndexScroll=2; else IndexScroll=1;
if(Render.style.display!="none") LastScroll=window.scrollY;
var param="";    
var i=0;
for(i=0;i<Submenu.length;i++) {Submenu[i].style.display="none";}



//id_("ath").childNodes[1].style.display="none";

//Logged.childNodes[8].childNodes[1].style.display="none";
//Logged.childNodes[8].style.background="url(/resources/images/mbgn.png) center center  no-repeat";

if(hashus.indexOf("stavki/sport")>-1) {if(hashstate==0) loadPage2(hashus.replace("/#",""));hashstate=0;return;}
if(hashus.indexOf("plus")>-1){if(hashstateb==0) loadPage2(hashus.replace("/#",""));hashstateb=0;return;}

hideall();



if(id_("PROMO")) id_("PROMO").style.display="";


SportIndex=-1;
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

if(RegionIndex>-1)region.Display.childNodes[0].style.color="#FFFFFF";
CountryIndex=-1;
ChampionIndex=-1;
RegionIndex=-1;
SportState=0;
BltState=0;
LiveState=0;
FavoritState=0;
for(i=0;i<Smenu.length;i++){
Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

ttt1=1;
MenuClick(0);



if(hashus=="stavki"){
$('.ceo').hide();	
showTitle(true,"ВИДЫ СПОРТА");
id_("SEOSTAVKI").style.display="";	
id_("PRTABLE9").style.display="";		
//alert("ff");
window.currentAjax ? window.currentAjax.abort() : false; drawseo();
return;}

if(hashus.indexOf("bonusaccept")>-1){
$('.ceo').hide();	
showTitle(true,"ГАРАНТИРОВАННЫЙ БОНУС НА СТАРТЕ!");
Bonusaccept.style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
return;}





if((hashus=="#istoria")||(hashus=="istoria")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==0) {hashus="";return;};
History.style.display="";
$('.ceo').hide();
setkabmenu(0);
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ИСТОРИЯ СТАВОК');
extractIstoria();
window.scrollTo(0,0);
return;
}

if((hashus=="#mydoc")||(hashus=="mydoc")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==0) {hashus="";return;};
id_("MYDOC").style.display="";
$('.ceo').hide();
setkabmenu(5);
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'МОИ ДОКУМЕНТЫ');
window.scrollTo(0,0);
return;
}


if((hashus=="#mybonus")||(hashus=="mybonus")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==0) {hashus="";return;};
id_("MYBONUS").style.display="";
$('.ceo').hide();
setkabmenu(1);
if(extractbonusstate==1) extractBonus();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'МОИ БОНУСЫ');
window.scrollTo(0,0);
return;
}




if(hashus.indexOf("bonus2000")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"ПРИВЕТСТВЕННЫЙ БОНУС");
Bonus2000.style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
return;}


if(hashus.indexOf("videolive")>-1||hashus.indexOf("tennislive")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"ВИДЕО-ТРАНСЛЯЦИЯ");
id_("VIDEOLIVE").style.display="";
id_("PRV").innerHTML='<div id="PRTABLE7" style="width:742px;"></div>';
drawpr(7);
window.currentAjax ? window.currentAjax.abort() : false;
return;}

if(hashus.indexOf("videonhl")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"ВИДЕО-ТРАНСЛЯЦИЯ");
id_("VIDEONHL").style.display="";
id_("PRH").innerHTML='<div id="PRTABLE7" style="width:742px;"></div>';
//id_("PRTABLE7").style.display="";
drawpr(7);
window.currentAjax ? window.currentAjax.abort() : false;
return;}


if(hashus.indexOf("night")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"НОЧНОЙ ВИНЛАЙН");
id_("NIGHTBONUS").style.display="";
id_("PRTABLE8").style.display="";
drawpr(8);
window.currentAjax ? window.currentAjax.abort() : false;
return;}







if(hashus.indexOf("loyal")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"ПРОГРАММА ЛОЯЛЬНОСТИ");
id_("LOYAL").style.display="";
id_("PRTABLE6").style.display="";
drawpr(6);
window.currentAjax ? window.currentAjax.abort() : false;
return;}

if(hashus.indexOf("stavkomat")>-1){
hashnav2("/stavkomat/");
return;}	




if(hashus.indexOf("ntvpl")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"СТАВКОМАТ");
hashus=hashus.replace( '#',"").split('/').join("");
if(id_("ntvcombo").options.length==0){if(openstatesocket==1) webSocket.send("ntv_combo"); else setTimeout('webSocket.send("ntv_combo")',1000);}
else {clearInterval(ntvinterval);param=1;ntvtime();ntvinterval=setInterval(ntvtime,300000);}
id_("NTVPLUS").style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
i=parseInt(hashus.replace(/\/auth\//, '#').replace("ntvpl",""));
//if(i==0) nfmn(i);
if(!i||i==null) i=0;
if(i>=0&&i<5) nfmn(i);
if(i>10&&i<20) {ntvselect=i-11;nfmn(1); if(param==1) id_("ntvcombo").selectedIndex=ntvselect; ntvchange();}
if(i>100&&i<200) {ntvselect=i-101;nfmn(1);if(param==1) id_("ntvcombo").selectedIndex=ntvselect; ntvchange();}
if(i>20&&i<30) {ntvselect2=i-21;nfmn(2);}
if(i>200&&i<300) {ntvselect2=i-201;nfmn(2);}
return;}



if(hashus.indexOf("regcomplete")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"РЕГИСТРАЦИЯ ЗАВЕРШЕНА");
Regfinal.style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
return;}




if(hashus.toLowerCase().indexOf("nybonus")>-1){
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();	
showTitle(true,"НОВОГОДНИЙ БОНУС");
NYbonus.style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
return;}



if(hashus.indexOf("payment")>-1) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
Schet.style.display="";
$('.ceo').hide();
setkabmenu(3);
if(crdcrd==0&&loginstate==1) {webSocket.send("get_credit_cards"); crdcrd=1; }
if(pcrdcrd==0&&loginstate==1) {webSocket.send("get_transactionid"); pcrdcrd=1;}

window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ПОПОЛНЕНИЕ / ВЫВОД СРЕДСТВ');
window.scrollTo(0,0);
return;}

if((hashus=="#linia")||(hashus=="linia")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
Linia.style.display="";
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'КАК ЧИТАТЬ ЛИНИЮ?');
window.scrollTo(0,0);
return;}


if((hashus=="#plata")||(hashus=="plata")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==0) {hashus="";return;};Plata.style.display="";
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ИСТОРИЯ ПЛАТЕЖЕЙ');
setkabmenu(2);
if(extractplatastate==1) extractPlata();
window.scrollTo(0,0);
return;}


if((hashus=="#results")||(hashus=="results")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
Result.style.display="";
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'РЕЗУЛЬТАТЫ');
if(openstatesocket==1){
if(resultstate==0) {webSocket.send("result_sports");
return;
};extractResult();}
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'РЕЗУЛЬТАТЫ');
window.scrollTo(0,0);
return;}


if((hashus=="#remember1")||(hashus=="remember1")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==1) {hashus="";return;}; rem1key=generatekey(Rem1[1].previousSibling);
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ВОССТАНОВЛЕНИЕ ЛОГИНА И ПАРОЛЯ');

Remember1.style.display="";
window.scrollTo(0,0);
return;}
if((hashus=="#remember2")||(hashus=="remember2")) {if(loginstate==1){hashus="";return;}
$('.ceo').hide();
Remember2.style.display="";
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ВОССТАНОВЛЕНИЕ ЛОГИНА И ПАРОЛЯ');
///rem2key=generatekey(Rem2[2].previousSibling);
window.scrollTo(0,0);
return;}

if((hashus=="#personal")||(hashus=="personal")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(loginstate==0) {hashus="";return;}; if(demo==1) {hashus="";return;};
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
setkabmenu(4);
showTitle(true, 'ЛИЧНАЯ ИНФОРМАЦИЯ');
Familia.style.display="";
if(countrylogin==0) {countrylogin=1;getcountry();}
window.scrollTo(0,0);
return;
}

if((hashus=="#scan")||(hashus=="scan")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}	
$('.ceo').hide();
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true, 'ДОКУМЕНТЫ');
Scan.style.display="";
window.scrollTo(0,0);
return;}


//if((Reg10[5])) {
//cokey=generatekey(Reg10[5].previousSibling);    
//Reg10[5].value="";
//Reg10[5].style.border="";}

if(hashus.indexOf("registration")>-1) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
if(id_("NTVWAR").style.display=="none") 
CloseWarning();

if((loginstate==1)&&(demo==0)) {hashus="";
try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};return;};
$('.ceo').hide();
if(echip.length==0){if(openstatesocket==1) webSocket.send("GET_FAVTEAM"); else setTimeout('webSocket.send("GET_FAVTEAM")',1000);}

Register.style.display="";//Filtru.style.display="none";
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true,'ОТКРЫТЬ СЧЕТ');
//regkey=generatekey(Reg4[20].previousSibling);
if(demo==1) {Reg4[7].value=mClient.email;Reg4[7].disabled="disabled";}else Reg4[7].disabled="";
_gaq.push(['_trackPageview',"virtual/regstart"]);
window.scrollTo(0,0);
if(countrystate==0) getcountry();
return;}


if((hashus=="#demoreg")||(hashus=="demoreg")) {
if(authstate2==null) {authstate2=hashus;loadauth();return;}
CloseWarning();if((loginstate==1)||(demo==1)) {hashus="";
try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};
return;};
$('.ceo').hide();
id_("DEMOREG").style.display="";//Filtru.style.display="none";
window.currentAjax ? window.currentAjax.abort() : false;
showTitle(true,'ВИРТУАЛЬНАЯ ИГРА');
demokey=generatekey(Reg4[26].previousSibling);
_gaq.push(['_trackPageview',"virtual/demoregstart"]);
window.scrollTo(0,0);
return;}




if(id_("ajax-content"))id_("ajax-content").style.display = '';
if(id_("PRTABLE0")&&id_("PRTABLE0").style.display=="none") {id_("PRTABLE0").style.display="";drawpr(0);}


if(hashus=="") showTitle(false);

window.scrollTo(0,0);
}



function loginexit(){
//bonuskoef=1000;
//for(i=0;i<25;i++) bonusprocent[i]=0;	
hisloyal.splice(0);
hisloyalm.splice(0);
hisloyalv.splice(0);
var i=0;
j77=0;	
hisloyastate=0;
auth77="";

id_("redline").style.display="none";
if(authstate!=null){
id_("innermybonus").innerHTML="";
id_("innermybonus2").innerHTML='<div style="float:left;width:100%;text-align:center;height:60px;font-size:14px;">К сожалению, на данный момент у Вас нет никаких бонусов.<br/>Примите участие в одной из наших <a href="/novosti/" style="color:#E97323;text-decoration:none;">акции</a> и заработайте больше!</div>';
id_("loyalscale").style.display="none";
}

id_("loyal44").style.display=id_("loyal15").style.display=id_("lscale").style.display="none";
id_("imgloyal4").style.display=id_("lphone").style.display=id_("fbookl").style.display="";

if(iphone==1){id_("android").style.marginRight="406px";id_("android").style.display="";}   
id_("loyaln").innerHTML="&nbsp;"
id_("loyald").innerHTML="&nbsp;"



initloyal();
//drawhisloyal();
//if(href.indexOf("obratnaya-svyaz")>-1&&Reg10[3]) Reg10[3].value="";	
id_("CHECKBONUS").previousSibling.style.display="none";
for(i=0;i<2;i++){cs_("bonusref")[i].style.display="";cs_("bonusacc")[i].style.display="";}
id_("CHECKBONUS").style.display="";
id_("CHECKBONUS").nextSibling.style.display="";

cs_("bonss")[0].innerHTML="&nbsp;"
cs_("bonss")[1].innerHTML="&nbsp;";
cs_("bonss")[2].innerHTML="&nbsp;";
id_("setbonus").style.display="none";
id_("setbonus").innerHTML="";
id_("setbonus").onclick=null;

id_("Summ62").style.display=id_("Summ63").style.display=id_("MAXIMUMDAY").style.display=id_("MAXIMUMLIVE").style.display="none";

if(authstate!=null){
if(Reg7[25].options.length==4) Reg7[25].options[3]=null;
removeAll(Reg155[0]);
Reg155[0].options.add(new Option("Новая карта",0));
removeAll(Reg250[0]);
id_("bon20000").innerHTML=bon2000text1;
//id_("bon20001").innerHTML="24";
//Bonus1000.childNodes[0].childNodes[0].innerHTML="24:00:00";
Bonus2000.childNodes[0].childNodes[0].innerHTML='<span style="float:left;width:75px;">24</span><span style="float:left;width:74px;">00</span></span>';
var i=0;
for(i=1;i<10;i++){if(i==3||i==4) continue; Reg155[i].value="";}
for(i=1;i<8;i++){Reg250[i].value="";}
Reg4[7].disabled="";

}

if(window.location.href.indexOf("personal")>-1||window.location.href.indexOf("mydoc")>-1||window.location.href.indexOf("mybonus")>-1||window.location.href.indexOf("plata")>-1||window.location.href.indexOf("istoria")>-1) try{window.history.pushState("", "", "/");hashChanged("");} catch(e){window.location.hash="";};	
countrylogin=0;	
crdarray=new Array();
pcrdarray=new Array();
freebetarray.splice(0);
crdcrd=0;
pcrdcrd=0;
cs_("item")[1].style.display="none";
cs_("fm2")[0].style.display=cs_("fm2")[0].nextSibling.style.display="none";

//Money1[11].style.display="none";
//Money2[11].style.display="none";
//id_("PLTER").style.display="none";

clearfreebet();
bonusnewindex=0;
bontime=0;
bontimestate=0;
bonusactiv=0;


//Open4[Open4.length-6].value="";

deleteCookie("prl", "/", "");
deleteCookie("lgn", "/", "");

//Left22.style.display="";
bonusnew=0;	
if(iphone==0){
loyalxlop=0;	
if(xlopp[1]==1) xlopus2(1,0);
if(xlopp[2]==0) xlopus2(2,0);
if(xlopp[3]==0) xlopus2(3,0);}



clearInterval(cuinterval);
Cuponslide.style.display="none";
//cuponshape.style.display="none";
Cuponslide.previousSibling.style.display="";

//Cuponslide.previousSibling.style.backgroundColor="#EBEBEB";
//Cuponslide.previousSibling.style.borderTop="1px solid #C1C1C1";

Cuponslide.childNodes[0].style.marginLeft="-215px";
Bonus.Max=1;
sendstate=0;
if(loginstate==1&&document.getElementsByName('login').length>0){
document.getElementsByName('login')[0].value='login';
document.getElementsByName('password')[0].value='password';
;}

summainput.disabled="";
CuponBet.style.display="none";
id_("ORDINARL").style.display="";
Cupon.childNodes[0].src="/resources/images/cupon333.png?7";
cuponbalance.childNodes[0].innerHTML="Баланс:&nbsp;"+zeroinsert(Round2(mClient.balance),0);
CuponBet.nextSibling.style.display="none";
expressflag=lastexpressflag;
if(expressflag==0) ordinarclick();
if(expressflag==1) expressclick();
if(expressflag==2) systemclick();

id_("OPBUTTON5").parentNode.style.display="none";


ordinarclose();
clearRegister();
clearRegister3();
express.innerHTML="";
system.innerHTML="";
Msh.innerHTML="";
delstavca2();
drawscroll();
calckoef(1);
savestate=saveenabled();
statusr=0;
rclientindex3=-1;
rclientindex2=-1;
rclientindex=-1;
demo=0;    
Unlogged.style.display="";
Logged.style.display="none";
cuponbalance.childNodes[0].innerHTML="";
Msh2.innerHTML="";
userlogin="";
userpass="";
loginstate=0;
mClient=new TClient();
drawhisloyal();
checkrapid.checked=false;
ordvalut();

//id_("popolniti").onclick=newreg5;//hideplataopen;
//id_("popolniti").innerHTML="Назад";
newreg5();
id_("avtoritar").innerHTML="Авторизация";

drawscroll();
CuponBet.innerHTML='<div style="width:235px;float:left; background-color:#FFFFFF;height:48px; padding-top:16px; text-align:center; font-size:12px;color:#000000;">Вы не авторизированы</div>';
if(authstate!=null){
if(ntvcombo.length>0){for(i=0;i<ntvcombo.length;i++) ntvcombo[i].top_.splice(0);
if(window.location.href.indexOf("ntvpl")>-1) ntvchange();}
hidentvreg(0);
ntvlogin=0;
}


if((window.location.href.indexOf("istoria")>-1)||(window.location.href.indexOf("plata")>-1)||(window.location.href.indexOf("mydoc")>-1)||(window.location.href.indexOf("scan")>-1)||(window.location.href.indexOf("personal")>-1)||(window.location.href.indexOf("mybonus")>-1)) loadPage("/");

if((window.location.hash.indexOf("istoria")>-1)||(window.location.hash.indexOf("plata")>-1)||(window.location.hash.indexOf("mydoc")>-1)||(window.location.hash.indexOf("mybonus")>-1)||(window.location.hash.indexOf("scan")>-1)||(window.location.hash.indexOf("personal")>-1)) window.location.hash="";

var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
if(page2=="/"||page2=="") loadPage("/");
//Cookie.del('__userdata');
plusdemo();            	
}

function Combin(n,k){
if((k>n)||(k<1)||(n<1)) return 0;    
k=parseInt(k);
n=parseInt(n);
var i=0;
var j=0;
var m=1;
var l=1;
for(i=2;i<k+1;i++) m=m*i;
for(i=2;i<n-k+1;i++) m=m*i;
for(i=2;i<n+1;i++) l=l*i;
return l/m;}

function resultdatechange(){
var dt=new Date(); dt.setTime(ResultBoxData.options[ResultBoxData.selectedIndex].value);
var tempus=ResultBoxSport.options[ResultBoxSport.selectedIndex].value;
removeAll(ResultBoxSport);
var j=0;
var i=0;

for(j=0;j<sporting.length;j++) for(i=0;i<datesport[j].length;i++) if(datesport[j][i]==ResultBoxData.options[ResultBoxData.selectedIndex].value/1000)
{ResultBoxSport.options.add(new Option(sportname[j],sporting[j]));break;}

if(tempus>-1){
for(i=0;i<ResultBoxSport.length;i++) if(tempus==ResultBoxSport.options[i].value) {ResultBoxSport.selectedIndex=i;break;};
if(i==ResultBoxSport.length) ResultBoxSport.selectedIndex=0;}
extractResult();};

function extractResult(){ 
sendindex=0;
sendarray.splice(0);
writeUnsignedInt(ResultBoxSport.options[ResultBoxSport.selectedIndex].value);
writeUnsignedInt(ResultBoxData.options[ResultBoxData.selectedIndex].value/1000);
sendarray[sendindex]=0;
webSocket.send("results");
webSocket.send(EncodeBase64_2(sendarray));
};

function extractPlata(){
sendindex=0;
sendarray.splice(0);
writeUnsignedInt(Math.round(PlataBoxData2.options[PlataBoxData2.selectedIndex].value));
writeUnsignedInt(Math.round(PlataBoxData1.options[PlataBoxData1.selectedIndex].value));
sendarray[sendindex]=0;
webSocket.send("clientaccounts");
webSocket.send(EncodeBase64_2(sendarray));
extractplatastate=0;
};

function extractBonus(){
sendindex=0;
sendarray.splice(0);
writeUnsignedInt(0);
writeUnsignedInt(0);
sendarray[sendindex]=0;
webSocket.send("clientaccounts");
webSocket.send(EncodeBase64_2(sendarray));
extractbonusstate=0;
};


function extractResult3(){
var i=0;
var j=0;
var color=0;
var string="";
var clr=new Array("#EBEBEB","#FFFFFF")

for(i=0;i<mChamps.length;i++){
if((ResultBoxChamp.selectedIndex==0)||(mChamps[i]==ResultBoxChamp.options[ResultBoxChamp.selectedIndex].value)){


string=string+'<div class="cham1"><div class="cham4" style="margin-left:20px;">'+mChamps[i]+'</div></div>';


for(j=0;j<mResults.length;j++) if(mResults[j].Champ==mChamps[i])
{color=(color+1)%2; string=string+'<div style="float:left;width:742px;background-color:'+clr[color]+';border-bottom:1px solid #D8D8D8;">'+
'<div style="float:left; margin-left:10px; width:75px;border-right:1px solid #DADADA;height:25px;overflow:hidden;"><div class="padd2">'+mResults[j].Data+'</div></div>'+
'<div style="float:left; margin-left:5px; width:418px;border-right:1px solid #DADADA;height:25px;font-weight:bold;overflow:hidden;"><div class="padd2">'+mResults[j].U1+" - "+mResults[j].U2+'</div>';

if(mResults[j].ID_RADAR>0) string=string+'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+mResults[j].ID_RADAR+'" target="_blank"><img style="float:right;margin-right:4px;margin-top:-16px;" src="/resources/images/143.png?7" /></a>';
string=string+'</div>'+
'<div style="float:left; margin-left:5px; width:220px;height:25px;overflow:hidden;font-weight:bold;"><div class="padd2">'+mResults[j].score+'</div></div></div>'
}    
if(ResultBoxChamp.selectedIndex!=0) break;}
;}

InnerResult.innerHTML=string;

;}



function extractIstoria(){

var i=0;	
var j=0;
var dif=0
var string="";
var colorhis=0;



if((mClient.DATE_STAVCA.length==0)&&(istoriaction==0)){
Istoria.innerHTML='<span style="float:left;margin-top:20px;color:#FFFFFF;font-size:14px;width:702px;font-weight:bold;text-align:center;">Вы еще не сделали ни одной ставки</span>';
return;}

for(i=0;i<mClient.DATE_STAVCA.length;i++)
if(mClient.DATE_STAVCA[i].getTime()==IstoriaBoxData.options[IstoriaBoxData.selectedIndex].value){clientindex=i;break;};

if((IstoriaBox.selectedIndex==3)&&(istoriaction==0)){
for(i=0;i<nH.length;i++){
if(colorhis==0) nH[i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon1;
else  nH[i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon2;
colorhis=(colorhis+1)%2;


nH[i].string=nH[i].string+'<div style="float:left;width:744px;position:relative;"><div style="float:left; margin-left:10px; width:63px;overflow:hidden;margin-bottom:5px;"><div class="padd">'+nH[i].Data+'</div></div>'+
'<div style="float:left; margin-left:5px; width:284px;overflow:hidden; margin-bottom:5px;"><div class="padd">'+nH[i].mHl[0].hevent+'</div></div>'+
'<div style="float:left; margin-left:5px; width:50px;overflow:hidden;"><div class="padd">'+nH[i].mHl[0].koef+'</div></div>';


if(nH[i].mHl[0].ID_RADAR>0&&(nH[i].mHl[0].ID_EVENT<1000000000||nH[i].mHl[0].LIVE==1))
nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+nH[i].mHl[0].score+'</div></div>'+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+nH[i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>';
else if(nH[i].mHl[0].ID_SPORT==110&&nH[i].mHl[0].ID_RADAR>0) nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+nH[i].mHl[0].score+'</div></div>'+
'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+nH[i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>';


else nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:176px;overflow:hidden;"><div class="padd">'+nH[i].mHl[0].score+'</div></div>';

nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:65px;overflow:hidden;"><div class="padd">'+nH[i].Summa+'</div></div>';

if((nH[i].SUMMA_V-nH[i].SUMM_STAVKI<0)||(nH[i].HOLD>0))
nH[i].string=nH[i].string+'<div style="float:left; font-weight:bold;margin-left:5px; width:70px;overflow:hidden;"><div class="padd">'+nH[i].Itog+'</div></div></div>';else
nH[i].string=nH[i].string+'<div style="float:left; font-weight:bold;margin-left:5px;color:#46b217;width:70px;overflow:hidden;"><div class="padd">'+nH[i].Itog+'</div></div></div>';

for(j=1;j<nH[i].mHl.length;j++){

nH[i].string=nH[i].string+'<div style="float:left;width:744px;"><div style="float:left; margin-left:10px; width:63px;"><div class="padd">'+'</div></div>'+'<div style="float:left; margin-left:5px; width:284px; margin-bottom:5px;">'+nH[i].mHl[j].hevent+'</div>'+
'<div style="float:left; margin-left:5px; width:50px;">'+nH[i].mHl[j].koef+'</div>';


if(nH[i].mHl[j].ID_RADAR>0&&(nH[i].mHl[j].ID_EVENT<1000000000||nH[i].mHl[j].LIVE==1))
nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+nH[i].mHl[j].score+
'</div><a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+nH[i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';
else if(nH[i].mHl[j].ID_SPORT==110&&nH[i].mHl[j].ID_RADAR>0) nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+nH[i].mHl[j].score+
'</div><a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+nH[i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';


else nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:176px;">'+nH[i].mHl[j].score+'</div>';

nH[i].string=nH[i].string+'<div style="float:left; margin-left:5px; width:65px;">'+'</div>'+
'<div style="float:left; margin-left:5px; width:70px;">'+'</div>'+
'</div>';}
nH[i].string=nH[i].string+'</div>';
string=string+nH[i].string;}
Istoria.innerHTML=string;
} 

else if(istoriaction>0){
for(i=0;i<anH.length;i++){
if(colorhis==0) anH[i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon1;
else  anH[i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon2;
colorhis=(colorhis+1)%2;

anH[i].string=anH[i].string+'<div style="float:left;width:744px;position:relative;"><div style="float:left; margin-left:10px; width:63px;overflow:hidden;margin-bottom:5px;"><div class="padd">'+anH[i].Data+'</div></div>'+
'<div style="float:left; margin-left:5px; width:284px;overflow:hidden; margin-bottom:5px;"><div class="padd">'+anH[i].mHl[0].hevent+'</div></div>'+
'<div style="float:left; margin-left:5px; width:50px;overflow:hidden;"><div class="padd">'+anH[i].mHl[0].koef+'</div></div>';

if(anH[i].mHl[0].ID_RADAR>0&&(anH[i].mHl[0].ID_EVENT<1000000000||anH[i].mHl[0].LIVE==1))
anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+anH[i].mHl[0].score+'</div></div>'+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+anH[i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>';else
if(anH[i].mHl[0].ID_SPORT==110&&anH[i].mHl[0].ID_RADAR>0)
anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+anH[i].mHl[0].score+'</div></div>'+
'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+anH[i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>';

else anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:176px;overflow:hidden;"><div class="padd">'+anH[i].mHl[0].score+'</div></div>';

anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:65px;overflow:hidden;"><div class="padd">'+anH[i].Summa+'</div></div>';

if((anH[i].SUMMA_V-anH[i].SUMM_STAVKI<0)||(anH[i].HOLD>0))
anH[i].string=anH[i].string+'<div style="float:left; font-weight:bold;margin-left:5px; width:70px;overflow:hidden;"><div class="padd">'+anH[i].Itog+'</div></div></div>';else
anH[i].string=anH[i].string+'<div style="float:left; font-weight:bold;margin-left:5px;color:#46b217;width:70px;overflow:hidden;"><div class="padd">'+anH[i].Itog+'</div></div></div>';

for(j=1;j<anH[i].mHl.length;j++){

anH[i].string=anH[i].string+'<div style="float:left;width:744px;"><div style="float:left; margin-left:10px; width:63px;"><div class="padd">'+'</div></div>'+'<div style="float:left; margin-left:5px; width:284px; margin-bottom:5px;">'+anH[i].mHl[j].hevent+'</div>'+
'<div style="float:left; margin-left:5px; width:50px;">'+anH[i].mHl[j].koef+'</div>';

if(anH[i].mHl[j].ID_RADAR>0&&(anH[i].mHl[j].ID_EVENT<1000000000||anH[i].mHl[j].LIVE==1))
anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+anH[i].mHl[j].score+
'</div><a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+anH[i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';else if(anH[i].mHl[j].ID_SPORT==110&&anH[i].mHl[j].ID_RADAR>0)
anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+anH[i].mHl[j].score+
'</div><a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+anH[i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';
else anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:176px;">'+anH[i].mHl[j].score+'</div>';


anH[i].string=anH[i].string+'<div style="float:left; margin-left:5px; width:65px;">'+'</div>'+
'<div style="float:left; margin-left:5px; width:70px;">'+'</div>'+
'</div>';}
anH[i].string=anH[i].string+'</div>';

string=string+anH[i].string;}
Istoria.innerHTML=string;

}
else{
if(mClient.DATE_STAVCA_STATUS[clientindex]==0){
//mClient.DATE_STAVCA_STATUS[clientindex]=1;
webSocket.send("history");
sendindex=0;
sendarray.splice(0);
writeInt(mClient.DATE_STAVCA[clientindex].getTime()/1000);
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));return;}

for(i=0;i<rH[clientindex].length;i++)

if((IstoriaBox.selectedIndex==0)||((IstoriaBox.selectedIndex==1)&&(rH[clientindex][i].SUMMA_V-rH[clientindex][i].SUMM_STAVKI>=0)&&(rH[clientindex][i].STATE==1)&&(rH[clientindex][i].HOLD==0))||((IstoriaBox.selectedIndex==2)&&(rH[clientindex][i].SUMMA_V-rH[clientindex][i].SUMM_STAVKI<0)&&(rH[clientindex][i].STATE==1))||((IstoriaBox.selectedIndex==3)&&(rH[clientindex][i].STATE!=1))||((IstoriaBox.selectedIndex==4)&&(rH[clientindex][i].HOLD==1))||((IstoriaBox.selectedIndex==5)&&(rH[clientindex][i].HOLD==2))) {
if(colorhis==0) rH[clientindex][i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon1;
else  rH[clientindex][i].string='<div style="float:left;width:744px;position:relative;overflow:hidden;">'+colon2;
colorhis=(colorhis+1)%2;


rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left;width:744px;position:relative;"><div style="float:left; margin-left:10px; width:63px;overflow:hidden;margin-bottom:5px;"><div class="padd">'+rH[clientindex][i].Data+'</div></div>'+
'<div style="float:left; margin-left:5px; width:284px;overflow:hidden; margin-bottom:5px;"><div class="padd">'+rH[clientindex][i].mHl[0].hevent+'</div></div>'+
'<div style="float:left; margin-left:5px; width:50px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].mHl[0].koef+'</div></div>';

if(rH[clientindex][i].mHl[0].ID_RADAR>0&&(rH[clientindex][i].mHl[0].ID_EVENT<1000000000||rH[clientindex][i].mHl[0].LIVE==1))
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].mHl[0].score+'</div></div>'+
'<a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+rH[clientindex][i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>'; else 
if(rH[clientindex][i].mHl[0].ID_SPORT==110&&rH[clientindex][i].mHl[0].ID_RADAR>0)
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:159px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].mHl[0].score+'</div></div>'+
'<a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+rH[clientindex][i].mHl[0].ID_RADAR+'" target="_blank" ><div class="ad44" style="margin-top:9px;"></div></a>';


else rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:176px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].mHl[0].score+'</div></div>';

rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:65px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].Summa+'</div></div>';

if((rH[clientindex][i].SUMMA_V-rH[clientindex][i].SUMM_STAVKI<0)||(rH[clientindex][i].HOLD>0))
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; font-weight:bold;margin-left:5px; width:70px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].Itog+'</div></div></div>';else
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; font-weight:bold;margin-left:5px;color:#46b217;width:70px;overflow:hidden;"><div class="padd">'+rH[clientindex][i].Itog+'</div></div></div>';

for(j=1;j<rH[clientindex][i].mHl.length;j++){

rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left;width:744px;"><div style="float:left; margin-left:10px; width:63px;"><div class="padd">'+'</div></div>'+'<div style="float:left; margin-left:5px; width:284px; margin-bottom:5px;">'+rH[clientindex][i].mHl[j].hevent+'</div>'+
'<div style="float:left; margin-left:5px; width:50px;">'+rH[clientindex][i].mHl[j].koef+'</div>';


if(rH[clientindex][i].mHl[j].ID_RADAR>0&&(rH[clientindex][i].mHl[j].ID_EVENT<1000000000||rH[clientindex][i].mHl[j].LIVE==1))
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:158px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+rH[clientindex][i].mHl[j].score+
'</div><a href="http://www.stats.betradar.com/s4/?clientid=240&language=ru&matchid='+rH[clientindex][i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';else 
if(rH[clientindex][i].mHl[j].ID_SPORT==110&&rH[clientindex][i].mHl[j].ID_RADAR>0)
rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:158px;overflow:hidden;"><div style="float:left;width:0px;height:10px;"></div>'+rH[clientindex][i].mHl[j].score+
'</div><a href="http://vfl.betradar.com/s4/?clientid=476&language=ru&matchid='+rH[clientindex][i].mHl[j].ID_RADAR+'" target="_blank" ><div class="ad44"></div></a>';


else rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:176px;">'+rH[clientindex][i].mHl[j].score+'</div>';


rH[clientindex][i].string=rH[clientindex][i].string+'<div style="float:left; margin-left:5px; width:65px;">'+'</div>'+
'<div style="float:left; margin-left:5px; width:70px;">'+'</div>'+
'</div>';}

rH[clientindex][i].string=rH[clientindex][i].string+'</div>';

string=string+rH[clientindex][i].string;}
Istoria.innerHTML=string;	
}
}




function setBonus(mH){
var l=0;
var i=0;
var j=0;
var N2=0;

if(mH.mod==1){
	
			
            mH.Data="<b>A: "+mH.ID_STAVKA+"</b>";
            mH.Data=mH.Data+"<br />"+zeroadd(mH.DATE_STAVKI2.getDate())+"/"+zeroadd(mH.DATE_STAVKI2.getMonth()+1)+" "+zeroadd(mH. DATE_STAVKI2.getHours())+":"+zeroadd(mH.DATE_STAVKI2.getMinutes());
            if(mH.ORD_EXP_SYS==1) mH.Express="";
            if(mH.ORD_EXP_SYS==2) {if(mH.KOL>1)mH.Subtitle=express1;else mH.Subtitle="";}
            if(mH.ORD_EXP_SYS==3) mH.Express=system1+"<br />"+mH.SYS_VAL+" "+ system2+" "+ mH.KOL+"<br />"+Combin(mH.KOL,mH.SYS_VAL)+" "+system3.substr(0,3)+".";
            mH.Summa=zeroinsert(Math.round(mH.SUMM_STAVKI*100)/100,0);

            if(mH.RETURN>0) mH.Summa=mH.Summa+"<br />"+zeroinsert2(Math.round(mH.RETURN*100)/100,1);

if((mH.STATE>0)&&(mH.HOLD==0)){if(mH.ACTION==4) mH.Itog=zeroinsert2(Math.round((mH.SUMMA_V)*100)/100,1);
else mH.Itog=zeroinsert2(Math.round((mH.SUMMA_V-mH.SUMM_STAVKI+mH.RETURN)*100)/100,1); }
else{
if(mH.HOLD==1) mH.Itog="Обработке";
if(mH.HOLD==2) mH.Itog="Отклонена";
if(mH.HOLD==0)mH.Itog="";
}

            for(j=0;j<mH.KOL;j++){
			
		   if(mH.mHl[j].ID_TIP_RADAR==1111116666||mH.mHl[j].ID_TIP_RADAR==1111116667) {//mH.mHl[j].Title=mH.mHl[j].U2;
		   mH.mHl[j].ID_RADAR=0;
		   if(mH.mHl[j].ID_TIP_RADAR==1111116666) temp4="Специальные ставки (победитель)"; else temp4="Специальные ставки (призер)";
		   
		    if(mH.mHl[j].ID_COUNTRY==4&&mH.mHl[j].U2.indexOf("Чемпионат Мира 2014 - Итоги выступления")>-1)
		    {if(mH.mHl[j].U1=="Победитель") temp4="Специальные ставки (станет чемпионом)";else  temp4="Специальные ставки (стадия вылета из турнира)"; }
		   
		    //mH.mHl[j].Free=temp4; 
			mH.mHl[j].hevent='<b><span style="color:#F47621;">'+temp4+'</span>'+'<br />'+mH.mHl[j].U1+" "+Vkoef2(mH.mHl[j].KOEF_STAVKI)+'</b>';
            //mH.mHl[j].R=mH[i].mHl[j].U1;
			            mH.mHl[j].hevent=mH.mHl[j].hevent+"<br />"+zeroadd(mH.mHl[j].DATE_EVENT2.getDate())+"/"+zeroadd(mH.mHl[j].DATE_EVENT2.getMonth()+1)+" "+zeroadd(mH.mHl[j].DATE_EVENT2.getHours())+":"+zeroadd(mH.mHl[j].DATE_EVENT2.getMinutes());

			}
	        else{
		    for(l=0;l<mTip_Line.length;l++)if((mH.mHl[j].ID_TIP_RADAR==mTip_Line[l].ID_TIP_RADAR)&&(mH.mHl[j].LIVE==mTip_Line[l].Live)) break;
            if(l==mTip_Line.length) return;

             
            if(mTip_Line[l].FREE_TEXT_R.indexOf("@n")>-1)
            temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH.mHl[j].DOP_KOEF.substr(2,1)).replace("@n",mH.mHl[j].DOP_KOEF.substr(0,1)).replace("@y",mH.mHl[j].DOP_KOEF.substr(6,1));
            else temp4=mTip_Line[l].FREE_TEXT_R.replace("@x",mH.mHl[j].DOP_KOEF).replace("@h",mH.mHl[j].DOP_KOEF.split("/")[1]).replace("@z",mH.mHl[j].DOP_KOEF.split("/")[0]);
            if(mH.mHl[j].ID_SPORT==2) temp4=temp4.replace("@p",quarter);
            if(mH.mHl[j].ID_SPORT==4) temp4=temp4.replace("@p",period);
            if(mH.mHl[j].ID_SPORT==3) temp4=temp4.replace("@p",inning);
            if(mH.mHl[j].ID_SPORT==16) temp4=temp4.replace("@p",quarter);
			if(mH.mHl[j].ID_SPORT==19) temp4=temp4.replace("@p","фрейм");

            if((mH.mHl[j].ID_SPORT==5)||(mH.mHl[j].ID_SPORT==23)||(mH.mHl[j].ID_SPORT==22)||(mH.mHl[j].ID_SPORT==34)||(mH.mHl[j].ID_SPORT==31)||(mH.mHl[j].ID_SPORT==20)) temp4=temp4.replace("@p",sete);
			
			if(mH.mHl[j].ID_COUNTRY==4&&mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="@w"&&mH.mHl[j].DOP_KOEF=="Победитель") 
			temp4="Специальные ставки (станет чемпионом)";
			
            mH.mHl[j].hevent='<b><span style="color:#F47621;">'+temp4+'</span>';

            
            if((mTip_Line[l].ROS_FAV==0)&&(mH.mHl[j].DOP_KOEF.length>0)&&(mTip_Line[l].FREE_TEXT_R.indexOf("@x")==-1)){ mH.mHl[j].hevent=mH.mHl[j].hevent+" "+totkoef(mH.mHl[j].DOP_KOEF).replace("2@","").replace("1@","");
			if(mH.mHl[j].DOP_KOEF.indexOf("1@")>-1) mH.mHl[j].hevent=mH.mHl[j].hevent+" ("+mH.mHl[j].U1+")";
			if(mH.mHl[j].DOP_KOEF.indexOf("2@")>-1) mH.mHl[j].hevent=mH.mHl[j].hevent+" ("+mH.mHl[j].U2+")";
			}
            if((mTip_Line[l].ROS_FAV==1)&&(mH.mHl[j].FAVORIT==(mH.mHl[j].ODD_NOMER))) mH.mHl[j].hevent=mH.mHl[j].hevent+" "+favkoef(mH.mHl[j].DOP_KOEF);else{
            if((mTip_Line[l].ROS_FAV==1)&&(mH.mHl[j].FAVORIT!=(mH.mHl[j].ODD_NOMER))) mH.mHl[j].hevent=mH.mHl[j].hevent+" "+favkoef2(mH.mHl[j].DOP_KOEF);else
            if((mTip_Line[l].ROS_FAV==1)&&(mH.mHl[j].FAVORIT==0)) mH.mHl[j].hevent=mH.mHl[j].hevent+" "+favkoef3(mH.mHl[j].DOP_KOEF);}


            if(mH.mHl[j].LIVE==1)
            mH.mHl[j].hevent=mH.mHl[j].hevent+'<span style="color:#F47621;">'+' ['+mH.mHl[j].SCORE_ST+']'+'</span>';


            temp4=mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1];
			
            if(mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="@w")  temp4=mH.mHl[j].DOP_KOEF; 
            if(mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="1")    temp4=mH.mHl[j].U1;
            if(mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="2")    temp4=mH.mHl[j].U2;
            if((mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="X")||(mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]=="x")) temp4=Nichya;
            mH.mHl[j].hevent=mH.mHl[j].hevent+"<br />"+temp4+" "+Vkoef2(mH.mHl[j].KOEF_STAVKI)+'</b>';
			
			
            mH.mHl[j].hevent=mH.mHl[j].hevent+"<br />"+zeroadd(mH.mHl[j].DATE_EVENT2.getDate())+"/"+zeroadd(mH.mHl[j].DATE_EVENT2.getMonth()+1)+" "+zeroadd(mH.mHl[j].DATE_EVENT2.getHours())+":"+zeroadd(mH.mHl[j].DATE_EVENT2.getMinutes());
            
			if(mTip_Line[l].R[mH.mHl[j].ODD_NOMER-1]!="@w") mH.mHl[j].hevent=mH.mHl[j].hevent+"<br />"+mH.mHl[j].U1+" - "+mH.mHl[j].U2;
			
			
			}

            for(l=0;l<mSport.length;l++) if(mH.mHl[j].ID_SPORT==mSport[l].ID_SPORT){mH.mHl[j].hevent=mH.mHl[j].hevent+"<br /><b>"+mSport[l].NAME_RUS+"</b>";break;}

            if(mH.mHl[j].ID_SPORT!=110){for(l=0;l<mCountry.length;l++) if(mH.mHl[j].ID_COUNTRY==mCountry[l].ID_COUNTRY){mH.mHl[j].hevent=mH.mHl[j].hevent+" "+mCountry[l].NAME_RUS;break;}}
            
			mH.mHl[j].hevent=mH.mHl[j].hevent+" "+mH.mHl[j].CHAMP;


            if(mH.mHl[j].STATE==1)mH.mHl[j].koef=Vkoef2(mH.mHl[j].KOEF_WIN);
            else mH.mHl[j].koef=Vkoef2(mH.mHl[j].KOEF_STAVKI);

            if(mH.mHl[j].STATE==1)mH.mHl[j].score=""+mH.mHl[j].CLEAR_SCORE.split("(").join("<br />(");
            else mH.mHl[j].score="";



}


            if((mH.ORD_EXP_SYS==2)&&(mH.KOL>1)) mH.Express=mH.Express+"<br />к "+Vkoef2(mH.KOEF_STAVKI);
            mH.Data=mH.Data+"<br /><b>"+mH.Express+"</b>";
	
	
	
}
























if(mH.ACTION==4){
mH.KOL++;
l=mH.mHl.length;	
mH.mHl[l]=new THistoryline(mH.mod);
mH.mHl[l].KOEF_STAVKI=1;
if(mH.mod==1){
mH.mHl[l].hevent='<img src="/resources/images/hisfree.png">';
} else {
mH.Subtitle5='<span style="background-color:#36a903;color:#FFF;width:170px;font-size:12px;float:left;padding-top:2px;padding-bottom:2px;padding-left:3px;margin-left:-3px;margin-top:5px;"><b>Бесплатная ставка</b></span>'+'<span style="background-color:#36a903;color:#FFF;width:31px;font-size:12px;padding-right:3px;text-align:right;float:left;padding-top:2px;padding-bottom:2px;margin-top:5px;"><b>'+'&nbsp;</b></span>';
}

}




if((mH.BONUS==0)||(mH.ORD_EXP_SYS!=2)) return;    
mH.BONUS=Math.round(mH.BONUS*100)/100;
mH.KOL++;
l=mH.mHl.length;
mH.mHl[l]=new THistoryline(mH.mod);
mH.mHl[l].DATE_EVENT.setTime(mH.DATE_STAVKI.getTime());
mH.mHl[l].DATE_EVENT2.setTime(mH.DATE_STAVKI2.getTime());
if(mH.BONUS<2)
mH.mHl[l].KOEF_STAVKI=mH.BONUS;
else if(mH.BONUS<3)
mH.mHl[l].KOEF_STAVKI=mH.BONUS-1;
else if(mH.BONUS<4)
mH.mHl[l].KOEF_STAVKI=mH.BONUS-2;


if(mH.mod==1){
if(mH.BONUS<2){
mH.mHl[l].hevent='<b><span style="color:#F47621;">Бонус «Откатим»</span></b>';
mH.mHl[l].koef='<b><span style="color:#F47621;">+'+Math.round(mH.BONUS*100-100)+'%</span></b>';}
else if(mH.BONUS<3){
mH.mHl[l].hevent='<b><span style="color:#C40000;">Бонус «Экспресс дня»</span></b>';
mH.mHl[l].koef='<b><span style="color:#C40000;">+'+Math.round((mH.BONUS-1)*100-100)+'%</span></b>';}
else if(mH.BONUS<4){
mH.mHl[l].hevent='<b><span style="color:#EC6E19;">Бонус «LIVE Экспресс»</span></b>';
mH.mHl[l].koef='<b><span style="color:#EC6E19;">+'+Math.round((mH.BONUS-2)*100-100)+'%</span></b>';}

}else{
if(mH.BONUS<2)	
mH.Subtitle5='<span style="background-color:#F47621;color:#FFF;width:170px;font-size:12px;float:left;padding-top:2px;padding-bottom:2px;padding-left:3px;margin-left:-3px;margin-top:5px;"><b>Бонус «Откатим»</b></span>'+'<span style="background-color:#F47621;color:#FFF;width:31px;font-size:12px;padding-right:3px;text-align:right;float:left;padding-top:2px;padding-bottom:2px;margin-top:5px;"><b>+'+Math.round(mH.BONUS*100-100)+'%</b></span>';
else if(mH.BONUS<3)	
mH.Subtitle5='<span style="background-color:#C40000;color:#FFF;width:170px;font-size:12px;float:left;padding-top:2px;padding-bottom:2px;padding-left:3px;margin-left:-3px;margin-top:5px;"><b>Бонус «Экспресс дня»</b></span>'+'<span style="background-color:#C40000;color:#FFF;width:31px;font-size:12px;padding-right:3px;text-align:right;float:left;padding-top:2px;padding-bottom:2px;margin-top:5px;"><b>+'+Math.round((mH.BONUS-1)*100-100)+'%</b></span>';
else if(mH.BONUS<4)	
mH.Subtitle5='<span style="background-color:#EC6E19;color:#FFF;width:170px;font-size:12px;float:left;padding-top:2px;padding-bottom:2px;padding-left:3px;margin-left:-3px;margin-top:5px;"><b>Бонус «LIVE Экспресс»</b></span>'+'<span style="background-color:#EC6E19;color:#FFF;width:31px;font-size:12px;padding-right:3px;text-align:right;float:left;padding-top:2px;padding-bottom:2px;margin-top:5px;"><b>+'+Math.round((mH.BONUS-2)*100-100)+'%</b></span>';
}

}


function expressclose(k,t){
if(sendstate==1) return;
var i=0;
var j=0;
var temp4="";
var temp5="#FFFFFF";
var id_event=0;

if(k>-1){
for(i=0;i<mExpress.length;i++) if(mExpress[i].id_event==k){
 id_event = mExpress[i].id_event; mExpress.splice(i, 1);
 mClient.maxexpress2 = 999999999;
express.removeChild(id_("mexpress"+id_event));break;}
newordsumm();
insertkoef();
;}

for(j=0;j<mExpress.length;j++){
temp5="#FFFFFF";
if(mExpress[j].State==3) temp5="#FEB734";
if(mExpress[j].State==2) temp5="#FF0000";
id_("mexpress"+mExpress[j].id_event).style.backgroundColor=temp5;

//mExpress[j].string='<div id="mexpress'+mExpress[j].id_event+'" style="float:left;width:235px;color:#000000;font-size:11px;background-color:'+temp5+'">'+id_("mexpress"+mExpress[j].id_event).innerHTML+'</div>';temp4=temp4+mExpress[j].string;
} 

//express.innerHTML=temp4;


maxshow();
if(k!=-1) calckoef(1); else calckoef(0);
savestate=saveenabled();
if(k==-1) return;

if(mEvents[EventId[id_event]]){
if((id_event==LastFrontLive)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none"))) pluslive(LastFrontLive);
if((id_event==EventRospisi)&&(Rospis.style.display!="none")) plusrospisi(EventRospisi);

if(mEvents[EventId[id_event]].string.length>0) mEvents[EventId[id_event]].string=RapidDraw(mEvents[EventId[id_event]]);
if(iphone==0&&mEvents[EventId[id_event]].Live==1&&id_("low"+id_event)) id_("low"+id_event).innerHTML=mEvents[EventId[id_event]].string3;
redrawevent(id_event);
redraweventaction(id_event);
}



prekoef(id_event);
if(mExpress.length==1) id_("mexpress"+mExpress[0].id_event).childNodes[3].style.display="none";

xlopus2(3,1);
drawscroll();

if(mH.length==0&&mClient.balance==0&&mExpress.length==0&&t!=1&&loginstate==1){Cupon.style.display="none";Opencupon.style.display="";}

}

function ordinarclose(){
if(sendstate==1)return;    
ordinar.innerHTML="";
min2Express[0]=minExpress[0]=0;viplata[0]=0;viplata2[0]=0;
//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[expressflag]*100)/100,0); 
newmax(expressflag);
Viplata.innerHTML="0";
Viplata2.innerHTML="0";
minimum.innerHTML=""+Math.round(mClient.min*100)/100;
var id_event=mOrdinar.id_event;
mOrdinar.State=1;
maxshow();

if(mEvents[EventId[id_event]]){
if((id_event==LastFrontLive)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none"))) pluslive(LastFrontLive);
if((id_event==EventRospisi)&&(Rospis.style.display!="none")) plusrospisi(EventRospisi);
if(mEvents[EventId[id_event]].string.length>0) mEvents[EventId[id_event]].string=RapidDraw(mEvents[EventId[id_event]]);
redrawevent(id_event);
redraweventaction(id_event);
}

prekoef(id_event);
savestate=saveenabled();
xlopus2(3,1);
drawscroll();

}



function lineclick(object,Live,rd,ga){
if(sendstate==1) return;    
if(Cupon.style.display=="none"){Cupon.style.display="";Opencupon.style.display="none";
//id_("OPLOGIN").style.display="none";
//id_("OPSCHET").style.display="";
}
rd=0;

lineclick1(object,1,rd,ga);return;

if((statusr==2)||(loginstate==0)){lineclick1(object,1,rd);return;}
if(Live==0){lineclick1(object,1,rd);return;}

rTextField2=object;
statuscupon=0;
var i=0;
for(i=0;i<mClient.DATE_STAVCA.length;i++){
if((rDate.getTime()-mClient.DATE_STAVCA[i].getTime()<29*60*60*1000)&&(mClient.DATE_STAVCA_STATUS[i]==0)) break;}
if(i==mClient.DATE_STAVCA.length){statusr=2;lineclick1(object,1);return;}
rclientindex=clientindex=i;
if((i==mClient.DATE_STAVCA.length-1)||(mClient.DATE_STAVCA_STATUS[mClient.DATE_STAVCA.length-1]==1)) statusr=1;
else rclientindex3=mClient.DATE_STAVCA.length-1;
mClient.DATE_STAVCA_STATUS[clientindex]=1;

webSocket.send("history");
sendindex=0;
sendarray.splice(0);
writeInt(mClient.DATE_STAVCA[clientindex].getTime()/1000);
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));
return;
}


function lineclick1(object,ind,rd,ga){
if(sendstate==1) return;        
bonusnewstate=0;
var i=0;
var j=0;
var jj=0;
var k=0;
var u=0;
var l=0;
var id_line=0;
var id_event=0;
var temp=new Array();
var temp4="";
var mL=mLines;
mClient.maxexpress2=999999999;


if(Plus.style.display!="none"||Pluslarge.style.display!="none"||Rospis.style.display!="none") _gaq.push(['_trackPageview',"virtual/koef_plus"]);
else if(ga==1){ 
if(id_("PRTABLE0")&&id_("PRTABLE0").style.display!="none") _gaq.push(['_trackPageview',"virtual/koef_main"]);
else _gaq.push(['_trackPageview',"virtual/koef_promo"]);}
else _gaq.push(['_trackPageview',"virtual/koef_line"]);





if(ind==1){
temp4=object.innerHTML;
temp=object.innerHTML.split(">");
l=temp.length;
temp4=temp[l-4]+""+temp[l-3]+""+temp[l-2]+""+temp[l-1];
temp=temp4.split("br").join("").split("<").join("").split(">").join("").split("/").join("").split(" ").join("").split("#");}
else {temp=object.split("#");
if(Cupon.style.display=="none"){Cupon.style.display="";Opencupon.style.display="none";
//id_("OPLOGIN").style.display="none";
//id_("OPSCHET").style.display="";

};}


if(temp.length!=3) return;
if(temp[0]=="") return;
if(temp[0]=="-") return;

id_line=parseInt(temp[1]);

for(i=0;i<mL.length;i++) if(mL[i].ID_LINE==id_line) break;

if(i<mL.length){ 
for(j=0;j<mTip_Line.length;j++) if((mL[i].ID_TIP_RADAR==mTip_Line[j].ID_TIP_RADAR)&&(mEvents[EventId[mL[i].ID_EVENT]].Live==mTip_Line[j].Live)) break;
if(j==mTip_Line.length) return;}

else{
if(EventRospisi==-1) return;
for(i=0;i<mRospis.length;i++) if(mRospis[i].ID_LINE==id_line) break;
if(i==mRospis.length) return;
for(j=0;j<mTip_Line.length;j++) if((mRospis[i].ID_TIP_RADAR==mTip_Line[j].ID_TIP_RADAR)&&(mTip_Line[j].Live==0)) break;
if(j==mTip_Line.length) return;
mL=mRospis;

}

var mEx=mExpress;

if(checkrapid.checked==true||checkrapid.checked=="checked"||(rd&&rd==1)) rapidcheck=1; else rapidcheck=0;



if(rapidcheck==0)
{expressflag=lastexpressflag;
/*
if(mEx.length>0&&mEvents[EventId[mL[i].ID_EVENT]].ID_CHAMPIONSHIP==(mEvents[EventId[mL[i].ID_EVENT]].ID_COUNTRY+10)*10000+13&&mEx[0].id_line==id_line) {delstavca();return;}

if(mEx.length>0&&mEvents[EventId[mL[i].ID_EVENT]].ID_CHAMPIONSHIP==(mEvents[EventId[mL[i].ID_EVENT]].ID_COUNTRY+10)*10000+13) delstavca();

if(mEx.length>0&&(mEvents[EventId[mL[i].ID_EVENT]].ID_CHAMPIONSHIP!==(mEvents[EventId[mL[i].ID_EVENT]].ID_COUNTRY+10)*10000+13)&&mEx[0].ID_CHAMPIONSHIP==(mEx[0].ID_COUNTRY+10)*10000+13) delstavca();
*/	


if((mEx.length>0)&&((mEx[0].ID_SPORT==110&&mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT!=110)||(mEx[0].ID_SPORT!=110&&mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==110))) delstavca();

for(l=0;l<mEx.length;l++) if((mEx[l].id_event==mL[i].ID_EVENT)||(mEx[l].ID_RADAR==mEvents[EventId[mL[i].ID_EVENT]].ID_RADAR))
                                   { if(mEx[l].id_line==mL[i].ID_LINE&&mEx[l].Index==parseInt(temp[2]))  {expressclose(mEx[l].id_event); return;}  
								   expressclose(mEx[l].id_event,1);}
} else delstavca();


k=mEx.length;
if(k==20){showWarning(war202,"OK","",0,null);return;}
mEx[k]=new TExpress();
mEx[k].Index=parseInt(temp[2]);
mEx[k].id_line=id_line;
mEx[k].live=mTip_Line[j].Live;
mEx[k].ID_TIP_RADAR=mTip_Line[j].ID_TIP_RADAR;
mEx[k].ID_COUNTRY=mEvents[EventId[mL[i].ID_EVENT]].ID_COUNTRY;
mEx[k].ID_RADAR=mEvents[EventId[mL[i].ID_EVENT]].ID_RADAR;
mEx[k].ID_CHAMPIONSHIP=mEvents[EventId[mL[i].ID_EVENT]].ID_CHAMPIONSHIP;
mEx[k].ID_SPORT=mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT;
mEx[k].U1=mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK1;
mEx[k].U2=mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK2;
mEx[k].id_event=mL[i].ID_EVENT;
mEx[k].DATE_EVENT.setTime(mEvents[EventId[mL[i].ID_EVENT]].DATE_EVENT.getTime());

mEx[k].Max=0;
mEx[k].KOEF=mL[i].KOEF;
mEx[k].FAVORIT=mL[i].FAVORIT;
mEx[k].ID_TIP_SAMPLE=mTip_Line[j].ID_TIP_SAMPLE;

if(mEvents[EventId[mL[i].ID_EVENT]].ID_SAMPLE==0)
mEx[k].ID_SAMPLE=mChampionships[ChampionId[mEvents[EventId[mL[i].ID_EVENT]].ID_CHAMPIONSHIP]].ID_SAMPLE;
else mEx[k].ID_SAMPLE=mEvents[EventId[mL[i].ID_EVENT]].ID_SAMPLE;

if(mEvents[EventId[mEx[k].id_event]].string.length>0) mEvents[EventId[mEx[k].id_event]].string=RapidDraw(mEvents[EventId[mEx[k].id_event]]);


redrawevent(mEx[k].id_event);
redraweventaction(mEx[k].id_event);
prekoef(mEx[k].id_event);


if(iphone==0&&mEx[k].live==1&&id_("low"+mEx[k].id_event)) id_("low"+mEx[k].id_event).innerHTML=mEvents[EventId[mEx[k].id_event]].string3;
if(mChampionships[ChampionId[mEx[k].ID_CHAMPIONSHIP]].TIP_CHAMPIONSHIP==0) mEx[k].future_live=1;else mEx[k].future_live=0;

if(mEx[k].ID_CHAMPIONSHIP!=(mEx[k].ID_COUNTRY+10)*10000+13) mEx[k].Title='<div style="float:left;width:200px; margin-left:10px;margin-top:6px;cursor:pointer;" onclick="plushash('+mL[i].ID_EVENT+');">'+mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK1+' - '+mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK2+'</div>'+'<div style="float:left;width:13px;height:13px;margin-top:4px; margin-left:6px;background:url(/resources/images/cupon88.png) no-repeat;cursor:pointer;" onclick="expressclose('+mEx[k].id_event+');"></div>';

else mEx[k].Title='<div style="float:left;width:200px; margin-left:10px;margin-top:6px;cursor:pointer;" onclick="overclick();ChampionClick2('+mEx[k].ID_CHAMPIONSHIP+',1);">'+mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK1+'</div>'+'<div style="float:left;width:13px;height:13px;margin-top:4px; margin-left:6px;background:url(/resources/images/cupon88.png) no-repeat;cursor:pointer;" onclick="expressclose('+mEx[k].id_event+');"></div>';





if(mTip_Line[j].FREE_TEXT_R.indexOf("@n")>-1)
temp4=mTip_Line[j].FREE_TEXT_R.replace("@x",mL[i].KOEF.substr(2,1)).replace("@x",mL[i].KOEF.substr(2,1)).replace("@n",mL[i].KOEF.substr(0,1)).replace("@y",mL[i].KOEF.substr(6,1));
else temp4=mTip_Line[j].FREE_TEXT_R.replace("@x",mL[i].KOEF).replace("@h",mL[i].KOEF.split("/")[1]).replace("@z",mL[i].KOEF.split("/")[0]);

if(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==2) temp4=temp4.replace("@p",quarter);
if(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==4) temp4=temp4.replace("@p",period);
if(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==3) temp4=temp4.replace("@p",inning);
if(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==16) temp4=temp4.replace("@p",quarter);
if(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==19) temp4=temp4.replace("@p","фрейм");



if((mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==5)||(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==23)||(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==22)||(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==34)||(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==31)||(mEvents[EventId[mL[i].ID_EVENT]].ID_SPORT==20)) temp4=temp4.replace("@p",sete);

mEx[k].Free=temp4;

mEx[k].R=mTip_Line[j].R[mEx[k].Index];
if(mL[i].KOEF.indexOf("1@")>-1) mEx[k].R=mL[i].KOEF.replace("1@","")+" ("+mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK1+")";
if(mL[i].KOEF.indexOf("2@")>-1) mEx[k].R=mL[i].KOEF.replace("2@","")+" ("+mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK2+")";

if(mTip_Line[j].R[mEx[k].Index]=="@w")   {mEx[k].R=mL[i].KOEF; if(mEx[k].ID_COUNTRY==4&&mEx[k].R=="Победитель") mEx[k].Free="Специальные ставки (станет чемпионом)";}
if(mTip_Line[j].R[mEx[k].Index]=="1")    mEx[k].R=mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK1;
if(mTip_Line[j].R[mEx[k].Index]=="2")    mEx[k].R=mEvents[EventId[mL[i].ID_EVENT]].UCHASTNIK2;
if((mTip_Line[j].R[mEx[k].Index]=="X")||(mTip_Line[j].R[mEx[k].Index]=="x")) mEx[k].R=Nichya;
mEx[k].V=mEx[k].V_=Vkoef3(mL[i].V[mEx[k].Index]);
if((mTip_Line[j].ROS_FAV==0)&&(mL[i].KOEF.length>0)&&(mL[i].KOEF.indexOf("1@")==-1)&&(mL[i].KOEF.indexOf("2@")==-1)&&(mTip_Line[j].FREE_TEXT_R.indexOf("@x")==-1)) mEx[k].Free=mEx[k].Free+' '+totkoef(mL[i].KOEF);

if((mTip_Line[j].ROS_FAV==1)&&(mL[i].FAVORIT==(mEx[k].Index+1))) mEx[k].Free=mEx[k].Free+' '+favkoef(mL[i].KOEF);else{
if((mTip_Line[j].ROS_FAV==1)&&(mL[i].FAVORIT!=(mEx[k].Index+1))) mEx[k].Free=mEx[k].Free+' '+favkoef2(mL[i].KOEF);else
if((mTip_Line[j].ROS_FAV==1)&&(mL[i].FAVORIT==0)) mEx[k].Free=mEx[k].Free+' '+favkoef3(mL[i].KOEF);}
var temp5="";

recalcul(mEx[k],3);

minsumpay(mEx[k]);

if(rapidcheck==0) mEx[k].summo=LastSumm;
else if(rd&&rd==1) mEx[k].summo=parseFloatExt(cs_("kord5")[0].value);
else mEx[k].summo=parseFloatExt(cs_("ord55")[0].value);

//console.log("mEx[k].Maxim_pay="+mEx[k].Maxim_pay);


mEx[k].viplata=Round2(Math.min(Math.round((parseFloatExt(mEx[k].V))*mEx[k].summo*100)/100,mEx[k].Maxim_pay));
mEx[k].viplata2=Round2(Math.round((parseFloatExt(mEx[k].V))*mEx[k].summo*100)/100);


if(rapidcheck==1) expressflag=0; 
mEx[k].Free='<div style="float:left;width:193px; margin-left:10px;color:#000;margin-top:0px;min-height:14px;">'+mEx[k].Free+'</div>';
mEx[k].Free=mEx[k].Free+'<div style="float:left;width:25px;height:13px;margin-top:0px;padding-top:0px;display:none;background-image:url(/resources/images/cuponbonus.png);font-size:11px;font-weight:bold;color:#FFFFFF;text-align:center;">+2%</div>';

mEx[k].string=mEx[k].Title+mEx[k].Free+
'<div style="float:left;width:180px; margin-left:10px;font-weight:bold;margin-top:0px;min-height:20px;font-size:12px;">'+mEx[k].R+'</div>'+
'<div style="float:left;width:8px;height:18px;margin-top:2px;" title=""></div>'+
'<div style="float:left;width:30px;text-align:right;font-weight:bold;margin-top:0px;height:20px;font-size:12px;">'+mEx[k].V+'</div><div style="width:100%"><div style="width:100%;float:left;margin-bottom:3px;"><span class="ord3">Сумма:</span><span class="ord4">Выплата:</span></div><select class="ord1" onchange="smchange(this,'+mEx[k].id_event+');">'+t5+
'</select><span><input class="ord5" onKeyUp="smchange2(this,'+mEx[k].id_event+');" onkeypress="return summapress3(event,'+mEx[k].id_event+',this);" onfocusout="smchange3(this,'+mEx[k].id_event+');" onblur="smchange3(this,'+mEx[k].id_event+');" value="'+mEx[k].summo+'"';
var dis="";
if(loginstate==0) dis="display:none;";


if(loginstate==1&&(mEx[k].Maxim<mEx[k].summo||mEx[k].summo<mClient.min||mClient.balance<mEx[k].summo))
{mEx[k].OrdinarState=1;
if(mEx[k].summo<mClient.min) temp5="Cумма ставки меньше допустимого минимума" ;
else if(mClient.balance<mEx[k].summo) temp5="Недостаточно средств на счету" ;
else temp5="Вы превысили максимальную сумму для данного события";
mEx[k].string=mEx[k].string+'style="background-color:#FF0000;" title="'+temp5+'"';
}
mEx[k].string=mEx[k].string+'/></span><div class="ord2">'+Math.round(mEx[k].summo*parseFloatExt(mEx[k].V)*100)/100+
'</div><div class="ORDINARBUTTON"';

//if(mEx[k].Maxim<mEx[k].summo||mEx[k].summo<mClient.min)
if(loginstate==1&&(mEx[k].Maxim<mEx[k].summo||mEx[k].summo<mClient.min||mClient.balance<mEx[k].summo))
mEx[k].string=mEx[k].string+'style="opacity:0.6;cursor:default"';
else mEx[k].string=mEx[k].string+'onclick="sendnewordinar('+mEx[k].id_event+');"';
mEx[k].string=mEx[k].string+'>Принять</div><div style="float:left;margin-left:10px;font-size:11px;margin-top:-7px;height:10px;'+dis+'"><div style="float:left;">Макс:&nbsp;</div><div style="border-radius:5px;cursor:pointer;width:11px;height:11px;color:#fff;background-color:#F47621;text-align:center;float:left;margin-top:1px;" onclick="setMax('+mEx[k].id_event+')">?</div></div><div>'+freebetexpr(mEx[k])+'</div></div><div style="float:left;width:225px;margin-top:3px;margin-left:5px;height:1px;background-color:#C0C0C0;"></div>';

/*
temp4='';
temp5="#FFFFFF";
for(i=0;i<mEx.length;i++)
{
temp5="#FFFFFF";
if(mEx[i].State==3) temp5="#FEB734";
if(mEx[i].State==2) temp5="#FF0000";
    
if(i<mEx.length-1)    
mEx[i].string='<div id="mexpress'+mEx[i].id_event+'" style="float:left;width:235px;color:#000000;font-size:11px;background-color:'+temp5+'">'+id_("mexpress"+mEx[i].id_event).innerHTML+'</div>';
temp4=temp4+mEx[i].string;
}

express.innerHTML=temp4;
*/

var el=document.createElement('div');
el.id='mexpress'+mEx[k].id_event;
el.style.width="235px";
el.style.color="000";
el.style.fontSize="11px";
el.style.float="left";
el.innerHTML=mEx[k].string;
//<li id="mexpress'+mEx[k].id_event+'" >

express.appendChild(el);

calckoef(1);
mEx[k].index=k;

//for(i=0;i<mEx.length-1;i++) newexpress(mEx[i]);



if(expressflag!=2) minimum.innerHTML=""+Math.round(mClient.min*100)/100;
else if(mEx.length<3) minimum.innerHTML="0";else minimum.innerHTML=""+mClient.minimsistem;


newordsumm();


if(expressflag==0) ordinarclick();
if(expressflag==1) expressclick();
if(expressflag==2) systemclick();

insertkoef();


//if(navigator.userAgent.indexOf("Firefox/18")==-1) summainput.focus();
if(loginstate==0&&rapidcheck==1){showWarningReg(); rapidcheck=0;}
//setMax(mEx[k]);

if((mEx[k].id_event==LastFrontLive)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none"))) pluslive(LastFrontLive);
if((mEx[k].id_event==EventRospisi)&&(Rospis.style.display!="none")) plusrospisi(EventRospisi);
if(rapidcheck==1) {sendnewordinar(mEx[k].id_event);rapidcheck=0;}
}










var ARS=new Array();

function koefsystem(n,k){
var more=0;
var A=arrsystem(n,k);
var res=0;
var i=0;
var m=Combin(n,k);
for(i=0;i<m;i++){if(A[i]>maxKoef) {A[i]=maxKoef;more++;}; res=res+A[i];}
if((expressflag==2)&&(((more>0)&&(sysalert==0))||((sysalert==1)&&(more>0)&&(more!=sysmore)))){
sysmore=more;sysalert=1;
showWarning("В "+sysmore+" варианте(ах) системы Коэффициент превышает "+maxKoef+"!Согласно правилам, выплата будет рассчитана по Коэффициенту "+maxKoef+" в варианте(каждом из вариантов).","OK","",0,null);
}
if(more==0) {sysmore=0;sysalert=0;}
return res;
}


function arrsystem(n,k){
if(ARS[n]!=null&&ARS[n][k]!=null) return ARS[n][k];	
var A=new Array();
var i=0;
if(k==1) {for(i=0;i<n;i++) A[i]=parseFloatExt(mExpress[i].V);return A;};
if(k==n) {A[0]=1; for(i=0;i<n;i++) A[0]=A[0]*parseFloatExt(mExpress[i].V);return A;};
var m=0;
var l=0;
var A1=arrsystem(n-1,k-1);
var A2=arrsystem(n-1,k);
m=Combin(n-1,k-1);
l=Combin(n-1,k);
for(i=0;i<l;i++) A[i]=A2[i];
for(i=0;i<m;i++) A[i+l]=A1[i]*parseFloatExt(mExpress[n-1].V);
if(ARS[n]==null) ARS[n]=new Array();
ARS[n][k]=A;
return A;}


function setMax(k){
if(loginstate==0) return;	
sendindex=0;
sendarray.splice(0);
var i=0;
for(i=0;i<mExpress.length;i++) if(mExpress[i].id_event==k) break;
if(i==mExpress.length) return;

sendindex=0;
sendarray.splice(0);
writeByte(1);
writeByte(1);
writeByte(0);
writeDouble(0);
writeByte(0);
writeByte(0);
writeUnsignedInt(parseInt(mExpress[i].id_line));
writeUnsignedInt(mExpress[i].id_event);
writeShort(mExpress[i].ID_TIP_RADAR);
writeByte(mExpress[i].live);
j=mExpress[i].Index+1;
writeByte(j);
N=parseFloatExt(mExpress[i].V);
writeDouble(N);
//if(expressflag>0&&mExp.length==1&&mExpressState==0) N=parseFloatExt(summainput.value);else N=parseFloatExt(mExp[i].summo);
writeDouble(0);

webSocket.send("pred_stavka");
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));

}


function setMaxExpress(flag){
if(loginstate==0) return;	
if(flag==1) mExp=mExpress;
if(flag==2) mExp=mExpressDay;
if(flag==3) mExp=mExpressDayLive;
if(mExp.length==0) return;
var i=0;
var j=mExp.length;
sendindex=0;
sendarray.splice(0);
writeByte(2);
writeByte(j);
writeByte(0);
writeDouble(0);
writeByte(0);
if(flag==1) j=0; else j=flag;
writeByte(j);
for(i=0;i<mExp.length;i++){
writeUnsignedInt(parseInt(mExp[i].id_line));
writeUnsignedInt(mExp[i].id_event);
writeShort(mExp[i].ID_TIP_RADAR);
writeByte(mExp[i].live);
j=mExp[i].Index+1;
writeByte(j);
N=parseFloatExt(mExp[i].V);
writeDouble(N);
//if(expressflag>0&&mExp.length==1&&mExpressState==0) N=parseFloatExt(summainput.value);else N=parseFloatExt(mExp[i].summo);
writeDouble(0);
};
webSocket.send("pred_stavka");
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));
//console.log("pred_sta");
}







function newmax(k){
if(minExpress[1]==999999999) maximum.innerHTML=maxex;
else maximum.innerHTML=""+zeroinsert(Math.round(min2Express[k]*100)/100,0);
//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[k]*100)/100,0);
}


function calckoef(t){
var m=1;    
var i=0;
var n=mExpress.length;
var k=0;
var ls=parseFloatExt(express2.innerHTML);
minExpress[1]=maxExpress();
if(n==0) {express2.innerHTML="";expresskoef=0;} else { 
for(i=0;i<n;i++) {m=m*parseFloatExt(mExpress[i].V);}
expresskoef=Math.floor(m*100*Bonus.Max)/100;
express2.innerHTML=""+expresskoef;
if((expressflag==1)&&(ls<=maxKoef)&&(expresskoef>maxKoef)) showWarning(war203,"OK","",0,null);
}

if(expresskoef>=1.01) min2Express[1]=Round(Math.min(minExpress[1],mClient.maxexpress/(Math.min(expresskoef,maxKoef)-1),mClient.maxexpress2/Math.min(expresskoef,maxKoef)));
else min2Express[1]=Round(minExpress[1]);
systemkoef=0;
viplata[2]=0;
viplata2[2]=0;
if(t==1){
removeAll(soho2);
if(n>2){for(i=2;i<n;i++){
if((n==13)&&(i>4)&&(i<9)) continue;
if((n==14)&&(i>3)&&(i<11)) continue;
if((n==15)&&(i>3)&&(i<12)) continue;
if((n==16)&&(i>3)&&(i<13)) continue;
if((n==17)&&(i>3)&&(i<14)) continue;
if((n==18)&&(i>3)&&(i<15)) continue;
if((n==19)&&(i>3)&&(i<16)) continue;
if((n==20)&&(i>2)&&(i<18)) continue;

soho2.options.add(new Option(system1+" "+i+" "+ system2+" "+n+" ("+Combin(n,i)+" "+system3+")",i));

;}}


if(n<3) minExpress[2]=min2Express[2]=0;

if(expressflag!=2) minimum.innerHTML=""+Math.round(mClient.min*100)/100;
else if(mExpress.length<3) minimum.innerHTML="0";else minimum.innerHTML=""+mClient.minimsistem;
}

if(n>2){
ARS=new Array();	
k=soho2.options[soho2.selectedIndex].value;
systemkoef=koefsystem(n,k);
minExpress[2]=minExpress[1]*n/k;
if(systemkoef/Combin(n,k)>=1.01) min2Express[2]=Round(Math.min(minExpress[2],mClient.maxexpress/(systemkoef/Combin(n,k)-1),mClient.maxexpress2/(systemkoef/Combin(n,k))));
else min2Express[2]=Round(minExpress[2]);

viplata[2]=Round2(Math.min(Math.round((systemkoef*parseFloatExt(summainput.value)/Combin(n,k))*100)/100,minpaysistem(n,k)));
viplata2[2]=Round2(Math.round((systemkoef*parseFloatExt(summainput.value)/Combin(n,k))*100)/100);
}
viplata[1]=Round2(Math.min(Math.round((Math.min(expresskoef,maxKoef))*(parseFloatExt(summainput.value))*100)/100,minpayexpress()));
viplata2[1]=Round2(Math.round((Math.min(expresskoef,maxKoef))*(parseFloatExt(summainput.value))*100)/100);

//console.log("1min2Express[1]="+min2Express[1]);
newmax(lastexpressflag);
//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[lastexpressflag]*100)/100,0);

Viplata.innerHTML=""+zeroinsert(Math.round(viplata[lastexpressflag]*100)/100,0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);
if(lastexpressflag==1){
summ7.innerHTML=summa7(zeroinsert(Math.round((viplata2[lastexpressflag]-parseFloatExt(summainput.value))*bonpr)));


}
savestate=saveenabled();
;}


function saveenabledDay(){
//return 1;
var i=0;
var j=0;
var nolive=0;
if(mExpressDay.length==0){stavcaButtonDay.style.opacity="0.6";stavcaButtonDay.style.cursor="default";return 0;}
for(i=0;i<mExpressDay.length;i++) {j=j+mExpressDay[i].State;nolive=nolive+mExpressDay[i].live;}
if(nolive<mExpressDay.length) nolive=1; else nolive=0;
if(j>0){stavcaButtonDay.style.opacity="0.6";stavcaButtonDay.style.cursor="default";return 0;}
if((parseFloatExt(summainputDay.value)<parseFloatExt(minimumDay.innerHTML))||((min2ExpressDay<parseFloatExt(summainputDay.value))&&(nolive=1)))
{stavcaButtonDay.style.opacity="0.6";stavcaButtonDay.style.cursor="default";return 0;}
stavcaButtonDay.style.opacity="1";stavcaButtonDay.style.cursor="pointer";
return 1;
;}


function saveenabledDayLive(){
//return 1;
var i=0;
var j=0;
var nolive=0;
if(mExpressDayLive.length==0){stavcaButtonDayLive.style.opacity="0.6";stavcaButtonDayLive.style.cursor="default";return 0;}
for(i=0;i<mExpressDayLive.length;i++) {j=j+mExpressDayLive[i].State;nolive=nolive+mExpressDayLive[i].live;}
if(nolive<mExpressDayLive.length) nolive=1; else nolive=0;
if(j>0){stavcaButtonDayLive.style.opacity="0.6";stavcaButtonDayLive.style.cursor="default";return 0;}
if((parseFloatExt(summainputDayLive.value)<parseFloatExt(minimumDayLive.innerHTML))||((min2ExpressDayLive<parseFloatExt(summainputDayLive.value))&&(nolive=1)))
{stavcaButtonDayLive.style.opacity="0.6";stavcaButtonDayLive.style.cursor="default";return 0;}
stavcaButtonDayLive.style.opacity="1";stavcaButtonDayLive.style.cursor="pointer";
return 1;
;}



function saveenabled(){
var i=0;
var j=0;
var nolive=0;
if(expressflag==0){ 
for(i=0;i<mExpress.length;i++) if(mExpress[i].OrdinarState+mExpress[i].State==0) break;
if(i<mExpress.length)
{stavcaButton.style.opacity="1";stavcaButton.style.cursor="pointer";
return 1;}
else {stavcaButton.style.opacity="0.6";stavcaButton.style.cursor="default";return 0;}
}

if((mExpress.length==0)||((expressflag==2)&&(mExpress.length<3))){stavcaButton.style.opacity="0.6";stavcaButton.style.cursor="default";return 0;}

for(i=0;i<mExpress.length;i++) {j=j+mExpress[i].State;nolive=nolive+mExpress[i].live;}
if(nolive<mExpress.length) nolive=1; else nolive=0;

if(j>0){stavcaButton.style.opacity="0.6";stavcaButton.style.cursor="default";return 0;}
if((parseFloatExt(summainput.value)<parseFloatExt(minimum.innerHTML))||((min2Express[expressflag]<parseFloatExt(summainput.value))&&(nolive==1)))
{stavcaButton.style.opacity="0.6";stavcaButton.style.cursor="default";return 0;}
stavcaButton.style.opacity="1";;stavcaButton.style.cursor="pointer";
return 1;
;}




function recalcul(mExpress,t){
if(t==1||t==3) eMAX(mExpress);
if(t==1||t==3||t==0){
if(mExpress.live==0) mExpress.Max=0.66667*mClient.kurs*mClient.pay*getsroc(mExpress)*mExpress.MAX_SUM-maxsum(mExpress);
else mExpress.Max=mClient.kurs*mClient.pay*mExpress.MAX_SUM-maxsum(mExpress);
if(mExpress.live==0) mExpress.Max_pay=mClient.kurs*mClient.pay*0.66667*getsroc(mExpress)*mExpress.MAX_PAY-maxpay(mExpress);
else mExpress.Max_pay=mClient.kurs*mClient.pay*mExpress.MAX_PAY-maxpay(mExpress);
if(mExpress.Max<0) mExpress.Max=0;
if(mExpress.Max_pay<0) mExpress.Max_pay=0;}
if(t!=3){
minsumpay(mExpress);
newexpress(mExpress);
newordsumm();}
}



function recalculall(t){
//console.log("recalculall");	
var i=0;
for(i=0;i<mExpress.length;i++) recalcul(mExpress[i],t);
if(mExpress.length>0)calckoef(1);
//statuscupon=0;
}

function recalculall2(id_event){
var i=0;
for(i=0;i<mExpress.length;i++) if(mExpress.id_event==id_event){recalculall(1);return;}
}

function recalculall3(id_championship){
var i=0;
for(i=0;i<mExpress.length;i++) if((mEvents[EventId[mExpress.id_event]])&&(mEvents[EventId[mExpress.id_event]].ID_CHAMPIONSHIP==id_championship)){recalculall(1);return;}
}


function getsroc(mExpress){
var r=(mEvents[EventId[mExpress.id_event]].DATE_EVENT.getTime()-rDate.getTime())/(24*60*60*1000);
if(r>7) return 1/10;
if(r>6) return 1/8;
if(r>5) return 1/6;	
if(r>4) return 1/5;
if(r>3) return 1/4;
if(r>2) return 1/3;
if(r>1) return 1/2;
return 1;
}

function eMAX(mExpress){
var u=0;
if(!mEvents[EventId[mExpress.id_event]]) return;
if(mEvents[EventId[mExpress.id_event]].ID_SAMPLE==0)
{for(u=0;u<mSamples.length;u++) if((mExpress.ID_TIP_SAMPLE==mSamples[u].ID_TIP_EVENT)&&(mChampionships[ChampionId[mEvents[EventId[mExpress.id_event]].ID_CHAMPIONSHIP]].ID_SAMPLE==mSamples[u].ID_SAMPLE)) break;}
else {for(u=0;u<mSamples.length;u++) if((mExpress.ID_TIP_SAMPLE==mSamples[u].ID_TIP_EVENT)&&(mEvents[EventId[mExpress.id_event]].ID_SAMPLE==mSamples[u].ID_SAMPLE)) break;}
if(u<mSamples.length){mExpress.MAX_SUM=mSamples[u].MAX_SUM;mExpress.MAX_PAY=mSamples[u].MAX_PAY;}
//if(loginstate==1){
mExpress.MAX_SUM=999999999;
mExpress.MAX_PAY=999999999;
}



function maxsum(mExpress){
return 0;	
if(loginstate==0) return 0;    
var i=0;
var j=0;
var k=0;
var r=0;
var sum=0;
for(i=0;i<mH.length;i++) 
for(j=0;j<mH[i].mHl.length;j++){
if((mExpress.live==0)&&(mH[i].mHl[j].LIVE==1)) continue;
if((mExpress.live==0)&&(mH[i].mHl[j].LIVE==0)&&(mH[i].mHl[j].ID_EVENT!=mExpress.id_event)) continue;
if((mExpress.live==1)&&(mH[i].mHl[j].LIVE==1)&&(mH[i].mHl[j].ID_RADAR!=mExpress.ID_RADAR)) continue;
if((mExpress.live==1)&&(mH[i].mHl[j].LIVE==0)&&((mH[i].mHl[j].ID_RADAR!=mExpress.ID_RADAR)||(mH[i].mHl[j].future_live!=1))) continue;
{if(mH[i].ORD_EXP_SYS!=3) sum=sum+mH[i].SUMM_STAVKI; else{
sum=sum+mH[i].SUMM_STAVKI*mH[i].SYS_VAL/mH[i].KOL;}break;}
}

if((mExpress.live==0)||((rclientindex==-1)&&(rclientindex2==-1))) return sum;
if(rclientindex==-1) r=rclientindex2;
else if(rclientindex2==-1) r=rclientindex;
else r=Math.min(rclientindex,rclientindex2);

//for(k=r;k<mClient.DATE_STAVCA_STATUS.length;k++) 

//alert(rH.length+"k="+k+mExpress.U1);
if(rH.length==0) return sum;


for(k=r;k<mClient.DATE_STAVCA_STATUS.length;k++) for(i=0;i<rH[k].length;i++) 
{if((rH[k][i].STATE==0)||(rH[k][i].HOLD==2)) continue; 
for(j=0;j<rH[k][i].mHl.length;j++)                                                                  
if((rH[k][i].mHl[j].LIVE==1)&&(mExpress.ID_RADAR==rH[k][i].mHl[j].ID_RADAR))
{if(rH[k][i].ORD_EXP_SYS!=3) sum=sum+rH[k][i].SUMM_STAVKI; else{
sum=sum+rH[k][i].SUMM_STAVKI*rH[k][i].SYS_VAL/rH[k][i].KOL;}break;}
}
return sum;
}

function maxpay(mExpress){
return 0;	
if(loginstate==0) return 0;    
var i=0;
var j=0;
var k=0;
var r=0;
var sum=0;
for(i=0;i<mH.length;i++) 
for(j=0;j<mH[i].mHl.length;j++){
if((mExpress.live==0)&&(mH[i].mHl[j].LIVE==1)) continue;
if((mExpress.live==0)&&(mH[i].mHl[j].LIVE==0)&&(mH[i].mHl[j].ID_EVENT!=mExpress.id_event)) continue;
if((mExpress.live==1)&&(mH[i].mHl[j].LIVE==1)&&(mH[i].mHl[j].ID_RADAR!=mExpress.ID_RADAR)) continue;
if((mExpress.live==1)&&(mH[i].mHl[j].LIVE==0)&&((mH[i].mHl[j].ID_RADAR!=mExpress.ID_RADAR)||(mH[i].mHl[j].future_live!=1))) continue;

if((mExpress.ID_TIP_RADAR==mH[i].mHl[j].ID_TIP_RADAR)
&&(mExpress.KOEF==mH[i].mHl[j].DOP_KOEF)
&&(mExpress.FAVORIT==mH[i].mHl[j].FAVORIT)
&&(mExpress.Index==mH[i].mHl[j].ODD_NOMER-1))
{if(mH[i].ORD_EXP_SYS!=3) sum=sum+mH[i].SUMM_STAVKI*(mH[i].mHl[j].KOEF_STAVKI-1); else{
sum=sum+mH[i].SUMM_STAVKI*mH[i].SYS_VAL*(mH[i].mHl[j].KOEF_STAVKI-1)/mH[i].KOL;};break;}   
}


if((mExpress.live==0)||((rclientindex==-1)&&(rclientindex2==-1))) return sum;
if(rclientindex==-1) r=rclientindex2;
else if(rclientindex2==-1) r=rclientindex;
else r=Math.min(rclientindex,rclientindex2);
if(rH.length==0) return sum;

for(k=r;k<mClient.DATE_STAVCA_STATUS.length;k++) for(i=0;i<rH[k].length;i++) 
{if((rH[k][i].STATE==0)||(rH[k][i].HOLD==2)) continue; 
for(j=0;j<rH[k][i].mHl.length;j++)                                                                  
if((rH[k][i].mHl[j].LIVE==1)&&(mExpress.ID_RADAR==rH[k][i].mHl[j].ID_RADAR)
&&(mExpress.ID_TIP_RADAR==rH[k][i].mHl[j].ID_TIP_RADAR)
&&(mExpress.KOEF==rH[k][i].mHl[j].DOP_KOEF)
&&(mExpress.FAVORIT==rH[k][i].mHl[j].FAVORIT)
&&(mExpress.Index=rH[k][i].mHl[j].ODD_NOMER-1))
{if(rH[k][i].ORD_EXP_SYS!=3) sum=sum+rH[k][i].SUMM_STAVKI*(rH[k][i].mHl[j].KOEF_STAVKI-1); else{
sum=sum+rH[k][i].SUMM_STAVKI*(rH[k][i].mHl[j].KOEF_STAVKI-1)*rH[k][i].SYS_VAL/mH[i].KOL;}break;}

}return sum;
}



function maxExpress(){
var n=99999999999;
var i=0;
var k=0;
var s=0;
var u=0;
for(i=0;i<mExpress.length;i++){
if((expressflag==1)&&(parseFloatExt(mExpress[i].V)>=bonuskoef||bkoef(mExpress[i].id_line,mExpress[i].Index)==1)&&(otkat==1&&mExpress.length>1)) 
{id_("mexpress"+mExpress[i].id_event).childNodes[3].style.display="";u++;}
else {id_("mexpress"+mExpress[i].id_event).childNodes[3].style.display="none";}
//if((s>-1)&&(parseFloatExt(mExpress[i].V)>=1.5)&&(mExpress[i].live==0)) s++; else s=-1;
minsumpay(mExpress[i]); 
if(n>mExpress[i].Maxim_real) n=mExpress[i].Maxim_real;
if(mExpress[i].MAX_PAY==999999999) n=999999999;
}
if((u>0)&&(mExpress.length>1)){Otkat.innerHTML="Бонус «Откатим»&nbsp;+"+bonusprocent[u-1]+"%";bonpr=bonusprocent[u-1]/100;} else{Otkat.innerHTML="Бонус «Откатим»";bonpr=0;}
if(n==99999999999)  return 0; else return n;
}



function minpayexpress(){
return Math.round(min2Express[1]*Math.min(expresskoef,maxKoef))
}

function minpaysistem(n,k){
return Math.round(100*systemkoef*min2Express[2]/Combin(n,k))/100;
}



function minsumpay(mExpress){
if(parseFloatExt(mExpress.V)-1<0.01) mExpress.Maxim_real=mExpress.Max;
else mExpress.Maxim_real=Math.min(mExpress.Max_pay/(parseFloatExt(mExpress.V)-1),mExpress.Max);
if(mExpress.MAX_PAY!=999999999) mExpress.Maxim=Math.min(mExpress.Maxim_real,mClient.maxexpress/(parseFloatExt(mExpress.V)-1),mExpress.Max_viplata/parseFloatExt(mExpress.V));
else mExpress.Maxim=mExpress.Maxim_real;
mExpress.Maxim_pay=mExpress.Maxim*parseFloatExt(mExpress.V);
return mExpress.Maxim;}




function parseFloatExt(x){
try{x=x.split(" ").join("");}
catch(e){};
var r=parseFloat(x);
if(!r) return 0;    
else return r;
}


function summ2change(){
bonusnewstate=0;	
var t1="";
var t2="";
EndIndex=summainput.selectionStart;

if(summainput.value.indexOf(".")>-1) {restrict2="1234567890";
if(summainput.value.indexOf(".")<summainput.value.length-3)
{t1=summainput.value.split(".")[0];
t2=summainput.value.split(".")[1].split(" ").join("").substr(0,2);
summainput.value=t1+"."+t2;}}
else restrict2="1234567890.";
var u=new Array();
var u2="";
u=summainput.value.split(".");
if(u.length>1) {u2="."+u[1];summainput.value=u[0];} else u2="";


var p1=summainput.value.split(" ").length;
var l=0;
var l2=0;
var l3=0;
var i=0;
var s="";
var ss="";

ss=summainput.value.split(" ").join("");
if(ss.length>3){
l=ss.length;
l2=l%3;
l3=(l-l2)/3;
if(l2>0) s=ss.substr(0,l2);else s="";
for(i=0;i<l3;i++) {if(s.length>0) s=s+" "+ss.substr(l2+3*i,3);else s=s+ss.substr(l2+3*i,3);}
summainput.value=s;
} else summainput.value=ss;

var p2=summainput.value.split(" ").length;

summainput.value=summainput.value+u2;

//if(sl>=summainput.value.length) p1=p1+1;



if(summainput.selectionStart) summainput.setSelectionRange(EndIndex+p2-p1,EndIndex+p2-p1);



var n=mExpress.length;
var k=0;
if(expressflag==0){
//if(mOrdinar.State!=1) min2Express[0]=minExpress[0]=Round(minsumpay(mOrdinar));else min2Express[0]=minExpress[0]=0;

//viplata[0]=Round2(Math.min(Math.round((parseFloatExt(mOrdinar.V))*(parseFloatExt(summainput.value))*100)/100,mOrdinar.Maxim_pay));
//viplata2[0]=Round2(Math.round((parseFloatExt(mOrdinar.V))*(parseFloatExt(summainput.value))*100)/100);
Viplata.innerHTML=""+zeroinsert(Math.round(viplata[expressflag]*100)/100,0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);
if(expressflag==1){
summ7.innerHTML=summa7(zeroinsert(Math.round((viplata[expressflag]-parseFloatExt(summainput.value))*bonpr)));

}
}
else{
minExpress[1]=maxExpress();
if(expresskoef>=1.01) min2Express[1]=Round(Math.min(minExpress[1],mClient.maxexpress/(Math.min(expresskoef,maxKoef)-1),mClient.maxexpress2/Math.min(expresskoef,maxKoef)));
else min2Express[1]=Round(minExpress[1]);
if(n>2){k=soho2.options[soho2.selectedIndex].value;
minExpress[2]=minExpress[1]*n/k;
if(systemkoef/Combin(n,k)>=1.01) min2Express[2]=Round(Math.min(minExpress[2],mClient.maxexpress/(systemkoef/Combin(n,k)-1),mClient.maxexpress2/(systemkoef/Combin(n,k))));
else min2Express[2]=Round(minExpress[2]);
viplata[2]=Round2(Math.min(Math.round((systemkoef*parseFloatExt(summainput.value)/Combin(n,k))*100)/100,minpaysistem(n,k)));
viplata2[2]=Round2(Math.round((systemkoef*parseFloatExt(summainput.value)/Combin(n,k))*100)/100);
}
else {viplata[2]=0;viplata2[2]=0;min2Express[2]=minExpress[2]=0;}

viplata[1]=Round2(Math.min(Math.round((Math.min(expresskoef,maxKoef))*(parseFloatExt(summainput.value))*100)/100,minpayexpress()));
viplata2[1]=Round2(Math.round((Math.min(expresskoef,maxKoef))*(parseFloatExt(summainput.value))*100)/100);

Viplata.innerHTML=""+zeroinsert(Math.round(viplata[lastexpressflag]*100/100),0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);
if(lastexpressflag==1){
summ7.innerHTML=summa7(zeroinsert(Math.round((viplata2[lastexpressflag]-parseFloatExt(summainput.value))*bonpr)));

}
}

//maximum.innerHTML=""+zeroinsert(Math.round(min2Express[lastexpressflag]*100)/100,0);
newmax(lastexpressflag);
savestate=saveenabled();
;}


function loginpres(event){
if(event.keyCode==13){loginclick(); return false;}
}

function loginpres2(event){
if(event.keyCode==13){loginclick2(); return false;}
}

function loginpres3(event){
if(event.keyCode==13){loginclick3(); return false;}
}


function mailchek(key){
if((key==8)||(key==37)||(key==38)||(key==39)||(key==40)) return true;
if(key<48){if((key==45)||(key==46)) return true ; else return false;}
if(key<58) return true;
if(key<64) return false;
if(key<91) return true;
if(key<97){if(key==95) return true; else return false;}
if(key<123) return true;
return false;
}




function mailpress(event){
return true;	
var key=event.keyCode||event.which;
if((key==8)||(key==37)||(key==38)||(key==39)||(key==40)) return true;
if(key<48){if((key==45)||(key==46)) return true ; else return false;}
if(key<58) return true;
if(key<64) return false;
if(key<91) return true;
if(key<97){if(key==95) return true; else return false;}
if(key<123) return true;
return false;
}


function mailpress3(event){
if(Reg4[5].selectedIndex==0) return;
var key=event.keyCode||event.which;
if(key==32||key==45) return true;
if(Reg4[5].selectedIndex==1){
if(key<1040||key>1105) return false;
else return true;	
}
if(key<65||key>122) return false;
else return true;	
}


function nickpress(event){
var key=event.keyCode||event.which;
if(key<48) return false;
if(key>122) return false;
if(key>96) return true;
if(key>90) return false;
if(key<59) return true;	
if(key<65) return false;	
return true;		
}

function mailpress2(event){
var key=event.keyCode||event.which;
if(event.ctrlKey && key == 86) return false;
if(event.shiftKey&& key == 45) return false;
}


function telpress(event){
var key=event.keyCode||event.which;
if(key<48) return false;
if(key>58) return false;
return true;
}



function summapress2(event,id){
var restrictus=new Array();
restrictus[1]=restrict2;
restrictus[2]=restrictDay2;
restrictus[3]=restrictDayLive2;
restrictus[4]=restrict2;
var savestatus=new Array();
savestatus[0]=savestate;
savestatus[1]=savestate;
savestatus[2]=savestateDay;
savestatus[3]=savestateDayLive;
savestatus[4]=savestate;



var key=event.keyCode||event.which;
if(id==4&&key==13) return false;
if((key==13)&&(savestatus[id]==1)){if(sendstate+grandsendstate==0&&id==1){mExpressState=0;ordinarflag=1;sendstavca();return false;}; 
if(sendstate+grandsendstate==0&&id==2){mExpressState=1;sendstavca();return false;}
if(sendstate+grandsendstate==0&&id==3){mExpressState=2;sendstavca();return false;}
return false;}
//if((key==8)||(key==37)||(key==38)||(key==39)||(key==40)) return true;
var i=0;
for(i=0;i<restrictus[id].length;i++) if(restrictus[id].charCodeAt(i)==key) return true;
return false;
}





function summapress3(event,id,obj){
var key=event.keyCode||event.which;
if((key==13)&&(savestate==1)&&id>0){sendnewordinar(id);return false;}
if(obj==null&&((key==8)||(key==37)||(key==38)||(key==39)||(key==40))) return true;
var i=0;
if(obj&&obj.value&&obj.value.indexOf(".")>-1&&key==46) return false;

for(i=0;i<restrict3.length;i++) if(restrict3.charCodeAt(i)==key) return true;
return false;
}











function summapress(event){
var key=event.keyCode||event.which;
if((key==8)||(key==37)||(key==38)||(key==39)||(key==40)) return true;
var i=0;
for(i=0;i<restrict.length;i++) if(restrict.charCodeAt(i)==key) return true;
return false;
}















function delstavca(){
if(sendstate==1) return;    
//if(expressflag==0) {ordinarclose();return;}    
express.innerHTML="";
delstavca2();
calckoef(1);
savestate=saveenabled();
drawscroll();
}

function delstavca2(){
var i=0;
var j=0;
var id_event=new Array();
for(i=0;i<mExpress.length;i++) id_event[i]=mExpress[i].id_event;
mExpress.splice(0);
newordsumm();
for(i=0;i<id_event.length;i++)
if(mEvents[EventId[id_event[i]]]){
if((id_event[i]==LastFrontLive)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none"))) pluslive(LastFrontLive);
if((id_event[i]==EventRospisi)&&(Rospis.style.display!="none")) plusrospisi(EventRospisi);
if(mEvents[EventId[id_event[i]]].string.length>0) mEvents[EventId[id_event[i]]].string=RapidDraw(mEvents[EventId[id_event[i]]]);
if(iphone==0&&mEvents[EventId[id_event[i]]].Live==1&&id_("low"+id_event[i])) id_("low"+id_event[i]).innerHTML=mEvents[EventId[id_event[i]]].string3;
redrawevent(id_event[i]);
redraweventaction(id_event[i]);
;}
maxshow();
insertkoef();
if(mH.length==0&&mClient.balance==0&&loginstate==1){Cupon.style.display="none";Opencupon.style.display="";}
}


function maxsh(k){
if(k==0){
maxpar.style.display="none";
maximum.style.display="none";
minimum.style.display="none";
minpar.style.display="none";
//maxpar2.style.display="";
//maximum2.style.display="";
Viplata2.style.display="";
Viplata.style.display="none";
//maxpar2.style.borderTop="1px solid #FFF";
//maximum2.style.borderTop="1px solid #FFF";

minimum2.style.display="";
minpar2.style.display="";
minpar.style.borderBottom="0px solid #C1C1C1";
minimum.style.borderBottom="0px solid #C1C1C1";



return;}
if(k==1){
maxpar.style.display="none";
maximum.style.display="none";
minimum.style.display="";
minpar.style.display="";

//maxpar2.style.display="";
//maximum2.style.display="";
Viplata2.style.display="";
Viplata.style.display="none";
minpar.style.borderBottom="1px solid #C1C1C1";
minimum.style.borderBottom="1px solid #C1C1C1";


//maxpar2.style.borderTop="1px solid #C1C1C1";
//maximum2.style.borderTop="1px solid #C1C1C1";
minimum2.style.display="none";
minpar2.style.display="none";

return;}
maxpar.style.display="";
maximum.style.display="";
minimum.style.display="";
minpar.style.display="";
minpar.style.borderBottom="0px solid #C1C1C1";
minimum.style.borderBottom="0px solid #C1C1C1";

//maxpar2.style.display="none";
//maximum2.style.display="none";
Viplata.style.display="";
Viplata2.style.display="none";
minimum2.style.display="none";
minpar2.style.display="none";


}

function maxshow(){
var i=0;	
if(loginstate==0){maxsh(0);return;}
if(expressflag==0){maxsh(0);return;if(mOrdinar.State==1) {maxsh(0);return;} if(mOrdinar.live==1) maxsh(1);else maxsh(2);return;}
for(i=0;i<mExpress.length;i++) if(mExpress[i].live==0){maxsh(2);return;}
if(mExpress.length==0) maxsh(0);
else maxsh(1);
return;
}





function sendstavca(){

if(grandsendstate>0) return;
var mExp=null;
var MAX=0;
var VALUE=0;
if(mExpressState==0) mExp=mExpress;
if(mExpressState==1) mExp=mExpressDay;
if(mExpressState==2) mExp=mExpressDayLive;

var i=0;
var message="";


if(sendstate==1) return;
if(savestate==0&&mExpressState==0&&(freebetstate==0||ordinarflag==1||rapidcheck==1)) return;

if((savestateDay==0)&&(mExpressState==1))return;
if((savestateDayLive==0)&&(mExpressState==2))return;

if(mExpressState>0||ordinarflag!=0||rapidcheck==1) freebetstate=0;

if(freebetstate==1&&rDate.getTime()>freeDate.getTime()) {clearfreebet();showWarning("Время для бесплатной ставки истекло!","OK","",0,null);return;}
if(freebetstate==1&&parseFloatExt(mOrdinar.V)<freebetarray[freebetnum].minkoef) {showWarning("Коэффициент не подходит условию! Выберите линию с большим коэффициентом.","OK","",0,null);return;}


if(mClient.igra>-10&&bonusactiv==2){showWarning('ВАШ БОНУС. Вы не воспользовались нашим <a style="color:#F47621;width:100%;text-decoration:none;font-weight:bold;" href="#" onclick="javascript:hashnav(&quot;bonusaccept&quot;);CloseWarning();return false;">бонусным предложением</a>. Сделав ставку, Вы отказываетесь от получения бонуса.',"Принять ставку","Отмена",1,function(){bonusactiv=0;webSocket.send("NOBONUS24");sendstavca();});return;}



if(mExpressState==0){
if(expressflag>0) {MAX=min2Express[expressflag];VALUE=parseFloatExt(summainput.value);}
if(expressflag==0&&ordinarflag==0) {MAX=parseFloatExt(mOrdinar.Maxim);VALUE=parseFloatExt(mOrdinar.summo);}
if(expressflag==0&&ordinarflag==1) for(i=0;i<mExp.length;i++) {if(mExp[i].OrdinarState+mExp[i].State>0) continue; MAX=MAX+parseFloatExt(mExp[i].Maxim);VALUE=VALUE+parseFloatExt(mExp[i].summo);}

}
if(mExpressState==1){MAX=min2ExpressDay;VALUE=parseFloatExt(summainputDay.value);}
if(mExpressState==2){MAX=min2ExpressDayLive;VALUE=parseFloatExt(summainputDayLive.value);}


if(loginstate==0) {
showWarningReg();
//showWarning(war205,"Зарегистрироваться","Отмена",1,null);
return;}

if(mClient.balance<VALUE&&freebetstate==0){showWarning("Ваша ставка не принята! Недостаточно средств на счету.","OK","",0,null);return;}
if(MAX<VALUE&&freebetstate==0){showWarning("Вы превыслили максимальную сумму! Максимальная сумма для данной ставки: "+ Math.round(MAX*100)/100 +" "+ mClient.Val[mClient.valuta-1],"OK","",0,null);return;}
if(VALUE<Math.round(mClient.min*100)/100&&freebetstate==0) {showWarning("Сумма ставки меньше минимальной суммы! Минимальная сумма для данной ставки: "+Math.round(mClient.min*100)/100 +" "+ mClient.Val[mClient.valuta-1],"OK","",0,null);return;}



if(((bonusnewindex==1)||(bonusnewindex==2))&&(bonusnewstate<1&&freebetstate==0)){
if(mExpressState==0&&ordinarflag==1&&mExp.length>1&&expressflag==0){
message="Внимание!Ставка по акции <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav2(&quot;/akcii/748.html/&quot;);CloseWarning();return false;'>«Следующая ставка не проиграет»</a>, должны быть только по одному событию, иначе Ваш бонус будет аннулирован.";
}

if(VALUE<bonusnew&&message.length==0){ 
if(bonusnewindex==1){
//if(iphone==1) message="Внимание!Максимальная сумма по акции «Следующая ставка не проиграет» "+bonusnew+mClient.Val[mClient.valuta-1]+ " -  и мы вернем Вам деньги если проиграете."; else 
message="Внимание!Максимальная сумма по акции <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav2(&quot;/akcii/748.html/&quot;);CloseWarning();return false;'>«Следующая ставка не проиграет»</a> "+bonusnew+mClient.Val[mClient.valuta-1]+ " -  и мы вернем Вам деньги если проиграете."}

if(bonusnewindex==2){
//if(iphone==1) message="Внимание!Согласно условиям «Следующая ставка не проиграет» сумма ставки должна превышать возврат "+bonusnew+mClient.Val[mClient.valuta-1]+ " - иначе Ваш бонус будет аннулирован."; else 
message="Внимание!Согласно условиям <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav2(&quot;/akcii/748.html/&quot;);CloseWarning();return false;'>«Следующая ставка не проиграет»</a> сумма ставки должна превышать возврат "+bonusnew+mClient.Val[mClient.valuta-1];
"Внимание! Ставка не может быть принята, так как по условиям акции <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav2(&quot;/akcii/748.html/&quot;);CloseWarning();return false;'>«Следующая ставка не проиграет»</a> должна быть не менее"+bonusnew+mClient.Val[mClient.valuta-1];//, где xxx - сумма застрахованной ставки или 500 рублей.

//+ " - иначе Ваш бонус будет аннулирован."
}
}
if(expressflag>0){for(i=0;i<mExp.length;i++) if(parseFloatExt(mExp[i].V)>=1.7) break;if(i==mExp.length) i=-1;} 
else if(parseFloatExt(mOrdinar.V)<1.7) i=-1;

//console.log("bonusnewindex="+bonusnewindex+" i="+i);

//alert(message);
//return;
if(i==-1&&bonusnewindex==2&&message.length==0){ 
//if(iphone!=1)
message="Внимание!Ставка не может быть принята, так как по условиям акции <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav2(&quot;/akcii/748.html/&quot;);CloseWarning();return false;'>«Следующая ставка не проиграет»</a> должна быть с коэффициентом не менее "+bonusnewkoef+".";

//message="Внимание! Ваш бонус «Следующая ставка не проиграет» будет аннулирован так как Вы не поставили ни на один коэффициент больше или равный "+bonusnewkoef+".";
//else message="Внимание! Ваш бонус «Следующая ставка не проиграет» будет аннулирован так как Вы не поставили ни на один коэффициент больше или равный "+bonusnewkoef+".";
}

if(message.length>0&&bonusnewindex==1){bonusnewstate=1;showWarning(message+" Принять ставку?","Принять","Отмена",1,sendstavca);return;}
if(message.length>0&&bonusnewindex==2){showWarning(message,"OK","",0,null);return;}
}


if(expressflag==0&&ordinarflag==0&&mExpressState==0&&(checkbet.checked==false)&&mOrdinar.V!=mOrdinar.V_)
{showWarning("Коэффициент изменился! C "+mOrdinar.V_+" на "+mOrdinar.V+ ". Принять ставку?","Принять","Отмена",1,sendstavca2);return;}
else sendstavca2();

}


function sendstavca2(){
	
bonusnewstate=0;		
if(sendstate==1) return;
if(grandsendstate>0) return;

if(mExpressState==0){savestate=saveenabled();if(savestate==0&&freebetstate==0) return;}
if(mExpressState==1){savestateDay=saveenabledDay();if(savestateDay==0)return;}
if(mExpressState==2){savestateDayLive=saveenabledDayLive();if(savestateDayLive==0)return;}
if((expressflag>2)&&(mExpressState==0)) return;

for(i=0;i<cs_("ord5").length;i++) {cs_("ord5")[i].disabled="disabled";cs_("ord1")[i].disabled="disabled";}


var mExp=null;
if(mExpressState==0) mExp=mExpress; 
if(mExpressState==1) mExp=mExpressDay;
if(mExpressState==2) mExp=mExpressDayLive;

if(mExpressState==1) _gaq.push(['_trackPageview',"virtual/expressday"]);
if(mExpressState==2) _gaq.push(['_trackPageview',"virtual/expresslive"]);

summainput.disabled="disabled";
summainputDay.disabled="disabled";
summainputDayLive.disabled="disabled";
var i=0;
var j=0;
var N=0;
//cs_("ord55")[0].disabled="disabled";



savestate=0;
savestateDay=0;
savestateDayLive=0;
stavcaButton.style.opacity="0.6";stavcaButton.style.cursor="default";
if(mExpressState==0) j=expressflag+1;else j=2;
if((j>1)&&(mExp.length==1))j=1;
sendindex=0;
sendarray.splice(0);
writeByte(j);

if((expressflag+ordinarflag==0)&&(mExpressState==0)) j=1; else
if(expressflag==0&&ordinarflag==1&&mExpressState==0)
{ j=0; for(i=0;i<mExp.length;i++) if(mExp[i].OrdinarState+mExp[i].State==0) j++;}
else j=mExp.length;
writeByte(j);
if((expressflag==2)&&(mExpressState==0)) sendbox=j=soho2.options[soho2.selectedIndex].value; else j=0;
writeByte(j);
if(mExpressState==0){
if(expressflag==0&&ordinarflag==0) N=mOrdinar.summo; else N=parseFloatExt(summainput.value);
}
if(mExpressState==1) N=parseFloatExt(summainputDay.value);
if(mExpressState==2) N=parseFloatExt(summainputDayLive.value);
//else N=parseFloatExt(summainputDay.value);

writeDouble(N);

if(mExpressState==0){if((checkbet.checked=="checked")||(checkbet.checked==true)) j=1; else j=0;}
if(mExpressState>0) j=0;

writeByte(j);
actionstate=0;
if(mExpressState>0) actionstate=mExpressState+1;
if(freebetstate==1) actionstate=4;
j=actionstate;
writeByte(j);
if(freebetstate==1) writeInt(freebetid);
actionstate=0;


if((expressflag+ordinarflag>0)||(mExpressState>0)){
ordinararray=new Array();
for(i=0;i<mExp.length;i++){
if(ordinarflag==1&&expressflag==0&&mExpressState==0){ 
if(mExp[i].State+mExp[i].OrdinarState>0) continue;
else grandsendstate++;
}

//console.log("grandsendstate="+grandsendstate);

ordinararray.push(mExp[i].id_event);
writeUnsignedInt(parseInt(mExp[i].id_line));
writeUnsignedInt(mExp[i].id_event);
writeShort(mExp[i].ID_TIP_RADAR);

writeByte(mExp[i].live);
j=mExp[i].Index+1;
writeByte(j);
N=parseFloatExt(mExp[i].V);
writeDouble(N);
if(expressflag>0&&mExp.length==1&&mExpressState==0) N=parseFloatExt(summainput.value);else N=parseFloatExt(mExp[i].summo);
writeDouble(N);
};}

freebetstate2=0;

if((expressflag+ordinarflag==0)&&(mExpressState==0)){
writeUnsignedInt(mOrdinar.id_line);
writeUnsignedInt(mOrdinar.id_event);
writeShort(mOrdinar.ID_TIP_RADAR);

writeByte(mOrdinar.live);
j=mOrdinar.Index+1;
writeByte(j);
N=parseFloatExt(mOrdinar.V);
writeDouble(N);
if(freebetstate==1){freebetstate2=1; writeDouble(freebetsumm);} else writeDouble(mOrdinar.summo);

};
sendstate=1;


var pedro=0;

if((expressflag==0)&&(mExpressState==0)&&(mOrdinar.live==1))pedro=1;
if((expressflag+ordinarflag>0)&&(mExpressState==0)) for(i=0;i<mExp.length;i++) if(mExp[i].live==1&&(expressflag>0||mExp[i].OrdinarState+mExp[i].State==0)){pedro=1;break;};

if(pedro==1){
clearInterval(cuinterval);
Cuponslide.style.display="";
Cuponslide.previousSibling.style.display="none";
Cuponslide.childNodes[0].style.marginLeft="-215px";
cuinterval=setInterval(cuponlide,107);
}

if(mExpressState==2){
clearInterval(cuinterval2);
Cuponslide2.style.display="";
//Cuponslide2.previousSibling.style.display="none";
Cuponslide2.childNodes[0].style.marginLeft="-215px";
cuinterval2=setInterval(cuponlide2,107);
}




stavcaExpressflag=expressflag;
webSocket.send("stavka");
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));
multiordinar = 0;
}

function drawcuponbet(){
var i=0;
var l=0;
var k=0;
var temp6="";
var temp5="";
var temp4="";


for(i=0;i<mH.length;i++){
if(colorhis2==0) {temp5='#FFFFFF';temp6="#E6E6E6";} else {temp5='#EBEBEB';temp6="#FFFFFF";}
colorhis2=(colorhis2+1)%2;

mH[i].string='<div style="width:235px;float:left; font-size:11px;border-bottom:1px solid #4B4B4B;background-color:'+temp5+';"><div style="width:225px;float:left;margin-left:10px;margin-bottom:5px; margin-top:8px;">'+mH[i].Title;



for(l=0;l<mH[i].mHl.length;l++){
mH[i].string=mH[i].string+'<span style="width:215px;float:left; font-size:11px;color:#F47621;margin-top:4px;cursor:pointer;"';
if(mH[i].mHl[l].ID_CHAMPIONSHIP==(mH[i].mHl[l].ID_COUNTRY+10)*10000+13)
mH[i].string=mH[i].string+'onclick="overclick();ChampionClick2('+mH[i].mHl[l].ID_CHAMPIONSHIP+',1)"> '+mH[i].mHl[l].Title+'</span>';
else mH[i].string=mH[i].string+'onclick="plushash('+mH[i].mHl[l].ID_EVENT+')"> '+mH[i].mHl[l].Title+'</span>';


mH[i].string=mH[i].string+'<span style="width:210px;float:left; font-size:11px;color:#656565;margin-top:1px;">'+mH[i].mHl[l].Free+'</span>'+
'<span style="width:170px;float:left; font-size:11px;color:#000000;margin-top:1px;">'+mH[i].mHl[l].R+'</span>'+
'<span style="width:30px;float:left; font-size:11px;color:#000000;text-align:right;margin-top:1px;">'+mH[i].mHl[l].V+'</span>';
if(l==mH[i].mHl.length-1&&(mH[i].BONUS!=0||mH[i].ACTION==4)) continue;
mH[i].string=mH[i].string+'<span style="width:215px;float:left;margin-top:3px;border-bottom:1px solid '+temp6+';"></span>';
;}

mH[i].string=mH[i].string+'<span style="width:170px;float:left; font-size:11px;color:#000000;font-weight:bold;margin-top:3px;">'+mH[i].Subtitle+'</span>'+
'<span style="width:100px;float:left;margin-left:-70px;font-size:11px;color:#000000;text-align:right;font-weight:bold;margin-top:3px;">'+mH[i].Subtitle4+'</span>'+
'<span style="width:85px;float:left; font-size:11px;color:#F47621;font-weight:bold;margin-top:3px;">'+mH[i].Subtitle2+'</span>'+
'<span style="width:115px;float:left; font-size:11px;margin-left:0px;color:#F47621;text-align:right;font-weight:bold;margin-top:3px;">'+mH[i].Subtitle3+'</span>'+mH[i].Subtitle5+'</div></div>'

}


for(k=0;k<mH.length;k++) temp4=temp4+mH[k].string;
CuponBet.innerHTML=temp4+'<div style="width:235px;float:left;height:20px; margin-top:-2px;background-color:'+temp5+';border-bottom-left-radius:10px;border-bottom-right-radius:10px;"></div>';

    
if(temp4==""){CuponBet.innerHTML='<div style="width:235px;float:left; background-color:#FFFFFF;height:48px; padding-top:16px; text-align:center; font-size:12px;color:#000000;">На данный момент у Вас<br />нет нерассчитанных ставок</div>';} else cuponclick2();    

}

function regback(k){
if(regsend!=0) return;	
var i=0;
	
	
if(k==0){sendregform();	

if(regnavstate==0){
for(i=0;i<7;i++) if(Reg4[i].style.border.indexOf("2px")>-1) break;
if(i<7) return;
sendindex=0;
sendarray.splice(0);
writeUTF(Reg4[0].value);//фамилия
writeUTF(Reg4[1].value);//имя
writeShort(Reg4[2].options[Reg4[2].selectedIndex].value);//дата
writeShort(Reg4[3].options[Reg4[3].selectedIndex].value);//месяц
writeShort(Reg4[4].options[Reg4[4].selectedIndex].value);//год
writeUTF(id_("codcount").innerHTML.split('<font>').join('').split('</font>').join('').split(' ').join('').split('&nbsp;').join('').split('""').join('')+Reg4[6].value);//мобильный телефон
regsend=2;
sendarray[sendindex]=0;
webSocket.send("newclient1");
webSocket.send(EncodeBase64_2(sendarray));
_gaq.push(['_trackPageview',"virtual/reg_page_1"]);
return;
}

if(regnavstate==1){
for(i=0;i<13;i++) if(Reg4[i].style.border.indexOf("2px")>-1) break;
if(i<13) return;
sendindex=0;
sendarray.splice(0);
writeUTF(Reg4[7].value);
writeUTF(Reg4[9].value);
regsend=2;
sendarray[sendindex]=0;
webSocket.send("newclient2");
webSocket.send(EncodeBase64_2(sendarray));
_gaq.push(['_trackPageview',"virtual/reg_page_2"]);
return;
}

}



if(k==1){
if(regnavstate<1) return;	
regnavstate--;	
}




if(regnavstate==0){
id_("regtitle").innerHTML="ЛИЧНАЯ ИНФОРМАЦИЯ";	
id_("REGBF").style.display="";
id_("REGBB").style.display="none";
cs_("reggr1")[0].style.backgroundImage="url(/resources/images/reggr2.png)";
cs_("reggr1")[0].style.borderColor="#D06D26";
cs_("reggr1")[1].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr1")[1].style.borderColor="#C0C0C0";
cs_("reggr2")[0].style.backgroundImage=cs_("reggr2")[1].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr2")[0].style.borderColor=cs_("reggr2")[1].style.borderColor="#C0C0C0";
cs_("reggr2")[0].style.borderLeftColor=cs_("reggr2")[1].style.borderLeftColor="#D06D26";
id_("regstep1").style.display="";id_("regstep2").style.display="none";id_("regstep3").style.display="none";
id_("regrstep1").style.display="";id_("regrstep2").style.display="none";id_("regrstep3").style.display="none";
id_("regp1").style.height=id_("regp2").style.height="375px";
}

if(regnavstate==1){
id_("regtitle").innerHTML="ИНФОРМАЦИЯ О СЧЕТЕ";		
id_("REGBF").style.display="";
id_("REGBB").style.display="";
cs_("reggr1")[0].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr1")[0].style.borderColor="#C0C0C0";
cs_("reggr1")[1].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr1")[1].style.borderColor="#C0C0C0";
cs_("reggr2")[0].style.backgroundImage=cs_("reggr2")[1].style.backgroundImage="url(/resources/images/reggr2.png)";
cs_("reggr2")[0].style.borderColor=cs_("reggr2")[1].style.borderColor="#D06D26";
id_("regstep1").style.display="none";id_("regstep2").style.display="";id_("regstep3").style.display="none";
id_("regrstep1").style.display="none";id_("regrstep2").style.display="";id_("regrstep3").style.display="none";
id_("regp1").style.height=id_("regp2").style.height="405px";
if(k==3) sendsms();
if(k==3) for(i=0;i<13;i++) Reg4[i].style.border="";	
}



if(regnavstate==2){
id_("regtitle").innerHTML="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ";	
id_("REGBF").style.display="none";
id_("REGBB").style.display="";
cs_("reggr1")[1].style.backgroundImage="url(/resources/images/reggr2.png)";
cs_("reggr1")[1].style.borderColor="#D06D26";
cs_("reggr1")[0].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr1")[0].style.borderColor="#C0C0C0";
cs_("reggr2")[0].style.backgroundImage=cs_("reggr2")[1].style.backgroundImage="url(/resources/images/reggr1.png)";
cs_("reggr2")[0].style.borderColor=cs_("reggr2")[1].style.borderColor="#C0C0C0";
cs_("reggr2")[0].style.borderRightColor=cs_("reggr2")[1].style.borderRightColor="#D06D26";

id_("regstep1").style.display="none";id_("regstep2").style.display="none";id_("regstep3").style.display="";
id_("regrstep1").style.display="none";id_("regrstep2").style.display="none";id_("regrstep3").style.display="";
id_("regp1").style.height=id_("regp2").style.height="600px";	
if(k==3) for(i=0;i<22;i++) Reg4[i].style.border="";	
}




	

	

}



function sendsmsslide(){
smstimec1--;
if(smstimec1<0){
clearInterval(smstime1);
cs_("smsrep")[0].style.display="";
cs_("smsrep")[0].previousSibling.innerHTML="Не пришел код?";
smstimec1=59;	return;
}
cs_("smsrep")[0].previousSibling.innerHTML=cs_("smsrep")[1].previousSibling.innerHTML="Повторная отправка СМС через "+smstimec1+" сек.";
}

function sendsmsslide2(){
smstimec2--;
if(smstimec2<0){
clearInterval(smstime2);
cs_("smsrep")[1].style.display="";
cs_("smsrep")[1].previousSibling.innerHTML="Не пришел код?";
smstimec2=59;	return;
}
cs_("smsrep")[1].previousSibling.innerHTML="Повторная отправка СМС через "+smstimec2+" сек.";
}




function sendsms(){
if(smstimec1!=59) return;	
cs_("smsrep")[0].style.display="none";
cs_("smsrep")[0].previousSibling.innerHTML="Повторная отправка СМС через 59 сек.";
smstime1=setInterval(sendsmsslide,1000);

//if(smstime==1) return;
sendindex=0;
//smstime=1;
sendarray.splice(0);
writeUTF(id_("codcount").innerHTML.split('<font>').join('').split('</font>').join('').split(' ').join('').split('&nbsp;').join('').split('""').join('')+Reg4[6].value);
sendarray[sendindex]=0;
webSocket.send("smsregistration");
webSocket.send(EncodeBase64_2(sendarray));
}


function sendsms2(){
cs_("smsrep")[1].style.display="none";
cs_("smsrep")[1].previousSibling.innerHTML="Повторная отправка СМС через 59 сек.";
smstime2=setInterval(sendsmsslide2,1000);

webSocket.send("smsrecover");
}






function sendregform(){
if(regsend!=0) return;	
var i=0;
var j=0;

if(Reg4[5].selectedIndex==0){
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span>';
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span>';}

if(Reg4[5].selectedIndex==1){
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#656565;font-size:11px;">кириллицей как в паспорте</span>';
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#656565;font-size:11px;">кириллицей как в паспорте</span>';}

if(Reg4[5].selectedIndex>1){
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#656565;font-size:11px;">латиницей как в паспорте</span>';
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#656565;font-size:11px;">латиницей как в паспорте</span>';}


for (i=0;i<21;i++) Reg4[i].style.border="";
for (i=0;i<21;i++) {
if(i==12||i==13) continue;	


if((i<2)&&Reg4[i].value.split(" ").join("").length==0){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==6)&&Reg4[i].value.length<4){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==2||i==3||i==4)&&Reg4[i].options[Reg4[i].selectedIndex].text=="-"){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}

if(i==5){
if((Reg4[2].options[Reg4[2].selectedIndex].value==31)&&((Reg4[3].options[Reg4[3].selectedIndex].value==2)||(Reg4[3].options[Reg4[3].selectedIndex].value==4)||(Reg4[3].options[Reg4[3].selectedIndex].value==6)||(Reg4[3].options[Reg4[3].selectedIndex].value==9)||(Reg4[3].options[Reg4[3].selectedIndex].value==11))){Reg4[2].style.border="2px solid #FF0000";Reg4[2].focus();return;}
if((Reg4[2].options[Reg4[2].selectedIndex].value==30)&&(Reg4[3].options[Reg4[3].selectedIndex].value==2)) {Reg4[2].style.border="2px solid #FF0000";Reg4[2].focus();return;}
if((Reg4[2].options[Reg4[2].selectedIndex].value==29)&&(Reg4[3].options[Reg4[3].selectedIndex].value==2)){ 
if((parseInt(Reg4[4].options[Reg4[4].selectedIndex].value)%100==0)&&(parseInt(Reg4[4].options[Reg4[4].selectedIndex].value)%400!=0)){Reg4[2].style.border="2px solid #FF0000";Reg4[2].focus();return;}
if(parseInt(Reg4[4].options[Reg4[4].selectedIndex].value)%4!=0){Reg4[2].style.border="2px solid #FF0000";Reg4[2].focus();return;}
}
if(-Reg4[4].options[Reg4[4].selectedIndex].value+rDate.getFullYear()<18){Reg4[4].style.border="2px solid #FF0000";Reg4[4].focus();return;}
if((-Reg4[4].options[Reg4[4].selectedIndex].value+rDate.getFullYear()==18)&&(Reg4[3].options[Reg4[3].selectedIndex].value-1>rDate.getMonth())){Reg4[3].style.border="2px solid #FF0000";Reg4[3].focus();return;}
if((-Reg4[4].options[Reg4[4].selectedIndex].value+rDate.getFullYear()==18)&&(Reg4[3].options[Reg4[3].selectedIndex].value-1==rDate.getMonth())&&
(Reg4[2].options[Reg4[2].selectedIndex].value>rDate.getDate())) {Reg4[2].style.border="2px solid #FF0000";Reg4[2].focus();return;}
}


if((i==5)&&(Reg4[i].selectedIndex==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}




if((i==5)&&(Reg4[i].selectedIndex==1)){
for(j=0;j<Reg4[0].value.length;j++)  if(Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j) <1040||Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j)>1105) {Reg4[0].style.border="2px solid #FF0000";
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#656565;font-size:11px;"><span style="color:#ff0000;font-size:11px;">кириллицей как в паспорте</span>';
Reg4[0].focus();return;}


for(j=0;j<Reg4[1].value.length;j++)  if(Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j) <1040||Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j)>1105) {Reg4[1].style.border="2px solid #FF0000";
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#ff0000;font-size:11px;">кириллицей как в паспорте</span>';
Reg4[1].focus();return;}
 }
 

if((i==5)&&(Reg4[i].selectedIndex!=1)){
for(j=0;j<Reg4[0].value.length;j++)  if(Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j) <65||Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j) >122||(Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j) >90&&Reg4[0].value.split(" ").join("").split("-").join("").charCodeAt(j) <97)) {Reg4[0].style.border="2px solid #FF0000";
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#ff0000;font-size:11px;">латиницей как в паспорте</span>';
Reg4[0].focus();return;}
 for(j=0;j<Reg4[1].value.length;j++)  if(Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j) <65||Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j) >122||(Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j) >90&&Reg4[1].value.split(" ").join("").split("-").join("").charCodeAt(j) <97)) {
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#ff0000;font-size:11px;">латиницей как в паспорте</span>';
Reg4[1].style.border="2px solid #FF0000";Reg4[1].focus();return;}
 }





if((i==7)&&((Reg4[i].value.indexOf('@')==-1)||(Reg4[i].value.indexOf('.')==-1)||(Reg4[i].value.length<4))){
	Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
	

if(i==7){
for(j=0;j<Reg4[i].value.length;j++)  if(mailchek(Reg4[i].value.charCodeAt(j))==false) {Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}	
}

	
	
	
	
if((i==8)&&(Reg4[i].value!=Reg4[i-1].value)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}

if(i==9){

if(Reg4[i].value.length>15||Reg4[i].value.length<4) {Reg4[i].style.border="2px solid #FF0000"; Reg4[i].focus();return;}
for(j=0;j<Reg4[i].value.length;j++) 

if((Reg4[i].value.charCodeAt(j)<65&&Reg4[i].value.charCodeAt(j)>58)||Reg4[i].value.charCodeAt(j)>122||Reg4[i].value.charCodeAt(j)<48||(Reg4[i].value.charCodeAt(j)>90&&Reg4[i].value.charCodeAt(j)<97)) {Reg4[i].style.border="2px solid #FF0000"; Reg4[i].focus();return;}

}

if((i==10)&&(Reg4[i].value.length<6||Reg4[i].value.length>20||Reg4[i].value.indexOf(" ")==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==11)&&(Reg4[i].value!=Reg4[i-1].value)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==13)&&Reg4[i].value.split(" ").join("").length<1){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}

if((i==15||i==18)&&Reg4[i].value.length<2){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==16||i==17)&&(Reg4[i].selectedIndex==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==19)&&(Reg4[i].selectedIndex==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==20)&&(Reg4[i].value.length<5||Reg4[i].value.length>7)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
//if((i==15)&&(Reg4[i].selectedIndex==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
//if((i==16)&&(Reg4[i].selectedIndex==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
}

if((Regcheck.checked=="false")||(Regcheck.checked==false)){showWarning(war167,"OK","",0,null);return;}

if(regnavstate<2) return;

sendindex=0;
sendarray.splice(0);
writeUTF(Reg4[0].value);//фамилия
writeUTF(Reg4[1].value);//имя
writeUTF("");//отчество
writeShort(Reg4[2].options[Reg4[2].selectedIndex].value);//дата
writeShort(Reg4[3].options[Reg4[3].selectedIndex].value);//месяц
writeShort(Reg4[4].options[Reg4[4].selectedIndex].value);//год
writeUTF(Reg4[5].options[Reg4[5].selectedIndex].text);//страна
//writeUTF("");

if(Reg4[17].selectedIndex==0) writeUTF("");
else writeUTF(Reg4[17].options[Reg4[17].selectedIndex].text);//город
writeUTF(Reg4[15].value);//индекс
if(Reg4[16].selectedIndex==0) writeUTF("");
else writeUTF(Reg4[16].options[Reg4[16].selectedIndex].text);//регион
writeUTF(Reg4[18].value);//адрес
writeUTF(id_("codcount").innerHTML.split('<font>').join('').split('</font>').join('').split(' ').join('').split('&nbsp;').join('').split('""').join('')+Reg4[6].value);//мобильный телефон
writeUTF(Reg4[7].value);//email
writeUTF(Reg4[9].value);//логин
writeUTF(Reg4[10].value);//пароль
writeInt(Reg4[12].options[Reg4[12].selectedIndex].value);//Валюта счета
mClient.valuta=Reg4[12].options[Reg4[12].selectedIndex].value;
if(authstate!=null)id_("bonvalut1").src="/resources/images/bonus200024n"+bonvalut[mClient.valuta-1]+".jpg";

writeUTF(Reg4[13].options[Reg4[13].selectedIndex].text);//контрольный вопрос
writeUTF(Reg4[14].value);//Контрольный ответ
writeUnsignedInt(echip[Reg4[19].selectedIndex*2]);
//if(Reg4[19].selectedIndex==0) writeUTF("");else  writeUTF(Reg4[19].options[Reg4[19].selectedIndex].text);//любимая команда

writeUTF(Reg4[20].value);
if((id_("regcheckmail").checked=="false")||(id_("regcheckmail").checked==false))
writeByte(0); else writeByte(1);
writeUTF(btag[1]);
writeUTF(btag[0]);
writeUTF(Reg4[21].value);
writeUTF(ipadres);
id_("regechip").src='/resources/images/echip/'+echip[2*Reg4[19].selectedIndex]+'.jpg?2'


regsend=1;
sendarray[sendindex]=0;
webSocket.send("newclient");
webSocket.send(EncodeBase64_2(sendarray));
_gaq.push(['_trackPageview',"virtual/regfinish"]);
}



function saveremember1(){
Rem1[0].style.border="";
Rem1[1].style.border="";
if((Rem1[0].value.indexOf('@')==-1)||(Rem1[0].value.indexOf('.')==-1)||(Rem1[0].value.length<4)){Rem1[0].style.border="2px solid #FF0000";Rem1[0].focus();return;}
if((Rem1[1].value!=rem1key)){Rem1[1].style.border="2px solid #FF0000";Rem1[1].focus();return;}
sendindex=0;
sendarray.splice(0);
writeUTF(Rem1[0].value);
sendarray[sendindex]=0;
webSocket.send("sendemail");
webSocket.send(EncodeBase64_2(sendarray));
Rem1[1].value="";
}

function saveremember2(){
//console.log(Rem2[3].value);
if(Rem2[3].value.length>0) return;    
//console.log("saveremember2");
var i=0;
for(i=1;i<3;i++) Rem2[i].style.border="";

//if((Rem2[1].value.length==0)){Rem2[1].style.border="2px solid #FF0000";Rem2[1].focus();return;}
if(Rem2[2].value.length<5||Rem2[2].value.length>7){Rem2[2].style.border="2px solid #FF0000";Rem2[2].focus();return;}

sendindex=0;
sendarray.splice(0);
writeUTF(EmailCod);
writeUTF(Rem2[1].value);
writeUTF(Rem2[2].value);
Rem2[2].disabled="disabled";
sendarray[sendindex]=0;
webSocket.send("sendanswer");
webSocket.send(EncodeBase64_2(sendarray));
}


function saveremember3(){
if(Rem2[3].value.length==0) return;    
var i=0;
if(Rem2[4].value.length<6||Rem2[4].value.length>20||Rem2[4].value.indexOf(" ")==0){Rem2[4].style.border="2px solid #FF0000";Rem2[4].focus();return;}
if(Rem2[4].value!=Rem2[5].value){Rem2[5].style.border="2px solid #FF0000";Rem2[5].focus();return;}

userpass=Rem2[4].value;
userlogin=Rem2[3].value;

sendindex=0;
sendarray.splice(0);
writeUTF(Rem2[3].value);
writeUTF(EmailCod);
writeUTF(Rem2[0].value);
writeUTF(Rem2[1].value);
writeUTF(Rem2[4].value);
writeUTF(Rem2[2].value);
sendarray[sendindex]=0;
webSocket.send("newpassword");
webSocket.send(EncodeBase64_2(sendarray));

}


function clearRegister(){ 
if(authstate==null) return;
var i=0;

for (i=0;i<22;i++) {
if(i==5||i==4||i==3||i==2||i==13||i==12||i==16||i==17||i==19)continue;
Reg4[i].value="";}
Reg4[5].selectedIndex=0;
Reg4[0].previousSibling.innerHTML='Фамилия:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span>';
Reg4[1].previousSibling.innerHTML='Имя:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span>';
Reg4[4].selectedIndex=80;
Reg4[3].selectedIndex=0;
Reg4[2].selectedIndex=0;
Reg4[13].selectedIndex=0;
Reg4[12].selectedIndex=0;
Reg4[19].selectedIndex=0;
Regcheck.checked=false;
Reg4[21].disabled="";
codecountry();

}

function generatekey(obj){
var u1=parseInt(10*Math.random());
var u2=parseInt(10*Math.random());
obj.innerHTML=u1+"+"+u2+"=";
return u1+u2;
}

function drawfamilia4(){
var i=0;
var j=1;
var k=0;
k=Reg7[18].options[Reg7[18].selectedIndex].value;
if(k>-1){
if(doc[documents[k].ID_DOCUMENT][0]==1)
{Reg7[19].style.display="";Reg7[19].previousSibling.style.display="";Reg7[19].nextSibling.style.display="";Reg7[19].innerHTML=documents[k].SERIA_NAME;}
else {Reg7[19].style.display="none";Reg7[19].previousSibling.style.display="none";Reg7[19].nextSibling.style.display="none";}

if(doc[documents[k].ID_DOCUMENT][1]==1)
{Reg7[20].style.display="";Reg7[20].previousSibling.style.display="";Reg7[20].nextSibling.style.display="";Reg7[20].innerHTML=documents[k].NOMER_NAME;}
else {Reg7[20].style.display="none";Reg7[20].previousSibling.style.display="none";Reg7[20].nextSibling.style.display="none";}

if(doc[documents[k].ID_DOCUMENT][2]==1)
{Reg7[21].style.display="";Reg7[21].previousSibling.style.display="";Reg7[21].nextSibling.style.display="";Reg7[21].innerHTML=documents[k].DATA_V_NAME;}
else {Reg7[21].style.display="none";Reg7[21].previousSibling.style.display="none";Reg7[21].nextSibling.style.display="none";}


if(doc[documents[k].ID_DOCUMENT][3]==1)
{Reg7[22].style.display="";Reg7[22].previousSibling.style.display="";Reg7[22].nextSibling.style.display="";Reg7[22].innerHTML=documents[k].SROK_D_NAME;}
else {Reg7[22].style.display="none";Reg7[22].previousSibling.style.display="none";Reg7[22].nextSibling.style.display="none";}


if(doc[documents[k].ID_DOCUMENT][4]==1)
{Reg7[23].style.display="";Reg7[23].previousSibling.style.display="";Reg7[23].nextSibling.style.display="";Reg7[23].innerHTML=documents[k].KEM_V_NAME;}
else {Reg7[23].style.display="none";Reg7[23].previousSibling.style.display="none";Reg7[23].nextSibling.style.display="none";}


if(doc[documents[k].ID_DOCUMENT][5]==1)
{Reg7[24].style.display="";Reg7[24].previousSibling.style.display="";Reg7[24].nextSibling.style.display="";Reg7[24].innerHTML=documents[k].KOD_POD_NAME;}
else {Reg7[24].style.display="none";Reg7[24].previousSibling.style.display="none";Reg7[24].nextSibling.style.display="none";}
}

else for(i=0;i<6;i++){Reg7[19+i].style.display="none";Reg7[19+i].previousSibling.style.display="none";Reg7[19+i].nextSibling.style.display="none";}

;}

var l_scan=0;

function sendscan(){
if(id_("file").value.length<3){showWarning("Файл не выбран!","OK","",0,null); return;}	
id_('myscan').submit();	
documents[l_scan].scan=1;
radioclick();
if(j77==1||j77==2){
id_("redline").onclick=null;
id_("redline").style.display="none";
id_("redline").innerHTML="";}
}


function radioclick(){
var i=0;
var j=1;
var k=0;
k=Reg7[25].selectedIndex+1;
var FORM="";
var FORM2="";

if(doc2[k]==1){
l_scan=k;
//id_("SCANUS").style.display="none";
id_("SCANUS2").style.display="";
id_("SCANUS3").style.display="";

if(documents[k].scan==0||documents[k].scan==3)
{id_("FAM5BUTTON").childNodes[0].innerHTML="Отправить";
//id_("FAM5BUTTON").nextSibling.style.display="";
id_("FAM5BUTTON").style.marginTop="100px";
id_("FAM5BUTTON").style.display="";

id_("FAM5BUTTON").onclick=sendscan;
if(documents[k].scan==0||documents[k].scan==3){FORM2='<span style="font-size:12px;	color:#000;margin-top:12px;width:200px;float:left;margin-left:20px;">Загрузите <span style="color:red"1<b>цветную фотографию</b></span> документа:</span>';
if(documents[k].scan==3){id_("SCANUS").innerHTML='<span style="font-size:12px;color:#000;margin-top:40px;width:228px;margin-left:10px;text-align:center;float:left;">Отклонен</span>'; id_("FAM5BUTTON").style.marginTop="37px";}; 
if(documents[k].scan==0) id_("SCANUS").innerHTML='<div style="float:left;width:250px;margin-left:5px;margin-top:0px;height:0px;"><input name="" type="image" style="outline:none;margin-left:5px;margin-top:15px;float:left;position:relative;" src="/resources/images/vosk2.png?7"><div style="float:left;font-size:11px; color:#000; margin-top:15px; margin-left:5px;width:210px;"><b>Загрузите документы, чтобы подтвердить, что аккаунт принадлежит Вам. После прохождения проверки Вам будет доступен вывод средств.</b></div></div>'

}





//gw.winlinebet.com
FORM = '<form action="https://docs.wlbill.com" id="myscan" name="form" method="post" target="hidden" enctype="multipart/form-data"><input type=hidden name="firm" value="0"><input type=hidden name="login" value="' + userlogin + '"><input type=hidden name="password" value="' + userpass + '">' + FORM2 + '<input type=hidden name="document' + documents[k].ID_DOCUMENT + '" value="0"><input id="file" type="file" style="margin-top:15px;" accept="image/jpeg,image/png,image/tiff,image/jpg" name="pic' + documents[k].ID_DOCUMENT + '" class="scan3">';
id_("SCANUS2").innerHTML=FORM;
//document.getElementsByName('login')[0].value=userlogin;document.getElementsByName('password')[0].value=userpass;
}

if(documents[k].scan==1||documents[k].scan==2){
//id_("SCANUS").style.display="";
id_("SCANUS2").style.display="none";
id_("SCANUS3").style.display="none";
id_("FAM5BUTTON").style.display="none";
//id_("FAM5BUTTON").nextSibling.style.display="none";
if(documents[k].scan==1) FORM='<span style="font-size:12px;color:#000;margin-top:30px;width:228px;margin-left:10px;text-align:center;float:left;">Ваш документ сохранен. В течении трех рабочих дней он пройдет проверку, а результаты будут отражены в личном кабинете и отправлены на почту.</span>'
if(documents[k].scan==2) FORM='<span style="font-size:12px;color:#71BA4E;margin-top:60px;width:248px;text-align:center;float:left;font-weight:bold;">Подтвержден</span>'
id_("SCANUS").innerHTML=FORM;
}

for(i=26;i<36;i++) Reg7[i].disabled="disabled";
if(doc[documents[k].ID_DOCUMENT][0]==1) Reg7[26].value=documents[k].SERIA_NAME;
if(doc[documents[k].ID_DOCUMENT][1]==1) Reg7[27].value=documents[k].NOMER_NAME;
if(doc[documents[k].ID_DOCUMENT][4]==1) Reg7[34].value=documents[k].KEM_V_NAME;
if(doc[documents[k].ID_DOCUMENT][5]==1) Reg7[35].value=documents[k].KOD_POD_NAME;
if(doc[documents[k].ID_DOCUMENT][2]==1){
for(i=0;i<Reg7[28].options.length;i++) if(Reg7[28].options[i].value==documents[k].vday) {Reg7[28].selectedIndex=i;break;}
for(i=0;i<Reg7[29].options.length;i++) if(Reg7[29].options[i].value==documents[k].vmonth) {Reg7[29].selectedIndex=i;break;}
for(i=0;i<Reg7[30].options.length;i++) if(Reg7[30].options[i].value==documents[k].vyear) {Reg7[30].selectedIndex=i;break;}
}



if(doc[documents[k].ID_DOCUMENT][3]==1){
for(i=0;i<Reg7[31].options.length;i++) if(Reg7[31].options[i].value==documents[k].dday) {Reg7[31].selectedIndex=i;break;}
for(i=0;i<Reg7[32].options.length;i++) if(Reg7[32].options[i].value==documents[k].dmonth) {Reg7[32].selectedIndex=i;break;}
for(i=0;i<Reg7[33].options.length;i++) if(Reg7[33].options[i].value==documents[k].dyear) {Reg7[33].selectedIndex=i;break;}
}
else{
Reg7[31].selectedIndex=Reg7[32].selectedIndex=0;	
Reg7[33].selectedIndex=5;
}
;}	

else {for(i=26;i<36;i++) Reg7[i].disabled="";
id_("FAM5BUTTON").childNodes[0].innerHTML="Сохранить";
//id_("FAM5BUTTON").nextSibling.style.display="none";
id_("FAM5BUTTON").style.display="";
id_("FAM5BUTTON").style.marginTop="200px";
id_("FAM5BUTTON").onclick=fam5click;
id_("SCANUS").style.display="none";
Reg7[26].value="";
Reg7[27].value="";
Reg7[28].selectedIndex=0;
Reg7[29].selectedIndex=0;
Reg7[30].selectedIndex=25;
Reg7[31].selectedIndex=0;
Reg7[32].selectedIndex=0;
Reg7[33].selectedIndex=0;
Reg7[34].value="";
Reg7[35].value="";

}



for(i=0;i<6;i++) { 
if(i<2){ 
if(doc[k][i]==0) {
Reg7[26+i].style.display="none";Reg7[26+i].value="";Reg7[26+i].previousSibling.style.display="none";Reg7[26+i].nextSibling.style.display="none";}
else {Reg7[26+i].style.display="";Reg7[26+i].previousSibling.style.display="";Reg7[26+i].nextSibling.style.display="";}
}

if(i==2){    
if(doc[k][i]==0) {Reg7[28].style.display="none";Reg7[29].style.display="none";Reg7[30].style.display="none";Reg7[28].previousSibling.style.display="none";Reg7[30].nextSibling.style.display="none";}
else {Reg7[28].style.display="";Reg7[29].style.display="";Reg7[30].style.display="";Reg7[28].previousSibling.style.display="";Reg7[30].nextSibling.style.display="";}
}

if(i==3){    
if(doc[k][i]==0) {Reg7[31].style.display="none";Reg7[32].style.display="none";Reg7[33].style.display="none";Reg7[31].previousSibling.style.display="none";Reg7[33].nextSibling.style.display="none";}
else {Reg7[31].style.display="";Reg7[32].style.display="";Reg7[33].style.display="";Reg7[31].previousSibling.style.display="";Reg7[33].nextSibling.style.display="";}
}

if(i>3){    
if(doc[k][i]==0) {Reg7[30+i].style.display="none";Reg7[30+i].value="";Reg7[30+i].previousSibling.style.display="none";Reg7[30+i].nextSibling.style.display="none";}
else {Reg7[30+i].style.display="";Reg7[30+i].previousSibling.style.display="";Reg7[30+i].nextSibling.style.display="";}
};}



;}


function fam2click(){
if(Fam3.style.display==""){fam3click();return;}	
Fam2.setAttribute("class", "shappa2");
Fam3.style.display="";
}

function fam33click(){
Reg7[15].style.border="";
Reg7[17].style.border="";
Reg7[16].style.border="";    

if(Reg7[15].value!=userpass) {Reg7[15].style.border="2px solid #FF0000";Reg7[15].focus();return;}    
if(Reg7[16].value.length<6||Reg7[16].value.length>20||Reg7[16].value.indexOf(" ")==0) {Reg7[16].style.border="2px solid #FF0000";Reg7[16].focus();return;}        
if(Reg7[16].value!=Reg7[17].value) {Reg7[17].style.border="2px solid #FF0000";Reg7[17].focus();return;}        
    

sendindex=0;
sendarray.splice(0);
writeUTF(userpass);
writeUTF(Reg7[16].value);
sendarray[sendindex]=0;
webSocket.send("changepass");
webSocket.send(EncodeBase64_2(sendarray));
//Fam2.style.display="";
Fam2.setAttribute("class", "shappa");
Fam3.style.display="none";
userpass2=Reg7[16].value;
Reg7[16].value="";
Reg7[17].value="";

}

function fam3click(){

Reg7[15].value="";
Reg7[16].value="";
Reg7[17].value="";
//Fam2.style.display="";
Fam2.setAttribute("class", "shappa");
Fam3.style.display="none";
Reg7[15].style.border="";
Reg7[17].style.border="";
Reg7[16].style.border="";    
}

function fam4click(){
Fam4.style.display="none";
Fam5.style.display="";
}

function fam6click(){
var i=0;
Reg7[26].value="";
Reg7[27].value="";
Reg7[28].selectedIndex=0;
Reg7[29].selectedIndex=0;
Reg7[30].selectedIndex=25;
Reg7[31].selectedIndex=0;
Reg7[32].selectedIndex=0;
Reg7[33].selectedIndex=0;
Reg7[34].value="";
Reg7[35].value="";
for(i=0;i<10;i++) Reg7[26+i].style.border="";
//Fam5.style.display="none";
//Fam4.style.display="";
}

function fam5click(){
var i=0;
var k=0;
for(i=0;i<10;i++) Reg7[26+i].style.border="";

if((Reg7[26].value.length==0)&&(Reg7[26].style.display!="none")) {Reg7[26].style.border="2px solid #FF0000";Reg7[26].focus();return;}    
if((Reg7[27].value.length==0)&&(Reg7[27].style.display!="none")) {Reg7[27].style.border="2px solid #FF0000";Reg7[27].focus();return;}    
if((Reg7[34].value.length==0)&&(Reg7[34].style.display!="none")) {Reg7[34].style.border="2px solid #FF0000";Reg7[34].focus();return;}    
if((Reg7[35].value.length==0)&&(Reg7[35].style.display!="none")) {Reg7[35].style.border="2px solid #FF0000";Reg7[35].focus();return;}    

if(Reg7[28].style.display!="none"){
if((Reg7[28].options[Reg7[28].selectedIndex].value==31)&&((Reg7[29].options[Reg7[29].selectedIndex].value==2)||(Reg7[29].options[Reg7[29].selectedIndex].value==4)||(Reg7[29].options[Reg7[29].selectedIndex].value==6)||(Reg7[29].options[Reg7[29].selectedIndex].value==9)||(Reg7[29].options[Reg7[29].selectedIndex].value==11))){Reg7[28].style.border="2px solid #FF0000";Reg7[28].focus();return;}

if((Reg7[28].options[Reg7[28].selectedIndex].value==30)&&(Reg7[29].options[Reg7[29].selectedIndex].value==2)) {Reg7[28].style.border="2px solid #FF0000";Reg7[28].focus();return;}

if((Reg7[28].options[Reg7[28].selectedIndex].value==29)&&(Reg7[29].options[Reg7[29].selectedIndex].value==2)){ 
if((parseInt(Reg7[30].options[Reg7[30].selectedIndex].value)%100==0)&&(parseInt(Reg7[30].options[Reg7[30].selectedIndex].value)%400!=0)){Reg7[28].style.border="2px solid #FF0000";Reg7[28].focus();return;}
if(parseInt(Reg7[30].options[Reg7[30].selectedIndex].value)%4!=0){Reg7[28].style.border="2px solid #FF0000";Reg7[28].focus();return;}
}
}


if(Reg7[31].style.display!="none"){
if((Reg7[31].options[Reg7[31].selectedIndex].value==31)&&((Reg7[32].options[Reg7[32].selectedIndex].value==2)||(Reg7[32].options[Reg7[32].selectedIndex].value==4)||(Reg7[32].options[Reg7[32].selectedIndex].value==6)||(Reg7[32].options[Reg7[32].selectedIndex].value==9)||(Reg7[32].options[Reg7[32].selectedIndex].value==11))){Reg7[31].style.border="2px solid #FF0000";Reg7[31].focus();return;}

if((Reg7[31].options[Reg7[31].selectedIndex].value==30)&&(Reg7[32].options[Reg7[32].selectedIndex].value==2)) {Reg7[31].style.border="2px solid #FF0000";Reg7[31].focus();return;}

if((Reg7[31].options[Reg7[31].selectedIndex].value==29)&&(Reg7[32].options[Reg7[32].selectedIndex].value==2)){ 
if((parseInt(Reg7[33].options[Reg7[33].selectedIndex].value)%100==0)&&(parseInt(Reg7[33].options[Reg7[33].selectedIndex].value)%400!=0)){Reg7[31].style.border="2px solid #FF0000";Reg7[31].focus();return;}
if(parseInt(Reg7[33].options[Reg7[33].selectedIndex].value)%4!=0){Reg7[31].style.border="2px solid #FF0000";Reg7[31].focus();return;}
}
}


k=Reg7[25].selectedIndex+1;

document_temp=new Document(); document_temp.ID_DOCUMENT=k;
document_temp.SERIA_NAME=Reg7[26].value;
document_temp.NOMER_NAME=Reg7[27].value;
document_temp.KEM_V_NAME=Reg7[34].value;
document_temp.KOD_POD_NAME=Reg7[35].value;
document_temp.vday=Reg7[28].options[Reg7[28].selectedIndex].value;
document_temp.vmonth=Reg7[29].options[Reg7[29].selectedIndex].value;
document_temp.vyear=Reg7[30].options[Reg7[30].selectedIndex].value;
document_temp.dday=Reg7[31].options[Reg7[31].selectedIndex].value;
document_temp.dmonth=Reg7[32].options[Reg7[32].selectedIndex].value;
document_temp.dyear=Reg7[33].options[Reg7[33].selectedIndex].value;
document_temp.DATA_V_NAME=zeroadd(document_temp.vday)+"-"+zeroadd(document_temp.vmonth)+"-"+zeroadd(document_temp.vyear);
document_temp.SROK_D_NAME=zeroadd(document_temp.dday)+"-"+zeroadd(document_temp.dmonth)+"-"+zeroadd(document_temp.dyear);

k_document=k;


var j=0;
var kk=0;




sendindex=0;
sendarray.splice(0);


kk=k;
if(k==1) kk=2; else if(k==2) kk=1;
writeByte(kk);
if(doc[documents[k].ID_DOCUMENT][0]==1) writeUTF(document_temp.SERIA_NAME); else writeUTF("");
if(doc[documents[k].ID_DOCUMENT][1]==1) writeUTF(document_temp.NOMER_NAME); else writeUTF("");
if(doc[documents[k].ID_DOCUMENT][4]==1) writeUTF(document_temp.KEM_V_NAME); else writeUTF("");
if(doc[documents[k].ID_DOCUMENT][5]==1) writeUTF(document_temp.KOD_POD_NAME); else writeUTF("");
if(doc[documents[k].ID_DOCUMENT][2]==1){
writeShort(document_temp.vday);
writeShort(document_temp.vmonth);
writeShort(document_temp.vyear);}else{
writeShort(j);
writeShort(j);
writeShort(j);
}
if(doc[documents[k].ID_DOCUMENT][3]==1){
writeShort(document_temp.dday);
writeShort(document_temp.dmonth);
writeShort(document_temp.dyear);}
else{writeShort(j);
writeShort(j);
writeShort(j);
}

sendarray[sendindex]=0;
webSocket.send("newdoc");
webSocket.send(EncodeBase64_2(sendarray));

Reg7[26].value="";
Reg7[27].value="";
Reg7[28].selectedIndex=0;
Reg7[29].selectedIndex=0;
Reg7[30].selectedIndex=25;
Reg7[31].selectedIndex=0;
Reg7[32].selectedIndex=0;
Reg7[33].selectedIndex=0;
Reg7[34].value="";
Reg7[35].value="";
//Fam5.style.display="none";
//Fam4.style.display="";

}

function fam0click(){
if(countrystate==0) return;	
var i=0;
for(i=5;i<15;i++) Reg7[i].style.border="";
//for(i=5;i<15;i++) 
if(Reg7[6].value.split(" ").join("").length<4) {Reg7[6].style.border="2px solid #FF0000";Reg7[6].focus();return;}  
if(Reg7[7].value.split(" ").join("").length<2) {Reg7[7].style.border="2px solid #FF0000";Reg7[7].focus();return;} 
if(Reg7[10].value.split(" ").join("").length<2) {Reg7[7].style.border="2px solid #FF0000";Reg7[10].focus();return;}           
if(Reg7[5].selectedIndex==0){Reg7[5].style.border="2px solid #FF0000";Reg7[5].focus();return;}    
if((Reg7[4].value.length<4)||(Reg7[4].value.indexOf("@")==-1)||(Reg7[4].value.indexOf(".")==-1)) {Reg7[4].style.border="2px solid #FF0000";Reg7[4].focus();return;}    
if(Reg7[8].selectedIndex==0){Reg7[8].style.border="2px solid #FF0000";Reg7[8].focus();return;}    
if(Reg7[9].selectedIndex==0){Reg7[9].style.border="2px solid #FF0000";Reg7[9].focus();return;}    
if(Reg7[12].value.length>0&&Reg7[12].value.length<4||Reg7[12].value.length>15) {Reg7[12].style.border="2px solid #FF0000";Reg7[12].focus();return;} 
if(Reg7[13].value.length>0&&Reg7[13].value.length!=4) {Reg7[13].style.border="2px solid #FF0000";Reg7[13].focus();return;} 


sendindex=0;
sendarray.splice(0);

for(i=5;i<15;i++) Reg7[i].disabled="disabled";
writeUTF(Reg7[5].options[Reg7[5].selectedIndex].text);//страна проживания
writeUTF(Reg7[9].options[Reg7[9].selectedIndex].text);//writeUTF(Reg7[9].value);//город
writeUTF(Reg7[7].value);//индекс
writeUTF(Reg7[8].options[Reg7[8].selectedIndex].text);//регион проживания
writeUTF(Reg7[10].value);//адрес
writeUTF(Reg7[14].value);//телефон
writeUTF(id_("codcount2").innerHTML+Reg7[6].value);//мобильный
writeUTF(Reg7[4].value);//email
writeUTF(Reg7[12].value);//nick
writeUTF(Reg7[13].value);//pin
writeUnsignedInt(echip[Reg7[11].selectedIndex*2]);
//writeUTF(Reg7[11].options[Reg7[11].selectedIndex].text);//любимая команда


sendarray[sendindex]=0;
webSocket.send("changeinfo");
webSocket.send(EncodeBase64_2(sendarray));
}


function senddemoform(){
var i=0;
for (i=22;i<Reg4.length;i++){
if(i==26)continue;
Reg4[i].style.border="";}
for (i=22;i<Reg4.length;i++) {
if(Reg4[i].value.length==0){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==23)&&((Reg4[i].value.indexOf('@')==-1)||(Reg4[i].value.indexOf('.')==-1)||(Reg4[i].value.length<4))){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==24)&&(Reg4[i].value.length<6||Reg4[i].value.length>20||Reg4[i].value.indexOf(" ")==0)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==25)&&(Reg4[i].value!=Reg4[i-1].value)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
if((i==26)&&(Reg4[i].value!=demokey)){Reg4[i].style.border="2px solid #FF0000";Reg4[i].focus();return;}
}

sendindex=0;
sendarray.splice(0);
writeUTF(Reg4[22].value);
writeUTF(Reg4[23].value);
writeUTF(Reg4[24].value);
if((id_("democheckmail").checked=="false")||(id_("democheckmail").checked==false))
writeByte(0); else writeByte(1);
writeUTF(btag[1]);
writeUTF(btag[0]);
sendarray[sendindex]=0;
webSocket.send("newdemomail");
webSocket.send(EncodeBase64_2(sendarray));
}


function clearRegister3(){ 
if(authstate==null) return;
var i=0;
for(i=22;i<Reg4.length;i++){Reg4[i].style.border="";
Reg4[i].value="";}
}

function savedemos(){

if(loginstate==1){showWarning("Вы уже авторизированы. Чтобы создать новый демо аккаунт, выйдите из логина.","OK","",0,null);
;return;}
if(demokey!=DemoKey.nextSibling.value) {DemoKey.nextSibling.style.border="2px solid #FF0000";DemoKey.nextSibling.focus();return;}
DemoKey.nextSibling.style.border="";
webSocket.send("newdemo");
}

function plataChange2(){
var i=0;
var j=0;
var color=0;
var string="";
var clr=new Array("#FFFFFF","#EBEBEB")


for(i=0;i<platasumma.length;i++){
if((PlataBoxOperation.selectedIndex==3)&&(platavid[i]!=2))continue;
if((PlataBoxOperation.selectedIndex==1)&&((platasumma[i].indexOf("-")>-1)||(platavid[i]==2))) continue;
if((PlataBoxOperation.selectedIndex==2)&&((platasumma[i].indexOf("-")==-1)||(platavid[i]==2))) continue;


string=string+'<div style="float:left;width:742px;font-size:11px;text-align:center;color:#000000;background-color:'+clr[color]+';"><div style="float:left;width:87px;border-right:1px solid #D8D8D8;height:70px;"><div class="padd3">'+platadate[i]+'</div></div>'+
'<div style="float:left;width:132px;border-right:1px solid #D8D8D8;height:70px;"><div class="padd3">'+platatip[i]+'</div></div>'+
'<div style="float:left;width:397px;border-right:1px solid #D8D8D8;height:70px;"><i><b><div class="padd3">'+platacasa[i].replace('Бонус<br />','<center><img src="/resources/images/bonplat.png"/></center>').replace('Бонус<br>','<center><img src="/resources/images/bonplat.png"/></center>')+'</i></b></div></div>';

if(platavid[i]==2) string=string+'<div style="float:left;width:110px;height:65px;"><div class="padd3" style="float:left;text-align:left;padding-left:10px; width:80px;">'+platasumma[i]+'</div><div class="removal" onclick="removeOrder('+plataId[i]+','+i+');" title="Отменить заказ и вернуть деньги на счет"></div></div></div>';
else string=string+'<div style="float:left;width:100px;height:65px;text-align:left;padding-left:10px;"><div class="padd3">'+platasumma[i]+'</div></div></div>';

color=(color+1)%2;
};


InnerPlata.innerHTML=string;
}



function removeOrder(k,n){
var i=0;
rem_n=n;
rem_k=k;
showWarning(war201,"Отменить заявку","Закрыть",1,removeOrder2);
}




function removeOrder2(){
var k=rem_k;
var n=rem_n;
sendarray.splice(0);
sendindex=0;
writeInt(k);
sendarray[sendindex]=0;
webSocket.send("cancelremoval");
webSocket.send(EncodeBase64_2(sendarray));
/*
platadate.splice(n,1);
platatip.splice(n,1);
platavid.splice(n,1);
platacasa.splice(n,1);
platasumma.splice(n,1);
plataId.splice(n,1);
valutavid.splice(n,1);
plataChange2();
webSocket.send("balance");
*/
}



function savecontact(){
var i=0;
for (i=1;i<Reg10.length;i++){
Reg10[i].style.border="";}
if(Reg10[1].value.length==0){Reg10[1].style.border="2px solid #FF0000";Reg10[1].focus();return;}
if((Reg10[2].value.length==0)&&(Reg10[3].value.length==0)){Reg10[2].style.border="2px solid #FF0000";Reg10[2].focus();return;}
if((Reg10[3].value.length>0)&&((Reg10[3].value.indexOf('@')==-1)||(Reg10[3].value.indexOf('.')==-1)||(Reg10[3].value.length<4))){Reg10[3].style.border="2px solid #FF0000";Reg10[3].focus();return;}
if(Reg10[4].value.length<10){Reg10[4].style.border="2px solid #FF0000";Reg10[4].focus();return;}
if(Reg10[5].value!=cokey){Reg10[5].style.border="2px solid #FF0000";Reg10[5].focus();return;}
sendindex=0;
sendarray.splice(0);
//writeByte(Reg10[0].options[Reg10[0].selectedIndex].value);
writeByte(Reg10[0].selectedIndex+1);
writeUTF(Reg10[1].value);
writeUTF(Reg10[3].value);
writeUTF(Reg10[2].value);
writeUTF(Reg10[2].value);
writeUTF(Reg10[4].value);
sendarray[sendindex]=0;
webSocket.send("sendletter");
webSocket.send(EncodeBase64_2(sendarray));
cokey=generatekey(Reg10[5].previousSibling);    
for(i=1;i<6;i++) Reg10[i].value="";
Reg10[0].selectedIndex=0;
showWarning(war14,"OK","",0,null);
}



function schet2save(){
Pvivod[2].style.border="";
Pvivod[1].style.border="";
if(loginstate==0) {
showWarningReg();
//showWarning(war205,"Зарегистрироваться","Отмена",1,null);
return;}	
if(parseFloatExt(Pvivod[2].value)<100*mClient.kurs) {Pvivod[2].style.border="2px solid #FF0000";Pvivod[2].focus();return;}
if((Pvivod[1].options.length==0)||(Pvivod[1].options[Pvivod[1].selectedIndex].value<0)) {Pvivod[1].style.border="2px solid #FF0000";Pvivod[1].focus();return;}
var l=0;
l=Pvivod[1].options[Pvivod[1].selectedIndex].value;
if(l==1) l=2;else if(l==2) l=1;
sendindex=0;
sendarray.splice(0);
writeInt(l);
writeInt(Pvivod[3].options[Pvivod[3].selectedIndex].value);
writeInt(Pvivod[0].options[Pvivod[0].selectedIndex].value);
writeDouble(parseFloatExt(Pvivod[2].value));
sendarray[sendindex]=0;
webSocket.send("zakazremoval");
webSocket.send(EncodeBase64_2(sendarray));
Pvivod[2].value="";
};




function ChampionClick2(k,state){
if(state==1){window.currentAjax ? window.currentAjax.abort() : false;
}	
var st="";	
var i=0;
var j=0;
var temp="";
for(i=0;i<mChampionships.length;i++) if(mChampionships[i].ID_CHAMPIONSHIP==k){
BltBox.style.display="";
GMTBox.style.display="";
DateBox.style.display="";
BltState=0;
FavoritState=0;
SportState=0;
LiveState=0;
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) 

mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";

for(i=0;i<Smenu.length;i++){
Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";



for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==mChampionships[ChampionId[k]].ID_SPORT){SportIndex=j;break;}
if(j==mSport.length) return;
SportIndex2=-1;


if(mSport[SportIndex].ID_SPORT==16) Titles.innerHTML="АМЕРИК. ФУТБОЛ";
else if(mSport[SportIndex].ID_SPORT==20) Titles.innerHTML="НАСТ. ТЕННИС";
else Titles.innerHTML=mSport[SportIndex].NAME_RUS.toUpperCase();
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";
for(j=0;j<mCountry.length;j++) if(mCountry[j].ID_COUNTRY==mChampionships[ChampionId[k]].ID_COUNTRY){CountryIndex=j;break;}
if(j==mCountry.length) return;

if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==1)&&(mCountry[CountryIndex].IS_REGION==0)){
region.Display.childNodes[0].style.color="#F47621";
RegionIndex=0;
}else {
region.Display.childNodes[0].style.color="#FFFFFF";
RegionIndex=-1;}

IndexScroll=0;
ChampionIndex=k;

if(mChampionships[ChampionId[ChampionIndex]].ID_CHAMPIONSHIP==(mChampionships[ChampionId[ChampionIndex]].ID_COUNTRY+10)*10000+13)
longbet(mChampionships[ChampionId[ChampionIndex]].ID_COUNTRY);else {champlongstate2=0;DateBoxChampion(mChampionships[ChampionId[ChampionIndex]]);};

mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#F47621";
ttt1=1;
hashstate=state;
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==1)&&(mCountry[CountryIndex].IS_REGION==0)&&(state==1)) temp="/регионы";
showTitle(false,mSport[SportIndex].NAME_RUS+", "+mCountry[CountryIndex].NAME_RUS+", "+mChampionships[ChampionId[ChampionIndex]].NAME_RUS);
if(state==1){
st="/stavki/sport/"+transliterate(mSport[SportIndex].NAME_RUS.toLowerCase()+temp)+"/"+transliterate(mCountry[CountryIndex].NAME_RUS.toLowerCase())+"/"+transliterate(mChampionships[ChampionId[ChampionIndex]].NAME_RUS.toLowerCase())+"/";
_gaq.push(['_trackPageview',st]);
{try{window.history.pushState("", "",st );} catch(e){window.location.hash=st;};} 

}
showsport();
if(SportIndex>-1) mSport[SportIndex].Display.childNodes[1].style.color="#F47621";
if(CountryIndex>-1) mCountry[CountryIndex].Display.childNodes[0].style.color="#F47621";
MenuClick(0);
if(vfl_call_back==0) break;

if(mChampionships[ChampionId[ChampionIndex]].NAME_RUS.indexOf("Сезон")==-1||mChampionships[ChampionId[ChampionIndex]].NAME_RUS.indexOf("Тур")==-1) break;
var temp=mChampionships[ChampionId[ChampionIndex]].NAME_RUS.split(":");
var TUR=parseInt(temp[2]);
var SEZON=parseInt(temp[1].split(" ")[0]);
if(SEZON==parseInt(vfl_season_name.replace("VFL Season ",""))&&id_("vfl").innerHTML!="") window.frames['vfl_iframe'].setSelectedMatchday(TUR);

break;
;}
vfl_call_back=1;
;}



function CountryClick2(k,state){
if(state==1){window.currentAjax ? window.currentAjax.abort() : false;
}	
//console.log(k);
var i=0;
var j=0;
var st="";
var temp="";
BltBox.style.display="";
GMTBox.style.display="";
DateBox.style.display="";
BltState=0;
FavoritState=0;
SportState=0;
LiveState=0;
if(ChampionIndex>-1&&ChampionId[ChampionIndex]!=null&&mChampionships[ChampionId[ChampionIndex]]) mChampionships[ChampionId[ChampionIndex]].Display.childNodes[0].style.color="#CECECE";
ChampionIndex=-1;
for(i=0;i<Smenu.length;i++){
Smenu[i].style.backgroundImage="";	
}
Smenu[0].childNodes[0].childNodes[0].src="/resources/images/big_live"+LiveState+".png?7";
Smenu[3].childNodes[0].src="/resources/images/fv"+FavoritState+""+zvezda+".png?7";
Smenu[4].childNodes[1].src="/resources/images/ptv"+SportState+".png?7";

for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==mCountry[k].ID_SPORT){SportIndex=j;break;}
if(j==mSport.length) return;
SportIndex2=-1;
if(mSport[SportIndex].ID_SPORT==16) Titles.innerHTML="АМЕРИК. ФУТБОЛ";
else Titles.innerHTML=mSport[SportIndex].NAME_RUS.toUpperCase();
if(CountryIndex>-1&&mCountry[CountryIndex]&&mCountry[CountryIndex].Display) mCountry[CountryIndex].Display.childNodes[0].style.color="#FFFFFF";

CountryIndex=k;
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==1)&&(mCountry[CountryIndex].IS_REGION==0)){
region.Display.childNodes[0].style.color="#F47621";
RegionIndex=0;
}else {
region.Display.childNodes[0].style.color="#FFFFFF";
RegionIndex=-1;}
IndexScroll=0;
DateBoxCountry(mCountry[CountryIndex]);
mCountry[CountryIndex].Display.childNodes[0].style.color="#F47621";
ttt1=1;
hashstate=state;
if((SportIndex>-1)&&(mSport[SportIndex].ID_SPORT==1)&&(mCountry[CountryIndex].IS_REGION==0)&&(state==1)) temp="/регионы";
showTitle(false,mSport[SportIndex].NAME_RUS+", "+mCountry[CountryIndex].NAME_RUS);
if(state==1){
st="/stavki/sport/"+transliterate(mSport[SportIndex].NAME_RUS.toLowerCase()+temp)+"/"+transliterate(mCountry[CountryIndex].NAME_RUS.toLowerCase())+"/";
{try{window.history.pushState("", "", st);} catch(e){window.location.hash=st;};} 

;}
if(SportIndex>-1) mSport[SportIndex].Display.childNodes[1].style.color="#F47621";
showsport();
MenuClick(0);
;}





function insertcookie(k){
var i=0;
var eventarray=getCookie("eventarray");
for(i=0;i<eventarray.length;i++) if(eventarray[i]==k) return;
eventarray.push(k);
stareventid[k]=1;
starevent=eventarray;
setCookie("eventarray",eventarray, expire, "/", "",secure);
}


function deletecookie(k){
var i=0;
var eventarray=getCookie("eventarray");
for(i=0;i<eventarray.length;i++) if(eventarray[i]==k) {eventarray.splice(i,1);setCookie("eventarray",eventarray, expire, "/", "",secure);starevent=eventarray;stareventid[k]=null;return;}
}

function insertchampcookie(k){
var i=0;
var champarray=getCookie("champarray");
for(i=0;i<champarray.length;i++) if(champarray[i]==k) return;
champarray.push(k);
setCookie("champarray",champarray, expire, "/", "",secure);
starchamp=champarray;
var eventarray=getCookie("eventarray");
for(i=0;i<mEvents.length;i++) if(mEvents[i].Live==0&&mEvents[i].ID_CHAMPIONSHIP==k){
if(stareventid[mEvents[i].ID_EVENT]!=1) {eventarray.push(mEvents[i].ID_EVENT);stareventid[mEvents[i].ID_EVENT]=1;}
}
setCookie("eventarray",eventarray, expire, "/", "",secure);
starevent=eventarray;
}

function deletechampcookie(k){
var i=0;
var j=0;
var champarray=getCookie("champarray");
for(i=0;i<champarray.length;i++) if(champarray[i]==k) {champarray.splice(i,1);setCookie("champarray",champarray, expire, "/", "",secure);break;}
starchamp=champarray;
var eventarray=getCookie("eventarray");
for(i=0;i<mEvents.length;i++) if(mEvents[i].Live==0&&mEvents[i].ID_CHAMPIONSHIP==k){
for(j=0;j<eventarray.length;j++) if(eventarray[j]==mEvents[i].ID_EVENT) {eventarray.splice(j,1);stareventid[mEvents[i].ID_EVENT]=null;break;}
}

setCookie("eventarray",eventarray, expire, "/", "",secure);
starevent=eventarray;
}

function insertchampcookielive(k){
var i=0;
var champarraylive=getCookie("champarraylive");
for(i=0;i<champarraylive;i++) if(champarraylive[i]==k) return;
champarraylive.push(k);
setCookie("champarraylive",champarraylive, expire, "/", "",secure);
starchampl=champarraylive;
var eventarray=getCookie("eventarray");
for(i=0;i<mEvents.length;i++) if(mEvents[i].Live==1&&mEvents[i].ID_CHAMPIONSHIP==k){
if(stareventid[mEvents[i].ID_EVENT]!=1) {eventarray.push(mEvents[i].ID_EVENT);stareventid[mEvents[i].ID_EVENT]=1;}
}

setCookie("eventarray",eventarray, expire, "/", "",secure);
starevent=eventarray;

}


function deletechampcookielive(k){
var i=0;
var j=0;
var champarraylive=getCookie("champarraylive");
for(i=0;i<champarraylive.length;i++) if(champarraylive[i]==k) {champarraylive.splice(i,1);setCookie("champarraylive",champarraylive, expire, "/", "",secure);break}
starchampl=champarraylive;
var eventarray=getCookie("eventarray");
for(i=0;i<mEvents.length;i++) if(mEvents[i].Live==1&&mEvents[i].ID_CHAMPIONSHIP==k){
for(j=0;j<eventarray.length;j++) if(eventarray[j]==mEvents[i].ID_EVENT) {stareventid[mEvents[i].ID_EVENT]=null;eventarray.splice(j,1);break;}
}
setCookie("eventarray",eventarray, expire, "/", "",secure);
starevent=eventarray;
}    




function eventcookie(){
var i=0;
var eventarray=getCookie("eventarray");
starevent=eventarray;
stareventid=new Array();
for(i=0;i<eventarray.length;i++) stareventid[eventarray[i]]=1;
}

function champcookie(){
var i=0;
var j=0;
var champarraylive=getCookie("champarraylive");
var champarray=getCookie("champarray");
starchamp=champarray;

starchampl=champarraylive;
for(j=0;j<mChampionships.length;j++){for(i=0;i<champarray.length;i++) if(champarray[i]==mChampionships[j].ID_CHAMPIONSHIP){
mChampionships[j].fav1=1;mChampionships[j].string=mChampionships[j].string.replace('/star'+((mChampionships[j].fav1+1)%2+1),'/star'+(mChampionships[j].fav1+1));
break;}
for(i=0;i<champarraylive.length;i++) if(champarraylive[i]==mChampionships[j].ID_CHAMPIONSHIP){mChampionships[j].fav2=1;mChampionships[j].stringlive=
mChampionships[j].stringlive.replace('/star'+((mChampionships[j].fav2+1)%2+1),'/star'+(mChampionships[j].fav2+1));break;

};}
} 


function champcookie2(mChampionship){
var i=0;
var j=0;
var champarraylive=getCookie("champarraylive");
var champarray=getCookie("champarray");
starchamp=champarray;
starchampl=champarraylive;
for(i=0;i<starchamp.length;i++) if(starchamp[i]==mChampionship.ID_CHAMPIONSHIP){mChampionship.fav1=1;break;}
for(i=0;i<starchampl.length;i++) if(starchampl[i]==mChampionship.ID_CHAMPIONSHIP){mChampionship.fav2=1;break;}
} 


function rfavcl(obj,cook1,cook2,cook3,ck){
var i=0;
var j=0;
var ros=new Array();
if(cook1==0) ros=Rosmenu;
else { if(cook2==1||cook2==4||cook2==6||cook2==29||cook2==12)
ros=Plusmenu; else ros=Pluslargemenu}


if(ck==0) obj.style.backgroundImage='url(/resources/images/star2.png)';
else obj.style.backgroundImage='url(/resources/images/star1.png)';
ck=(ck+1)%2;
obj.onclick=function(){rfavcl(obj,cook1,cook2,cook3,ck);}

if(ck==0){
for(j=0;j<cook3.length;j++){ for(i=0;i<GrandCookie[cook1][cook2].length;i++) 
if(cook3[j]==GrandCookie[cook1][cook2][i]){GrandCookie[cook1][cook2].splice(i,1);i=i-1;};}

}

if(ck==1){
for(j=0;j<cook3.length;j++){for(i=0;i<GrandCookie[cook1][cook2].length;i++) if(cook3[j]==GrandCookie[cook1][cook2][i]) break; 
if(i==GrandCookie[cook1][cook2].length){if(GrandCookie[cook1][cook2].length==0) GrandCookie[cook1][cook2]=new Array(); GrandCookie[cook1][cook2].push(cook3[j]);}}

}

if(GrandCookie[cook1][cook2].length>0) ros[1].childNodes[0].src="/resources/images/fv01.png?7";else ros[1].childNodes[0].src="/resources/images/fv00.png?7"

if((Plus.style.display!="none")&&(plusstate==1)) pluslive(LastFrontLive);
if((Pluslarge.style.display!="none")&&(pluslargestate==1)) pluslive(LastFrontLive);
if((Rospis.style.display!="none")&&(rosstate==1)) plusrospisi(EventRospisi);
var temp="";
for(i=0;i<GrandCookie.length;i++){temp=temp+"%";for(j=0;j<GrandCookie[i].length;j++) temp=temp+"*"+GrandCookie[i][j];}
setCookie("GrandCookie",temp, expire, "/", "",secure);



}


function clearcookie(){
var i=0;
var j=0;
var eventarray=getCookie("eventarray");
for(i=0;i<eventarray.length;i++) 
{for(j=0;j<mEvents.length;j++) if(eventarray[i]==mEvents[j].ID_EVENT) break;
if(j==mEvents.length) {eventarray.splice(i,1); i=i-1;};}
setCookie("eventarray",eventarray, expire, "/", "",secure);
} 


function CloseWarning(){
log2=0;	
Hide.style.display="none";
Hide.parentNode.style.display="none";
Hide.onclick=null;
id_("OPLOGIN2").style.display="";
id_("NTVWAR").style.display="";
id_("HIDEWAR").style.display="";
id_("BETWARNING").style.display="";
id_("ODDSPORTAL").style.display="";
document.onkeydown=null;
}


function getDocumentHeight() {
 return Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollHeight
 : document.documentElement.scrollHeight, getViewportHeight()); 
} 

function getViewportHeight() {
 return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat')
 ? document.documentElement.clientHeight : document.body.clientHeight
 : (document.parentWindow || document.defaultView).innerHeight; 
} 

function getDocumentWidth() {
 return Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollWidth
 : document.documentElement.scrollWidth, getViewportWidth()); 
} 
function getViewportWidth() {
 return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat')
 ? document.documentElement.clientWidth : document.body.clientWidth
 : (document.parentWindow || document.defaultView).innerWidth; 
} 




function alertSize() {
  if( typeof( window.innerWidth ) == 'number' ) {
    
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
 
cmh= myHeight-432;
if(cmh<200) cmh=200;
  
//express.style.maxHeight = cmh+"px";
//CuponBet.style.maxHeight = (cmh+125)+"px";
Hu.style.width=getDocumentWidth()+"px";
Hu.style.height=getDocumentHeight()+"px";
if(myWidth<1370||window.scrollY<100) id_("VVERH").style.display="none";
else id_("VVERH").style.display="";
id_("VVERH").style.right=((myWidth-1280)/2-90)+"px";  

return myHeight;
;}


function showWarning2(string){
id_('HIDE2').style.display=''; 
id_('HIDE2').childNodes[0].childNodes[1].innerHTML=string;
}  

function showWarningReg(){
Hide.style.display="";
Hide.parentNode.style.display="";
id_("OPLOGIN2").style.display="";
id_("HIDEWAR").style.display="none";
id_("BETWARNING").style.display="none";
id_("ODDSPORTAL").style.display="none";
id_("NTVWAR").style.display="none";

//id_("OPLOGIN2").style.marginTop=parseInt(window.pageYOffset+(document.documentElement.clientHeight-id_("OPLOGIN2").offsetHeight)/2)+"px";
//id_("OPLOGIN2").style.marginLeft=parseInt(window.pageXOffset+(document.documentElement.clientWidth-270)/2)+"px";
if(iphone==0){
id_("OPLOGIN2").style.top=parseInt((document.documentElement.clientHeight-id_("OPLOGIN2").offsetHeight)/2)+"px";
id_("OPLOGIN2").style.left=parseInt((document.documentElement.clientWidth-270)/2)+"px";
}

cs_("open44")[0].value="";
cs_("open44")[1].value="";
id_("OPWAR").style.fontWeight="100";
id_("OPWAR").style.color="#000";
id_("OPWAR").innerHTML="Пожалуйста, авторизуйтесь на сайте:";
}

/*
function showWarningFree(){
try{window.history.pushState("", "", "/auth/mybonus/");hashChanged("mybonus");} catch(e){window.location.hash="/auth/mybonus/";};			
}
*/

function showWarningFree(){
id_("BETWARNING").childNodes[0].childNodes[0].src="/resources/images/freebet3.png?3";
Hide.onclick=CloseWarning;
Hide.style.display="";
Hide.parentNode.style.display="";
id_("OPLOGIN2").style.display="none";
id_("HIDEWAR").style.display="none";
id_("BETWARNING").style.display="";
id_("ODDSPORTAL").style.display="none";
id_("NTVWAR").style.display="none";

if(iphone==0){
id_("BETWARNING").style.top=parseInt((document.documentElement.clientHeight-443)/2)+"px";
id_("BETWARNING").style.left=parseInt((document.documentElement.clientWidth-451)/2)+"px";
}

}

function showWarningNtv(){
id_("NTVWAR").childNodes[0].childNodes[0].src="/resources/images/promocod2.jpg";	
Hide.onclick=CloseWarning;
Hide.style.display="";
Hide.parentNode.style.display="";
id_("OPLOGIN2").style.display="none";
id_("HIDEWAR").style.display="none";
id_("BETWARNING").style.display="none";
id_("ODDSPORTAL").style.display="none";
id_("NTVWAR").style.display="";
if(iphone==0){
id_("NTVWAR").style.top=parseInt((document.documentElement.clientHeight-500)/2)+"px";
id_("NTVWAR").style.left=parseInt((document.documentElement.clientWidth-500)/2)+"px";
}
//setCookie("ntvcook",1, expire, "/", "",secure);
}



function showWarningOdds(){
Hide.onclick=CloseWarning;
Hide.style.display="";
Hide.parentNode.style.display="";
id_("OPLOGIN2").style.display="none";
id_("HIDEWAR").style.display="none";
id_("BETWARNING").style.display="none";
id_("ODDSPORTAL").style.display="";
id_("NTVWAR").style.display="none";
if(iphone==0){
id_("ODDSPORTAL").style.top=parseInt((document.documentElement.clientHeight-id_("ODDSPORTAL").offsetHeight)/2)+"px";
id_("ODDSPORTAL").style.left=parseInt((document.documentElement.clientWidth-500)/2)+"px";
}

}





function showWarning(string,string1,string2,param,handler){
/*if(iphone==1){
string=string.split("<br />").join("\n");	
if(param==0){alert(string);return;}
if(string1=="Зарегистрироваться"){if(window.confirm(string)==true) {
hashnav("registration");
return;};}
else if(window.confirm(string)==true) {handler();return;}
return;
}*/

document.onkeydown=function(event){
var key=event.keyCode||event.which;
if(key==27) CloseWarning();
if(key==13&&handler==null) CloseWarning();
if(key==13&&handler) {CloseWarning();handler();}
;}



Hide.style.display="";
Hide.parentNode.style.display="";
id_("HIDEWAR").style.display="";
id_("OPLOGIN2").style.display="none";
id_("BETWARNING").style.display="none";
id_("ODDSPORTAL").style.display="none";
id_("NTVWAR").style.display="none";
Hide.style.height=parseInt(getDocumentHeight())+"px";
//Hide.childNodes[0].style.height=parseInt(getDocumentHeight())+"px";


var k1=string.indexOf("!");
var k2=string.indexOf("?");
var k3=string.indexOf(".");
if(k1<0) k1=10000;
if(k2<0) k2=10000;
if(k3<0) k3=10000;
if(k1+k2+k3==30000){War[0].innerHTML=string; War[2].innerHTML="";}
else{ War[0].innerHTML=string.substring(0,Math.min(k1,k2,k3)+1).replace(".",""); 
War[2].innerHTML=string.substring(Math.min(k1,k2,k3)+1);} 
War[3].childNodes[0].innerHTML=string1;
War[4].innerHTML=string2;

//id_("HIDEWAR").style.marginTop=parseInt(window.pageYOffset+(document.documentElement.clientHeight-id_("HIDEWAR").offsetHeight)/2)+"px";

if(iphone==0){
id_("HIDEWAR").style.top=parseInt((document.documentElement.clientHeight-id_("HIDEWAR").offsetHeight)/2)+"px";
id_("HIDEWAR").style.left=parseInt((document.documentElement.clientWidth-270)/2)+"px";
}

War[3].style.display="";

if(param==0) {War[4].style.display="none";if(handler) War[3].onclick=function(){CloseWarning();handler();};else 
{War[3].onclick=CloseWarning; /*War[3].style.display="none";*/} 
//War[3].parentNode.style.width="270px";
}
if(param==1) {War[4].style.display="";//War[3].parentNode.style.width="220px";
if(string1=="Зарегистрироваться") War[3].onclick=function(){
hashnav("registration");
CloseWarning();}
else War[3].onclick=function(){CloseWarning();handler();}
}
//War[3].style.marginLeft=Math.round((250-War[3].offsetWidth)/2)+"px";
}


function cuponlide(){
Cuponslide.childNodes[0].style.marginLeft=(parseInt(Cuponslide.childNodes[0].style.marginLeft.replace("px",""))+2)+"px";
if(parseInt(Cuponslide.childNodes[0].style.marginLeft.replace("px",""))>=-15)Cuponslide.childNodes[0].style.marginLeft="-215px";
}


function cuponlide2(){
Cuponslide2.childNodes[0].style.marginLeft=(parseInt(Cuponslide2.childNodes[0].style.marginLeft.replace("px",""))+2)+"px";
if(parseInt(Cuponslide2.childNodes[0].style.marginLeft.replace("px",""))>=-15) Cuponslide2.childNodes[0].style.marginLeft="-215px";
}


function drawscroll(){clearTimeout(DI); DI=setTimeout(drawscroll2,33);}

function drawscroll2(){
if(myWidth<1370||window.scrollY<100) id_("VVERH").style.display="none";
else id_("VVERH").style.display="";
if(navigator.userAgent.indexOf("Firefox/18")>-1) return;	
if((sfocus==1)&&(iphone==1)) return;    
if((iphone!=1)&&(Hide.style.display!="none"))
{
	
//id_("HIDEWAR").style.marginTop=parseInt(window.pageYOffset+(document.documentElement.clientHeight-id_("HIDEWAR").offsetHeight)/2)+"px";
//id_("HIDEWAR").style.marginLeft=parseInt(window.pageXOffset+(document.documentElement.clientWidth-270)/2)+"px";

//id_("HIDEWAR").style.marginTop=parseInt((document.documentElement.clientHeight-id_("HIDEWAR").offsetHeight)/2)+"px";
//id_("HIDEWAR").style.marginLeft=parseInt((document.documentElement.clientWidth-270)/2)+"px";
//Hide.childNodes[0].style.marginTop=parseInt(window.pageYOffset+20)+"px";
//Hide.childNodes[0].style.marginTop=parseInt(window.pageYOffset+20)+"px";

//id_("OPLOGIN2").style.marginTop=parseInt(window.pageYOffset+(document.documentElement.clientHeight-id_("OPLOGIN2").offsetHeight)/2)+"px";
//id_("OPLOGIN2").style.marginLeft=parseInt(window.pageXOffset+(document.documentElement.clientWidth-270)/2)+"px";
//id_("BETWARNING").style.marginTop=parseInt(window.pageYOffset+(document.documentElement.clientHeight-id_("BETWARNING").offsetHeight)/2)+"px";
//id_("BETWARNING").style.marginLeft=parseInt(window.pageXOffset+(document.documentElement.clientWidth-270)/2)+"px";

if(iphone==0){
id_("HIDEWAR").style.top=parseInt((document.documentElement.clientHeight-id_("HIDEWAR").offsetHeight)/2)+"px";
id_("HIDEWAR").style.left=parseInt((document.documentElement.clientWidth-270)/2)+"px";
id_("OPLOGIN2").style.top=parseInt((document.documentElement.clientHeight-id_("OPLOGIN2").offsetHeight)/2)+"px";
id_("OPLOGIN2").style.left=parseInt((document.documentElement.clientWidth-270)/2)+"px";
id_("BETWARNING").style.top=parseInt((document.documentElement.clientHeight-443)/2)+"px";
id_("BETWARNING").style.left=parseInt((document.documentElement.clientWidth-451)/2)+"px";
id_("ODDSPORTAL").style.top=parseInt((document.documentElement.clientHeight-id_("ODDSPORTAL").offsetHeight)/2)+"px";
id_("ODDSPORTAL").style.left=parseInt((document.documentElement.clientWidth-500)/2)+"px";
id_("NTVWAR").style.top=parseInt((document.documentElement.clientHeight-500)/2)+"px";
id_("NTVWAR").style.left=parseInt((document.documentElement.clientWidth-500)/2)+"px";

}


}
var h=getDocumentHeight();
if((cs_("ceo")[0])&&(cs_("ceo")[0].style.display!="none"))
h=h-cs_("ceo")[0].offsetHeight+10;
var h2=parseFloatExt(SKR.style.marginTop.replace("px",""));
if(h>SKR.offsetHeight){
if(SKR.offsetHeight<document.documentElement.clientHeight) {h2=window.pageYOffset-100;}
else{ 
if(h2>window.pageYOffset-100) {h2=window.pageYOffset-100;};
if(SKR.offsetHeight+h2-window.pageYOffset<document.documentElement.clientHeight-100)    
{h2=-SKR.offsetHeight+document.documentElement.clientHeight+window.pageYOffset-100;
}
}
}else {h2=0;}

if(h2<0) {h2=0;}
if(h2+SKR.offsetHeight>h-240) {h2=h-SKR.offsetHeight-240;}
if(h2<0) {h2=0;}
SKR.style.marginTop=h2+"px";
;}







function prekoef(k){
insertkoef();
}



function DIF(mLine){
            if(ttt==0||langmod2!=0) return;
			var j=0;


            for(j=0;j<mExpress.length;j++)if(mLine.ID_LINE==mExpress[j].id_line) break;
            if(j<mExpress.length){ 
            mExpress[j].dif=mLine.V[mExpress[j].Index]-Math.round(parseFloatExt(mExpress[j].V)*100);
            if(mExpress[j].dif!=0) id_("mexpress"+mExpress[j].id_event).childNodes[5].title=""+parseInt(mExpress[j].dif)/100; else id_("mexpress"+mExpress[j].id_event).childNodes[5].title="";

            if(mExpress[j].dif==0) id_("mexpress"+mExpress[j].id_event).childNodes[5].style.background="none";
            if(mExpress[j].dif>0)  id_("mexpress"+mExpress[j].id_event).childNodes[5].style.background="url(/resources/images/cupon10.png) no-repeat";       
            if(mExpress[j].dif<0) id_("mexpress"+mExpress[j].id_event).childNodes[5].style.background="url(/resources/images/cupon9.png) no-repeat"; 
       
            mExpress[j].V=Vkoef(mLine.V[mExpress[j].Index]);id_("mexpress"+mExpress[j].id_event).childNodes[6].innerHTML=mExpress[j].V;
	



if(mExpress[j].dif!=0){
minsumpay(mExpress[j]);
newexpress(mExpress[j]);
;}



							
            if(((parseFloatExt(mExpress[j].V)>=bonuskoef)||(bkoef(mExpress[j].id_line,mExpress[j].Index)==1))&&(mExpress.length>1)&&(lastexpressflag==1)&&(otkat==1)) id_("mexpress"+mExpress[j].id_event).childNodes[3].style.display="";else id_("mexpress"+mExpress[j].id_event).childNodes[3].style.display="none";

            if((mExpress[j].State==2)&&(mExpress[j].KOEF==mLine.KOEF)&&(mExpress[j].id_event==mLine.ID_EVENT)&&(mExpress[j].FAVORIT==mLine.FAVORIT)&&(mExpress[j].ID_TIP_RADAR==mLine.ID_TIP_RADAR))
            {if(mEvents[EventId[mExpress[j].id_event]].State==2)
            {id_("mexpress"+mExpress[j].id_event).style.backgroundColor="#FEB734";
            mExpress[j].State=3;} else {
            mExpress[j].State=0;
            expressclose(-1);};} else calckoef(0);}                


/*            if((mLine.ID_LINE==mOrdinar.id_line)&&(mOrdinar.State!=1)){mOrdinar.dif=mLine.V[mOrdinar.Index]-Math.round(parseFloatExt(mOrdinar.V)*100);
            if(mOrdinar.dif!=0) id_("mordinar").childNodes[4].title=""+parseInt(mOrdinar.dif)/100; else id_("mordinar").childNodes[4].title="";
            if(mOrdinar.dif==0) id_("mordinar").childNodes[4].style.background="none";
            if(mOrdinar.dif>0) id_("mordinar").childNodes[4].style.background="url(/resources/images/cupon10.png) no-repeat";
            if(mOrdinar.dif<0) id_("mordinar").childNodes[4].style.background="url(/resources/images/cupon9.png) no-repeat";
            mOrdinar.V=Vkoef(mLine.V[mOrdinar.Index]);id_("mordinar").childNodes[5].innerHTML=mOrdinar.V;

            if(mOrdinar.State!=1) min2Express[0]=minExpress[0]=Round(minsumpay(mOrdinar)); else 
            min2Express[0]=minExpress[0]=0;viplata[0]=Round2(Math.min(Math.round((parseFloatExt(mOrdinar.V))*(parseFloatExt(summainput.value))*100)/100,mOrdinar.Maxim_pay));
			viplata2[0]=Round2(Math.round((parseFloatExt(mOrdinar.V))*(parseFloatExt(summainput.value))*100)/100);
            if(expressflag==0){Viplata.innerHTML=""+zeroinsert(Math.round(viplata[expressflag]*100)/100,0);
			Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);
            maximum.innerHTML=""+zeroinsert(Math.round(min2Express[lastexpressflag]*100)/100,0);
            if((mOrdinar.State==2)&&(mOrdinar.KOEF==mLine.KOEF)&&(mOrdinar.FAVORIT==mLine.FAVORIT)&&(mOrdinar.ID_TIP_RADAR==mLine.ID_TIP_RADAR))
            {if(mEvents[EventId[mOrdinar.id_event]].State==2)
            {id_("mordinar").style.backgroundColor="#FEB734";
            mOrdinar.State=3;} else {mOrdinar.State=0;id_("mordinar").style.backgroundColor="#FFFFFF";};}
            };savestate=saveenabled();}                
          */
		        
            }


function footover(obj,k){
obj.src="/resources/images/footer/"+k+"_.png?7";}	
function footout(obj,k){
obj.src="/resources/images/footer/"+k+".png?7";}	

function footover2(obj,k){
obj.src="/resources/images/footer/m"+k+"_.png?7";}	
function footout2(obj,k){
obj.src="/resources/images/footer/m"+k+".png?7";}	


function overclick(){
id_("sport999").style.display="none";
OverSport=1;
ttt1=0;
MenuClick(0);
}

function tryodd(odd,radar,live){
var i=0;
for(i=0;i<tryrad.length;i++) if(radar==tryrad[i]&&live==tryradl[i]) break;
if(i==tryrad.length) return odd;
return 1-odd;	
}


function xlopus2(index,t){
if(t==1&&xlopp[index]==1) return;
if(Xlop[index].onclick==null) return;
var div=null;
if(index==0) div=id_("SportMenu").parentNode; 
else div=Xlop[index].parentNode.nextSibling;



var i=index;
var off=Math.round(div.childNodes[0].offsetHeight/13);

var off1=div.childNodes[0].offsetHeight;
Xlop[i].onclick=null;
if(xlopp[i]==1){xlopp[i]=0;	div.style.overflow="hidden";
}
else {xlopp[i]=1;	
if(i!=0){
div.previousSibling.style.borderBottomRightRadius="0px";
div.previousSibling.style.borderBottomLeftRadius="0px";}
if(i==6){
div.previousSibling.parentNode.style.borderBottomRightRadius="0px";
div.previousSibling.parentNode.style.borderBottomLeftRadius="0px";}

}

xloppc[i]=off; 
xloppi[i]=setInterval(function(){slidexlop(div,i,off1,off);},16);}



function sort1x2(){
var i=0;
var mE1=new Array();
var mE2=new Array();
for(i=0;i<mEvents.length;i++){
if(mEvents[i].Live==0) continue;
if(mEvents[i].string.length==0&&ttt>5) DrawEvent(mEvents[i]);
if(mEvents[i].T1x2[0].length>0) mE1.push(i); else mE2.push(i);
}
return mE1.concat(mE2);
}





function drawlivenow(){
if(iphone==1) return;	
//if(ttt>5) return;	
var i=0;
var al=0;
var string3=new Array();
var c=new Array();
var clr=new Array("#EBEBEB","#FFF");
var temp="";
var g=0;
var s=0;
var ss=0;
var uu=0;
var f=new Array();
nowprincipal=new Array();
var sor=sort1x2();
//console.log(starevent);

string3[23]=string3[22]=string3[31]=string3[19]=string3[20]=string3[1111]=string3[34]=string3[5]=string3[2]=string3[3]=string3[16]=string3[1]=string3[4]=string3[6]=string3[29]=string3[12]="";

f[23]=f[22]=f[1111]=f[34]=f[19]=f[5]=f[2]=f[3]=f[16]=f[1]=f[4]=f[6]=f[29]=f[12]=f[31]=f[20]=0;

c[23]=c[22]=c[1111]=c[34]=c[5]=c[2]=c[3]=c[16]=c[1]=c[4]=c[6]=c[29]=c[12]=c[31]=c[19]=c[20]=0;

stareventnow.splice(0);

//for(i=0;i<mSport.length;i++) al=al+mSport[i].LIVE;
for(i=0;i<mSport.length;i++)  al=al+mSport[i].LIVE;

for(i=0;i<starevent.length;i++){
if(!EventId[starevent[i]]&&EventId[starevent[i]]!=0) continue;
if(!mEvents[EventId[starevent[i]]]) continue;
if(mEvents[EventId[starevent[i]]].Live==0) continue;
uu++;
if(c[1111]>200) continue;
f[mEvents[EventId[starevent[i]]].ID_SPORT]++;
if(mEvents[EventId[starevent[i]]].string.length==0) DrawEvent(mEvents[EventId[starevent[i]]]);
string3[1111]=string3[1111]+'<div class="livenow" id="low'+mEvents[EventId[starevent[i]]].ID_EVENT+'" style="background-color:'+clr[c[1111]%2]+';">'+mEvents[EventId[starevent[i]]].string3+'</div>';
nowprincipal.push(starevent[i]);
stareventnow.push(starevent[i]);
c[1111]++;}



for(i=0;i<sor.length;i++)
{if(mEvents[sor[i]].Live==0) continue;
if(c[mEvents[sor[i]].ID_SPORT]>2) continue;
for(j=0;j<stareventnow.length;j++) if(mEvents[sor[i]].ID_EVENT==stareventnow[j]) break;
if(j<stareventnow.length) continue;
if(mEvents[sor[i]].string.length==0) DrawEvent(mEvents[sor[i]]);
string3[mEvents[sor[i]].ID_SPORT]=string3[mEvents[sor[i]].ID_SPORT]+
'<div class="livenow" id="low'+mEvents[sor[i]].ID_EVENT+'" style="background-color:'+clr[c[mEvents[sor[i]].ID_SPORT]%2]+';">'+mEvents[sor[i]].string3+'</div>';
nowprincipal.push(mEvents[sor[i]].ID_EVENT);
c[mEvents[sor[i]].ID_SPORT]++;}

if(c[1111]>9) {s=s+2;nowsport=0;}

{ss++;
if(stareventnow.length==0) {id_("now1111").style.display="none";id_("now1111").innerHTML="";
id_("nowfav").src="/resources/images/fv00.png?7";
 //id_("now1111").previousSibling.style.display="none";
if(s>3&&nowsport==0) nowclick(ss-1,1111,1);}
else {g=1;s++; if(s>3&&nowsport==0) nowclick(ss-1,1111,1);if(nowarray[1111]==0) id_("now1111").style.display="";
id_("now1111").previousSibling.style.display="";
id_("nowfav").src="/resources/images/fv01.png?7";
id_("now1111").innerHTML=string3[1111]+'<div style="float:left;width:237px;height:24px;background-color:#EBEBEB;"><div style="float:right;margin-right:5px;font-size:11px;font-weight:bold;color:#878787;text-decoration:underline;margin-top:3px;cursor:pointer;" onclick="favoritclick(1);">Показать все матчи в избранном</div</div>';}	
}



for(i=0;i<mSport.length;i++){
if(mSport[i].ID_SPORT==22||mSport[i].ID_SPORT==23||mSport[i].ID_SPORT==31||mSport[i].ID_SPORT==20||mSport[i].ID_SPORT==34||mSport[i].ID_SPORT==19||mSport[i].ID_SPORT==5||mSport[i].ID_SPORT==2||mSport[i].ID_SPORT==3||mSport[i].ID_SPORT==16||mSport[i].ID_SPORT==1||mSport[i].ID_SPORT==4||mSport[i].ID_SPORT==6||mSport[i].ID_SPORT==29||mSport[i].ID_SPORT==12){ss++;
if(mSport[i].LIVE-f[mSport[i].ID_SPORT]==0) {id_("now"+mSport[i].ID_SPORT).style.display="none";id_("now"+mSport[i].ID_SPORT).previousSibling.style.display="none";
if(s>3&&nowsport==0) nowclick(ss-1,mSport[i].ID_SPORT,1);}
else {g=1;s++; if(s>3&&nowsport==0) nowclick(ss-1,mSport[i].ID_SPORT,1);if(nowarray[mSport[i].ID_SPORT]==0) id_("now"+mSport[i].ID_SPORT).style.display="";
id_("now"+mSport[i].ID_SPORT).previousSibling.style.display="";
id_("now"+mSport[i].ID_SPORT).innerHTML=string3[mSport[i].ID_SPORT]+'<div style="float:left;width:237px;height:24px;background-color:#EBEBEB;"><div style="float:right;margin-right:5px;font-size:11px;font-weight:bold;color:#878787;text-decoration:underline;margin-top:3px;cursor:pointer;" onclick="SportClick2('+i+',1);">Показать все матчи ('+mSport[i].LIVE+')</div></div>';}	
}
}

if(g==1) {id_("nowfinal").style.display="";id_("nownow").style.display="none"; id_("nowfinal").childNodes[0].innerHTML="Показать весь LIVE ("+al+")";nowsport=1;id_("now1111").previousSibling.style.display="";}
else {id_("nowfinal").style.display="none";id_("nownow").style.display="";id_("now1111").previousSibling.style.display="none";}
//id_("LIVENOW").innerHTML=string3;
}




function xlopus(){
xlopus2(this.index,0);
return;	
}


function slidexlop(div,i,offset,off){
	
//console.log("slidexlop");
	
if(xlopp[i]==0){xloppc[i]--;
}
 else{ xloppc[i]--;
}

if(xlopp[i]==0) div.style.height=Math.round(offset*Math.pow(xloppc[i]/off,3))+"px";
else div.style.height=Math.round(offset*(1-Math.pow(xloppc[i]/off,3)))+"px";

//console.log(Math.round(offset*Math.pow(xloppc[i]/off,3))+"px");

if(xloppc[i]==0) {clearInterval(xloppi[i]);Xlop[i].onclick=xlopus;
if(i!=0&&xlopp[i]==0){
div.previousSibling.style.borderBottomRightRadius="10px";
div.previousSibling.style.borderBottomLeftRadius="10px";
if(i==6){
div.previousSibling.parentNode.style.borderBottomRightRadius="10px";
div.previousSibling.parentNode.style.borderBottomLeftRadius="10px";}
}

if(xlopp[i]==0) Xlop[i].src=Xlop[i].src.replace("down","up");else {div.style.height="auto";div.style.overflow="visible";Xlop[i].src=Xlop[i].src.replace("up","down");}
}
}







function smchange(sel,id_event){
var i=0;
var j=0;
var temp="";
LastSumm=sel.value;
for(i=0;i<mExpress.length;i++)
if(mExpress[i].id_event==id_event) {mExpress[i].summo=parseFloatExt(sel.value);
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==26&&mExpress[i].Index!=16)
{drawnov(mRospisradar2,mEventradar2)}
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==254)
{drawnov(mRospisradar2,mEventradar2)}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==2)
{for(j=0;j<novarray.length;j++) if(novarray[j]==mExpress[i].Index) break;
if(j<novarray.length){drawnov(mRospisradar2,mEventradar2);}}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==10)
{drawnov(mRospisradar2,mEventradar2)}

newexpress(mExpress[i]);break;}
newordsumm();
savestate=saveenabled();
}




function smchange2(sel,id_event){
var t1="";
var t2="";
var ei=sel.selectionStart;
if(sel.value.indexOf(".")>-1) {
t1=sel.value.split(".")[0];
t2=sel.value.split(".")[1].split(" ").join("").substr(0,2);
sel.value=t1+"."+t2;
sel.setSelectionRange(ei,ei);
}
	
var i=0;	
var temp="";
for(i=0;i<mExpress.length;i++)
if(mExpress[i].id_event==id_event) {
mExpress[i].summo=parseFloatExt(sel.value);
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==26&&mExpress[i].Index!=16)
{drawnov(mRospisradar2,mEventradar2)}
if(mExpress[i].id_event==LastFrontLive&&Plus.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==254)
{drawnov(mRospisradar2,mEventradar2)}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==2)
{for(j=0;j<novarray.length;j++) if(novarray[j]==mExpress[i].Index) break;
if(j<novarray.length){drawnov(mRospisradar2,mEventradar2);}}
if(mExpress[i].id_event==EventRospisi&&Rospis.style.display!="none"&&mExpress[i].ID_SPORT==1&&mExpress[i].ID_TIP_RADAR==10)
{drawnov(mRospisradar2,mEventradar2)}

mExpress[i].viplata=Round2(Math.min(Math.round((parseFloatExt(mExpress[i].V))*mExpress[i].summo*100)/100,mExpress[i].Maxim_pay));
mExpress[i].viplata2=Round2(Math.round((parseFloatExt(mExpress[i].V))*mExpress[i].summo*100)/100);
sel.parentNode.nextSibling.innerHTML=mExpress[i].viplata2;
if(loginstate==1&&(mExpress[i].Maxim<mExpress[i].summo||mExpress[i].summo<mClient.min||mExpress[i].summo>mClient.balance)){
mExpress[i].OrdinarState=1;	
if(mExpress[i].summo<mClient.min) temp="Cумма ставки меньше допустимого минимума" ;
else if(mExpress[i].summo>mClient.balance) temp="Недостаточно средств на счету" ;
else temp="Вы превысили максимальную сумму для данного события";
sel.style.backgroundColor="#FF0000";
sel.title=temp; 
sel.parentNode.nextSibling.nextSibling.style.opacity="0.6";sel.parentNode.nextSibling.nextSibling.onclick=null;sel.parentNode.nextSibling.nextSibling.style.cursor="default";
}
else {sel.style.backgroundColor="#FFF";sel.title="";mExpress[i].OrdinarState=0;
if(mExpress[i].State==0) {sel.parentNode.nextSibling.nextSibling.style.opacity="1";
sel.parentNode.nextSibling.nextSibling.onclick=function(){sendnewordinar(mExpress[i].id_event)};
sel.parentNode.nextSibling.nextSibling.style.cursor="pointer";}

}
break;}
savestate=saveenabled();
newordsumm();
}


function smchange3(sel,id_event){
LastSumm=sel.value;	
return;
var temp="";
var i=0;	
for(i=0;i<mExpress.length;i++)
if(mExpress[i].id_event==id_event) {
newexpress(mExpress[i]);

break;}
}



function newordsumm(){
var i=0;
var s=0;
var s1=0;
var s2=0;
var j=0;
for(i=0;i<mExpress.length;i++){if(mExpress[i].State+mExpress[i].OrdinarState>0) continue;j++; s=s+parseFloatExt(mExpress[i].summo);
s1=s1+mExpress[i].viplata;s2=s2+mExpress[i].viplata2;}
s=Math.round(s*100)/100;
s1=Math.round(s1*100)/100;
id_("NEWORDINAR").childNodes[0].childNodes[1].innerHTML="Сумма: "+zeroinsert(s,0);
id_("NEWORDINAR").childNodes[0].childNodes[0].innerHTML="Ставок: "+j;
viplata[0]=s1;
viplata2[0]=s2;
if(expressflag==0){
Viplata.innerHTML=""+zeroinsert(Math.round(viplata[expressflag]*100)/100,0);
Viplata2.innerHTML=""+zeroinsert(Math.round(viplata2[expressflag]*100)/100,0);}
}



function stateexpress(id_event){
var j=0;
            for(j=0;j<mExpress.length;j++)if(id_event==mExpress[j].id_event) break;
            if(j<mExpress.length){
            id_("mexpress"+mExpress[j].id_event).style.backgroundColor="#FF0000";
            mExpress[j].State=2;
id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.opacity="0.6";id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].setAttribute("onclick","");
id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.cursor="default";			
			savestate=saveenabled();}

}


function stateexpress2(id_line,k){
var j=0;
if(k==1){
            for(j=0;j<mExpress.length;j++)if(id_line==mExpress[j].id_line) break;
            if(j<mExpress.length){
            id_("mexpress"+mExpress[j].id_event).style.backgroundColor="#FF0000";
            mExpress[j].State=2;
id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.opacity="0.6";id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].setAttribute("onclick","");
id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.cursor="default";
			savestate=saveenabled();}}
			
if(k==0){
            for(j=0;j<mExpress.length;j++)if((mExpress[j].id_line==id_line)&&(mExpress[j].State==2)) break;
            if(j<mExpress.length){mExpress[j].State=0;
			id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.opacity="1";
            id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].setAttribute("onclick","sendnewordinar("+mExpress[j].id_event+")");
            id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.cursor="pointer";			
            expressclose(-1);};}
			
			
			

}


function stateexpress3(id_event,State){

            if(State==2){ 
            for(j=0;j<mExpress.length;j++) if((mExpress[j].id_event==id_event)&&(mExpress[j].State!=2)) break;
            if(j<mExpress.length){
            id_("mexpress"+mExpress[j].id_event).style.backgroundColor="#FEB734";
            mExpress[j].State=3;
        	id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.opacity="0.6";
			id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].setAttribute("onclick",""); 
			id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.cursor="default";
			savestate=saveenabled();};}
            

            if(State!=2){
            for(j=0;j<mExpress.length;j++)if((mExpress[j].id_event==id_event)&&(mExpress[j].State==3)) break;
            if(j<mExpress.length){mExpress[j].State=0;
            id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.opacity="1";
            id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].setAttribute("onclick","sendnewordinar("+mExpress[j].id_event+")");
            id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[4].style.cursor="pointer";			
			
            expressclose(-1);};}

            ;} 


function sendfreeordinar(id_event,sel){
freebetstate=1;
var i=0;
for(i=0;i<freebetarray.length;i++) if(freebetarray[i].id==sel.options[sel.selectedIndex].value) break;
if(i==freebetarray.length) return;
freebetnum=i;
freebetsumm=freebetarray[i].summa;
freebetid=freebetarray[i].id;
freeDate.setTime(freebetarray[i].date.getTime());
sendnewordinar2(id_event);	
}



function sendnewordinar(id_event){
freebetstate=0;
sendnewordinar2(id_event);
}

function sendnewordinar2(id_event){
if(grandsendstate>0) return;
if(sendstate==1) return;
bonusnewstate=0;
mExpressState=0;
ordinarflag=0;
rapidcheck=0;
var i=0;
for(i=0;i<mExpress.length;i++) if(mExpress[i].id_event==id_event) break;
if(i==mExpress.length) return;
if(mExpress[i].State+mExpress[i].OrdinarState>0&&freebetstate==0) return;
if(mExpress[i].State>0&&freebetstate==1) return;
mOrdinar=mExpress[i];
sendstavca();
}


function newexpress(Express){
var i=0;
for(i=0;i<mExpress.length;i++) if(mExpress[i].id_event==Express.id_event) break;
if(i==mExpress.length) return;
Express.viplata=Round2(Math.min(Math.round((parseFloatExt(Express.V))*Express.summo*100)/100,Express.Maxim_pay));
Express.viplata2=Round2(Math.round((parseFloatExt(Express.V))*Express.summo*100)/100);
id_("mexpress"+Express.id_event).childNodes[7].childNodes[3].innerHTML=Express.viplata2;				
var temp5=0;
//if(loginstate==0) cs_("ord5")[i].style.display="none"; else cs_("ord5")[i].style.display="";

if(loginstate==1&&(Express.Maxim<Express.summo||Express.summo<mClient.min||Express.summo>mClient.balance)) {Express.OrdinarState=1;
cs_("ord5")[i].style.backgroundColor="#FF0000";temp5=1;}
else {Express.OrdinarState=0;cs_("ord5")[i].style.backgroundColor="#fff";}

if(temp5>0){
if(Express.summo<mClient.min) cs_("ord5")[i].style.title='Cумма ставки меньше допустимого минимума' ;
else if(Express.summo>mClient.balance) cs_("ord5")[i].style.title='Недостаточно средств на счету' ;
else cs_("ord5")[i].style.title='Вы превысили максимальную сумму для данного события';}
else cs_("ord5")[i].style.title='';
cs_("ord5")[i].value=Express.summo;

//console.log("Express.MAX="+Express.MAX_);


if(Express.MAX_PAY==999999999) id_("mexpress"+Express.id_event).childNodes[7].childNodes[5].innerHTML='<div style="float:left;">Макс:&nbsp;</div><div style="border-radius:5px;cursor:pointer;width:11px;height:11px;color:#fff;background-color:#F47621;text-align:center;float:left;margin-top:1px;" onclick="setMax('+Express.id_event+')">?</div>'; else id_("mexpress"+Express.id_event).childNodes[7].childNodes[5].innerHTML='Макс:&nbsp;'+Math.floor(Express.Maxim);



if(Express.OrdinarState+Express.State!=0)
{id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.opacity="0.6";
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].onclick=null;
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.cursor="default";}

else {id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.opacity="1";
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].onclick=function(){sendnewordinar(Express.id_event)};
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.cursor="pointer";}
//keypadus();
//$('.ord5').keypad();
}


function newexpress2(Express){
Express.viplata=Round2(Math.min(Math.round((parseFloatExt(Express.V))*Express.summo*100)/100,Express.Maxim_pay));
Express.viplata2=Round2(Math.round((parseFloatExt(Express.V))*Express.summo*100)/100);
id_("mexpress"+Express.id_event).childNodes[7].childNodes[3].innerHTML=Express.viplata2;		
var temp5="";
if(loginstate==1&&(Express.Maxim<Express.summo||Express.summo<mClient.min||Express.summo>mClient.balance)) {Express.OrdinarState=1;temp5='style="background-color:#FF0000;" title="';}
else Express.OrdinarState=0;
if(temp5.length>0){
if(Express.summo<mClient.min) temp5=temp5+'Cумма ставки меньше допустимого минимума"' ;
else if(Express.summo>mClient.balance) temp5=temp5+'Недостаточно средств на счету"' ;
else temp5=temp5+'Вы превысили максимальную сумму для данного события"';}

id_("mexpress"+Express.id_event).childNodes[7].childNodes[2].innerHTML='<input class="ord5" onKeyUp="smchange2(this,'+Express.id_event+');" onKeyPress="return summapress3(event,'+Express.id_event+',this);" value="'+Express.summo+'"'+temp5+'/>';


if(Express.OrdinarState+Express.State!=0)
{id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.opacity="0.6";
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].onclick=null;
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.cursor="default";}

else {id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.opacity="1";
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].onclick=function(){sendnewordinar(Express.id_event)};
id_("mexpress"+Express.id_event).childNodes[7].childNodes[4].style.cursor="pointer";}

}


function rapidbetclick(t){

if(id_("RAPIDPOP").style.display==""&&t==1) return;
if(id_("RAPIDPOP").style.display==""&&t==0&&(checkrapid.checked==true||checkrapid.checked=="checked")){checkrapid.checked=false;return;}
if(t==0&&checkrapid.checked!=true&&checkrapid.checked!="checked") return;

if(t==0&&(checkrapid.checked==true||checkrapid.checked=="checked")) checkrapid.checked=false;
id_("RAPIDPOP").style.display="";	
	

}


function sm55change(){
cs_("ord55")[0].value=cs_("ord555")[0].value;	
}

function sm11change(){
cs_("ord555")[0].value=cs_("ord55")[0].value=cs_("ord111")[0].value;
}

function setcheckrapid(t){
id_("RAPIDPOP").style.display="none";		
if(t==1) checkrapid.checked=false; 
else {checkrapid.checked=true;delstavca();}

}
function ord5enabled(){
var i=0;for(i=0;i<cs_("ord5").length;i++) {cs_("ord5")[i].disabled="";cs_("ord1")[i].disabled="";}
}


function ordvalut(){

}



function nowclick(i,k,u){
if(id_("now"+k)){
if(nowarray[k]==1&&u==0) 
{id_("now"+k).style.display="";cs_("nowshape")[i].src="/resources/images/shapesport2.png?7";nowarray[k]=0;cs_("nowshape")[i].style.marginLeft="7px"; }
else {id_("now"+k).style.display="none";cs_("nowshape")[i].src="/resources/images/shapesport1.png?7";nowarray[k]=1;cs_("nowshape")[i].style.marginLeft="9px";}
}

}



function nowtim(){
var i=0;
var t=0;
var date1=new Date();
date1.setTime(date1.getTime()+(4-diftime)*60*60*1000); 
var time=date1.getTime();
var time1=10000000000000;
var time2=0;
var minute=0;
var hours=0;
for(i=0;i<mEvents.length;i++){	
if(mEvents[i].Live==1) continue;
if(mEvents[i].ID_LIVE==0) continue;
time2=mEvents[i].DATE_EVENT.getTime();
if(time2>time1) continue;
time1=time2;t=i;
}


time1=time1-time;
hours=Math.floor(time1/(60*60*1000));

minute=Math.round((time1-hours*60*60*1000)/(1000*60));
id_("nowtime").innerHTML=zeroadd(hours-diftime)+":" +zeroadd(minute);
}

/*
 * $Id: rawinflate.js,v 0.3 2013/04/09 14:25:38 dankogai Exp dankogai $
 *
 * GNU General Public License, version 2 (GPL-2.0)
 *   http://opensource.org/licenses/GPL-2.0
 * original:
 *   http://www.onicos.com/staff/iz/amuse/javascript/expert/inflate.txt
 */

(function(ctx){

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = zip_inflate(src);
 */

/* constant parameters */
var zip_WSIZE = 32768;		// Sliding Window size
var zip_STORED_BLOCK = 0;
var zip_STATIC_TREES = 1;
var zip_DYN_TREES    = 2;

/* for inflate */
var zip_lbits = 9; 		// bits in base literal/length lookup table
var zip_dbits = 6; 		// bits in base distance lookup table
var zip_INBUFSIZ = 32768;	// Input buffer size
var zip_INBUF_EXTRA = 64;	// Extra buffer

/* variables (inflate) */
var zip_slide;
var zip_wp;			// current position in slide
var zip_fixed_tl = null;	// inflate static
var zip_fixed_td;		// inflate static
var zip_fixed_bl, fixed_bd;	// inflate static
var zip_bit_buf;		// bit buffer
var zip_bit_len;		// bits in bit buffer
var zip_method;
var zip_eof;
var zip_copy_leng;
var zip_copy_dist;
var zip_tl, zip_td;	// literal/length and distance decoder tables
var zip_bl, zip_bd;	// number of bits decoded by tl and td

var zip_inflate_data;
var zip_inflate_pos;


/* constant tables (inflate) */
var zip_MASK_BITS = new Array(
    0x0000,
    0x0001, 0x0003, 0x0007, 0x000f, 0x001f, 0x003f, 0x007f, 0x00ff,
    0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff, 0x3fff, 0x7fff, 0xffff);
// Tables for deflate from PKZIP's appnote.txt.
var zip_cplens = new Array( // Copy lengths for literal codes 257..285
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
    35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
/* note: see note #13 above about the 258 in this list. */
var zip_cplext = new Array( // Extra bits for literal codes 257..285
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
    3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99); // 99==invalid
var zip_cpdist = new Array( // Copy offsets for distance codes 0..29
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
    8193, 12289, 16385, 24577);
var zip_cpdext = new Array( // Extra bits for distance codes
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
    7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
    12, 12, 13, 13);
var zip_border = new Array(  // Order of the bit length code lengths
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
/* objects (inflate) */

var zip_HuftList = function() {
    this.next = null;
    this.list = null;
}

var zip_HuftNode = function() {
    this.e = 0; // number of extra bits or operation
    this.b = 0; // number of bits in this code or subcode

    // union
    this.n = 0; // literal, length base, or distance base
    this.t = null; // (zip_HuftNode) pointer to next level of table
}

var zip_HuftBuild = function(b,	// code lengths in bits (all assumed <= BMAX)
		       n,	// number of codes (assumed <= N_MAX)
		       s,	// number of simple-valued codes (0..s-1)
		       d,	// list of base values for non-simple codes
		       e,	// list of extra bits for non-simple codes
		       mm	// maximum lookup bits
		   ) {
    this.BMAX = 16;   // maximum bit length of any code
    this.N_MAX = 288; // maximum number of codes in any set
    this.status = 0;	// 0: success, 1: incomplete table, 2: bad input
    this.root = null;	// (zip_HuftList) starting table
    this.m = 0;		// maximum lookup bits, returns actual

/* Given a list of code lengths and a maximum table size, make a set of
   tables to decode that set of codes.	Return zero on success, one if
   the given code set is incomplete (the tables are still built in this
   case), two if the input is invalid (all zero length codes or an
   oversubscribed set of lengths), and three if not enough memory.
   The code with value 256 is special, and the tables are constructed
   so that no bits beyond that code are fetched when that code is
   decoded. */
    {
	var a;			// counter for codes of length k
	var c = new Array(this.BMAX+1);	// bit length count table
	var el;			// length of EOB code (value 256)
	var f;			// i repeats in table every f entries
	var g;			// maximum code length
	var h;			// table level
	var i;			// counter, current code
	var j;			// counter
	var k;			// number of bits in current code
	var lx = new Array(this.BMAX+1);	// stack of bits per table
	var p;			// pointer into c[], b[], or v[]
	var pidx;		// index of p
	var q;			// (zip_HuftNode) points to current table
	var r = new zip_HuftNode(); // table entry for structure assignment
	var u = new Array(this.BMAX); // zip_HuftNode[BMAX][]  table stack
	var v = new Array(this.N_MAX); // values in order of bit length
	var w;
	var x = new Array(this.BMAX+1);// bit offsets, then code stack
	var xp;			// pointer into x or c
	var y;			// number of dummy codes added
	var z;			// number of entries in current table
	var o;
	var tail;		// (zip_HuftList)

	tail = this.root = null;
	for(i = 0; i < c.length; i++)
	    c[i] = 0;
	for(i = 0; i < lx.length; i++)
	    lx[i] = 0;
	for(i = 0; i < u.length; i++)
	    u[i] = null;
	for(i = 0; i < v.length; i++)
	    v[i] = 0;
	for(i = 0; i < x.length; i++)
	    x[i] = 0;

	// Generate counts for each bit length
	el = n > 256 ? b[256] : this.BMAX; // set length of EOB code, if any
	p = b; pidx = 0;
	i = n;
	do {
	    c[p[pidx]]++;	// assume all entries <= BMAX
	    pidx++;
	} while(--i > 0);
	if(c[0] == n) {	// null input--all zero length codes
	    this.root = null;
	    this.m = 0;
	    this.status = 0;
	    return;
	}

	// Find minimum and maximum length, bound *m by those
	for(j = 1; j <= this.BMAX; j++)
	    if(c[j] != 0)
		break;
	k = j;			// minimum code length
	if(mm < j)
	    mm = j;
	for(i = this.BMAX; i != 0; i--)
	    if(c[i] != 0)
		break;
	g = i;			// maximum code length
	if(mm > i)
	    mm = i;

	// Adjust last length count to fill out codes, if needed
	for(y = 1 << j; j < i; j++, y <<= 1)
	    if((y -= c[j]) < 0) {
		this.status = 2;	// bad input: more codes than bits
		this.m = mm;
		return;
	    }
	if((y -= c[i]) < 0) {
	    this.status = 2;
	    this.m = mm;
	    return;
	}
	c[i] += y;

	// Generate starting offsets into the value table for each length
	x[1] = j = 0;
	p = c;
	pidx = 1;
	xp = 2;
	while(--i > 0)		// note that i == g from above
	    x[xp++] = (j += p[pidx++]);

	// Make a table of values in order of bit lengths
	p = b; pidx = 0;
	i = 0;
	do {
	    if((j = p[pidx++]) != 0)
		v[x[j]++] = i;
	} while(++i < n);
	n = x[g];			// set n to length of v

	// Generate the Huffman codes and for each, make the table entries
	x[0] = i = 0;		// first Huffman code is zero
	p = v; pidx = 0;		// grab values in bit order
	h = -1;			// no tables yet--level -1
	w = lx[0] = 0;		// no bits decoded yet
	q = null;			// ditto
	z = 0;			// ditto

	// go through the bit lengths (k already is bits in shortest code)
	for(; k <= g; k++) {
	    a = c[k];
	    while(a-- > 0) {
		// here i is the Huffman code of length k bits for value p[pidx]
		// make tables up to required level
		while(k > w + lx[1 + h]) {
		    w += lx[1 + h]; // add bits already decoded
		    h++;

		    // compute minimum size table less than or equal to *m bits
		    z = (z = g - w) > mm ? mm : z; // upper limit
		    if((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
			// too few codes for k-w bit table
			f -= a + 1;	// deduct codes from patterns left
			xp = k;
			while(++j < z) { // try smaller tables up to z bits
			    if((f <<= 1) <= c[++xp])
				break;	// enough codes to use up j bits
			    f -= c[xp];	// else deduct codes from patterns
			}
		    }
		    if(w + j > el && w < el)
			j = el - w;	// make EOB code end at table
		    z = 1 << j;	// table entries for j-bit table
		    lx[1 + h] = j; // set table size in stack

		    // allocate and link in new table
		    q = new Array(z);
		    for(o = 0; o < z; o++) {
			q[o] = new zip_HuftNode();
		    }

		    if(tail == null)
			tail = this.root = new zip_HuftList();
		    else
			tail = tail.next = new zip_HuftList();
		    tail.next = null;
		    tail.list = q;
		    u[h] = q;	// table starts after link

		    /* connect to last table, if there is one */
		    if(h > 0) {
			x[h] = i;		// save pattern for backing up
			r.b = lx[h];	// bits to dump before this table
			r.e = 16 + j;	// bits in this table
			r.t = q;		// pointer to this table
			j = (i & ((1 << w) - 1)) >> (w - lx[h]);
			u[h-1][j].e = r.e;
			u[h-1][j].b = r.b;
			u[h-1][j].n = r.n;
			u[h-1][j].t = r.t;
		    }
		}

		// set up table entry in r
		r.b = k - w;
		if(pidx >= n)
		    r.e = 99;		// out of values--invalid code
		else if(p[pidx] < s) {
		    r.e = (p[pidx] < 256 ? 16 : 15); // 256 is end-of-block code
		    r.n = p[pidx++];	// simple code is just the value
		} else {
		    r.e = e[p[pidx] - s];	// non-simple--look up in lists
		    r.n = d[p[pidx++] - s];
		}

		// fill code-like entries with r //
		f = 1 << (k - w);
		for(j = i >> w; j < z; j += f) {
		    q[j].e = r.e;
		    q[j].b = r.b;
		    q[j].n = r.n;
		    q[j].t = r.t;
		}

		// backwards increment the k-bit code i
		for(j = 1 << (k - 1); (i & j) != 0; j >>= 1)
		    i ^= j;
		i ^= j;

		// backup over finished tables
		while((i & ((1 << w) - 1)) != x[h]) {
		    w -= lx[h];		// don't need to update q
		    h--;
		}
	    }
	}

	/* return actual size of base table */
	this.m = lx[1];

	/* Return true (1) if we were given an incomplete table */
	this.status = ((y != 0 && g != 1) ? 1 : 0);
    } /* end of constructor */
}


/* routines (inflate) */

var zip_GET_BYTE = function() {
    if(zip_inflate_data.length == zip_inflate_pos)
	return -1;
    return zip_inflate_data.charCodeAt(zip_inflate_pos++) & 0xff;
}

var zip_NEEDBITS = function(n) {
    while(zip_bit_len < n) {
	zip_bit_buf |= zip_GET_BYTE() << zip_bit_len;
	zip_bit_len += 8;
    }
}

var zip_GETBITS = function(n) {
    return zip_bit_buf & zip_MASK_BITS[n];
}

var zip_DUMPBITS = function(n) {
    zip_bit_buf >>= n;
    zip_bit_len -= n;
}

var zip_inflate_codes = function(buff, off, size) {
    /* inflate (decompress) the codes in a deflated (compressed) block.
       Return an error code or zero if it all goes ok. */
    var e;		// table entry flag/number of extra bits
    var t;		// (zip_HuftNode) pointer to table entry
    var n;

    if(size == 0)
      return 0;

    // inflate the coded data
    n = 0;
    for(;;) {			// do until end of block
	zip_NEEDBITS(zip_bl);
	t = zip_tl.list[zip_GETBITS(zip_bl)];
	e = t.e;
	while(e > 16) {
	    if(e == 99)
		return -1;
	    zip_DUMPBITS(t.b);
	    e -= 16;
	    zip_NEEDBITS(e);
	    t = t.t[zip_GETBITS(e)];
	    e = t.e;
	}
	zip_DUMPBITS(t.b);

	if(e == 16) {		// then it's a literal
	    zip_wp &= zip_WSIZE - 1;
	    buff[off + n++] = zip_slide[zip_wp++] = t.n;
	    if(n == size)
		return size;
	    continue;
	}

	// exit if end of block
	if(e == 15)
	    break;

	// it's an EOB or a length

	// get length of block to copy
	zip_NEEDBITS(e);
	zip_copy_leng = t.n + zip_GETBITS(e);
	zip_DUMPBITS(e);

	// decode distance of block to copy
	zip_NEEDBITS(zip_bd);
	t = zip_td.list[zip_GETBITS(zip_bd)];
	e = t.e;

	while(e > 16) {
	    if(e == 99)
		return -1;
	    zip_DUMPBITS(t.b);
	    e -= 16;
	    zip_NEEDBITS(e);
	    t = t.t[zip_GETBITS(e)];
	    e = t.e;
	}
	zip_DUMPBITS(t.b);
	zip_NEEDBITS(e);
	zip_copy_dist = zip_wp - t.n - zip_GETBITS(e);
	zip_DUMPBITS(e);

	// do the copy
	while(zip_copy_leng > 0 && n < size) {
	    zip_copy_leng--;
	    zip_copy_dist &= zip_WSIZE - 1;
	    zip_wp &= zip_WSIZE - 1;
	    buff[off + n++] = zip_slide[zip_wp++]
		= zip_slide[zip_copy_dist++];
	}

	if(n == size)
	    return size;
    }

    zip_method = -1; // done
    return n;
}

var zip_inflate_stored = function(buff, off, size) {
    /* "decompress" an inflated type 0 (stored) block. */
    var n;

    // go to byte boundary
    n = zip_bit_len & 7;
    zip_DUMPBITS(n);

    // get the length and its complement
    zip_NEEDBITS(16);
    n = zip_GETBITS(16);
    zip_DUMPBITS(16);
    zip_NEEDBITS(16);
    if(n != ((~zip_bit_buf) & 0xffff))
	return -1;			// error in compressed data
    zip_DUMPBITS(16);

    // read and output the compressed data
    zip_copy_leng = n;

    n = 0;
    while(zip_copy_leng > 0 && n < size) {
	zip_copy_leng--;
	zip_wp &= zip_WSIZE - 1;
	zip_NEEDBITS(8);
	buff[off + n++] = zip_slide[zip_wp++] =
	    zip_GETBITS(8);
	zip_DUMPBITS(8);
    }

    if(zip_copy_leng == 0)
      zip_method = -1; // done
    return n;
}

var zip_inflate_fixed = function(buff, off, size) {
    /* decompress an inflated type 1 (fixed Huffman codes) block.  We should
       either replace this with a custom decoder, or at least precompute the
       Huffman tables. */

    // if first time, set up tables for fixed blocks
    if(zip_fixed_tl == null) {
	var i;			// temporary variable
	var l = new Array(288);	// length list for huft_build
	var h;	// zip_HuftBuild

	// literal table
	for(i = 0; i < 144; i++)
	    l[i] = 8;
	for(; i < 256; i++)
	    l[i] = 9;
	for(; i < 280; i++)
	    l[i] = 7;
	for(; i < 288; i++)	// make a complete, but wrong code set
	    l[i] = 8;
	zip_fixed_bl = 7;

	h = new zip_HuftBuild(l, 288, 257, zip_cplens, zip_cplext,
			      zip_fixed_bl);
	if(h.status != 0) {
	    alert("HufBuild error: "+h.status);
	    return -1;
	}
	zip_fixed_tl = h.root;
	zip_fixed_bl = h.m;

	// distance table
	for(i = 0; i < 30; i++)	// make an incomplete code set
	    l[i] = 5;
	zip_fixed_bd = 5;

	h = new zip_HuftBuild(l, 30, 0, zip_cpdist, zip_cpdext, zip_fixed_bd);
	if(h.status > 1) {
	    zip_fixed_tl = null;
	    alert("HufBuild error: "+h.status);
	    return -1;
	}
	zip_fixed_td = h.root;
	zip_fixed_bd = h.m;
    }

    zip_tl = zip_fixed_tl;
    zip_td = zip_fixed_td;
    zip_bl = zip_fixed_bl;
    zip_bd = zip_fixed_bd;
    return zip_inflate_codes(buff, off, size);
}

var zip_inflate_dynamic = function(buff, off, size) {
    // decompress an inflated type 2 (dynamic Huffman codes) block.
    var i;		// temporary variables
    var j;
    var l;		// last length
    var n;		// number of lengths to get
    var t;		// (zip_HuftNode) literal/length code table
    var nb;		// number of bit length codes
    var nl;		// number of literal/length codes
    var nd;		// number of distance codes
    var ll = new Array(286+30); // literal/length and distance code lengths
    var h;		// (zip_HuftBuild)

    for(i = 0; i < ll.length; i++)
	ll[i] = 0;

    // read in table lengths
    zip_NEEDBITS(5);
    nl = 257 + zip_GETBITS(5);	// number of literal/length codes
    zip_DUMPBITS(5);
    zip_NEEDBITS(5);
    nd = 1 + zip_GETBITS(5);	// number of distance codes
    zip_DUMPBITS(5);
    zip_NEEDBITS(4);
    nb = 4 + zip_GETBITS(4);	// number of bit length codes
    zip_DUMPBITS(4);
    if(nl > 286 || nd > 30)
      return -1;		// bad lengths

    // read in bit-length-code lengths
    for(j = 0; j < nb; j++)
    {
	zip_NEEDBITS(3);
	ll[zip_border[j]] = zip_GETBITS(3);
	zip_DUMPBITS(3);
    }
    for(; j < 19; j++)
	ll[zip_border[j]] = 0;

    // build decoding table for trees--single level, 7 bit lookup
    zip_bl = 7;
    h = new zip_HuftBuild(ll, 19, 19, null, null, zip_bl);
    if(h.status != 0)
	return -1;	// incomplete code set

    zip_tl = h.root;
    zip_bl = h.m;

    // read in literal and distance code lengths
    n = nl + nd;
    i = l = 0;
    while(i < n) {
	zip_NEEDBITS(zip_bl);
	t = zip_tl.list[zip_GETBITS(zip_bl)];
	j = t.b;
	zip_DUMPBITS(j);
	j = t.n;
	if(j < 16)		// length of code in bits (0..15)
	    ll[i++] = l = j;	// save last length in l
	else if(j == 16) {	// repeat last length 3 to 6 times
	    zip_NEEDBITS(2);
	    j = 3 + zip_GETBITS(2);
	    zip_DUMPBITS(2);
	    if(i + j > n)
		return -1;
	    while(j-- > 0)
		ll[i++] = l;
	} else if(j == 17) {	// 3 to 10 zero length codes
	    zip_NEEDBITS(3);
	    j = 3 + zip_GETBITS(3);
	    zip_DUMPBITS(3);
	    if(i + j > n)
		return -1;
	    while(j-- > 0)
		ll[i++] = 0;
	    l = 0;
	} else {		// j == 18: 11 to 138 zero length codes
	    zip_NEEDBITS(7);
	    j = 11 + zip_GETBITS(7);
	    zip_DUMPBITS(7);
	    if(i + j > n)
		return -1;
	    while(j-- > 0)
		ll[i++] = 0;
	    l = 0;
	}
    }

    // build the decoding tables for literal/length and distance codes
    zip_bl = zip_lbits;
    h = new zip_HuftBuild(ll, nl, 257, zip_cplens, zip_cplext, zip_bl);
    if(zip_bl == 0)	// no literals or lengths
	h.status = 1;
    if(h.status != 0) {
	if(h.status == 1)
	    ;// **incomplete literal tree**
	return -1;		// incomplete code set
    }
    zip_tl = h.root;
    zip_bl = h.m;

    for(i = 0; i < nd; i++)
	ll[i] = ll[i + nl];
    zip_bd = zip_dbits;
    h = new zip_HuftBuild(ll, nd, 0, zip_cpdist, zip_cpdext, zip_bd);
    zip_td = h.root;
    zip_bd = h.m;

    if(zip_bd == 0 && nl > 257) {   // lengths but no distances
	// **incomplete distance tree**
	return -1;
    }

    if(h.status == 1) {
	;// **incomplete distance tree**
    }
    if(h.status != 0)
	return -1;

    // decompress until an end-of-block code
    return zip_inflate_codes(buff, off, size);
}

var zip_inflate_start = function() {
    var i;

    if(zip_slide == null)
	zip_slide = new Array(2 * zip_WSIZE);
    zip_wp = 0;
    zip_bit_buf = 0;
    zip_bit_len = 0;
    zip_method = -1;
    zip_eof = false;
    zip_copy_leng = zip_copy_dist = 0;
    zip_tl = null;
}

var zip_inflate_internal = function(buff, off, size) {
    // decompress an inflated entry
    var n, i;

    n = 0;
    while(n < size) {
	if(zip_eof && zip_method == -1)
	    return n;

	if(zip_copy_leng > 0) {
	    if(zip_method != zip_STORED_BLOCK) {
		// STATIC_TREES or DYN_TREES
		while(zip_copy_leng > 0 && n < size) {
		    zip_copy_leng--;
		    zip_copy_dist &= zip_WSIZE - 1;
		    zip_wp &= zip_WSIZE - 1;
		    buff[off + n++] = zip_slide[zip_wp++] =
			zip_slide[zip_copy_dist++];
		}
	    } else {
		while(zip_copy_leng > 0 && n < size) {
		    zip_copy_leng--;
		    zip_wp &= zip_WSIZE - 1;
		    zip_NEEDBITS(8);
		    buff[off + n++] = zip_slide[zip_wp++] = zip_GETBITS(8);
		    zip_DUMPBITS(8);
		}
		if(zip_copy_leng == 0)
		    zip_method = -1; // done
	    }
	    if(n == size)
		return n;
	}

	if(zip_method == -1) {
	    if(zip_eof)
		break;

	    // read in last block bit
	    zip_NEEDBITS(1);
	    if(zip_GETBITS(1) != 0)
		zip_eof = true;
	    zip_DUMPBITS(1);

	    // read in block type
	    zip_NEEDBITS(2);
	    zip_method = zip_GETBITS(2);
	    zip_DUMPBITS(2);
	    zip_tl = null;
	    zip_copy_leng = 0;
	}

	switch(zip_method) {
	  case 0: // zip_STORED_BLOCK
	    i = zip_inflate_stored(buff, off + n, size - n);
	    break;

	  case 1: // zip_STATIC_TREES
	    if(zip_tl != null)
		i = zip_inflate_codes(buff, off + n, size - n);
	    else
		i = zip_inflate_fixed(buff, off + n, size - n);
	    break;

	  case 2: // zip_DYN_TREES
	    if(zip_tl != null)
		i = zip_inflate_codes(buff, off + n, size - n);
	    else
		i = zip_inflate_dynamic(buff, off + n, size - n);
	    break;

	  default: // error
	    i = -1;
	    break;
	}

	if(i == -1) {
	    if(zip_eof)
		return 0;
	    return -1;
	}
	n += i;
    }
    return n;
}

var zip_inflate = function(str) {
    var i, j;

    zip_inflate_start();
    zip_inflate_data = str;
    zip_inflate_pos = 0;

    var buff = new Array(1024);
    var aout = [];
    while((i = zip_inflate_internal(buff, 0, buff.length)) > 0) {
	var cbuf = new Array(i);
	for(j = 0; j < i; j++){
	    cbuf[j] = String.fromCharCode(buff[j]);
	}
	aout[aout.length] = cbuf.join("");
    }
    zip_inflate_data = null; // G.C.
    return aout.join("");
}

if (! ctx.RawDeflate) ctx.RawDeflate = {};
ctx.RawDeflate.inflate = zip_inflate;

})(this);




function decode64(data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec;
}
if (window.atob) decode64 = window.atob;

function splitscore(score,duration,timeevent,beisbol){
if(beisbol!=null) return beisbol.replace("-",":");
var temp4=score.split(" - "); if(temp4.length==0) return "0:0";
var i=0;
var j=0;
var l=0;
var temp=new Array();
for(i=0;i<temp4.length;i++){ 
temp=temp4[i].split(":");
if(temp.length<2) continue;
if(i<temp4.length-1){ if(parseInt(temp[0])<parseInt(temp[1]) ) j++; else l++;continue;}
//if(Math.abs(parseInt(temp[0])-parseInt(temp[1]))<2
if(parseInt(temp[0])<6&&parseInt(temp[1])<6) continue;
if(parseInt(temp[0])==parseInt(temp[1])) continue;

if(timeevent.toLowerCase().indexOf("итог")>-1){if(parseInt(temp[0])<parseInt(temp[1])) j++; else l++;}
else continue;
;}

return ""+l+":"+j;
}



var eventgreen=new Array();
var eventgreenold=new Array();

function scautinsert(id,s,time,title,duration){
if(id!=50&&id!=45&&id!=40&&id!=30) return;	
if(duration==0) duration=45;

var intr=15;

var arr=new Array();
arr[30]=1;
arr[45]=4;
arr[40]=2;
arr[50]=3;
ar=new Array();
ar[1]='margin-top:-5px;';
ar[2]='margin-top:5px;';
var temp=parseInt(time.split(":")[0]);
if(time.indexOf("+")==-1) temp=temp+1;

if(temp<=duration){
eventgreen[0]=eventgreen[0]+'<img style="position:absolute;margin-left:'+Math.round(279*(temp/duration)-7)
+'px;'+ar[s]+'" src="/resources/images/scaut2/'+arr[id]+'.png?7" title="'+title+'"/>' ;
}
if(temp>duration&temp<=2*duration){
eventgreen[1]=eventgreen[1]+'<img style="position:absolute;margin-left:'+Math.round(279*((temp-duration)/duration)-7)
+'px;'+ar[s]+'" src="/resources/images/scaut2/'+arr[id]+'.png?7" title="'+title+'"/>';
}


if(temp>2*duration&temp<=2*duration+intr){
eventgreen[2]=eventgreen[2]+'<img style="position:absolute;margin-left:'+Math.round(102*((temp-2*duration)/intr)-7)
+'px;'+ar[s]+'" src="/resources/images/scaut2/'+arr[id]+'.png?7" title="'+title+'"/>';
}

if(temp>2*duration+intr&temp<=2*duration+2*intr){
eventgreen[2]=eventgreen[2]+'<img style="position:absolute;margin-left:'+Math.round((170+102*((temp-(2*duration+intr))/intr))-7)
+'px;'+ar[s]+'" src="/resources/images/scaut2/'+arr[id]+'.png?7" title="'+title+'"/>';
}

}




function drawscaut(){
eventgreen[0]="";
eventgreen[1]="";
eventgreen[2]="";
	
var u=new Array();
u[50]=new Array();
u[45]=new Array();
u[40]=new Array();
u[154]=new Array();
u[60]=new Array();
u[30]=new Array();

var ut=new Array();
ut[50]="-я";
ut[45]="-я";
ut[40]="-я";
ut[154]="-й";
ut[60]="-я";
ut[30]="-й";

u[50][1]=u[50][2]=u[45][1]=u[45][2]=u[40][1]=u[40][2]=u[154][1]=u[154][2]=u[60][1]=u[60][2]=u[30][1]=u[30][2]=0;

function uu(id,s){
if(u[id]==null) return "";
u[id][s]++;
if(id==45)	u[50][s]++;
if(id==50)	u[45][s]++;
return ""+u[id][s]+ut[id];
}


	
var i=0;
var j=0;	
if(Scaut.dc>0) for(i=0;i<Scaut0.length;i++) Scaut0[i].style.display="";
else{
Scaut0[3].style.display="";
Scaut0[3].style.marginLeft="17px";
Scaut0[5].style.marginLeft="14px";
	
}

Scaut1[3].style.display="";
Scaut1[10].style.display="";



Scaut1[6].innerHTML=Scaut.red[0];
Scaut1[13].innerHTML=Scaut.red[1];
Scaut1[5].innerHTML=Scaut.yellow[0];
Scaut1[12].innerHTML=Scaut.yellow[1];
//Scaut1[7].innerHTML=Scaut.yr[0];
//Scaut1[14].innerHTML=Scaut.yr[1];
Scaut1[3].innerHTML=Scaut.corners[0];
Scaut1[10].innerHTML=Scaut.corners[1];

if(Scaut.dc>0){
Scaut0[3].style.marginLeft="10px";	
Scaut0[5].style.marginLeft="13px";

Scaut1[0].innerHTML=Scaut.possession[0];
Scaut1[7].innerHTML=Scaut.possession[1];
Scaut1[1].innerHTML=Scaut.shotsontarget[0];
Scaut1[8].innerHTML=Scaut.shotsontarget[1];
Scaut1[2].innerHTML=Scaut.shotsofftarget[0];
Scaut1[9].innerHTML=Scaut.shotsofftarget[1];
Scaut1[4].innerHTML=Scaut.substitutions[0];
Scaut1[11].innerHTML=Scaut.substitutions[1];
Scaut1[0].style.display="";
Scaut1[7].style.display="";
Scaut1[1].style.display="";
Scaut1[8].style.display="";
Scaut1[2].style.display="";
Scaut1[9].style.display="";
Scaut1[4].style.display="";
Scaut1[11].style.display="";}

//Scaut.events[m].id=readUnsignedInt(stream);
var string=new Array();
var s=0;
var p=0;

var ppp="";
var l=Scaut.events.length;
for(i=0;i<l-1;i++){
p=scautarrr[Scaut.events[i].stype];
if(Scaut.events[i].stype==1029&&Scaut.events[i].side==2) p=10292;
if(Scaut.events[i].stype==1018||Scaut.events[i].stype==1019||Scaut.events[i].stype==1040||Scaut.events[i].stype==1041||Scaut.events[i].stype==1084||Scaut.events[i].stype==1085||Scaut.events[i].stype==1016||Scaut.events[i].stype==1017||Scaut.events[i].stype==1042||Scaut.events[i].stype==1043) continue;

//for(j=0;j<scautarr2.length;j++) if(scautarr2[j]==Scaut.events[i].stype) {
string[s]='<div style="float:left;width:330px;min-height:20px;margin-top:5px;"><div style="float:left;line-height:11px;margin-top:3px;">'+Scaut.events[i].mtime.replace("+","<br />+")
+'</div><div style="margin-left:5px;margin-top:-2px;width:25px;float:left;"><center><img src="/resources/images/scaut1/'+p+'.png?7"/></center></div><div style="float:left;margin-top:2px;width:'+Math.round(300-6*(Scaut.events[i].mtime.length))+'px;line-height:12px;">'
//+" "+uu(Scaut.events[i].stype,Scaut.events[i].side)
+" "+scautarr[Scaut.events[i].stype]+" "+Scaut.events[i].info+Scaut.U[Scaut.events[i].side]+'</div></div>';s++;
scautinsert(Scaut.events[i].stype,Scaut.events[i].side,Scaut.events[i].mtime,Scaut.events[i].mtime+" "+scautarr[Scaut.events[i].stype]+" "+Scaut.events[i].info+
Scaut.U[Scaut.events[i].side],mEvents[EventId[LastFrontLive]].DURATION);
//break;}

}
var str="";

for(i=0;i<s;i++) str=str+string[s-i-1]

id_("eventscautchild").innerHTML=str;

if(id_("eventscautchild").offsetHeight>100) {id_("eventscautScroll").style.display="";
id_("eventscautScroll").style.height=(10+60*100/id_("eventscautchild").offsetHeight)+"px";
}

else id_("eventscautScroll").style.display="none";
//console.log("eventscautchild="+id_("eventscautchild").offsetHeight);

p=scautarrr[Scaut.events[l-1].stype];


if(Scaut.events[l-1].stype==1029&&Scaut.events[l-1].side==2) p=10292;


id_("lasteventscaut").innerHTML='<div style="float:left;width:330px;"><div style="float:left;margin-left:5px;">'+Scaut.events[l-1].mtime+'</div><div style="margin-left:5px;margin-top:-2px;width:25px;float:left;"><center><img src="/resources/images/scaut1/'+p+'.png?8"/></center></div><div style="float:left;height:18px;width:230px;overflow:hidden;">'+
//" "+uu(Scaut.events[l-1].stype,Scaut.events[l-1].side)+
" "+scautarr[Scaut.events[l-1].stype]+" "+Scaut.events[l-1].info+Scaut.U[Scaut.events[l-1].side]+'</div></div>';

scautinsert(Scaut.events[l-1].stype,Scaut.events[l-1].side,Scaut.events[l-1].mtime,Scaut.events[l-1].mtime+" "+scautarr[Scaut.events[l-1].stype]+" "+Scaut.events[l-1].info+Scaut.U[Scaut.events[l-1].side],mEvents[EventId[LastFrontLive]].DURATION);

//console.log("eventgreen[1]="+eventgreen[1]);
//console.log('id_(eventgreen2).innerHTML='+id_("eventgreen2").innerHTML);

if(eventgreenold[0]!=eventgreen[0]) id_("eventgreen1").innerHTML=eventgreen[0];
if(eventgreenold[1]!=eventgreen[1]) id_("eventgreen2").innerHTML=eventgreen[1];
if(eventgreenold[2]!=eventgreen[2]) id_("eventgreen3").innerHTML=eventgreen[2];
eventgreenold[0]=eventgreen[0];
eventgreenold[1]=eventgreen[1];
eventgreenold[2]=eventgreen[2];

if(EventId[LastFrontLive]&&mEvents[EventId[LastFrontLive]]&&mEvents[EventId[LastFrontLive]].SETSCORES.split(" - ").length>3&&Scaut.dc>0) penaliti();


//console.log(l);
if(sound1!=1) {sonor=1;return;}

if(sonor==1){
for(i=0;i<sound3.length;i++) if(sound3[i]==Scaut.events[l-1].stype) {id_("sound5").pause();id_("sound4").pause();id_("sound3").play();break;}
if(Scaut.events[l-1].stype==30&lasttype!=30) {id_("sound3").pause();id_("sound5").pause();id_("sound4").play();}
for(i=0;i<sound5.length;i++) if(sound5[i]==Scaut.events[l-1].stype) {id_("sound3").pause();id_("sound4").pause();id_("sound5").play();break;}
;}
sonor=1;
lasttype=Scaut.events[l-1].stype;

}


var penalt=new Array();
penalt[1]=new Array();
penalt[2]=new Array();

function drawpenaliti(){
var i=0;
for(i=0;i<5;i++)  Minut0[i].style.backgroundImage="url(/resources/images/scaut/balon"+penalt[1][i]+".png)";
for(i=0;i<5;i++)  Minut0[i+5].style.backgroundImage="url(/resources/images/scaut/balon"+penalt[2][i]+".png)";
}



function penaliti(){
var i=0;
var j=0;
for(i=0;i<5;i++) for(j=1;j<3;j++)penalt[j][i]=0;
for(i=0;i<Scaut.events.length;i++){
if(Scaut.events[i].stype==1002){
if(i+1<Scaut.events.length&&Scaut.events[i+1].stype==30) penalt[Scaut.events[i+1].side].push(1);
if(i+1<Scaut.events.length&&Scaut.events[i+1].stype!=30) penalt[Scaut.events[i+1].side].push(2);
if(i+1==Scaut.events.length) penalt[Scaut.events[i].side].push(2);}
}
if(penalt[1].length>penalt[2].length) penalt[2].push(3);
if(penalt[2].length>penalt[1].length) penalt[1].push(3);
drawpenaliti();
}








function drawscaut2(mEvent){
var i=0;
var j=0;
if(mEvent.ID_SPORT!=1) return;
var temp3=mEvent.SETSCORES.split(" - "); 
var k=temp3.length; 
if(k==0){temp3[0]="0:0";k=1;}; 


id_("scautscore11").innerHTML=temp3[0];
id_("scautscore11").style.color="#F47621";
if(Scaut.dc<0){
if(mEvent.BEISBOL.indexOf(":")>-1||mEvent.BEISBOL.indexOf("-")>-1){
mEvent.BEISBOL=mEvent.BEISBOL.replace("-",":");
Scaut1[3].innerHTML=mEvent.BEISBOL.split(":")[0];
Scaut1[10].innerHTML=mEvent.BEISBOL.split(":")[1];
Scaut0[3].style.display="";
Scaut1[3].style.display="";
Scaut1[10].style.display="";
}else {Scaut1[3].style.display="none";
Scaut0[3].style.display="none";
Scaut1[3].style.display="none";
Scaut1[10].style.display="none";}

Scaut1[6].innerHTML=mEvent.CARDS_R1;
Scaut1[13].innerHTML=mEvent.CARDS_R2;
Scaut1[5].innerHTML=mEvent.CARDS_Y1;
Scaut1[12].innerHTML=mEvent.CARDS_Y2;
}

var temp=0;
if(mEvent.Time_Event.indexOf('Т')>-1&&mEvent.Time_Event.indexOf("'")>-1){
temp=parseInt(mEvent.Time_Event.split("Т ")[1].replace("'",""));
};

var duration=mEvent.DURATION;
if(duration==0) duration=45;
var intr=15;


if(mEvent.Time_Event.indexOf('Пер.')>-1) temp=duration;
if(mEvent.Time_Event.indexOf('ОТ.П1')>-1) temp=2*duration;
if(mEvent.Time_Event.indexOf('ОТ.П2')>-1) temp=2*duration+intr;
if(mEvent.Time_Event.indexOf('ОТ.П3')>-1) temp=2*duration+2*intr;
if(mEvent.Time_Event.indexOf('Пен.')>-1) temp=2*duration+2*intr;
if(mEvent.Time_Event.indexOf('Итог')>-1){if(k==2) temp=2*duration;else temp=2*duration+2*intr;}




if(k>1){id_("scautscore22").innerHTML=temp3[1];id_("scautscore22").style.color="#F47621";id_("scautscore11").style.color="#FFF";}
if(k>2&&temp<=2*duration+intr){id_("scautscore33").innerHTML=temp3[2];id_("scautscore33").style.color="#F47621";id_("scautscore11").style.color=id_("scautscore22").style.color="#FFF";}
if(k>2&&temp>2*duration+intr){temp3[2];id_("scautscore44").innerHTML=temp3[2];
id_("scautscore33").innerHTML="";id_("scautscore44").style.color="#F47621";id_("scautscore11").style.color=id_("scautscore22").style.color=id_("scautscore55").style.color="#FFF";}

if(k>3){id_("scautscore55").innerHTML=temp3[3];id_("scautscore55").style.color="#F47621";id_("scautscore11").style.color=id_("scautscore22").style.color=id_("scautscore33").style.color=id_("scautscore44").style.color="#FFF";}

if(mEvent.Time_Event.indexOf('Итог')>-1){
id_("scautscore11").style.color=id_("scautscore22").style.color=id_("scautscore33").style.color=id_("scautscore44").style.color=id_("scautscore55").style.color="#FFF";	
}


//alert(mEvent.SETSCORES);


//if(mEvent.Time_Event.indexOf('Прерв')>-1) {temp3[0]="-:-";temp=0;}

//temp=110;

if(temp>2*duration) id_("eventscautScroll1").style.display="";

if(temp<=duration){
id_("greenscaut2").style.width="0px";
id_("greenscaut3").style.width="0px";
//id_("greenscaut4").style.width="0px";
id_("greenscaut1").style.width=279*temp/duration+"px";

}
if(temp>duration&temp<=2*duration){
id_("greenscaut3").style.width="0px";
//id_("greenscaut4").style.width="0px";
id_("greenscaut1").style.width="279px";
id_("greenscaut2").style.width=279*(temp-duration)/duration+"px";
}

if(temp>2*duration&temp<=2*duration+intr){
id_("greenscaut3").style.width=102*((temp-2*duration)/intr)+"px";
//id_("greenscaut4").style.width="0px";
id_("greenscaut1").style.width="279px";
id_("greenscaut2").style.width="279px";
}

if(temp>2*duration+intr&temp<=2*duration+2*intr){
id_("greenscaut3").style.width=(170+102*((temp-(2*duration+intr))/intr))+"px";
//id_("greenscaut4").style.width="102px";
id_("greenscaut1").style.width="279px";
id_("greenscaut2").style.width="279px";
}

//console.log("k="+k+"Scaut.events.length="+Scaut.events.length);

if(k==4&&Scaut.events.length==0){
for(i=0;i<5;i++) for(j=1;j<3;j++)penalt[j][i]=0;
j=parseInt(temp3[3].split(":")[0]);
for(i=0;i<j;i++) penalt[1][i]=1;
j=parseInt(temp3[3].split(":")[1]);
for(i=0;i<j;i++) penalt[2][i]=1;
drawpenaliti();
}


//Minut0[2].style.backgroundImage="url(/resources/images/scaut/balon1.png)";
//Minut0[7].style.backgroundImage="url(/resources/images/scaut/balon2.png)";

}

var sonor=0;
var lasttype=0;


function initscaut(mEvent){
Scaut.dc=-1;	
sonor=0;	
var i=0;
id_("eventscautScroll").style.marginTop="3px";
id_("eventscautchild").style.marginTop="0px";
id_("eventscautScroll1").style.marginTop="3px";
id_("eventscautchild1").style.marginTop="0px";
id_("eventscautScroll1").style.display="none";

id_("eventscautchild").innerHTML="";
id_("lasteventscaut").innerHTML="";
id_("shapplus").setAttribute("class", "shapplus");
id_("eventscaut").style.display="none";	
id_("eventgreen3").innerHTML="";
id_("eventgreen1").innerHTML="";
id_("eventgreen2").innerHTML="";

id_("scautscore11").innerHTML="";
id_("scautscore22").innerHTML="";
id_("scautscore33").innerHTML="";
id_("scautscore44").innerHTML="";
id_("scautscore55").innerHTML="";

Scaut.U[1]=" "+mEvent.UCHASTNIK1;
Scaut.U[2]=" "+mEvent.UCHASTNIK2;

for(i=0;i<Scaut0.length;i++){if(i>4&&i<8) continue;Scaut0[i].style.display="none";}
Scaut0[3].style.marginLeft="17px";
Scaut0[5].style.marginLeft="14px";

Scaut1[6].innerHTML=mEvent.CARDS_R1;
Scaut1[13].innerHTML=mEvent.CARDS_R2;
Scaut1[5].innerHTML=mEvent.CARDS_Y1;
Scaut1[12].innerHTML=mEvent.CARDS_Y2;

//Scaut1[7].innerHTML="";
//Scaut1[14].innerHTML="";
Scaut1[3].innerHTML="";
Scaut1[10].innerHTML="";
Scaut1[0].innerHTML="-";
Scaut1[7].innerHTML="-";
Scaut1[1].innerHTML="";
Scaut1[8].innerHTML="";
Scaut1[2].innerHTML="";
Scaut1[9].innerHTML="";
Scaut1[4].innerHTML="";
Scaut1[11].innerHTML="";


//Scaut1[7].style.display="none";
//Scaut1[15].style.display="none";
Scaut1[3].style.display="none";
Scaut1[10].style.display="none";
Scaut1[0].style.display="none";
Scaut1[7].style.display="none";
Scaut1[1].style.display="none";
Scaut1[8].style.display="none";
Scaut1[2].style.display="none";
Scaut1[9].style.display="none";
Scaut1[4].style.display="none";
Scaut1[11].style.display="none";
}


function scautshape(){
if(id_("eventscaut").style.display=="none"){
id_("shapplus").setAttribute("class", "shapplus2");
id_("eventscaut").style.display="";
if(id_("eventscautchild").offsetHeight>100) {id_("eventscautScroll").style.display="";
id_("eventscautScroll").style.height=(10+60*100/id_("eventscautchild").offsetHeight)+"px";}
else id_("eventscautScroll").style.display="none";
return;}
id_("shapplus").setAttribute("class", "shapplus");
id_("eventscaut").style.display="none";	
}

//var scrollscautX=0;

function scautscroll(e){
//scrollscautX=e.offsetY;	
//console.log("start");
id_("eventscaut").onmousemove=scautmove;
}


function scautscroll1(e){
//scrollscautX=e.offsetY;	
//console.log("start");
id_("eventscaut1").onmousemove=scautmove1;

}



function stopscautscroll(e){
id_("eventscaut1").onmousemove=null;
id_("eventscaut").onmousemove=null;
//console.log("stop");
return;
/*	
 e = e || event; // IE
    var toElement = e.relatedTarget || e.toElement; // IE
    // проверяем, мышь ушла на элемент внутри текущего?
    while (toElement && toElement !== this) {
      toElement = toElement.parentNode;
    }
 
    if (toElement == this) { // да, мы все еще внутри родителя
console.log("stop");}*/
}

//document.body.onmouseup=stopscautscroll;	


function scautmove(e){
if(id_("eventscautScroll").style.display=="none") return;;
var h1=id_("eventscautchild").offsetHeight;
var h=id_("eventscautScroll").offsetHeight;
//var h3=100-(h+6)
var h2=Math.max(Math.min(e.pageY-203,(100-3-h)),3);

id_("eventscautScroll").style.marginTop=h2+"px";
id_("eventscautchild").style.marginTop=-((h2-3)/(100-h-6))*(h1-100)+"px";
	
}


function scautmove1(e){
if(id_("eventscautScroll1").style.display=="none") return;	
var h1=115;//id_("eventscautchild1").offsetHeight;
var h2=Math.max(Math.min(e.pageY-541-(parseInt(id_("radarframep").style.height.replace("px",""))-372),30),3);
id_("eventscautScroll1").style.marginTop=h2+"px";
id_("eventscautchild1").style.marginTop=-((h2-3)/27)*(h1-65)+"px";
	
}


function scautwheelhandle(delta) {

if(id_("eventscautScroll").style.display=="none") return;;
var h2=parseInt(id_("eventscautScroll").style.marginTop.replace("px",""));
var h1=id_("eventscautchild").offsetHeight;
var h=id_("eventscautScroll").offsetHeight;

h2=Math.max(Math.min(h2-2*delta*(Math.max(200/h1,2)),(100-3-h)),3);;

id_("eventscautScroll").style.marginTop=h2+"px";
id_("eventscautchild").style.marginTop=-((h2-3)/(100-h-6))*(h1-100)+"px";
}


function scautwheelhandle1(delta) {
if(id_("eventscautScroll1").style.display=="none") return;		
var h2=parseInt(id_("eventscautScroll1").style.marginTop.replace("px",""));
var h1=115;//id_("eventscautchild1").offsetHeight;
h2=Math.max(Math.min(h2-2*delta,30),3);;
id_("eventscautScroll1").style.marginTop=h2+"px";
id_("eventscautchild1").style.marginTop=-((h2-3)/27)*(h1-65)+"px";
}


function scautwheel1(event){
        var delta = 0;
        if (!event) /* For IE. */
                event = window.event;
        if (event.wheelDelta) { /* IE/Opera. */
                delta = event.wheelDelta/120;
        } else if (event.detail) { /** Mozilla case. */
                /** In Mozilla, sign of delta is different than in IE.
                 * Also, delta is multiple of 3.
                 */
                delta = -event.detail/3;
        }
        /** If delta is nonzero, handle it.
         * Basically, delta is now positive if wheel was scrolled up,
         * and negative, if wheel was scrolled down.
         */
        if (delta)
                scautwheelhandle1(delta);
        /** Prevent default actions caused by mouse wheel.
         * That might be ugly, but we handle scrolls somehow
         * anyway, so don't bother here..
         */
        if (event.preventDefault)
                event.preventDefault();
	event.returnValue = false;
}


function scautwheel(event){
        var delta = 0;
        if (!event) /* For IE. */
                event = window.event;
        if (event.wheelDelta) { /* IE/Opera. */
                delta = event.wheelDelta/120;
        } else if (event.detail) { /** Mozilla case. */
                /** In Mozilla, sign of delta is different than in IE.
                 * Also, delta is multiple of 3.
                 */
                delta = -event.detail/3;
        }
        /** If delta is nonzero, handle it.
         * Basically, delta is now positive if wheel was scrolled up,
         * and negative, if wheel was scrolled down.
         */
        if (delta)
                scautwheelhandle(delta);
        /** Prevent default actions caused by mouse wheel.
         * That might be ugly, but we handle scrolls somehow
         * anyway, so don't bother here..
         */
        if (event.preventDefault)
                event.preventDefault();
	event.returnValue = false;
}


function timerscaut(){
if(ScautTime.indexOf("90")>-1||ScautTime.indexOf("45")>-1||ScautTime.indexOf("105")>-1||ScautTime.indexOf("120")>-1)
{clearInterval(scautTime);id_("scauttime").innerHTML=ScautTime.replace("Т ","Т&nbsp;&nbsp;&nbsp;").replace("'","");return;}
id_("scauttime").innerHTML=ScautTime.replace("Т ","Т&nbsp;&nbsp;&nbsp;").replace("'",":")+zeroadd(scautTimeCount);
scautTimeCount++;
if(scautTimeCount==60) {ScautTime=scauttimerinc(ScautTime);scautTimeCount=0;}
}


function scauttimecorect(timeevent){
if(timeevent.indexOf("'")==-1) return timeevent;
var temp=timeevent.split(" ");
var temp2=parseInt(temp[1].replace("'",""))-1;
return temp[0]+" "+temp2+"'";	
}

function scauttimerinc(timeevent){
if(timeevent.indexOf("'")==-1) return timeevent;
var temp=timeevent.split(" ");
var temp2=parseInt(temp[1].replace("'",""))+1;
if(temp2==46||temp2==91||temp2==106||temp2==121) temp2--;
return temp[0]+" "+temp2+"'";	
}

function volumclick(){
sound1=(sound1+1)%2;
if(sound1==1) cs_("volume")[0].style.backgroundImage="url(/resources/images/scaut/volume.png)";
else cs_("volume")[0].style.backgroundImage="url(/resources/images/scaut/volume2.png)";

}

function ckl1(){
id_("CHECKLOGIN2").checked=id_("CHECKLOGIN3").checked=id_("CHECKLOGIN").checked;
}

function ckl2(){
id_("CHECKLOGIN").checked=id_("CHECKLOGIN3").checked=id_("CHECKLOGIN2").checked;
}

function ckl3(){
id_("CHECKLOGIN").checked=id_("CHECKLOGIN2").checked=id_("CHECKLOGIN3").checked;
}


function countryliclick(){
var i=this.index;
id_("itemcode1").innerHTML=itemcode[i].innerHTML;
cs_("countryList")[0].style.display="none";
cs_("itemFlag")[0].style.backgroundPosition=cs_("itemFlag")[1+i].style.backgroundPosition;
Reg155[2].style.paddingLeft=(id_("itemcode1").innerHTML.length*7+27)+"px";
Reg155[2].style.width=145-(id_("itemcode1").innerHTML.length*7+27)+"px";
}



function countryliclick2(){
var i=this.index;
id_("itemcode2").innerHTML=itemcode2[i].innerHTML;
cs_("countryList2")[0].style.display="none";
cs_("itemFlag2")[0].style.backgroundPosition=cs_("itemFlag2")[1+i].style.backgroundPosition;
Reg250[2].style.paddingLeft=(id_("itemcode2").innerHTML.length*7+27)+"px";
Reg250[2].style.width=145-(id_("itemcode2").innerHTML.length*7+27)+"px";
}



function drawseo(){
if(!id_("PRTABLE9")||id_("PRTABLE9").style.display=="none") {prinarray[9].splice(0);return;	}
LastEventAction=new Array();
var i=0;
var j=0;
var string=new Array("","","","","","","","");
var string4="";
var string2="";
var num=new Array(0,0,0,0,0,0,0);
var num2=new Array(0,0,0,0,0,0,0);
color5index=new Array(1,1,1,1,1,1,1);

for(i=0;i<mEvents.length;i++){ if(mEvents[i].Live==0) continue; 
if(mEvents[i].Title.length==0) DrawEvent(mEvents[i]);

if(mEvents[i].T1x2[0].length==0) continue; 
if(mEvents[i].ID_SPORT!=1&&mEvents[i].ID_SPORT!=2&&mEvents[i].ID_SPORT!=4&&mEvents[i].ID_SPORT!=5) continue;
num2[mEvents[i].ID_SPORT]++;
if(num[mEvents[i].ID_SPORT]==3) continue;

string[mEvents[i].ID_SPORT]=string[mEvents[i].ID_SPORT]+'<div id="'+'AC'+mEvents[i].ID_EVENT+'" style="width:614px;height:31px;float:left;background-color:'+color4[color5index[mEvents[i].ID_SPORT]]+';border-bottom:1px solid #C7C7C7;">'+ RapidDraw4(mEvents[i])+'</div>';
prinarray[9].push(mEvents[i].ID_EVENT);
LastEventAction.push(mEvents[i].ID_EVENT);
num[mEvents[i].ID_SPORT]++;
color5index[mEvents[i].ID_SPORT]=(color5index[mEvents[i].ID_SPORT]+1)%2;
}

for(i=0;i<mEvents.length;i++){ if(mEvents[i].Live==1) continue; 
if(mEvents[i].Title.length==0) DrawEvent(mEvents[i],2);
if(mEvents[i].T1x2[0].length==0) continue; 
if(mEvents[i].ID_SPORT!=1&&mEvents[i].ID_SPORT!=2&&mEvents[i].ID_SPORT!=4&&mEvents[i].ID_SPORT!=5) continue;
num2[mEvents[i].ID_SPORT]++;
if(num[mEvents[i].ID_SPORT]==3) continue;
string[mEvents[i].ID_SPORT]=string[mEvents[i].ID_SPORT]+'<div id="'+'AC'+mEvents[i].ID_EVENT+'" style="width:614px;float:left;height:31px;background-color:'+color4[color5index[mEvents[i].ID_SPORT]]+';border-bottom:1px solid #C7C7C7;">'+ RapidDraw4(mEvents[i])+'</div>';
prinarray[9].push(mEvents[i].ID_EVENT);
LastEventAction.push(mEvents[i].ID_EVENT);
num[mEvents[i].ID_SPORT]++;
color5index[mEvents[i].ID_SPORT]=(color5index[mEvents[i].ID_SPORT]+1)%2;
}

for(i=1;i<6;i++){
if(string[i]){string4=string4+'<div style="width:742px;margin-top:20px;margin-bottom:20px;float:left;"><img style="float:left;" src="/resources/images/sport'+i+'.jpg"><div style="background-image:url(/resources/images/stseo1.png);width:599px;height:21px;padding-top:4px;padding-left:15px;color:#F47621;font-weight:bold;font-size:16px;float:left;">';
for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==i){ string4=string4+mSport[j].NAME_RUS.toUpperCase();break;}
string4=string4+'</div>'+string[i]+'</div>'+'<div style="float:right;margin-right:23px;font-size:11px;font-weight:bold;color:#878787;text-decoration:underline;margin-top:-15px;cursor:pointer;" onclick="SportClick2('+j+',1);">Показать все матчи ('+num2[i]+')</div>';}	
}
string4=string4+'<div style="width:742px;margin-top:20px;margin-bottom:20px;float:left;"><img style="float:left;" src="/resources/images/sport100.jpg"><div style="background-image:url(/resources/images/stseo1.png);width:599px;height:21px;padding-top:4px;padding-left:15px;color:#F47621;font-weight:bold;font-size:16px;float:left;">ДРУГИЕ ВИДЫ СПОРТА</div>';

j=0;

for(i=0;i<mSport.length;i++){
if(j==8) break;	

if(mSport[i].ID_SPORT==1||mSport[i].ID_SPORT==2||mSport[i].ID_SPORT==4||mSport[i].ID_SPORT==5||mSport[i].ID_SPORT==110) continue;
if(mSport[i].count==0||(mSport[i].Rombo.length==0&&timeinit==1)) continue;
string2=string2+'<div class="seooversport" onclick="SportClick2('+i+',1);">';
if(mSport[i].ID_SPORT==16) string2=string2+"АМЕРИК. ФУТБОЛ";
else if(mSport[i].ID_SPORT==34) string2=string2+"ПЛЯЖ. ВОЛЕЙБОЛ";
else if(mSport[i].ID_SPORT==143) string2=string2+"ЗИМНИЕ СПОРТЫ";
else string2=string2+mSport[i].NAME_RUS.toUpperCase();
string2=string2+'</div>';
j++;

}

string4=string4+string2+'<div style="float:left;width:100%;height:50px;"></div></div>';


id_("PRTABLE9").innerHTML=string4;	
		
};




var timerk=null;

function timerkfunc(){
if(!id_("TIMERK")) {clearInterval(timerk); return;}
var interval = new Date().getTime()-1352648700000;
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;
var days = Math.floor(interval / msecPerDay );
interval = interval - (days * msecPerDay );
var hours = Math.floor(interval / msecPerHour );
interval = interval - (hours * msecPerHour );
var minutes = Math.floor(interval / msecPerMinute );
interval = interval - (minutes * msecPerMinute );
var seconds = Math.floor(interval / 1000 );
id_("TIMERK").childNodes[0].innerHTML=days;	
id_("TIMERK").childNodes[1].innerHTML=zeroadd(hours)+":"+zeroadd(minutes)+":"+zeroadd(seconds);	
}


function freebetexpress(){
var i=0;
var j=0;
var l=0;
var yes=0;
var op="";
var inner="";
var dd=new Date();




for(i=0;i<freebetarray.length;i++){
inner=inner+'<div style="width:100%;border-top:1px solid #DADADA;float:left;"><img style="float:left;cursor:pointer;margin-left:15px;margin-top:20px;" src="/resources/images/bonplatfree.png"/ onclick="hashnav2(&quot;/pomosch/free-bet/&quot;)"><div style="float:right;margin-right:20px;margin-top:25px;font-size:14px;color:#656565">'+zeroadd(dd.getDate())+"."+zeroadd(dd.getMonth()+1)+"."+dd.getFullYear()+'</div><div style="float:left;height:5px;width:100%;"></div><div style="font-size:12px;font-weight:bold;font-style:italic;float:left;margin-left:15px;">';

if(freebetarray[i].mode>0) {inner=inner+'По программе лояльности за&nbsp;';
var d=(rDate.getMonth()+11)%12;
var y=rDate.getFullYear();
if(d==11) y--;
inner=inner+calend2[d].toLowerCase()+' '+y+'</div>';
} else  if(freebetarray[i].Sports.length==1&&freebetarray[i].Champs.length==0&&freebetarray[i].Events.length==0){
for(j=0;j<mSport.length;j++) if(mSport[j].ID_SPORT==freebetarray[i].Sports[0]){inner=inner+'Действует на '+mSport[j].NAME_RUS.toLowerCase()+'</div>';break;}
if(j==mSport.length) inner=inner+'&nbsp;</div>';} 
else  if(freebetarray[i].Events.length>0){
for(j=0;j<freebetarray[i].Events.length;j++) if(freebetarray[i].Events[j]==7503146){inner=inner+'Доступен на Суперкубок России</div>';break;}
if(j==mSport.length) inner=inner+'&nbsp;</div>';} 


else inner=inner+'&nbsp;</div>';

inner=inner+'<div style="float:right;margin-right:20px;margin-top:10px;font-size:16px;color:#000;font-weight:bold;">'+zeroinsert(freebetarray[i].summa)+' '+mClient.Val[mClient.valuta-1]+'</div><div style="float:left;height:5px;width:100%;"></div>';

inner=inner+'<div style="font-size:11px;color:#656565;font-weight:bold;float:left;margin-left:15px;margin-top:-15px;">Действительна по '+zeroadd(freebetarray[i].date.getDate())+"."+zeroadd(freebetarray[i].date.getMonth()+1)+"."+freebetarray[i].date.getFullYear()+'</div>';
inner=inner+'<div style="float:left;height:5px;width:100%;"></div>';
inner=inner+'<a href="/pomosch/free-bet/" style="color:#E97323;float:left;margin-left:15px;">Как использовать</a>';


inner=inner+'<div style="float:left;height:15px;width:100%;"></div></div>';



}



if(authstate!=null){ id_("innermybonus").innerHTML=inner;
if(id_("innermybonus2").innerHTML.indexOf("на данный момент")>-1)id_("innermybonus2").innerHTML="";}
else innerbonus=inner;


for(j=0;j<mExpress.length;j++){ 
op="";
for(i=0;i<freebetarray.length;i++){
	
yes=0;
if(freebetarray[i].Sports.length==0&&freebetarray[i].Champs.length==0&&freebetarray[i].Events.length==0){
if(parseFloatExt(mExpress[j].V)>=freebetarray[i].minkoef) yes=1;} 
else{
for(l=0;l<freebetarray[i].Sports.length;l++) if(mExpress[j].ID_SPORT==freebetarray[i].Sports[l]&&parseFloatExt(mExpress[j].V)>=freebetarray[i].minkoef) {yes=1;break;}
if(yes==0) for(l=0;l<freebetarray[i].Champs.length;l++) if(mExpress[j].ID_CHAMPIONSHIP==freebetarray[i].Champs[l]&&parseFloatExt(mExpress[j].V)>=freebetarray[i].minkoef) {yes=1;break;}
if(yes==0) for(l=0;l<freebetarray[i].Events.length;l++) if(mExpress[j].id_event==freebetarray[i].Events[l]&&parseFloatExt(mExpress[j].V)>=freebetarray[i].minkoef) {yes=1;break;}
}

if(yes==1) op=op+'<option value="'+freebetarray[i].id+'">'+freebetarray[i].summa.toString()+'</option>';
}


if(id_("mexpress"+mExpress[j].id_event)){
if(op.length>0) id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[6].innerHTML=freebet1+op+freebet2+mExpress[j].id_event+',this.previousSibling'+freebet3;
else id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[6].innerHTML="";
}
}

$('a').unbind('click');
        $('a').bind('click', ajaxLoad);

;}



function freebetexpr(mExpress){
var i=0;
var l=0;
var yes=0;
var op="";
for(i=0;i<freebetarray.length;i++)
{yes=0;
if(freebetarray[i].Sports.length==0&&freebetarray[i].Champs.length==0&&freebetarray[i].Events.length==0){
if(parseFloatExt(mExpress.V)>=freebetarray[i].minkoef) yes=1;} 
else{
for(l=0;l<freebetarray[i].Sports.length;l++) if(mExpress.ID_SPORT==freebetarray[i].Sports[l]&&parseFloatExt(mExpress.V)>=freebetarray[i].minkoef) {yes=1;break;}
if(yes==0) for(l=0;l<freebetarray[i].Champs.length;l++) if(mExpress.ID_CHAMPIONSHIP==freebetarray[i].Champs[l]&&parseFloatExt(mExpress.V)>=freebetarray[i].minkoef) {yes=1;break;}
if(yes==0) for(l=0;l<freebetarray[i].Events.length;l++) if(mExpress.id_event==freebetarray[i].Events[l]&&parseFloatExt(mExpress.V)>=freebetarray[i].minkoef) {yes=1;break;}
}
if(yes==1) op=op+'<option value="'+freebetarray[i].id+'">'+freebetarray[i].summa.toString()+'</option>';

}
if(op.length>0) return freebet1+op+freebet2+mExpress.id_event+',this.previousSibling'+freebet3;
else return "";}







function clearfreebet(){
if(authstate!=null){
id_("innermybonus").innerHTML="";
if(id_("innermybonus2").innerHTML=="") id_("innermybonus2").innerHTML='<div style="float:left;width:100%;text-align:center;height:60px;font-size:14px;">К сожалению, на данный момент у Вас нет никаких бонусов.<br/>Примите участие в одной из наших <a href="/novosti/" style="color:#E97323;text-decoration:none;">акции</a> и заработайте больше!</div>';
}
var j=0;
for(j=0;j<mExpress.length;j++) if(id_("mexpress"+mExpress[j].id_event)) id_("mexpress"+mExpress[j].id_event).childNodes[7].childNodes[6].innerHTML="";
id_("freebetbottom").style.display="none";
freebetarray.splice(0);}



function freebetclick(event){event.preventDefault();CloseWarning();
return;
var i=0;
for(i=0;i<freebetarray.length;i++)
if(EventId[freebetarray[i]]&&mEvents[EventId[freebetarray[i]]])
{plushash(freebetarray[i]);break;}
};


function codecountry(){
if(countrystate==0) return;	
var i=0;
if(Reg4[5].selectedIndex>0){ id_("codcount").innerHTML="+";//+countryarray[2*(Reg4[5].selectedIndex-1)+1];
Reg4[6].value=countryarray[2*(Reg4[5].selectedIndex-1)+1];
}
else {id_("codcount").innerHTML="";Reg4[6].value=""}
Reg4[6].style.paddingLeft=(id_("codcount").innerHTML.length*6+1)+"px";
Reg4[6].style.width=(268-id_("codcount").innerHTML.length*6-1)+"px";	
removeAll(Reg4[16]);
removeAll(Reg4[17]);
var newOpt1=null;
Reg4[17].disabled="disabled";
if(Reg4[5].selectedIndex==0) {Reg4[16].disabled="disabled";}
else{Reg4[16].disabled=""; Reg4[16].options.add(new Option("Не выбран",-1));
for(i=0;i<regiune[Reg4[5].selectedIndex-1].length;i++){newOpt1 = new Option(regiune[Reg4[5].selectedIndex-1][i][0],i );Reg4[16].options.add(newOpt1);}
}
}

function regionchange(){
if(countrystate==0) return;		
var i=0;
var newOpt1=null;
removeAll(Reg4[17]);
if(Reg4[16].selectedIndex==0) {Reg4[17].disabled="disabled";}
else{
Reg4[17].disabled="";	
Reg4[17].options.add(new Option("Не выбран",-1))
for(i=0;i<regiune[Reg4[5].selectedIndex-1][Reg4[16].selectedIndex-1].length-1;i++)
{newOpt1 = new Option(regiune[Reg4[5].selectedIndex-1][Reg4[16].selectedIndex-1][i+1],i);Reg4[17].options.add(newOpt1);}
}
}





function codecountry2(){
if(countrystate==0) return;		
//console.log("codecountry2");
if(Reg7[5].selectedIndex==0) id_("codcount2").innerHTML="";
else id_("codcount2").innerHTML="+"+countryarray[2*(Reg7[5].selectedIndex-1)+1];

Reg7[6].style.paddingLeft=(id_("codcount2").innerHTML.length*6+1)+"px";
Reg7[6].style.width=(268-id_("codcount2").innerHTML.length*6-1)+"px";	
removeAll(Reg7[8]);
removeAll(Reg7[9]);
var newOpt1=null;
Reg7[9].disabled="disabled";
if(Reg7[5].selectedIndex==0) {Reg7[8].disabled="disabled";}
else{Reg7[8].disabled=""; Reg7[8].options.add(new Option("Не выбран",-1));
for(i=0;i<regiune[Reg7[5].selectedIndex-1].length;i++){newOpt1 = new Option(regiune[Reg7[5].selectedIndex-1][i][0],i );Reg7[8].options.add(newOpt1);}
;}
}


function regionchange2(){
if(countrystate==0) return;		
var i=0;
var newOpt1=null;
removeAll(Reg7[9]);
if(Reg7[8].selectedIndex==0) {Reg7[9].disabled="disabled";}
else{
Reg7[9].disabled="";	
Reg7[9].options.add(new Option("Не выбран",-1))
for(i=0;i<regiune[Reg7[5].selectedIndex-1][Reg7[8].selectedIndex-1].length-1;i++)
{newOpt1 = new Option(regiune[Reg7[5].selectedIndex-1][Reg7[8].selectedIndex-1][i+1],i);Reg7[9].options.add(newOpt1);}
}
}



function getcountry(){
if(countrystate>0) {initcountry();return;}
id_("sss").innerHTML="";
el=document.createElement('script');
el.setAttribute('src',"/resources/js/region.js?22");
el.setAttribute('type','text/javascript');
id_("sss").appendChild(el);
if(navigator.userAgent.toLowerCase().indexOf('iphone')>-1||navigator.userAgent.toLowerCase().indexOf('ipad')>-1||navigator.userAgent.toLowerCase().indexOf('ipod')>-1){
regdata1();
regdata3();
regdata2();}

return;}


function initcountry(){
var i=0;
var ss=0;
if(countrystate==1){
Reg4[5].options.add(new Option("Не выбрана",-1));
Reg7[5].options.add(new Option("Не выбрана",-1));
for(i=0;i<countryarray.length/2;i++){Reg4[5].options.add(new Option(countryarray[2*i],i));Reg7[5].options.add(new Option(countryarray[2*i],i)); }
}
if(countrylogin==1){
for(i=0;i<countryarray.length/2;i++) if(countryarray[2*i]==mClient.country) {Reg7[5].selectedIndex=i+1;Reg7[5].disabled="disabled";break;}
ss=i;codecountry2();
mClient.mobil=Reg7[6].value=mClient.mobil.replace(countryarray[2*ss+1],"").replace("+","").split(" ").join("");	
if(mClient.mobil.length>3) Reg7[6].disabled="disabled";else  Reg7[6].disabled="";
if(Reg7[5].selectedIndex>0)	for(i=0;i<Reg7[8].options.length;i++) if(Reg7[8].options[i].text==mClient.region) {Reg7[8].selectedIndex=i;
break;};
if(Reg7[8].selectedIndex>0){regionchange2();Reg7[8].disabled="disbaled";for(i=0;i<Reg7[9].options.length;i++) if(Reg7[9].options[i].text==mClient.city) {Reg7[9].selectedIndex=i;if(i>0) Reg7[9].disabled="disabled"; break;};}
countrylogin=2;
}
countrystate=2;
}



function regdata1(){
var i=0;
removeAll(Reg4[2]);
for(i=0;i<31;i++) Reg4[2].options.add(new Option((i+1),(i+1)));
Reg4[2].onfocus=null;
Reg4[2].onblur=null;		
}


function regdata2(){
var i=0;
removeAll(Reg4[3]);
for(i=0;i<12;i++) Reg4[3].options.add(new Option(calend[i],(i+1)));	
Reg4[3].onfocus=null;
Reg4[3].onblur=null;		
}

function regdata3(){
var i=0;
removeAll(Reg4[4]);
for(i=1900;i<2014;i++) Reg4[4].options.add(new Option(i,i));Reg4[4].selectedIndex=100;
Reg4[4].onfocus=null;
Reg4[4].onblur=null;		
}



function vmcch(){
if(Reg250[0].options.length==0) return;	
if(Reg250[0].options[Reg250[0].selectedIndex].text.substr(0,1)=="5") Reg29[0].selectedIndex=1; else Reg29[0].selectedIndex=0;	
if(Reg29[0].selectedIndex==0) Minpop2[0].innerHTML=Math.round(1500*mClient.kurs)+" "+mClient.Val[mClient.valuta-1]; 
else  Minpop2[0].innerHTML=Math.round(1500*mClient.kurs)+" "+mClient.Val[mClient.valuta-1]; 
schetsummchange2();	
}



function kabinetus(){
hashnav("mydoc");
CloseWarning();	
}

function runvirt(){
id_("OS").style.backgroundImage="url(/resources/images/os5.jpg)";
id_("OS").parentNode.href="/novosti/86.html";
}



function Parse(str,tag){
return str.split('<'+tag+'>')[1].split('</'+tag+'>')[0];	
}


function arraytoint(arr){
var i=0;
for(i=0;i<arr.length;i++) arr[i]=parseInt(arr[i]);	
return arr;
}








function extv(s){
if(s=="38") return "";
if(s.indexOf("38,")==0) return s.replace("38,","");
if(s.indexOf(",38")==s.length-3&&s.length>3) {return s.substr(0,s.length-3);}
return s.replace(",38,",",");}






function drawloyal(){
//if(authstate==null) return;	
//return;
//drawhisloyal();
if((mClient.valuta==5||mClient.Bilet>800000)&&loginstate==1){if(authstate!==null){id_("loyali8").style.display=id_("loyali7").style.display="";}return;}
if(loginstate==0) return;
id_("loyal44").style.display=id_("loyal15").style.display=id_("lscale").style.display="";
if(authstate!=null)id_("loyalscale").style.display="";
id_("imgloyal4").style.display=id_("lphone").style.display=id_("fbookl").style.display="none";     
 
initloyal();
var	i=0;
var p=0;
var st="";
var d=rDate.getMonth()+1;
var y=rDate.getFullYear();
if(d==12) {y++;d=1;} else d++;


for(i=0;i<loyalball.length;i++) if(mClient.Bilet<loyalball[i]) break;
loyalindex=i;

if(loyalindex<4) st=loyalball[loyalindex]; else st="VIP";

id_("lscale2").innerHTML=id_("lscale3").innerHTML='<span style="color:#ff8800;">'+mClient.Bilet+'&nbsp;/</span>&nbsp;'+st;
id_("loyalin1").innerHTML=id_("loyalin3").innerHTML=loyalindex;

p=mClient.Bilet/loyalball[loyalindex];

cs_("loyal7")[0].style.width=Math.round(80*p)+"px";
cs_("loyal8")[0].style.width=(80-Math.round(80*p))+"px";
cs_("loyal8")[0].style.marginLeft=(15+89+Math.round(80*p))+"px";
cs_("loyal9")[0].style.marginLeft=(87+Math.round(80*p))+"px";


if(authstate!=null){id_("lscale1").innerHTML='<span style="color:#ff8800;">'+mClient.Bilet+'&nbsp;/</span>&nbsp;'+st;id_("loyalin2").innerHTML=loyalindex;
cs_("loyal7")[1].style.width=Math.round(125*p)+"px";
cs_("loyal8")[1].style.width=(125-Math.round(125*p))+"px";
cs_("loyal8")[1].style.marginLeft=(15+89+Math.round(125*p))+"px";
cs_("loyal9")[1].style.marginLeft=(87+Math.round(125*p))+"px";
}

id_("loyaln").innerHTML=mClient.I;
//id_("loyali2").innerHTML=mClient.I;
id_("loyald").innerHTML=zeroadd(rDate.getMonth()+1)+"."+rDate.getFullYear();

if(loyalindex>0&&loyalindex<5&&authstate!=null){
i=loyalindex-1;	
cs_("loyal4")[i].innerHTML="&nbsp;";
cs_("loyal5")[i].innerHTML="доступны с<br/>01."+zeroadd(d)+"."+y;
cs_("loyal6")[2*i].innerHTML="&nbsp;";
cs_("loyali")[i].style.display="";
for(i=0;i<loyalindex-1;i++){
cs_("loyal4")[i].innerHTML="&nbsp;";
cs_("loyal5")[i].innerHTML="&nbsp;<br/>&nbsp;";}
}
}


function initloyal(){
if(authstate==null) return;
id_("loyali8").style.display="none";
id_("loyali7").style.display="none";	
var s=new Array();
s[0]=new Array("200 руб.","1000 руб.","2000 руб.","10000 руб.");
s[4]=new Array("200 руб.","1000 руб.","2000 руб.","10000 руб.");
s[2]=new Array("200 руб.","1000 руб.","2000 руб.","10000 руб.");
s[1]=new Array("3 USD","15 USD","30 USD","150 USD");
s[3]=new Array("3 EUR","15 EUR","30 EUR","150 EUR");

var k=mClient.valuta-1;
if(k==4) k=0;

cs_("loyali")[0].src="/resources/images/loyal10"+k+".png";
cs_("loyali")[1].src="/resources/images/loyal111"+k+".png";
cs_("loyali")[2].src="/resources/images/loyal16"+k+".png";
cs_("loyali")[3].src="/resources/images/loyal17"+k+".png";

var i=0;	

for(i=0;i<4;i++){
cs_("loyal4")[i].innerHTML=s[mClient.valuta-1][i];
cs_("loyal5")[i].innerHTML=loayallevel2[i];
cs_("loyal6")[2*i].innerHTML="уровень&nbsp;"+(i+1);
cs_("loyali")[i].style.display="none";
}

}






function drawhisloyal(){
if(authstate==null) return;	

if((mClient.valuta==5||mClient.Bilet>800000)&&loginstate==1){
id_("loyali6").style.display="";	
id_("loyali4").innerHTML="Данная программа не распространяется на Ваш аккаунт.";	
for(i=0;i<6;i++) cs_("loyal18")[i].style.display="none";
id_("loyali2").parentNode.style.display="none";
return;	
}
	
var year=2014;
var month=0;
var year1=2014;
var month1=0;

var i=0;	
var j=0;

if(loginstate==0){
id_("loyali6").style.display="";	
id_("loyali4").innerHTML="Забей 10 мячей и впиши своe имя в историю!";	
for(i=0;i<6;i++) cs_("loyal18")[i].style.display="none";
id_("loyali2").parentNode.style.display="none";
return;	
}


/*

for(i=0;i<6;i++) if(i<hisloyal.length) {cs_("loyal18")[i].style.display="";
month=(rDate.getMonth()-(i+1)+12)%12;
if(month>rDate.getMonth()) year=rDate.getFullYear()-1; else year=rDate.getFullYear();
cs_("loyal19")[i].innerHTML=calend2[month]+"&nbsp;"+year; 
cs_("loyal21")[i].innerHTML=hisloyal[i];
for(j=0;j<loyalball.length;j++) if(hisloyal[i]<loyalball[j]) break;
cs_("loyal22")[i].innerHTML="уровень&nbsp;"+j;
if(j==0) cs_("loyal23")[i].innerHTML="";
if(j==1) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal10.png" style="margin-left:-37px;float:left;margin-top:22px;">';
if(j==2) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal11.png" style="margin-left:-37px;float:left;margin-top:22px;">';
if(j==3) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal16.png" style="margin-left:-85px;float:left;margin-top:38px;">';
if(j==4) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal17.png" style="margin-left:-85px;float:left;margin-top:38px;">';
}

*/




for(i=0;i<6;i++) if(i<hisloyalm.length) {cs_("loyal18")[i].style.display="";
year=2014+Math.floor((hisloyalm[i]-1)/12);
month=(hisloyalm[i]-1)%12;
cs_("loyal19")[i].innerHTML=calend2[month]+"&nbsp;"+year; 
cs_("loyal21")[i].innerHTML=hisloyalv[i];

for(j=0;j<loyalball.length;j++){ 
if(j!=1) if(hisloyalv[i]<loyalball[j]) break;
if(j==1){
if(year>2014||year==2014&&month>6){	if(hisloyalv[i]<loyalball[j]) break;}
else if(hisloyalv[i]<60) break;

}

}

cs_("loyal22")[i].innerHTML="уровень&nbsp;"+j;
if(j==0) cs_("loyal23")[i].innerHTML="";
if(j==1) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal10'+(mClient.valuta-1)+'.png" style="margin-left:-37px;float:left;margin-top:22px;">';
if(j==2){ 
if(year>2014||year==2014&&month>6)
cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal111'+(mClient.valuta-1)+'.png" style="margin-left:-37px;float:left;margin-top:22px;">';
else cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal11.png" style="margin-left:-37px;float:left;margin-top:22px;">';


}

if(j==3) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal16'+(mClient.valuta-1)+'.png" style="margin-left:-85px;float:left;margin-top:38px;">';
if(j==4) cs_("loyal23")[i].innerHTML='<img src="/resources/images/loyal17'+(mClient.valuta-1)+'.png" style="margin-left:-85px;float:left;margin-top:38px;">';
}

else  cs_("loyal18")[i].style.display="none"; 


id_("loyali2").parentNode.style.display="";
id_("loyali2").innerHTML=mClient.I;

if(hisloyalm.length==0){
id_("loyali6").style.display="";	
//id_("loyali4").innerHTML="На данный момент у Вас нет начисленных бонусов и бесплатных ставок.";	
id_("loyali4").innerHTML="Забей 10 мячей и впиши своe имя в историю!";	
id_("loyali3").innerHTML="";
id_("loyali2").parentNode.style.display="none";
return;	
}

id_("loyali6").style.display="none";	

/*
month=(rDate.getMonth()-hisloyal.length+12)%12;
if(month>rDate.getMonth()) year=rDate.getFullYear()-1; else year=rDate.getFullYear();
month1=(rDate.getMonth()-1+12)%12;
if(month1>rDate.getMonth()) year1=rDate.getFullYear()-1; else year1=rDate.getFullYear();
*/


year=2014+Math.floor((hisloyalm[0]-1)/12);
month=(hisloyalm[0]-1)%12;


year1=2014+Math.floor((hisloyalm[hisloyalm.length-1]-1)/12);
month1=(hisloyalm[hisloyalm.length-1]-1)%12;
//console.log("hisloyal="+hisloyal);

if(hisloyalm.length==1) id_("loyali3").innerHTML="";//id_("loyali3").innerHTML="("+calend2[month]+"&nbsp"+year+")";
else  id_("loyali3").innerHTML="("+calend2[month]+"&nbsp"+year+" - "+calend2[month1]+"&nbsp"+year1+")";
}



function hashnav(s){
window.scrollTo(0,0);	
try{window.history.pushState("", "", "/auth/"+s+"/");hashChanged(s);} catch(e){window.location.hash="/auth/"+s+"/";}	
}
function hashnav2(s){
window.scrollTo(0,0);	
try{window.history.pushState("", "", s);loadPage(window.location.href);hashChanged("");} catch(e){window.location.hash=s;}

}



var vfl_season_no=0;
var vfl_season_name="";
var vfl_match_day=0;
var vfl_servertime=0;
var vfl_period=0;
var vfl_countdown=0;
var vfl_call_back=0;
var vfl_call_back2=0;
var vfl_c1=0;
var vfl_c2=0;


function setVflMatchday(data){
vfl_call_back=0;	
vfl_season_no=data.season_no;
vfl_season_name=data.season_name;
vfl_match_day=data.match_day;
//console.log(vfl_season_name);

var i=0;
for(i=0;i<mChampionships.length;i++){ 
if(id_("vfl").style.display=="none"||window.location.href.indexOf("plus")>-1||mChampionships[i].NAME_RUS.indexOf("Сезон")==-1||mChampionships[i].NAME_RUS.indexOf("Тур")==-1) continue;
var temp=mChampionships[i].NAME_RUS.split(":");
var TUR=parseInt(temp[2]);
var SEZON=parseInt(temp[1].split(" ")[0]);
if(SEZON==parseInt(vfl_season_name.replace("VFL Season ",""))&&TUR==vfl_match_day) {vfl_call_back2=1;ChampionClick2(mChampionships[i].ID_CHAMPIONSHIP,1);break;}

}

}

function setVflStatus(data){
//console.log("setVflStatus");
vfl_season_no=data.season_no;
vfl_season_name=data.season_name;
vfl_match_day=data.match_day;
vfl_servertime=data.servertime;
vfl_period=data.period;
vfl_countdown=data.countdown;

};

function mardouble(mLine){
var d0=mLine.V[0]/100;
var d1=mLine.V[1]/100;
var d2=mLine.V[2]/100;
var d=(1/d0+1/d1+1/d2);
 
if(d2!=0)  mLine.V[0]=Math.round(100*(1/(d-1/d2))); else mLine.V[0]=1;
if(d1!=0)  mLine.V[1]=Math.round(100*(1/(d-1/d1))); else mLine.V[1]=1;
if(d0!=0)  mLine.V[2]=Math.round(100*(1/(d-1/d0))); else mLine.V[2]=1;

  if(mLine.V[0]<1) mLine.V[0]=1;
  if(mLine.V[1]<1)  mLine.V[1]=1;
  if(mLine.V[2]<1) mLine.V[2]=1;
	
}
	
	
function longbet(id){
//console.log("longbet="+k+"id="+id);	
try{webSocket.send("outrights");
sendindex=0;
sendarray.splice(0);
writeShort(id);
sendarray[sendindex]=0;
webSocket.send(EncodeBase64_2(sendarray));
champlongid=id;}
catch(e){setTimeout("longbet("+id+")",1000);return;}
}



function champlong(mCountry){
if(mCountry.ID_COUNTRY==800) return;
if(mCountry.ID_COUNTRY==801) return;
var i=mChampionships.length;	
mChampionships[i]=new TChampionships();	
mChampionships[i].ID_CHAMPIONSHIP=(mCountry.ID_COUNTRY+10)*10000+13;
mChampionships[i].ID_SPORT=mCountry.ID_SPORT;
//console.log(mChampionships[i].ID_SPORT);
mChampionships[i].ID_COUNTRY=mCountry.ID_COUNTRY;
mChampionships[i].NAME_RUS="Специальные ставки";
mChampionships[i].ID_SORT=9999999;
mChampionships[i].ID_SAMPLE=0;
mChampionships[i].TIP_CHAMPIONSHIP=0;
mChampionships[i].Index=i;
ChampionId[mChampionships[i].ID_CHAMPIONSHIP]=i;
if(mChampionships[i].ID_SPORT!=0) if(SetChampionNameCountry(i)==0) return;
mChampionships[i].string='<div name="Champname'+mChampionships[i].ID_CHAMPIONSHIP+'" class="cham1">'+
'<div class="cham2" title="'+lbarray[mChampionships[i].lb1]+'" onClick="lb1Click('+mChampionships[i].ID_CHAMPIONSHIP+')">'+
'<input name="" type="image" style="outline:none;margin-left:'+(3+2*mChampionships[i].lb1)+'px;margin-top:'+(5-2*mChampionships[i].lb1)+'px;float:left;position:relative;" src="/resources/images/shapesport'+(2-mChampionships[i].lb1)+'.png?7"/></div>'+
'<div class="cham8" style="background:url(/resources/images/star'+(mChampionships[i].fav1+1)+'.png) no-repeat;" title="Добавить в избранное" onclick="starclickc('+mChampionships[i].ID_CHAMPIONSHIP+')"></div><div class="cham4">'+mChampionships[i].Logo11+'</div><div class="cham6"></div></div>';

}

	
function newchamplong(){
if(champlongstate==1) return;
var i=0;
var j=0;
champlongstate=1;
for(j=0;j<mCountry.length;j++) champlong(mCountry[j]);
;}
	

	
function bonusclick(n){
if(loginstate==0||demo==1||bonusactiv!=2) return;


if(n==1) {
if(id_("CHECKBONUS").checked==false) {showWarning("Вы не приняли условия и правила бонуса","OK","",0,null);return;}
webSocket.send("SETBONUS24");
id_("CHECKBONUS").previousSibling.innerHTML="Вы приняли правила и условия получения бонуса";
bonusactiv=1;}

else {webSocket.send("NOBONUS24");
bonusactiv=0;
id_("CHECKBONUS").previousSibling.innerHTML="Вы отказались от бонуса.";
id_("setbonus").style.display="none";
id_("setbonus").innerHTML="";
id_("setbonus").onclick=null;
history.back();
}

id_("CHECKBONUS").previousSibling.style.display="";
for(i=0;i<2;i++){cs_("bonusref")[i].style.display="none";cs_("bonusacc")[i].style.display="none";}
id_("CHECKBONUS").style.display="none";
id_("CHECKBONUS").nextSibling.style.display="none";
}

setInterval('webSocket.send("getdate")',60000);
	

function spetclick(obj,id){
var i=0;
var j=0;
if(EventId[id]==null||!mEvents[EventId[id]]) return;
if(mEvents[EventId[id]].BEISBOL<2){
mEvents[EventId[id]].BEISBOL=2;obj.setAttribute("class", "shappac2");	
obj.parentNode.nextSibling.style.display="";
if(id_("Mevent"+id)) id_("Mevent"+id).style.height=mEvents[EventId[id]].Height+"px";
} else {
mEvents[EventId[id]].BEISBOL=1;obj.setAttribute("class", "shappac1");
obj.parentNode.nextSibling.style.display="none";	
if(id_("Mevent"+id)) id_("Mevent"+id).style.height="56px";
}

RapidDraw(mEvents[EventId[id]]);
}
	


function sortss(){
return;
var temp=new Array();
var Arr_sort=new Array();
var i=0;
var j=0;
var t=0;
var dd=0;
var n=ssprincipal.length;

for (i = 0; i < n; i++){ 
temp[i]=mLines[LineId[mEvents[EventId[ssprincipal[i]]].mlines[mEvents[EventId[ssprincipal[i]]].mlines.length-1]]].V[0];
if(mEvents[EventId[ssprincipal[i]]].UCHASTNIK1.indexOf("Россия")>-1) temp[i]=0;
}	

for (j = 0; j <n;j++) {dd=2000000000;for (i = 0; i < n; i++) 
{if(dd>temp[i]){dd = temp[i];t = i;};}; 
Arr_sort[j] = t;temp[t] = 2000000000;}

for (i = 0; i < n;i++) temp[i]=ssprincipal[Arr_sort[i]];
ssprincipal=temp;	
}


function drawss(){
return;	
sortss();
var i=0;
var j=0;
var inner2="";
var cl=new Array("Груп","1/8","1/4","1/2","Ф","П");
var maxl=0;


for(j=0;j<Math.min(6,ssprincipal.length);j++){
inner2=inner2+'<div style="width:742px;float:left;background-color:#EBEBEB;border-bottom:1px solid #C7C7C7;background-image:url(/resources/images/gs.png);background-position:left;background-repeat: no-repeat;"><img src="/resources/images/bs1.png?7" style="margin-top:0px;margin-left:15px;margin-right:-2px;cursor:default;float:left;"><div class="str40" style="margin-left:10px;width:274px;" onclick="" title="">'+mEvents[EventId[ssprincipal[j]]].UCHASTNIK1.split(": ")[1]+'</div>';

maxl=Math.max(maxl,mEvents[EventId[ssprincipal[j]]].mlines.length);

for(i=0;i<6;i++){
if(i+mEvents[EventId[ssprincipal[j]]].mlines.length-6>=0)
{
if(i==5) inner2=inner2+'<div class="class31" title="Выиграть Чемпионат"'; 
else inner2=inner2+'<div class="class31" title="Стадия вылета"'; 
inner2=inner2+'onclick="lineclick(this,1);"'+inred(Vkoef3(mLines[LineId[mEvents[EventId[ssprincipal[j]]].mlines[i-6+mEvents[EventId[ssprincipal[j]]].mlines.length]]].V[0])+'<br />#'+mEvents[EventId[ssprincipal[j]]].mlines[i-6+mEvents[EventId[ssprincipal[j]]].mlines.length]+'<br />#0')+'><div class="class41">'+Vkoef3(mLines[LineId[mEvents[EventId[ssprincipal[j]]].mlines[i-6+mEvents[EventId[ssprincipal[j]]].mlines.length]]].V[0])+'<br>#'+mEvents[EventId[ssprincipal[j]]].mlines[i-6+mEvents[EventId[ssprincipal[j]]].mlines.length]+'<br>#0</div></div>';

}
else inner2=inner2+'<div class="class311"></div>';
}
inner2=inner2+'<div class="Add33" style="width:50px;"><div class="ad1" style="margin-top:1px;margin-left:16px;"><div class="ad2" title="Дополнительные линии" onclick="try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/stavki/sport/futbol/mezhdunarodnye/speczialijnye_stavki/&quot;);} catch(e){window.location.hash=&quot;/stavki/sport/futbol/mezhdunarodnye/speczialijnye_stavki/&quot;;};loadPage2(window.location.href);">+'+ssplus+'</div></div></div></div>'

}

if(id_("SSTABLE")){
//console.log("inner2..length="+inner2.length);	

for(i=0;i<6-maxl;i++) cl[i]='&nbsp;';

if(inner2.length>0) 
id_("SSTABLE").innerHTML='<div style="width:100%;height:23px;padding-top:10px;color:#fff;font-size:12px;font-weight:bold;background-color:#383838;"><span style="margin-left:20px;width:300px;float:left;">Итоги выступления (спец. ставки)</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[0]+'</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[1]+'</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[2]+'</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[3]+'</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[4]+'</span><span style="width:55px;float:left;margin-left:3px;text-align:center;">'+cl[5]+'</span></div>'+inner2;
else id_("SSTABLE").innerHTML='';

}
	
}

	
	

var flplay = false;
var versionflash=10;
//hls="hls";


//flplay = false;


function lmtclick(k){
//if(lmtstate==k) return;	
id_("radarframeplarg").style.display="";
if(mEvents[EventId[LastFrontLive]].ID_SPORT==5&&mEvents[EventId[LastFrontLive]].ID_RADAR==0&&k==0) k=1;
if(mEvents[EventId[LastFrontLive]].ID_SPORT==5&&mEvents[EventId[LastFrontLive]].clock_stopped==0&&k==1) k=0;
lmtstate=k;
if(k==1){
id_("imgbutton").childNodes[1].style.color="#F47621";
//id_("imgbutton").style.width="450px";
//id_("imgbutton").style.marginLeft="10px";
id_("imgbutton").childNodes[1].style.cursor="default";
id_("imgbutton").childNodes[0].style.color="#CFCFCF";
id_("imgbutton").childNodes[0].style.cursor="pointer";
if(loginstate+demoshow==0) id_("radarframelarg").innerHTML=imglogin[mEvents[EventId[LastFrontLive]].ID_SPORT]; else{
if(mEvents[EventId[LastFrontLive]].Time_Event=="Прерв.") id_("radarframelarg").innerHTML=imglogin[0];
else id_("radarframelarg").innerHTML='<iframe width="448" height="282" frameborder="0" id="radariframelarg"  name="radariframelarg"  scrolling="no" src="'+videosrc+'/video'+hls+'.html#'+mEvents[EventId[LastFrontLive]].clock_stopped+'&'+mEvents[EventId[LastFrontLive]].ID_SPORT+'&'+(mEvents[EventId[LastFrontLive]].ID_RADAR-mEvents[EventId[LastFrontLive]].clock_stopped)+'"></iframe>';}

if(mEvents[EventId[LastFrontLive]].ID_SPORT==5&&mEvents[EventId[LastFrontLive]].clock_stopped>0&&mEvents[EventId[LastFrontLive]].ID_RADAR>0){id_("radarframeplarg").style.height="372px";id_("imgbutton").style.display="";id_("radarframeklarg").style.marginTop="-20px";}
else {id_("radarframeplarg").style.height="352px";id_("imgbutton").style.display="none";id_("radarframeklarg").style.marginTop="0px";}

}
else{
//id_("imgbutton").style.marginLeft="11px";
//id_("imgbutton").style.width="448px";
id_("imgbutton").childNodes[0].style.color="#F47621";
id_("imgbutton").childNodes[0].style.cursor="default";
id_("imgbutton").childNodes[1].style.color="#CFCFCF";
id_("imgbutton").childNodes[1].style.cursor="pointer";
id_("radarframelarg").innerHTML='<iframe width="450" height="259" frameborder="0" id="radariframelarg"  name="radariframelarg"  style="margin-left:-1px;" scrolling="no" src="/lmt.html#'+mEvents[EventId[LastFrontLive]].ID_RADAR+'"></iframe>';id_("radarframeplarg").style.height="330px";

if(mEvents[EventId[LastFrontLive]].ID_SPORT==5&&mEvents[EventId[LastFrontLive]].clock_stopped>0&&mEvents[EventId[LastFrontLive]].ID_RADAR>0){id_("radarframeplarg").style.height="389px";id_("imgbutton").style.display="";id_("radarframeklarg").style.marginTop="-20px";}
else {id_("radarframeplarg").style.height="369px";id_("imgbutton").style.display="none";id_("radarframeklarg").style.marginTop="0px";}



}

	
}


function lmtclick2(k){
//if(lmtstate==k) return;	
if(mEvents[EventId[LastFrontLive]].ID_SPORT==5&&mEvents[EventId[LastFrontLive]].clock_stopped==0&&k==1) k=0;
id_("radarframep").style.display="";
lmtstate2=k;
if(k==1){
id_("radarbutton").childNodes[1].style.color="#F47621";
//id_("imgbutton").style.width="450px";
//id_("imgbutton").style.marginLeft="10px";
id_("radarbutton").childNodes[1].style.cursor="default";
id_("radarbutton").childNodes[0].style.color="#CFCFCF";
id_("radarbutton").childNodes[0].style.cursor="pointer";
if(loginstate+demoshow==0) id_("radarframe").innerHTML=imglogin[mEvents[EventId[LastFrontLive]].ID_SPORT]; else
id_("radarframe").innerHTML='<iframe width="448" height="282" frameborder="0" id="radariframe"  name="radariframe"  scrolling="no" src="'+videosrc+'/video'+hls+'.html#'+mEvents[EventId[LastFrontLive]].clock_stopped+'&'+mEvents[EventId[LastFrontLive]].ID_SPORT+'&'+(mEvents[EventId[LastFrontLive]].ID_RADAR-mEvents[EventId[LastFrontLive]].clock_stopped)+'"></iframe>';
if(mEvents[EventId[LastFrontLive]].ID_SPORT==1&&mEvents[EventId[LastFrontLive]].clock_stopped>0){id_("radarframep").style.height="372px";id_("radarbutton").style.display="";id_("radarframek").style.marginTop="-20px";}
else {id_("radarframep").style.height="386px";id_("radarbutton").style.display="none";id_("radarframek").style.marginTop="0px";}

}
else{
id_("radarbutton").childNodes[0].style.color="#F47621";
id_("radarbutton").childNodes[0].style.cursor="default";
id_("radarbutton").childNodes[1].style.color="#CFCFCF";
id_("radarbutton").childNodes[1].style.cursor="pointer";
id_("radarframe").innerHTML='<iframe width="450" height="299" frameborder="0" id="radariframe" name="radariframe" align="left" scrolling="no" src="http://ls.betradar.com/ls/livescore/?/winlinebetcom/ru/page/sportcenter_single#matchid_'+mEvents[EventId[LastFrontLive]].ID_RADAR+'"></iframe>';
if(mEvents[EventId[LastFrontLive]].ID_SPORT==1&&mEvents[EventId[LastFrontLive]].clock_stopped>0){id_("radarframep").style.height="389px";id_("radarbutton").style.display="";id_("radarframek").style.marginTop="-20px";}
else {id_("radarframep").style.height="369px";id_("radarbutton").style.display="none";id_("radarframek").style.marginTop="0px";}

}

	
}





function videodanied(k,string){
var mEvent=null;	
var string2="";
var i=0;
if(Pluslarge.style.display!="none"||Plus.style.display!="none") mEvent=mEvents[EventId[LastFrontLive]];
if(Rospis.style.display!="none") mEvent=mEvents[EventId[EventRospisi]];
if(mEvent){
for(i=0;i<mSport.length;i++) if(mEvent.ID_SPORT==mSport[i].ID_SPORT) break;
if(i<mSport.length) string2=mSport[i].NAME_RUS;
if(mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]])
string2=string2+"/"+mChampionships[ChampionId[mEvent.ID_CHAMPIONSHIP]].NAME_RUS;	
}
if(!string) string="";
else string=string+"/";	
if(k==2) _gaq.push(['_trackPageview',"virtual/video_denied/"+string+string2]);
else if(k==3) _gaq.push(['_trackPageview',"virtual/video_canceled/"+string2]);
else _gaq.push(['_trackPageview',"virtual/video_succes/"+string2]);	
}



function nhltime(){

if(EventRospisi<1){clearTimeout(nhltimer);nhltimer=null;return;} 	
var mEvent=mEvents[EventId[EventRospisi]];
if(!mEvent) {clearTimeout(nhltimer);nhltimer=null;return;}

if((mEvent.ID_SPORT!=4&&mEvent.ID_SPORT!=5&&mEvent.ID_SPORT!=2&&mEvent.ID_SPORT!=1&&mEvent.ID_SPORT!=6&&mEvent.ID_SPORT!=60&&mEvent.ID_SPORT!=23&&mEvent.ID_SPORT!=31)||mEvent.Live==1||mEvent.clock_stopped==0||cs_("nhltimer").length==0) {clearTimeout(nhltimer);nhltimer=null;return;}
var t=(mEvent.DATE_EVENT.getTime()-new Date().getTime()-rdif)/1000;

if(t<0) t=0;

var j=Math.floor(t/3600);
var m=Math.floor((t-3600*j)/60); 
var l=Math.round(t-j*3600-m*60);

j=j%100;

if(j==0){
cs_("nhltimer")[0].innerHTML=0;
cs_("nhltimer")[1].innerHTML=0;	
}else 
if(j<10){
cs_("nhltimer")[0].innerHTML=0;
cs_("nhltimer")[1].innerHTML=j;	
}else{
cs_("nhltimer")[0].innerHTML=Math.floor(j/10);
cs_("nhltimer")[1].innerHTML=j%10;	
}

if(m==0){
cs_("nhltimer")[2].innerHTML=0;
cs_("nhltimer")[3].innerHTML=0;	
}else 
if(m<10){
cs_("nhltimer")[2].innerHTML=0;
cs_("nhltimer")[3].innerHTML=m;	
}else{
cs_("nhltimer")[2].innerHTML=Math.floor(m/10);
cs_("nhltimer")[3].innerHTML=m%10;	
}

if(l==0){
cs_("nhltimer")[4].innerHTML=0;
cs_("nhltimer")[5].innerHTML=0;	
}else 
if(l<10){
cs_("nhltimer")[4].innerHTML=0;
cs_("nhltimer")[5].innerHTML=l;	
}else{
cs_("nhltimer")[4].innerHTML=Math.floor(l/10);
cs_("nhltimer")[5].innerHTML=l%10;	
}


	
}




function toNight(){
if(id_("dayexpress").style.display=="none") return; 
id_("logo").style.background="url(/resources/images/logo_night.png) left top no-repeat";
//document.body.style.backgroundColor="transparent";	
document.body.style.backgroundImage="url(/resources/images/fon.jpg)"  
document.body.style.backgroundRepeat="no-repeat" ;
document.body.style.backgroundPosition="top center"; 
document.body.style.backgroundAttachment="fixed"; 
id_("dayexpress").style.display="none";	
id_("nightexpress").style.display="";	
}


function bonuscall(){
if(bontime>0){
if((bontime/3600)<24||(bontime/3600)>=24+24) {if(window.location.href.indexOf("auth/regcomplete/")==-1) hashnav("bonus2000");slideDate();}
if((bontime/3600)<24+24) {id_("bon20000").innerHTML=bon2000text1;}
else {id_("bon20000").innerHTML=bon2000text2;}} 
}


function toDay(){
if(id_("dayexpress").style.display=="") return;
id_("logo").style.background="url(/resources/images/logo11.png) left top no-repeat"; 	
//document.body.style.backgroundColor="#4b4b4b";	
document.body.style.backgroundImage="";  
id_("dayexpress").style.display="";	
id_("nightexpress").style.display="none";	
//document.body.style.backgroundColor="#4b4b4b";

}


function loadauth() {
var el=document.createElement('script');
el.setAttribute('src','/resources/js/auth.js?12');
el.setAttribute('type','text/javascript');
document.getElementById("auth").appendChild(el);
return;}
 



function wmchange(input){
console.log(input.selectedIndex);	
id_("wmc").innerHTML=input.options[input.selectedIndex].value.replace("WM","");
}


function plusdemo(){
if((LastFrontLive>0&&EventId[LastFrontLive]!=null&&mEvents[EventId[LastFrontLive]]&&mEvents[EventId[LastFrontLive]].clock_stopped>0)&&((Plus.style.display!="none")||(Pluslarge.style.display!="none")))pluslive(LastFrontLive,1);

if(EventRospisi>0&&EventId[EventRospisi]!=null&&mEvents[EventId[EventRospisi]]&&mEvents[EventId[EventRospisi]].clock_stopped>0&&Rospis.style.display!="none") pluslive(EventRospisi,1);	
}
	
	
	
	

	
	
	
	
	
	
	var maxex='<div style="border-radius:5px;cursor:pointer;margin-top:0px;margin-bottom:1px;width:11px;height:11px;color:#fff;background-color:#F47621;text-align:center;float:right;" onclick="setMaxExpress(1)">?</div>';
var imglogin=new Array();

imglogin[1]='<div style="width:450px;height:282px;background-image:url(/resources/images/footfon.jpg);float:left;background-position:center;"><div style="width:450px;margin-top:70px;font-size:20px;text-align:center;color:#fff;height:110px;text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);font-weight:bold;">ПРОСМОТР ВИДЕО-ТРАНСЛЯЦИЙ<br/>ДОСТУПЕН ТОЛЬКО ДЛЯ<br/>АВТОРИЗОВАННЫХ ИГРОКОВ</div><div id="LOGBUTTON4" onclick="showWarningReg();"><span style="margin-left:13px;">ВХОД</span></div><div id="LOGINBUT" onclick="newreg();"><span style="margin-left:18px;">ОТКРЫТЬ СЧЕТ</span></div></div>';

imglogin[0]='<div style="width:450px;height:192px;padding-top:90px;background-image:url(/resources/images/tenfon.jpg);text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);background-position:center;font-size:20px;font-weight:bold;text-align:center;color:#fff;text-transform: uppercase;">К сожалению, просмотр видео недоступен, так как матч был прерван, отменен или отложен.</div>';

imglogin[11]='<div style="width:450px;height:282px;background-image:url(/resources/images/footfon.jpg);float:left;background-position:center;"><div style="width:450px;margin-top:30px;font-size:20px;text-align:center;color:#fff;height:40px;text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);font-weight:bold;">ТРАНСЛЯЦИЯ НАЧНЕТСЯ ЧЕРЕЗ:</div><div style="float:left;margin-left:68px;"><div class="nhltimer"></div><div class="nhltimer"></div><div class="nhltimer2">:</div><div class="nhltimer"></div><div class="nhltimer"></div><div class="nhltimer2">:</div><div class="nhltimer"></div><div class="nhltimer"></div></div><div style="float:left;width:100%;margin-top:50px;height:65px;" id="NHLREG"><div id="LOGBUTTON4" onclick="showWarningReg();"><span style="margin-left:13px;">ВХОД</span></div><div id="LOGINBUT" onclick="newreg();"><span style="margin-left:18px;">ОТКРЫТЬ СЧЕТ</span></div></div><div style="float:left;width:100%;text-align:center;font-size:14px;color:#fff;">Просмотр видео-трансляций на сайте WinLine доступен только<br/>на территории России и только для зарегистрированных игроков</div></div>';

imglogin[12]='<div style="width:450px;height:282px;background-image:url(/resources/images/footfon.jpg);float:left;background-position:center;"><div style="width:450px;margin-top:30px;font-size:20px;text-align:center;color:#fff;height:40px;text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);font-weight:bold;">ТРАНСЛЯЦИЯ НАЧНЕТСЯ ЧЕРЕЗ:</div><div style="float:left;margin-left:68px;"><div class="nhltimer">0</div><div class="nhltimer">5</div><div class="nhltimer2">:</div><div class="nhltimer">8</div><div class="nhltimer">1</div><div class="nhltimer2">:</div><div class="nhltimer">1</div><div class="nhltimer">1</div></div><div style="float:left;width:100%;margin-top:50px;height:65px;" id="NHLREG"></div><div style="float:left;width:100%;text-align:center;font-size:14px;color:#fff;">Просмотр видео-трансляций на сайте WinLine доступен только<br/>на территории России и только для зарегистрированных игроков</div></div>';


var imlog=imglogin[1].split("foot");
imglogin[2]=imlog.join("basket");
imglogin[5]=imlog.join("ten");
imglogin[4]=imlog.join("nhl");
imglogin[6]=imlog.join("hand");
imglogin[60]=imlog.join("pl");
imglogin[23]=imlog.join("vol");
imglogin[31]=imlog.join("bad");

imlog=imglogin[11].split("foot");
imglogin[21]=imlog.join("basket");
imglogin[51]=imlog.join("ten");
imglogin[41]=imlog.join("nhl");
imglogin[61]=imlog.join("hand");
imglogin[601]=imlog.join("pl");
imglogin[231]=imlog.join("vol");
imglogin[311]=imlog.join("bad");

imlog=imglogin[12].split("foot");
imglogin[22]=imlog.join("basket");
imglogin[52]=imlog.join("ten");
imglogin[42]=imlog.join("nhl");
imglogin[62]=imlog.join("hand");
imglogin[602]=imlog.join("pl");
imglogin[232]=imlog.join("vol");
imglogin[312]=imlog.join("bad");





var bonvalut=new Array("","d","","e","");


function script(){
document.getElementById("fff").innerHTML="";
el=document.createElement('script');
el.setAttribute('src',src+"?"+Math.round(Math.random()*2000));
el.setAttribute('type','text/javascript');
document.getElementById("fff").appendChild(el);
return;}


function Response15(Request){ipadres=Request.responseText;if(ipadres.length>30)ipadres="badipaddress";return;}
function Response16(Request){window.open(Request.responseText);return;}


function showpp(){id_('RECH').style.display='';};



function slideDate(){
var i=0;
var j=0;
var m=0;
var l=0;
var d=0;
var ntvsec=0;
if(bontime!=0) bontime++;
if(bontime>=120*3600) bontime=0;
if(bontime===24*3600||bontime===48*3600) webSocket.send("balance");

var bontime2=0;
if(bontime==0) bontime2=0; else
if(bontime<24*3600)  bontime2=24*3600-bontime; else 
if(bontime>=48*3600) bontime2=120*3600-bontime;
if(bontime>=120*3600) bontime2=0;

if(bontime2>0) {bontime=bontime+1;
//console.log("bontime="+bontime);

if(window.location.href.indexOf("bonus2000")>-1){
j=Math.floor(bontime2/3600);
m=Math.floor((bontime2-3600*j)/60); 
l=bontime2-j*3600-m*60;
if(authstate!=null)
Bonus2000.childNodes[0].childNodes[0].innerHTML='<span style="float:left;width:75px;">'+zeroadd(j)+'</span><span style="float:left;width:74px;">'+zeroadd(m)+'</span></span>';}
//""+zeroadd(j)+":"+zeroadd(m)+":"+zeroadd(l);
}
//else {if(loginstate==1) Bonus1000.childNodes[0].childNodes[0].innerHTML="00:00:00";else  Bonus1000.childNodes[0].childNodes[0].innerHTML="23:59:59";}

date=new Date();


if(window.location.href.indexOf("ntvpl")>-1&&authstate!=null){
if(ntvcombo.length==0||ntvselect<ntvcombo.length-1||(ntvcombo[ntvcombo.length-1].DateEnd.getTime()-date.getTime()<1)){id_("ntvclock").style.display="none";id_("ntvslide").style.display="none";id_("ntvotbor").innerHTML="ОТБОР ЗАВЕРШЕН";}
else{
id_("ntvclock").style.display="";id_("ntvslide").style.display="";id_("ntvotbor").innerHTML="ДО КОНЦА ОТБОРА:";
ntvsec=Math.round((ntvcombo[ntvcombo.length-1].DateEnd.getTime()-date.getTime())/1000);
d=Math.floor(ntvsec/(24*3600));
j=Math.floor((ntvsec-24*3600*d)/3600);
m=Math.floor((ntvsec-24*3600*d-3600*j)/60); 
l=ntvsec-24*3600*d-j*3600-m*60;

//Bonus2000.childNodes[0].childNodes[0].innerHTML='<span style="float:left;width:75px;">'+zeroadd(j)+'</span><span style="float:left;width:74px;">'+zeroadd(m)+'</span></span>';}
//""+zeroadd(j)+":"+zeroadd(m)+":"+zeroadd(l);
id_("ntvslide").innerHTML='<span style="float:left;width:115px;">'+zeroadd(d)+'</span><span style="float:left;width:70px;">'+zeroadd(j)+'</span><span style="float:left;width:70px;">'+zeroadd(m)+'</span><span style="float:left;width:70px;">'+zeroadd(l)+'</span>';
}
}




if(ctindex==0){
dif=date.getHours()-date.getUTCHours();  if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()>0)) dif=dif+24;
if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()>0)) dif=dif+24;
if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()==0)&&(date.getDate()-date.getUTCDate()>0)) dif=dif+24;
dif=(GMTBox.options[GMTBox.selectedIndex].value-dif)*60*60*1000;

date.setTime(date.getTime()+dif);




//CurrentTime=zeroadd(date.getHours())+"  "+zeroadd(date.getMinutes()); 
//CT=ctt[ct];

if((oldData!=date.getDate())&&(GMT_flag==0)&&(oldData!=0)){var temp3=-1;
if(DateBox.selectedIndex>-1) temp3=DateBox.options[DateBox.selectedIndex].value;
for(i=0;i<mSport.length;i++) {if(mSport[i].ID_SPORT==110&&vflbegin==0) continue; mSport[i].Rombo.splice(0);}
for(i=0;i<mCountry.length;i++) {mCountry[i].Sombo.splice(1);mCountry[i].Sombo2.splice(1);}
//for(i=0;i<mChampionships.length;i++) mChampionships[i].Sombo.splice(1);
for(i=0;i<mChampionships.length;i++){if(mChampionships[i].ID_CHAMPIONSHIP==(mChampionships[i].ID_COUNTRY+10)*10000+13) continue; mChampionships[i].Sombo.splice(1);}

region.Sombo.splice(0);
for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);
if(temp3>-1){for(i=0;i<DateBox.length;i++) if(DateBox.options[i].value==temp3){DateBox.selectedIndex=i;break;}
if(i==DateBox.length) DateBox.selectedIndex=0;}
DrawTable(0);
;}
oldData=date.getDate();
Timdat1=zeroadd(date.getDate())+" "+ calend[date.getMonth()]+" "+zeroadd(date.getFullYear())+" "+zeroadd(date.getHours());
Timdat2=zeroadd(date.getMinutes());
}
Tim.innerHTML=Timdat1+ctttt[ctindex%2]+Timdat2;
ctindex=(ctindex+1)%10;

;}

function unfav2(s){
if(s.indexOf("-")>-1) return s.split('-').join('+');
if(s.indexOf("+")>-1) return s.split('+').join('-');
return s;	

}


function unfav(s){
if((s=="0")||(s=="0.0")||(s=="")) return 0;	
var temp=s.split("+");
if(temp.length==3) return (parseFloatExt(temp[1])+parseFloatExt(temp[2]))/2;
if(temp.length==2) return parseFloatExt(temp[1]);
temp=s.split("-");
if(temp.length==3) return -1*(parseFloatExt(temp[1])+parseFloatExt(temp[2]))/2;
if(temp.length==2) return -1*parseFloatExt(temp[1]);
}


function untot(s){
if((s=="0")||(s=="0.0")||(s=="")) return 0;	
temp=s.split("-");
if(temp.length==2) return (parseFloatExt(temp[0])+parseFloatExt(temp[1]))/2;
if(temp.length==1) return parseFloatExt(temp[0]);
}



var grupp=new Array("Исход","Фора/Гандикап","Тотал/Голы","Счет","Угловые","Карточки","Популярные","Новичку");
var grupvirtual=new Array("line_all","line_favorites","line_result","line_fora","line_total","line_score","line_corners","line_cards","line_popular","line_newbie");


//var grpp=new Array(0,20000,30000,41000,53000,63000,73000,80000);
var poparray=new Array(5,10,13,16,21,22,34,36,42,43,46,51,53,75,82,84,106,107,107,127,128,212,252,254);
var poparray2=new Array(26,254,2,10);
//var poparray2=new Array(11111111126,1111111111254,111111112,111111111111110);
var grpp=new Array(0,200000,300000,400000,500000,600000,700000,800000,900000,1000000);

var timerpromo=0;



function corot(s){
if(s.length<15) return s;
if(s.indexOf(" ")==-1) return s;
var ss=s.split(" ");
if(ss[1].split(" ").join("")=="") return s;
if(ss[1].substr(0,1)!="(") return ss[0]+" "+ss[1].substr(0,1)+"";
else return ss[0];
}


function corot2(s){
if(s.length<25) return s;
if(s.indexOf(" ")==-1) return s;
var ss=s.split(" ");
if(ss[1].split(" ").join("")=="") return s;
return ss[0]+" "+ss[1].substr(0,1)+"";
}



var loc2 = 0;
var loc = ""+window.location;
if((loc.indexOf("6.win")>-1)||(loc.indexOf("4.win")>-1)) 
    loc2=1;

//loc2=1;	



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30353766-1']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);


(function() { 
    if(loc2==1) return;
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();





(function (d, w, c) {if(loc2==1) return;
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter17763661 = new Ya.Metrika({id:17763661,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");


    
// $().read(function() {
        function CreateNewLikeButton() {
			if(!id_("fblhref")) return;
            var elem = $(document.createElement("fb:like"));
            elem.attr("href", $('#fblhref').attr('href'));
            // data-width="690" data-show-faces="true" style="height:30px;clear:both;" data-send="true"
            elem.attr('data-width', 690);
            elem.attr('data-show-faces', 'true');
            elem.attr('style', 'height:30px;clear:both;');
            elem.attr('data-send', 'true');
            $("div#fblhref").empty().append(elem);
            FB.XFBML.parse($("div#fblhref").get(0));
        }    
    
	var loadComplete = function() {
          
        href = location.href;
        href = href.split('#');
		        
        if(ie==1) {
            href = href[0] + (href.length > 1 ? href[1].substring(1) : '');
        }
        else
            href = href[0];
        
 		
         if((href.indexOf("auth")==-1)&&(href.indexOf("stavki")==-1)&&(href.indexOf("plus")==-1)){
        		if(href != 'http://' + document.domain + '/') {
            showTitle(true, $('#doctitle').html());
            $('.ceo').hide();
        }     
        else {
		            showTitle(false);
            $('.ceo').show();
        }
		;}
    
        
        $('.text_faq .ti_ttl').die('click');
        $('.text_faq .ti_ttl').live('click', function() {
            $this = $(this);
            if($this.parent().find('.ti_text').attr('opened') == 'false' || $(this).parent().find('.ti_text').attr('opened') == undefined) {
                $this.addClass('opened');
                $this.parent().find('.ti_text').slideDown(function() {
                    $this.parent().find('.ti_text').attr('opened', 'true');
                });
            }
            else {
                $this.parent().find('.ti_text').slideUp(function() {
                    $this.removeClass('opened');
                    $this.parent().find('.ti_text').attr('opened', 'false');
                })
            }
            
            return false;
        });  

// if(href.indexOf("obratnaya-svyaz")>-1){cokey=generatekey(Reg10[5].previousSibling);Reg10[5].value="";Reg10[5].style.border="";
// if(loginstate==1) Reg10[3].value=mClient.email; else Reg10[3].value="";}



        try {
            //hashChanged();
			
            if(ttt>0){drawpr(0);drawpr(1);drawpr(2);drawpr(3);drawpr(4);drawpr(5);drawss();}
    	
		        } catch(e) { out(e); }
				
        
        timer = 0;
        $('.actions .thumb span').click(function() {
			if(timerpromo!=2)  timerpromo=1;
						
            $('.actions .thumb span.selected').removeClass('selected');
            $('.actions .big a').remove();
            $('.actions .big').append('<a href="' + $(this).attr('href') + '"><img height="240px" src="' + $(this).attr('image') + '" /></a>');
            $(this).addClass('selected');

            
            iternews=$(this).index();
			//console.log("iternews="+iternews);
			insertkoef($(this).index());
			 $('.actions .big a').bind('click', ajaxLoad);

            if(timer > 0)
                clearTimeout(timer);
            
			if(timerpromo!=1){
            timer = setTimeout(function() {
                iternews=iternews+2;
                if(iternews > 9)
                    iternews = 0;
					
			
               timerpromo=2; $('.actions .thumb span:eq(' + (iternews)/2 + ')').click();timerpromo=0;
            }, 15000);}
            
            return false;
        });
        
        $('.actions .thumb span:eq(0)').click();
        
		timer = setTimeout(function() {
            iternews=iternews+2;
            if(iternews > 9)
                iternews = 0;
		  
          timerpromo=2; $('.actions .thumb span:eq(' + (iternews/2) + ')').click();timerpromo=0;
        }, 15000);
        
        $('a').unbind('click');
        $('a').bind('click', ajaxLoad);

		//CreateNewLikeButton();
         
    }
    

var plusstring="";
var plusstring2="";

var loadPage2=function(href) {
var i=0;
var j=0;
var l=0;

if((decodeURI(href).indexOf("stavki/sport")==-1)&&(decodeURI(href).indexOf("plus")==-1)) return;
var sp=decodeURI(href).replace("//","").replace("/stavki","").split("/");
if(!sp[1]) return;
window.currentAjax ? window.currentAjax.abort() : false;
//showTitle(false);
if(sp[1]=="plus"){
if(!sp[2]) return;
l=parseInt(sp[2]);
if(!mEvents[EventId[l]]) return; 
hideall();
window.scrollTo(0,0);plus(l);
if(ttt>3) return;
if((sp[3])&&(sp[3]=="line")&&(sp[4])&&(sp[5])&&(sp[6])) {
if(href.indexOf("2014_shet")>-1){plusstring=sp[6]+"#"+sp[4]+"#"+sp[5];
cs_("kord5")[2].value=500;LastSumm=500;}
else setTimeout("lineclick1('"+sp[6]+"#"+sp[4]+"#"+sp[5]+"',0);",500);	


}
return;
}

if(sp[1]!="sport") return;
if(!sp[2]) return;

if((Rospis.style.display!="none"||Plus.style.display!="none"||Pluslarge.style.display!="none")&&(SportState+BltState+LiveState+FavoritState+SportIndex!=-1))
{showsport();$('#BACK').hide();return;}


if(sp[2]=="live") {liveclick(0);return;}
if(sp[2]=="favorites") {favoritclick(0);return;}
if(sp[2]==transliterate("матчи по ТВ")) {tvclick(0);return;}
if((sp[2]==transliterate("ближайшие ставки"))&&(sp[3])&&((sp[3]=="2")||(sp[3]=="4")||(sp[3]=="6"))) {bltclick(parseInt(sp[3]),0);return;}
sp[2]=transliterate(sp[2],true);
for(i=0;i<mSport.length;i++) if(mSport[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[2]) break;
if(i==mSport.length) return;
//else SportIndex=i;
if(!sp[3]) {SportClick2(i,0);return; }
if(sp[3]==transliterate("регионы")){
j=i;	
if(mSport[i].ID_SPORT!=1) return;	
if(!sp[4]){RegionIndex=-1; SportIndex=1;RegionClick(0);return;}
sp[4]=transliterate(sp[4],true);
for(i=0;i<mCountry.length;i++) if((mCountry[i].ID_SPORT==1)&&(mCountry[i].IS_REGION==0)&&(mCountry[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[4])) break;
if(i==mCountry.length) {RegionIndex=-1;SportIndex=1; RegionClick(0);return;}
if(!sp[5]){CountryClick2(i,0);return;}
l=i;
sp[5]=transliterate(sp[5],true);
for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_COUNTRY==mCountry[l].ID_COUNTRY)&&(mChampionships[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[5])) break;
if(i==mChampionships.length) {CountryClick2(l,0);return;}
ChampionClick2(mChampionships[i].ID_CHAMPIONSHIP,0);return;
}

j=i;
if(sp[3].toLowerCase()!="atp") sp[3]=transliterate(sp[3],true);

for(i=0;i<mCountry.length;i++) if((mCountry[i].ID_SPORT==mSport[j].ID_SPORT)&&(mCountry[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[3])) break;
if(i==mCountry.length) {SportClick2(j,0);return;}
if(!sp[4]){CountryClick2(i,0);return;}
l=i;
sp[4]=transliterate(sp[4],true);
for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_COUNTRY==mCountry[l].ID_COUNTRY)&&(mChampionships[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("").replace("a","а").replace("b","б").replace("e","е").replace("d","д").replace("f","ф").replace("g","г")==sp[4])) break;
if(i==mChampionships.length) {CountryClick2(l,0);return;}
ChampionClick2(mChampionships[i].ID_CHAMPIONSHIP,0);return;
      
}





	window.currentAjax = null;	
    var loadPage = function(href, tohistory) {
		     
		    var lg="";
			if(href=="/"||href=="") lg="&loginstate="+loginstate;     
		    if(tohistory == true) {
            if(ie==1) {
                location.href = '#' + href;
            }
            else {
                
				history.pushState({href: href, title: document.title}, document.title, href);
            }
        }
            
        
		if(href.search(/\?/) >=0)
            href = href + '&ajax=true';
        else
            href = href + '?ajax=true';
			href=href+lg;
			
        if(window.currentAjax) window.currentAjax.abort();
        window.currentAjax = $.get(href, function(data) {
		    /*var pos1 = data.search(/<body>/);
            data = data.substr(pos1 + 6);
            var pos2 = data.search(/<\/body>/);
            data = data.substr(0, pos2);*/


            $('#ajax-content').html(data);
			
						
//			if(href.indexOf("o-nas/obratnaya-svyaz/">-1)){cokey=generatekey(Reg10[5].previousSibling);Reg10[5].value="";Reg10[5].style.border="";}
			
            
            /*setTimeout(function() {
                if(location.href != 'http://' + document.domain + '/') {
                    $('#BACK').show();
                    $('#BACK').find('span').html($('#doctitle').html());
                }
                else {
                    $('#BACK').hide();
                }
            }, 200);*/
            
            loadComplete();
/*			
		if(id_("ACTION2")&&window.location.href.indexOf("novosti/390.html")>-1){
			var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:11px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+id_("ACTION2").innerHTML;
id_("ACTION2").innerHTML=string;timerkfunc();
timerk=setInterval(timerkfunc,1000);			
			}
			
var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));			

if(window.location.href.indexOf("novosti/?page")>-1||page2=="/novosti/"){
for(i=0;i<cs_("info").length;i++) if(cs_("info")[i].innerHTML.indexOf("КЕРЖА")>-1){	
var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:6px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+cs_("info")[i].innerHTML;
cs_("info")[i].innerHTML=string; timerkfunc();
timerk=setInterval(timerkfunc,1000);break;}			
}
*/

			
            
        });
        
    }
    
    if(window.addEventListener) {
       
		window.addEventListener("popstate", function(e) {
	    hrefcount++;
		
		if((hrefcount==1)&&(inithref=window.location.href)) return;
		
		
		   
		   var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
		   if(page2=='/stavki/sport/') {hashChanged('stavki');return;}
		   loadPage2(window.location.href);
		   if(window.location.href.indexOf("stavki/sport")>-1) return;
		   if(window.location.href.indexOf("plus")>-1) return;
		   if(page2.replace("/","")=="") {hashChanged("");
		   loadPage("", false);return;}
           if(page2.indexOf("auth")>-1) {hashChanged(page2.replace(/\/auth\//, '#'));return;}
		   hashChanged("");
		   			
			   if(e.state && e.state.href) {
                var page = e.state.href;
               loadPage(e.state.href, false);
            }  else  loadPage("", false);
			
        }, false);
        
             window.addEventListener("hashchange", function() {
				 
			 hashChanged(window.location.hash.replace(/\/auth\//, ''));
			 if(window.location.hash.indexOf("stavki/sport")>-1) return;
			 if(window.location.hash.indexOf("plus")>-1) return;
			 if(window.location.hash.indexOf("auth")>-1) return;
	 
//            if(location.hash.indexOf("sports")>-1) return;
//			if(location.hash.indexOf("plus")>-1) return;


            var page = location.hash.replace(/#/, '');
            if(page != window.currentPage)
			         loadPage(page);
                
        }, false);
    }
    
    var ajaxLoad = function() { 
        if($(this).attr('onclick')) {
            return false;    
        }
        
        var href = $(this).attr('href');
		if(href.search('http') >= 0) {
            return true;
        }
        
        if(href.search(/auth/) >= 0) {
            var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
			if(page2!=href){ 
			// alert(href.replace(/\/auth\//, '#'));
            if(ie==1) {
                location.href = '#' + href;
            }
            else {
             			 history.pushState({href: href, title: document.title}, document.title, href);
            };
            href = href.replace(/\/auth\//, '#');
            hashChanged(href);
			
			}
            return false;
        }
    
               
        
        if(href.search(/#/) == 0) {
           $('#BACK').show();
            return true;
        }


        loadPage(href, true);
		hashChanged(href.replace(/\/auth\//, '#'));
        return false;
    };
    

   

    //summ4=id_("Summ4");//выплата
    //summ5=id_("Summ5");//миним
    //summ6=id_("Summ6");//макс



    expressflag=3;
	ordinarflag=0;
    lastexpressflag=0;
	rapidcheck=0;
     


    schet_current1=0;
    schet_current2=0;







    order="";
    hesh="";
    paysystem=new Array("","","MVCRFB","WM","PM","ZP","LP","MB","LR","RBKM","MPYM","QIWI","MIGPAY","MPMC","","")
    paysystem2=new Array("","MVCRFB","WM","LR","RBKM","MPYM","QIWI","MPMC","MPMC","MPMC");
    paysumm=0;
    paysumm2=0;
    paysys=new String();



    
	 monevvod=new  Array(1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0);
	// monevvod=new  Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	 monevivod=new Array(1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
	 
	//monevivod=new Array(1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
	//monevvod=new  Array(1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0);
	
	
	mon=new Array(0,1,3,2,4,5,6,20,7,8,9,10,11,12,13,14,15,16,17,18,19,21);
    mons=new Array(0,1,3,2,4,5,6,12,7,8,9,10,11,13,14,15,16,17,18,19,20,21);
	
	mon2=new Array(0,1,2,3,4,5,6,7,20,8,9,10,11,12,13,14,15,16,17,18,19,21);
	mons2=new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21);
	
	
	maxv=new Array();
    maxv[1]=new Array(15000,15000,15000,15000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000);
	maxv[3]=new Array(15000,15000,15000,15000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000);
	maxv[2]=new Array(180,180,200,200,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000);
	maxv[4]=new Array(150,150,200,200,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000);
	maxv[5]=new Array(60000,60000,15000,15000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000);	
	crdarray=new Array();
	pcrdarray=new Array();
	
	//moneconvert=new Array(0,2,7,3,4,5,6,1,8,8,8,13,0,0,0,0,14,15,16);
	moneconvert=new Array(0,2,7,3,4,5,6,1,8,8,8,11,17,0,0,0,0,14,15,16);
	

/*--------------------------------------------
---------------------------------------------------*/

	

    //BlstButton=new Array();

    GMT_flag=0;
    oldData=0;
    LIVE2=0
    demo=0;
    colorhis2=0;

    date=new Date();
    dif=date.getHours()-date.getUTCHours();  if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()>0)) dif=dif+24;
    diftime=0;

    cttt=setInterval(slideDate,1000);
    ctttt=new Array(":","&nbsp;");
    ctindex=0;
    ct1=0;
    ct2=0;
    Timdat1="";
    Timdat2="";

//port=1077;
// android=1;
 
    documents=new Array();
    doc=new Array();
    doc2=new Array(0,0,0,0,0,0);
    doc3=new Array(0,0,0,0,0,0);
    doc[2]=new Array(0, 1, 1, 1, 1, 0);
    doc[1]=new Array(1, 1, 1, 0, 1, 1);
    doc[3]=new Array(1, 1, 1, 1, 0, 0);
    doc[4]=new Array(1, 1, 0, 0, 0, 0);
	doc[5]=new Array(1, 1, 0, 0, 0, 0);
    coboxtext=new Array("Общие вопросы","Техническая поддержка","Связи с общественностью и реклама","Партнерство","Вопросы трудоустройства и вакансий","Финансовый отдел");


    dating=new Array();
    sporting=new Array();
    sportname=new Array();
    datesport=new Array();
    sportdate=new Array();

    dateb=new Date();
    platadate=new Array();
    platatip=new Array();
    platacasa=new Array();
    platavid=new Array();
    platasumma=new Array();
    plataId=new Array();
    valutavid=new Array();
 	



    
	

    championSort=0;
    eventSort=0;
    countrySort=0;
    LIVE=0;
    ttt=0;
    langmod=0;
    langmod2=0;

    SportIndex=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    SportIndex2=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    LastSportIndex=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    SportIndex2=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    CountryIndex=-1;//указывает какая страна выбрана, равна индексу в массиве mCountry
    RegionIndex=-1;//указывает выбран или не выбран регион в футболе
    ChampionIndex=-1;//указывает какой чемпионат выбран, равен ID_CHAMPIONSHIP
    ChampionTarget=-1;//указывает на какой чемпионат стоит курсор мышки равен ID_CHAMPIONSHIP
    SportTarget=-1;// указывает на какой спорт стоит курсор мышки, равен индексу в массиве mSport
    CountryTarget=-1
    loginstate=0;
	EndIndex=0;
	EndIndexDay=0;




    str="menu";


    sendarray=new Array();
    sendindex=0;




    writeUnsignedInt=writeInt;




    //opencount=0;






    mTVindex=new Array();
    mTV=new Array();

BinaryParser = function(bigEndian, allowExceptions){
    this.bigEndian = bigEndian, this.allowExceptions = allowExceptions;
};
with({p: BinaryParser.prototype}){
    p.encodeFloat = function(number, precisionBits, exponentBits){
        var bias = Math.pow(2, exponentBits - 1) - 1, minExp = -bias + 1, maxExp = bias, minUnnormExp = minExp - precisionBits,
        status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0,
        exp = 0, len = 2 * bias + 1 + precisionBits + 3, bin = new Array(len),
        signal = (n = status !== 0 ? 0 : n) < 0, n = Math.abs(n), intPart = Math.floor(n), floatPart = n - intPart,
        i, lastBit, rounded, j, result;
        for(i = len; i; bin[--i] = 0);
        for(i = bias + 2; intPart && i; bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2));
        for(i = bias + 1; floatPart > 0 && i; (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart);
        for(i = -1; ++i < len && !bin[i];);
        if(bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]){
            if(!(rounded = bin[lastBit]))
                for(j = lastBit + 2; !rounded && j < len; rounded = bin[j++]);
            for(j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0));
        }
        for(i = i - 2 < 0 ? -1 : i - 3; ++i < len && !bin[i];);

        (exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp &&
            (exp != bias + 1 - len && exp < minUnnormExp && this.warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1));
        (intPart || status !== 0) && (this.warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status),
            exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1));
        for(n = Math.abs(exp + bias), j = exponentBits + 1, result = ""; --j; result = (n % 2) + result, n = n >>= 1);
        for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];
            i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = String.fromCharCode(n), n = 0), j = (j + 1) % 8);
        r[r.length] = n ? String.fromCharCode(n) : "";
        return (this.bigEndian ? r.reverse() : r).join("");
    };
    p.encodeInt = function(number, bits, signed){
        var max = Math.pow(2, bits), r = [];
        (number >= max || number < -(max >> 1)) && this.warn("encodeInt::overflow") && (number = 0);
        number < 0 && (number += max);
        for(; number; r[r.length] = String.fromCharCode(number % 256), number = Math.floor(number / 256));
        for(bits = -(-bits >> 3) - r.length; bits--; r[r.length] = "\0");
        return (this.bigEndian ? r.reverse() : r).join("");
    };
    p.decodeFloat = function(data, precisionBits, exponentBits){
        var b = ((b = new this.Buffer(this.bigEndian, data)).checkBuffer(precisionBits + exponentBits + 1), b),
            bias = Math.pow(2, exponentBits - 1) - 1, signal = b.readBits(precisionBits + exponentBits, 1),
            exponent = b.readBits(precisionBits, exponentBits), significand = 0,
            divisor = 2, curByte = b.buffer.length + (-precisionBits >> 3) - 1,
            byteValue, startBit, mask;
        do
            for(byteValue = b.buffer[ ++curByte ], startBit = precisionBits % 8 || 8, mask = 1 << startBit;
                mask >>= 1; (byteValue & mask) && (significand += 1 / divisor), divisor *= 2);
        while(precisionBits -= startBit);
        return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity
            : (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand
            : Math.pow(2, exponent - bias) * (1 + significand) : 0);
    };
    p.decodeInt = function(data, bits, signed){
        var b = new this.Buffer(this.bigEndian, data), x = b.readBits(0, bits), max = Math.pow(2, bits);
        return signed && x >= max / 2 ? x - max : x;
    };
    with({p: (p.Buffer = function(bigEndian, buffer){
        this.bigEndian = bigEndian || 0, this.buffer = [], this.setBuffer(buffer);
    }).prototype}){
        p.readBits = function(start, length){
            //shl fix: Henri Torgemane ~1996 (compressed by Jonas Raoni)
            function shl(a, b){
                for(++b; --b; a = ((a %= 0x7fffffff + 1) & 0x40000000) == 0x40000000 ? a * 2 : (a - 0x40000000) * 2 + 0x7fffffff + 1);
                return a;
            }
            if(start < 0 || length <= 0)
                return 0;
            this.checkBuffer(start + length);
            for(var offsetLeft, offsetRight = start % 8, curByte = this.buffer.length - (start >> 3) - 1,
                lastByte = this.buffer.length + (-(start + length) >> 3), diff = curByte - lastByte,
                sum = ((this.buffer[ curByte ] >> offsetRight) & ((1 << (diff ? 8 - offsetRight : length)) - 1))
                + (diff && (offsetLeft = (start + length) % 8) ? (this.buffer[ lastByte++ ] & ((1 << offsetLeft) - 1))
                << (diff-- << 3) - offsetRight : 0); diff; sum += shl(this.buffer[ lastByte++ ], (diff-- << 3) - offsetRight)
            );
            return sum;
        };
        p.setBuffer = function(data){
            if(data){
                for(var l, i = l = data.length, b = this.buffer = new Array(l); i; b[l - i] = data.charCodeAt(--i));
                this.bigEndian && b.reverse();
            }
        };
        p.hasNeededBits = function(neededBits){
            return this.buffer.length >= -(-neededBits >> 3);
        };
        p.checkBuffer = function(neededBits){
            if(!this.hasNeededBits(neededBits))
                throw new Error("checkBuffer::missing bytes");
        };
    }
    p.warn = function(msg){
        if(this.allowExceptions)
            throw new Error(msg);
        return 1;
    };
    p.toSmall = function(data){return this.decodeInt(data, 8, true);};
    p.fromSmall = function(number){return this.encodeInt(number, 8, true);};
    p.toByte = function(data){return this.decodeInt(data, 8, false);};
    p.fromByte = function(number){return this.encodeInt(number, 8, false);};
    p.toShort = function(data){return this.decodeInt(data, 16, true);};
    p.fromShort = function(number){return this.encodeInt(number, 16, true);};
    p.toWord = function(data){return this.decodeInt(data, 16, false);};
    p.fromWord = function(number){return this.encodeInt(number, 16, false);};
    p.toInt = function(data){return this.decodeInt(data, 32, true);};
    p.fromInt = function(number){return this.encodeInt(number, 32, true);};
    p.toDWord = function(data){return this.decodeInt(data, 32, false);};
    p.fromDWord = function(number){return this.encodeInt(number, 32, false);};
    p.toFloat = function(data){return this.decodeFloat(data, 23, 8);};
    p.fromFloat = function(number){return this.encodeFloat(number, 23, 8);};
    p.toDouble = function(data){return this.decodeFloat(data, 52, 11);};
    p.fromDouble = function(number){return this.encodeFloat(number, 52, 11);};
}

    double=new BinaryParser(false,true);




    seek=0;
    sporttag=null;
    userpass="";
    userpass2="";
    userlogin="";
    userpass3="";
    userlogin3="";
	
  //  var mClient=new TClient();
    var mH=new Array();
    var rH=new Array();
    var aH=new Array();
    var anH=new Array();
    var nH=new Array();
    var bm=new Array();
    bm[0]="б";
    bm[1]="м";
   var express1="Экспресс";
   var system1="Система";
    system2="из";
    system3="вариантов";
    ordinar1="Ординар";
    hist2=0;
	
	t5="";
	ordvalut();



    war10="Заявка принята. Отменить заказ Вы можете в меню Истории платежей.";
    //war205=""; 
    //if(iphone==1) war205="Вы не авторизированы! Зарегистрироваться?";else 
	war205="Вы не авторизированы!Если у Вас нет логина, пройдите процедуру <a href='/auth/registration/' style='text-decoration:none;color:#F47621;'><b>Регистрации.<b></a>";
       war11="Извините, Ваша заявка отклонена. Недостаточно средств на счету.";
	war101="Извините, Ваша заявка отклонена. Документ не подтвержден.";
	
    war208="Ваш платеж успешно выполнен.<br />Для того, чтобы перечисленные средства стали доступны для ставок, просим Вас предоставить:<br /><br />копию паспорта (стр.2-3)<br />сканированную копию обеих сторон банковской карты, с которой осуществлялся денежный перевод на игровой счет<br />Для соблюдения конфиденциальности можно закрыть цифры номера банковской карты, кроме первых шести и последних четырех: 1234 56** **** 3456 с лицевой стороны и код безопасности CVC2 с обратной стороны.<br />Вы можете отправить копии документов на finance@winlinebet.net<br /><br />БК Winline запрашивает документы с целью удостоверения личности клиента, согласно Правилам пополнения и вывода средств.<br />Все электронные копии документов клиента хранятся и используются согласно правилам Использования персональных данных БК Winline.<br/> В случае, если запрашиваемые документы не будут предоставлены, БК Winline оставляет за собой право сделать возврат средств и заблокировать Ваш лицевой счет.<br /><br />С уважением, Финансовый отдел БК Winline."


    war1="Не удалось сохранить Ваш документ";
    war0="Данные Вашего документа успешно сохранены";
    war4="Внесенные изменения успешно сохранены.";
    war5="Не удалось сохранить изменения.";
    war8="Новый пароль сохранен.";
    war9="Извините, не удалось изменить пароль.";
    war14="Ваше письмо успешно отправлено.";
    war191="Не удалось обновить Ваш пароль. Обратитесь в службу технической поддержки.";
    war172="Проверьте свой почтовый адрес. В течение 2-3 минут Вам придет сообщение с дальнейшими инструкциями.";
    war173="Пользователь с таким E-mail адресом не зарегистрирован.";
    war6="Вы успешно зарегистрированы. На указанный почтовый ящик отправлен Ваш логин."
    war7="Отказано в регистрации. Укзанный E-mail уже используется. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav(&quot;remember1&quot;); CloseWarning();return false;'>Забыли пароль?</a><br/><br/>Если вы не открывали счет на сайте WinlineBet.com, обратитесь в <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>службу поддержки.</a>";
    war7777="Отказано в регистрации. Укзанный логин уже используется. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav(&quot;remember1&quot;); CloseWarning();return false;'>Забыли пароль?</a><br/><br/>Если вы не открывали счет на сайте WinlineBet.com, обратитесь в <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>службу поддержки.</a>";
	
	war77="Отказано в регистрации. Клиент с данной фамилией, именем и датой рождения уже зарегистрирован. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav(&quot;remember1&quot;); CloseWarning();return false;'>Забыли пароль?</a><br/><br/>Если вы не открывали счет на сайте WinlineBet.com, обратитесь в <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>службу поддержки.</a>";
	war777="Отказано в регистрации. Номер мобильного телефона уже используется.  <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:hashnav(&quot;remember1&quot;); CloseWarning();return false;'>Забыли пароль?</a><br/><br/>Если вы не открывали счет на сайте WinlineBet.com, обратитесь в <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>службу поддержки.</a>";
    war13="Неправильный логин или пароль. Воспользуйтесь службой восстановления пароля, или обратитесь в службу технической поддержки.";
	
	war202="Максимальное количество событий в экспрессе или системе равно 20.";
	war203 = "Коэффициент превышает " + maxKoef + "! Согласно правилам, выплата будет рассчитана исходя, что коэффициент равен " + maxKoef + ".";
    war3="Извините, Ваша ставка не принята.";
	war33="Ваша ставка обрабатывается.В ближайшие время Вы получите оповещение, принята или отклонена.";
	war2="Ваша ставка принята.Информация о Ваших ставках отображается в разделе<br />«МОЙ СЧЕТ».";
    war167="Вы не приняли условия и правила приема ставок.";
    war201="Вы действительно желаете отменить заявку?";

    dis=new Array();

    for(i=0;i<40;i++) dis[i]="none";

    dis[1]="";
    dis[2]="";
    dis[4]="";
    dis[5]="";
    dis[9]="";
    dis[10]="";
    dis[11]="";
    dis[14]="";
    dis[26]="";











    KOEF1=0;



    colorlive=0;
    color=0;

    FII=0;

    display=new Array("","none");



    lastchampblt=-1;



    //;
    //ppd1=pdd.getTime();





    date2=new Date();




    today="Сегодня";
    Nichya="Ничья";




    display3=new Array("none","none","","none");
    color4=new Array("#FFFFFF","#EBEBEB");
    color4index=0;
	color5index=new Array(0,0,0,0,0,0);

   principalDay=new Array();
   principalDayIndex=new Array();
   principalDayLive=new Array();
   principalDayLiveCurrent=new Array();
   principalDayLiveCurrentOld=new Array();
   principalDayLiveIndex=new Array();
   nowprincipal=new Array();
   seoprincipal=new Array();
       

	
	
	
	    


    display4=new Array("none","","");
	uprap=new Array();
	uprap[-2]=uprap[-1]="png";
	uprap[1]=uprap[2]="gif";
	uprap2=new Array();
	uprap2[-2]=uprap2[-1]="";
	uprap2[1]=uprap2[2]="us";
	
	
    //display4=new Array("","","");


    plusinterval=new Array();
    //plusline=new Array();
    //for(i=0;i<30;i++) {plusinterval[i]=new Array();plusline[i]=new Array();}


	 
    var bxb=new Array();
    bxb[2]="Двойные";
	bxb[3]="Тройные"; 



    podacha=new Array(0,-2,44);
    podacha2=new Array(0,1,49);






    lbarray=new Array("Свернуть чемпионат","Развернуть чемпионат");

    period="периоде";
    quarter="четверти";
	inning="иннинге";
    sete="сете";




    log2=0;
	log1=0;


    iternews=0;

    x12=new Array(0,2,1)


    istoriaction=0;
    clientindex=0;
    rclientindex=-1;
    rclientindex2=-1;
    rclientindex3=-1;


    colon1='<div style="float:left;width:744px;height:0px;"><div style="float:left;width:73px;border-right:1px solid #DADADA;background-color:#FFFFFF;height:2000px;"></div><div style="float:left;width:289px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left;width:50px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left; margin-left:0px; width:181px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left;width:70px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left; width:75px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div></div>'

    colon2='<div style="float:left;width:744px;height:0px;"><div style="float:left;width:73px;border-right:1px solid #DADADA;background-color:#EBEBEB;height:2000px;"></div><div style="float:left;width:289px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left;width:50px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left; margin-left:0px; width:181px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left;width:70px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left; width:75px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div></div>'



    statusr=0;
    statuscupon=0;
    rTextField2=null;





    minExpress=new Array();
    min2Express=new Array();
    minExpress[0]=0;
    minExpress[1]=0;
    minExpress[2]=0;
    min2Express[0]=0;
    min2Express[1]=0;
    min2Express[2]=0;


    viplata=new Array();
    viplata[0]=0;
    viplata[1]=0;
    viplata[2]=0;
	
	
    viplata2=new Array();
    viplata2[0]=0;
    viplata2[1]=0;
    viplata2[2]=0;
	


    flagsend=0;



 


    savestate=0;
	savestateDay=0;
	savestateDayLive=0;
    sysmore=0;
    sysalert=0;
	euroline=0;





    systemkoef=0;
    expresskoef=0;
	expresskoefDay=0;
	expresskoefDayLive=0;
    viplataDay=0;
    min2ExpressDay=0;
    minExpressDay=0;
	viplataDayLive=0;
    min2ExpressDayLive=0;
    minExpressDayLive=0;












    restrict2="1234567890."
    restrict="1234567890."
	restrict3="1234567890."
    restrictDay2="1234567890."
	restrictDayLive2="1234567890."






























    sendstate=0;
    sendbox=0;
    actionstate=0;


    stavcaExpressflag=0;

    //N=parseFloatExt("1234.5555");
    //writeDouble(N);


    famstring=new Array("Паспорт гражданина Российской Федерации","Паспорт выданный другой страной","Водительское удостоверение","Дополнительный документ","Банковская карта MasterCard");



var echip=new Array();

//echip=new Array("Не выбрано",32,"Динамо М",8,"Зенит СПб",9,"Краснодар",11,"Кубань",12,"Локомотив М",14,"Ростов",24,"Рубин",25,"Спартак М",26,"Терек",27,"ЦСКА",29,"Арсенал",1,"Ливерпуль",13,"Манчестер Сити",15,"Манчестер Юнайтед",16,"Челси",30,"Тоттенхэм",28,"Атлетико М",2,"Барселона",5,"Валенсия",7,"Реал М",22,"Бавария",3,"Байер Л",4,"Боруссия Д",6,"Интер Милан",10,"Милан",17,"Наполи",19,"Рома",23,"Ювентус",31,"Монако",18,"ПСЖ",21,"Порту",20,"Другая",32);


// JavaScript Document

var city=new Array();	
var regiune=new Array();	

//-------------------------------------



	
	//for(i=0;i<echip.length/2;i++) {Reg4[19].options.add(new Option(echip[2*i],i));Reg7[11].options.add(new Option(echip[2*i],2));}


    calend=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
	calend2=new Array("Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь");
	
    Val=new Array("RUR","USD","EUR");
    Question=new Array("Девичья фамилия вашей матери?","Имя вашей(его) супруги(га)?","Любимое время года?","Ваш любимый фильм?","Ваша любимая еда?","Ваша любимая спортивная команда?","Имя вашего питомца?","Имя Вашего отца?","Имя вашего лучшего друга?");



    



grandstate=0;
GrandCookie=new Array();


   








zvezda=0;




    
    if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()>0)) dif=dif+24;
    if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()==0)&&(date.getDate()-date.getUTCDate()>0)) dif=dif+24;


    newOpt=null;





EmailCod = "";

if (decodeURI(window.location.href).indexOf('restore/?code=') > -1 && decodeURI(window.location.href).indexOf('{') > -1 && decodeURI(window.location.href).indexOf('}') > -1)
    EmailCod = decodeURI(window.location.href).split("restore/?code=")[1];



//    EmailCod=window.location.hash;

/*
    if((window.location.hash=="#istoria")||(window.location.hash=="istoria")||(window.location.hash=="#plata")||(window.location.hash=="plata")||(window.location.hash.indexOf("plus")>-1)
    ||(window.location.hash=="#results")||(window.location.hash=="results")||(window.location.hash=="#personal")||(window.location.hash=="personal")
    ||(window.location.hash=="#remember1")||(window.location.hash=="remember1")||(window.location.hash=="#remember2")||(window.location.hash=="remember2")||(window.location.hash=="#warning")||(window.location.hash=="warning")||(window.location.hash=="scan")||(window.location.hash=="#scan"))
    window.location.hash="";else hashChanged();
*/

  //  EmailCod=decodeURI(EmailCod.split("#").join(""));
    if(window.location.href.indexOf("payment")>-1) emailcod=1;	




    storedHash=window.location.hash;
	
	sound1=0;
	//sound3=new Array(161,1064,50,45,40,1012,150,1064,1002);
	sound3=new Array(1013,1013);
	sound4=new Array(30,30);
	sound5=new Array(1024,1024);
		

 //   if ("onhashchange" in window) { /*window.onhashchange=hashChanged;*/ }
  //  else setInterval(HashCheck,200);
 //function HashCheck(){if (window.location.hash!= storedHash) {hashChanged();storedHash=window.location.hash;}}



   /*--------------- 

-------------*/


    regsend=0;


    //radioclick();
	


    document_temp=null;;
    k_document=0;



   


    dateb=new Date();
    dateb.setTime(rDate.getTime()+15*3600*1000*24);

   
	
	dateb.setTime(rDate.getTime()+15*3600*1000*24);
	
	for(i=0;i<300;i++){dateb.setTime(dateb.getTime()-3600*1000*24);



             dateb.setMonth(0);
            dateb.setFullYear(2013);
			dateb.setDate(1);
			dateb.setHours(0);        
    dateb=new Date();
    dateb.setUTCHours(0);
    dateb.setUTCMinutes(0);
    dateb.setUTCMilliseconds(0);
    dateb.setUTCSeconds(0);
    /*--------------------------------------------------------
------------------------------------------------------------------------*/



    //for(l=i;l<i+7;l++) {mClient.DATE_STAVCA[l]=new Date();mClient.DATE_STAVCA[l].setTime(date.time+24*60*60*1000*(l-i));mClient.DATE_STAVCA[l].hoursUTC=0;mClient.DATE_STAVCA[l].millisecondsUTC=0;mClient.DATE_STAVCA[l].secondsUTC=0;}








    rem_n=0;
    rem_k=0;













    casa_address=new Array();
    casa_id=new Array();
	casa_byte=new Array();
    casa_name=new Array();

orash=new Array("Москва","Казань","Белгород","Калужская область");
    address=new Array();
    dop_address=new Array();
    dop2_address=new Array();



    address[0]=new Array("ст.м. Арбатская, ул. Новый Арбат 10","ст.м. Пушкинская, Пушкинская пл. 2","ст.м. Воробьевы Горы, ул. Косыгина 15","ст.м. Маяковская, ул. Большая Садовая, д.5","ст. м. Фрунзенская, ул. Фрунзенская набережная, 24д");
    address[1]=new Array("пр. Ямашева 51Б","ул. Волгоградская 2А");
    address[2]=new Array("ул. Лермнотова 9a","ул. Чапаева 24");
	address[3]=new Array("г. Балабаново, ул. 50 лет Октября 13");
	

    dop_address[0]=new Array("Спорт-Бар<br />10:00-06:00","на месте бывшего клуба XO, казино Шангри-Ла<br />круглосуточно","гостиница Корстон<br/>круглосуточно","гостиница Пекин<br />круглосуточно","Букмекерский центр Сириус<br />13.00-01.00");
    dop_address[1]=new Array("<br />12:00-00:00","<br />12:00-00:00");
    dop_address[2]=new Array("<br />12:00-00:00","<br />12:00-00:00");
    dop_address[3]=new Array("<br />круглосуточно");

    dop2_address[0]=new Array("трансляции спортивных событий, большие экраны, европейская и японская кухня<br />тел: +7 (495) 229-3167","трансляции спортивных событий, ресторан<br />тел: +7 (495) 668-1388","трансляции спортивных событий, ресторан, бар<br />тел: +7 (495) 668-1430","<br />тел: +7 (495) 780-3353","");
    dop2_address[1]=new Array("трансляции спортивных событий","трансляции спортивных событий");
    dop2_address[2]=new Array("трансляции спортивных событий","трансляции спортивных событий");
    dop2_address[3]=new Array("трансляции спортивных событий");
	


    psps="<br/><br/><b>Адреса пунктов пополнения счета:</b>";

/*-----------------------

    Ppsvvod.innerHTML=psps;

---------------*/





    /*
    function getDocumentHeight(){
    return (document.body.scrollHeight > document.body.offsetHeight)? document.body.scrollHeight: document.body.offsetHeight;
    }
    */



	}
	
	
	var text=  "TZGxSgNBFEXvzOQF8g22QQth2Y1uEhG08meMCenSpwwWfsI2QUmTIhtxUUSxUEMWUYT8hCG/kHlvsw+nuAPn3rkzjwGKtec3uv07tOb8pga7QoJ9VBCdBLGhO+UZ0oK3mE+UJ/gpeMx86jnRrHRdByN775aO70jFm4s+lAmb4hkLR/6+MIhBj2K/iL6Kvv+LZuhxNDzm6IcaGTLU4SBP/lTM1X1XQbvJ8YW0LUVzUbsuh+aCA/AjIo6SGmPkhdH23aCqGjnGuxNHbJx5g+hysyt0CQbm26Qyd0fpNTbVC/Mk9KqkdohT8+ssGiGoq/QNU4R+Jj+qoZ7iISIT8MfRl2e0BQ=="
			var step = text.charCodeAt(0);
	decode(text,step,2);
