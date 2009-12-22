(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"studentlife.Application","qx.theme":"studentlife.theme.Theme","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"studentlife":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["studentlife:studentlife.js"]],
  urisBefore : [],
  packageHashes : {"0":"910dc979a166"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['910dc979a166']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"studentlife/alsoattending.png":[154,15,"png","studentlife"],"studentlife/bg-adcontainer.png":[3,76,"png","studentlife"],"studentlife/bg-menu.png":[493,14,"png","studentlife"],"studentlife/bg.png":[1,578,"png","studentlife"],"studentlife/columnborder.png":[154,1,"png","studentlife"],"studentlife/cross-hover.png":[8,8,"png","studentlife"],"studentlife/cross.png":[8,8,"png","studentlife"],"studentlife/logo.png":[154,31,"png","studentlife"],"studentlife/menu-agenda.png":[52,8,"png","studentlife"],"studentlife/menu-agenda2.jpg":[219,35,"jpeg","studentlife"],"studentlife/menu-agenda2.png":[53,10,"png","studentlife"],"studentlife/menu-agenda3.png":[52,8,"png","studentlife"],"studentlife/menu-courses.png":[60,8,"png","studentlife"],"studentlife/menu-coursesettings.png":[84,6,"png","studentlife"],"studentlife/menu-vborder.png":[2,10,"png","studentlife"],"studentlife/mycourses.png":[154,15,"png","studentlife"],"studentlife/payedAD.png":[363,70,"png","studentlife"],"studentlife/test.png":[32,32,"png","studentlife"],"studentlife/testprofilepic1.png":[30,30,"png","studentlife"],"studentlife/testprofilepic2.png":[30,30,"png","studentlife"]}};
(function(){var h=".",g="()",f="[Class ",e=".prototype",d="toString",c="qx.Bootstrap",b="]",a="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+b;
},createNamespace:function(name,o){var q=name.split(h);
var parent=window;
var p=q[0];

for(var i=0,r=q.length-1;i<r;i++,p=q[i]){if(!parent[p]){parent=parent[p]={};
}else{parent=parent[p];
}}parent[p]=o;
return p;
},setDisplayName:function(j,k,name){j.displayName=k+h+name+g;
},setDisplayNames:function(l,m){for(var name in l){var n=l[name];

if(n instanceof Function){n.displayName=m+h+name+g;
}}},define:function(name,s){if(!s){var s={statics:{}};
}var x;
var v=null;
qx.Bootstrap.setDisplayNames(s.statics,name);

if(s.members){qx.Bootstrap.setDisplayNames(s.members,name+e);
x=s.construct||new Function;
var t=s.statics;

for(var u in t){x[u]=t[u];
}v=x.prototype;
var y=s.members;

for(var u in y){v[u]=y[u];
}}else{x=s.statics||{};
}var w=this.createNamespace(name,x);
x.name=x.classname=name;
x.basename=w;
x.$$type=a;
if(!x.hasOwnProperty(d)){x.toString=this.genericToString;
}if(s.defer){s.defer(x,v);
}qx.Bootstrap.$$registry[name]=s.statics;
return x;
}};
qx.Bootstrap.define(c,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var m="qx.allowUrlSettings",l="&",k="qx.core.Setting",j="qx.allowUrlVariants",h="qx.propertyDebugLevel",g="qxsetting",f=":",e=".";
qx.Bootstrap.define(k,{statics:{__a:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__a[a]){this.__a[a]={};
}else if(this.__a[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__a[a].defaultValue=b;
},get:function(s){var t=this.__a[s];

if(t===undefined){throw new Error('Setting "'+s+'" is not defined.');
}
if(t.value!==undefined){return t.value;
}return t.defaultValue;
},set:function(c,d){if((c.split(e)).length<2){throw new Error('Malformed settings key "'+c+'". Must be following the schema "namespace.key".');
}
if(!this.__a[c]){this.__a[c]={};
}this.__a[c].value=d;
},__b:function(){if(window.qxsettings){for(var p in window.qxsettings){this.set(p,window.qxsettings[p]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__c();
}},__c:function(){if(this.get(m)!=true){return;
}var o=document.location.search.slice(1).split(l);

for(var i=0;i<o.length;i++){var n=o[i].split(f);

if(n.length!=3||n[0]!=g){continue;
}this.set(n[1],decodeURIComponent(n[2]));
}}},defer:function(r){r.define(m,false);
r.define(j,false);
r.define(h,0);
r.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
window.alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__d();
}});
})();
(function(){var E="on",D="off",C="|",B="default",A="object",z="&",y="qx.aspects",x="$",w="qx.allowUrlVariants",u="qx.debug",o="qx.client",t="qx.dynlocale",r="webkit",n="qxvariant",m="opera",q=":",p="qx.core.Variant",s="mshtml",k="gecko";
qx.Bootstrap.define(p,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(b,c,d){{};

if(!this.__e[b]){this.__e[b]={};
}else{}this.__e[b].allowedValues=c;
this.__e[b].defaultValue=d;
},get:function(F){var G=this.__e[F];
{};

if(G.value!==undefined){return G.value;
}return G.defaultValue;
},__g:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__e[a]){this.__e[a]={};
}this.__e[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(Q){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(w)!=true){return;
}var g=document.location.search.slice(1).split(z);

for(var i=0;i<g.length;i++){var h=g[i].split(q);

if(h.length!=3||h[0]!=n){continue;
}var j=h[1];

if(!this.__e[j]){this.__e[j]={};
}this.__e[j].value=decodeURIComponent(h[2]);
}},select:function(H,I){{};

for(var J in I){if(this.isSet(H,J)){return I[J];
}}
if(I[B]!==undefined){return I[B];
}{};
},isSet:function(L,M){var N=L+x+M;

if(this.__f[N]!==undefined){return this.__f[N];
}var P=false;
if(M.indexOf(C)<0){P=this.get(L)===M;
}else{var O=M.split(C);

for(var i=0,l=O.length;i<l;i++){if(this.get(L)===O[i]){P=true;
break;
}}}this.__f[N]=P;
return P;
},__i:function(v){return typeof v===A&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===A&&v!==null&&!(v instanceof Array);
},__k:function(e,f){for(var i=0,l=e.length;i<l;i++){if(e[i]==f){return true;
}}return false;
}},defer:function(K){K.define(o,[k,s,m,r],qx.bom.client.Engine.NAME);
K.define(u,[E,D],E);
K.define(y,[E,D],D);
K.define(t,[E,D],E);
K.__g();
}});
})();
(function(){var T="qx.client",S='"',R="valueOf",Q="toLocaleString",P="isPrototypeOf",O="",N="toString",M="qx.lang.Object",L='\", "',K="hasOwnProperty";
qx.Bootstrap.define(M,{statics:{empty:function(U){{};

for(var V in U){if(U.hasOwnProperty(V)){delete U[V];
}}},isEmpty:qx.core.Variant.select(T,{"gecko":function(bc){{};
return bc.__count__===0;
},"default":function(w){{};

for(var x in w){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(T,{"gecko":function(W,X){{};
return W.__count__>=X;
},"default":function(b,c){{};

if(c<=0){return true;
}var length=0;

for(var d in b){if((++length)>=c){return true;
}}return false;
}}),getLength:qx.core.Variant.select(T,{"gecko":function(e){{};
return e.__count__;
},"default":function(u){{};
var length=0;

for(var v in u){length++;
}return length;
}}),_shadowedKeys:[P,K,Q,N,R],getKeys:qx.core.Variant.select(T,{"mshtml":function(G){var H=[];

for(var J in G){H.push(J);
}var I=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(I.call(G,a[i])){H.push(a[i]);
}}return H;
},"default":function(n){var o=[];

for(var p in n){o.push(p);
}return o;
}}),getKeysAsString:function(h){{};
var j=qx.lang.Object.getKeys(h);

if(j.length==0){return O;
}return S+j.join(L)+S;
},getValues:function(B){{};
var D=[];
var C=this.getKeys(B);

for(var i=0,l=C.length;i<l;i++){D.push(B[C[i]]);
}return D;
},mergeWith:function(q,r,s){{};

if(s===undefined){s=true;
}
for(var t in r){if(s||q[t]===undefined){q[t]=r[t];
}}return q;
},carefullyMergeWith:function(E,F){{};
return qx.lang.Object.mergeWith(E,F,false);
},merge:function(Y,ba){{};
var bb=arguments.length;

for(var i=1;i<bb;i++){qx.lang.Object.mergeWith(Y,arguments[i]);
}return Y;
},clone:function(bd){{};
var be={};

for(var bf in bd){be[bf]=bd[bf];
}return be;
},invert:function(bg){{};
var bh={};

for(var bi in bg){bh[bg[bi].toString()]=bi;
}return bh;
},getKeyFromValue:function(y,z){{};

for(var A in y){if(y.hasOwnProperty(A)&&y[A]===z){return A;
}}return null;
},contains:function(k,m){{};
return this.getKeyFromValue(k,m)!==null;
},select:function(f,g){{};
return g[f];
},fromArray:function(bj){{};
var bk={};

for(var i=0,l=bj.length;i<l;i++){{};
bk[bj[i].toString()]=true;
}return bk;
}}});
})();
(function(){var k="Function",j="Boolean",i="Error",h="Number",g="Array",f="Date",e="RegExp",d="String",c="Object",b="qx.lang.Type",a="string";
qx.Bootstrap.define(b,{statics:{__l:{"[object String]":d,"[object Array]":g,"[object Object]":c,"[object RegExp]":e,"[object Number]":h,"[object Boolean]":j,"[object Date]":f,"[object Function]":k,"[object Error]":i},getClass:function(n){var o=Object.prototype.toString.call(n);
return (this.__l[o]||o.slice(8,-1));
},isString:function(l){return (l!==null&&(typeof l===a||this.getClass(l)==d||l instanceof String||(!!l&&!!l.$$isString)));
},isArray:function(q){return (q!==null&&(q instanceof Array||(q&&qx.Class.hasInterface(q.constructor,qx.data.IListData))||this.getClass(q)==g||(!!q&&!!q.$$isArray)));
},isObject:function(v){return (v!==undefined&&v!==null&&this.getClass(v)==c);
},isRegExp:function(r){return this.getClass(r)==e;
},isNumber:function(u){return (u!==null&&(this.getClass(u)==h||u instanceof Number));
},isBoolean:function(t){return (t!==null&&(this.getClass(t)==j||t instanceof Boolean));
},isDate:function(p){return (p!==null&&(this.getClass(p)==f||p instanceof Date));
},isError:function(m){return (m!==null&&(this.getClass(m)==i||m instanceof Error));
},isFunction:function(s){return this.getClass(s)==k;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__m:[],wrap:function(f,g,h){var n=[];
var j=[];
var m=this.__m;
var l;

for(var i=0;i<m.length;i++){l=m[i];

if((l.type==null||h==l.type||l.type==b)&&(l.name==null||f.match(l.name))){l.pos==-1?n.push(l.fcn):j.push(l.fcn);
}}
if(n.length===0&&j.length===0){return g;
}var k=function(){for(var i=0;i<n.length;i++){n[i].call(this,f,g,h,arguments);
}var e=g.apply(this,arguments);

for(var i=0;i<j.length;i++){j[i].call(this,f,g,h,arguments,e);
}return e;
};

if(h!==a){k.self=g.self;
k.base=g.base;
}g.wrapper=k;
k.original=g;
return k;
},addAdvice:function(o,p,q,name){this.__m.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var bP="qx.aspects",bO="on",bN=".",bM="static",bL="[Class ",bK="]",bJ="toString",bI="constructor",bH="member",bG="$$init_",bA=".prototype",bF="destructor",bD="extend",bz="destruct",by="Class",bC="off",bB="qx.Class",bE="qx.event.type.Data";
qx.Bootstrap.define(bB,{statics:{define:function(name,bs){if(!bs){var bs={};
}if(bs.include&&!(bs.include instanceof Array)){bs.include=[bs.include];
}if(bs.implement&&!(bs.implement instanceof Array)){bs.implement=[bs.implement];
}if(!bs.hasOwnProperty(bD)&&!bs.type){bs.type=bM;
}{};
var bu=this.__r(name,bs.type,bs.extend,bs.statics,bs.construct,bs.destruct);
if(bs.extend){if(bs.properties){this.__t(bu,bs.properties,true);
}if(bs.members){this.__v(bu,bs.members,true,true,false);
}if(bs.events){this.__s(bu,bs.events,true);
}if(bs.include){for(var i=0,l=bs.include.length;i<l;i++){this.__y(bu,bs.include[i],false);
}}}if(bs.settings){for(var bt in bs.settings){qx.core.Setting.define(bt,bs.settings[bt]);
}}if(bs.variants){for(var bt in bs.variants){qx.core.Variant.define(bt,bs.variants[bt].allowedValues,bs.variants[bt].defaultValue);
}}if(bs.implement){for(var i=0,l=bs.implement.length;i<l;i++){this.__x(bu,bs.implement[i]);
}}{};
if(bs.defer){bs.defer.self=bu;
bs.defer(bu,bu.prototype,{add:function(name,h){var j={};
j[name]=h;
qx.Class.__t(bu,j,true);
}});
}return bu;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bw,bx){{};
qx.Class.__y(bw,bx,false);
},patch:function(bS,bT){{};
qx.Class.__y(bS,bT,true);
},isSubClassOf:function(bp,bq){if(!bp){return false;
}
if(bp==bq){return true;
}
if(bp.prototype instanceof bq){return true;
}return false;
},getPropertyDefinition:function(m,name){while(m){if(m.$$properties&&m.$$properties[name]){return m.$$properties[name];
}m=m.superclass;
}return null;
},getProperties:function(t){var u=[];

while(t){if(t.$$properties){u.push.apply(u,qx.lang.Object.getKeys(t.$$properties));
}t=t.superclass;
}return u;
},getByProperty:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b;
}b=b.superclass;
}return null;
},hasProperty:function(cl,name){return !!this.getPropertyDefinition(cl,name);
},getEventType:function(v,name){var v=v.constructor;

while(v.superclass){if(v.$$events&&v.$$events[name]!==undefined){return v.$$events[name];
}v=v.superclass;
}return null;
},supportsEvent:function(bv,name){return !!this.getEventType(bv,name);
},hasOwnMixin:function(cg,ch){return cg.$$includes&&cg.$$includes.indexOf(ch)!==-1;
},getByMixin:function(T,U){var V,i,l;

while(T){if(T.$$includes){V=T.$$flatIncludes;

for(i=0,l=V.length;i<l;i++){if(V[i]===U){return T;
}}}T=T.superclass;
}return null;
},getMixins:function(bU){var bV=[];

while(bU){if(bU.$$includes){bV.push.apply(bV,bU.$$flatIncludes);
}bU=bU.superclass;
}return bV;
},hasMixin:function(bW,bX){return !!this.getByMixin(bW,bX);
},hasOwnInterface:function(bQ,bR){return bQ.$$implements&&bQ.$$implements.indexOf(bR)!==-1;
},getByInterface:function(B,C){var D,i,l;

while(B){if(B.$$implements){D=B.$$flatImplements;

for(i=0,l=D.length;i<l;i++){if(D[i]===C){return B;
}}}B=B.superclass;
}return null;
},getInterfaces:function(ce){var cf=[];

while(ce){if(ce.$$implements){cf.push.apply(cf,ce.$$flatImplements);
}ce=ce.superclass;
}return cf;
},hasInterface:function(z,A){return !!this.getByInterface(z,A);
},implementsInterface:function(Q,R){var S=Q.constructor;

if(this.hasInterface(S,R)){return true;
}
try{qx.Interface.assertObject(Q,R);
return true;
}catch(k){}
try{qx.Interface.assert(S,R,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bL+this.classname+bK;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,E,F,G,H,I){var N;

if(!F&&qx.core.Variant.isSet(bP,bC)){N=G||{};
qx.Bootstrap.setDisplayNames(N,name);
}else{N={};

if(F){if(!H){H=this.__z();
}N=this.__B(H,name,E);
qx.Bootstrap.setDisplayName(H,name,bI);
}if(G){qx.Bootstrap.setDisplayNames(G,name);
var O;

for(var i=0,a=qx.lang.Object.getKeys(G),l=a.length;i<l;i++){O=a[i];
var K=G[O];

if(qx.core.Variant.isSet(bP,bO)){if(K instanceof Function){K=qx.core.Aspect.wrap(name+bN+O,K,bM);
}N[O]=K;
}else{N[O]=K;
}}}}var M=qx.Bootstrap.createNamespace(name,N,false);
N.name=N.classname=name;
N.basename=M;
N.$$type=by;

if(E){N.$$classtype=E;
}if(!N.hasOwnProperty(bJ)){N.toString=this.genericToString;
}
if(F){var P=F.prototype;
var J=this.__A();
J.prototype=P;
var L=new J;
N.prototype=L;
L.name=L.classname=name;
L.basename=M;
H.base=N.superclass=F;
H.self=N.constructor=L.constructor=N;
if(I){if(qx.core.Variant.isSet(bP,bO)){I=qx.core.Aspect.wrap(name,I,bF);
}N.$$destructor=I;
qx.Bootstrap.setDisplayName(I,name,bz);
}}this.$$registry[name]=N;
return N;
},__s:function(p,q,r){var s,s;
{};

if(p.$$events){for(var s in q){p.$$events[s]=q[s];
}}else{p.$$events=q;
}},__t:function(W,X,Y){var bb;

if(Y===undefined){Y=false;
}var ba=!!W.$$propertiesAttached;

for(var name in X){bb=X[name];
{};
bb.name=name;
if(!bb.refine){if(W.$$properties===undefined){W.$$properties={};
}W.$$properties[name]=bb;
}if(bb.init!==undefined){W.prototype[bG+name]=bb.init;
}if(bb.event!==undefined){var event={};
event[bb.event]=bE;
this.__s(W,event,Y);
}if(bb.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(ba){qx.core.Property.attachMethods(W,name,bb);
}}},__u:null,__v:function(bd,be,bf,bg,bh){var bi=bd.prototype;
var bk,bj;
qx.Bootstrap.setDisplayNames(be,bd.classname+bA);

for(var i=0,a=qx.lang.Object.getKeys(be),l=a.length;i<l;i++){bk=a[i];
bj=be[bk];
{};
if(bg!==false&&bj instanceof Function&&bj.$$type==null){if(bh==true){bj=this.__w(bj,bi[bk]);
}else{if(bi[bk]){bj.base=bi[bk];
}bj.self=bd;
}
if(qx.core.Variant.isSet(bP,bO)){bj=qx.core.Aspect.wrap(bd.classname+bN+bk,bj,bH);
}}bi[bk]=bj;
}},__w:function(n,o){if(o){return function(){var d=n.base;
n.base=o;
var c=n.apply(this,arguments);
n.base=d;
return c;
};
}else{return n;
}},__x:function(ci,cj){{};
var ck=qx.Interface.flatten([cj]);

if(ci.$$implements){ci.$$implements.push(cj);
ci.$$flatImplements.push.apply(ci.$$flatImplements,ck);
}else{ci.$$implements=[cj];
ci.$$flatImplements=ck;
}},__y:function(bY,ca,cb){{};

if(this.hasMixin(bY,ca)){return;
}var cd=qx.Mixin.flatten([ca]);
var cc;

for(var i=0,l=cd.length;i<l;i++){cc=cd[i];
if(cc.$$events){this.__s(bY,cc.$$events,cb);
}if(cc.$$properties){this.__t(bY,cc.$$properties,cb);
}if(cc.$$members){this.__v(bY,cc.$$members,cb,cb,cb);
}}if(bY.$$includes){bY.$$includes.push(ca);
bY.$$flatIncludes.push.apply(bY.$$flatIncludes,cd);
}else{bY.$$includes=[ca];
bY.$$flatIncludes=cd;
}},__z:function(){function br(){arguments.callee.base.apply(this,arguments);
}return br;
},__A:function(){return function(){};
},__B:function(bl,name,bm){var bo=function(){var g=arguments.callee.constructor;
{};
if(!g.$$propertiesAttached){qx.core.Property.attach(g);
}var f=g.$$original.apply(this,arguments);
if(g.$$includes){var e=g.$$flatIncludes;

for(var i=0,l=e.length;i<l;i++){if(e[i].$$constructor){e[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return f;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var bn=qx.core.Aspect.wrap(name,bo,"constructor");
bo.$$original=bl;
bo.constructor=bn;
bo=bn;
}if(bm==="singleton"){bo.getInstance=this.getInstance;
}bo.$$original=bl;
bl.wrapper=bo;
return bo;
}},defer:function(w){if(qx.core.Variant.isSet(bP,bO)){for(var x in qx.Bootstrap.$$registry){var w=qx.Bootstrap.$$registry[x];

for(var y in w){if(w[y] instanceof Function){w[y]=qx.core.Aspect.wrap(x+bN+y,w[y],bM);
}}}}}});
})();
(function(){var o="]",n="Theme",m="[Theme ",k="qx.Theme";
qx.Class.define(k,{statics:{define:function(name,h){if(!h){var h={};
}h.include=this.__C(h.include);
h.patch=this.__C(h.patch);
{};
var j={$$type:n,name:name,title:h.title,toString:this.genericToString};
if(h.extend){j.supertheme=h.extend;
}j.basename=qx.Bootstrap.createNamespace(name,j);
this.__F(j,h);
this.__D(j,h);
this.$$registry[name]=j;
for(var i=0,a=h.include,l=a.length;i<l;i++){this.include(j,a[i]);
}
for(var i=0,a=h.patch,l=a.length;i<l;i++){this.patch(j,a[i]);
}},__C:function(b){if(!b){return [];
}
if(qx.lang.Type.isArray(b)){return b;
}else{return [b];
}},__D:function(c,d){var e=d.aliases||{};

if(d.extend&&d.extend.aliases){qx.lang.Object.mergeWith(e,d.extend.aliases,false);
}c.aliases=e;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return m+this.name+o;
},__E:function(f){for(var i=0,g=this.__G,l=g.length;i<l;i++){if(f[g[i]]){return g[i];
}}},__F:function(B,C){var F=this.__E(C);
if(C.extend&&!F){F=C.extend.type;
}B.type=F||"other";
if(!F){return;
}var H=function(){};
if(C.extend){H.prototype=new C.extend.$$clazz;
}var G=H.prototype;
var E=C[F];
for(var D in E){G[D]=E[D];
if(G[D].base){{};
G[D].base=C.extend;
}}B.$$clazz=H;
B[F]=new H;
},$$registry:{},__G:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__H:null,__I:null,__J:function(){},patch:function(v,w){var y=this.__E(w);

if(y!==this.__E(v)){throw new Error("The mixins '"+v.name+"' are not compatible '"+w.name+"'!");
}var x=w[y];
var z=v.$$clazz.prototype;

for(var A in x){z[A]=x[A];
}},include:function(p,q){var s=q.type;

if(s!==p.type){throw new Error("The mixins '"+p.name+"' are not compatible '"+q.name+"'!");
}var r=q[s];
var t=p.$$clazz.prototype;

for(var u in r){if(t[u]!==undefined){continue;
}t[u]=r[u];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="studentlife.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var T=';',S='return this.',R="boolean",Q="string",P='!==undefined)',O='else if(this.',N='if(this.',M='else ',L=' of an instance of ',K=' is not (yet) ready!");',bC="init",bB="': ",bA=" of class ",bz='(computed, old, "',by='return value;',bx='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bw='return init;',bv='var init=this.',bu="')){",bt="if(reg.hasListener(this, '",bb="Error in property ",bc='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',Y='if(init==qx.core.Property.$$inherit)init=null;',ba="set",W='if(a[i].',X="var reg=qx.event.Registration;",U=" in method ",V='throw new Error("Property ',bd='(backup);',be='var inherit=prop.$$inherit;',bl='return null;',bj='this.',bn=")}",bm="setRuntime",bp=')a[i].',bo='");',bg="setThemed",bs="inherit",br=" with incoming value '",bq="', qx.event.type.Data, [computed, old]",bf="object",bh='}',bi="reg.fireEvent(this, '",bk="qx.core.Property";
qx.Bootstrap.define(bk,{statics:{__K:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__L:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bs,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:Q,dispose:R,inheritable:R,nullable:R,themeable:R,refine:R,init:null,apply:Q,event:Q,check:null,transform:Q,deferredInit:R,validate:null},$$allowedGroupKeys:{name:Q,group:bf,mode:Q,themeable:R},$$inheritable:{},refresh:function(s){var parent=s.getLayoutParent();

if(parent){var v=s.constructor;
var x=this.$$store.inherit;
var w=this.$$store.init;
var u=this.$$method.refresh;
var y;
var t;
{};

while(v){y=v.$$properties;

if(y){for(var name in this.$$inheritable){if(y[name]&&s[u[name]]){t=parent[x[name]];

if(t===undefined){t=parent[w[name]];
}{};
s[u[name]](t);
}}}v=v.superclass;
}}},attach:function(I){var J=I.$$properties;

if(J){for(var name in J){this.attachMethods(I,name,J[name]);
}}I.$$propertiesAttached=true;
},attachMethods:function(f,name,g){g.group?this.__M(f,g,name):this.__N(f,g,name);
},__M:function(ci,cj,name){var cq=qx.lang.String.firstUp(name);
var cp=ci.prototype;
var cr=cj.themeable===true;
{};
var cs=[];
var cm=[];

if(cr){var ck=[];
var co=[];
}var cn="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cs.push(cn);

if(cr){ck.push(cn);
}
if(cj.mode=="shorthand"){var cl="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cs.push(cl);

if(cr){ck.push(cl);
}}
for(var i=0,a=cj.group,l=a.length;i<l;i++){{};
cs.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cm.push("this.",this.$$method.reset[a[i]],"();");

if(cr){{};
ck.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
co.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cq;
cp[this.$$method.set[name]]=new Function(cs.join(""));
this.$$method.reset[name]="reset"+cq;
cp[this.$$method.reset[name]]=new Function(cm.join(""));

if(cr){this.$$method.setThemed[name]="setThemed"+cq;
cp[this.$$method.setThemed[name]]=new Function(ck.join(""));
this.$$method.resetThemed[name]="resetThemed"+cq;
cp[this.$$method.resetThemed[name]]=new Function(co.join(""));
}},__N:function(bD,bE,name){var bG=qx.lang.String.firstUp(name);
var bI=bD.prototype;
{};
if(bE.dispose===undefined&&typeof bE.check==="string"){bE.dispose=this.__L[bE.check]||qx.Class.isDefined(bE.check)||qx.Interface.isDefined(bE.check);
}var bH=this.$$method;
var bF=this.$$store;
bF.runtime[name]="$$runtime_"+name;
bF.user[name]="$$user_"+name;
bF.theme[name]="$$theme_"+name;
bF.init[name]="$$init_"+name;
bF.inherit[name]="$$inherit_"+name;
bF.useinit[name]="$$useinit_"+name;
bH.get[name]="get"+bG;
bI[bH.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bD,name,"get");
};
bH.set[name]="set"+bG;
bI[bH.set[name]]=function(z){return qx.core.Property.executeOptimizedSetter(this,bD,name,"set",arguments);
};
bH.reset[name]="reset"+bG;
bI[bH.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bD,name,"reset");
};

if(bE.inheritable||bE.apply||bE.event||bE.deferredInit){bH.init[name]="init"+bG;
bI[bH.init[name]]=function(cA){return qx.core.Property.executeOptimizedSetter(this,bD,name,"init",arguments);
};
}
if(bE.inheritable){bH.refresh[name]="refresh"+bG;
bI[bH.refresh[name]]=function(ca){return qx.core.Property.executeOptimizedSetter(this,bD,name,"refresh",arguments);
};
}bH.setRuntime[name]="setRuntime"+bG;
bI[bH.setRuntime[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,bD,name,"setRuntime",arguments);
};
bH.resetRuntime[name]="resetRuntime"+bG;
bI[bH.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bD,name,"resetRuntime");
};

if(bE.themeable){bH.setThemed[name]="setThemed"+bG;
bI[bH.setThemed[name]]=function(cz){return qx.core.Property.executeOptimizedSetter(this,bD,name,"setThemed",arguments);
};
bH.resetThemed[name]="resetThemed"+bG;
bI[bH.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bD,name,"resetThemed");
};
}
if(bE.check==="Boolean"){bI["toggle"+bG]=new Function("return this."+bH.set[name]+"(!this."+bH.get[name]+"())");
bI["is"+bG]=new Function("return this."+bH.get[name]+"()");
}},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cb,cc,cd,ce,cf){var cg=cb.constructor.classname;
var ch=bb+cd+bA+cg+U+this.$$method[ce][cd]+br+cf+bB;
throw new Error(ch+(this.__O[cc]||"Unknown reason: "+cc));
},__P:function(ct,cu,name,cv,cw,cx){var cy=this.$$method[cv][name];
{cu[cy]=new Function("value",cw.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){cu[cy]=qx.core.Aspect.wrap(ct.classname+"."+cy,cu[cy],"property");
}qx.Bootstrap.setDisplayName(cu[cy],ct.classname+".prototype",cy);
if(cx===undefined){return ct[cy]();
}else{return ct[cy](cx[0]);
}},executeOptimizedGetter:function(A,B,name,C){var E=B.$$properties[name];
var G=B.prototype;
var D=[];
var F=this.$$store;
D.push(N,F.runtime[name],P);
D.push(S,F.runtime[name],T);

if(E.inheritable){D.push(O,F.inherit[name],P);
D.push(S,F.inherit[name],T);
D.push(M);
}D.push(N,F.user[name],P);
D.push(S,F.user[name],T);

if(E.themeable){D.push(O,F.theme[name],P);
D.push(S,F.theme[name],T);
}
if(E.deferredInit&&E.init===undefined){D.push(O,F.init[name],P);
D.push(S,F.init[name],T);
}D.push(M);

if(E.init!==undefined){if(E.inheritable){D.push(bv,F.init[name],T);

if(E.nullable){D.push(Y);
}else if(E.init!==undefined){D.push(S,F.init[name],T);
}else{D.push(bx,name,L,B.classname,K);
}D.push(bw);
}else{D.push(S,F.init[name],T);
}}else if(E.inheritable||E.nullable){D.push(bl);
}else{D.push(V,name,L,B.classname,K);
}return this.__P(A,G,name,C,D);
},executeOptimizedSetter:function(bJ,bK,name,bL,bM){var bR=bK.$$properties[name];
var bQ=bK.prototype;
var bO=[];
var bN=bL===ba||bL===bg||bL===bm||(bL===bC&&bR.init===undefined);
var bP=bR.apply||bR.event||bR.inheritable;
var bS=this.__Q(bL,name);
this.__R(bO,bR,name,bL,bN);

if(bN){this.__S(bO,bK,bR,name);
}
if(bP){this.__T(bO,bN,bS,bL);
}
if(bR.inheritable){bO.push(be);
}{};

if(!bP){this.__V(bO,name,bL,bN);
}else{this.__W(bO,bR,name,bL,bN);
}
if(bR.inheritable){this.__X(bO,bR,name,bL);
}else if(bP){this.__Y(bO,bR,name,bL);
}
if(bP){this.__ba(bO,bR,name);
if(bR.inheritable&&bQ._getChildren){this.__bb(bO,name);
}}if(bN){bO.push(by);
}return this.__P(bJ,bQ,name,bL,bO,bM);
},__Q:function(cF,name){if(cF==="setRuntime"||cF==="resetRuntime"){var cG=this.$$store.runtime[name];
}else if(cF==="setThemed"||cF==="resetThemed"){cG=this.$$store.theme[name];
}else if(cF==="init"){cG=this.$$store.init[name];
}else{cG=this.$$store.user[name];
}return cG;
},__R:function(bV,bW,name,bX,bY){{if(!bW.nullable||bW.check||bW.inheritable){bV.push('var prop=qx.core.Property;');
}if(bX==="set"){bV.push('if(value===undefined)prop.error(this,2,"',name,'","',bX,'",value);');
}};
},__S:function(h,j,k,name){if(k.transform){h.push('value=this.',k.transform,'(value);');
}if(k.validate){if(typeof k.validate==="string"){h.push('this.',k.validate,'(value);');
}else if(k.validate instanceof Function){h.push(j.classname,'.$$properties.',name);
h.push('.validate.call(this, value);');
}}},__T:function(cH,cI,cJ,cK){var cL=(cK==="reset"||cK==="resetThemed"||cK==="resetRuntime");

if(cI){cH.push('if(this.',cJ,'===value)return value;');
}else if(cL){cH.push('if(this.',cJ,'===undefined)return;');
}},__U:undefined,__V:function(m,name,n,o){if(n==="setRuntime"){m.push('this.',this.$$store.runtime[name],'=value;');
}else if(n==="resetRuntime"){m.push('if(this.',this.$$store.runtime[name],'!==undefined)');
m.push('delete this.',this.$$store.runtime[name],';');
}else if(n==="set"){m.push('this.',this.$$store.user[name],'=value;');
}else if(n==="reset"){m.push('if(this.',this.$$store.user[name],'!==undefined)');
m.push('delete this.',this.$$store.user[name],';');
}else if(n==="setThemed"){m.push('this.',this.$$store.theme[name],'=value;');
}else if(n==="resetThemed"){m.push('if(this.',this.$$store.theme[name],'!==undefined)');
m.push('delete this.',this.$$store.theme[name],';');
}else if(n==="init"&&o){m.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cB,cC,name,cD,cE){if(cC.inheritable){cB.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cB.push('var computed, old;');
}cB.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cD==="setRuntime"){cB.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cD==="resetRuntime"){cB.push('delete this.',this.$$store.runtime[name],';');
cB.push('if(this.',this.$$store.user[name],'!==undefined)');
cB.push('computed=this.',this.$$store.user[name],';');
cB.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cB.push('computed=this.',this.$$store.theme[name],';');
cB.push('else if(this.',this.$$store.init[name],'!==undefined){');
cB.push('computed=this.',this.$$store.init[name],';');
cB.push('this.',this.$$store.useinit[name],'=true;');
cB.push('}');
}else{cB.push('old=computed=this.',this.$$store.runtime[name],';');
if(cD==="set"){cB.push('this.',this.$$store.user[name],'=value;');
}else if(cD==="reset"){cB.push('delete this.',this.$$store.user[name],';');
}else if(cD==="setThemed"){cB.push('this.',this.$$store.theme[name],'=value;');
}else if(cD==="resetThemed"){cB.push('delete this.',this.$$store.theme[name],';');
}else if(cD==="init"&&cE){cB.push('this.',this.$$store.init[name],'=value;');
}}cB.push('}');
cB.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cD==="set"){if(!cC.inheritable){cB.push('old=this.',this.$$store.user[name],';');
}cB.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cD==="reset"){if(!cC.inheritable){cB.push('old=this.',this.$$store.user[name],';');
}cB.push('delete this.',this.$$store.user[name],';');
cB.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cB.push('computed=this.',this.$$store.runtime[name],';');
cB.push('if(this.',this.$$store.theme[name],'!==undefined)');
cB.push('computed=this.',this.$$store.theme[name],';');
cB.push('else if(this.',this.$$store.init[name],'!==undefined){');
cB.push('computed=this.',this.$$store.init[name],';');
cB.push('this.',this.$$store.useinit[name],'=true;');
cB.push('}');
}else{if(cD==="setRuntime"){cB.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cC.inheritable){cB.push('computed=this.',this.$$store.user[name],';');
}else{cB.push('old=computed=this.',this.$$store.user[name],';');
}if(cD==="setThemed"){cB.push('this.',this.$$store.theme[name],'=value;');
}else if(cD==="resetThemed"){cB.push('delete this.',this.$$store.theme[name],';');
}else if(cD==="init"&&cE){cB.push('this.',this.$$store.init[name],'=value;');
}}cB.push('}');
if(cC.themeable){cB.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cC.inheritable){cB.push('old=this.',this.$$store.theme[name],';');
}
if(cD==="setRuntime"){cB.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cD==="set"){cB.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cD==="setThemed"){cB.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cD==="resetThemed"){cB.push('delete this.',this.$$store.theme[name],';');
cB.push('if(this.',this.$$store.init[name],'!==undefined){');
cB.push('computed=this.',this.$$store.init[name],';');
cB.push('this.',this.$$store.useinit[name],'=true;');
cB.push('}');
}else if(cD==="init"){if(cE){cB.push('this.',this.$$store.init[name],'=value;');
}cB.push('computed=this.',this.$$store.theme[name],';');
}else if(cD==="refresh"){cB.push('computed=this.',this.$$store.theme[name],';');
}cB.push('}');
}cB.push('else if(this.',this.$$store.useinit[name],'){');

if(!cC.inheritable){cB.push('old=this.',this.$$store.init[name],';');
}
if(cD==="init"){if(cE){cB.push('computed=this.',this.$$store.init[name],'=value;');
}else{cB.push('computed=this.',this.$$store.init[name],';');
}}else if(cD==="set"||cD==="setRuntime"||cD==="setThemed"||cD==="refresh"){cB.push('delete this.',this.$$store.useinit[name],';');

if(cD==="setRuntime"){cB.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cD==="set"){cB.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cD==="setThemed"){cB.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cD==="refresh"){cB.push('computed=this.',this.$$store.init[name],';');
}}cB.push('}');
if(cD==="set"||cD==="setRuntime"||cD==="setThemed"||cD==="init"){cB.push('else{');

if(cD==="setRuntime"){cB.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cD==="set"){cB.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cD==="setThemed"){cB.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cD==="init"){if(cE){cB.push('computed=this.',this.$$store.init[name],'=value;');
}else{cB.push('computed=this.',this.$$store.init[name],';');
}cB.push('this.',this.$$store.useinit[name],'=true;');
}cB.push('}');
}},__X:function(p,q,name,r){p.push('if(computed===undefined||computed===inherit){');

if(r==="refresh"){p.push('computed=value;');
}else{p.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}p.push('if((computed===undefined||computed===inherit)&&');
p.push('this.',this.$$store.init[name],'!==undefined&&');
p.push('this.',this.$$store.init[name],'!==inherit){');
p.push('computed=this.',this.$$store.init[name],';');
p.push('this.',this.$$store.useinit[name],'=true;');
p.push('}else{');
p.push('delete this.',this.$$store.useinit[name],';}');
p.push('}');
p.push('if(old===computed)return value;');
p.push('if(computed===inherit){');
p.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
p.push('}');
p.push('else if(computed===undefined)');
p.push('delete this.',this.$$store.inherit[name],';');
p.push('else this.',this.$$store.inherit[name],'=computed;');
p.push('var backup=computed;');
if(q.init!==undefined&&r!=="init"){p.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{p.push('if(old===undefined)old=null;');
}p.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(c,d,name,e){if(e!=="set"&&e!=="setRuntime"&&e!=="setThemed"){c.push('if(computed===undefined)computed=null;');
}c.push('if(old===computed)return value;');
if(d.init!==undefined&&e!=="init"){c.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{c.push('if(old===undefined)old=null;');
}},__ba:function(bT,bU,name){if(bU.apply){bT.push(bj,bU.apply,bz,name,bo);
}if(bU.event){bT.push(X,bt,bU.event,bu,bi,bU.event,bq,bn);
}},__bb:function(H,name){H.push(bc);
H.push(W,this.$$method.refresh[name],bp,this.$$method.refresh[name],bd);
H.push(bh);
}}});
})();
(function(){var d="$$hash",c="qx.core.ObjectRegistry";
qx.Bootstrap.define(c,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(k){var o=this.__bc;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__be;

if(m.length>0){n=m.pop();
}else{n=(this.__bd++).toString(36);
}k.$$hash=n;
}{};
o[n]=k;
},unregister:function(e){var f=e.$$hash;

if(f==null){return;
}var g=this.__bc;

if(g&&g[f]){delete g[f];
this.__be.push(f);
}try{delete e.$$hash;
}catch(y){if(e.removeAttribute){e.removeAttribute(d);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__be;

if(s.length>0){t=s.pop();
}else{t=(this.__bd++).toString(36);
}return r.$$hash=t;
},clearHashCode:function(p){{};
var q=p.$$hash;

if(q!=null){this.__be.push(q);
try{delete p.$$hash;
}catch(h){if(p.removeAttribute){p.removeAttribute(d);
}}}},fromHashCode:function(j){return this.__bc[j]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__bc;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(z){qx.log.Logger.error(this,"Could not dispose object "+u.toString()+": "+z);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var v="qx.Mixin",u=".prototype",t="constructor",s="[Mixin ",r="]",q="destruct",p="Mixin";
qx.Bootstrap.define(v,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,t);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+u);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,q);
}}else{var y={};
}y.$$type=p;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(a){var d=this.flatten(a);
var e=d.length;

if(e<2){return true;
}var h={};
var g={};
var f={};
var c;

for(var i=0;i<e;i++){c=d[i];

for(var b in c.events){if(f[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+f[b]+'" in member "'+b+'"!');
}f[b]=c.name;
}
for(var b in c.properties){if(h[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+h[b]+'" in property "'+b+'"!');
}h[b]=c.name;
}
for(var b in c.members){if(g[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+g[b]+'" in member "'+b+'"!');
}g[b]=c.name;
}}return true;
},isCompatible:function(m,n){var o=qx.Class.getMixins(n);
o.push(m);
return qx.Mixin.checkCompatibility(o);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(j){if(!j){return [];
}var k=j.concat();

for(var i=0,l=j.length;i<l;i++){if(j[i].$$includes){k.push.apply(k,this.flatten(j[i].$$includes));
}}return k;
},genericToString:function(){return s+this.name+r;
},$$registry:{},__bf:null,__bg:function(){}}});
})();
(function(){var f="qx.data.MBinding";
qx.Mixin.define(f,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(e){qx.data.SingleValueBinding.removeBindingFromObject(this,e);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Bootstrap.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(t,u,v){t.addEventListener(u,v,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(D,E,F){try{D.detachEvent(h+E,F);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(l,m,n){l.removeEventListener(m,n,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(o){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(p){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(q,r){if(document.createEventObject){var s=document.createEventObject();
return q.fireEvent(h+r,s);
}else{var s=document.createEvent(a);
s.initEvent(r,true,true);
return !q.dispatchEvent(s);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(j,k){return j.hasOwnProperty(h+k);
},"default":function(w,x){var y=h+x;
var z=(y in w);

if(!z){z=typeof w[y]==g;

if(!z&&w.setAttribute){w.setAttribute(y,c);
z=typeof w[y]==g;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var L="|bubble",K="|capture",J="|",I="_",H="unload",G="UNKNOWN_",F="__bl",E="DOM_",D="__bm",C="c",z="WIN_",B="capture",A="qx.event.Manager",y="QX_";
qx.Bootstrap.define(A,{construct:function(w,x){this.__bh=w;
this.__bi=qx.core.ObjectRegistry.toHashCode(w);
this.__bj=x;
if(w.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(w,H,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(w,H,arguments.callee);
self.dispose();
}));
}this.__bk={};
this.__bl={};
this.__bm={};
this.__bn={};
},statics:{__bo:0,getNextUniqueId:function(){return (this.__bo++).toString(36);
}},members:{__bj:null,__bk:null,__bm:null,__bp:null,__bl:null,__bn:null,__bh:null,__bi:null,getWindow:function(){return this.__bh;
},getWindowId:function(){return this.__bi;
},getHandler:function(bp){var bq=this.__bl[bp.classname];

if(bq){return bq;
}return this.__bl[bp.classname]=new bp(this);
},getDispatcher:function(bg){var bh=this.__bm[bg.classname];

if(bh){return bh;
}return this.__bm[bg.classname]=new bg(this,this.__bj);
},getListeners:function(bC,bD,bE){var bF=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);
var bH=this.__bk[bF];

if(!bH){return null;
}var bI=bD+(bE?K:L);
var bG=bH[bI];
return bG?bG.concat():null;
},serializeListeners:function(bW){var ce=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var cg=this.__bk[ce];
var cc=[];

if(cg){var ca,cf,bX,cb,cd;

for(var bY in cg){ca=bY.indexOf(J);
cf=bY.substring(0,ca);
bX=bY.charAt(ca+1)==C;
cb=cg[bY];

for(var i=0,l=cb.length;i<l;i++){cd=cb[i];
cc.push({self:cd.context,handler:cd.handler,type:cf,capture:bX});
}}}return cc;
},toggleAttachedEvents:function(W,X){var bd=W.$$hash||qx.core.ObjectRegistry.toHashCode(W);
var bf=this.__bk[bd];

if(bf){var ba,be,Y,bb;

for(var bc in bf){ba=bc.indexOf(J);
be=bc.substring(0,ba);
Y=bc.charCodeAt(ba+1)===99;
bb=bf[bc];

if(X){this.__bq(W,be,Y);
}else{this.__br(W,be,Y);
}}}},hasListener:function(p,q,r){{};
var s=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var u=this.__bk[s];

if(!u){return false;
}var v=q+(r?K:L);
var t=u[v];
return t&&t.length>0;
},importListeners:function(bJ,bK){{};
var bQ=bJ.$$hash||qx.core.ObjectRegistry.toHashCode(bJ);
var bR=this.__bk[bQ]={};
var bN=qx.event.Manager;

for(var bL in bK){var bO=bK[bL];
var bP=bO.type+(bO.capture?K:L);
var bM=bR[bP];

if(!bM){bM=bR[bP]=[];
this.__bq(bJ,bO.type,bO.capture);
}bM.push({handler:bO.listener,context:bO.self,unique:bO.unique||(bN.__bo++).toString(36)});
}},addListener:function(br,bs,bt,self,bu){var by;
{};
var bz=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bB=this.__bk[bz];

if(!bB){bB=this.__bk[bz]={};
}var bx=bs+(bu?K:L);
var bw=bB[bx];

if(!bw){bw=bB[bx]=[];
}if(bw.length===0){this.__bq(br,bs,bu);
}var bA=(qx.event.Manager.__bo++).toString(36);
var bv={handler:bt,context:self,unique:bA};
bw.push(bv);
return bx+J+bA;
},findHandler:function(a,b){var n=false,e=false,o=false;
var m;

if(a.nodeType===1){n=true;
m=E+a.tagName.toLowerCase()+I+b;
}else if(a==this.__bh){e=true;
m=z+b;
}else if(a.classname){o=true;
m=y+a.classname+I+b;
}else{m=G+a+I+b;
}var g=this.__bn;

if(g[m]){return g[m];
}var k=this.__bj.getHandlers();
var f=qx.event.IEventHandler;
var h,j,d,c;

for(var i=0,l=k.length;i<l;i++){h=k[i];
d=h.SUPPORTED_TYPES;

if(d&&!d[b]){continue;
}c=h.TARGET_CHECK;

if(c){if(!n&&c===f.TARGET_DOMNODE){continue;
}else if(!e&&c===f.TARGET_WINDOW){continue;
}else if(!o&&c===f.TARGET_OBJECT){continue;
}}j=this.getHandler(k[i]);

if(h.IGNORE_CAN_HANDLE||j.canHandleEvent(a,b)){g[m]=j;
return j;
}}return null;
},__bq:function(bS,bT,bU){var bV=this.findHandler(bS,bT);

if(bV){bV.registerEvent(bS,bT,bU);
return;
}{};
},removeListener:function(M,N,O,self,P){var T;
{};
var U=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var V=this.__bk[U];

if(!V){return false;
}var Q=N+(P?K:L);
var R=V[Q];

if(!R){return false;
}var S;

for(var i=0,l=R.length;i<l;i++){S=R[i];

if(S.handler===O&&S.context===self){qx.lang.Array.removeAt(R,i);

if(R.length==0){this.__br(M,N,P);
}return true;
}}return false;
},removeListenerById:function(cs,ct){var cz;
{};
var cx=ct.split(J);
var cC=cx[0];
var cu=cx[1].charCodeAt(0)==99;
var cB=cx[2];
var cA=cs.$$hash||qx.core.ObjectRegistry.toHashCode(cs);
var cD=this.__bk[cA];

if(!cD){return false;
}var cy=cC+(cu?K:L);
var cw=cD[cy];

if(!cw){return false;
}var cv;

for(var i=0,l=cw.length;i<l;i++){cv=cw[i];

if(cv.unique===cB){qx.lang.Array.removeAt(cw,i);

if(cw.length==0){this.__br(cs,cC,cu);
}return true;
}}return false;
},removeAllListeners:function(cl){var cp=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cr=this.__bk[cp];

if(!cr){return false;
}var cn,cq,cm;

for(var co in cr){if(cr[co].length>0){cn=co.split(J);
cq=cn[0];
cm=cn[1]===B;
this.__br(cl,cq,cm);
}}delete this.__bk[cp];
return true;
},__br:function(ch,ci,cj){var ck=this.findHandler(ch,ci);

if(ck){ck.unregisterEvent(ch,ci,cj);
return;
}{};
},dispatchEvent:function(bi,event){var bn;
{};
var bo=event.getType();

if(!event.getBubbles()&&!this.hasListener(bi,bo)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bi);
}var bm=this.__bj.getDispatchers();
var bl;
var bk=false;

for(var i=0,l=bm.length;i<l;i++){bl=this.getDispatcher(bm[i]);
if(bl.canDispatchEvent(bi,event,bo)){bl.dispatchEvent(bi,event,bo);
bk=true;
break;
}}
if(!bk){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bo+" on "+bi);
return true;
}var bj=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bj;
},dispose:function(){this.__bj.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,F);
qx.util.DisposeUtil.disposeMap(this,D);
this.__bk=this.__bh=this.__bp=null;
this.__bj=this.__bn=null;
}}});
})();
(function(){var n="qx.dom.Node",m="qx.client",l="";
qx.Bootstrap.define(n,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(b){return b.nodeType===
this.DOCUMENT?b:
b.ownerDocument||b.document;
},getWindow:qx.core.Variant.select(m,{"mshtml":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.parentWindow;
},"default":function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView;
}}),getDocumentElement:function(c){return this.getDocument(c).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(d){return !!(d&&d.nodeType!=null);
},isElement:function(h){return !!(h&&h.nodeType===this.ELEMENT);
},isDocument:function(p){return !!(p&&p.nodeType===this.DOCUMENT);
},isText:function(g){return !!(g&&g.nodeType===this.TEXT);
},isWindow:function(f){return !!(f&&f.history&&f.location&&f.document);
},isNodeName:function(s,t){if(!t||!s||!s.nodeName){return false;
}return t.toLowerCase()==qx.dom.Node.getName(s);
},getName:function(k){if(!k||!k.nodeName){return null;
}return k.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(l);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var R="mshtml",Q="qx.client",P="[object Array]",O="qx.lang.Array",N="qx",M="number",L="string";
qx.Bootstrap.define(O,{statics:{toArray:function(t,u){return this.cast(t,Array,u);
},cast:function(F,G,H){if(F.constructor===G){return F;
}
if(qx.Class.hasInterface(F,qx.data.IListData)){var F=F.toArray();
}var I=new G;
if(qx.core.Variant.isSet(Q,R)){if(F.item){for(var i=H||0,l=F.length;i<l;i++){I.push(F[i]);
}return I;
}}if(Object.prototype.toString.call(F)===P&&H==null){I.push.apply(I,F);
}else{I.push.apply(I,Array.prototype.slice.call(F,H||0));
}return I;
},fromArguments:function(J,K){return Array.prototype.slice.call(J,K||0);
},fromCollection:function(x){if(qx.core.Variant.isSet(Q,R)){if(x.item){var y=[];

for(var i=0,l=x.length;i<l;i++){y[i]=x[i];
}return y;
}}return Array.prototype.slice.call(x,0);
},fromShortHand:function(k){var n=k.length;
var m=qx.lang.Array.clone(k);
switch(n){case 1:m[1]=m[2]=m[3]=m[0];
break;
case 2:m[2]=m[0];
case 3:m[3]=m[1];
}return m;
},clone:function(j){return j.concat();
},insertAt:function(v,w,i){v.splice(i,0,w);
return v;
},insertBefore:function(a,b,c){var i=a.indexOf(c);

if(i==-1){a.push(b);
}else{a.splice(i,0,b);
}return a;
},insertAfter:function(p,q,r){var i=p.indexOf(r);

if(i==-1||i==(p.length-1)){p.push(q);
}else{p.splice(i+1,0,q);
}return p;
},removeAt:function(o,i){return o.splice(i,1)[0];
},removeAll:function(s){s.length=0;
return this;
},append:function(V,W){{};
Array.prototype.push.apply(V,W);
return V;
},exclude:function(B,C){{};

for(var i=0,E=C.length,D;i<E;i++){D=B.indexOf(C[i]);

if(D!=-1){B.splice(D,1);
}}return B;
},remove:function(z,A){var i=z.indexOf(A);

if(i!=-1){z.splice(i,1);
return A;
}},contains:function(g,h){return g.indexOf(h)!==-1;
},equals:function(T,U){var length=T.length;

if(length!==U.length){return false;
}
for(var i=0;i<length;i++){if(T[i]!==U[i]){return false;
}}return true;
},sum:function(Y){var ba=0;

for(var i=0,l=Y.length;i<l;i++){ba+=Y[i];
}return ba;
},max:function(d){{};
var i,f=d.length,e=d[0];

for(i=1;i<f;i++){if(d[i]>e){e=d[i];
}}return e===undefined?null:e;
},min:function(bb){{};
var i,bd=bb.length,bc=bb[0];

for(i=1;i<bd;i++){if(bb[i]<bc){bc=bb[i];
}}return bc===undefined?null:bc;
},unique:function(be){var bo=[],bg={},bj={},bl={};
var bk,bf=0;
var bp=N+qx.lang.Date.now();
var bh=false,bn=false,bq=false;
for(var i=0,bm=be.length;i<bm;i++){bk=be[i];
if(bk===null){if(!bh){bh=true;
bo.push(bk);
}}else if(bk===undefined){}else if(bk===false){if(!bn){bn=true;
bo.push(bk);
}}else if(bk===true){if(!bq){bq=true;
bo.push(bk);
}}else if(typeof bk===L){if(!bg[bk]){bg[bk]=1;
bo.push(bk);
}}else if(typeof bk===M){if(!bj[bk]){bj[bk]=1;
bo.push(bk);
}}else{bi=bk[bp];

if(bi==null){bi=bk[bp]=bf++;
}
if(!bl[bi]){bl[bi]=bk;
bo.push(bk);
}}}for(var bi in bl){try{delete bl[bi][bp];
}catch(X){try{bl[bi][bp]=null;
}catch(S){throw new Error("Cannot clean-up map entry doneObjects["+bi+"]["+bp+"]");
}}}return bo;
}}});
})();
(function(){var g="()",f=".",e=".prototype.",d='anonymous()',c="qx.lang.Function",b=".constructor()";
qx.Bootstrap.define(c,{statics:{getCaller:function(a){return a.caller?a.caller.callee:a.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+b;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+e+j+g;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+f+j+g;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+e+j+g;
}}for(var j in k){if(k[j]==h){return k.classname+f+j+g;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+g;
}return d;
},globalEval:function(z){if(window.execScript){return window.execScript(z);
}else{return eval.call(window,z);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(G,H){{};
if(!H){return G;
}if(!(H.self||H.args||H.delay!=null||H.periodical!=null||H.attempt)){return G;
}return function(event){{};
var D=qx.lang.Array.fromArguments(arguments);
if(H.args){D=H.args.concat(D);
}
if(H.delay||H.periodical){var C=qx.event.GlobalError.observeMethod(function(){return G.apply(H.self||this,D);
});

if(H.delay){return window.setTimeout(C,H.delay);
}
if(H.periodical){return window.setInterval(C,H.periodical);
}}else if(H.attempt){var E=false;

try{E=G.apply(H.self||this,D);
}catch(F){}return E;
}else{return G.apply(H.self||this,D);
}};
},bind:function(l,self,m){return this.create(l,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(n,o){return this.create(n,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(s,self,t){if(arguments.length<3){return function(event){return s.call(self||this,event||window.event);
};
}else{var u=qx.lang.Array.fromArguments(arguments,2);
return function(event){var v=[event||window.event];
v.push.apply(v,u);
s.apply(self||this,v);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(w,x,self,y){return this.create(w,{delay:x,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(p,q,self,r){return this.create(p,{periodical:q,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var J="qx.event.Registration";
qx.Bootstrap.define(J,{statics:{__bs:{},getManager:function(p){if(p==null){{};
p=window;
}else if(p.nodeType){p=qx.dom.Node.getWindow(p);
}else if(!qx.dom.Node.isWindow(p)){p=window;
}var r=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var q=this.__bs[r];

if(!q){q=new qx.event.Manager(p,this);
this.__bs[r]=q;
}return q;
},removeManager:function(H){var I=H.getWindowId();
delete this.__bs[I];
},addListener:function(K,L,M,self,N){return this.getManager(K).addListener(K,L,M,self,N);
},removeListener:function(c,d,e,self,f){return this.getManager(c).removeListener(c,d,e,self,f);
},removeListenerById:function(E,F){return this.getManager(E).removeListenerById(E,F);
},removeAllListeners:function(G){return this.getManager(G).removeAllListeners(G);
},hasListener:function(g,h,i){return this.getManager(g).hasListener(g,h,i);
},serializeListeners:function(w){return this.getManager(w).serializeListeners(w);
},createEvent:function(s,t,u){{};
if(t==null){t=qx.event.type.Event;
}var v=qx.event.Pool.getInstance().getObject(t);

if(!v){return;
}u?v.init.apply(v,u):v.init();
if(s){v.setType(s);
}return v;
},dispatchEvent:function(x,event){return this.getManager(x).dispatchEvent(x,event);
},fireEvent:function(y,z,A,B){var C;
{};
var D=this.createEvent(z,A||null,B);
return this.getManager(y).dispatchEvent(y,D);
},fireNonBubblingEvent:function(j,k,l,m){{};
var n=this.getManager(j);

if(!n.hasListener(j,k,false)){return true;
}var o=this.createEvent(k,l||null,m);
return n.dispatchEvent(j,o);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bt:[],addHandler:function(Q){{};
this.__bt.push(Q);
this.__bt.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bt;
},__bu:[],addDispatcher:function(O,P){{};
this.__bu.push(O);
this.__bu.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bu;
}}});
})();
(function(){var e="qx.log.appender.RingBuffer";
qx.Bootstrap.define(e,{construct:function(a){this.__bv=[];
this.setMaxMessages(a||50);
},members:{__bw:0,__bv:null,__bx:50,setMaxMessages:function(b){this.__bx=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bx;
},process:function(c){var d=this.getMaxMessages();

if(this.__bv.length<d){this.__bv.push(c);
}else{this.__bv[this.__bw++]=c;

if(this.__bw>=d){this.__bw=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__bv.length){f=this.__bv.length;
}
if(this.__bv.length==this.getMaxMessages()){var h=this.__bw-1;
}else{h=this.__bv.length-1;
}var g=h-f+1;

if(g<0){g+=this.__bv.length;
}var i;

if(g<=h){i=this.__bv.slice(g,h+1);
}else{i=this.__bv.slice(g,this.__bv.length).concat(this.__bv.slice(0,h+1));
}return i;
},clearHistory:function(){this.__bv=[];
this.__bw=0;
}}});
})();
(function(){var Y="node",X="error",W="...(+",V="array",U=")",T="info",S="instance",R="string",Q="null",P="class",bu="number",bt="stringify",bs="]",br="unknown",bq="function",bp="boolean",bo="debug",bn="map",bm="undefined",bl="qx.log.Logger",bg=")}",bh="#",be="warn",bf="document",bc="{...(",bd="[",ba="text[",bb="[...(",bi="\n",bj=")]",bk="object";
qx.Bootstrap.define(bl,{statics:{__by:bo,setLevel:function(k){this.__by=k;
},getLevel:function(){return this.__by;
},setTreshold:function(c){this.__bB.setMaxMessages(c);
},getTreshold:function(){return this.__bB.getMaxMessages();
},__bz:{},__bA:0,register:function(K){if(K.$$id){return;
}var L=this.__bA++;
this.__bz[L]=K;
K.$$id=L;
var M=this.__bB.getAllLogEvents();

for(var i=0,l=M.length;i<l;i++){K.process(M[i]);
}},unregister:function(m){var n=m.$$id;

if(n==null){return;
}delete this.__bz[n];
delete m.$$id;
},debug:function(d,e){this.__bD(bo,arguments);
},info:function(h,j){this.__bD(T,arguments);
},warn:function(a,b){this.__bD(be,arguments);
},error:function(f,g){this.__bD(X,arguments);
},trace:function(bI){this.__bD(T,[bI,qx.dev.StackTrace.getStackTrace().join(bi)]);
},deprecatedMethodWarning:function(E,F){var G;
{};
},deprecatedClassWarning:function(H,I){var J;
{};
},deprecatedEventWarning:function(B,event,C){var D;
{};
},deprecatedMixinWarning:function(o,p){var q;
{};
},deprecatedConstantWarning:function(bv,bw,bx){var self,by;
{};
},clear:function(){this.__bB.clearHistory();
},__bB:new qx.log.appender.RingBuffer(50),__bC:{debug:0,info:1,warn:2,error:3},__bD:function(r,s){var x=this.__bC;

if(x[r]<x[this.__by]){return;
}var u=s.length<2?null:s[0];
var w=u?1:0;
var t=[];

for(var i=w,l=s.length;i<l;i++){t.push(this.__bF(s[i],true));
}var y=new Date;
var z={time:y,offset:y-qx.Bootstrap.LOADSTART,level:r,items:t,win:window};
if(u){if(u instanceof qx.core.Object){z.object=u.$$hash;
}else if(u.$$type){z.clazz=u;
}}this.__bB.process(z);
var A=this.__bz;

for(var v in A){A[v].process(z);
}},__bE:function(N){if(N===undefined){return bm;
}else if(N===null){return Q;
}
if(N.$$type){return P;
}var O=typeof N;

if(O===bq||O==R||O===bu||O===bp){return O;
}else if(O===bk){if(N.nodeType){return Y;
}else if(N.classname){return S;
}else if(N instanceof Array){return V;
}else if(N instanceof Error){return X;
}else{return bn;
}}
if(N.toString){return bt;
}return br;
},__bF:function(bz,bA){var bH=this.__bE(bz);
var bD=br;
var bC=[];

switch(bH){case Q:case bm:bD=bH;
break;
case R:case bu:case bp:bD=bz;
break;
case Y:if(bz.nodeType===9){bD=bf;
}else if(bz.nodeType===3){bD=ba+bz.nodeValue+bs;
}else if(bz.nodeType===1){bD=bz.nodeName.toLowerCase();

if(bz.id){bD+=bh+bz.id;
}}else{bD=Y;
}break;
case bq:bD=qx.lang.Function.getName(bz)||bH;
break;
case S:bD=bz.basename+bd+bz.$$hash+bs;
break;
case P:case bt:bD=bz.toString();
break;
case X:bC=qx.dev.StackTrace.getStackTraceFromError(bz);
bD=bz.toString();
break;
case V:if(bA){bD=[];

for(var i=0,l=bz.length;i<l;i++){if(bD.length>20){bD.push(W+(l-i)+U);
break;
}bD.push(this.__bF(bz[i],false));
}}else{bD=bb+bz.length+bj;
}break;
case bn:if(bA){var bB;
var bG=[];

for(var bF in bz){bG.push(bF);
}bG.sort();
bD=[];

for(var i=0,l=bG.length;i<l;i++){if(bD.length>20){bD.push(W+(l-i)+U);
break;
}bF=bG[i];
bB=this.__bF(bz[bF],false);
bB.key=bF;
bD.push(bB);
}}else{var bE=0;

for(var bF in bz){bE++;
}bD=bc+bE+bg;
}break;
}return {type:bH,text:bD,trace:bC};
}}});
})();
(function(){var P="set",O="get",N="reset",M="qx.core.Object",L="]",K="[",J="$$user_",I="Don't use '_disposeFields' - instead assign directly to 'null'",H="Object";
qx.Class.define(M,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:H},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+K+this.$$hash+L;
},base:function(g,h){{};

if(arguments.length===1){return g.callee.base.call(this);
}else{return g.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(a){return a.callee.self;
},clone:function(){var bh=this.constructor;
var bg=new bh;
var bj=qx.Class.getProperties(bh);
var bi=qx.core.Property.$$store.user;
var bk=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bj.length;i<l;i++){name=bj[i];

if(this.hasOwnProperty(bi[name])){bg[bk[name]](this[bi[name]]);
}}return bg;
},set:function(k,m){var o=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(k)){if(!this[o[k]]){if(this[P+qx.lang.String.firstUp(k)]!=undefined){this[P+qx.lang.String.firstUp(k)](m);
return;
}{};
}return this[o[k]](m);
}else{for(var n in k){if(!this[o[n]]){if(this[P+qx.lang.String.firstUp(n)]!=undefined){this[P+qx.lang.String.firstUp(n)](k[n]);
continue;
}{};
}this[o[n]](k[n]);
}return this;
}},get:function(C){var D=qx.core.Property.$$method.get;

if(!this[D[C]]){if(this[O+qx.lang.String.firstUp(C)]!=undefined){return this[O+qx.lang.String.firstUp(C)]();
}{};
}return this[D[C]]();
},reset:function(S){var T=qx.core.Property.$$method.reset;

if(!this[T[S]]){if(this[N+qx.lang.String.firstUp(S)]!=undefined){this[N+qx.lang.String.firstUp(S)]();
return;
}{};
}this[T[S]]();
},__bG:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__bG.addListener(this,b,c,self,d);
}return null;
},addListenerOnce:function(y,z,self,A){var B=function(e){z.call(self||this,e);
this.removeListener(y,B,this,A);
};
return this.addListener(y,B,this,A);
},removeListener:function(ba,bb,self,bc){if(!this.$$disposed){return this.__bG.removeListener(this,ba,bb,self,bc);
}return false;
},removeListenerById:function(p){if(!this.$$disposed){return this.__bG.removeListenerById(this,p);
}return false;
},hasListener:function(V,W){return this.__bG.hasListener(this,V,W);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__bG.dispatchEvent(this,X);
}return true;
},fireEvent:function(E,F,G){if(!this.$$disposed){return this.__bG.fireEvent(this,E,F,G);
}return true;
},fireNonBubblingEvent:function(bd,be,bf){if(!this.$$disposed){return this.__bG.fireNonBubblingEvent(this,bd,be,bf);
}return true;
},fireDataEvent:function(q,r,s,t){if(!this.$$disposed){if(s===undefined){s=null;
}return this.__bG.fireNonBubblingEvent(this,q,qx.event.type.Data,[r,s,!!t]);
}return true;
},__bH:null,setUserData:function(w,x){if(!this.__bH){this.__bH={};
}this.__bH[w]=x;
},getUserData:function(Q){if(!this.__bH){return null;
}var R=this.__bH[Q];
return R===undefined?null:R;
},__bI:qx.log.Logger,debug:function(j){this.__bI.debug(this,j);
},info:function(u){this.__bI.info(this,u);
},warn:function(U){this.__bI.warn(this,U);
},error:function(Y){this.__bI.error(this,Y);
},trace:function(){this.__bI.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bz,bx;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var by=this.constructor;
var bw;

while(by.superclass){if(by.$$destructor){by.$$destructor.call(this);
}if(by.$$includes){bw=by.$$flatIncludes;

for(var i=0,l=bw.length;i<l;i++){if(bw[i].$$destructor){bw[i].$$destructor.call(this);
}}}by=by.superclass;
}var bA=qx.Class.getProperties(this.constructor);

for(var i=0,l=bA.length;i<l;i++){delete this[J+bA[i]];
}{};
},_disposeFields:function(bl){qx.log.Logger.deprecatedMethodWarning(arguments.callee,I);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bn){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bm){qx.util.DisposeUtil.disposeArray(this,bm);
},_disposeMap:function(v){qx.util.DisposeUtil.disposeMap(this,v);
}},settings:{"qx.disposerDebugLevel":0},defer:function(f){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bH=null;
var bq=this.constructor;
var bu;
var bv=qx.core.Property.$$store;
var bs=bv.user;
var bt=bv.theme;
var bo=bv.inherit;
var br=bv.useinit;
var bp=bv.init;

while(bq){bu=bq.$$properties;

if(bu){for(var name in bu){if(bu[name].dispose){this[bs[name]]=this[bt[name]]=this[bo[name]]=this[br[name]]=this[bp[name]]=undefined;
}}}bq=bq.superclass;
}}});
})();
(function(){var J="",I="g",H="0",G='\\$1',F="%",E='-',D="qx.lang.String",C=' ',B='\n',A="undefined";
qx.Bootstrap.define(D,{statics:{camelCase:function(Q){return Q.replace(/\-([a-z])/g,function(a,b){return b.toUpperCase();
});
},hyphenate:function(y){return y.replace(/[A-Z]/g,function(g){return (E+g.charAt(0).toLowerCase());
});
},capitalize:function(z){return z.replace(/\b[a-z]/g,function(P){return P.toUpperCase();
});
},clean:function(t){return this.trim(t.replace(/\s+/g,C));
},trimLeft:function(R){return R.replace(/^\s+/,J);
},trimRight:function(u){return u.replace(/\s+$/,J);
},trim:function(S){return S.replace(/^\s+|\s+$/g,J);
},startsWith:function(h,j){return h.indexOf(j)===0;
},endsWith:function(w,x){return w.substring(w.length-x.length,w.length)===x;
},repeat:function(N,O){return N.length>=0?new Array(O+1).join(N):J;
},pad:function(K,length,L){var M=length-K.length;

if(M>0){if(typeof L===A){L=H;
}return this.repeat(L,M)+K;
}else{return K;
}},firstUp:function(r){return r.charAt(0).toUpperCase()+r.substr(1);
},firstLow:function(c){return c.charAt(0).toLowerCase()+c.substr(1);
},contains:function(e,f){return e.indexOf(f)!=-1;
},format:function(k,l){var m=k;

for(var i=0;i<l.length;i++){m=m.replace(new RegExp(F+(i+1),I),l[i]);
}return m;
},escapeRegexpChars:function(s){return s.replace(/([.*+?^${}()|[\]\/\\])/g,G);
},toArray:function(v){return v.split(/\B|\b/g);
},stripTags:function(d){return d.replace(/<\/?[^>]+>/gi,J);
},stripScripts:function(n,o){var q=J;
var p=n.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){q+=arguments[1]+B;
return J;
});

if(o===true){qx.lang.Function.globalEval(q);
}return p;
}}});
})();
(function(){var s="function",r="Boolean",q="qx.Interface",p="]",o="toggle",n="Interface",m="is",k="[Interface ";
qx.Bootstrap.define(q,{statics:{define:function(name,v){if(v){if(v.extend&&!(v.extend instanceof Array)){v.extend=[v.extend];
}{};
var w=v.statics?v.statics:{};
if(v.extend){w.$$extends=v.extend;
}
if(v.properties){w.$$properties=v.properties;
}
if(v.members){w.$$members=v.members;
}
if(v.events){w.$$events=v.events;
}}else{var w={};
}w.$$type=n;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
qx.Interface.$$registry[name]=w;
return w;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(t){if(!t){return [];
}var u=t.concat();

for(var i=0,l=t.length;i<l;i++){if(t[i].$$extends){u.push.apply(u,this.flatten(t[i].$$extends));
}}return u;
},__bJ:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.lang.Type.isFunction(I[H])){var G=this.__bK(C,H);
var F=G||qx.lang.Type.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Class.hasInterface(C,D);

if(J){B[H]=this.__bN(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==s){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__bK:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.lang.String.firstLow(f[2]);
var d=qx.Class.hasProperty(a,c);

if(!d){return false;
}var e=f[0]==m||f[0]==o;

if(e){return qx.Class.getPropertyDefinition(a,c).check==r;
}return true;
},__bL:function(g,h){if(h.$$properties){for(var j in h.$$properties){if(!qx.Class.hasProperty(g,j)){throw new Error('The property "'+j+'" is not supported by Class "'+g.classname+'"!');
}}}},__bM:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Class.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__bJ(K,N,L,false);
this.__bL(N,L);
this.__bM(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(x,y,z){this.__bJ(x.prototype,x,y,z);
this.__bL(x,y);
this.__bM(x,y);
var A=y.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assert(x,A[i],z);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__bN:function(){},__bO:null,__bP:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__bQ:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bQ=null;
},getInsets:function(){if(this.__bQ){return this.__bQ;
}var j=this._getDefaultInsets();
return this.__bQ={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bQ=null;
}},destruct:function(){this.__bQ=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var z="_applyStyle",y="Color",x="px",w="solid",v="dotted",u="double",t="dashed",s="",r="_applyWidth",q="qx.ui.decoration.Uniform",n="px ",p=" ",o="scale",m="PositiveInteger",l="absolute";
qx.Class.define(q,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(i,j,k){arguments.callee.base.call(this);
if(i!=null){this.setWidth(i);
}
if(j!=null){this.setStyle(j);
}
if(k!=null){this.setColor(k);
}},properties:{width:{check:m,init:0,apply:r},style:{nullable:true,check:[w,v,t,u],init:w,apply:z},color:{nullable:true,check:y,apply:z},backgroundColor:{check:y,nullable:true,apply:z}},members:{__bR:null,_getDefaultInsets:function(){var A=this.getWidth();
return {top:A,right:A,bottom:A,left:A};
},_isInitialized:function(){return !!this.__bR;
},getMarkup:function(){if(this.__bR){return this.__bR;
}var B={position:l,top:0,left:0};
var C=this.getWidth();
{};
var E=qx.theme.manager.Color.getInstance();
B.border=C+n+this.getStyle()+p+E.resolve(this.getColor());
var D=this._generateBackgroundMarkup(B);
return this.__bR=D;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==o;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+x;
a.style.height=c+x;
},tint:function(f,g){var h=qx.theme.manager.Color.getInstance();

if(g==null){g=this.getBackgroundColor();
}f.style.backgroundColor=h.resolve(g)||s;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bR=null;
}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(j){arguments.callee.base.call(this);

if(j!=null){this.setBackgroundColor(j);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__bS:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bS;
},getMarkup:function(){if(this.__bS){return this.__bS;
}var k={position:d,top:0,left:0};
var l=this._generateBackgroundMarkup(k);
return this.__bS=l;
},resize:function(a,b,c){a.style.width=b+i;
a.style.height=c+i;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__bS=null;
}});
})();
(function(){var p="_applyStyle",o="solid",n="Color",m="double",l="px ",k="dotted",j="_applyWidth",i="dashed",h="Number",g=" ",L="shorthand",K="px",J="widthTop",I="styleRight",H="styleLeft",G="widthLeft",F="widthBottom",E="styleTop",D="colorBottom",C="styleBottom",w="widthRight",x="colorLeft",u="colorRight",v="colorTop",s="scale",t="border-top",q="border-left",r="border-right",y="qx.ui.decoration.Single",z="",B="border-bottom",A="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{widthTop:{check:h,init:0,apply:j},widthRight:{check:h,init:0,apply:j},widthBottom:{check:h,init:0,apply:j},widthLeft:{check:h,init:0,apply:j},styleTop:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleRight:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleBottom:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleLeft:{nullable:true,check:[o,k,i,m],init:o,apply:p},colorTop:{nullable:true,check:n,apply:p},colorRight:{nullable:true,check:n,apply:p},colorBottom:{nullable:true,check:n,apply:p},colorLeft:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p},left:{group:[G,H,x]},right:{group:[w,I,u]},top:{group:[J,E,v]},bottom:{group:[F,C,D]},width:{group:[J,w,F,G],mode:L},style:{group:[E,I,C,H],mode:L},color:{group:[v,u,D,x],mode:L}},members:{__bT:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bT;
},getMarkup:function(M){if(this.__bT){return this.__bT;
}var N=qx.theme.manager.Color.getInstance();
var O={};
var Q=this.getWidthTop();

if(Q>0){O[t]=Q+l+this.getStyleTop()+g+N.resolve(this.getColorTop());
}var Q=this.getWidthRight();

if(Q>0){O[r]=Q+l+this.getStyleRight()+g+N.resolve(this.getColorRight());
}var Q=this.getWidthBottom();

if(Q>0){O[B]=Q+l+this.getStyleBottom()+g+N.resolve(this.getColorBottom());
}var Q=this.getWidthLeft();

if(Q>0){O[q]=Q+l+this.getStyleLeft()+g+N.resolve(this.getColorLeft());
}{};
O.position=A;
O.top=0;
O.left=0;
var P=this._generateBackgroundMarkup(O);
return this.__bT=P;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==s;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+K;
R.style.height=T+K;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.style.backgroundColor=f.resolve(e)||z;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bT=null;
}});
})();
(function(){var s="px",r="0px",q="-1px",p="no-repeat",o="scale-x",n="scale-y",m="-tr",l="-l",k='</div>',j="scale",G="qx.client",F="-br",E="-t",D="-tl",C="-r",B='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="_applyBaseImage",z="-b",y="String",x="",v="-bl",w="-c",t="mshtml",u="qx.ui.decoration.Grid";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:y,nullable:true,apply:A}},members:{__bU:null,__bV:null,__bW:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bU;
},getMarkup:function(){if(this.__bU){return this.__bU;
}var f=qx.bom.element.Decoration;
var g=this.__bV;
var h=this.__bW;
var i=[];
i.push(B);
i.push(f.create(g.tl,p,{top:0,left:0}));
i.push(f.create(g.t,o,{top:0,left:h.left+s}));
i.push(f.create(g.tr,p,{top:0,right:0}));
i.push(f.create(g.bl,p,{bottom:0,left:0}));
i.push(f.create(g.b,o,{bottom:0,left:h.left+s}));
i.push(f.create(g.br,p,{bottom:0,right:0}));
i.push(f.create(g.l,n,{top:h.top+s,left:0}));
i.push(f.create(g.c,j,{top:h.top+s,left:h.left+s}));
i.push(f.create(g.r,n,{top:h.top+s,right:0}));
i.push(k);
return this.__bU=i.join(x);
},resize:function(J,K,L){var M=this.__bW;
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.style.width=K+s;
J.style.height=L+s;
J.childNodes[1].style.width=innerWidth+s;
J.childNodes[4].style.width=innerWidth+s;
J.childNodes[7].style.width=innerWidth+s;
J.childNodes[6].style.height=innerHeight+s;
J.childNodes[7].style.height=innerHeight+s;
J.childNodes[8].style.height=innerHeight+s;

if(qx.core.Variant.isSet(G,t)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(K%2==1){J.childNodes[2].style.marginRight=q;
J.childNodes[5].style.marginRight=q;
J.childNodes[8].style.marginRight=q;
}else{J.childNodes[2].style.marginRight=r;
J.childNodes[5].style.marginRight=r;
J.childNodes[8].style.marginRight=r;
}
if(L%2==1){J.childNodes[3].style.marginBottom=q;
J.childNodes[4].style.marginBottom=q;
J.childNodes[5].style.marginBottom=q;
}else{J.childNodes[3].style.marginBottom=r;
J.childNodes[4].style.marginBottom=r;
J.childNodes[5].style.marginBottom=r;
}}}},tint:function(c,d){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__bV={tl:R+D+Q,t:R+E+Q,tr:R+m+Q,bl:R+v+Q,b:R+z+Q,br:R+F+Q,l:R+l+Q,c:R+w+Q,r:R+C+Q};
this.__bW=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(e){return qx.util.AliasManager.getInstance().resolve(e);
},_computeEdgeSizes:function(H){var I=qx.util.ResourceManager.getInstance();
return {top:I.getImageHeight(H.t),bottom:I.getImageHeight(H.b),left:I.getImageWidth(H.l),right:I.getImageWidth(H.r)};
}},destruct:function(){this.__bU=this.__bV=this.__bW=null;
}});
})();
(function(){var C="_applyStyle",B='"></div>',A="Color",z="1px",y='<div style="',x='border:',w="1px solid ",v="",u=";",t="px",O='</div>',N="qx.ui.decoration.Beveled",M='<div style="position:absolute;top:1px;left:1px;',L='border-bottom:',K='border-right:',J='border-left:',I='border-top:',H="Number",G='<div style="position:absolute;top:1px;left:0px;',F='position:absolute;top:0px;left:1px;',D='<div style="overflow:hidden;font-size:0;line-height:0;">',E="absolute";
qx.Class.define(N,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setOuterColor(a);
}
if(b!=null){this.setInnerColor(b);
}
if(c!=null){this.setInnerOpacity(c);
}},properties:{innerColor:{check:A,nullable:true,apply:C},innerOpacity:{check:H,init:1,apply:C},outerColor:{check:A,nullable:true,apply:C},backgroundColor:{check:A,nullable:true,apply:C}},members:{__bX:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bX;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bX){return this.__bX;
}var d=qx.theme.manager.Color.getInstance();
var e=[];
var h=w+d.resolve(this.getOuterColor())+u;
var g=w+d.resolve(this.getInnerColor())+u;
e.push(D);
e.push(y);
e.push(x,h);
e.push(qx.bom.element.Opacity.compile(0.35));
e.push(B);
e.push(G);
e.push(J,h);
e.push(K,h);
e.push(B);
e.push(y);
e.push(F);
e.push(I,h);
e.push(L,h);
e.push(B);
var f={position:E,top:z,left:z};
e.push(this._generateBackgroundMarkup(f));
e.push(M);
e.push(x,g);
e.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
e.push(B);
e.push(O);
return this.__bX=e.join(v);
},resize:function(i,j,k){if(j<4){j=4;
}
if(k<4){k=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=j-2;
var outerHeight=k-2;
var q=outerWidth;
var p=outerHeight;
var innerWidth=j-4;
var innerHeight=k-4;
}else{var outerWidth=j;
var outerHeight=k;
var q=j-2;
var p=k-2;
var innerWidth=q;
var innerHeight=p;
}var s=t;
var o=i.childNodes[0].style;
o.width=outerWidth+s;
o.height=outerHeight+s;
var n=i.childNodes[1].style;
n.width=outerWidth+s;
n.height=p+s;
var m=i.childNodes[2].style;
m.width=q+s;
m.height=outerHeight+s;
var l=i.childNodes[3].style;
l.width=q+s;
l.height=p+s;
var r=i.childNodes[4].style;
r.width=innerWidth+s;
r.height=innerHeight+s;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||v;
}},destruct:function(){this.__bX=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var g="repeat-x",f="/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png",e="studentlife.theme.Decoration",d="/home/mike/git/tests/StudentLife/source/resource/studentlife/logo.png",c="/home/mike/git/tests/StudentLife/source/resource/studentlife/bg-adcontainer.png",b="/home/mike/git/tests/StudentLife/source/resource/studentlife/bg.png",a="/home/mike/git/tests/StudentLife/source/resource/studentlife/bg-menu.png";
qx.Theme.define(e,{extend:qx.theme.modern.Decoration,decorations:{"rootBackground":{decorator:qx.ui.decoration.Background,style:{backgroundImage:b,backgroundRepeat:g}},"logo":{decorator:qx.ui.decoration.Background,style:{backgroundImage:d}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{baseImage:f}},"ad-background":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:g}},"menu-background":{decorator:qx.ui.decoration.Single,style:{backgroundImage:a}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__bY:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__bY();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ca:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cb:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__ca){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__ca[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cb();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var c="Verdana",b="sans-serif",a="studentlife.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{"default":{size:11,lineHeight:1.3,family:[c,b]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var gb="button-frame",ga="atom",fY="widget",fX="main",fW="button",fV="text-selected",fU="image",fT="bold",fS="middle",fR="background-light",eE="text-disabled",eD="groupbox",eC="decoration/arrows/down.png",eB="cell",eA="selected",ez="border-invalid",ey="input",ex="input-disabled",ew="menu-button",ev="input-focused-invalid",gi="toolbar-button",gj="spinner",gg="input-focused",gh="popup",ge="tooltip",gf="list",gc="tree-item",gd="treevirtual-contract",gk="scrollbar",gl="datechooser/nav-button",fA="text-hovered",fz="center",fC="treevirtual-expand",fB="textfield",fE="label",fD="decoration/arrows/right.png",fG="background-application",fF="radiobutton",fy="white",fx="invalid",cz="combobox",cA="right-top",cB=".png",cC="checkbox",cD="text-title",cE="qx/static/blank.gif",cF="scrollbar/button",cG="right",cH="combobox/button",cI="icon/16/places/folder.png",gz="text-label",gy="decoration/tree/closed.png",gx="scrollbar-slider-horizontal",gw="decoration/arrows/left.png",gD="button-focused",gC="text-light",gB="menu-slidebar-button",gA="text-input",gF="slidebar/button-forward",gE="background-splitpane",dC="decoration/tree/open.png",dD="default",dA="decoration/arrows/down-small.png",dB="datechooser",dG="slidebar/button-backward",dH="selectbox",dE="treevirtual-folder",dF="shadow-popup",dy="icon/16/mimetypes/office-document.png",dz="background-medium",dd=".gif",dc="table",df="decoration/arrows/up.png",de="decoration/form/",cY="",cX="-invalid",db="icon/16/places/folder-open.png",da="button-checked",cW="decoration/window/maximize-active-hovered.png",cV="radiobutton-hovered",dN="decoration/cursors/",dO="slidebar",dP="tooltip-error-arrow",dQ="table-scroller-focus-indicator",dJ="move-frame",dK="nodrop",dL="decoration/table/boolean-true.png",dM="table-header-cell",dR="menu",dS="app-header",dr="row-layer",dq="text-inactive",dp="move",dn="radiobutton-checked-focused",dm="decoration/window/restore-active-hovered.png",dl="shadow-window",dk="table-column-button",dj="right.png",dv="tabview-page-button-bottom-inactive",du="tooltip-error",dT="window-statusbar",dU="button-hovered",dV="decoration/scrollbar/scrollbar-",dW="background-tip",dX="scrollbar-slider-horizontal-disabled",dY="table-scroller-header",ea="radiobutton-disabled",eb="button-pressed",ec="table-pane",ed="decoration/window/close-active.png",eM="native",eL="checkbox-hovered",eK="button-invalid-shadow",eJ="checkbox-checked",eQ="decoration/window/minimize-active-hovered.png",eP="menubar",eO="icon/16/actions/dialog-cancel.png",eN="tabview-page-button-top-inactive",eU="tabview-page-button-left-inactive",eT="menu-slidebar",fs="toolbar-button-checked",ft="decoration/tree/open-selected.png",fq="radiobutton-checked",fr="decoration/window/minimize-inactive.png",fo="icon/16/apps/office-calendar.png",fp="group",fm="tabview-page-button-right-inactive",fn="decoration/window/minimize-active.png",fu="decoration/window/restore-inactive.png",fv="checkbox-checked-focused",fK="splitpane",fJ="combobox/textfield",fM="button-preselected-focused",fL="decoration/window/close-active-hovered.png",fO="qx/icon/Tango/16/actions/window-close.png",fN="checkbox-pressed",fQ="button-disabled",fP="selected-dragover",fI="border-separator",fH="decoration/window/maximize-inactive.png",gs="dragover",gt="scrollarea",gu="scrollbar-vertical",gv="decoration/menu/checkbox-invert.gif",go="decoration/toolbar/toolbar-handle-knob.gif",gp="icon/22/mimetypes/office-document.png",gq="button-preselected",gr="button-checked-focused",gm="up.png",gn="best-fit",cy="decoration/tree/closed-selected.png",cx="qx.theme.modern.Appearance",cw="text-active",cv="checkbox-disabled",cu="toolbar-button-hovered",ct="progressive-table-header",cs="decoration/table/select-column-order.png",cr="decoration/menu/radiobutton.gif",cq="decoration/arrows/forward.png",cp="decoration/table/descending",cL="window-captionbar-active",cM="checkbox-checked-hovered",cJ="scrollbar-slider-vertical",cK="toolbar",cP="alias",cQ="decoration/window/restore-active.png",cN="decoration/table/boolean-false.png",cO="checkbox-checked-disabled",cS="icon/32/mimetypes/office-document.png",cT="radiobutton-checked-disabled",eY="tabview-pane",eS="decoration/arrows/rewind.png",fg="checkbox-focused",fc="top",eH="#EEE",eF="icon/16/actions/dialog-ok.png",dh="radiobutton-checked-hovered",eI="table-header-cell-hovered",dt="window",ds="text-gray",en="decoration/menu/radiobutton-invert.gif",eo="text-placeholder",ep="slider",eq="keep-align",er="down.png",es="tabview-page-button-top-active",et="icon/32/places/folder-open.png",eu="icon/22/places/folder.png",ek="decoration/window/maximize-active.png",el="checkbox-checked-pressed",eG="decoration/window/close-inactive.png",ff="tabview-page-button-left-active",fe="toolbar-part",fd="decoration/splitpane/knob-vertical.png",fk="icon/22/places/folder-open.png",fj="radiobutton-checked-pressed",fi="table-statusbar",fh="radiobutton-pressed",fb="window-captionbar-inactive",fa="copy",cR="radiobutton-focused",dx="decoration/arrows/down-invert.png",dw="decoration/menu/checkbox.gif",eR="decoration/splitpane/knob-horizontal.png",dI="decoration/table/ascending",eX="icon/32/places/folder.png",eW="toolbar-separator",eV="tabview-page-button-bottom-active",dg="decoration/arrows/up-small.png",fl="decoration/arrows/up-invert.png",cU="small",di="tabview-page-button-right-active",ee="-disabled",ef="scrollbar-horizontal",eg="progressive-table-header-cell",eh="menu-separator",ei="pane",ej="decoration/arrows/right-invert.png",fw="left.png",em="icon/16/actions/view-refresh.png";
qx.Theme.define(cx,{appearances:{"widget":{},"root":{style:function(hS){return {backgroundColor:fG,textColor:gz,font:dD};
}},"label":{style:function(E){return {textColor:E.disabled?eE:undefined};
}},"move-frame":{style:function(a){return {decorator:fX};
}},"resize-frame":dJ,"dragdrop-cursor":{style:function(g){var h=dK;

if(g.copy){h=fa;
}else if(g.move){h=dp;
}else if(g.alias){h=cP;
}return {source:dN+h+dd,position:cA,offset:[2,16,2,6]};
}},"image":{style:function(hE){return {opacity:!hE.replacement&&hE.disabled?0.3:1};
}},"atom":{},"atom/label":fE,"atom/icon":fU,"popup":{style:function(D){return {decorator:fX,backgroundColor:fR,shadow:dF};
}},"button-frame":{alias:ga,style:function(A){var C,B;

if(A.checked&&A.focused&&!A.inner){C=gr;
B=undefined;
}else if(A.disabled){C=fQ;
B=undefined;
}else if(A.pressed){C=eb;
B=fA;
}else if(A.checked){C=da;
B=undefined;
}else if(A.hovered){C=dU;
B=fA;
}else if(A.preselected&&A.focused&&!A.inner){C=fM;
B=fA;
}else if(A.preselected){C=gq;
B=fA;
}else if(A.focused&&!A.inner){C=gD;
B=undefined;
}else{C=fW;
B=undefined;
}return {decorator:C,textColor:B,shadow:A.invalid&&!A.disabled?eK:undefined};
}},"button-frame/image":{style:function(by){return {opacity:!by.replacement&&by.disabled?0.5:1};
}},"button":{alias:gb,include:gb,style:function(bH){return {padding:[2,8],center:true};
}},"hover-button":{alias:ga,include:ga,style:function(gK){return {decorator:gK.hovered?eA:undefined,textColor:gK.hovered?fV:undefined};
}},"splitbutton":{},"splitbutton/button":fW,"splitbutton/arrow":{alias:fW,include:fW,style:function(bb){return {icon:eC,padding:2,marginLeft:1};
}},"checkbox":{alias:ga,style:function(p){var r;

if(p.checked&&p.focused){r=fv;
}else if(p.checked&&p.disabled){r=cO;
}else if(p.checked&&p.pressed){r=el;
}else if(p.checked&&p.hovered){r=cM;
}else if(p.checked){r=eJ;
}else if(p.disabled){r=cv;
}else if(p.focused){r=fg;
}else if(p.pressed){r=fN;
}else if(p.hovered){r=eL;
}else{r=cC;
}var q=p.invalid&&!p.disabled?cX:cY;
return {icon:de+r+q+cB,gap:6};
}},"radiobutton":{alias:ga,style:function(ht){var hv;

if(ht.checked&&ht.focused){hv=dn;
}else if(ht.checked&&ht.disabled){hv=cT;
}else if(ht.checked&&ht.pressed){hv=fj;
}else if(ht.checked&&ht.hovered){hv=dh;
}else if(ht.checked){hv=fq;
}else if(ht.disabled){hv=ea;
}else if(ht.focused){hv=cR;
}else if(ht.pressed){hv=fh;
}else if(ht.hovered){hv=cV;
}else{hv=fF;
}var hu=ht.invalid&&!ht.disabled?cX:cY;
return {icon:de+hv+hu+cB,gap:6};
}},"textfield":{style:function(bQ){var bV;
var bT=!!bQ.focused;
var bU=!!bQ.invalid;
var bR=!!bQ.disabled;

if(bT&&bU&&!bR){bV=ev;
}else if(bT&&!bU&&!bR){bV=gg;
}else if(bR){bV=ex;
}else if(!bT&&bU&&!bR){bV=ez;
}else{bV=ey;
}var bS;

if(bQ.disabled){bS=eE;
}else if(bQ.showingPlaceholder){bS=eo;
}else{bS=gA;
}return {decorator:bV,padding:[2,4,1],textColor:bS};
}},"textarea":{include:fB,style:function(I){return {padding:4};
}},"spinner":{style:function(s){var w;
var u=!!s.focused;
var v=!!s.invalid;
var t=!!s.disabled;

if(u&&v&&!t){w=ev;
}else if(u&&!v&&!t){w=gg;
}else if(t){w=ex;
}else if(!u&&v&&!t){w=ez;
}else{w=ey;
}return {decorator:w};
}},"spinner/textfield":{style:function(hz){return {marginRight:2,padding:[2,4,1],textColor:hz.disabled?eE:gA};
}},"spinner/upbutton":{alias:gb,include:gb,style:function(bw){return {icon:dg,padding:bw.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gb,include:gb,style:function(bm){return {icon:dA,padding:bm.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cz,"datefield/button":{alias:cH,include:cH,style:function(ic){return {icon:fo,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fJ,"datefield/list":{alias:dB,include:dB,style:function(hB){return {decorator:undefined};
}},"groupbox":{style:function(hQ){return {legendPosition:fc};
}},"groupbox/legend":{alias:ga,style:function(ig){return {padding:[1,0,1,4],textColor:ig.invalid?fx:cD,font:fT};
}},"groupbox/frame":{style:function(hR){return {padding:12,decorator:fp};
}},"check-groupbox":eD,"check-groupbox/legend":{alias:cC,include:cC,style:function(L){return {padding:[1,0,1,4],textColor:L.invalid?fx:cD,font:fT};
}},"radio-groupbox":eD,"radio-groupbox/legend":{alias:fF,include:fF,style:function(i){return {padding:[1,0,1,4],textColor:i.invalid?fx:cD,font:fT};
}},"scrollarea":{style:function(hJ){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bK){return {backgroundColor:fG};
}},"scrollarea/pane":fY,"scrollarea/scrollbar-x":gk,"scrollarea/scrollbar-y":gk,"scrollbar":{style:function(K){if(K[eM]){return {};
}return {width:K.horizontal?undefined:16,height:K.horizontal?16:undefined,decorator:K.horizontal?ef:gu,padding:1};
}},"scrollbar/slider":{alias:ep,style:function(bE){return {padding:bE.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gb,style:function(bo){var bp=bo.horizontal?gx:cJ;

if(bo.disabled){bp+=ee;
}return {decorator:bp,minHeight:bo.horizontal?undefined:9,minWidth:bo.horizontal?9:undefined};
}},"scrollbar/button":{alias:gb,include:gb,style:function(F){var G=dV;

if(F.left){G+=fw;
}else if(F.right){G+=dj;
}else if(F.up){G+=gm;
}else{G+=er;
}
if(F.left||F.right){return {padding:[0,0,0,F.left?3:4],icon:G,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:G,width:14,height:15};
}}},"scrollbar/button-begin":cF,"scrollbar/button-end":cF,"slider":{style:function(hm){var hq;
var ho=!!hm.focused;
var hp=!!hm.invalid;
var hn=!!hm.disabled;

if(ho&&hp&&!hn){hq=ev;
}else if(ho&&!hp&&!hn){hq=gg;
}else if(hn){hq=ex;
}else if(!ho&&hp&&!hn){hq=ez;
}else{hq=ey;
}return {decorator:hq};
}},"slider/knob":{include:gb,style:function(hc){return {decorator:hc.disabled?dX:gx,shadow:undefined,height:14,width:14};
}},"list":{alias:gt,style:function(bg){var bk;
var bi=!!bg.focused;
var bj=!!bg.invalid;
var bh=!!bg.disabled;

if(bi&&bj&&!bh){bk=ev;
}else if(bi&&!bj&&!bh){bk=gg;
}else if(bh){bk=ex;
}else if(!bi&&bj&&!bh){bk=ez;
}else{bk=ey;
}return {backgroundColor:fR,decorator:bk};
}},"list/pane":fY,"listitem":{alias:ga,style:function(bX){var bY;

if(bX.dragover){bY=bX.selected?fP:gs;
}else{bY=bX.selected?eA:undefined;
}return {padding:bX.dragover?[4,4,2,4]:4,textColor:bX.selected?fV:undefined,decorator:bY};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gb,include:gb,style:function(hd){return {padding:5,center:true,icon:hd.vertical?eC:fD};
}},"slidebar/button-backward":{alias:gb,include:gb,style:function(N){return {padding:5,center:true,icon:N.vertical?df:gw};
}},"tabview":{style:function(bD){return {contentPadding:16};
}},"tabview/bar":{alias:dO,style:function(bB){var bC={marginBottom:bB.barTop?-1:0,marginTop:bB.barBottom?-4:0,marginLeft:bB.barRight?-3:0,marginRight:bB.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bB.barTop||bB.barBottom){bC.paddingLeft=5;
bC.paddingRight=7;
}else{bC.paddingTop=5;
bC.paddingBottom=7;
}return bC;
}},"tabview/bar/button-forward":{include:gF,alias:gF,style:function(cm){if(cm.barTop||cm.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dG,alias:dG,style:function(hA){if(hA.barTop||hA.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bM){return {decorator:eY,minHeight:100,marginBottom:bM.barBottom?-1:0,marginTop:bM.barTop?-1:0,marginLeft:bM.barLeft?-1:0,marginRight:bM.barRight?-1:0};
}},"tabview-page":fY,"tabview-page/button":{alias:ga,style:function(T){var ba,V=0;
var Y=0,U=0,W=0,X=0;

if(T.checked){if(T.barTop){ba=es;
V=[6,14];
W=T.firstTab?0:-5;
X=T.lastTab?0:-5;
}else if(T.barBottom){ba=eV;
V=[6,14];
W=T.firstTab?0:-5;
X=T.lastTab?0:-5;
}else if(T.barRight){ba=di;
V=[6,13];
Y=T.firstTab?0:-5;
U=T.lastTab?0:-5;
}else{ba=ff;
V=[6,13];
Y=T.firstTab?0:-5;
U=T.lastTab?0:-5;
}}else{if(T.barTop){ba=eN;
V=[4,10];
Y=4;
W=T.firstTab?5:1;
X=1;
}else if(T.barBottom){ba=dv;
V=[4,10];
U=4;
W=T.firstTab?5:1;
X=1;
}else if(T.barRight){ba=fm;
V=[4,10];
X=5;
Y=T.firstTab?5:1;
U=1;
W=1;
}else{ba=eU;
V=[4,10];
W=5;
Y=T.firstTab?5:1;
U=1;
X=1;
}}return {zIndex:T.checked?10:5,decorator:ba,padding:V,marginTop:Y,marginBottom:U,marginLeft:W,marginRight:X,textColor:T.checked?cw:dq};
}},"tabview-page/button/close-button":{alias:ga,style:function(cj){return {icon:fO};
}},"toolbar":{style:function(bu){return {decorator:cK,spacing:2};
}},"toolbar/part":{style:function(gU){return {decorator:fe,spacing:2};
}},"toolbar/part/container":{style:function(hk){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bq){return {source:go,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:ga,style:function(bG){return {marginTop:2,marginBottom:2,padding:(bG.pressed||bG.checked||bG.hovered)&&!bG.disabled||(bG.disabled&&bG.checked)?3:5,decorator:bG.pressed||(bG.checked&&!bG.hovered)||(bG.checked&&bG.disabled)?fs:bG.hovered&&!bG.disabled?cu:undefined};
}},"toolbar-menubutton":{alias:gi,include:gi,style:function(id){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fU,include:fU,style:function(bA){return {source:dA};
}},"toolbar-splitbutton":{style:function(bv){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gi,include:gi,style:function(hw){return {icon:eC,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gi,include:gi,style:function(bx){return {padding:bx.pressed||bx.checked?1:bx.hovered?1:3,icon:eC,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(bP){return {decorator:eW,margin:7};
}},"tree":gf,"tree-item":{style:function(hW){return {padding:[2,6],textColor:hW.selected?fV:undefined,decorator:hW.selected?eA:undefined};
}},"tree-item/icon":{include:fU,style:function(P){return {paddingRight:5};
}},"tree-item/label":fE,"tree-item/open":{include:fU,style:function(bN){var bO;

if(bN.selected&&bN.opened){bO=ft;
}else if(bN.selected&&!bN.opened){bO=cy;
}else if(bN.opened){bO=dC;
}else{bO=gy;
}return {padding:[0,5,0,2],source:bO};
}},"tree-folder":{include:gc,alias:gc,style:function(hU){var hV;

if(hU.small){hV=hU.opened?db:cI;
}else if(hU.large){hV=hU.opened?et:eX;
}else{hV=hU.opened?fk:eu;
}return {icon:hV};
}},"tree-file":{include:gc,alias:gc,style:function(cn){return {icon:cn.small?dy:cn.large?cS:gp};
}},"treevirtual":dc,"treevirtual-folder":{style:function(gI){return {icon:gI.opened?db:cI};
}},"treevirtual-file":{include:dE,alias:dE,style:function(m){return {icon:dy};
}},"treevirtual-line":{style:function(bW){return {icon:cE};
}},"treevirtual-contract":{style:function(O){return {icon:dC,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bF){return {icon:gy,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gd,"treevirtual-only-expand":fC,"treevirtual-start-contract":gd,"treevirtual-start-expand":fC,"treevirtual-end-contract":gd,"treevirtual-end-expand":fC,"treevirtual-cross-contract":gd,"treevirtual-cross-expand":fC,"treevirtual-end":{style:function(H){return {icon:cE};
}},"treevirtual-cross":{style:function(M){return {icon:cE};
}},"tooltip":{include:gh,style:function(ck){return {backgroundColor:dW,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":ga,"tooltip-error":{include:ge,style:function(z){return {textColor:fV,placeMethod:fY,offset:[0,0,0,14],marginTop:-2,position:cA,showTimeout:100,hideTimeout:10000,decorator:du,shadow:dP,font:fT};
}},"tooltip-error/atom":ga,"window":{style:function(R){return {shadow:dl,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(ci){return {decorator:dt};
}},"window/captionbar":{style:function(ih){return {decorator:ih.active?cL:fb,textColor:ih.active?fy:ds,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(n){return {margin:[5,0,3,6]};
}},"window/title":{style:function(j){return {alignY:fS,font:fT,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:ga,style:function(hI){return {icon:hI.active?hI.hovered?eQ:fn:fr,margin:[4,8,2,0]};
}},"window/restore-button":{alias:ga,style:function(hT){return {icon:hT.active?hT.hovered?dm:cQ:fu,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:ga,style:function(f){return {icon:f.active?f.hovered?cW:ek:fH,margin:[4,8,2,0]};
}},"window/close-button":{alias:ga,style:function(o){return {icon:o.active?o.hovered?fL:ed:eG,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(hg){return {padding:[2,6],decorator:dT,minHeight:18};
}},"window/statusbar-text":{style:function(hF){return {font:cU};
}},"iframe":{style:function(bz){return {decorator:fX};
}},"resizer":{style:function(gW){return {decorator:ei};
}},"splitpane":{style:function(gV){return {decorator:fK};
}},"splitpane/splitter":{style:function(hY){return {width:hY.horizontal?3:undefined,height:hY.vertical?3:undefined,backgroundColor:gE};
}},"splitpane/splitter/knob":{style:function(hO){return {source:hO.horizontal?eR:fd};
}},"splitpane/slider":{style:function(bn){return {width:bn.horizontal?3:undefined,height:bn.vertical?3:undefined,backgroundColor:gE};
}},"selectbox":{alias:gb,include:gb,style:function(co){return {padding:[2,8]};
}},"selectbox/atom":ga,"selectbox/popup":gh,"selectbox/list":{alias:gf},"selectbox/arrow":{include:fU,style:function(k){return {source:eC,paddingLeft:5};
}},"datechooser":{style:function(ca){var ce;
var cc=!!ca.focused;
var cd=!!ca.invalid;
var cb=!!ca.disabled;

if(cc&&cd&&!cb){ce=ev;
}else if(cc&&!cd&&!cb){ce=gg;
}else if(cb){ce=ex;
}else if(!cc&&cd&&!cb){ce=ez;
}else{ce=ey;
}return {padding:2,decorator:ce,backgroundColor:fR};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gb,alias:gb,style:function(x){var y={padding:[2,4],shadow:undefined};

if(x.lastYear){y.icon=eS;
y.marginRight=1;
}else if(x.lastMonth){y.icon=gw;
}else if(x.nextYear){y.icon=cq;
y.marginLeft=1;
}else if(x.nextMonth){y.icon=fD;
}return y;
}},"datechooser/last-year-button-tooltip":ge,"datechooser/last-month-button-tooltip":ge,"datechooser/next-year-button-tooltip":ge,"datechooser/next-month-button-tooltip":ge,"datechooser/last-year-button":gl,"datechooser/last-month-button":gl,"datechooser/next-month-button":gl,"datechooser/next-year-button":gl,"datechooser/month-year-label":{style:function(ie){return {font:fT,textAlign:fz,textColor:ie.disabled?eE:undefined};
}},"datechooser/date-pane":{style:function(gG){return {textColor:gG.disabled?eE:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hG){return {textColor:hG.disabled?eE:hG.weekend?gC:undefined,textAlign:fz,paddingTop:2,backgroundColor:dz};
}},"datechooser/week":{style:function(ib){return {textAlign:fz,padding:[2,4],backgroundColor:dz};
}},"datechooser/day":{style:function(bl){return {textAlign:fz,decorator:bl.disabled?undefined:bl.selected?eA:undefined,textColor:bl.disabled?eE:bl.selected?fV:bl.otherMonth?gC:undefined,font:bl.today?fT:undefined,padding:[2,4]};
}},"combobox":{style:function(gP){var gT;
var gR=!!gP.focused;
var gS=!!gP.invalid;
var gQ=!!gP.disabled;

if(gR&&gS&&!gQ){gT=ev;
}else if(gR&&!gS&&!gQ){gT=gg;
}else if(gQ){gT=ex;
}else if(!gR&&gS&&!gQ){gT=ez;
}else{gT=ey;
}return {decorator:gT};
}},"combobox/popup":gh,"combobox/list":{alias:gf},"combobox/button":{include:gb,alias:gb,style:function(hr){var hs={icon:eC,padding:2};

if(hr.selected){hs.decorator=gD;
}return hs;
}},"combobox/textfield":{include:fB,style:function(ia){return {decorator:undefined};
}},"menu":{style:function(bI){var bJ={decorator:dR,shadow:dF,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:bI.submenu||bI.contextmenu?gn:eq};

if(bI.submenu){bJ.position=cA;
bJ.offset=[-2,-3];
}return bJ;
}},"menu/slidebar":eT,"menu-slidebar":fY,"menu-slidebar-button":{style:function(d){return {decorator:d.hovered?eA:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gB,style:function(J){return {icon:J.hovered?fl:df};
}},"menu-slidebar/button-forward":{include:gB,style:function(hK){return {icon:hK.hovered?dx:eC};
}},"menu-separator":{style:function(gY){return {height:0,decorator:eh,margin:[4,2]};
}},"menu-button":{alias:ga,style:function(hD){return {decorator:hD.selected?eA:undefined,textColor:hD.selected?fV:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fU,style:function(gJ){return {alignY:fS};
}},"menu-button/label":{include:fE,style:function(cf){return {alignY:fS,padding:1};
}},"menu-button/shortcut":{include:fE,style:function(hf){return {alignY:fS,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:fU,style:function(hh){return {source:hh.selected?ej:fD,alignY:fS};
}},"menu-checkbox":{alias:ew,include:ew,style:function(hX){return {icon:!hX.checked?undefined:hX.selected?gv:dw};
}},"menu-radiobutton":{alias:ew,include:ew,style:function(gN){return {icon:!gN.checked?undefined:gN.selected?en:cr};
}},"menubar":{style:function(hP){return {decorator:eP};
}},"menubar-button":{alias:ga,style:function(bL){return {decorator:bL.pressed||bL.hovered?eA:undefined,textColor:bL.pressed||bL.hovered?fV:undefined,padding:[3,8]};
}},"colorselector":fY,"colorselector/control-bar":fY,"colorselector/control-pane":fY,"colorselector/visual-pane":eD,"colorselector/preset-grid":fY,"colorselector/colorbucket":{style:function(hb){return {decorator:fX,width:16,height:16};
}},"colorselector/preset-field-set":eD,"colorselector/input-field-set":eD,"colorselector/preview-field-set":eD,"colorselector/hex-field-composite":fY,"colorselector/hex-field":fB,"colorselector/rgb-spinner-composite":fY,"colorselector/rgb-spinner-red":gj,"colorselector/rgb-spinner-green":gj,"colorselector/rgb-spinner-blue":gj,"colorselector/hsb-spinner-composite":fY,"colorselector/hsb-spinner-hue":gj,"colorselector/hsb-spinner-saturation":gj,"colorselector/hsb-spinner-brightness":gj,"colorselector/preview-content-old":{style:function(b){return {decorator:fX,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gL){return {decorator:fX,backgroundColor:fR,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ha){return {decorator:fX,margin:5};
}},"colorselector/brightness-field":{style:function(gM){return {decorator:fX,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fY,"colorselector/hue-saturation-handle":fY,"colorselector/brightness-pane":fY,"colorselector/brightness-handle":fY,"colorpopup":{alias:gh,include:gh,style:function(hH){return {padding:5,backgroundColor:fG};
}},"colorpopup/field":{style:function(be){return {decorator:fX,margin:2,width:14,height:14,backgroundColor:fR};
}},"colorpopup/selector-button":fW,"colorpopup/auto-button":fW,"colorpopup/preview-pane":eD,"colorpopup/current-preview":{style:function(e){return {height:20,padding:4,marginLeft:4,decorator:fX,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hx){return {height:20,padding:4,marginRight:4,decorator:fX,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fW,include:fW,style:function(bc){return {icon:eF};
}},"colorpopup/colorselector-cancelbutton":{alias:fW,include:fW,style:function(hy){return {icon:eO};
}},"table":{alias:fY,style:function(cl){return {decorator:dc};
}},"table-header":{},"table/statusbar":{style:function(cg){return {decorator:fi,padding:[0,2]};
}},"table/column-button":{alias:gb,style:function(hj){return {decorator:dk,padding:3,icon:cs};
}},"table-column-reset-button":{include:ew,alias:ew,style:function(){return {icon:em};
}},"table-scroller":fY,"table-scroller/scrollbar-x":gk,"table-scroller/scrollbar-y":gk,"table-scroller/header":{style:function(l){return {decorator:dY};
}},"table-scroller/pane":{style:function(c){return {backgroundColor:ec};
}},"table-scroller/focus-indicator":{style:function(hC){return {decorator:dQ};
}},"table-scroller/resize-line":{style:function(S){return {backgroundColor:fI,width:2};
}},"table-header-cell":{alias:ga,style:function(br){var bs=qx.bom.client.Engine.MSHTML?dd:cB;
return {minWidth:13,minHeight:20,padding:br.hovered?[3,4,2,4]:[3,4],decorator:br.hovered?eI:dM,sortIcon:br.sorted?(br.sortedAscending?dI+bs:cp+bs):undefined};
}},"table-header-cell/label":{style:function(he){return {minWidth:0,alignY:fS,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bf){return {alignY:fS,alignX:cG};
}},"table-header-cell/icon":{style:function(gX){return {minWidth:0,alignY:fS,paddingRight:5};
}},"table-editor-textfield":{include:fB,style:function(hM){return {decorator:undefined,padding:[2,2],backgroundColor:fR};
}},"table-editor-selectbox":{include:dH,alias:dH,style:function(hL){return {padding:[0,2],backgroundColor:fR};
}},"table-editor-combobox":{include:cz,alias:cz,style:function(gH){return {decorator:undefined,backgroundColor:fR};
}},"progressive-table-header":{alias:fY,style:function(Q){return {decorator:ct};
}},"progressive-table-header-cell":{alias:ga,style:function(hN){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:eg};
}},"app-header":{style:function(hl){return {font:fT,textColor:fV,padding:[8,12],decorator:dS};
}},"virtual-list":gf,"virtual-list/row-layer":dr,"row-layer":{style:function(bd){return {colorEven:fy,colorOdd:eH};
}},"column-layer":fY,"cell":{style:function(ch){return {textColor:ch.selected?fV:gz,padding:[3,6],font:dD};
}},"cell-string":eB,"cell-number":{include:eB,style:function(hi){return {textAlign:cG};
}},"cell-image":eB,"cell-boolean":{include:eB,style:function(gO){return {iconTrue:dL,iconFalse:cN};
}},"cell-atom":eB,"cell-date":eB,"cell-html":eB,"htmlarea":{"include":fY,style:function(bt){return {backgroundColor:fy};
}}}});
})();
(function(){var a="studentlife.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="studentlife.theme.Theme";
qx.Theme.define(a,{meta:{color:studentlife.theme.Color,decoration:studentlife.theme.Decoration,font:studentlife.theme.Font,icon:qx.theme.icon.Tango,appearance:studentlife.theme.Appearance}});
})();
(function(){var v="emulated",u="native",t='"',s="qx.lang.Core",r="\\\\",q="\\\"",p="[object Error]";
qx.Bootstrap.define(s,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==p)?v:u,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?u:v,{"native":Array.prototype.indexOf,"emulated":function(f,g){if(g==null){g=0;
}else if(g<0){g=Math.max(0,this.length+g);
}
for(var i=g;i<this.length;i++){if(this[i]===f){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?u:v,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?u:v,{"native":Array.prototype.forEach,"emulated":function(h,j){var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){h.call(j||window,k,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?u:v,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?u:v,{"native":Array.prototype.map,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){y[i]=w.call(x||window,z,i,this);
}}return y;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?u:v,{"native":Array.prototype.some,"emulated":function(m,n){var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){if(m.call(n||window,o,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?u:v,{"native":Array.prototype.every,"emulated":function(c,d){var l=this.length;

for(var i=0;i<l;i++){var e=this[i];

if(e!==undefined){if(!c.call(d||window,e,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?u:v,{"native":String.prototype.quote,"emulated":function(){return t+this.replace(/\\/g,r).replace(/\"/g,q)+t;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__cc:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cd:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ce:function(){var J=qx.lang.Generics.__cc;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cd(L,M);
}}}}},defer:function(Q){Q.__ce();
}});
})();
(function(){var i="qx.event.type.Data",h="qx.event.type.Event",g="qx.data.IListData";
qx.Interface.define(g,{events:{"change":i,"changeLength":h},members:{getItem:function(f){},setItem:function(d,e){},splice:function(a,b,c){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(e,f){this.__cf=e||null;
this.__cg=f||window;

if(qx.core.Setting.get(c)===b){if(e&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__ch,this);
}
if(!e&&window.onerror){window.onerror=null;
}}},__ch:function(j,k,l){if(this.__cf){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(h){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__cf){return h.apply(this,arguments);
}
try{return h.apply(this,arguments);
}catch(i){self.handleError(i);
}};
}else{return h;
}},handleError:function(g){if(this.__cf){this.__cf.call(this.__cg,g);
}}},defer:function(d){qx.core.Setting.define(c,b);
d.setErrorHandler(null,null);
}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Class.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__ci=a;
this.__cj=b||e;
this.__ck=c===undefined?-1:c;
},members:{__ci:null,__cj:null,__ck:null,toString:function(){return this.__ci;
},getUri:function(){return this.__cj;
},getLineNumber:function(){return this.__ck;
}}});
})();
(function(){var m="qx.event.type.Event";
qx.Class.define(m,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(l){this._target=l;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(g){this._currentTarget=g;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(c){this._bubbles=c;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(h){this._cancelable=h;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cl:null,__cm:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__cl=b;
this.__cm=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__cl=this.__cl;
f.__cm=this.__cm;
return f;
},getData:function(){return this.__cl;
},getOldData:function(){return this.__cm;
}},destruct:function(){this.__cl=this.__cm=null;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var y="ready",x="qx.client",w="mshtml",v="load",u="unload",t="qx.event.handler.Application",s="complete",r="gecko|opera|webkit",q="left",p="DOMContentLoaded",o="shutdown";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this._window=n.getWindow();
this.__cn=false;
this.__co=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__cp:false,onScriptLoaded:function(){this.__cp=true;
var m=qx.event.handler.Application.$$instance;

if(m){m.__cs();
}}},members:{canHandleEvent:function(d,f){},registerEvent:function(j,k,l){},unregisterEvent:function(a,b,c){},__cq:null,__cn:null,__co:null,__cr:null,__cs:function(){var g=qx.event.handler.Application;
if(!this.__cq&&this.__cn&&g.__cp){if(qx.core.Variant.isSet(x,w)){if(qx.event.Registration.hasListener(this._window,y)){this.__cq=true;
qx.event.Registration.fireEvent(this._window,y);
}}else{this.__cq=true;
qx.event.Registration.fireEvent(this._window,y);
}}},isApplicationReady:function(){return this.__cq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==s){this.__cn=true;
this.__cs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(x,r)){qx.bom.Event.addNativeListener(this._window,p,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(x,w)){var self=this;
var h=function(){try{document.documentElement.doScroll(q);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(h,100);
}};
h();
}qx.bom.Event.addNativeListener(this._window,v,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,u,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,v,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,u,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cn=true;
this.__cs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cr){this.__cr=true;

try{qx.event.Registration.fireEvent(this._window,o);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Bootstrap.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(ba){var F=this.getStackTraceFromError(ba);
qx.lang.Array.removeAt(F,0);
var D=this.getStackTraceFromCaller(arguments);
var B=D.length>F.length?D:F;

for(var i=0;i<Math.min(D.length,F.length);i++){var C=D[i];

if(C.indexOf(g)>=0){continue;
}var J=C.split(j);

if(J.length!=2){continue;
}var H=J[0];
var A=J[1];
var z=F[i];
var K=z.split(j);
var G=K[0];
var y=K[1];

if(qx.Class.getByName(G)){var E=G;
}else{E=H;
}var I=E+j;

if(A){I+=A+j;
}I+=y;
B[i]=I;
}return B;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var k;

try{k.bar();
}catch(S){var l=this.getStackTraceFromError(S);
qx.lang.Array.removeAt(l,0);
return l;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(bb){return [];
},"default":function(T){var Y=[];
var X=qx.lang.Function.getCaller(T);
var U={};

while(X){var V=qx.lang.Function.getName(X);
Y.push(V);

try{X=X.caller;
}catch(q){break;
}
if(!X){break;
}var W=qx.core.ObjectRegistry.toHashCode(X);

if(U[W]){Y.push(f);
break;
}U[W]=X;
}return Y;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(r){if(!r.stack){return [];
}var x=/@(.+):(\d+)$/gm;
var s;
var t=[];

while((s=x.exec(r.stack))!=null){var u=s[1];
var w=s[2];
var v=this.__ct(u);
t.push(v+j+w);
}return t;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__ct(bc.sourceURL)+j+bc.line];
}else{return [];
}},"opera":function(L){if(L.message.indexOf("Backtrace:")<0){return [];
}var N=[];
var O=qx.lang.String.trim(L.message.split("Backtrace:")[1]);
var P=O.split(c);

for(var i=0;i<P.length;i++){var M=P[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(M&&M.length>=2){var R=M[1];
var Q=this.__ct(M[2]);
N.push(Q+j+R);
}}return N;
},"default":function(){return [];
}}),__ct:function(m){var p=b;
var n=m.indexOf(p);
var o=(n==-1)?m:m.substring(n+p.length).replace(/\//g,a).replace(/\.js$/,d);
return o;
}}});
})();
(function(){var h="qx.util.ObjectPool",g="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__cu={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:g,init:Infinity}},members:{__cu:null,getObject:function(k){if(this.$$disposed){return;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__cu[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(d){if(!this.__cu){return;
}var e=d.classname;
var f=this.__cu[e];

if(d.$$pooled){throw new Error("Object is already pooled: "+d);
}
if(!f){this.__cu[e]=f=[];
}if(f.length>this.getSize()){if(d.destroy){d.destroy();
}else{d.dispose();
}return;
}d.$$pooled=true;
f.push(d);
}},destruct:function(){var c=this.__cu;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__cu;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var t="Don't use 'disposeFields' - instead assign directly to 'null'",s="qx.util.DisposeUtil";
qx.Class.define(s,{statics:{disposeFields:function(q,r){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
var name;

for(var i=0,l=r.length;i<l;i++){var name=r[i];

if(q[name]==null||!q.hasOwnProperty(name)){continue;
}q[name]=null;
}},disposeObjects:function(j,k){var name;

for(var i=0,l=k.length;i<l;i++){name=k[i];

if(j[name]==null||!j.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(j[name].dispose){j[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}j[name]=null;
}},disposeArray:function(m,n){var p=m[n];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{var o;

for(var i=p.length-1;i>=0;i--){o=p[i];

if(o){o.dispose();
}}}catch(h){throw new Error("The array field: "+n+" of object: "+m+" has non disposable entries: "+h);
}p.length=0;
m[n]=null;
},disposeMap:function(d,e){var f=d[e];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){d[e]=null;
return;
}try{for(var g in f){if(f.hasOwnProperty(g)){f[g].dispose();
}}}catch(u){throw new Error("The map field: "+e+" of object: "+d+" has non disposable entries: "+u);
}d[e]=null;
},disposeTriggeredBy:function(a,b){var c=b.dispose;
b.dispose=function(){c.call(b);
a.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",B="deepBinding",A="item",z="reset",y="' (",x="Boolean",w=") to the object '",v="Integer",u="qx.data.SingleValueBinding",t="No event could be found for the property",s="Binding from '",q="PositiveNumber",r="PositiveInteger",o="Binding does not exist!",p=").",n="Date";
qx.Class.define(u,{statics:{DEBUG_ON:false,__cv:{},bind:function(cx,cy,cz,cA,cB){var cL=this.__cx(cx,cy,cz,cA,cB);
var cG=cy.split(d);
var cD=this.__cE(cG);
var cK=[];
var cH=[];
var cI=[];
var cE=[];
var cF=cx;
for(var i=0;i<cG.length;i++){if(cD[i]!==l){cE.push(g);
}else{cE.push(this.__cz(cF,cG[i]));
}cK[i]=cF;
if(i==cG.length-1){if(cD[i]!==l){var cO=cD[i]===h?cF.length-1:cD[i];
var cC=cF.getItem(cO);
this.__cD(cC,cz,cA,cB,cx);
cI[i]=this.__cF(cF,cE[i],cz,cA,cB,cD[i]);
}else{if(cG[i]!=null&&cF[m+qx.lang.String.firstUp(cG[i])]!=null){var cC=cF[m+qx.lang.String.firstUp(cG[i])]();
this.__cD(cC,cz,cA,cB,cx);
}cI[i]=this.__cF(cF,cE[i],cz,cA,cB);
}}else{var cM={index:i,propertyNames:cG,sources:cK,listenerIds:cI,arrayIndexValues:cD,targetObject:cz,targetPropertyChain:cA,options:cB,listeners:cH};
var cJ=qx.lang.Function.bind(this.__cw,this,cM);
cH.push(cJ);
cI[i]=cF.addListener(cE[i],cJ);
}if(cF[m+qx.lang.String.firstUp(cG[i])]==null){cF=null;
}else if(cD[i]!==l){cF=cF[m+qx.lang.String.firstUp(cG[i])](cD[i]);
}else{cF=cF[m+qx.lang.String.firstUp(cG[i])]();
}
if(!cF){break;
}}var cN={type:B,listenerIds:cI,sources:cK,targetListenerIds:cL.listenerIds,targets:cL.targets};
this.__cG(cN,cx,cy,cz,cA);
return cN;
},__cw:function(bN){if(bN.options&&bN.options.onUpdate){bN.options.onUpdate(bN.sources[bN.index],bN.targetObject);
}for(var j=bN.index+1;j<bN.propertyNames.length;j++){var bR=bN.sources[j];
bN.sources[j]=null;

if(!bR){continue;
}bR.removeListenerById(bN.listenerIds[j]);
}var bR=bN.sources[bN.index];
for(var j=bN.index+1;j<bN.propertyNames.length;j++){if(bN.arrayIndexValues[j-1]!==l){bR=bR[m+qx.lang.String.firstUp(bN.propertyNames[j-1])](bN.arrayIndexValues[j-1]);
}else{bR=bR[m+qx.lang.String.firstUp(bN.propertyNames[j-1])]();
}bN.sources[j]=bR;
if(!bR){this.__cA(bN.targetObject,bN.targetPropertyChain);
break;
}if(j==bN.propertyNames.length-1){if(qx.Class.implementsInterface(bR,qx.data.IListData)){var bS=bN.arrayIndexValues[j]===h?bR.length-1:bN.arrayIndexValues[j];
var bP=bR.getItem(bS);
this.__cD(bP,bN.targetObject,bN.targetPropertyChain,bN.options,bN.sources[bN.index]);
bN.listenerIds[j]=this.__cF(bR,g,bN.targetObject,bN.targetPropertyChain,bN.options,bN.arrayIndexValues[j]);
}else{if(bN.propertyNames[j]!=null&&bR[m+qx.lang.String.firstUp(bN.propertyNames[j])]!=null){var bP=bR[m+qx.lang.String.firstUp(bN.propertyNames[j])]();
this.__cD(bP,bN.targetObject,bN.targetPropertyChain,bN.options,bN.sources[bN.index]);
}var bQ=this.__cz(bR,bN.propertyNames[j]);
bN.listenerIds[j]=this.__cF(bR,bQ,bN.targetObject,bN.targetPropertyChain,bN.options);
}}else{if(bN.listeners[j]==null){var bO=qx.lang.Function.bind(this.__cw,this,bN);
bN.listeners.push(bO);
}if(qx.Class.implementsInterface(bR,qx.data.IListData)){var bQ=g;
}else{var bQ=this.__cz(bR,bN.propertyNames[j]);
}bN.listenerIds[j]=bR.addListener(bQ,bN.listeners[j]);
}}},__cx:function(bf,bg,bh,bi,bj){var bn=bi.split(d);
var bl=this.__cE(bn);
var bs=[];
var br=[];
var bp=[];
var bo=[];
var bm=bh;
for(var i=0;i<bn.length-1;i++){if(bl[i]!==l){bo.push(g);
}else{try{bo.push(this.__cz(bm,bn[i]));
}catch(e){break;
}}bs[i]=bm;
var bq=function(){for(var j=i+1;j<bn.length-1;j++){var ck=bs[j];
bs[j]=null;

if(!ck){continue;
}ck.removeListenerById(bp[j]);
}var ck=bs[i];
for(var j=i+1;j<bn.length-1;j++){var ci=qx.lang.String.firstUp(bn[j-1]);
if(bl[j-1]!==l){var cl=bl[j-1]===h?ck.getLength()-1:bl[j-1];
ck=ck[m+ci](cl);
}else{ck=ck[m+ci]();
}bs[j]=ck;
if(br[j]==null){br.push(bq);
}if(qx.Class.implementsInterface(ck,qx.data.IListData)){var cj=g;
}else{try{var cj=qx.data.SingleValueBinding.__cz(ck,bn[j]);
}catch(e){break;
}}bp[j]=ck.addListener(cj,br[j]);
}qx.data.SingleValueBinding.__cy(bf,bg,bh,bi);
};
br.push(bq);
bp[i]=bm.addListener(bo[i],bq);
var bk=qx.lang.String.firstUp(bn[i]);
if(bm[m+bk]==null){bm=null;
}else if(bl[i]!==l){bm=bm[m+bk](bl[i]);
}else{bm=bm[m+bk]();
}
if(!bm){break;
}}return {listenerIds:bp,targets:bs};
},__cy:function(bB,bC,bD,bE){var bI=this.__cC(bB,bC);

if(bI!=null){var bK=bC.substring(bC.lastIndexOf(d)+1,bC.length);
if(bK.charAt(bK.length-1)==f){var bF=bK.substring(bK.lastIndexOf(k)+1,bK.length-1);
var bH=bK.substring(0,bK.lastIndexOf(k));
var bJ=bI[m+qx.lang.String.firstUp(bH)]();

if(bF==h){bF=bJ.length-1;
}
if(bJ!=null){var bG=bJ.getItem(bF);
}}else{var bG=bI[m+qx.lang.String.firstUp(bK)]();
}}this.__cB(bD,bE,bG);
},__cz:function(C,D){var E=this.__cI(C,D);
if(E==null){if(qx.Class.supportsEvent(C.constructor,D)){E=D;
}else if(qx.Class.supportsEvent(C.constructor,g+qx.lang.String.firstUp(D))){E=g+qx.lang.String.firstUp(D);
}else{throw new qx.core.AssertionError(t,D);
}}return E;
},__cA:function(cT,cU){var cV=this.__cC(cT,cU);

if(cV!=null){var cW=cU.substring(cU.lastIndexOf(d)+1,cU.length);
if(cW.charAt(cW.length-1)==f){this.__cB(cT,cU,null);
return;
}if(cV[z+qx.lang.String.firstUp(cW)]!=undefined){cV[z+qx.lang.String.firstUp(cW)]();
}else{cV[a+qx.lang.String.firstUp(cW)](null);
}}},__cB:function(bt,bu,bv){var bz=this.__cC(bt,bu);

if(bz!=null){var bA=bu.substring(bu.lastIndexOf(d)+1,bu.length);
if(bA.charAt(bA.length-1)==f){var bw=bA.substring(bA.lastIndexOf(k)+1,bA.length-1);
var by=bA.substring(0,bA.lastIndexOf(k));
var bx=bz[m+qx.lang.String.firstUp(by)]();

if(bw==h){bw=bx.length-1;
}
if(bx!=null){bx.setItem(bw,bv);
}}else{bz[a+qx.lang.String.firstUp(bA)](bv);
}}},__cC:function(cm,cn){var cq=cn.split(d);
var cr=cm;
for(var i=0;i<cq.length-1;i++){try{var cp=cq[i];
if(cp.indexOf(f)==cp.length-1){var co=cp.substring(cp.indexOf(k)+1,cp.length-1);
cp=cp.substring(0,cp.indexOf(k));
}cr=cr[m+qx.lang.String.firstUp(cp)]();

if(co!=null){if(co==h){co=cr.length-1;
}cr=cr.getItem(co);
co=null;
}}catch(U){return null;
}}return cr;
},__cD:function(cs,ct,cu,cv,cw){cs=this.__cH(cs,ct,cu,cv);
if(cs==null){this.__cA(ct,cu);
}if(cs!=undefined){try{this.__cB(ct,cu,cs);
if(cv&&cv.onUpdate){cv.onUpdate(cw,ct,cs);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cv&&cv.onSetFail){cv.onSetFail(e);
}else{this.warn("Failed so set value "+cs+" on "+ct+". Error message: "+e);
}}}},__cE:function(cX){var cY=[];
for(var i=0;i<cX.length;i++){var name=cX[i];
if(qx.lang.String.endsWith(name,f)){var da=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(da!==h){if(da==l||isNaN(parseInt(da))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cX[i]=name.substring(0,name.indexOf(k));
cY[i]=l;
cY[i+1]=da;
cX.splice(i+1,0,A);
i++;
}else{cY[i]=da;
cX.splice(i,1,A);
}}else{cY[i]=l;
}}return cY;
},__cF:function(bT,bU,bV,bW,bX,bY){var ca;
{};
var cc=function(bb,e){if(bb!==l){if(bb===h){bb=bT.length-1;
}var be=bT.getItem(bb);
if(be==undefined){qx.data.SingleValueBinding.__cA(bV,bW);
}var bc=e.getData().start;
var bd=e.getData().end;

if(bb<bc||bb>bd){return;
}}else{var be=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bT+" by "+bU+" to "+bV+" ("+bW+")");
qx.log.Logger.debug("Data before conversion: "+be);
}be=qx.data.SingleValueBinding.__cH(be,bV,bW,bX);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+be);
}try{if(be!=undefined){qx.data.SingleValueBinding.__cB(bV,bW,be);
}else{qx.data.SingleValueBinding.__cA(bV,bW);
}if(bX&&bX.onUpdate){bX.onUpdate(bT,bV,be);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bX&&bX.onSetFail){bX.onSetFail(e);
}else{this.warn("Failed so set value "+be+" on "+bV+". Error message: "+e);
}}};
if(!bY){bY=l;
}cc=qx.lang.Function.bind(cc,bT,bY);
var cb=bT.addListener(bU,cc);
return cb;
},__cG:function(V,W,X,Y,ba){if(this.__cv[W.toHashCode()]===undefined){this.__cv[W.toHashCode()]=[];
}this.__cv[W.toHashCode()].push([V,W,X,Y,ba]);
},__cH:function(I,J,K,L){if(L&&L.converter){var N;

if(J.getModel){N=J.getModel();
}return L.converter(I,N);
}else{var P=this.__cC(J,K);
var Q=K.substring(K.lastIndexOf(d)+1,K.length);
if(P==null){return I;
}var O=qx.Class.getPropertyDefinition(P.constructor,Q);
var M=O==null?l:O.check;
return this.__cJ(I,M);
}},__cI:function(db,dc){var dd=qx.Class.getPropertyDefinition(db.constructor,dc);

if(dd==null){return null;
}return dd.event;
},__cJ:function(R,S){var T=qx.lang.Type.getClass(R);
if((T==c||T==b)&&(S==v||S==r)){R=parseInt(R);
}if((T==x||T==c||T==n)&&S==b){R=R+l;
}if((T==c||T==b)&&(S==c||S==q)){R=parseFloat(R);
}return R;
},removeBindingFromObject:function(F,G){if(G.type==B){for(var i=0;i<G.sources.length;i++){if(G.sources[i]){G.sources[i].removeListenerById(G.listenerIds[i]);
}}for(var i=0;i<G.targets.length;i++){if(G.targets[i]){G.targets[i].removeListenerById(G.targetListenerIds[i]);
}}}else{F.removeListenerById(G);
}var H=this.__cv[F.toHashCode()];
if(H!=undefined){for(var i=0;i<H.length;i++){if(H[i][0]==G){qx.lang.Array.remove(H,H[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cR){{};
var cS=this.__cv[cR.toHashCode()];

if(cS!=undefined){for(var i=cS.length-1;i>=0;i--){this.removeBindingFromObject(cR,cS[i][0]);
}}},getAllBindingsForObject:function(ch){if(this.__cv[ch.toHashCode()]===undefined){this.__cv[ch.toHashCode()]=[];
}return this.__cv[ch.toHashCode()];
},removeAllBindings:function(){for(var cQ in this.__cv){var cP=qx.core.ObjectRegistry.fromHashCode(cQ);
if(cP==null){delete this.__cv[cQ];
continue;
}this.removeAllBindingsForObject(cP);
}this.__cv={};
},getAllBindings:function(){return this.__cv;
},showBindingInLog:function(cd,ce){var cg;
for(var i=0;i<this.__cv[cd.toHashCode()].length;i++){if(this.__cv[cd.toHashCode()][i][0]==ce){cg=this.__cv[cd.toHashCode()][i];
break;
}}
if(cg===undefined){var cf=o;
}else{var cf=s+cg[1]+y+cg[2]+w+cg[3]+y+cg[4]+p;
}qx.log.Logger.debug(cf);
},showAllBindingsInLog:function(){for(var bM in this.__cv){var bL=qx.core.ObjectRegistry.fromHashCode(bM);

for(var i=0;i<this.__cv[bM].length;i++){this.showBindingInLog(bL,this.__cv[bM][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cK=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cK:null,message:null,getComment:function(){return this.__cK;
},toString:function(){return this.__cK+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cL=qx.dev.StackTrace.getStackTrace();
},members:{__cL:null,getStackTrace:function(){return this.__cL;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var j="qx.event.handler.Object";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(d,e){return qx.Class.supportsEvent(d.constructor,e);
},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var q="/",p="0",o="qx/static",n="http://",m="https://",l="file://",k="qx.util.AliasManager",j="singleton",i=".",h="static";
qx.Class.define(k,{type:j,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cM={};
this.add(h,o);
},members:{__cM:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===q||r.charAt(0)===i||r.indexOf(n)===0||r.indexOf(m)===p||r.indexOf(l)===0){u[r]=false;
return r;
}
if(this.__cM[r]){return this.__cM[r];
}var t=r.substring(0,r.indexOf(q));
var s=this.__cM[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(b,c){this.__cM[b]=c;
var e=this._getDynamic();
for(var d in e){if(d.substring(0,d.indexOf(q))===b){e[d]=c+d.substring(b.length);
}}},remove:function(a){delete this.__cM[a];
},resolve:function(f){var g=this._getDynamic();

if(f!==null){f=this._preprocess(f);
}return g[f]||f;
}},destruct:function(){this.__cM=null;
}});
})();
(function(){var bq="px",bp="qx.client",bo="div",bn="img",bm="",bl="scale-x",bk="mshtml",bj="no-repeat",bi="scale",bh="scale-y",bK="qx/icon",bJ="repeat",bI=".png",bH="crop",bG="webkit",bF="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bE='<div style="',bD="repeat-y",bC='<img src="',bB="qx.bom.element.Decoration",bx="', sizingMethod='",by="png",bv="')",bw='"/>',bt='" style="',bu="none",br=" ",bs="repeat-x",bz='"></div>',bA="absolute";
qx.Class.define(bB,{statics:{DEBUG:false,__cN:{},__cO:qx.core.Variant.isSet(bp,bk),__cP:qx.core.Variant.select(bp,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cQ:{"scale-x":bn,"scale-y":bn,"scale":bn,"repeat":bo,"no-repeat":bo,"repeat-x":bo,"repeat-y":bo},update:function(bQ,bR,bS,bT){var bV=this.getTagName(bS,bR);

if(bV!=bQ.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bW=this.getAttributes(bR,bS,bT);

if(bV===bn){bQ.src=bW.src;
}if(bQ.style.backgroundPosition!=bm&&bW.style.backgroundPosition===undefined){bW.style.backgroundPosition=null;
}if(bQ.style.clip!=bm&&bW.style.clip===undefined){bW.style.clip=null;
}var bU=qx.bom.element.Style;
bU.setStyles(bQ,bW.style);
},create:function(S,T,U){var V=this.getTagName(T,S);
var X=this.getAttributes(S,T,U);
var W=qx.bom.element.Style.compile(X.style);

if(V===bn){return bC+X.src+bt+W+bw;
}else{return bE+W+bz;
}},getTagName:function(f,g){if(qx.core.Variant.isSet(bp,bk)){if(g&&this.__cO&&this.__cP[f]&&qx.lang.String.endsWith(g,bI)){return bo;
}}return this.__cQ[f];
},getAttributes:function(a,b,c){if(!c){c={};
}
if(!c.position){c.position=bA;
}
if(qx.core.Variant.isSet(bp,bk)){c.fontSize=0;
c.lineHeight=0;
}else if(qx.core.Variant.isSet(bp,bG)){c.WebkitUserDrag=bu;
}var e=qx.util.ResourceManager.getInstance().getImageFormat(a)||qx.io.ImageLoader.getFormat(a);
{};
var d;
if(this.__cO&&this.__cP[b]&&e===by){d=this.__cT(c,b,a);
}else{if(b===bi){d=this.__cU(c,b,a);
}else if(b===bl||b===bh){d=this.__cV(c,b,a);
}else{d=this.__cY(c,b,a);
}}return d;
},__cR:function(P,Q,R){if(P.width==null&&Q!=null){P.width=Q+bq;
}
if(P.height==null&&R!=null){P.height=R+bq;
}return P;
},__cS:function(E){var F=qx.util.ResourceManager.getInstance().getImageWidth(E)||qx.io.ImageLoader.getWidth(E);
var G=qx.util.ResourceManager.getInstance().getImageHeight(E)||qx.io.ImageLoader.getHeight(E);
return {width:F,height:G};
},__cT:function(ba,bb,bc){var bf=this.__cS(bc);
ba=this.__cR(ba,bf.width,bf.height);
var be=bb==bj?bH:bi;
var bd=bF+qx.util.ResourceManager.getInstance().toUri(bc)+bx+be+bv;
ba.filter=bd;
ba.backgroundImage=ba.backgroundRepeat=bm;
return {style:ba};
},__cU:function(bL,bM,bN){var bO=qx.util.ResourceManager.getInstance().toUri(bN);
var bP=this.__cS(bN);
bL=this.__cR(bL,bP.width,bP.height);
return {src:bO,style:bL};
},__cV:function(H,I,J){var N=qx.util.ResourceManager.getInstance();
var M=N.isClippedImage(J);
var O=this.__cS(J);

if(M){var L=N.getData(J);
var K=N.toUri(L[4]);

if(I===bl){H=this.__cW(H,L,O.height);
}else{H=this.__cX(H,L,O.width);
}return {src:K,style:H};
}else{{};

if(I==bl){H.height=O.height==null?null:O.height+bq;
}else if(I==bh){H.width=O.width==null?null:O.width+bq;
}var K=N.toUri(J);
return {src:K,style:H};
}},__cW:function(h,i,j){var k=qx.util.ResourceManager.getInstance().getImageHeight(i[4]);
h.clip={top:-i[6],height:j};
h.height=k+bq;
if(h.top!=null){h.top=(parseInt(h.top,10)+i[6])+bq;
}else if(h.bottom!=null){h.bottom=(parseInt(h.bottom,10)+j-k-i[6])+bq;
}return h;
},__cX:function(s,t,u){var v=qx.util.ResourceManager.getInstance().getImageWidth(t[4]);
s.clip={left:-t[5],width:u};
s.width=v+bq;
if(s.left!=null){s.left=(parseInt(s.left,10)+t[5])+bq;
}else if(s.right!=null){s.right=(parseInt(s.right,10)+u-v-t[5])+bq;
}return s;
},__cY:function(w,x,y){var D=qx.util.ResourceManager.getInstance().isClippedImage(y);
var C=this.__cS(y);
if(D&&x!==bJ){var B=qx.util.ResourceManager.getInstance().getData(y);
var A=qx.bom.element.Background.getStyles(B[4],x,B[5],B[6]);

for(var z in A){w[z]=A[z];
}
if(C.width!=null&&w.width==null&&(x==bD||x===bj)){w.width=C.width+bq;
}
if(C.height!=null&&w.height==null&&(x==bs||x===bj)){w.height=C.height+bq;
}return {style:w};
}else{{};
w=this.__cR(w,C.width,C.height);
w=this.__da(w,y,x);
return {style:w};
}},__da:function(l,m,n){var top=null;
var r=null;

if(l.backgroundPosition){var o=l.backgroundPosition.split(br);
r=parseInt(o[0]);

if(isNaN(r)){r=o[0];
}top=parseInt(o[1]);

if(isNaN(top)){top=o[1];
}}var q=qx.bom.element.Background.getStyles(m,n,r,top);

for(var p in q){l[p]=q[p];
}if(l.filter){l.filter=bm;
}return l;
},__db:function(Y){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(Y)&&Y.indexOf(bK)==-1){if(!this.__cN[Y]){qx.log.Logger.debug("Potential clipped image candidate: "+Y);
this.__cN[Y]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(bp,{"mshtml":function(){return qx.bom.element.Decoration.__cO;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
},get:function(u,v){var x=qx.bom.element.Style.get(u,c,v,false);
var C,top,A,z;
var w,y;

if(typeof x===e&&x!==n&&x!==h){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var B=RegExp.$1.split(l);
top=qx.lang.String.trim(B[0]);
w=qx.lang.String.trim(B[1]);
y=qx.lang.String.trim(B[2]);
C=qx.lang.String.trim(B[3]);
if(C===n){C=null;
}
if(top===n){top=null;
}
if(w===n){w=null;
}
if(y===n){y=null;
}if(top!=null){top=parseInt(top,10);
}
if(w!=null){w=parseInt(w,10);
}
if(y!=null){y=parseInt(y,10);
}
if(C!=null){C=parseInt(C,10);
}if(w!=null&&C!=null){A=w-C;
}else if(w!=null){A=w;
}
if(y!=null&&top!=null){z=y-top;
}else if(y!=null){z=y;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:C||null,top:top||null,width:A||null,height:z||null};
},set:function(D,E){if(!E){D.style.clip=a;
return;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?n:I+m);
J=n;
}else{F=(I==null?n:J+I+m);
J=J+m;
}
if(top==null){G=(H==null?n:H+m);
top=n;
}else{G=(H==null?n:top+H+m);
top=top+m;
}D.style.clip=j+top+l+F+l+G+l+J+g;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var q="n-resize",p="e-resize",o="nw-resize",n="ne-resize",m="",l="cursor:",k="qx.client",j=";",i="qx.bom.element.Cursor",h="cursor",g="hand";
qx.Class.define(i,{statics:{__dc:qx.core.Variant.select(k,{"mshtml":{"cursor":g,"ew-resize":p,"ns-resize":q,"nesw-resize":n,"nwse-resize":o},"opera":{"col-resize":p,"row-resize":q,"ew-resize":p,"ns-resize":q,"nesw-resize":n,"nwse-resize":o},"default":{}}),compile:function(a){return l+(this.__dc[a]||a)+j;
},get:function(b,c){return qx.bom.element.Style.get(b,h,c,false);
},set:function(e,f){e.style.cursor=this.__dc[f]||f;
},reset:function(d){d.style.cursor=m;
}}});
})();
(function(){var D="",C="qx.client",B=";",A="filter",z="opacity:",y="opacity",x="MozOpacity",w=");",v=")",u="zoom:1;filter:alpha(opacity=",r="qx.bom.element.Opacity",t="alpha(opacity=",s="-moz-opacity:";
qx.Class.define(r,{statics:{compile:qx.core.Variant.select(C,{"mshtml":function(q){if(q>=1){return D;
}
if(q<0.00001){q=0;
}return u+(q*100)+w;
},"gecko":function(c){if(c==1){c=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return s+c+B;
}else{return z+c+B;
}},"default":function(k){if(k==1){return D;
}return z+k+B;
}}),set:qx.core.Variant.select(C,{"mshtml":function(d,e){var f=qx.bom.element.Style.get(d,A,qx.bom.element.Style.COMPUTED_MODE,false);
if(e>=1){d.style.filter=f.replace(/alpha\([^\)]*\)/gi,D);
return;
}
if(e<0.00001){e=0;
}if(!d.currentStyle||!d.currentStyle.hasLayout){d.style.zoom=1;
}d.style.filter=f.replace(/alpha\([^\)]*\)/gi,D)+t+e*100+v;
},"gecko":function(l,m){if(m==1){m=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){l.style.MozOpacity=m;
}else{l.style.opacity=m;
}},"default":function(G,H){if(H==1){H=D;
}G.style.opacity=H;
}}),reset:qx.core.Variant.select(C,{"mshtml":function(a){var b=qx.bom.element.Style.get(a,A,qx.bom.element.Style.COMPUTED_MODE,false);
a.style.filter=b.replace(/alpha\([^\)]*\)/gi,D);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=D;
}else{E.style.opacity=D;
}},"default":function(F){F.style.opacity=D;
}}),get:qx.core.Variant.select(C,{"mshtml":function(g,h){var i=qx.bom.element.Style.get(g,A,h,false);

if(i){var j=i.match(/alpha\(opacity=(.*)\)/);

if(j&&j[1]){return parseFloat(j[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?x:y,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(n,o){var p=qx.bom.element.Style.get(n,y,o,false);

if(p!=null){return parseFloat(p);
}return 1.0;
}})}});
})();
(function(){var G="qx.client",F="",E="boxSizing",D="box-sizing",C=":",B="border-box",A="qx.bom.element.BoxSizing",z="KhtmlBoxSizing",y="-moz-box-sizing",x="WebkitBoxSizing",u=";",w="-khtml-box-sizing",v="content-box",t="-webkit-box-sizing",s="MozBoxSizing";
qx.Class.define(A,{statics:{__dd:qx.core.Variant.select(G,{"mshtml":null,"webkit":[E,z,x],"gecko":[s],"opera":[E]}),__de:qx.core.Variant.select(G,{"mshtml":null,"webkit":[D,w,t],"gecko":[y],"opera":[D]}),__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(k){var m=this.__df;
return m.tags[k.tagName.toLowerCase()]||m.types[k.type];
},compile:qx.core.Variant.select(G,{"mshtml":function(r){{};
},"default":function(b){var d=this.__de;
var c=F;

if(d){for(var i=0,l=d.length;i<l;i++){c+=d[i]+C+b+u;
}}return c;
}}),get:qx.core.Variant.select(G,{"mshtml":function(a){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(a))){if(!this.__dg(a)){return v;
}}return B;
},"default":function(o){var q=this.__dd;
var p;

if(q){for(var i=0,l=q.length;i<l;i++){p=qx.bom.element.Style.get(o,q[i],null,false);

if(p!=null&&p!==F){return p;
}}}return F;
}}),set:qx.core.Variant.select(G,{"mshtml":function(e,f){{};
},"default":function(g,h){var j=this.__dd;

if(j){for(var i=0,l=j.length;i<l;i++){g.style[j[i]]=h;
}}}}),reset:function(n){this.set(n,F);
}}});
})();
(function(){var l="",k="qx.client",j="hidden",i="-moz-scrollbars-none",h="overflow",g=";",f="overflowY",e=":",d="overflowX",b="overflow:",z="none",y="scroll",x="borderLeftStyle",w="borderRightStyle",v="div",u="borderRightWidth",r="overflow-y",q="borderLeftWidth",p="-moz-scrollbars-vertical",o="100px",m="qx.bom.element.Overflow",n="overflow-x";
qx.Class.define(m,{statics:{__dh:null,getScrollbarWidth:function(){if(this.__dh!==null){return this.__dh;
}var bl=qx.bom.element.Style;
var bn=function(bQ,bR){return parseInt(bl.get(bQ,bR))||0;
};
var bo=function(a){return (bl.get(a,w)==z?0:bn(a,u));
};
var bm=function(bJ){return (bl.get(bJ,x)==z?0:bn(bJ,q));
};
var bq=qx.core.Variant.select(k,{"mshtml":function(bA){if(bl.get(bA,f)==j||bA.clientWidth==0){return bo(bA);
}return Math.max(0,bA.offsetWidth-bA.clientLeft-bA.clientWidth);
},"default":function(N){if(N.clientWidth==0){var O=bl.get(N,h);
var P=(O==y||O==p?16:0);
return Math.max(0,bo(N)+P);
}return Math.max(0,(N.offsetWidth-N.clientWidth-bm(N)));
}});
var bp=function(S){return bq(S)-bo(S);
};
var t=document.createElement(v);
var s=t.style;
s.height=s.width=o;
s.overflow=y;
document.body.appendChild(t);
var c=bp(t);
this.__dh=c?c:16;
document.body.removeChild(t);
return this.__dh;
},_compile:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(H,I){if(I==j){I=i;
}return b+I+g;
}:
function(bB,bC){return bB+e+bC+g;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bh,bi){return b+bi+g;
}:
function(Y,ba){return Y+e+ba+g;
},"default":function(bV,bW){return bV+e+bW+g;
}}),compileX:function(W){return this._compile(n,W);
},compileY:function(bO){return this._compile(r,bO);
},getX:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bS,bT){var bU=qx.bom.element.Style.get(bS,h,bT,false);

if(bU===i){bU=j;
}return bU;
}:
function(bj,bk){return qx.bom.element.Style.get(bj,d,bk,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bu,bv){return qx.bom.element.Style.get(bu,h,bv,false);
}:
function(bc,bd){return qx.bom.element.Style.get(bc,d,bd,false);
},"default":function(L,M){return qx.bom.element.Style.get(L,d,M,false);
}}),setX:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD,bE){if(bE==j){bE=i;
}bD.style.overflow=bE;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(J,K){J.style.overflow=K;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(bH,bI){bH.style.overflowX=bI;
}}),resetX:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bg){bg.style.overflow=l;
}:
function(bP){bP.style.overflowX=l;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(be,bf){be.style.overflow=l;
}:
function(A,B){A.style.overflowX=l;
},"default":function(bb){bb.style.overflowX=l;
}}),getY:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(C,D){var E=qx.bom.element.Style.get(C,h,D,false);

if(E===i){E=j;
}return E;
}:
function(bK,bL){return qx.bom.element.Style.get(bK,f,bL,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ca,cb){return qx.bom.element.Style.get(ca,h,cb,false);
}:
function(bw,bx){return qx.bom.element.Style.get(bw,f,bx,false);
},"default":function(bs,bt){return qx.bom.element.Style.get(bs,f,bt,false);
}}),setY:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(by,bz){if(bz===j){bz=i;
}by.style.overflow=bz;
}:
function(bX,bY){bX.style.overflowY=bY;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(Q,R){Q.style.overflow=R;
}:
function(bM,bN){bM.style.overflowY=bN;
},"default":function(F,G){F.style.overflowY=G;
}}),resetY:qx.core.Variant.select(k,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(br){br.style.overflow=l;
}:
function(X){X.style.overflowY=l;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=l;
}:
function(T,U){T.style.overflowY=l;
},"default":function(V){V.style.overflowY=l;
}})}});
})();
(function(){var k="",j="qx.client",i="user-select",h="userSelect",g="appearance",f="style",e="MozUserModify",d="px",c="-webkit-appearance",b="styleFloat",G="-webkit-user-select",F="-moz-appearance",E="pixelHeight",D="MozAppearance",C=":",B="pixelTop",A="pixelLeft",z="text-overflow",y="-moz-user-select",x="MozUserSelect",r="qx.bom.element.Style",s="-moz-user-modify",p="-webkit-user-modify",q="WebkitUserSelect",n="-o-text-overflow",o="pixelRight",l="cssFloat",m="pixelWidth",t="pixelBottom",u=";",w="WebkitUserModify",v="WebkitAppearance";
qx.Class.define(r,{statics:{__di:{styleNames:{"float":qx.core.Variant.select(j,{"mshtml":b,"default":l}),"appearance":qx.core.Variant.select(j,{"gecko":D,"webkit":v,"default":g}),"userSelect":qx.core.Variant.select(j,{"gecko":x,"webkit":q,"default":h}),"userModify":qx.core.Variant.select(j,{"gecko":e,"webkit":w,"default":h})},cssNames:{"appearance":qx.core.Variant.select(j,{"gecko":F,"webkit":c,"default":g}),"userSelect":qx.core.Variant.select(j,{"gecko":y,"webkit":G,"default":i}),"userModify":qx.core.Variant.select(j,{"gecko":s,"webkit":p,"default":i}),"textOverflow":qx.core.Variant.select(j,{"opera":n,"default":z})},mshtmlPixel:{width:m,height:E,left:A,right:o,top:B,bottom:t},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dj:{},compile:function(bd){var bh=[];
var bl=this.__di;
var bk=bl.special;
var bi=bl.cssNames;
var bg=this.__dj;
var bj=qx.lang.String;
var name,bf,be;

for(name in bd){be=bd[name];

if(be==null){continue;
}name=bi[name]||name;
if(bk[name]){bh.push(bk[name].compile(be));
}else{bf=bg[name];

if(!bf){bf=bg[name]=bj.hyphenate(name);
}bh.push(bf,C,be,u);
}}return bh.join(k);
},setCss:qx.core.Variant.select(j,{"mshtml":function(U,V){U.style.cssText=V;
},"default":function(bm,bn){bm.setAttribute(f,bn);
}}),getCss:qx.core.Variant.select(j,{"mshtml":function(Q){return Q.style.cssText.toLowerCase();
},"default":function(a){return a.getAttribute(f);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bo,name,bp,bq){{};
var br=this.__di;
name=br.styleNames[name]||name;
if(bq!==false&&br.special[name]){return br.special[name].set(bo,bp);
}else{bo.style[name]=bp!==null?bp:k;
}},setStyles:function(H,I,J){{};
var P=this.__di;
var M=P.styleNames;
var O=P.special;
var K=H.style;

for(var N in I){var L=I[N];
var name=M[N]||N;

if(L===undefined){if(J!==false&&O[name]){O[name].reset(H);
}else{K[name]=k;
}}else{if(J!==false&&O[name]){O[name].set(H,L);
}else{K[name]=L!==null?L:k;
}}}},reset:function(R,name,S){var T=this.__di;
name=T.styleNames[name]||name;
if(S!==false&&T.special[name]){return T.special[name].reset(R);
}else{R.style[name]=k;
}},get:qx.core.Variant.select(j,{"mshtml":function(bs,name,bt,bu){var bz=this.__di;
name=bz.styleNames[name]||name;
if(bu!==false&&bz.special[name]){return bz.special[name].get(bs,bt);
}if(!bs.currentStyle){return bs.style[name]||k;
}switch(bt){case this.LOCAL_MODE:return bs.style[name]||k;
case this.CASCADED_MODE:return bs.currentStyle[name]||k;
default:var by=bs.currentStyle[name]||k;
if(/^-?[\.\d]+(px)?$/i.test(by)){return by;
}var bx=bz.mshtmlPixel[name];

if(bx){var bv=bs.style[name];
bs.style[name]=by||0;
var bw=bs.style[bx]+d;
bs.style[name]=bv;
return bw;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(by)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return by;
}},"default":function(W,name,X,Y){var bc=this.__di;
name=bc.styleNames[name]||name;
if(Y!==false&&bc.special[name]){return bc.special[name].get(W,X);
}switch(X){case this.LOCAL_MODE:return W.style[name]||k;
case this.CASCADED_MODE:if(W.currentStyle){return W.currentStyle[name]||k;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var ba=qx.dom.Node.getDocument(W);
var bb=ba.defaultView.getComputedStyle(W,null);
return bb?bb[name]:k;
}}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(p){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (p||window).document.compatMode!==f;
}},"webkit":function(n){if(document.compatMode===undefined){var o=(n||window).document.createElement(a);
o.style.cssText=e;
return o.style.width===c?true:false;
}else{return (n||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(k){var l=(k||window).document;
var m=qx.bom.Viewport.getWidth(k);
var scroll=this.isStandardMode(k)?l.documentElement.scrollWidth:l.body.scrollWidth;
return Math.max(scroll,m);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(l){if(qx.bom.client.Engine.VERSION<9.5){return (l||window).document.body.clientHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerHeight;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientHeight:q.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(e){var f=(e||window).document;
return f.documentElement.scrollLeft||f.body.scrollLeft;
},"default":function(g){return (g||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(r){return (r||window).pageYOffset;
}})}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__dk:function(){this.QUIRKS_MODE=this.__dl();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__dl:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__dk();
}});
})();
(function(){var l="/",k="mshtml",j="qx.client",i="",h="?",g="string",f="qx.util.ResourceManager",e="singleton",d="qx.isSource";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__dm:qx.$$resources||{},__dn:{}},members:{has:function(a){return !!arguments.callee.self.__dm[a];
},getData:function(o){return arguments.callee.self.__dm[o]||null;
},getImageWidth:function(b){var c=arguments.callee.self.__dm[b];
return c?c[0]:null;
},getImageHeight:function(B){var C=arguments.callee.self.__dm[B];
return C?C[1]:null;
},getImageFormat:function(m){var n=arguments.callee.self.__dm[m];
return n?n[2]:null;
},isClippedImage:function(z){var A=arguments.callee.self.__dm[z];
return A&&A.length>4;
},toUri:function(v){if(v==null){return v;
}var w=arguments.callee.self.__dm[v];

if(!w){return v;
}
if(typeof w===g){var y=w;
}else{var y=w[3];
if(!y){return v;
}}var x=i;

if(qx.core.Variant.isSet(j,k)&&qx.bom.client.Feature.SSL){x=arguments.callee.self.__dn[y];
}return x+qx.$$libraries[y].resourceUri+l+v;
}},defer:function(p){if(qx.core.Variant.isSet(j,k)){if(qx.bom.client.Feature.SSL){for(var t in qx.$$libraries){var r=qx.$$libraries[t].resourceUri;
if(r.match(/^\/\//)!=null){p.__dn[t]=window.location.protocol;
}else if(r.match(/^\.\//)!=null&&qx.core.Setting.get(d)){var q=document.URL;
p.__dn[t]=q.substring(0,q.lastIndexOf(l));
}else if(r.match(/^http/)!=null){}else{var u=window.location.href.indexOf(h);
var s;

if(u==-1){s=window.location.href;
}else{s=window.location.href.substring(0,u);
}p.__dn[t]=s.substring(0,s.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var k="qx.client",j="load",h="qx.io.ImageLoader";
qx.Bootstrap.define(h,{statics:{__do:{},__dp:{width:null,height:null},__dq:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(o){var p=this.__do[o];
return !!(p&&p.loaded);
},isFailed:function(c){var d=this.__do[c];
return !!(d&&d.failed);
},isLoading:function(a){var b=this.__do[a];
return !!(b&&b.loading);
},getFormat:function(r){var s=this.__do[r];
return s?s.format:null;
},getSize:function(t){var u=this.__do[t];
return u?
{width:u.width,height:u.height}:this.__dp;
},getWidth:function(B){var C=this.__do[B];
return C?C.width:null;
},getHeight:function(m){var n=this.__do[m];
return n?n.height:null;
},load:function(v,w,x){var y=this.__do[v];

if(!y){y=this.__do[v]={};
}if(w&&!x){x=window;
}if(y.loaded||y.loading||y.failed){if(w){if(y.loading){y.callbacks.push(w,x);
}else{w.call(x,v,y);
}}}else{y.loading=true;
y.callbacks=[];

if(w){y.callbacks.push(w,x);
}var A=new Image();
var z=qx.lang.Function.listener(this.__dr,this,A,v);
A.onload=z;
A.onerror=z;
A.src=v;
}},__dr:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__do[E];
if(event.type===j){F.loaded=true;
F.width=this.__ds(D);
F.height=this.__dt(D);
var G=this.__dq.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__ds:qx.core.Variant.select(k,{"gecko":function(q){return q.naturalWidth;
},"default":function(g){return g.width;
}}),__dt:qx.core.Variant.select(k,{"gecko":function(f){return f.naturalHeight;
},"default":function(e){return e.height;
}})}});
})();
(function(){var I="number",H="0",G="px",F=";",E="background-image:url(",D=");",C="",B=")",A="background-repeat:",z=" ",w="qx.bom.element.Background",y="url(",x="background-position:";
qx.Class.define(w,{statics:{__du:[E,null,D,x,null,F,A,null,F],__dv:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dw:function(g,top){var h=qx.bom.client.Engine;

if(h.GECKO&&h.VERSION<1.9&&g==top&&typeof g==I){top+=0.01;
}
if(g){var i=(typeof g==I)?g+G:g;
}else{i=H;
}
if(top){var j=(typeof top==I)?top+G:top;
}else{j=H;
}return i+z+j;
},compile:function(k,l,m,top){var n=this.__dw(m,top);
var o=qx.util.ResourceManager.getInstance().toUri(k);
var p=this.__du;
p[1]=o;
p[4]=n;
p[7]=l;
return p.join(C);
},getStyles:function(a,b,c,top){if(!a){return this.__dv;
}var d=this.__dw(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f={backgroundPosition:d,backgroundImage:y+e+B};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(q,r,s,t,top){var u=this.getStyles(r,s,t,top);

for(var v in u){q.style[v]=u[v];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&(n.colors[m]!==undefined)){o[m]=n.colors[m];
return true;
}return false;
}}});
})();
(function(){var bc=",",bb="rgb(",ba=")",Y="qx.theme.manager.Color",X="qx.util.ColorUtil";
qx.Class.define(X,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(V){return this.NAMED[V]!==undefined;
},isSystemColor:function(bd){return this.SYSTEM[bd]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(Y);
},isThemedColor:function(be){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(be);
},stringToRgb:function(W){if(this.supportsThemes()&&this.isThemedColor(W)){var W=qx.theme.manager.Color.getInstance().resolveDynamic(W);
}
if(this.isNamedColor(W)){return this.NAMED[W];
}else if(this.isSystemColor(W)){throw new Error("Could not convert system colors to RGB: "+W);
}else if(this.isRgbString(W)){return this.__dx();
}else if(this.isHex3String(W)){return this.__dz();
}else if(this.isHex6String(W)){return this.__dA();
}throw new Error("Could not parse color: "+W);
},cssStringToRgb:function(o){if(this.isNamedColor(o)){return this.NAMED[o];
}else if(this.isSystemColor(o)){throw new Error("Could not convert system colors to RGB: "+o);
}else if(this.isRgbString(o)){return this.__dx();
}else if(this.isRgbaString(o)){return this.__dy();
}else if(this.isHex3String(o)){return this.__dz();
}else if(this.isHex6String(o)){return this.__dA();
}throw new Error("Could not parse color: "+o);
},stringToRgbString:function(w){return this.rgbToRgbString(this.stringToRgb(w));
},rgbToRgbString:function(bf){return bb+bf[0]+bc+bf[1]+bc+bf[2]+ba;
},rgbToHexString:function(a){return (qx.lang.String.pad(a[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(a[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(a[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(n){return this.isThemedColor(n)||this.isNamedColor(n)||this.isHex3String(n)||this.isHex6String(n)||this.isRgbString(n);
},isCssString:function(E){return this.isSystemColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isHex3String:function(s){return this.REGEXP.hex3.test(s);
},isHex6String:function(m){return this.REGEXP.hex6.test(m);
},isRgbString:function(u){return this.REGEXP.rgb.test(u);
},isRgbaString:function(U){return this.REGEXP.rgba.test(U);
},__dx:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__dy:function(){var e=parseInt(RegExp.$1,10);
var d=parseInt(RegExp.$2,10);
var c=parseInt(RegExp.$3,10);
return [e,d,c];
},__dz:function(){var H=parseInt(RegExp.$1,16)*17;
var G=parseInt(RegExp.$2,16)*17;
var F=parseInt(RegExp.$3,16)*17;
return [H,G,F];
},__dA:function(){var l=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var k=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var j=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [l,k,j];
},hex3StringToRgb:function(v){if(this.isHex3String(v)){return this.__dz(v);
}throw new Error("Invalid hex3 value: "+v);
},hex6StringToRgb:function(D){if(this.isHex6String(D)){return this.__dA(D);
}throw new Error("Invalid hex6 value: "+D);
},hexStringToRgb:function(h){if(this.isHex3String(h)){return this.__dz(h);
}
if(this.isHex6String(h)){return this.__dA(h);
}throw new Error("Invalid hex value: "+h);
},rgbToHsb:function(I){var K,L,N;
var T=I[0];
var Q=I[1];
var J=I[2];
var S=(T>Q)?T:Q;

if(J>S){S=J;
}var M=(T<Q)?T:Q;

if(J<M){M=J;
}N=S/255.0;

if(S!=0){L=(S-M)/S;
}else{L=0;
}
if(L==0){K=0;
}else{var P=(S-T)/(S-M);
var R=(S-Q)/(S-M);
var O=(S-J)/(S-M);

if(T==S){K=O-R;
}else if(Q==S){K=2.0+P-O;
}else{K=4.0+R-P;
}K=K/6.0;

if(K<0){K=K+1.0;
}}return [Math.round(K*360),Math.round(L*100),Math.round(N*100)];
},hsbToRgb:function(x){var i,f,p,q,t;
var y=x[0]/360;
var z=x[1]/100;
var A=x[2]/100;

if(y>=1.0){y%=1.0;
}
if(z>1.0){z=1.0;
}
if(A>1.0){A=1.0;
}var B=Math.floor(255*A);
var C={};

if(z==0.0){C.red=C.green=C.blue=B;
}else{y*=6.0;
i=Math.floor(y);
f=y-i;
p=Math.floor(B*(1.0-z));
q=Math.floor(B*(1.0-(z*f)));
t=Math.floor(B*(1.0-(z*(1.0-f))));

switch(i){case 0:C.red=B;
C.green=t;
C.blue=p;
break;
case 1:C.red=q;
C.green=B;
C.blue=p;
break;
case 2:C.red=p;
C.green=B;
C.blue=t;
break;
case 3:C.red=p;
C.green=q;
C.blue=B;
break;
case 4:C.red=t;
C.green=p;
C.blue=B;
break;
case 5:C.red=B;
C.green=p;
C.blue=q;
break;
}}return [C.red,C.green,C.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var n="qx.event.handler.Window";
qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(g,h){},registerEvent:function(k,l,m){},unregisterEvent:function(b,c,d){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var j=qx.event.handler.Window.SUPPORTED_TYPES;

for(var i in j){qx.bom.Event.addNativeListener(this._window,i,this._onNativeWrapper);
}},_stopWindowObserver:function(){var p=qx.event.handler.Window.SUPPORTED_TYPES;

for(var o in p){qx.bom.Event.removeNativeListener(this._window,o,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var j="ready",i="qx.application",h="beforeunload",g="qx.core.Init",f="shutdown";
qx.Class.define(g,{statics:{getApplication:function(){return this.__dC||null;
},__dB:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(i);
var c=qx.Class.getByName(b);

if(c){this.__dC=new c;
var a=new Date;
this.__dC.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__dC.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__dD:function(e){var d=this.__dC;

if(d){e.setReturnValue(d.close());
}},__dE:function(){var l=this.__dC;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,j,k.__dB,k);
qx.event.Registration.addListener(window,f,k.__dE,k);
qx.event.Registration.addListener(window,h,k.__dD,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(f,g){var h=qx.locale.Manager;

if(h){return h.tr.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(b,c,d){var e=qx.locale.Manager;

if(e){return e.trc.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(i){var j=qx.locale.Manager;

if(j){return j.marktr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dF:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dF;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dF=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dF=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var k="http://orf.at",j="white",i="studentlife/columnborder.png",h="sans-serif",g="Gustav Klimt",f="#303950",d="also attending 3 equal courses",c="Lucida Grande",b="#264393",a="studentlife/menu-coursesettings.png",O="<div class=\"typeface-js\" style=\"font-family: Apex New\">Text here in Apex New Medium...</div>",N="mouseout",M="default",L="ABC",K="#F6F6F6",J="studentlife/menu-agenda.png",I="studentlife/cross.png",H="studentlife/logo.png",G="studentlife/cross-hover.png",F="studentlife/testprofilepic2.png",r="rootBackground",s="studentlife/alsoattending.png",p="Physik 2",q="studentlife/menu-vborder.png",n="mouseover",o="right",l="Mikroteilchen 1 - Einführung in die Teilchenlehre",m="#434445",t="click",u="studentlife/mycourses.png",y="menu-background",w="studentlife.Application",A="studentlife/testprofilepic1.png",z="Add as friend",C="ad-background",B="studentlife/payedAD.png",v="Mathematik1",E="payed ad",D="studentlife/menu-courses.png";
qx.Class.define(w,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
{};
var Q=this.getRoot();
var X=new qx.ui.container.Composite();
X.set({width:760,height:578,backgroundColor:j,decorator:r});
var W=new qx.ui.basic.Image(H);
Q.add(X);
X.setLayout(new qx.ui.layout.Canvas());
X.add(W,{right:22,top:15});
var ba=new qx.ui.container.Composite().set({width:154,backgroundColor:j,maxHeight:447});
ba.setLayout(new qx.ui.layout.VBox());
var Y=new qx.ui.basic.Image(u);
ba.add(Y);
var R=[v,l,p];
var V=[true,false,false];

for(var x in R){this.courseItems(ba,R[x],V[x]);
}var P=new qx.ui.container.Composite().set({width:154,maxHeight:256});
var U=new qx.ui.basic.Image(s);
P.setLayout(new qx.ui.layout.VBox());
var S=new qx.ui.basic.Image(i);
P.add(U);
this.addAlsoAttending(P,A,g,k,d,k);
this.addAlsoAttending(P,F,g,k,d,k);
X.add(ba,{top:73,left:17});
X.add(this.menuContainer(),{top:32,left:17});
X.add(this.adContainer(B),{top:445,left:195});
X.add(P,{top:73,right:23});
var T=new qx.ui.embed.Html();
T.setHtml(O);
X.add(T,{top:73,left:195});
},courseItems:function(bF,bG,bH){var bI=j;

if(bH){bI=K;
}var bK=new qx.ui.basic.Image(i);
var bJ=new qx.ui.basic.Label(bG).set({rich:true,selectable:true,font:M,backgroundColor:bI,padding:[5,0,5,0],maxHeight:37,width:154,toolTip:new qx.ui.tooltip.ToolTip(bG),textColor:f});
bF.add(bJ);
bF.add(bK);
},addAlsoAttending:function(bb,bc,name,bd,be,bf){var bn=j;
var bi=new qx.ui.container.Composite(new qx.ui.layout.HBox());
var bm=new qx.ui.basic.Image(i);
var bl=new qx.ui.container.Composite();
bl.setLayout(new qx.ui.layout.VBox());
bl.set({width:35,height:42});
var bc=new qx.ui.basic.Image(bc);
bc.set({width:30,height:30,scale:true,margin:[0,4,0,1]});
bl.add(new qx.ui.core.Widget(),{flex:1});
bl.add(bc);
bl.add(new qx.ui.core.Widget(),{flex:1});
var bk=new qx.ui.container.Composite();
bk.setLayout(new qx.ui.layout.VBox());
bk.set({maxHeight:56});
var bq=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var bo=new qx.ui.basic.Label(name).set({rich:true,selectable:true,font:new qx.bom.Font(10,[c,h]).set({bold:true}),backgroundColor:bn,padding:[2,0,0,0],textColor:b});
var bh=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var bg=new qx.ui.basic.Image(I).set({padding:[0,0,0,0]});
var bj=new qx.ui.basic.Image(G).set({padding:[0,0,0,0]});
bh.addListener(n,function(e){this.info("mouseover");
bh.removeAll();
bh.add(bj);
});
bh.addListener(N,function(e){this.info("mouseout");
bh.removeAll();
bh.add(bg);
});
bh.addListener(t,function(e){this.info("click");
});
bh.add(bg);
bq.add(bo,{top:0,left:0});
bq.add(bh,{top:2,right:1});
bk.add(bq);
var bp=new qx.ui.basic.Label(be).set({rich:true,selectable:true,backgroundColor:bn,textColor:f,width:119});
bk.add(bp);
var br=new qx.ui.basic.Label(z).set({rich:true,selectable:true,backgroundColor:bn,padding:[0,0,4,0],textColor:b});
bk.add(br);
bi.add(bl);
bi.add(bk);
bb.add(bi);
bb.add(bm);
},menuContainer:function(){var bC=new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({height:14,width:493,decorator:y});
var bw=new qx.ui.container.Composite(new qx.ui.layout.Flow());
var by=new qx.ui.basic.Label(L);
var bA=new qx.ui.basic.Image(J).set({padding:[3,0,0,4]});
var bD=new qx.ui.basic.Image(D).set({padding:[3,0,0,19]});
bw.add(bA);
bw.add(bD);
var bz=new qx.ui.layout.Flow();
var bB=new qx.ui.container.Composite(bz);
bz.setAlignX(o);
var bx=new qx.ui.basic.Image(a).set({padding:[4,0,0,0]});
var bE=new qx.ui.basic.Image(q).set({padding:[1,6,0,6]});
bB.add(bx);
bB.add(bE);
bC.add(bw,{top:0,left:0});
bC.add(bB,{top:0,right:0});
return bC;
},adContainer:function(bs){var bv=new qx.ui.container.Composite(new qx.ui.layout.VBox());
bv.set({width:363,height:88});
var bu=new qx.ui.container.Composite(new qx.ui.layout.VBox());
bu.set({width:363,height:76,decorator:C});
var bs=new qx.ui.basic.Image(bs);
bs.set({width:363,height:70});
var bt=new qx.ui.basic.Label(E).set({rich:true,selectable:true,textColor:m,font:new qx.bom.Font(9,[c,h]),padding:[1,0,0,0]});
bu.add(new qx.ui.core.Widget(),{flex:1});
bu.add(bs);
bu.add(new qx.ui.core.Widget(),{flex:1});
bv.add(bu);
bv.add(bt);
return bv;
}}});
})();
(function(){var k="qx.event.type.Native";
qx.Class.define(k,{extend:qx.event.type.Event,members:{init:function(f,g,h,i,j){arguments.callee.base.call(this,i,j);
this._target=g||qx.bom.Event.getTarget(f);
this._relatedTarget=h||qx.bom.Event.getRelatedTarget(f);

if(f.timeStamp){this._timeStamp=f.timeStamp;
}this._native=f;
this._returnValue=null;
return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
var e={};
d._native=this._cloneNativeEvent(this._native,e);
d._returnValue=this._returnValue;
return d;
},_cloneNativeEvent:function(a,b){b.preventDefault=qx.lang.Function.empty;
return b;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var s="object",r="_applyTheme",q="__dG",p="qx.theme.manager.Decoration",o="Theme",n="string",m="singleton";
qx.Class.define(p,{type:m,extend:qx.core.Object,properties:{theme:{check:o,nullable:true,apply:r}},members:{__dG:null,resolve:function(g){if(!g){return null;
}
if(typeof g===s){return g;
}var j=this.getTheme();

if(!j){return null;
}var j=this.getTheme();

if(!j){return null;
}var k=this.__dG;

if(!k){k=this.__dG={};
}var h=k[g];

if(h){return h;
}var i=j.decorations[g];

if(!i){return null;
}var l=i.decorator;

if(l==null){throw new Error("Missing definition of which decorator to use in entry: "+g+"!");
}return k[g]=(new l).set(i.style);
},isValidPropertyValue:function(a){if(typeof a===n){return this.isDynamic(a);
}else if(typeof a===s){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(t){if(!t){return false;
}var u=this.getTheme();

if(!u){return false;
}return !!u.decorations[t];
},_applyTheme:function(c,d){var f=qx.util.AliasManager.getInstance();

if(d){for(var e in d.aliases){f.remove(e);
}}
if(c){for(var e in c.aliases){f.add(e,c.aliases[e]);
}}
if(!c){this.__dG={};
}}},destruct:function(){this._disposeMap(q);
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){return k[h]=(new qx.bom.Font).set(j.fonts[h]);
}return h;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},_applyTheme:function(o){var p=this._getDynamic();

for(var s in p){if(p[s].themed){p[s].dispose();
delete p[s];
}}
if(o){var q=o.fonts;
var r=qx.bom.Font;

for(var s in q){p[s]=(new r).set(q[s]);
p[s].themed=true;
}}this._setDynamic(p);
}}});
})();
(function(){var D="",C="underline",B="Boolean",A="px",z='"',y="italic",x="normal",w="bold",v="_applyItalic",u="_applyBold",P="Integer",O="_applyFamily",N="_applyLineHeight",M="Array",L="overline",K="line-through",J="qx.bom.Font",I="Number",H="_applyDecoration",G=" ",E="_applySize",F=",";
qx.Class.define(J,{extend:qx.core.Object,construct:function(c,d){arguments.callee.base.call(this);

if(c!==undefined){this.setSize(c);
}
if(d!==undefined){this.setFamily(d);
}},statics:{fromString:function(n){var r=new qx.bom.Font();
var p=n.split(/\s+/);
var name=[];
var q;

for(var i=0;i<p.length;i++){switch(q=p[i]){case w:r.setBold(true);
break;
case y:r.setItalic(true);
break;
case C:r.setDecoration(C);
break;
default:var o=parseInt(q,10);

if(o==q||qx.lang.String.contains(q,A)){r.setSize(o);
}else{name.push(q);
}break;
}}
if(name.length>0){r.setFamily(name);
}return r;
},fromConfig:function(a){var b=new qx.bom.Font;
b.set(a);
return b;
},__dH:{fontFamily:D,fontSize:D,fontWeight:D,fontStyle:D,textDecoration:D,lineHeight:1.2},getDefaultStyles:function(){return this.__dH;
}},properties:{size:{check:P,nullable:true,apply:E},lineHeight:{check:I,nullable:true,apply:N},family:{check:M,nullable:true,apply:O},bold:{check:B,nullable:true,apply:u},italic:{check:B,nullable:true,apply:v},decoration:{check:[C,K,L],nullable:true,apply:H}},members:{__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,_applySize:function(Q,R){this.__dI=Q===null?null:Q+A;
},_applyLineHeight:function(k,m){this.__dN=k===null?null:k;
},_applyFamily:function(e,f){var g=D;

for(var i=0,l=e.length;i<l;i++){if(e[i].indexOf(G)>0){g+=z+e[i]+z;
}else{g+=e[i];
}
if(i!==l-1){g+=F;
}}this.__dJ=g;
},_applyBold:function(S,T){this.__dK=S===null?null:S?w:x;
},_applyItalic:function(s,t){this.__dL=s===null?null:s?y:x;
},_applyDecoration:function(h,j){this.__dM=h===null?null:h;
},getStyles:function(){return {fontFamily:this.__dJ,fontSize:this.__dI,fontWeight:this.__dK,fontStyle:this.__dL,textDecoration:this.__dM,lineHeight:this.__dN};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dO={};
this.__dP={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dQ:{},__dO:null,__dP:null,_applyTheme:function(i,j){this.__dP={};
this.__dO={};
},__dR:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=b;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===h){var p=r+u+n.join(u);
return this.__dR(p,l,m);
}}}if(m!=null){return this.__dR(m,l);
}return null;
}else if(typeof t===h){return this.__dR(t,l,m);
}else if(t.include&&!t.style){return this.__dR(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__dP;
var z=E[v];

if(!z){z=E[v]=this.__dR(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__dO;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__dQ;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__dO=this.__dP=null;
}});
})();
(function(){var y="focusout",x="interval",w="mouseover",v="mouseout",u="mousemove",t="widget",s="qx.ui.tooltip.ToolTip",r="Boolean",q="_applyCurrent",p="qx.ui.tooltip.Manager",m="__dV",o="tooltip-error",n="__dT",l="singleton",k="__dS";
qx.Class.define(p,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,w,this.__ed,this,true);
this.__dS=new qx.event.Timer();
this.__dS.addListener(x,this.__ea,this);
this.__dT=new qx.event.Timer();
this.__dT.addListener(x,this.__eb,this);
this.__dU={left:0,top:0};
},properties:{current:{check:s,nullable:true,apply:q},showInvalidTooltips:{check:r,init:true}},members:{__dU:null,__dT:null,__dS:null,__dV:null,__dW:null,__dX:function(){if(!this.__dV){this.__dV=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dV;
},__dY:function(){if(!this.__dW){this.__dW=new qx.ui.tooltip.ToolTip().set({appearance:o});
this.__dW.syncAppearance();
}return this.__dW;
},_applyCurrent:function(c,d){if(d&&qx.ui.core.Widget.contains(d,c)){return;
}if(d){if(!d.isDisposed()){d.exclude();
}this.__dS.stop();
this.__dT.stop();
}var g=qx.event.Registration;
var f=document.body;
if(c){this.__dS.startWith(c.getShowTimeout());
g.addListener(f,v,this.__ee,this,true);
g.addListener(f,y,this.__ef,this,true);
g.addListener(f,u,this.__ec,this,true);
}else{g.removeListener(f,v,this.__ee,this,true);
g.removeListener(f,y,this.__ef,this,true);
g.removeListener(f,u,this.__ec,this,true);
}},__ea:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__dT.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==t){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__dU);
}a.show();
}this.__dS.stop();
},__eb:function(e){var b=this.getCurrent();

if(b&&!b.isDisposed()){b.exclude();
}this.__dT.stop();
this.resetCurrent();
},__ec:function(e){var E=this.__dU;
E.left=e.getDocumentLeft();
E.top=e.getDocumentTop();
},__ed:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C;
while(B!=null){var C=B.getToolTip();
var D=B.getToolTipText()||null;
var A=B.getToolTipIcon()||null;

if(qx.Class.hasInterface(B.constructor,qx.ui.form.IForm)&&!B.isValid()){var z=B.getInvalidMessage();
}
if(C||D||A||z){break;
}B=B.getLayoutParent();
}
if(!B){return;
}
if(B.isBlockToolTip()){return;
}if(z&&B.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var C=this.__dY().set({label:z});
}else if(!C){var C=this.__dX().set({label:D,icon:A});
}this.setCurrent(C);
C.setOpener(B);
},__ee:function(e){var h=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!h){return;
}var i=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!i){return;
}var j=this.getCurrent();
if(j&&(i==j||qx.ui.core.Widget.contains(j,i))){return;
}if(i&&h&&qx.ui.core.Widget.contains(h,i)){return;
}if(j&&!i){this.setCurrent(null);
}else{this.resetCurrent();
}},__ef:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,w,this.__ed,this,true);
this._disposeObjects(k,n,m);
this.__dU=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(r){arguments.callee.base.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__eg=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(l,m,n){var o=new qx.event.Timer(n);
o.addListener(h,function(e){o.stop();
l.call(m,e);
o.dispose();
m=null;
},m);
o.start();
return o;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__eh:null,__eg:null,_applyInterval:function(p,q){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__eh);
this.__eh=null;
}else if(j){this.__eh=window.setInterval(this.__eg,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(i){this.setInterval(i);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__eh){window.clearInterval(this.__eh);
}this.__eh=this.__eg=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(h){return this._indexOf(h);
},add:function(f,g){this._add(f,g);
},addAt:function(c,d,e){this._addAt(c,d,e);
},addBefore:function(k,l,m){this._addBefore(k,l,m);
},addAfter:function(n,o,p){this._addAfter(n,o,p);
},remove:function(j){this._remove(j);
},removeAt:function(b){return this._removeAt(b);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(i){i.getChildren=i._getChildren;
i.hasChildren=i._hasChildren;
i.indexOf=i._indexOf;
i.add=i._add;
i.addAt=i._addAt;
i.addBefore=i._addBefore;
i.addAfter=i._addAfter;
i.remove=i._remove;
i.removeAt=i._removeAt;
i.removeAll=i._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var t="Integer",s="_applyDimension",r="Boolean",q="_applyStretching",p="_applyMargin",o="shorthand",n="_applyAlign",m="allowShrinkY",l="bottom",k="baseline",H="marginBottom",G="qx.ui.core.LayoutItem",F="center",E="marginTop",D="allowGrowX",C="middle",B="marginLeft",A="allowShrinkX",z="top",y="right",w="marginRight",x="abstract",u="allowGrowY",v="left";
qx.Class.define(G,{type:x,extend:qx.core.Object,properties:{minWidth:{check:t,nullable:true,apply:s,init:null,themeable:true},width:{check:t,nullable:true,apply:s,init:null,themeable:true},maxWidth:{check:t,nullable:true,apply:s,init:null,themeable:true},minHeight:{check:t,nullable:true,apply:s,init:null,themeable:true},height:{check:t,nullable:true,apply:s,init:null,themeable:true},maxHeight:{check:t,nullable:true,apply:s,init:null,themeable:true},allowGrowX:{check:r,apply:q,init:true,themeable:true},allowShrinkX:{check:r,apply:q,init:true,themeable:true},allowGrowY:{check:r,apply:q,init:true,themeable:true},allowShrinkY:{check:r,apply:q,init:true,themeable:true},allowStretchX:{group:[D,A],mode:o,themeable:true},allowStretchY:{group:[u,m],mode:o,themeable:true},marginTop:{check:t,init:0,apply:p,themeable:true},marginRight:{check:t,init:0,apply:p,themeable:true},marginBottom:{check:t,init:0,apply:p,themeable:true},marginLeft:{check:t,init:0,apply:p,themeable:true},margin:{group:[E,w,H,B],mode:o,themeable:true},alignX:{check:[v,F,y],nullable:true,apply:n,themeable:true},alignY:{check:[z,C,l,k],nullable:true,apply:n,themeable:true}},members:{__ei:null,__ej:null,__ek:null,__el:null,__em:null,__en:null,__eo:null,getBounds:function(){return this.__en||this.__ej||null;
},clearSeparators:function(){},renderSeparator:function(ba,bb){},renderLayout:function(d,top,e,f){var g;
{};
var h=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var h=this._getHeightForWidth(e);
}
if(h!=null&&h!==this.__ei){this.__ei=h;
qx.ui.core.queue.Layout.add(this);
return null;
}var j=this.__ej;

if(!j){j=this.__ej={};
}var i={};

if(d!==j.left||top!==j.top){i.position=true;
j.left=d;
j.top=top;
}
if(e!==j.width||f!==j.height){i.size=true;
j.width=e;
j.height=f;
}if(this.__ek){i.local=true;
delete this.__ek;
}
if(this.__em){i.margin=true;
delete this.__em;
}return i;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ek;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ek=true;
this.__el=null;
},getSizeHint:function(bc){var bd=this.__el;

if(bd){return bd;
}
if(bc===false){return null;
}bd=this.__el=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ei&&this.getHeight()==null){bd.height=this.__ei;
}if(bd.minWidth>bd.width){bd.width=bd.minWidth;
}
if(bd.maxWidth<bd.width){bd.width=bd.maxWidth;
}
if(!this.getAllowGrowX()){bd.maxWidth=bd.width;
}
if(!this.getAllowShrinkX()){bd.minWidth=bd.width;
}if(bd.minHeight>bd.height){bd.height=bd.minHeight;
}
if(bd.maxHeight<bd.height){bd.height=bd.maxHeight;
}
if(!this.getAllowGrowY()){bd.maxHeight=bd.height;
}
if(!this.getAllowShrinkY()){bd.minHeight=bd.height;
}return bd;
},_computeSizeHint:function(){var X=this.getMinWidth()||0;
var U=this.getMinHeight()||0;
var Y=this.getWidth()||X;
var W=this.getHeight()||U;
var T=this.getMaxWidth()||Infinity;
var V=this.getMaxHeight()||Infinity;
return {minWidth:X,width:Y,maxWidth:T,minHeight:U,height:W,maxHeight:V};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(K){var L=this._getLayout();

if(L&&L.hasHeightForWidth()){return L.getHeightForWidth(K);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__em=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__en;
},setUserBounds:function(M,top,N,O){this.__en={left:M,top:top,width:N,height:O};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__en;
qx.ui.core.queue.Layout.add(this);
},__ep:{},setLayoutProperties:function(a){if(a==null){return;
}var b=this.__eo;

if(!b){b=this.__eo={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(a);
}for(var c in a){if(a[c]==null){delete b[c];
}else{b[c]=a[c];
}}},getLayoutProperties:function(){return this.__eo||this.__ep;
},clearLayoutProperties:function(){delete this.__eo;
},updateLayoutProperties:function(Q){var R=this._getLayout();

if(R){var S;
{};
R.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var I=arguments.callee.base.call(this);
var J=this.__eo;

if(J){I.__eo=qx.lang.Object.clone(J);
}return I;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eo=this.__ej=this.__en=this.__el=null;
}});
})();
(function(){var n="qx.ui.core.DecoratorFactory",m="$$nopool$$";
qx.Class.define(n,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__eq={};
},statics:{MAX_SIZE:15,__er:m},members:{__eq:null,getDecoratorElement:function(e){var j=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(e)){var h=e;
var g=qx.theme.manager.Decoration.getInstance().resolve(e);
}else{var h=j.__er;
g=e;
}var i=this.__eq;

if(i[h]&&i[h].length>0){var f=i[h].pop();
}else{var f=this._createDecoratorElement(g,h);
}f.$$pooled=false;
return f;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__er){a.dispose();
return;
}var c=this.__eq;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var l=this.__eq;

for(var k in l){qx.util.DisposeUtil.disposeArray(l,k);
}}this.__eq=null;
}});
})();
(function(){var bU="px",bT="Boolean",bS="qx.event.type.Mouse",bR="qx.event.type.Drag",bQ="visible",bP="qx.event.type.Focus",bO="on",bN="Integer",bM="excluded",bL="qx.event.type.Data",bx="_applyPadding",bw="qx.event.type.Event",bv="hidden",bu="contextmenu",bt="String",bs="tabIndex",br="backgroundColor",bq="focused",bp="changeVisibility",bo="mshtml",cc="hovered",cd="qx.event.type.KeySequence",ca="qx.client",cb="absolute",bX="drag",bY="div",bV="disabled",bW="move",ce="dragstart",cf="qx.dynlocale",bE="dragchange",bD="dragend",bG="resize",bF="Decorator",bI="zIndex",bH="$$widget",bK="opacity",bJ="default",bC="Color",bB="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="_applyBackgroundColor",g="_applyFocusable",h="changeShadow",j="__eD",k="__es",m="qx.event.type.KeyInput",n="createChildControl",o="__ey",cj="Font",ci="_applyShadow",ch="_applyEnabled",cg="_applySelectable",cn="Number",cm="_applyKeepActive",cl="_applyVisibility",ck="repeat",cp="qxDraggable",co="syncAppearance",N="paddingLeft",O="_applyDroppable",L="__eB",M="__ex",R="#",S="qx.event.type.MouseWheel",P="_applyCursor",Q="_applyDraggable",J="changeTextColor",K="changeContextMenu",w="paddingTop",v="changeSelectable",y="hideFocus",x="none",s="outline",r="_applyAppearance",u="_applyOpacity",t="url(",q=")",p="qx.ui.core.Widget",X="_applyFont",Y="cursor",ba="qxDroppable",bb="__ew",T="changeZIndex",U="changeEnabled",V="changeFont",W="_applyDecorator",bc="_applyZIndex",bd="_applyTextColor",G="qx.ui.menu.Menu",F="_applyToolTipText",E="true",D="widget",C="changeDecorator",B="_applyTabIndex",A="__eF",z="changeAppearance",I="shorthand",H="/",be="",bf="_applyContextMenu",bg="paddingBottom",bh="changeNativeContextMenu",bi="qx.ui.tooltip.ToolTip",bj="qxKeepActive",bk="_applyKeepFocus",bl="paddingRight",bm="changeBackgroundColor",bn="changeLocale",bA="qxKeepFocus",bz="__et",by="qx/static/blank.gif";
qx.Class.define(p,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__es=this._createContainerElement();
this.__et=this.__eE();
this.__es.add(this.__et);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bL,resize:bL,move:bL,syncAppearance:bL,mousemove:bS,mouseover:bS,mouseout:bS,mousedown:bS,mouseup:bS,click:bS,dblclick:bS,contextmenu:bS,beforeContextmenuOpen:bS,mousewheel:S,keyup:cd,keydown:cd,keypress:cd,keyinput:m,focus:bP,blur:bP,focusin:bP,focusout:bP,activate:bP,deactivate:bP,capture:bw,losecapture:bw,drop:bR,dragleave:bR,dragover:bR,drag:bR,dragstart:bR,dragend:bR,dragchange:bR,droprequest:bR},properties:{paddingTop:{check:bN,init:0,apply:bx,themeable:true},paddingRight:{check:bN,init:0,apply:bx,themeable:true},paddingBottom:{check:bN,init:0,apply:bx,themeable:true},paddingLeft:{check:bN,init:0,apply:bx,themeable:true},padding:{group:[w,bl,bg,N],mode:I,themeable:true},zIndex:{nullable:true,init:null,apply:bc,event:T,check:bN,themeable:true},decorator:{nullable:true,init:null,apply:W,event:C,check:bF,themeable:true},shadow:{nullable:true,init:null,apply:ci,event:h,check:bF,themeable:true},backgroundColor:{nullable:true,check:bC,apply:f,event:bm,themeable:true},textColor:{nullable:true,check:bC,apply:bd,event:J,themeable:true,inheritable:true},font:{nullable:true,apply:X,check:cj,event:V,themeable:true,inheritable:true,dispose:true},opacity:{check:cn,apply:u,themeable:true,nullable:true,init:null},cursor:{check:bt,apply:P,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bi,nullable:true},toolTipText:{check:bt,nullable:true,event:bB,apply:F},toolTipIcon:{check:bt,nullable:true,event:bB},blockToolTip:{check:bT,init:false},visibility:{check:[bQ,bv,bM],init:bQ,apply:cl,event:bp},enabled:{init:true,check:bT,inheritable:true,apply:ch,event:U},anonymous:{init:false,check:bT},tabIndex:{check:bN,nullable:true,apply:B},focusable:{check:bT,init:false,apply:g},keepFocus:{check:bT,init:false,apply:bk},keepActive:{check:bT,init:false,apply:cm},draggable:{check:bT,init:false,apply:Q},droppable:{check:bT,init:false,apply:O},selectable:{check:bT,init:false,event:v,apply:cg},contextMenu:{check:G,apply:bf,nullable:true,event:K},nativeContextMenu:{check:bT,init:false,themeable:true,event:bh,apply:d},appearance:{check:bt,init:D,apply:r,event:z}},statics:{DEBUG:false,getWidgetByElement:function(cy){while(cy){var cz=cy.$$widget;
if(cz!=null){return qx.core.ObjectRegistry.fromHashCode(cz);
}cy=cy.parentNode;
}return null;
},contains:function(parent,dI){while(dI){if(parent==dI){return true;
}dI=dI.getLayoutParent();
}return false;
},__eu:new qx.ui.core.DecoratorFactory(),__ev:new qx.ui.core.DecoratorFactory()},members:{__es:null,__et:null,__ew:null,__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,_getLayout:function(){return this.__eB;
},_setLayout:function(gr){{};

if(this.__eB){this.__eB.connectToWidget(null);
}
if(gr){gr.connectToWidget(this);
}this.__eB=gr;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var dw=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(dw);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(dw);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eC:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var dJ=qx.theme.manager.Decoration.getInstance();
var dL=dJ.resolve(a).getInsets();
var dK=dJ.resolve(b).getInsets();

if(dL.top!=dK.top||dL.right!=dK.right||dL.bottom!=dK.bottom||dL.left!=dK.left){return true;
}return false;
},renderLayout:function(fc,top,fd,fe){var fn=arguments.callee.base.call(this,fc,top,fd,fe);
if(!fn){return;
}var fg=this.getContainerElement();
var content=this.getContentElement();
var fk=fn.size||this._updateInsets;
var fo=bU;
var fl={};
if(fn.position){fl.left=fc+fo;
fl.top=top+fo;
}if(fn.size){fl.width=fd+fo;
fl.height=fe+fo;
}
if(fn.position||fn.size){fg.setStyles(fl);
}
if(fk||fn.local||fn.margin){var ff=this.getInsets();
var innerWidth=fd-ff.left-ff.right;
var innerHeight=fe-ff.top-ff.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fi={};

if(this._updateInsets){fi.left=ff.left+fo;
fi.top=ff.top+fo;
}
if(fk){fi.width=innerWidth+fo;
fi.height=innerHeight+fo;
}
if(fk||this._updateInsets){content.setStyles(fi);
}
if(fn.size){var fm=this.__ey;

if(fm){fm.setStyles({width:fd+bU,height:fe+bU});
}}
if(fn.size||this._updateInsets){if(this.__ew){this.__ew.resize(fd,fe);
}}
if(fn.size){if(this.__ex){var ff=this.__ex.getInsets();
var fj=fd+ff.left+ff.right;
var fh=fe+ff.top+ff.bottom;
this.__ex.resize(fj,fh);
}}
if(fk||fn.local||fn.margin){if(this.__eB&&this.hasLayoutChildren()){this.__eB.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fn.position&&this.hasListener(bW)){this.fireDataEvent(bW,this.getBounds());
}
if(fn.size&&this.hasListener(bG)){this.fireDataEvent(bG,this.getBounds());
}delete this._updateInsets;
return fn;
},__eD:null,clearSeparators:function(){var fO=this.__eD;

if(!fO){return;
}var fP=qx.ui.core.Widget.__eu;
var content=this.getContentElement();
var fN;

for(var i=0,l=fO.length;i<l;i++){fN=fO[i];
fP.poolDecorator(fN);
content.remove(fN);
}fO.length=0;
},renderSeparator:function(dm,dn){var dp=qx.ui.core.Widget.__eu.getDecoratorElement(dm);
this.getContentElement().add(dp);
dp.resize(dn.width,dn.height);
dp.setStyles({left:dn.left+bU,top:dn.top+bU});
if(!this.__eD){this.__eD=[dp];
}else{this.__eD.push(dp);
}},_computeSizeHint:function(){var fv=this.getWidth();
var fu=this.getMinWidth();
var fq=this.getMaxWidth();
var ft=this.getHeight();
var fr=this.getMinHeight();
var fs=this.getMaxHeight();
{};
var fw=this._getContentHint();
var fp=this.getInsets();
var fy=fp.left+fp.right;
var fx=fp.top+fp.bottom;

if(fv==null){fv=fw.width+fy;
}
if(ft==null){ft=fw.height+fx;
}
if(fu==null){fu=fy;

if(fw.minWidth!=null){fu+=fw.minWidth;
}}
if(fr==null){fr=fx;

if(fw.minHeight!=null){fr+=fw.minHeight;
}}
if(fq==null){if(fw.maxWidth==null){fq=Infinity;
}else{fq=fw.maxWidth+fy;
}}
if(fs==null){if(fw.maxHeight==null){fs=Infinity;
}else{fs=fw.maxHeight+fx;
}}return {width:fv,minWidth:fu,maxWidth:fq,height:ft,minHeight:fr,maxHeight:fs};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__eB){this.__eB.invalidateLayoutCache();
}},_getContentHint:function(){var gg=this.__eB;

if(gg){if(this.hasLayoutChildren()){var gf;
var gh=gg.getSizeHint();
{};
return gh;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gv){var gz=this.getInsets();
var gC=gz.left+gz.right;
var gB=gz.top+gz.bottom;
var gA=gv-gC;
var gx=this._getLayout();

if(gx&&gx.hasHeightForWidth()){var gw=gx.getHeightForWidth(gv);
}else{gw=this._getContentHeightForWidth(gA);
}var gy=gw+gB;
return gy;
},_getContentHeightForWidth:function(cq){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var cv=this.getPaddingRight();
var cx=this.getPaddingBottom();
var cw=this.getPaddingLeft();

if(this.__ew){var cu=this.__ew.getInsets();
{};
top+=cu.top;
cv+=cu.right;
cx+=cu.bottom;
cw+=cu.left;
}return {"top":top,"right":cv,"bottom":cx,"left":cw};
},getInnerSize:function(){var gc=this.getBounds();

if(!gc){return null;
}var gb=this.getInsets();
return {width:gc.width-gb.left-gb.right,height:gc.height-gb.top-gb.bottom};
},show:function(){this.setVisibility(bQ);
},hide:function(){this.setVisibility(bv);
},exclude:function(){this.setVisibility(bM);
},isVisible:function(){return this.getVisibility()===bQ;
},isHidden:function(){return this.getVisibility()!==bQ;
},isExcluded:function(){return this.getVisibility()===bM;
},isSeeable:function(){var dT=this.getContainerElement().getDomElement();

if(dT){return dT.offsetWidth>0;
}var dS=this;

do{if(!dS.isVisible()){return false;
}
if(dS.isRootWidget()){return true;
}dS=dS.getLayoutParent();
}while(dS);
return false;
},_createContainerElement:function(){var eJ=new qx.html.Element(bY);
{};
eJ.setStyles({"position":cb,"zIndex":0});
eJ.setAttribute(bH,this.toHashCode());
{};
return eJ;
},__eE:function(){var ee=this._createContentElement();
{};
ee.setStyles({"position":cb,"zIndex":10});
return ee;
},_createContentElement:function(){var go=new qx.html.Element(bY);
go.setStyles({"overflowX":bv,"overflowY":bv});
return go;
},getContainerElement:function(){return this.__es;
},getContentElement:function(){return this.__et;
},getDecoratorElement:function(){return this.__ew||null;
},getShadowElement:function(){return this.__ex||null;
},__eF:null,getLayoutChildren:function(){var fL=this.__eF;

if(!fL){return this.__eG;
}var fM;

for(var i=0,l=fL.length;i<l;i++){var fK=fL[i];

if(fK.hasUserBounds()||fK.isExcluded()){if(fM==null){fM=fL.concat();
}qx.lang.Array.remove(fM,fK);
}}return fM||fL;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gs=this.__eB;

if(gs){gs.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var cr=this.__eF;

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(!cs.hasUserBounds()&&!cs.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eG:[],_getChildren:function(){return this.__eF||this.__eG;
},_indexOf:function(fI){var fJ=this.__eF;

if(!fJ){return -1;
}return fJ.indexOf(fI);
},_hasChildren:function(){var fb=this.__eF;
return fb!=null&&(!!fb[0]);
},addChildrenToQueue:function(dF){var dG=this.__eF;

if(!dG){return;
}var dH;

for(var i=0,l=dG.length;i<l;i++){dH=dG[i];
dF[dH.$$hash]=dH;
dH.addChildrenToQueue(dF);
}},_add:function(gm,gn){if(gm.getLayoutParent()==this){qx.lang.Array.remove(this.__eF,gm);
}
if(this.__eF){this.__eF.push(gm);
}else{this.__eF=[gm];
}this.__eH(gm,gn);
},_addAt:function(dz,dA,dB){if(!this.__eF){this.__eF=[];
}if(dz.getLayoutParent()==this){qx.lang.Array.remove(this.__eF,dz);
}var dC=this.__eF[dA];

if(dC===dz){return dz.setLayoutProperties(dB);
}
if(dC){qx.lang.Array.insertBefore(this.__eF,dz,dC);
}else{this.__eF.push(dz);
}this.__eH(dz,dB);
},_addBefore:function(fz,fA,fB){{};

if(fz==fA){return;
}
if(!this.__eF){this.__eF=[];
}if(fz.getLayoutParent()==this){qx.lang.Array.remove(this.__eF,fz);
}qx.lang.Array.insertBefore(this.__eF,fz,fA);
this.__eH(fz,fB);
},_addAfter:function(dq,dr,ds){{};

if(dq==dr){return;
}
if(!this.__eF){this.__eF=[];
}if(dq.getLayoutParent()==this){qx.lang.Array.remove(this.__eF,dq);
}qx.lang.Array.insertAfter(this.__eF,dq,dr);
this.__eH(dq,ds);
},_remove:function(eR){if(!this.__eF){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eF,eR);
this.__eI(eR);
},_removeAt:function(ey){if(!this.__eF){throw new Error("This widget has no children!");
}var ez=this.__eF[ey];
qx.lang.Array.removeAt(this.__eF,ey);
this.__eI(ez);
return ez;
},_removeAll:function(){if(!this.__eF){return;
}var dD=this.__eF.concat();
this.__eF.length=0;

for(var i=dD.length-1;i>=0;i--){this.__eI(dD[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eH:function(eK,eL){{};
var parent=eK.getLayoutParent();

if(parent&&parent!=this){parent._remove(eK);
}eK.setLayoutParent(this);
if(eL){eK.setLayoutProperties(eL);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eK);
}},__eI:function(dE){{};

if(dE.getLayoutParent()!==this){throw new Error("Remove Error: "+dE+" is not a child of this widget!");
}dE.setLayoutParent(null);
if(this.__eB){this.__eB.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(dE);
}},capture:function(db){this.getContainerElement().capture(db);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eF,eG,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ey){return;
}var ew=this.__ey=new qx.html.Element;
{};
ew.setStyles({position:cb,top:0,left:0,zIndex:7});
var ex=this.getBounds();

if(ex){this.__ey.setStyles({width:ex.width+bU,height:ex.height+bU});
}if(qx.core.Variant.isSet(ca,bo)){ew.setStyles({backgroundImage:t+qx.util.ResourceManager.getInstance().toUri(by)+q,backgroundRepeat:ck});
}this.getContainerElement().add(ew);
},_applyDecorator:function(en,eo){{};
var es=qx.ui.core.Widget.__eu;
var eq=this.getContainerElement();
if(!this.__ey&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(eo){eq.remove(this.__ew);
es.poolDecorator(this.__ew);
}if(en){var er=this.__ew=es.getDecoratorElement(en);
er.setStyle(bI,5);
var ep=this.getBackgroundColor();
er.tint(ep);
eq.add(er);
}else{delete this.__ew;
this._applyBackgroundColor(this.getBackgroundColor());
}if(en&&!eo&&ep){this.getContainerElement().setStyle(br,null);
}if(this.__eC(eo,en)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(en){var et=this.getBounds();

if(et){er.resize(et.width,et.height);
this.__ey&&
this.__ey.setStyles({width:et.width+bU,height:et.height+bU});
}}},_applyShadow:function(fR,fS){var ga=qx.ui.core.Widget.__ev;
var fU=this.getContainerElement();
if(fS){fU.remove(this.__ex);
ga.poolDecorator(this.__ex);
}if(fR){var fW=this.__ex=ga.getDecoratorElement(fR);
fU.add(fW);
var fY=fW.getInsets();
fW.setStyles({left:(-fY.left)+bU,top:(-fY.top)+bU});
var fX=this.getBounds();

if(fX){var fV=fX.width+fY.left+fY.right;
var fT=fX.height+fY.top+fY.bottom;
fW.resize(fV,fT);
}fW.tint(null);
}else{delete this.__ex;
}},_applyToolTipText:function(dt,du){if(qx.core.Variant.isSet(cf,bO)){if(this.__eA){return;
}var dv=qx.locale.Manager.getInstance();
this.__eA=dv.addListener(bn,function(){if(dt&&dt.translate){this.setToolTipText(dt.translate());
}},this);
}},_applyTextColor:function(eS,eT){},_applyZIndex:function(ej,ek){this.getContainerElement().setStyle(bI,ej==null?0:ej);
},_applyVisibility:function(eb,ec){var ed=this.getContainerElement();

if(eb===bQ){ed.show();
}else{ed.hide();
}var parent=this.$$parent;

if(parent&&(ec==null||eb==null||ec===bM||eb===bM)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(dV,dW){this.getContainerElement().setStyle(bK,dV==1?null:dV);
if(qx.core.Variant.isSet(ca,bo)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var dX=(dV==1||dV==null)?null:0.99;
this.getContentElement().setStyle(bK,dX);
}}},_applyCursor:function(eu,ev){if(eu==null&&!this.isSelectable()){eu=bJ;
}this.getContainerElement().setStyle(Y,eu,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(cV,cW){var cX=this.getBackgroundColor();
var da=this.getContainerElement();

if(this.__ew){this.__ew.tint(cX);
da.setStyle(br,null);
}else{var cY=qx.theme.manager.Color.getInstance().resolve(cX);
da.setStyle(br,cY);
}},_applyFont:function(de,df){},__eJ:null,$$stateChanges:null,_forwardStates:null,hasState:function(dY){var ea=this.__eJ;
return ea&&ea[dY];
},addState:function(cG){var cH=this.__eJ;

if(!cH){cH=this.__eJ={};
}
if(cH[cG]){return;
}this.__eJ[cG]=true;
if(cG===cc){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cK=this.__eM;

if(forward&&forward[cG]&&cK){var cI;

for(var cJ in cK){cI=cK[cJ];

if(cI instanceof qx.ui.core.Widget){cK[cJ].addState(cG);
}}}},removeState:function(eA){var eB=this.__eJ;

if(!eB||!eB[eA]){return;
}delete this.__eJ[eA];
if(eA===cc){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eE=this.__eM;

if(forward&&forward[eA]&&eE){for(var eD in eE){var eC=eE[eD];

if(eC instanceof qx.ui.core.Widget){eC.removeState(eA);
}}}},replaceState:function(fC,fD){var fE=this.__eJ;

if(!fE){fE=this.__eJ={};
}
if(!fE[fD]){fE[fD]=true;
}
if(fE[fC]){delete fE[fC];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fH=this.__eM;

if(forward&&forward[fD]&&fH){for(var fG in fH){var fF=fH[fG];

if(fF instanceof qx.ui.core.Widget){fF.replaceState(fC,fD);
}}}},__eK:null,__eL:null,syncAppearance:function(){var gH=this.__eJ;
var gG=this.__eK;
var gI=qx.theme.manager.Appearance.getInstance();
var gE=qx.core.Property.$$method.setThemed;
var gM=qx.core.Property.$$method.resetThemed;
if(this.__eL){delete this.__eL;
if(gG){var gD=gI.styleFrom(gG,gH,null,this.getAppearance());
if(gD){gG=null;
}}}if(!gG){var gF=this;
var gL=[];

do{gL.push(gF.$$subcontrol||gF.getAppearance());
}while(gF=gF.$$subparent);
gG=this.__eK=gL.reverse().join(H).replace(/#[0-9]+/g,be);
}var gJ=gI.styleFrom(gG,gH,null,this.getAppearance());

if(gJ){var gK;

if(gD){for(var gK in gD){if(gJ[gK]===undefined){this[gM[gK]]();
}}}{};
for(var gK in gJ){gJ[gK]===undefined?this[gM[gK]]():this[gE[gK]](gJ[gK]);
}}else if(gD){for(var gK in gD){this[gM[gK]]();
}}this.fireDataEvent(co,this.__eJ);
},_applyAppearance:function(cA,cB){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ez){qx.ui.core.queue.Appearance.add(this);
this.__ez=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eL=true;
qx.ui.core.queue.Appearance.add(this);
var eX=this.__eM;

if(eX){var eV;

for(var eW in eX){eV=eX[eW];

if(eV instanceof qx.ui.core.Widget){eV.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fQ=this;

while(fQ.getAnonymous()){fQ=fQ.getLayoutParent();

if(!fQ){return null;
}}return fQ;
},getFocusTarget:function(){var dU=this;

if(!dU.getEnabled()){return null;
}
while(dU.getAnonymous()||!dU.getFocusable()){dU=dU.getLayoutParent();

if(!dU||!dU.getEnabled()){return null;
}}return dU;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(ef,eg){var eh=this.getFocusElement();
if(ef){var ei=this.getTabIndex();

if(ei==null){ei=1;
}eh.setAttribute(bs,ei);
if(qx.core.Variant.isSet(ca,bo)){eh.setAttribute(y,E);
}else{eh.setStyle(s,x);
}}else{if(eh.isNativelyFocusable()){eh.setAttribute(bs,-1);
}else if(eg){eh.setAttribute(bs,null);
}}},_applyKeepFocus:function(dP){var dQ=this.getFocusElement();
dQ.setAttribute(bA,dP?bO:null);
},_applyKeepActive:function(gt){var gu=this.getContainerElement();
gu.setAttribute(bj,gt?bO:null);
},_applyTabIndex:function(gV){if(gV==null){gV=1;
}else if(gV<1||gV>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gV!=null){this.getFocusElement().setAttribute(bs,gV);
}},_applySelectable:function(dR){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(dR);
this.getContentElement().setSelectable(dR);
},_applyEnabled:function(gT,gU){if(gT===false){this.addState(bV);
this.removeState(cc);
if(this.isFocusable()){this.removeState(bq);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(bV);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(dg,dh,name){},_applyContextMenu:function(gi,gj){if(gj){gj.removeState(bu);

if(gj.getOpener()==this){gj.resetOpener();
}
if(!gi){this.removeListener(bu,this._onContextMenuOpen);
gj.removeListener(bp,this._onBeforeContextMenuOpen,this);
}}
if(gi){gi.setOpener(this);
gi.addState(bu);

if(!gj){this.addListener(bu,this._onContextMenuOpen);
gi.addListener(bp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bQ&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(eY,fa){if(!this.isEnabled()&&eY===true){eY=false;
}qx.ui.core.DragDropCursor.getInstance();
if(eY){this.addListener(ce,this._onDragStart);
this.addListener(bX,this._onDrag);
this.addListener(bD,this._onDragEnd);
this.addListener(bE,this._onDragChange);
}else{this.removeListener(ce,this._onDragStart);
this.removeListener(bX,this._onDrag);
this.removeListener(bD,this._onDragEnd);
this.removeListener(bE,this._onDragChange);
}this.getContainerElement().setAttribute(cp,eY?bO:null);
},_applyDroppable:function(dx,dy){if(!this.isEnabled()&&dx===true){dx=false;
}this.getContainerElement().setAttribute(ba,dx?bO:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bJ);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gk=qx.ui.core.DragDropCursor.getInstance();
var gl=e.getCurrentAction();
gl?gk.setAction(gl):gk.resetAction();
},visualizeFocus:function(){this.addState(bq);
},visualizeBlur:function(){this.removeState(bq);
},scrollChildIntoView:function(di,dj,dk,dl){this.scrollChildIntoViewX(di,dj,dl);
this.scrollChildIntoViewY(di,dk,dl);
},scrollChildIntoViewX:function(dM,dN,dO){this.getContentElement().scrollChildIntoViewX(dM.getContainerElement(),dN,dO);
},scrollChildIntoViewY:function(cL,cM,cN){this.getContentElement().scrollChildIntoViewY(cL.getContainerElement(),cM,cN);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(em){if(!this.__eM){return false;
}return !!this.__eM[em];
},__eM:null,_getCreatedChildControls:function(){return this.__eM;
},getChildControl:function(cS,cT){if(!this.__eM){if(cT){return null;
}this.__eM={};
}var cU=this.__eM[cS];

if(cU){return cU;
}
if(cT===true){return null;
}return this._createChildControl(cS);
},_showChildControl:function(cC){var cD=this.getChildControl(cC);
cD.show();
return cD;
},_excludeChildControl:function(cE){var cF=this.getChildControl(cE,true);

if(cF){cF.exclude();
}},_isChildControlVisible:function(gR){var gS=this.getChildControl(gR,true);

if(gS){return gS.isVisible();
}return false;
},_createChildControl:function(eM){if(!this.__eM){this.__eM={};
}else if(this.__eM[eM]){throw new Error("Child control '"+eM+"' already created!");
}var eQ=eM.indexOf(R);

if(eQ==-1){var eN=this._createChildControlImpl(eM);
}else{var eN=this._createChildControlImpl(eM.substring(0,eQ));
}
if(!eN){throw new Error("Unsupported control: "+eM);
}eN.$$subcontrol=eM;
eN.$$subparent=this;
var eO=this.__eJ;
var forward=this._forwardStates;

if(eO&&forward&&eN instanceof qx.ui.core.Widget){for(var eP in eO){if(forward[eP]){eN.addState(eP);
}}}this.fireDataEvent(n,eN);
return this.__eM[eM]=eN;
},_createChildControlImpl:function(ct){return null;
},_disposeChildControls:function(){var cR=this.__eM;

if(!cR){return;
}var cP=qx.ui.core.Widget;

for(var cQ in cR){var cO=cR[cQ];

if(!cP.contains(this,cO)){cO.destroy();
}else{cO.dispose();
}}delete this.__eM;
},_findTopControl:function(){var eU=this;

while(eU){if(!eU.$$subparent){return eU;
}eU=eU.$$subparent;
}return null;
},getContainerLocation:function(gp){var gq=this.getContainerElement().getDomElement();
return gq?qx.bom.element.Location.get(gq,gp):null;
},getContentLocation:function(gd){var ge=this.getContentElement().getDomElement();
return ge?qx.bom.element.Location.get(ge,gd):null;
},setDomLeft:function(eH){var eI=this.getContainerElement().getDomElement();

if(eI){eI.style.left=eH+bU;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gW){var gX=this.getContainerElement().getDomElement();

if(gX){gX.style.top=gW+bU;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(dc,top){var dd=this.getContainerElement().getDomElement();

if(dd){dd.style.left=dc+bU;
dd.style.top=top+bU;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var gN=arguments.callee.base.call(this);

if(this.getChildren){var gO=this.getChildren();

for(var i=0,l=gO.length;i<l;i++){gN.add(gO[i].clone());
}}return gN;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(cf,bO)){if(this.__eA){qx.locale.Manager.getInstance().removeListenerById(this.__eA);
}}this.getContainerElement().setAttribute(bH,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gQ=qx.ui.core.Widget;
var gP=this.getContainerElement();

if(this.__ew){gP.remove(this.__ew);
gQ.__eu.poolDecorator(this.__ew);
}
if(this.__ex){gP.remove(this.__ex);
gQ.__ev.poolDecorator(this.__ex);
}this.clearSeparators();
this.__ew=this.__ex=this.__eD=null;
}else{this._disposeArray(j);
this._disposeObjects(bb,M);
}this._disposeArray(A);
this.__eJ=this.__eM=null;
this._disposeObjects(L,k,bz,o);
}});
})();
(function(){var h="qx.event.type.Data",g="qx.ui.container.Composite",f="addChildWidget",e="removeChildWidget";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(b){arguments.callee.base.call(this);

if(b!=null){this._setLayout(b);
}},events:{addChildWidget:h,removeChildWidget:h},members:{_afterAddChild:function(a){this.fireNonBubblingEvent(f,qx.event.type.Data,[a]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(e,qx.event.type.Data,[i]);
}},defer:function(c,d){qx.ui.core.MChildrenHandling.remap(d);
qx.ui.core.MLayoutHandling.remap(d);
}});
})();
(function(){var j="keep-align",i="interval",h="Integer",g="direct",f="best-fit",e="mouse",d="bottom-left",c="disappear",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[g,j,f],init:j,themeable:true},placementModeY:{check:[g,j,f],init:j,themeable:true},offsetLeft:{check:h,init:0,themeable:true},offsetTop:{check:h,init:0,themeable:true},offsetRight:{check:h,init:0,themeable:true},offsetBottom:{check:h,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__eN:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(U,top){if(this.getDomMove()){this.setDomPosition(U,top);
}else{this.setLayoutProperties({left:U,top:top});
}},placeToWidget:function(y,z){if(z){this.__eN=qx.lang.Function.bind(this.placeToWidget,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__eN);
this.addListener(c,function(){if(this.__eN){qx.event.Idle.getInstance().removeListener(i,this.__eN);
this.__eN=null;
}},this);
}var A=y.getContainerLocation()||this.getLayoutLocation(y);
this.__eP(A);
},placeToMouse:function(event){var T=event.getDocumentLeft();
var top=event.getDocumentTop();
var S={left:T,top:top,right:T,bottom:top};
this.__eP(S);
},placeToElement:function(F,G){var location=qx.bom.element.Location.get(F);
var H={left:location.left,top:location.top,right:location.left+F.offsetWidth,bottom:location.top+F.offsetHeight};
if(G){this.__eN=qx.lang.Function.bind(this.placeToElement,this,F,false);
qx.event.Idle.getInstance().addListener(i,this.__eN);
this.addListener(c,function(){if(this.__eN){qx.event.Idle.getInstance().removeListener(i,this.__eN);
this.__eN=null;
}},this);
}this.__eP(H);
},placeToPoint:function(I){var J={left:I.left,top:I.top,right:I.left,bottom:I.top};
this.__eP(J);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__eO:function(B){var C=null;

if(this._computePlacementSize){var C=this._computePlacementSize();
}else if(this.isVisible()){var C=this.getBounds();
}
if(C==null){this.addListenerOnce(q,function(){this.__eO(B);
},this);
}else{B.call(this,C);
}},__eP:function(V){this.__eO(function(W){var X=qx.util.placement.Placement.compute(W,this.getLayoutParent().getBounds(),V,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(X.left,X.top);
});
},setSmart:function(D){{};
var E=D?j:g;
this.set({placementModeX:E,placementModeY:E});
},getSmart:function(){{};
var Q=this.getPlacementModeX()==j?true:false;
var R=this.getPlacementModeY()==j?true:false;
return Q&&R;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__eN){qx.event.Idle.getInstance().removeListener(i,this.__eN);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(x,y){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case l:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||arguments.callee.base.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(p,q){var r=this.getChildControl(l);
p==null?r.resetIcon:r.setIcon(p);
},_applyLabel:function(m,n){var o=this.getChildControl(l);
m==null?o.resetLabel():o.setLabel(m);
},_applyRich:function(u,v){var w=this.getChildControl(l);
w.setRich(u);
}}});
})();
(function(){var h="qx.ui.core.queue.Layout",g="layout";
qx.Class.define(h,{statics:{__eQ:{},remove:function(a){delete this.__eQ[a.$$hash];
},add:function(f){this.__eQ[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(g);
},flush:function(){var j=this.__eT();
for(var i=j.length-1;i>=0;i--){var k=j[i];
if(k.hasValidLayout()){continue;
}if(k.isRootWidget()&&!k.hasUserBounds()){var m=k.getSizeHint();
k.renderLayout(0,0,m.width,m.height);
}else{var l=k.getBounds();
k.renderLayout(l.left,l.top,l.width,l.height);
}}},getNestingLevel:function(b){var c=this.__eS;
var e=0;
var parent=b;
while(true){if(c[parent.$$hash]!=null){e+=c[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
e+=1;
}var d=e;

while(b&&b!==parent){c[b.$$hash]=d--;
b=b.$$parent;
}return e;
},__eR:function(){var A=qx.ui.core.queue.Visibility;
this.__eS={};
var z=[];
var y=this.__eQ;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__eT:function(){var q=[];
var s=this.__eR();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var h="qx.event.handler.UserAction";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__eU=a;
this.__eV=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eU:null,__eV:null,canHandleEvent:function(i,j){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},destruct:function(){this.__eU=this.__eV=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var h="qx.util.DeferredCallManager",g="singleton";
qx.Class.define(h,{extend:qx.core.Object,type:g,construct:function(){this.__eW={};
this.__eX=qx.lang.Function.bind(this.__fc,this);
this.__eY=false;
},members:{__fa:null,__fb:null,__eW:null,__eY:null,__eX:null,schedule:function(c){if(this.__fa==null){this.__fa=window.setTimeout(this.__eX,0);
}var d=c.toHashCode();
if(this.__fb&&this.__fb[d]){return;
}this.__eW[d]=c;
this.__eY=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fb&&this.__fb[f]){this.__fb[f]=null;
return;
}delete this.__eW[f];
if(qx.lang.Object.isEmpty(this.__eW)&&this.__fa!=null){window.clearTimeout(this.__fa);
this.__fa=null;
}},__fc:qx.event.GlobalError.observeMethod(function(){this.__fa=null;
while(this.__eY){this.__fb=qx.lang.Object.clone(this.__eW);
this.__eW={};
this.__eY=false;

for(var b in this.__fb){var a=this.__fb[b];

if(a){this.__fb[b]=null;
a.call();
}}}this.__fb=null;
})},destruct:function(){if(this.__fa!=null){window.clearTimeout(this.__fa);
}this.__eX=this.__eW=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this.__fd=a;
this.__fe=b||null;
this.__ff=qx.util.DeferredCallManager.getInstance();
},members:{__fd:null,__fe:null,__ff:null,cancel:function(){this.__ff.cancel(this);
},schedule:function(){this.__ff.schedule(this);
},call:function(){this.__fe?this.__fd.apply(this.__fe):this.__fd();
}},destruct:function(d,e){this.cancel();
this.__fe=this.__fd=this.__ff=null;
}});
})();
(function(){var bR="element",bQ="qx.client",bP="div",bO="",bN="mshtml",bM="none",bL="scroll",bK="qx.html.Element",bJ="|capture|",bI="activate",ci="blur",ch="deactivate",cg="userSelect",cf="capture",ce="visible",cd="releaseCapture",cc="|bubble|",cb="qxSelectable",ca="tabIndex",bY="off",bW="focus",bX="normal",bU="__fC",bV="webkit",bS="hidden",bT="on";
qx.Class.define(bK,{extend:qx.core.Object,construct:function(be){arguments.callee.base.call(this);
this.__fg=be||bP;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__fh:{},_scheduleFlush:function(dy){qx.html.Element.__fO.schedule();
},flush:function(){var cY;
{};
var cQ=this.__fi();
var cP=cQ.getFocus();

if(cP&&this.__fm(cP)){cQ.blur(cP);
}var dh=cQ.getActive();

if(dh&&this.__fm(dh)){qx.bom.Element.deactivate(dh);
}var cT=this.__fk();

if(cT&&this.__fm(cT)){qx.bom.Element.releaseCapture(cT);
}var da=[];
var dc=this._modified;

for(var cX in dc){cY=dc[cX];
if(cY.__fG()){if(cY.__fn&&qx.dom.Hierarchy.isRendered(cY.__fn)){da.push(cY);
}else{{};
cY.__fF();
}delete dc[cX];
}}
for(var i=0,l=da.length;i<l;i++){cY=da[i];
{};
cY.__fF();
}var cV=this._visibility;

for(var cX in cV){cY=cV[cX];
{};
cY.__fn.style.display=cY.__fq?bO:bM;
if(qx.core.Variant.isSet(bQ,bN)){if(!(document.documentMode>=8)){cY.__fn.style.visibility=cY.__fq?ce:bS;
}}delete cV[cX];
}var scroll=this._scroll;

for(var cX in scroll){cY=scroll[cX];
var di=cY.__fn;

if(di&&di.offsetWidth){var cS=true;
if(cY.__ft!=null){cY.__fn.scrollLeft=cY.__ft;
delete cY.__ft;
}if(cY.__fu!=null){cY.__fn.scrollTop=cY.__fu;
delete cY.__fu;
}var de=cY.__fr;

if(de!=null){var cW=de.element.getDomElement();

if(cW&&cW.offsetWidth){qx.bom.element.Scroll.intoViewX(cW,di,de.align);
delete cY.__fr;
}else{cS=false;
}}var df=cY.__fs;

if(df!=null){var cW=df.element.getDomElement();

if(cW&&cW.offsetWidth){qx.bom.element.Scroll.intoViewY(cW,di,df.align);
delete cY.__fs;
}else{cS=false;
}}if(cS){delete scroll[cX];
}}}var cR={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dg=this._actions[i];
var dd=dg.element.__fn;

if(!dd||!cR[dg.type]&&!dg.element.__fG()){continue;
}var cU=dg.args;
cU.unshift(dd);
qx.bom.Element[dg.type].apply(qx.bom.Element,cU);
}this._actions=[];
for(var cX in this.__fh){var cO=this.__fh[cX];
var di=cO.element.__fn;

if(di){qx.bom.Selection.set(di,cO.start,cO.end);
delete this.__fh[cX];
}}qx.event.handler.Appear.refresh();
},__fi:function(){if(!this.__fj){var bq=qx.event.Registration.getManager(window);
this.__fj=bq.getHandler(qx.event.handler.Focus);
}return this.__fj;
},__fk:function(){if(!this.__fl){var bh=qx.event.Registration.getManager(window);
this.__fl=bh.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__fl.getCaptureElement();
},__fm:function(cj){var ck=qx.core.ObjectRegistry.fromHashCode(cj.$$element);
return ck&&!ck.__fG();
}},members:{__fg:null,__fn:null,__fo:false,__fp:true,__fq:true,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,__fw:null,__fx:null,__fy:null,__fz:null,__fA:null,__fB:null,__fC:null,__fD:null,__fE:null,_scheduleChildrenUpdate:function(){if(this.__fD){return;
}this.__fD=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
},_createDomElement:function(){return qx.bom.Element.create(this.__fg);
},__fF:function(){{};
var bu=this.__fC;

if(bu){var length=bu.length;
var bv;

for(var i=0;i<length;i++){bv=bu[i];

if(bv.__fq&&bv.__fp&&!bv.__fn){bv.__fF();
}}}
if(!this.__fn){this.__fn=this._createDomElement();
this.__fn.$$element=this.$$hash;
this._copyData(false);

if(bu&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fD){this._syncChildren();
}}delete this.__fD;
},_insertChildren:function(){var cJ=this.__fC;
var length=cJ.length;
var cL;

if(length>2){var cK=document.createDocumentFragment();

for(var i=0;i<length;i++){cL=cJ[i];

if(cL.__fn&&cL.__fp){cK.appendChild(cL.__fn);
}}this.__fn.appendChild(cK);
}else{var cK=this.__fn;

for(var i=0;i<length;i++){cL=cJ[i];

if(cL.__fn&&cL.__fp){cK.appendChild(cL.__fn);
}}}},_syncChildren:function(){var F;
var K=qx.core.ObjectRegistry;
var B=this.__fC;
var I=B.length;
var C;
var G;
var E=this.__fn;
var H=E.childNodes;
var D=0;
var J;
{};
for(var i=H.length-1;i>=0;i--){J=H[i];
G=K.fromHashCode(J.$$element);

if(!G||!G.__fp||G.__fE!==this){E.removeChild(J);
{};
}}for(var i=0;i<I;i++){C=B[i];
if(C.__fp){G=C.__fn;
J=H[D];

if(!G){continue;
}if(G!=J){if(J){E.insertBefore(G,J);
}else{E.appendChild(G);
}{};
}D++;
}}{};
},_copyData:function(L){var P=this.__fn;
var O=this.__fz;

if(O){var M=qx.bom.element.Attribute;

for(var Q in O){M.set(P,Q,O[Q]);
}}var O=this.__fy;

if(O){var N=qx.bom.element.Style;

if(L){N.setStyles(P,O);
}else{N.setCss(P,N.compile(O));
}}var O=this.__fA;

if(O){for(var Q in O){this._applyProperty(Q,O[Q]);
}}var O=this.__fB;

if(O){qx.event.Registration.getManager(P).importListeners(P,O);
delete this.__fB;
}},_syncData:function(){var dI=this.__fn;
var dH=qx.bom.element.Attribute;
var dF=qx.bom.element.Style;
var dG=this.__fw;

if(dG){var dL=this.__fz;

if(dL){var dJ;

for(var dK in dG){dJ=dL[dK];

if(dJ!==undefined){dH.set(dI,dK,dJ);
}else{dH.reset(dI,dK);
}}}this.__fw=null;
}var dG=this.__fv;

if(dG){var dL=this.__fy;

if(dL){var dE={};

for(var dK in dG){dE[dK]=dL[dK];
}dF.setStyles(dI,dE);
}this.__fv=null;
}var dG=this.__fx;

if(dG){var dL=this.__fA;

if(dL){var dJ;

for(var dK in dG){this._applyProperty(dK,dL[dK]);
}}this.__fx=null;
}},__fG:function(){var br=this;
while(br){if(br.__fo){return true;
}
if(!br.__fp||!br.__fq){return false;
}br=br.__fE;
}return false;
},__fH:function(A){if(A.__fE===this){throw new Error("Child is already in: "+A);
}
if(A.__fo){throw new Error("Root elements could not be inserted into other ones.");
}if(A.__fE){A.__fE.remove(A);
}A.__fE=this;
if(!this.__fC){this.__fC=[];
}if(this.__fn){this._scheduleChildrenUpdate();
}},__fI:function(bE){if(bE.__fE!==this){throw new Error("Has no child: "+bE);
}if(this.__fn){this._scheduleChildrenUpdate();
}delete bE.__fE;
},__fJ:function(bi){if(bi.__fE!==this){throw new Error("Has no child: "+bi);
}if(this.__fn){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fC||null;
},getChild:function(q){var r=this.__fC;
return r&&r[q]||null;
},hasChildren:function(){var T=this.__fC;
return T&&T[0]!==undefined;
},indexOf:function(dO){var dP=this.__fC;
return dP?dP.indexOf(dO):-1;
},hasChild:function(dM){var dN=this.__fC;
return dN&&dN.indexOf(dM)!==-1;
},add:function(dx){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fH(arguments[i]);
}this.__fC.push.apply(this.__fC,arguments);
}else{this.__fH(dx);
this.__fC.push(dx);
}return this;
},addAt:function(ct,cu){this.__fH(ct);
qx.lang.Array.insertAt(this.__fC,ct,cu);
return this;
},remove:function(bz){var bA=this.__fC;

if(!bA){return;
}
if(arguments[1]){var bB;

for(var i=0,l=arguments.length;i<l;i++){bB=arguments[i];
this.__fI(bB);
qx.lang.Array.remove(bA,bB);
}}else{this.__fI(bz);
qx.lang.Array.remove(bA,bz);
}return this;
},removeAt:function(j){var k=this.__fC;

if(!k){throw new Error("Has no children!");
}var m=k[j];

if(!m){throw new Error("Has no child at this position!");
}this.__fI(m);
qx.lang.Array.removeAt(this.__fC,j);
return this;
},removeAll:function(){var bt=this.__fC;

if(bt){for(var i=0,l=bt.length;i<l;i++){this.__fI(bt[i]);
}bt.length=0;
}return this;
},getParent:function(){return this.__fE||null;
},insertInto:function(parent,bk){parent.__fH(this);

if(bk==null){parent.__fC.push(this);
}else{qx.lang.Array.insertAt(this.__fC,this,bk);
}return this;
},insertBefore:function(cl){var parent=cl.__fE;
parent.__fH(this);
qx.lang.Array.insertBefore(parent.__fC,this,cl);
return this;
},insertAfter:function(dj){var parent=dj.__fE;
parent.__fH(this);
qx.lang.Array.insertAfter(parent.__fC,this,dj);
return this;
},moveTo:function(n){var parent=this.__fE;
parent.__fJ(this);
var o=parent.__fC.indexOf(this);

if(o===n){throw new Error("Could not move to same index!");
}else if(o<n){n--;
}qx.lang.Array.removeAt(parent.__fC,o);
qx.lang.Array.insertAt(parent.__fC,this,n);
return this;
},moveBefore:function(R){var parent=this.__fE;
return this.moveTo(parent.__fC.indexOf(R));
},moveAfter:function(p){var parent=this.__fE;
return this.moveTo(parent.__fC.indexOf(p)+1);
},free:function(){var parent=this.__fE;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fC){return;
}parent.__fI(this);
qx.lang.Array.remove(parent.__fC,this);
return this;
},getDomElement:function(){return this.__fn||null;
},getNodeName:function(){return this.__fg;
},setNodeName:function(name){this.__fg=name;
},setRoot:function(cI){this.__fo=cI;
},useMarkup:function(bo){if(this.__fn){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bQ,bN)){var bp=document.createElement(bP);
}else{var bp=qx.html.Element.__fK;

if(!bp){bp=qx.html.Element.__fK=document.createElement(bP);
}}bp.innerHTML=bo;
this.__fn=bp.firstChild;
this.__fn.$$element=this.$$hash;
this._copyData(true);
return this.__fn;
},useElement:function(cM){if(this.__fn){throw new Error("Could not overwrite existing element!");
}this.__fn=cM;
this.__fn.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bg=this.getAttribute(ca);

if(bg>=1){return true;
}var bf=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bg>=0&&bf[this.__fg]){return true;
}return false;
},setSelectable:function(z){this.setAttribute(cb,z?bT:bY);
if(qx.core.Variant.isSet(bQ,bV)){this.setStyle(cg,z?bX:bM);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__fg];
},include:function(){if(this.__fp){return;
}delete this.__fp;

if(this.__fE){this.__fE._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__fp){return;
}this.__fp=false;

if(this.__fE){this.__fE._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__fp===true;
},show:function(){if(this.__fq){return;
}
if(this.__fn){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}if(this.__fE){this.__fE._scheduleChildrenUpdate();
}delete this.__fq;
},hide:function(){if(!this.__fq){return;
}
if(this.__fn){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}this.__fq=false;
},isVisible:function(){return this.__fq===true;
},scrollChildIntoViewX:function(s,t,u){var v=this.__fn;
var w=s.getDomElement();

if(u!==false&&v&&v.offsetWidth&&w&&w.offsetWidth){qx.bom.element.Scroll.intoViewX(w,v,t);
}else{this.__fr={element:s,align:t};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__ft;
},scrollChildIntoViewY:function(ds,dt,du){var dv=this.__fn;
var dw=ds.getDomElement();

if(du!==false&&dv&&dv.offsetWidth&&dw&&dw.offsetWidth){qx.bom.element.Scroll.intoViewY(dw,dv,dt);
}else{this.__fs={element:ds,align:dt};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__fu;
},scrollToX:function(x,dz){var dA=this.__fn;

if(dz!==true&&dA&&dA.offsetWidth){dA.scrollLeft=x;
}else{this.__ft=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__fr;
},getScrollX:function(){var cq=this.__fn;

if(cq){return cq.scrollLeft;
}return this.__ft||0;
},scrollToY:function(y,dC){var dD=this.__fn;

if(dC!==true&&dD&&dD.offsetWidth){dD.scrollTop=y;
}else{this.__fu=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__fs;
},getScrollY:function(){var cN=this.__fn;

if(cN){return cN.scrollTop;
}return this.__fu||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bL,this.__fM,this);
},enableScrolling:function(){this.removeListener(bL,this.__fM,this);
},__fL:null,__fM:function(e){if(!this.__fL){this.__fL=true;
this.__fn.scrollTop=0;
this.__fn.scrollLeft=0;
delete this.__fL;
}},getTextSelection:function(){var bs=this.__fn;

if(bs){return qx.bom.Selection.get(bs);
}return null;
},getTextSelectionLength:function(){var f=this.__fn;

if(f){return qx.bom.Selection.getLength(f);
}return null;
},getTextSelectionStart:function(){var g=this.__fn;

if(g){return qx.bom.Selection.getStart(g);
}return null;
},getTextSelectionEnd:function(){var bC=this.__fn;

if(bC){return qx.bom.Selection.getEnd(bC);
}return null;
},setTextSelection:function(a,b){var c=this.__fn;

if(c){qx.bom.Selection.set(c,a,b);
return;
}qx.html.Element.__fh[this.toHashCode()]={element:this,start:a,end:b};
qx.html.Element._scheduleFlush(bR);
},clearTextSelection:function(){var S=this.__fn;

if(S){qx.bom.Selection.clear(S);
}delete qx.html.Element.__fh[this.toHashCode()];
},__fN:function(dQ,dR){var dS=qx.html.Element._actions;
dS.push({type:dQ,element:this,args:dR||[]});
qx.html.Element._scheduleFlush(bR);
},focus:function(){this.__fN(bW);
},blur:function(){this.__fN(ci);
},activate:function(){this.__fN(bI);
},deactivate:function(){this.__fN(ch);
},capture:function(bj){this.__fN(cf,[bj!==false]);
},releaseCapture:function(){this.__fN(cd);
},setStyle:function(bF,bG,bH){if(!this.__fy){this.__fy={};
}
if(this.__fy[bF]==bG){return;
}
if(bG==null){delete this.__fy[bF];
}else{this.__fy[bF]=bG;
}if(this.__fn){if(bH){qx.bom.element.Style.set(this.__fn,bF,bG);
return this;
}if(!this.__fv){this.__fv={};
}this.__fv[bF]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},setStyles:function(cv,cw){var cx=qx.bom.element.Style;

if(!this.__fy){this.__fy={};
}
if(this.__fn){if(!this.__fv){this.__fv={};
}
for(var cz in cv){var cy=cv[cz];

if(this.__fy[cz]==cy){continue;
}
if(cy==null){delete this.__fy[cz];
}else{this.__fy[cz]=cy;
}if(cw){cx.set(this.__fn,cz,cy);
continue;
}this.__fv[cz]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}else{for(var cz in cv){var cy=cv[cz];

if(this.__fy[cz]==cy){continue;
}
if(cy==null){delete this.__fy[cz];
}else{this.__fy[cz]=cy;
}}}return this;
},removeStyle:function(dT,dU){this.setStyle(dT,null,dU);
},getStyle:function(cp){return this.__fy?this.__fy[cp]:null;
},getAllStyles:function(){return this.__fy||null;
},setAttribute:function(bl,bm,bn){if(!this.__fz){this.__fz={};
}
if(this.__fz[bl]==bm){return;
}
if(bm==null){delete this.__fz[bl];
}else{this.__fz[bl]=bm;
}if(this.__fn){if(bn){qx.bom.element.Attribute.set(this.__fn,bl,bm);
return this;
}if(!this.__fw){this.__fw={};
}this.__fw[bl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},setAttributes:function(bw,bx){for(var by in bw){this.setAttribute(by,bw[by],bx);
}return this;
},removeAttribute:function(cr,cs){this.setAttribute(cr,null,cs);
},getAttribute:function(dB){return this.__fz?this.__fz[dB]:null;
},_applyProperty:function(name,cH){},_setProperty:function(bb,bc,bd){if(!this.__fA){this.__fA={};
}
if(this.__fA[bb]==bc){return;
}
if(bc==null){delete this.__fA[bb];
}else{this.__fA[bb]=bc;
}if(this.__fn){if(bd){this._applyProperty(bb,bc);
return this;
}if(!this.__fx){this.__fx={};
}this.__fx[bb]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},_removeProperty:function(dq,dr){this._setProperty(dq,null,dr);
},_getProperty:function(cm){var cn=this.__fA;

if(!cn){return null;
}var co=cn[cm];
return co==null?null:co;
},addListener:function(U,V,self,W){var X;

if(this.$$disposed){return null;
}{};

if(this.__fn){return qx.event.Registration.addListener(this.__fn,U,V,self,W);
}
if(!this.__fB){this.__fB={};
}
if(W==null){W=false;
}var Y=qx.event.Manager.getNextUniqueId();
var ba=U+(W?bJ:cc)+Y;
this.__fB[ba]={type:U,listener:V,self:self,capture:W,unique:Y};
return ba;
},removeListener:function(cA,cB,self,cC){var cD;

if(this.$$disposed){return null;
}{};

if(this.__fn){qx.event.Registration.removeListener(this.__fn,cA,cB,self,cC);
}else{var cF=this.__fB;
var cE;

if(cC==null){cC=false;
}
for(var cG in cF){cE=cF[cG];
if(cE.listener===cB&&cE.self===self&&cE.capture===cC&&cE.type===cA){delete cF[cG];
break;
}}}return this;
},removeListenerById:function(d){if(this.$$disposed){return null;
}
if(this.__fn){qx.event.Registration.removeListenerById(this.__fn,d);
}else{delete this.__fB[d];
}return this;
},hasListener:function(dk,dl){if(this.$$disposed){return false;
}
if(this.__fn){return qx.event.Registration.hasListener(this.__fn,dk,dl);
}var dn=this.__fB;
var dm;

if(dl==null){dl=false;
}
for(var dp in dn){dm=dn[dp];
if(dm.capture===dl&&dm.type===dk){return true;
}}return false;
}},defer:function(h){h.__fO=new qx.util.DeferredCall(h.flush,h);
},destruct:function(){var bD=this.__fn;

if(bD){qx.event.Registration.getManager(bD).removeAllListeners(bD);
bD.$$element=bO;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fE;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bU);
this.__fz=this.__fy=this.__fB=this.__fA=this.__fw=this.__fv=this.__fx=this.__fn=this.__fE=this.__fr=this.__fs=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__fP:false,__fQ:{},__fR:0,MAX_RETRIES:10,scheduleFlush:function(c){var self=qx.ui.core.queue.Manager;
self.__fQ[c]=true;

if(!self.__fP){self.__fU.schedule();
self.__fP=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fS){return;
}self.__fS=true;
self.__fU.cancel();
var h=self.__fQ;
self.__fT(function(){while(h.visibility||h.widget||h.appearance||h.layout||h.element){if(h.widget){delete h.widget;
qx.ui.core.queue.Widget.flush();
}
if(h.visibility){delete h.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(h.appearance){delete h.appearance;
qx.ui.core.queue.Appearance.flush();
}if(h.widget||h.visibility||h.appearance){continue;
}
if(h.layout){delete h.layout;
qx.ui.core.queue.Layout.flush();
}if(h.widget||h.visibility||h.appearance||h.layout){continue;
}
if(h.element){delete h.element;
qx.html.Element.flush();
}}},function(){self.__fP=false;
});
self.__fT(function(){if(h.dispose){delete h.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__fS=false;
});
self.__fR=0;
},__fT:function(d,f){var self=qx.ui.core.queue.Manager;

try{d();
}catch(e){{};
self.__fP=false;
self.__fS=false;
self.__fR+=1;

if(self.__fR<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__fR-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{f();
}}},defer:function(g){g.__fU=new qx.util.DeferredCall(g.flush);
qx.html.Element._scheduleFlush=g.scheduleFlush;
qx.event.Registration.addListener(window,a,g.flush);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(u){this._manager=u;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var br="keydown",bq="qx.client",bp="keypress",bo="NumLock",bn="keyup",bm="Enter",bl="0",bk="9",bj="-",bi="PageUp",cy="+",cx="PrintScreen",cw="gecko",cv="A",cu="Z",ct="Left",cs="F5",cr="Down",cq="Up",cp="F11",by="F6",bz="useraction",bw="F3",bx="keyinput",bu="Insert",bv="F8",bs="End",bt="/",bG="Delete",bH="*",bT="F1",bP="F4",cc="Home",bW="F2",cl="F12",ch="PageDown",bL="F7",co="F9",cn="F10",cm="Right",bK="text",bN="Escape",bO="webkit",bR="5",bU="3",bX="Meta",ce="7",cj="CapsLock",bA="input",bB="Control",bM="Space",cb="Tab",ca="Shift",bY="Pause",cg="Unidentified",cf="qx.event.handler.Keyboard",bV="mshtml",cd="mshtml|webkit",bf="6",ci="off",bC="Apps",bD="4",bQ="Alt",bg="2",bh="Scroll",bJ="1",bE="8",bF="Win",bI="autoComplete",bS=",",ck="Backspace";
qx.Class.define(cf,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){arguments.callee.base.call(this);
this.__fV=V;
this.__fW=V.getWindow();
if(qx.core.Variant.isSet(bq,cw)){this.__fX=this.__fW;
}else{this.__fX=this.__fW.document.documentElement;
}this.__fY={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(a){if(this._identifierToKeyCodeMap[a]){return true;
}
if(a.length!=1){return false;
}
if(a>=bl&&a<=bk){return true;
}
if(a>=cv&&a<=cu){return true;
}
switch(a){case cy:case bj:case bH:case bt:return true;
default:return false;
}}},members:{__ga:null,__fV:null,__fW:null,__fX:null,__fY:null,__gb:null,__gc:null,__gd:null,canHandleEvent:function(P,Q){},registerEvent:function(bc,bd,be){},unregisterEvent:function(b,c,d){},_fireInputEvent:function(l,m){var n=this.__ge();
if(n&&n.offsetWidth!=0){var event=qx.event.Registration.createEvent(bx,qx.event.type.KeyInput,[l,n,m]);
this.__fV.dispatchEvent(n,event);
}if(this.__fW){qx.event.Registration.fireEvent(this.__fW,bz,qx.event.type.Data,[bx]);
}},_fireSequenceEvent:function(K,L,M){var N=this.__ge();
var O=K.keyCode;
var event=qx.event.Registration.createEvent(L,qx.event.type.KeySequence,[K,N,M]);
this.__fV.dispatchEvent(N,event);
if(qx.core.Variant.isSet(bq,cd)){if(L==br&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(O)&&!this._emulateKeyPress[O]){this._fireSequenceEvent(K,bp,M);
}}}if(this.__fW){qx.event.Registration.fireEvent(this.__fW,bz,qx.event.type.Data,[L]);
}},__ge:function(){var u=this.__fV.getHandler(qx.event.handler.Focus);
var v=u.getActive();
if(!v||v.offsetWidth==0){v=u.getFocus();
}if(!v||v.offsetWidth==0){v=this.__fV.getWindow().document.body;
}return v;
},_initKeyObserver:function(){this.__ga=qx.lang.Function.listener(this.__gf,this);
this.__gd=qx.lang.Function.listener(this.__gh,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fX,bn,this.__ga);
Event.addNativeListener(this.__fX,br,this.__ga);
Event.addNativeListener(this.__fX,bp,this.__gd);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fX,bn,this.__ga);
Event.removeNativeListener(this.__fX,br,this.__ga);
Event.removeNativeListener(this.__fX,bp,this.__gd);

for(var cE in (this.__gc||{})){var cD=this.__gc[cE];
Event.removeNativeListener(cD.target,bp,cD.callback);
}delete (this.__gc);
},__gf:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(p){p=window.event||p;
var s=p.keyCode;
var q=0;
var r=p.type;
if(!(this.__fY[s]==br&&r==br)){this._idealKeyHandler(s,q,r,p);
}if(r==br){if(this._isNonPrintableKeyCode(s)||this._emulateKeyPress[s]){this._idealKeyHandler(s,q,bp,p);
}}this.__fY[s]=r;
},"gecko":function(W){var bb=this._keyCodeFix[W.keyCode]||W.keyCode;
var Y=0;
var ba=W.type;
if(qx.bom.client.Platform.WIN){var X=bb?this._keyCodeToIdentifier(bb):this._charCodeToIdentifier(Y);

if(!(this.__fY[X]==br&&ba==br)){this._idealKeyHandler(bb,Y,ba,W);
}this.__fY[X]=ba;
}else{this._idealKeyHandler(bb,Y,ba,W);
}this.__gg(W.target,ba,bb);
},"webkit":function(R){var U=0;
var S=0;
var T=R.type;
if(qx.bom.client.Engine.VERSION<525.13){if(T==bn||T==br){U=this._charCode2KeyCode[R.charCode]||R.keyCode;
}else{if(this._charCode2KeyCode[R.charCode]){U=this._charCode2KeyCode[R.charCode];
}else{S=R.charCode;
}}this._idealKeyHandler(U,S,T,R);
}else{U=R.keyCode;
if(!(this.__fY[U]==br&&T==br)){this._idealKeyHandler(U,S,T,R);
}if(T==br){if(this._isNonPrintableKeyCode(U)||this._emulateKeyPress[U]){this._idealKeyHandler(U,S,bp,R);
}}this.__fY[U]=T;
}},"opera":function(o){this.__gb=o.keyCode;
this._idealKeyHandler(o.keyCode,0,o.type,o);
}})),__gg:qx.core.Variant.select(bq,{"gecko":function(cF,cG,cH){if(cG===br&&(cH==33||cH==34||cH==38||cH==40)&&cF.type==bK&&cF.tagName.toLowerCase()===bA&&cF.getAttribute(bI)!==ci){if(!this.__gc){this.__gc={};
}var cJ=qx.core.ObjectRegistry.toHashCode(cF);

if(this.__gc[cJ]){return;
}var self=this;
this.__gc[cJ]={target:cF,callback:function(k){qx.bom.Event.stopPropagation(k);
self.__gh(k);
}};
var cI=qx.event.GlobalError.observeMethod(this.__gc[cJ].callback);
qx.bom.Event.addNativeListener(cF,bp,cI);
}},"default":null}),__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(J){J=window.event||J;

if(this._charCode2KeyCode[J.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[J.keyCode],0,J.type,J);
}else{this._idealKeyHandler(0,J.keyCode,J.type,J);
}},"gecko":function(g){var j=this._keyCodeFix[g.keyCode]||g.keyCode;
var h=g.charCode;
var i=g.type;
this._idealKeyHandler(j,h,i,g);
},"webkit":function(B){if(qx.bom.client.Engine.VERSION<525.13){var E=0;
var C=0;
var D=B.type;

if(D==bn||D==br){E=this._charCode2KeyCode[B.charCode]||B.keyCode;
}else{if(this._charCode2KeyCode[B.charCode]){E=this._charCode2KeyCode[B.charCode];
}else{C=B.charCode;
}}this._idealKeyHandler(E,C,D,B);
}else{if(this._charCode2KeyCode[B.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[B.keyCode],0,B.type,B);
}else{this._idealKeyHandler(0,B.keyCode,B.type,B);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__gb){this._idealKeyHandler(0,this.__gb,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(w,x,y,z){var A;
if(w||(!w&&!x)){A=this._keyCodeToIdentifier(w);
this._fireSequenceEvent(z,y,A);
}else{A=this._charCodeToIdentifier(x);
this._fireSequenceEvent(z,bp,A);
this._fireInputEvent(z,x);
}},_specialCharCodeMap:{8:ck,9:cb,13:bm,27:bN,32:bM},_emulateKeyPress:qx.core.Variant.select(bq,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:ca,17:bB,18:bQ,20:cj,224:bX,37:ct,38:cq,39:cm,40:cr,33:bi,34:ch,35:bs,36:cc,45:bu,46:bG,112:bT,113:bW,114:bw,115:bP,116:cs,117:by,118:bL,119:bv,120:co,121:cn,122:cp,123:cl,144:bo,44:cx,145:bh,19:bY,91:bF,93:bC},_numpadToCharCode:{96:bl.charCodeAt(0),97:bJ.charCodeAt(0),98:bg.charCodeAt(0),99:bU.charCodeAt(0),100:bD.charCodeAt(0),101:bR.charCodeAt(0),102:bf.charCodeAt(0),103:ce.charCodeAt(0),104:bE.charCodeAt(0),105:bk.charCodeAt(0),106:bH.charCodeAt(0),107:cy.charCodeAt(0),109:bj.charCodeAt(0),110:bS.charCodeAt(0),111:bt.charCodeAt(0)},_charCodeA:cv.charCodeAt(0),_charCodeZ:cu.charCodeAt(0),_charCode0:bl.charCodeAt(0),_charCode9:bk.charCodeAt(0),_isNonPrintableKeyCode:function(cC){return this._keyCodeToIdentifierMap[cC]?true:false;
},_isIdentifiableKeyCode:function(cK){if(cK>=this._charCodeA&&cK<=this._charCodeZ){return true;
}if(cK>=this._charCode0&&cK<=this._charCode9){return true;
}if(this._specialCharCodeMap[cK]){return true;
}if(this._numpadToCharCode[cK]){return true;
}if(this._isNonPrintableKeyCode(cK)){return true;
}return false;
},_keyCodeToIdentifier:function(e){if(this._isIdentifiableKeyCode(e)){var f=this._numpadToCharCode[e];

if(f){return String.fromCharCode(f);
}return (this._keyCodeToIdentifierMap[e]||this._specialCharCodeMap[e]||String.fromCharCode(e));
}else{return cg;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(t){return qx.event.handler.Keyboard._identifierToKeyCodeMap[t]||t.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gb=this.__fV=this.__fW=this.__fX=this.__fY=null;
},defer:function(F,G,H){qx.event.Registration.addHandler(F);
if(!F._identifierToKeyCodeMap){F._identifierToKeyCodeMap={};

for(var I in G._keyCodeToIdentifierMap){F._identifierToKeyCodeMap[G._keyCodeToIdentifierMap[I]]=parseInt(I,10);
}
for(var I in G._specialCharCodeMap){F._identifierToKeyCodeMap[G._specialCharCodeMap[I]]=parseInt(I,10);
}}
if(qx.core.Variant.isSet(bq,bV)){G._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bq,cw)){G._keyCodeFix={12:G._identifierToKeyCode(bo)};
}else if(qx.core.Variant.isSet(bq,bO)){if(qx.bom.client.Engine.VERSION<525.13){G._charCode2KeyCode={63289:G._identifierToKeyCode(bo),63276:G._identifierToKeyCode(bi),63277:G._identifierToKeyCode(ch),63275:G._identifierToKeyCode(bs),63273:G._identifierToKeyCode(cc),63234:G._identifierToKeyCode(ct),63232:G._identifierToKeyCode(cq),63235:G._identifierToKeyCode(cm),63233:G._identifierToKeyCode(cr),63272:G._identifierToKeyCode(bG),63302:G._identifierToKeyCode(bu),63236:G._identifierToKeyCode(bT),63237:G._identifierToKeyCode(bW),63238:G._identifierToKeyCode(bw),63239:G._identifierToKeyCode(bP),63240:G._identifierToKeyCode(cs),63241:G._identifierToKeyCode(by),63242:G._identifierToKeyCode(bL),63243:G._identifierToKeyCode(bv),63244:G._identifierToKeyCode(co),63245:G._identifierToKeyCode(cn),63246:G._identifierToKeyCode(cp),63247:G._identifierToKeyCode(cl),63248:G._identifierToKeyCode(cx),3:G._identifierToKeyCode(bm),12:G._identifierToKeyCode(bo),13:G._identifierToKeyCode(bm)};
}else{G._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var G="qx.client",F="mouseup",E="click",D="mousedown",C="contextmenu",B="mousewheel",A="dblclick",z="mshtml",y="mouseover",x="mouseout",s="DOMMouseScroll",w="mousemove",v="on",r="mshtml|webkit|opera",q="useraction",u="gecko|webkit",t="qx.event.handler.Mouse";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(H){arguments.callee.base.call(this);
this.__gi=H;
this.__gj=H.getWindow();
this.__gk=this.__gj.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__gl:null,__gm:null,__gn:null,__go:null,__gp:null,__gi:null,__gj:null,__gk:null,canHandleEvent:function(o,p){},registerEvent:qx.bom.client.System.IPHONE?
function(T,U,V){T[v+U]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(d,e,f){d[v+e]=undefined;
}:qx.lang.Function.returnNull,__gq:function(N,O,P){if(!P){P=N.target||N.srcElement;
}if(P&&P.nodeType){qx.event.Registration.fireEvent(P,O||N.type,O==B?qx.event.type.MouseWheel:qx.event.type.Mouse,[N,P,null,true,true]);
}qx.event.Registration.fireEvent(this.__gj,q,qx.event.type.Data,[O||N.type]);
},_initButtonObserver:function(){this.__gl=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gk,D,this.__gl);
Event.addNativeListener(this.__gk,F,this.__gl);
Event.addNativeListener(this.__gk,E,this.__gl);
Event.addNativeListener(this.__gk,A,this.__gl);
Event.addNativeListener(this.__gk,C,this.__gl);
},_initMoveObserver:function(){this.__gm=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gk,w,this.__gm);
Event.addNativeListener(this.__gk,y,this.__gm);
Event.addNativeListener(this.__gk,x,this.__gm);
},_initWheelObserver:function(){this.__gn=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var Y=qx.core.Variant.isSet(G,r)?B:s;
var ba=qx.core.Variant.isSet(G,z)?this.__gk:this.__gj;
Event.addNativeListener(ba,Y,this.__gn);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gk,D,this.__gl);
Event.removeNativeListener(this.__gk,F,this.__gl);
Event.removeNativeListener(this.__gk,E,this.__gl);
Event.removeNativeListener(this.__gk,A,this.__gl);
Event.removeNativeListener(this.__gk,C,this.__gl);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gk,w,this.__gm);
Event.removeNativeListener(this.__gk,y,this.__gm);
Event.removeNativeListener(this.__gk,x,this.__gm);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var I=qx.core.Variant.isSet(G,r)?B:s;
var J=qx.core.Variant.isSet(G,z)?this.__gk:this.__gj;
Event.removeNativeListener(J,I,this.__gn);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(n){this.__gq(n);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(a){var b=a.type;
var c=a.target||a.srcElement;
if(qx.core.Variant.isSet(G,u)){if(c&&c.nodeType==3){c=c.parentNode;
}}
if(this.__gr){this.__gr(a,b,c);
}
if(this.__gt){this.__gt(a,b,c);
}this.__gq(a,b,c);

if(this.__gs){this.__gs(a,b,c);
}
if(this.__gu){this.__gu(a,b,c);
}this.__go=b;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(W){this.__gq(W,B);
}),__gr:qx.core.Variant.select(G,{"webkit":function(Q,R,S){if(qx.bom.client.Engine.VERSION<530){if(R==C){this.__gq(Q,F,S);
}}},"default":null}),__gs:qx.core.Variant.select(G,{"opera":function(g,h,i){if(h==F&&g.button==2){this.__gq(g,C,i);
}},"default":null}),__gt:qx.core.Variant.select(G,{"mshtml":function(K,L,M){if(L==F&&this.__go==E){this.__gq(K,D,M);
}else if(L==A){this.__gq(K,E,M);
}},"default":null}),__gu:qx.core.Variant.select(G,{"mshtml":null,"default":function(j,k,l){switch(k){case D:this.__gp=l;
break;
case F:if(l!==this.__gp){var m=qx.dom.Hierarchy.getCommonParent(l,this.__gp);
this.__gq(j,E,m);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__gi=this.__gj=this.__gk=this.__gp=null;
},defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var j="qx.event.handler.Capture";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var A="alias",z="copy",y="blur",x="mouseout",w="keydown",v="Ctrl",u="Shift",t="mousemove",s="move",r="mouseover",Q="Alt",P="keyup",O="mouseup",N="dragend",M="on",L="mousedown",K="qxDraggable",J="drag",I="drop",H="qxDroppable",F="qx.event.handler.DragDrop",G="droprequest",D="dragstart",E="dragchange",B="dragleave",C="dragover";
qx.Class.define(F,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__gv=q;
this.__gw=q.getWindow().document.documentElement;
this.__gv.addListener(this.__gw,L,this._onMouseDown,this);
this.__gI();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__gD:null,__gE:null,__gF:false,__gG:0,__gH:0,canHandleEvent:function(a,b){},registerEvent:function(S,T,U){},unregisterEvent:function(h,i,j){},addType:function(V){this.__gz[V]=true;
},addAction:function(c){this.__gA[c]=true;
},supportsType:function(R){return !!this.__gz[R];
},supportsAction:function(p){return !!this.__gA[p];
},getData:function(Y){if(!this.__gP||!this.__gx){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gz[Y]){throw new Error("Unsupported data type: "+Y+"!");
}
if(!this.__gC[Y]){this.__gD=Y;
this.__gK(G,this.__gy,this.__gx,false);
}
if(!this.__gC[Y]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gC[Y]||null;
},getCurrentAction:function(){return this.__gE;
},addData:function(l,m){this.__gC[l]=m;
},getCurrentType:function(){return this.__gD;
},__gI:function(){this.__gz={};
this.__gA={};
this.__gB={};
this.__gC={};
},__gJ:function(){var bc=this.__gA;
var ba=this.__gB;
var bb=null;

if(this.__gP){if(ba.Shift&&ba.Ctrl&&bc.alias){bb=A;
}else if(ba.Shift&&ba.Alt&&bc.copy){bb=z;
}else if(ba.Shift&&bc.move){bb=s;
}else if(ba.Alt&&bc.alias){bb=A;
}else if(ba.Ctrl&&bc.copy){bb=z;
}else if(bc.move){bb=s;
}else if(bc.copy){bb=z;
}else if(bc.alias){bb=A;
}}
if(bb!=this.__gE){this.__gE=bb;
this.__gK(E,this.__gy,this.__gx,false);
}},__gK:function(bg,bh,bi,bj,bk){var bm=qx.event.Registration;
var bl=bm.createEvent(bg,qx.event.type.Drag,[bj,bk]);

if(bh!==bi){bl.setRelatedTarget(bi);
}return bm.dispatchEvent(bh,bl);
},__gL:function(W){while(W&&W.nodeType==1){if(W.getAttribute(K)==M){return W;
}W=W.parentNode;
}return null;
},__gM:function(f){while(f&&f.nodeType==1){if(f.getAttribute(H)==M){return f;
}f=f.parentNode;
}return null;
},__gN:function(){this.__gy=null;
this.__gv.removeListener(this.__gw,t,this._onMouseMove,this,true);
this.__gv.removeListener(this.__gw,O,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,y,this._onWindowBlur,this);
this.__gI();
},__gO:function(){if(this.__gF){this.__gv.removeListener(this.__gw,r,this._onMouseOver,this,true);
this.__gv.removeListener(this.__gw,x,this._onMouseOut,this,true);
this.__gv.removeListener(this.__gw,w,this._onKeyDown,this,true);
this.__gv.removeListener(this.__gw,P,this._onKeyUp,this,true);
this.__gK(N,this.__gy,this.__gx,false);
this.__gF=false;
}this.__gP=false;
this.__gx=null;
this.__gN();
},__gP:false,_onWindowBlur:function(e){this.__gO();
},_onKeyDown:function(e){var bd=e.getKeyIdentifier();

switch(bd){case Q:case v:case u:if(!this.__gB[bd]){this.__gB[bd]=true;
this.__gJ();
}}},_onKeyUp:function(e){var d=e.getKeyIdentifier();

switch(d){case Q:case v:case u:if(this.__gB[d]){this.__gB[d]=false;
this.__gJ();
}}},_onMouseDown:function(e){if(this.__gF){return;
}var k=this.__gL(e.getTarget());

if(k){this.__gG=e.getDocumentLeft();
this.__gH=e.getDocumentTop();
this.__gy=k;
this.__gv.addListener(this.__gw,t,this._onMouseMove,this,true);
this.__gv.addListener(this.__gw,O,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,y,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gP){this.__gK(I,this.__gx,this.__gy,false,e);
}if(this.__gF){e.stopPropagation();
}this.__gO();
},_onMouseMove:function(e){if(this.__gF){if(!this.__gK(J,this.__gy,this.__gx,true,e)){this.__gO();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gG)>3||Math.abs(e.getDocumentTop()-this.__gH)>3){if(this.__gK(D,this.__gy,this.__gx,true,e)){this.__gF=true;
this.__gv.addListener(this.__gw,r,this._onMouseOver,this,true);
this.__gv.addListener(this.__gw,x,this._onMouseOut,this,true);
this.__gv.addListener(this.__gw,w,this._onKeyDown,this,true);
this.__gv.addListener(this.__gw,P,this._onKeyUp,this,true);
var X=this.__gB;
X.Ctrl=e.isCtrlPressed();
X.Shift=e.isShiftPressed();
X.Alt=e.isAltPressed();
this.__gJ();
}else{this.__gK(N,this.__gy,this.__gx,false);
this.__gN();
}}}},_onMouseOver:function(e){var be=e.getTarget();
var bf=this.__gM(be);

if(bf&&bf!=this.__gx){this.__gP=this.__gK(C,bf,this.__gy,true,e);
this.__gx=bf;
this.__gJ();
}},_onMouseOut:function(e){var o=this.__gM(e.getTarget());
var n=this.__gM(e.getRelatedTarget());

if(o&&o!==n&&o==this.__gx){this.__gK(B,this.__gx,n,false,e);
this.__gx=null;
this.__gP=false;
qx.event.Timer.once(this.__gJ,this,0);
}}},destruct:function(){this.__gy=this.__gx=this.__gv=this.__gw=this.__gz=this.__gA=this.__gB=this.__gC=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(c,d,e){var h=qx.core.ObjectRegistry.toHashCode(c);
var f=h+b+d;
var g=qx.lang.Function.listener(this._onNative,this,f);
qx.bom.Event.addNativeListener(c,d,g);
this._registeredEvents[f]={element:c,type:d,listener:g};
},unregisterEvent:function(s,t,u){var x=this._registeredEvents;

if(!x){return;
}var y=qx.core.ObjectRegistry.toHashCode(s);
var v=y+b+t;
var w=this._registeredEvents[v];
qx.bom.Event.removeNativeListener(s,t,w.listener);
delete this._registeredEvents[v];
},_onNative:qx.event.GlobalError.observeMethod(function(o,p){var r=this._registeredEvents;

if(!r){return;
}var q=r[p];
qx.event.Registration.fireNonBubblingEvent(q.element,q.type,qx.event.type.Native,[o]);
})},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this.__gQ=f;
this.__gR={};
qx.event.handler.Appear.__gS[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gS:{},refresh:function(){var l=this.__gS;

for(var m in l){l[m].refresh();
}}},members:{__gQ:null,__gR:null,canHandleEvent:function(d,e){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__gR;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(o,p,q){var r=qx.core.ObjectRegistry.toHashCode(o)+p;
var s=this.__gR;

if(!s){return;
}
if(s[r]){delete s[r];
}},refresh:function(){var j=this.__gR;
var k;

for(var i in j){k=j[i];
var g=k.offsetWidth>0;

if((!!k.$$displayed)!==g){k.$$displayed=g;
var h=qx.event.Registration.createEvent(g?a:b);
this.__gQ.dispatchEvent(k,h);
}}}},destruct:function(){this.__gQ=this.__gR=null;
delete qx.event.handler.Appear.__gS[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var H="mshtml",G="",F="qx.client",E=">",D="<",C=" ",B="='",A="qx.bom.Element",z="div",y="' ",x="></";
qx.Class.define(A,{statics:{__gT:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,J,K){if(!K){K=window;
}
if(!name){throw new Error("The tag name is missing!");
}var M=this.__gT;
var L=G;

for(var O in J){if(M[O]){L+=O+B+J[O]+y;
}}var P;
if(L!=G){if(qx.bom.client.Engine.MSHTML){P=K.document.createElement(D+name+C+L+E);
}else{var N=K.document.createElement(z);
N.innerHTML=D+name+C+L+x+name+E;
P=N.firstChild;
}}else{P=K.document.createElement(name);
}
for(var O in J){if(!M[O]){qx.bom.element.Attribute.set(P,O,J[O]);
}}return P;
},empty:function(e){return e.innerHTML=G;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(R,S,T,self,U){return qx.event.Registration.removeListener(R,S,T,self,U);
},removeListenerById:function(v,w){return qx.event.Registration.removeListenerById(v,w);
},hasListener:function(Y,ba,bb){return qx.event.Registration.hasListener(Y,ba,bb);
},focus:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).focus(Q);
},blur:function(I){qx.event.Registration.getManager(I).getHandler(qx.event.handler.Focus).blur(I);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(f){qx.event.Registration.getManager(f).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(f);
},clone:function(g,h){var n;

if(h||(qx.core.Variant.isSet(F,H)&&!qx.xml.Document.isXmlDocument(g))){var r=qx.event.Registration.getManager(g);
var k=qx.dom.Hierarchy.getDescendants(g);
k.push(g);
}if(qx.core.Variant.isSet(F,H)){for(var i=0,l=k.length;i<l;i++){r.toggleAttachedEvents(k[i],false);
}}var n=g.cloneNode(true);
if(qx.core.Variant.isSet(F,H)){for(var i=0,l=k.length;i<l;i++){r.toggleAttachedEvents(k[i],true);
}}if(h===true){var u=qx.dom.Hierarchy.getDescendants(n);
u.push(n);
var m,p,t,o;

for(var i=0,s=k.length;i<s;i++){t=k[i];
m=r.serializeListeners(t);

if(m.length>0){p=u[i];

for(var j=0,q=m.length;j<q;j++){o=m[j];
r.addListener(p,o.type,o.handler,o.self,o.capture);
}}}}return n;
}}});
})();
(function(){var e="qx.event.type.Dom";
qx.Class.define(e,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
},getModifiers:function(){var d=0;
var c=this._native;

if(c.shiftKey){d|=qx.event.type.Dom.SHIFT_MASK;
}
if(c.ctrlKey){d|=qx.event.type.Dom.CTRL_MASK;
}
if(c.altKey){d|=qx.event.type.Dom.ALT_MASK;
}
if(c.metaKey){d|=qx.event.type.Dom.META_MASK;
}return d;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bs="qx.client",br="blur",bq="focus",bp="mousedown",bo="on",bn="mouseup",bm="DOMFocusOut",bl="DOMFocusIn",bk="selectstart",bj="onmousedown",bO="onfocusout",bN="onfocusin",bM="onmouseup",bL="onselectstart",bK="draggesture",bJ="gecko",bI="qx.event.handler.Focus",bH="_applyFocus",bG="deactivate",bF="textarea",bz="qxIsRootPage",bA="_applyActive",bx="input",by="focusin",bv="qxSelectable",bw="tabIndex",bt="off",bu="activate",bB="1",bC="focusout",bE="qxKeepFocus",bD="qxKeepActive";
qx.Class.define(bI,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bh){arguments.callee.base.call(this);
this._manager=bh;
this._window=bh.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bA,nullable:true},focus:{apply:bH,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,canHandleEvent:function(Q,R){},registerEvent:function(z,A,B){},unregisterEvent:function(m,n,o){},focus:function(K){try{K.focus();
}catch(l){}this.setFocus(K);
this.setActive(K);
},activate:function(C){this.setActive(C);
},blur:function(s){try{s.blur();
}catch(k){}
if(this.getActive()===s){this.resetActive();
}
if(this.getFocus()===s){this.resetFocus();
}},deactivate:function(y){if(this.getActive()===y){this.resetActive();
}},tryActivate:function(L){var M=this.__ht(L);

if(M){this.setActive(M);
}},__hf:function(Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(bb,qx.event.type.Focus,[Y,ba,bc]);
be.dispatchEvent(Y,bd);
},_windowFocused:true,__hg:function(){if(this._windowFocused){this._windowFocused=false;
this.__hf(this._window,null,br,false);
}},__hh:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hf(this._window,null,bq,false);
}},_initObserver:qx.core.Variant.select(bs,{"gecko":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__gY=qx.lang.Function.listener(this.__hi,this);
this._document.addEventListener(bp,this.__gU,true);
this._document.addEventListener(bn,this.__gV,true);
this._window.addEventListener(bq,this.__gW,true);
this._window.addEventListener(br,this.__gX,true);
this._window.addEventListener(bK,this.__gY,true);
},"mshtml":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
this._document.attachEvent(bj,this.__gU);
this._document.attachEvent(bM,this.__gV);
this._document.attachEvent(bN,this.__hb);
this._document.attachEvent(bO,this.__hc);
this._document.attachEvent(bL,this.__ha);
},"webkit":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
this._document.addEventListener(bp,this.__gU,true);
this._document.addEventListener(bn,this.__gV,true);
this._document.addEventListener(bk,this.__ha,false);
this._window.addEventListener(bm,this.__hc,true);
this._window.addEventListener(bq,this.__gW,true);
this._window.addEventListener(br,this.__gX,true);
},"opera":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this._document.addEventListener(bp,this.__gU,true);
this._document.addEventListener(bn,this.__gV,true);
this._window.addEventListener(bl,this.__hb,true);
this._window.addEventListener(bm,this.__hc,true);
}}),_stopObserver:qx.core.Variant.select(bs,{"gecko":function(){this._document.removeEventListener(bp,this.__gU,true);
this._document.removeEventListener(bn,this.__gV,true);
this._window.removeEventListener(bq,this.__gW,true);
this._window.removeEventListener(br,this.__gX,true);
this._window.removeEventListener(bK,this.__gY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bj,this.__gU);
qx.bom.Event.removeNativeListener(this._document,bM,this.__gV);
qx.bom.Event.removeNativeListener(this._document,bN,this.__hb);
qx.bom.Event.removeNativeListener(this._document,bO,this.__hc);
qx.bom.Event.removeNativeListener(this._document,bL,this.__ha);
},"webkit":function(){this._document.removeEventListener(bp,this.__gU,true);
this._document.removeEventListener(bk,this.__ha,false);
this._window.removeEventListener(bl,this.__hb,true);
this._window.removeEventListener(bm,this.__hc,true);
this._window.removeEventListener(bq,this.__gW,true);
this._window.removeEventListener(br,this.__gX,true);
},"opera":function(){this._document.removeEventListener(bp,this.__gU,true);
this._window.removeEventListener(bl,this.__hb,true);
this._window.removeEventListener(bm,this.__hc,true);
this._window.removeEventListener(bq,this.__gW,true);
this._window.removeEventListener(br,this.__gX,true);
}}),__hi:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"gecko":function(e){if(!this.__hu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"mshtml":function(e){this.__hh();
var J=e.srcElement;
var I=this.__hs(J);

if(I){this.setFocus(I);
}this.tryActivate(J);
},"opera":function(e){var a=e.target;

if(a==this._document||a==this._window){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(a);
this.tryActivate(a);
if(!this.__hu(a)){a.selectionStart=0;
a.selectionEnd=0;
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"mshtml":function(e){if(!e.toElement){this.__hg();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var g=e.target;

if(g===this.getFocus()){this.resetFocus();
}
if(g===this.getActive()){this.resetActive();
}},"opera":function(e){var T=e.target;

if(T==this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(T===this.getFocus()){this.resetFocus();
}
if(T===this.getActive()){this.resetActive();
}}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__hg();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"gecko":function(e){var S=e.target;

if(S===this._window||S===this._document){this.__hh();
S=this._body;
}this.setFocus(S);
this.tryActivate(S);
},"webkit":function(e){var F=e.target;

if(F===this._window||F===this._document){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(F);
this.tryActivate(F);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"gecko":function(e){var v=e.target;
var t=this.__hs(v);
var u=this.__hu(v);

if(!u){qx.bom.Event.preventDefault(e);
if(t){if(qx.core.Variant.isSet(bs,bJ)){var w=qx.bom.element.Attribute.get(t,bz)===bB;

if(!w){t.focus();
}}else{t.focus();
}}}else if(!t){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var E=e.srcElement;
var D=this.__hs(E);

if(D){if(!this.__hu(E)){E.unselectable=bo;
try{document.selection.empty();
}catch(e){}try{D.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__hu(E)){E.unselectable=bo;
}}},"webkit":function(e){var V=e.target;
var U=this.__hs(V);

if(U){this.setFocus(U);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var P=e.target;
var N=this.__hs(P);

if(!this.__hu(P)){qx.bom.Event.preventDefault(e);
if(N){var O=this.getFocus();

if(O&&O.selectionEnd){O.selectionStart=0;
O.selectionEnd=0;
O.blur();
}if(N){this.setFocus(N);
}}}else if(N){this.setFocus(N);
}},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"mshtml":function(e){var p=e.srcElement;

if(p.unselectable){p.unselectable=bt;
}this.tryActivate(this.__hp(p));
},"gecko":function(e){var b=e.target;

while(b&&b.offsetWidth===undefined){b=b.parentNode;
}
if(b){this.tryActivate(b);
}},"webkit|opera":function(e){this.tryActivate(this.__hp(e.target));
},"default":null})),__hp:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"mshtml|webkit":function(q){var r=this.getFocus();

if(r&&q!=r&&(r.nodeName.toLowerCase()===bx||r.nodeName.toLowerCase()===bF)){q=r;
}return q;
},"default":function(x){return x;
}})),__hq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bs,{"mshtml|webkit":function(e){var h=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__hu(h)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hr:function(c){var d=qx.bom.element.Attribute.get(c,bw);

if(d>=1){return true;
}var f=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(d>=0&&f[c.tagName]){return true;
}return false;
},__hs:function(bi){while(bi&&bi.nodeType===1){if(bi.getAttribute(bE)==bo){return null;
}
if(this.__hr(bi)){return bi;
}bi=bi.parentNode;
}return this._body;
},__ht:function(bf){var bg=bf;

while(bf&&bf.nodeType===1){if(bf.getAttribute(bD)==bo){return null;
}bf=bf.parentNode;
}return bg;
},__hu:function(G){while(G&&G.nodeType===1){var H=G.getAttribute(bv);

if(H!=null){return H===bo;
}G=G.parentNode;
}return true;
},_applyActive:function(i,j){if(j){this.__hf(j,i,bG,true);
}
if(i){this.__hf(i,j,bu,true);
}},_applyFocus:function(W,X){if(X){this.__hf(X,W,bC,true);
}
if(W){this.__hf(W,X,by,true);
}if(X){this.__hf(X,W,br,false);
}
if(W){this.__hf(W,X,bq,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hv=null;
},defer:function(bP){qx.event.Registration.addHandler(bP);
var bQ=bP.FOCUSABLE_ELEMENTS;

for(var bR in bQ){bQ[bR.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var u="",t="qx.client",s="readOnly",r="accessKey",q="qx.bom.element.Attribute",p="rowSpan",o="vAlign",n="className",m="textContent",l="'",I="htmlFor",H="longDesc",G="cellSpacing",F="frameBorder",E="='",D="useMap",C="innerText",B="innerHTML",A="tabIndex",z="dateTime",x="maxLength",y="mshtml",v="cellPadding",w="colSpan";
qx.Class.define(q,{statics:{__hw:{names:{"class":n,"for":I,html:B,text:qx.core.Variant.isSet(t,y)?C:m,colspan:w,rowspan:p,valign:o,datetime:z,accesskey:r,tabindex:A,maxlength:x,readonly:s,longdesc:H,cellpadding:v,cellspacing:G,frameborder:F,usemap:D},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:u,maxLength:10000000,className:u,innerHTML:u,innerText:u,textContent:u,htmlFor:u,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(d){var e=[];
var g=this.__hw.runtime;

for(var f in d){if(!g[f]){e.push(f,E,d[f],l);
}}return e.join(u);
},get:qx.core.Variant.select(t,{"mshtml":function(a,name){var c=this.__hw;
var b;
name=c.names[name]||name;
if(c.original[name]){b=a.getAttribute(name,2);
}else if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];
}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
},"default":function(J,name){var L=this.__hw;
var K;
name=L.names[name]||name;
if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];

if(K==null){K=J.getAttribute(name);
}}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
}}),set:function(i,name,j){var k=this.__hw;
name=k.names[name]||name;
if(k.bools[name]){j=!!j;
}if(k.property[name]){if(j==null){j=k.propertyDefault[name];

if(j===undefined){j=null;
}}i[name]=j;
}else{if(j===true){i.setAttribute(name,name);
}else if(j===false||j===null){i.removeAttribute(name);
}else{i.setAttribute(name,j);
}}},reset:function(h,name){this.set(h,name,null);
}}});
})();
(function(){var q="left",p="right",o="middle",n="qx.client",m="dblclick",l="click",k="none",j="contextmenu",i="qx.event.type.Mouse";
qx.Class.define(i,{extend:qx.event.type.Dom,members:{init:function(c,d,e,f,g){arguments.callee.base.call(this,c,d,e,f,g);

if(!e){this._relatedTarget=qx.bom.Event.getRelatedTarget(c);
}return this;
},_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.button=a.button;
b.clientX=a.clientX;
b.clientY=a.clientY;
b.pageX=a.pageX;
b.pageY=a.pageY;
b.screenX=a.screenX;
b.screenY=a.screenY;
b.wheelDelta=a.wheelDelta;
b.detail=a.detail;
b.srcElement=a.srcElement;
return b;
},__hx:qx.core.Variant.select(n,{"mshtml":{1:q,2:p,4:o},"default":{0:q,2:p,1:o}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case l:case m:return q;
case j:return p;
default:return this.__hx[this._native.button]||k;
}},isLeftPressed:function(){return this.getButton()===q;
},isMiddlePressed:function(){return this.getButton()===o;
},isRightPressed:function(){return this.getButton()===p;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(n,{"mshtml":function(){var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(h);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(n,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var s="qx.client",r="ie",q="msie",p="android",o="operamini",n="mobile chrome",m=")(/| )([0-9]+\.[0-9])",l="iemobile",k="opera mobi",j="Mobile Safari",G="operamobile",F="mobile safari",E="IEMobile|Maxthon|MSIE",D="qx.bom.client.Browser",C="opera mini",B="(",A="opera",z="mshtml",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",w="5.0",t="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",u="Mobile/";
qx.Bootstrap.define(D,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__hy:function(e){var f=navigator.userAgent;
var h=new RegExp(B+e+m);
var i=f.match(h);

if(!i){return;
}var name=i[1].toLowerCase();
var g=i[3];
if(f.match(/Version(\/| )([0-9]+\.[0-9])/)){g=RegExp.$2;
}
if(qx.core.Variant.isSet(s,v)){if(name===p){name=n;
}else if(f.indexOf(j)!==-1||f.indexOf(u)!==-1){name=F;
}}else if(qx.core.Variant.isSet(s,z)){if(name===q){name=r;
if(qx.bom.client.System.WINCE&&name===r){name=l;
g=w;
}}}else if(qx.core.Variant.isSet(s,A)){if(name===k){name=G;
}else if(name===C){name=o;
}}this.NAME=name;
this.FULLVERSION=g;
this.VERSION=parseFloat(g,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(s,{"webkit":function(b){b.__hy(x);
},"gecko":function(c){c.__hy(t);
},"mshtml":function(a){a.__hy(E);
},"opera":function(d){d.__hy(y);
}})});
})();
(function(){var C="qx.client",B="qx.dom.Hierarchy",A="previousSibling",z="*",y="nextSibling",x="parentNode";
qx.Class.define(B,{statics:{getNodeIndex:function(G){var H=0;

while(G&&(G=G.previousSibling)){H++;
}return H;
},getElementIndex:function(t){var u=0;
var v=qx.dom.Node.ELEMENT;

while(t&&(t=t.previousSibling)){if(t.nodeType==v){u++;
}}return u;
},getNextElementSibling:function(h){while(h&&(h=h.nextSibling)&&!qx.dom.Node.isElement(h)){continue;
}return h||null;
},getPreviousElementSibling:function(O){while(O&&(O=O.previousSibling)&&!qx.dom.Node.isElement(O)){continue;
}return O||null;
},contains:qx.core.Variant.select(C,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(S,T){return !!(S.compareDocumentPosition(T)&16);
},"default":function(D,E){while(E){if(D==E){return true;
}E=E.parentNode;
}return false;
}}),isRendered:function(Q){if(!Q.offsetParent){return false;
}var R=Q.ownerDocument||Q.document;
if(R.body.contains){return R.body.contains(Q);
}if(R.compareDocumentPosition){return !!(R.compareDocumentPosition(Q)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(l,m){return this.contains(m,l);
},getCommonParent:qx.core.Variant.select(C,{"mshtml|opera":function(f,g){if(f===g){return f;
}
while(f&&qx.dom.Node.isElement(f)){if(f.contains(g)){return f;
}f=f.parentNode;
}return null;
},"default":function(I,J){if(I===J){return I;
}var K={};
var N=qx.core.ObjectRegistry;
var M,L;

while(I||J){if(I){M=N.toHashCode(I);

if(K[M]){return K[M];
}K[M]=I;
I=I.parentNode;
}
if(J){L=N.toHashCode(J);

if(K[L]){return K[L];
}K[L]=J;
J=J.parentNode;
}}return null;
}}),getAncestors:function(V){return this._recursivelyCollect(V,x);
},getChildElements:function(q){q=q.firstChild;

if(!q){return [];
}var r=this.getNextSiblings(q);

if(q.nodeType===1){r.unshift(q);
}return r;
},getDescendants:function(U){return qx.lang.Array.fromCollection(U.getElementsByTagName(z));
},getFirstDescendant:function(e){e=e.firstChild;

while(e&&e.nodeType!=1){e=e.nextSibling;
}return e;
},getLastDescendant:function(w){w=w.lastChild;

while(w&&w.nodeType!=1){w=w.previousSibling;
}return w;
},getPreviousSiblings:function(s){return this._recursivelyCollect(s,A);
},getNextSiblings:function(d){return this._recursivelyCollect(d,y);
},_recursivelyCollect:function(a,b){var c=[];

while(a=a[b]){if(a.nodeType==1){c.push(a);
}}return c;
},getSiblings:function(F){return this.getPreviousSiblings(F).reverse().concat(this.getNextSiblings(F));
},isEmpty:function(P){P=P.firstChild;

while(P){if(P.nodeType===qx.dom.Node.ELEMENT||P.nodeType===qx.dom.Node.TEXT){return false;
}P=P.nextSibling;
}return true;
},cleanWhitespace:function(i){var j=i.firstChild;

while(j){var k=j.nextSibling;

if(j.nodeType==3&&!/\S/.test(j.nodeValue)){i.removeChild(j);
}j=k;
}}}});
})();
(function(){var h="qx.client",g="qx.event.type.Drag";
qx.Class.define(g,{extend:qx.event.type.Event,members:{init:function(a,b){arguments.callee.base.call(this,true,a);

if(b){this._native=b.getNativeEvent()||null;
this._originalTarget=b.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(f){this.getManager().addType(f);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(k){return this.getManager().supportsType(k);
},supportsAction:function(e){return this.getManager().supportsAction(e);
},addData:function(m,n){this.getManager().addData(m,n);
},getData:function(i){return this.getManager().getData(i);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="losecapture",m="qx.client",l="blur",k="focus",j="click",i="qx.event.dispatch.MouseCapture",h="capture",g="scroll";
qx.Class.define(i,{extend:qx.event.dispatch.AbstractBubbling,construct:function(c,d){arguments.callee.base.call(this,c);
this.__hz=c.getWindow();
this.__hA=d;
c.addListener(this.__hz,l,this.releaseCapture,this);
c.addListener(this.__hz,k,this.releaseCapture,this);
c.addListener(this.__hz,g,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hA:null,__hB:null,__hC:true,__hz:null,_getParent:function(a){return a.parentNode;
},canDispatchEvent:function(o,event,p){return (this.__hB&&this.__hD[p]);
},dispatchEvent:function(s,event,t){if(t==j){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hC||!qx.dom.Hierarchy.contains(this.__hB,s)){s=this.__hB;
}arguments.callee.base.call(this,s,event,t);
},__hD:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(u,v){var v=v!==false;

if(this.__hB===u&&this.__hC==v){return;
}
if(this.__hB){this.releaseCapture();
}this.nativeSetCapture(u,v);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(u,n,function(){qx.bom.Event.removeNativeListener(u,n,arguments.callee);
self.releaseCapture();
});
}this.__hC=v;
this.__hB=u;
this.__hA.fireEvent(u,h,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hB;
},releaseCapture:function(){var f=this.__hB;

if(!f){return;
}this.__hB=null;
this.__hA.fireEvent(f,n,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(f);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(m,{"mshtml":function(q,r){q.setCapture(r!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(m,{"mshtml":function(b){b.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hB=this.__hz=this.__hA=null;
},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Bootstrap.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==d;
}else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(D,E){var F=new ActiveXObject(this.DOMDOC);
F.setProperty(n,b);

if(E){var G=h;
G+=E;

if(D){G+=f+D+o;
}G+=k;
F.loadXML(G);
}return F;
},"default":function(z,A){return document.implementation.createDocument(z||q,A||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(B){var C=qx.xml.Document.create();
C.loadXML(B);
return C;
},"default":function(s){var t=new DOMParser();
return t.parseFromString(s,e);
}})},defer:function(v){if(qx.core.Variant.isSet(r,p)){var w=[a,j];
var x=[c,g];

for(var i=0,l=w.length;i<l;i++){try{new ActiveXObject(w[i]);
new ActiveXObject(x[i]);
}catch(y){continue;
}v.DOMDOC=w[i];
v.XMLHTTP=x[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var T="borderTopWidth",S="borderLeftWidth",R="marginTop",Q="marginLeft",P="scroll",O="qx.client",N="border-box",M="borderBottomWidth",L="borderRightWidth",K="auto",bj="padding",bi="qx.bom.element.Location",bh="paddingLeft",bg="static",bf="marginBottom",be="visible",bd="BODY",bc="paddingBottom",bb="paddingTop",ba="marginRight",X="position",Y="margin",V="overflow",W="paddingRight",U="border";
qx.Class.define(bi,{statics:{__hE:function(bn,bo){return qx.bom.element.Style.get(bn,bo,qx.bom.element.Style.COMPUTED_MODE,false);
},__hF:function(C,D){return parseInt(qx.bom.element.Style.get(C,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hG:function(p){var s=0,top=0;
if(p.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var r=qx.dom.Node.getWindow(p);
s-=qx.bom.Viewport.getScrollLeft(r);
top-=qx.bom.Viewport.getScrollTop(r);
}else{var q=qx.dom.Node.getDocument(p).body;
p=p.parentNode;
while(p&&p!=q){s+=p.scrollLeft;
top+=p.scrollTop;
p=p.parentNode;
}}return {left:s,top:top};
},__hH:qx.core.Variant.select(O,{"mshtml":function(w){var y=qx.dom.Node.getDocument(w);
var x=y.body;
var z=0;
var top=0;
z-=x.clientLeft+y.documentElement.clientLeft;
top-=x.clientTop+y.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){z+=this.__hF(x,S);
top+=this.__hF(x,T);
}return {left:z,top:top};
},"webkit":function(bM){var bO=qx.dom.Node.getDocument(bM);
var bN=bO.body;
var bP=bN.offsetLeft;
var top=bN.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bP+=this.__hF(bN,S);
top+=this.__hF(bN,T);
}return {left:bP,top:top};
},"gecko":function(f){var g=qx.dom.Node.getDocument(f).body;
var h=g.offsetLeft;
var top=g.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){h+=this.__hF(g,Q);
top+=this.__hF(g,R);
}if(qx.bom.element.BoxSizing.get(g)!==N){h+=this.__hF(g,S);
top+=this.__hF(g,T);
}return {left:h,top:top};
},"default":function(bk){var bl=qx.dom.Node.getDocument(bk).body;
var bm=bl.offsetLeft;
var top=bl.offsetTop;
return {left:bm,top:top};
}}),__hI:qx.core.Variant.select(O,{"mshtml|webkit":function(a){var c=qx.dom.Node.getDocument(a);
if(a.getBoundingClientRect){var d=a.getBoundingClientRect();
var e=d.left;
var top=d.top;
}else{var e=a.offsetLeft;
var top=a.offsetTop;
a=a.offsetParent;
var b=c.body;
while(a&&a!=b){e+=a.offsetLeft;
top+=a.offsetTop;
e+=this.__hF(a,S);
top+=this.__hF(a,T);
a=a.offsetParent;
}}return {left:e,top:top};
},"gecko":function(bs){if(bs.getBoundingClientRect){var bv=bs.getBoundingClientRect();
var bw=Math.round(bv.left);
var top=Math.round(bv.top);
}else{var bw=0;
var top=0;
var bt=qx.dom.Node.getDocument(bs).body;
var bu=qx.bom.element.BoxSizing;

if(bu.get(bs)!==N){bw-=this.__hF(bs,S);
top-=this.__hF(bs,T);
}
while(bs&&bs!==bt){bw+=bs.offsetLeft;
top+=bs.offsetTop;
if(bu.get(bs)!==N){bw+=this.__hF(bs,S);
top+=this.__hF(bs,T);
}if(bs.parentNode&&this.__hE(bs.parentNode,V)!=be){bw+=this.__hF(bs.parentNode,S);
top+=this.__hF(bs.parentNode,T);
}bs=bs.offsetParent;
}}return {left:bw,top:top};
},"default":function(m){var o=0;
var top=0;
var n=qx.dom.Node.getDocument(m).body;
while(m&&m!==n){o+=m.offsetLeft;
top+=m.offsetTop;
m=m.offsetParent;
}return {left:o,top:top};
}}),get:function(bD,bE){if(bD.tagName==bd){var location=this.__hJ(bD);
var bL=location.left;
var top=location.top;
}else{var bF=this.__hH(bD);
var bK=this.__hI(bD);
var scroll=this.__hG(bD);
var bL=bK.left+bF.left-scroll.left;
var top=bK.top+bF.top-scroll.top;
}var bG=bL+bD.offsetWidth;
var bH=top+bD.offsetHeight;

if(bE){if(bE==bj||bE==P){var bI=qx.bom.element.Overflow.getX(bD);

if(bI==P||bI==K){bG+=bD.scrollWidth-bD.offsetWidth+this.__hF(bD,S)+this.__hF(bD,L);
}var bJ=qx.bom.element.Overflow.getY(bD);

if(bJ==P||bJ==K){bH+=bD.scrollHeight-bD.offsetHeight+this.__hF(bD,T)+this.__hF(bD,M);
}}
switch(bE){case bj:bL+=this.__hF(bD,bh);
top+=this.__hF(bD,bb);
bG-=this.__hF(bD,W);
bH-=this.__hF(bD,bc);
case P:bL-=bD.scrollLeft;
top-=bD.scrollTop;
bG-=bD.scrollLeft;
bH-=bD.scrollTop;
case U:bL+=this.__hF(bD,S);
top+=this.__hF(bD,T);
bG-=this.__hF(bD,L);
bH-=this.__hF(bD,M);
break;
case Y:bL-=this.__hF(bD,Q);
top-=this.__hF(bD,R);
bG+=this.__hF(bD,ba);
bH+=this.__hF(bD,bf);
break;
}}return {left:bL,top:top,right:bG,bottom:bH};
},__hJ:qx.core.Variant.select(O,{"default":function(I){var top=I.offsetTop+this.__hF(I,R);
var J=I.offsetLeft+this.__hF(I,Q);
return {left:J,top:top};
},"mshtml":function(G){var top=G.offsetTop;
var H=G.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hF(G,R);
H+=this.__hF(G,Q);
}return {left:H,top:top};
},"gecko":function(i){var top=i.offsetTop+this.__hF(i,R)+this.__hF(i,S);
var j=i.offsetLeft+this.__hF(i,Q)+this.__hF(i,T);
return {left:j,top:top};
}}),getLeft:function(u,v){return this.get(u,v).left;
},getTop:function(E,F){return this.get(E,F).top;
},getRight:function(A,B){return this.get(A,B).right;
},getBottom:function(k,l){return this.get(k,l).bottom;
},getRelative:function(bx,by,bz,bA){var bC=this.get(bx,bz);
var bB=this.get(by,bA);
return {left:bC.left-bB.left,top:bC.top-bB.top,right:bC.right-bB.right,bottom:bC.bottom-bB.bottom};
},getPosition:function(t){return this.getRelative(t,this.getOffsetParent(t));
},getOffsetParent:function(bp){var br=bp.offsetParent||document.body;
var bq=qx.bom.element.Style;

while(br&&(!/^body|html$/i.test(br.tagName)&&bq.get(br,X)===bg)){br=br.offsetParent;
}return br;
}}});
})();
(function(){var r="qx.client",q="character",p="EndToEnd",o="input",n="textarea",m="StartToStart",l='character',k="qx.bom.Selection",j="button",i="#text",h="body";
qx.Class.define(k,{statics:{getSelectionObject:qx.core.Variant.select(r,{"mshtml":function(a){return a.selection;
},"default":function(B){return qx.dom.Node.getWindow(B).getSelection();
}}),get:qx.core.Variant.select(r,{"mshtml":function(D){var E=qx.bom.Range.get(qx.dom.Node.getDocument(D));
return E.text;
},"default":function(bd){if(this.__hK(bd)){return bd.value.substring(bd.selectionStart,bd.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(bd)).toString();
}}}),getLength:qx.core.Variant.select(r,{"mshtml":function(Q){var S=this.get(Q);
var R=qx.util.StringSplit.split(S,/\r\n/);
return S.length-(R.length-1);
},"opera":function(T){var Y,W,U;

if(this.__hK(T)){var X=T.selectionStart;
var V=T.selectionEnd;
Y=T.value.substring(X,V);
W=V-X;
}else{Y=qx.bom.Selection.get(T);
W=Y.length;
}U=qx.util.StringSplit.split(Y,/\r\n/);
return W-(U.length-1);
},"default":function(g){if(this.__hK(g)){return g.selectionEnd-g.selectionStart;
}else{return this.get(g).length;
}}}),getStart:qx.core.Variant.select(r,{"mshtml":function(be){if(this.__hK(be)){var bj=qx.bom.Range.get();
if(!be.contains(bj.parentElement())){return -1;
}var bk=qx.bom.Range.get(be);
var bi=be.value.length;
bk.moveToBookmark(bj.getBookmark());
bk.moveEnd(l,bi);
return bi-bk.text.length;
}else{var bk=qx.bom.Range.get(be);
var bg=bk.parentElement();
var bl=qx.bom.Range.get();
bl.moveToElementText(bg);
var bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bf.setEndPoint(m,bk);
bf.setEndPoint(p,bl);
if(bl.compareEndPoints(m,bf)==0){return 0;
}var bh;
var bm=0;

while(true){bh=bf.moveStart(q,-1);
if(bl.compareEndPoints(m,bf)==0){break;
}if(bh==0){break;
}else{bm++;
}}return ++bm;
}},"gecko|webkit":function(ba){if(this.__hK(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(C){if(this.__hK(C)){return C.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(C)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(r,{"mshtml":function(s){if(this.__hK(s)){var x=qx.bom.Range.get();
if(!s.contains(x.parentElement())){return -1;
}var y=qx.bom.Range.get(s);
var w=s.value.length;
y.moveToBookmark(x.getBookmark());
y.moveStart(l,-w);
return y.text.length;
}else{var y=qx.bom.Range.get(s);
var u=y.parentElement();
var z=qx.bom.Range.get();
z.moveToElementText(u);
var w=z.text.length;
var t=qx.bom.Range.get(qx.dom.Node.getBodyElement(s));
t.setEndPoint(p,y);
t.setEndPoint(m,z);
if(z.compareEndPoints(p,t)==0){return w-1;
}var v;
var A=0;

while(true){v=t.moveEnd(q,1);
if(z.compareEndPoints(p,t)==0){break;
}if(v==0){break;
}else{A++;
}}return w-(++A);
}},"gecko|webkit":function(M){if(this.__hK(M)){return M.selectionEnd;
}else{var O=qx.dom.Node.getDocument(M);
var N=this.getSelectionObject(O);
if(N.focusOffset>N.anchorOffset){return N.focusOffset;
}else{return N.anchorOffset;
}}},"default":function(L){if(this.__hK(L)){return L.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(L)).focusOffset;
}}}),__hK:function(P){return qx.dom.Node.isElement(P)&&(P.nodeName.toLowerCase()==o||P.nodeName.toLowerCase()==n);
},set:qx.core.Variant.select(r,{"mshtml":function(b,c,d){var e;
if(qx.dom.Node.isDocument(b)){b=b.body;
}
if(qx.dom.Node.isElement(b)||qx.dom.Node.isText(b)){switch(b.nodeName.toLowerCase()){case o:case n:case j:if(d===undefined){d=b.value.length;
}
if(c>=0&&c<=b.value.length&&d>=0&&d<=b.value.length){e=qx.bom.Range.get(b);
e.collapse(true);
e.moveStart(q,c);
e.moveEnd(q,d-c);
e.select();
return true;
}break;
case i:if(d===undefined){d=b.nodeValue.length;
}
if(c>=0&&c<=b.nodeValue.length&&d>=0&&d<=b.nodeValue.length){e=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
e.moveToElementText(b.parentNode);
e.collapse(true);
e.moveStart(q,c);
e.moveEnd(q,d-c);
e.select();
return true;
}break;
default:if(d===undefined){d=b.childNodes.length-1;
}if(b.childNodes[c]&&b.childNodes[d]){e=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
e.moveToElementText(b.childNodes[c]);
e.collapse(true);
var f=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
f.moveToElementText(b.childNodes[d]);
e.setEndPoint(p,f);
e.select();
return true;
}}}return false;
},"default":function(bs,bt,bu){var by=bs.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bs)&&(by==o||by==n)){if(bu===undefined){bu=bs.value.length;
}if(bt>=0&&bt<=bs.value.length&&bu>=0&&bu<=bs.value.length){bs.focus();
bs.select();
bs.setSelectionRange(bt,bu);
return true;
}}else{var bw=false;
var bx=qx.dom.Node.getWindow(bs).getSelection();
var bv=qx.bom.Range.get(bs);
if(qx.dom.Node.isText(bs)){if(bu===undefined){bu=bs.length;
}
if(bt>=0&&bt<bs.length&&bu>=0&&bu<=bs.length){bw=true;
}}else if(qx.dom.Node.isElement(bs)){if(bu===undefined){bu=bs.childNodes.length-1;
}
if(bt>=0&&bs.childNodes[bt]&&bu>=0&&bs.childNodes[bu]){bw=true;
}}else if(qx.dom.Node.isDocument(bs)){bs=bs.body;

if(bu===undefined){bu=bs.childNodes.length-1;
}
if(bt>=0&&bs.childNodes[bt]&&bu>=0&&bs.childNodes[bu]){bw=true;
}}
if(bw){if(!bx.isCollapsed){bx.collapseToStart();
}bv.setStart(bs,bt);
if(qx.dom.Node.isText(bs)){bv.setEnd(bs,bu);
}else{bv.setEndAfter(bs.childNodes[bu]);
}if(bx.rangeCount>0){bx.removeAllRanges();
}bx.addRange(bv);
return true;
}}return false;
}}),setAll:function(br){return qx.bom.Selection.set(br,0);
},clear:qx.core.Variant.select(r,{"mshtml":function(bn){var bo=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bn));
var bp=qx.bom.Range.get(bn);
var parent=bp.parentElement();
var bq=qx.bom.Range.get(qx.dom.Node.getDocument(bn));
if(parent==bq.parentElement()&&parent==bn){bo.empty();
}},"default":function(F){var H=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(F));
var J=F.nodeName.toLowerCase();
if(qx.dom.Node.isElement(F)&&(J==o||J==n)){F.setSelectionRange(0,0);
qx.bom.Element.blur(F);
}else if(qx.dom.Node.isDocument(F)||J==h){H.collapse(F.body?F.body:F,0);
}else{var I=qx.bom.Range.get(F);

if(!I.collapsed){var K;
var G=I.commonAncestorContainer;
if(qx.dom.Node.isElement(F)&&qx.dom.Node.isText(G)){K=G.parentNode;
}else{K=G;
}
if(K==F){H.collapse(F,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hL:{},remove:function(f){delete this.__hL[f.$$hash];
},add:function(g){var h=this.__hL;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hL;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__hL={};
}}});
})();
(function(){var p="qx.ui.core.queue.Visibility",o="visibility";
qx.Class.define(p,{statics:{__hM:{},__hN:{},remove:function(a){var b=a.$$hash;
delete this.__hN[b];
delete this.__hM[b];
},isVisible:function(n){return this.__hN[n.$$hash]||false;
},__hO:function(j){var l=this.__hN;
var k=j.$$hash;
var m;
if(j.isExcluded()){m=false;
}else{var parent=j.$$parent;

if(parent){m=this.__hO(parent);
}else{m=j.isRootWidget();
}}return l[k]=m;
},add:function(c){var d=this.__hM;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(o);
},flush:function(){var e=this.__hM;
var i=this.__hN;
for(var f in e){if(i[f]!=null){e[f].addChildrenToQueue(e);
}}var h={};

for(var f in e){h[f]=i[f];
i[f]=null;
}for(var f in e){var g=e[f];
delete e[f];
if(i[f]==null){this.__hO(g);
}if(i[f]&&i[f]!=h[f]){g.checkAppearanceNeeds();
}}this.__hM={};
}}});
})();
(function(){var c="appearance",b="qx.ui.core.queue.Appearance";
qx.Class.define(b,{statics:{__hP:{},remove:function(d){delete this.__hP[d.$$hash];
},add:function(e){var f=this.__hP;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(c);
},has:function(a){return !!this.__hP[a.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__hP;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hQ:{},add:function(f){var g=this.__hQ;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__hQ;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__hQ={};
}}});
})();
(function(){var g="none",f="qx.html.Decorator",e="absolute";
qx.Class.define(f,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
this.__hR=a;
this.__hS=b||a.toHashCode();
this.useMarkup(a.getMarkup());
var c={position:e,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){c.pointerEvents=g;
}this.setStyles(c);
},members:{__hS:null,__hR:null,getId:function(){return this.__hS;
},getDecorator:function(){return this.__hR;
},resize:function(h,i){this.__hR.resize(this.getDomElement(),h,i);
},tint:function(d){this.__hR.tint(this.getDomElement(),d);
},getInsets:function(){return this.__hR.getInsets();
}},destruct:function(){this.__hR=null;
}});
})();
(function(){var o="blur",n="focus",m="input",k="load",j="qx.ui.core.EventHandler",h="activate";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hT=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hT:null,__hU:{focusin:1,focusout:1,focus:1,blur:1},__hV:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,g){return f instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(t&&v&&p.getType()==h){t.getContainerElement().activate();
}if(this.__hU[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__hU[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__hU[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!z||!(z.isEnabled()||this.__hV[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__hT.getListeners(z,A,q);

if(!w||w.length===0){return;
}var r=qx.event.Pool.getInstance().getObject(p.constructor);
p.clone(r);
r.setTarget(t);
r.setRelatedTarget(B||null);
r.setCurrentTarget(z);
var D=p.getOriginalTarget();

if(D){var s=qx.ui.core.Widget.getWidgetByElement(D);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}r.setOriginalTarget(s);
}else{r.setOriginalTarget(u);
}for(var i=0,l=w.length;i<l;i++){var y=w[i].context||z;
w[i].handler.call(y,r);
}if(r.getPropagationStopped()){p.stopPropagation();
}
if(r.getDefaultPrevented()){p.preventDefault();
}qx.event.Pool.getInstance().poolObject(r);
},registerEvent:function(E,F,G){var H;

if(F===n||F===o){H=E.getFocusElement();
}else if(F===k||F===m){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(a,b,c){var d;

if(b===n||b===o){d=a.getFocusElement();
}else if(b===k||b===m){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.removeListener(b,this._dispatchEvent,this,c);
}}},destruct:function(){this.__hT=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__hW:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hW();
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n='toLocaleUpperCase',m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toUpperCase',h='charAt';
qx.Class.define(p,{extend:Object,construct:function(a){var a=a||u;
this.__hX=a;
this.length=a.length;
},members:{$$isString:true,length:0,__hX:null,toString:function(){return this.__hX;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[h,j,r,t,b,o,k,m,s,g,f,c,d,e,q,n];
y.valueOf=y.toString;

if(new x(u).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__hY=c;
this.__ia=d;
},members:{__hY:null,__ia:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hY,this.__ia);
}}});
})();
(function(){var S="_",R="",Q="qx.dynlocale",P="on",O="_applyLocale",N="changeLocale",M="C",L="qx.locale.Manager",K="String",J="singleton";
qx.Class.define(L,{type:J,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ib=qx.$$translations||{};
this.__ic=qx.$$locales||{};
var g=qx.bom.client.Locale;
var e=g.LOCALE;
var f=g.VARIANT;

if(f!==R){e+=S+f;
}this.setLocale(e||this.__id);
},statics:{tr:function(be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,1);
return qx.locale.Manager.getInstance().translate(be,bg);
},trn:function(C,D,E,F){var G=qx.lang.Array.fromArguments(arguments);
G.splice(0,3);
if(E!=1){return qx.locale.Manager.getInstance().translate(D,G);
}else{return qx.locale.Manager.getInstance().translate(C,G);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(B){return B;
}},properties:{locale:{check:K,nullable:true,apply:O,event:N}},members:{__id:M,__ie:null,__if:null,__ib:null,__ic:null,getLanguage:function(){return this.__if;
},getTerritory:function(){return this.getLocale().split(S)[1]||R;
},getAvailableLocales:function(){var I=[];

for(var H in this.__ic){if(H!=this.__id){I.push(H);
}}return I;
},__ig:function(q){var s;
var r=q.indexOf(S);

if(r==-1){s=q;
}else{s=q.substring(0,r);
}return s;
},_applyLocale:function(bc,bd){this.__ie=bc;
this.__if=this.__ig(bc);
},addTranslation:function(T,U){var V=this.__ib;

if(V[T]){for(var W in U){V[T][W]=U[W];
}}else{V[T]=U;
}},addLocale:function(X,Y){var ba=this.__ic;

if(ba[X]){for(var bb in Y){ba[X][bb]=Y[bb];
}}else{ba[X]=Y;
}},translate:function(t,u,v){var A;
var y=this.__ib;

if(!y){return t;
}
if(v){var x=this.__ig(v);
}else{v=this.__ie;
x=this.__if;
}
if(!A&&y[v]){A=y[v][t];
}
if(!A&&y[x]){A=y[x][t];
}
if(!A&&y[this.__id]){A=y[this.__id][t];
}
if(!A){A=t;
}
if(u.length>0){var w=[];

for(var i=0;i<u.length;i++){var z=u[i];

if(z&&z.translate){w[i]=z.translate();
}else{w[i]=z;
}}A=qx.lang.String.format(A,w);
}
if(qx.core.Variant.isSet(Q,P)){A=new qx.locale.LocalizedString(A,t,u);
}return A;
},localize:function(h,j,k){var p;
var n=this.__ic;

if(!n){return h;
}
if(k){var m=this.__ig(k);
}else{k=this.__ie;
m=this.__if;
}
if(!p&&n[k]){p=n[k][h];
}
if(!p&&n[m]){p=n[m][h];
}
if(!p&&n[this.__id]){p=n[this.__id][h];
}
if(!p){p=h;
}
if(j.length>0){var l=[];

for(var i=0;i<j.length;i++){var o=j[i];

if(o.translate){l[i]=o.translate();
}else{l[i]=o;
}}p=qx.lang.String.format(p,l);
}
if(qx.core.Variant.isSet(Q,P)){p=new qx.locale.LocalizedString(p,h,j);
}return p;
}},destruct:function(){this.__ib=this.__ic=null;
}});
})();
(function(){var m="source",l="scale",k="no-repeat",j="mshtml",i="qx.client",h="qx.html.Image";
qx.Class.define(h,{extend:qx.html.Element,members:{_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name===m){var f=this.getDomElement();
var c=this.getAllStyles();
var d=this._getProperty(m);
var e=this._getProperty(l);
var g=e?l:k;
qx.bom.element.Decoration.update(f,d,g,c);
}},_createDomElement:function(){var o=this._getProperty(l);
var p=o?l:k;

if(qx.core.Variant.isSet(i,j)){var n=this._getProperty(m);
this.setNodeName(qx.bom.element.Decoration.getTagName(p,n));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p));
}return arguments.callee.base.call(this);
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setSource:function(q){this._setProperty(m,q);
return this;
},getSource:function(){return this._getProperty(m);
},resetSource:function(){this._removeProperty(m);
return this;
},setScale:function(r){this._setProperty(l,r);
return this;
},getScale:function(){return this._getProperty(l);
}}});
})();
(function(){var M="nonScaled",L="scaled",K="alphaScaled",J=".png",I="replacement",H="hidden",G="div",F="__ih",E="Boolean",D="_applyScale",x="px",C="_applySource",A="-disabled.$1",w="img",v="changeSource",z="qx.client",y="String",B="image",u="qx.ui.basic.Image";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(t){this.__ih={};
arguments.callee.base.call(this);

if(t){this.setSource(t);
}},properties:{source:{check:y,init:null,nullable:true,event:v,apply:C,themeable:true},scale:{check:E,init:false,themeable:true,apply:D},appearance:{refine:true,init:B},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__ii:null,__ij:null,__ik:null,__ih:null,getContentElement:function(){return this.__io();
},_createContentElement:function(){return this.__io();
},_getContentHint:function(){return {width:this.__ii||0,height:this.__ij||0};
},_applyEnabled:function(n,o){arguments.callee.base.call(this,n,o);

if(this.getSource()){this._styleSource();
}},_applySource:function(k){this._styleSource();
},_applyScale:function(j){this._styleSource();
},__il:function(N){this.__ik=N;
},__im:function(){if(this.__ik==null){var i=this.getSource();
var h=false;

if(i!=null){h=qx.lang.String.endsWith(i,J);
}
if(this.getScale()&&h&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__ik=K;
}else if(this.getScale()){this.__ik=L;
}else{this.__ik=M;
}}return this.__ik;
},__in:function(c){var d;
var e;

if(c==K){d=true;
e=G;
}else if(c==M){d=false;
e=G;
}else{d=true;
e=w;
}var f=new qx.html.Image(e);
f.setScale(d);
f.setStyles({"overflowX":H,"overflowY":H});
return f;
},__io:function(){var p=this.__im();

if(this.__ih[p]==null){this.__ih[p]=this.__in(p);
}return this.__ih[p];
},_styleSource:function(){var Y=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!Y){this.getContentElement().resetSource();
return;
}this.__ip(Y);
if(qx.util.ResourceManager.getInstance().has(Y)){this.__ir(this.getContentElement(),Y);
}else if(qx.io.ImageLoader.isLoaded(Y)){this.__is(this.getContentElement(),Y);
}else{this.__it(this.getContentElement(),Y);
}},__ip:qx.core.Variant.select(z,{"mshtml":function(q){var s=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var r=qx.lang.String.endsWith(q,J);

if(s&&r){if(this.getScale()&&this.__im()!=K){this.__il(K);
}else if(!this.getScale()&&this.__im()!=M){this.__il(M);
}}else{if(this.getScale()&&this.__im()!=L){this.__il(L);
}else if(!this.getScale()&&this.__im()!=M){this.__il(M);
}}this.__iq(this.__io());
},"default":function(g){if(this.getScale()&&this.__im()!=L){this.__il(L);
}else if(!this.getScale()&&this.__im(M)){this.__il(M);
}this.__iq(this.__io());
}}),__iq:function(O){var R=this.getContainerElement();
var S=R.getChild(0);

if(S!=O){if(S!=null){var U=x;
var P={};
var Q=this.getInnerSize();

if(Q!=null){P.width=Q.width+U;
P.height=Q.height+U;
}var T=this.getInsets();
P.left=T.left+U;
P.top=T.top+U;
O.setStyles(P,true);
O.setSelectable(this.getSelectable());
}R.removeAt(0);
R.addAt(O,0);
}},__ir:function(bf,bg){var bi=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bh=bg.replace(/\.([a-z]+)$/,A);

if(bi.has(bh)){bg=bh;
this.addState(I);
}else{this.removeState(I);
}}if(bf.getSource()===bg){return;
}bf.setSource(bg);
this.__iv(bi.getImageWidth(bg),bi.getImageHeight(bg));
},__is:function(ba,bb){var bd=qx.io.ImageLoader;
ba.setSource(bb);
var bc=bd.getWidth(bb);
var be=bd.getHeight(bb);
this.__iv(bc,be);
},__it:function(V,W){var self;
var X=qx.io.ImageLoader;
{};
if(!X.isFailed(W)){X.load(W,this.__iu,this);
}else{if(V!=null){V.resetSource();
}}},__iu:function(a,b){if(a!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(b.failed){this.warn("Image could not be loaded: "+a);
}this._styleSource();
},__iv:function(l,m){if(l!==this.__ii||m!==this.__ij){this.__ii=l;
this.__ij=m;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(F);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="qx.event.type.Event",d="qx.event.Idle",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
var b=new qx.event.Timer(this.getTimeoutInterval());
b.addListener(h,this._onInterval,this);
b.start();
this.__iw=b;
},events:{"interval":e},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__iw:null,_applyTimeoutInterval:function(a){this.__iw.setInterval(a);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__iw){this.__iw.stop();
}this.__iw=null;
}});
})();
(function(){var I="top",H="right",G="bottom",F="left",E="align-start",D="qx.util.placement.AbstractAxis",C="edge-start",B="align-end",A="edge-end",z="-",w="best-fit",y="qx.util.placement.Placement",x="keep-align",v='__ix',u="direct";
qx.Class.define(y,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ix=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:D},axisY:{check:D},edge:{check:[I,H,G,F],init:I},align:{check:[I,H,G,F],init:H}},statics:{__iy:null,compute:function(b,c,d,e,f,g,h){this.__iy=this.__iy||new qx.util.placement.Placement();
var k=f.split(z);
var j=k[0];
var i=k[1];
this.__iy.set({axisX:this.__iC(g),axisY:this.__iC(h),edge:j,align:i});
return this.__iy.compute(b,c,d,e);
},__iz:null,__iA:null,__iB:null,__iC:function(a){switch(a){case u:this.__iz=this.__iz||new qx.util.placement.DirectAxis();
return this.__iz;
case x:this.__iA=this.__iA||new qx.util.placement.KeepAlignAxis();
return this.__iA;
case w:this.__iB=this.__iB||new qx.util.placement.BestFitAxis();
return this.__iB;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ix:null,compute:function(n,o,p,q){{};
var r=this.getAxisX()||this.__ix;
var t=r.computeStart(n.width,{start:p.left,end:p.right},{start:q.left,end:q.right},o.width,this.__iD());
var s=this.getAxisY()||this.__ix;
var top=s.computeStart(n.height,{start:p.top,end:p.bottom},{start:q.top,end:q.bottom},o.height,this.__iE());
return {left:t,top:top};
},__iD:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==F){return C;
}else if(K==H){return A;
}else if(J==F){return E;
}else if(J==H){return B;
}},__iE:function(){var m=this.getEdge();
var l=this.getAlign();

if(m==I){return C;
}else if(m==G){return A;
}else if(l==I){return E;
}else if(l==G){return B;
}}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__iF",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iF={};
qx.event.Registration.addListener(document.documentElement,f,this.__iH,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__iF:null,add:function(g){{};
this.__iF[g.$$hash]=g;
this.__iG();
},remove:function(q){{};
var r=this.__iF;

if(r){delete r[q.$$hash];
this.__iG();
}},hideAll:function(){var p=this.__iF;

if(p){for(var o in p){p[o].exclude();
}}},__iG:function(){var n=1e7;
var m=this.__iF;

for(var l in m){m[l].setZIndex(n++);
}},__iH:function(e){var j=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var k=this.__iF;

for(var i in k){var h=k[i];

if(!h.getAutoHide()||j==h||qx.ui.core.Widget.contains(h,j)){continue;
}h.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__iH,this,true);
this._disposeMap(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__iI:null,_invalidChildrenCache:null,__iJ:null,invalidateLayoutCache:function(){this.__iI=null;
},renderLayout:function(e,f){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iI){return this.__iI;
}return this.__iI=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(g){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var i=this.__iJ;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(c,d){this.__iJ.renderSeparator(c,d);
},connectToWidget:function(h){if(h&&this.__iJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__iJ=h;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iJ;
},_applyLayoutChange:function(){if(this.__iJ){this.__iJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iJ.getLayoutChildren();
}},destruct:function(){this.__iJ=this.__iI=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var E="label",D="icon",C="Boolean",B="both",A="String",z="left",y="changeGap",x="changeShow",w="bottom",v="_applyCenter",R="changeIcon",Q="qx.ui.basic.Atom",P="changeLabel",O="Integer",N="_applyIconPosition",M="top",L="right",K="_applyRich",J="_applyIcon",I="_applyShow",G="_applyLabel",H="_applyGap",F="atom";
qx.Class.define(Q,{extend:qx.ui.core.Widget,construct:function(a,b){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}},properties:{appearance:{refine:true,init:F},label:{apply:G,nullable:true,check:A,event:P},rich:{check:C,init:false,apply:K},icon:{check:A,apply:J,nullable:true,themeable:true,event:R},gap:{check:O,nullable:false,event:y,apply:H,themeable:true,init:4},show:{init:B,check:[B,E,D],themeable:true,inheritable:true,apply:I,event:x},iconPosition:{init:z,check:[M,L,w,z],themeable:true,apply:N},center:{init:false,check:C,themeable:true,apply:v}},members:{_createChildControlImpl:function(g){var h;

switch(g){case E:h=new qx.ui.basic.Label(this.getLabel());
h.setAnonymous(true);
h.setRich(this.getRich());
this._add(h);

if(this.getLabel()==null||this.getShow()===D){h.exclude();
}break;
case D:h=new qx.ui.basic.Image(this.getIcon());
h.setAnonymous(true);
this._addAt(h,0);

if(this.getIcon()==null||this.getShow()===E){h.exclude();
}break;
}return h||arguments.callee.base.call(this,g);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===D){this._excludeChildControl(E);
}else{this._showChildControl(E);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===E){this._excludeChildControl(D);
}else{this._showChildControl(D);
}},_applyLabel:function(s,t){var u=this.getChildControl(E,true);

if(u){u.setValue(s);
}this._handleLabel();
},_applyRich:function(n,o){var p=this.getChildControl(E,true);

if(p){p.setRich(n);
}},_applyIcon:function(i,j){var k=this.getChildControl(D,true);

if(k){k.setSource(i);
}this._handleIcon();
},_applyGap:function(q,r){this._getLayout().setGap(q);
},_applyShow:function(l,m){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(e,f){this._getLayout().setIconPosition(e);
},_applyCenter:function(c,d){this._getLayout().setCenter(c);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var G=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,H,A;
var M,F;
var K=this.getGap();
var P=this.getCenter();
if(z===k||z===f){var I=length-1;
var D=-1;
var B=-1;
}else{var I=0;
var D=length;
var B=1;
}if(z==h||z==k){if(P){var L=0;

for(var i=I;i!=D;i+=B){A=C[i].getSizeHint().height;

if(A>0){L+=A;

if(i!=I){L+=K;
}}}top=Math.round((x-L)/2);
}else{top=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
H=Math.min(F.maxWidth,Math.max(w,F.minWidth));
A=F.height;
Q=G.computeHorizontalAlignOffset(d,H,w);
M.renderLayout(Q,top,H,A);
if(A>0){top+=A+K;
}}}else{var E=w;
var y=null;
var O=0;

for(var i=I;i!=D;i+=B){M=C[i];
H=M.getSizeHint().width;

if(H>0){if(!y&&M instanceof qx.ui.basic.Label){y=M;
}else{E-=H;
}O++;
}}
if(O>1){var N=(O-1)*K;
E-=N;
}
if(y){var F=y.getSizeHint();
var J=Math.max(F.minWidth,Math.min(E,F.maxWidth));
E-=J;
}
if(P&&E>0){Q=Math.round(E/2);
}else{Q=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
A=Math.min(F.maxHeight,Math.max(x,F.minHeight));

if(M===y){H=J;
}else{H=F.width;
}top=G.computeVerticalAlignOffset(e,F.height,x);
M.renderLayout(Q,top,H,A);
if(H>0){Q+=H+K;
}}}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var length=v.length;
var n,t;
if(length===1){var n=v[0].getSizeHint();
t={width:n.width,height:n.height,minWidth:n.minWidth,minHeight:n.minHeight};
}else{var r=0,s=0;
var o=0,q=0;
var p=this.getIconPosition();
var u=this.getGap();

if(p===h||p===k){var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
s=Math.max(s,n.width);
r=Math.max(r,n.minWidth);
if(n.height>0){q+=n.height;
o+=n.minHeight;
l++;
}}
if(l>1){var m=(l-1)*u;
q+=m;
o+=m;
}}else{var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
q=Math.max(q,n.height);
o=Math.max(o,n.minHeight);
if(n.width>0){s+=n.width;
r+=n.minWidth;
l++;
}}
if(l>1){var m=(l-1)*u;
s+=m;
r+=m;
}}t={minWidth:r,width:s,minHeight:o,height:q};
}return t;
}}});
})();
(function(){var bb="middle",ba="qx.ui.layout.Util",Y="left",X="center",W="top",V="bottom",U="right";
qx.Class.define(ba,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(I,J,K){var M,Q,L,R;
var N=J>K;
var S=Math.abs(J-K);
var T,O;
var P={};

for(Q in I){M=I[Q];
P[Q]={potential:N?M.max-M.value:M.value-M.min,flex:N?M.flex:1/M.flex,offset:0};
}while(S!=0){R=Infinity;
L=0;

for(Q in P){M=P[Q];

if(M.potential>0){L+=M.flex;
R=Math.min(R,M.potential/M.flex);
}}if(L==0){break;
}R=Math.min(S,R*L)/L;
T=0;

for(Q in P){M=P[Q];

if(M.potential>0){O=Math.min(S,M.potential,Math.ceil(R*M.flex));
T+=O-R*M.flex;

if(T>=1){T-=1;
O-=1;
}M.potential-=O;

if(N){M.offset+=O;
}else{M.offset-=O;
}S-=O;
}}}return P;
},computeHorizontalAlignOffset:function(q,r,s,t,u){if(t==null){t=0;
}
if(u==null){u=0;
}var v=0;

switch(q){case Y:v=t;
break;
case U:v=s-r-u;
break;
case X:v=Math.round((s-r)/2);
if(v<t){v=t;
}else if(v<u){v=Math.max(t,s-r-u);
}break;
}return v;
},computeVerticalAlignOffset:function(a,b,c,d,e){if(d==null){d=0;
}
if(e==null){e=0;
}var f=0;

switch(a){case W:f=d;
break;
case V:f=c-b-e;
break;
case bb:f=Math.round((c-b)/2);
if(f<d){f=d;
}else if(f<e){f=Math.max(d,c-b-e);
}break;
}return f;
},collapseMargins:function(w){var x=0,z=0;

for(var i=0,l=arguments.length;i<l;i++){var y=arguments[i];

if(y<0){z=Math.min(z,y);
}else if(y>0){x=Math.max(x,y);
}}return x+z;
},computeHorizontalGaps:function(g,h,j){if(h==null){h=0;
}var k=0;

if(j){k+=g[0].getMarginLeft();

for(var i=1,l=g.length;i<l;i+=1){k+=this.collapseMargins(h,g[i-1].getMarginRight(),g[i].getMarginLeft());
}k+=g[l-1].getMarginRight();
}else{for(var i=1,l=g.length;i<l;i+=1){k+=g[i].getMarginLeft()+g[i].getMarginRight();
}k+=(h*(l-1));
}return k;
},computeVerticalGaps:function(m,n,o){if(n==null){n=0;
}var p=0;

if(o){p+=m[0].getMarginTop();

for(var i=1,l=m.length;i<l;i+=1){p+=this.collapseMargins(n,m[i-1].getMarginBottom(),m[i].getMarginTop());
}p+=m[l-1].getMarginBottom();
}else{for(var i=1,l=m.length;i<l;i+=1){p+=m[i].getMarginTop()+m[i].getMarginBottom();
}p+=(n*(l-1));
}return p;
},computeHorizontalSeparatorGaps:function(A,B,C){var F=qx.theme.manager.Decoration.getInstance().resolve(C);
var E=F.getInsets();
var D=E.left+E.right;
var G=0;

for(var i=0,l=A.length;i<l;i++){var H=A[i];
G+=H.getMarginLeft()+H.getMarginRight();
}G+=(B+D+B)*(l-1);
return G;
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(bc,bd,be,bf,bg,bh){if(bd<bc||bg<bf){if(bd<bc&&bg<bf){bd=bc;
bg=bf;
}else if(bd<bc){bg-=(bc-bd);
bd=bc;
if(bg<bf){bg=bf;
}}else if(bg<bf){bd-=(bf-bg);
bg=bf;
if(bd<bc){bd=bc;
}}}
if(bd>be||bg>bh){if(bd>be&&bg>bh){bd=be;
bg=bh;
}else if(bd>be){bg+=(bd-be);
bd=be;
if(bg>bh){bg=bh;
}}else if(bg>bh){bd+=(bg-bh);
bg=bh;
if(bd>be){bd=be;
}}}return {begin:bd,end:bg};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var w="qx.dynlocale",v="text",u="Boolean",t="qx.client",s="color",r="userSelect",q="changeLocale",p="enabled",o="none",n="on",R="_applyTextAlign",Q="qx.ui.core.Widget",P="gecko",O="changeTextAlign",N="_applyWrap",M="changeValue",L="changeContent",K="qx.ui.basic.Label",J="A",I="_applyValue",D="center",E="_applyBuddy",B="String",C="textAlign",z="right",A="changeRich",x="_applyRich",y="click",F="label",G="webkit",H="left";
qx.Class.define(K,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(m){arguments.callee.base.call(this);

if(m!=null){this.setValue(m);
}
if(qx.core.Variant.isSet(w,n)){qx.locale.Manager.getInstance().addListener(q,this._onChangeLocale,this);
}},properties:{rich:{check:u,init:false,event:A,apply:x},wrap:{check:u,init:true,apply:N},value:{check:B,apply:I,event:M,nullable:true},buddy:{check:Q,apply:E,nullable:true,init:null},textAlign:{check:[H,D,z],nullable:true,themeable:true,apply:R,event:O},appearance:{refine:true,init:F},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iK:null,__iL:null,__iM:null,__iN:null,_getContentHint:function(){if(this.__iL){this.__iO=this.__iP();
delete this.__iL;
}return {width:this.__iO.width,height:this.__iO.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(a){if(qx.core.Variant.isSet(t,P)){if(a&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,a);
if(qx.core.Variant.isSet(t,G)){this.getContainerElement().setStyle(r,a?v:o);
this.getContentElement().setStyle(r,a?v:o);
}},_getContentHeightForWidth:function(b){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iP(b).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(i,j){this.getContentElement().setStyle(C,i);
},_applyTextColor:function(k,l){if(k){this.getContentElement().setStyle(s,qx.theme.manager.Color.getInstance().resolve(k));
}else{this.getContentElement().removeStyle(s);
}},__iO:{width:0,height:0},_applyFont:function(d,f){var g;

if(d){this.__iK=qx.theme.manager.Font.getInstance().resolve(d);
g=this.__iK.getStyles();
}else{this.__iK=null;
g=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(g);
this.__iL=true;
qx.ui.core.queue.Layout.add(this);
},__iP:function(S){var W=qx.bom.Label;
var U=this.getFont();
var T=U?this.__iK.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||J;
var V=this.getRich();
return V?W.getHtmlSize(content,T,S):W.getTextSize(content,T);
},_applyBuddy:function(bc,bd){if(bd!=null){bd.removeBinding(this.__iM);
this.__iM=null;
this.removeListenerById(this.__iN);
this.__iN=null;
}
if(bc!=null){this.__iM=bc.bind(p,this,p);
this.__iN=this.addListener(y,bc.focus,bc);
}},_applyRich:function(h){this.getContentElement().setRich(h);
this.__iL=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(w,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__iL=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(L,ba,bb);
}},destruct:function(){if(qx.core.Variant.isSet(w,n)){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}if(this.__iM!=null){var c=this.getBuddy();

if(c!=null&&!c.isDisposed()){c.removeBinding(this.__iM);
}}this.__iK=this.__iM=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__iQ:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==d){var i=this.getDomElement();
qx.bom.Label.setValue(i,h);
}},_createDomElement:function(){var k=this.__iQ;
var j=qx.bom.Label.create(this._content,k);
return j;
},_copyData:function(l){return arguments.callee.base.call(this,true);
},setRich:function(e){var f=this.getDomElement();

if(f){throw new Error("The label mode cannot be modified after initial creation");
}e=!!e;

if(this.__iQ==e){return;
}this.__iQ=e;
return this;
},setValue:function(m){this._setProperty(d,m);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(g);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var k="qx.client",j="gecko",i="div",h="inherit",g="text",f="value",e="",d="hidden",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="nowrap",B="auto",A="ellipsis",z="normal",y="label",x="px",w="crop",v="end",u="100%",t="visible",s="qx.bom.Label",q="Please use the setValue() method instead.",r="opera",o="Please use the getValue() method instead.",p="block",m="none",n="-1000px",l="absolute";
qx.Class.define(s,{statics:{__iR:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iS:function(){var V=this.__iU(false);
document.body.insertBefore(V,document.body.firstChild);
return this._textElement=V;
},__iT:function(){var a=this.__iU(true);
document.body.insertBefore(a,document.body.firstChild);
return this._htmlElement=a;
},__iU:function(bc){var bd=qx.bom.Element.create(i);
var be=bd.style;
be.width=be.height=B;
be.left=be.top=n;
be.visibility=d;
be.position=l;
be.overflow=t;

if(bc){be.whiteSpace=z;
}else{be.whiteSpace=b;

if(qx.core.Variant.isSet(k,j)){var bf=document.createElementNS(c,y);
for(var bg in this.__iR){bf.style[bg]=h;
}bd.appendChild(bf);
}}return bd;
},__iV:function(S){var T={};

if(S){T.whiteSpace=z;
}else if(qx.core.Variant.isSet(k,j)){T.display=p;
}else{T.overflow=d;
T.whiteSpace=b;
T.textOverflow=A;
T.userSelect=m;
if(qx.core.Variant.isSet(k,r)){T.OTextOverflow=A;
}}return T;
},create:function(content,I,J){if(!J){J=window;
}
if(I){var K=J.document.createElement(i);
K.useHtml=true;
}else if(qx.core.Variant.isSet(k,j)){var K=J.document.createElement(i);
var L=J.document.createElementNS(c,y);
L.style.cursor=h;
L.style.color=h;
L.style.overflow=d;
L.style.maxWidth=u;
for(var M in this.__iR){L.style[M]=h;
}L.setAttribute(w,v);
K.appendChild(L);
}else{var K=J.document.createElement(i);
qx.bom.element.Style.setStyles(K,this.__iV(I));
}
if(content){this.setValue(K,content);
}return K;
},setValue:function(W,X){X=X||e;

if(W.useHtml){W.innerHTML=X;
}else if(qx.core.Variant.isSet(k,j)){W.firstChild.setAttribute(f,X);
}else{qx.bom.element.Attribute.set(W,g,X);
}},getValue:function(H){if(H.useHtml){return H.innerHTML;
}else if(qx.core.Variant.isSet(k,j)){return H.firstChild.getAttribute(f)||e;
}else{return qx.bom.element.Attribute.get(H,g);
}},getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__iT();
bb.style.width=ba!==undefined?ba+x:B;
bb.innerHTML=content;
return this.__iW(bb,Y);
},getTextSize:function(P,Q){var R=this._textElement||this.__iS();

if(qx.core.Variant.isSet(k,j)){R.firstChild.setAttribute(f,P);
}else{qx.bom.element.Attribute.set(R,g,P);
}return this.__iW(R,Q);
},__iW:function(C,D){var E=this.__iR;

if(!D){D={};
}
for(var F in E){C.style[F]=D[F]||e;
}var G=qx.bom.element.Dimension.getSize(C);

if(qx.core.Variant.isSet(k,j)){if(!qx.bom.client.Platform.WIN){G.width++;
}}return G;
},setContent:function(N,O){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.setValue(N,O);
},getContent:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.getValue(U);
}}});
})();
(function(){var j="mshtml",i="qx.client",h="qx.bom.element.Dimension",g="paddingRight",f="paddingLeft",e="paddingTop",d="paddingBottom";
qx.Class.define(h,{statics:{getWidth:qx.core.Variant.select(i,{"gecko":function(b){if(b.getBoundingClientRect){var c=b.getBoundingClientRect();
return Math.round(c.right)-Math.round(c.left);
}else{return b.offsetWidth;
}},"default":function(a){return a.offsetWidth;
}}),getHeight:qx.core.Variant.select(i,{"gecko":function(r){if(r.getBoundingClientRect){var s=r.getBoundingClientRect();
return Math.round(s.bottom)-Math.round(s.top);
}else{return r.offsetHeight;
}},"default":function(t){return t.offsetHeight;
}}),getSize:function(u){return {width:this.getWidth(u),height:this.getHeight(u)};
},__iX:{visible:true,hidden:true},getContentWidth:function(k){var m=qx.bom.element.Style;
var n=qx.bom.element.Overflow.getX(k);
var o=parseInt(m.get(k,f),10);
var q=parseInt(m.get(k,g),10);

if(this.__iX[n]){return k.clientWidth-o-q;
}else{if(k.clientWidth>=k.scrollWidth){return Math.max(k.clientWidth,k.scrollWidth)-o-q;
}else{var p=k.scrollWidth-o;
var l=qx.bom.client.Engine;

if(l.NAME===j&&l.VERSION==6){p-=q;
}return p;
}}},getContentHeight:function(w){var y=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getY(w);
var B=parseInt(y.get(w,e),10);
var z=parseInt(y.get(w,d),10);

if(this.__iX[A]){return w.clientHeight-B-z;
}else{if(w.clientHeight>=w.scrollHeight){return Math.max(w.clientHeight,w.scrollHeight)-B-z;
}else{var C=w.scrollHeight-B;
var x=qx.bom.client.Engine;

if(x.NAME===j&&x.VERSION==6){C-=z;
}return C;
}}},getContentSize:function(v){return {width:this.getContentWidth(v),height:this.getContentHeight(v)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(f){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="__iY",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__iY=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__iY:null,_applyBlockerColor:function(k,l){this.__iY.setColor(k);
},_applyBlockerOpacity:function(i,j){this.__iY.setOpacity(i);
},block:function(){this.__iY.block();
},isBlocked:function(){return this.__iY.isBlocked();
},unblock:function(){this.__iY.unblock();
},forceUnblock:function(){this.__iY.forceUnblock();
},blockContent:function(m){this.__iY.blockContent(m);
},isContentBlocked:function(){return this.__iY.isContentBlocked();
},unblockContent:function(){this.__iY.unblockContent();
},forceUnblockContent:function(){this.__iY.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__iY.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__iY.getBlockerElement();
},getBlocker:function(){return this.__iY;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var m="qx.ui.window.Window",l="changeModal",k="changeVisibility",j="changeActive",i="_applyActiveWindow",h="__ja",g="qx.ui.window.MDesktop",f="__jb";
qx.Mixin.define(g,{properties:{activeWindow:{check:m,apply:i,init:null,nullable:true}},members:{__ja:null,__jb:null,getWindowManager:function(){if(!this.__jb){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jb;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__jb){this.__jb.setDesktop(null);
}n.setDesktop(this);
this.__jb=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(o,p){this.getWindowManager().changeActiveWindow(o,p);

if(o){o.setActive(true);
}
if(p){p.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(c){if(qx.Class.isDefined(m)&&c instanceof qx.ui.window.Window){this._addWindow(c);
}},_addWindow:function(d){if(!qx.lang.Array.contains(this.getWindows(),d)){this.getWindows().push(d);
d.addListener(j,this._onChangeActive,this);
d.addListener(l,this._onChangeModal,this);
d.addListener(k,this._onChangeVisibility,this);
}
if(d.getActive()){this.setActiveWindow(d);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(b){if(qx.Class.isDefined(m)&&b instanceof qx.ui.window.Window){this._removeWindow(b);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(j,this._onChangeActive,this);
a.removeListener(l,this._onChangeModal,this);
a.removeListener(k,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ja){this.__ja=[];
}return this.__ja;
}},destruct:function(){this._disposeArray(h);
this._disposeObjects(f);
}});
})();
(function(){var t="contextmenu",s="help",r="qx.client",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",k="_applyGlobalCursor",h="_applyNativeHelp",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__jc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(a,b){},"default":function(u,v){var w=qx.bom.Stylesheet;
var x=this.__jc;

if(!x){this.__jc=x=w.createElement();
}w.removeAllRules(x);

if(u){w.addRule(x,f,qx.bom.element.Cursor.compile(u).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(c,d){if(d===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(c===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jc=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var y="resize",x="position",w="0px",v="webkit",u="paddingLeft",t="$$widget",s="qx.ui.root.Application",r="hidden",q="qx.client",p="div",m="paddingTop",o="100%",n="absolute";
qx.Class.define(s,{extend:qx.ui.root.Abstract,construct:function(l){this.__jd=qx.dom.Node.getWindow(l);
this.__je=l;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__jd,y,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__jd:null,__je:null,_createContainerElement:function(){var a=this.__je;

if(qx.core.Variant.isSet(q,v)){if(!a.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var f=a.documentElement.style;
var b=a.body.style;
f.overflow=b.overflow=r;
f.padding=f.margin=b.padding=b.margin=w;
f.width=f.height=b.width=b.height=o;
var d=a.createElement(p);
a.body.appendChild(d);
var c=new qx.html.Root(d);
c.setStyle(x,n);
c.setAttribute(t,this.toHashCode());
return c;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var g=qx.bom.Viewport.getWidth(this.__jd);
var h=qx.bom.Viewport.getHeight(this.__jd);
return {minWidth:g,width:g,maxWidth:g,minHeight:h,height:h,maxHeight:h};
},_applyPadding:function(z,A,name){if(z&&(name==m||name==u)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,z,A,name);
},_applyDecorator:function(i,j){arguments.callee.base.call(this,i,j);

if(!i){return;
}var k=this.getDecoratorElement().getInsets();

if(k.left||k.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__jd=this.__je=null;
}});
})();
(function(){var v="zIndex",u="px",t="keydown",s="deactivate",r="This method is not needed anymore.",q="resize",p="keyup",o="keypress",n="__jn",m="backgroundColor",I="_applyOpacity",H="Use 'getBlockerElement' instead.",G="opacity",F="interval",E="Tab",D="Color",C="qx.ui.root.Page",B="__ji",A="Use 'getContentBlockerElement' instead.",z="Number",x="qx.ui.core.Blocker",y="_applyColor",w="__jk";
qx.Class.define(x,{extend:qx.core.Object,construct:function(P){arguments.callee.base.call(this);
this._widget=P;
this._isPageRoot=(qx.Class.isDefined(C)&&P instanceof qx.ui.root.Page);

if(this._isPageRoot){P.addListener(q,this.__jo,this);
}this.__jf=[];
this.__jg=[];
this.__jh=[];
},properties:{color:{check:D,init:null,nullable:true,apply:y,themeable:true},opacity:{check:z,init:1,apply:I,themeable:true}},members:{__ji:null,__jj:0,__jk:null,__jh:null,__jf:null,__jg:null,__jl:null,__jm:0,__jn:null,_isPageRoot:false,_widget:null,__jo:function(e){var l=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:l.width,height:l.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:l.width,height:l.height});
}},_applyColor:function(M,N){var O=qx.theme.manager.Color.getInstance().resolve(M);
this.__jp(m,O);
},_applyOpacity:function(Q,R){this.__jp(G,Q);
},__jp:function(J,K){var L=[];
this.__ji&&L.push(this.__ji);
this.__jk&&L.push(this.__jk);

for(var i=0;i<L.length;i++){L[i].setStyle(J,K);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.__jm+=1;

if(this.__jm==1){this.__jl=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.__jm-=1;

if(this.__jm==0){this._widget.setAnonymous(this.__jl);
}},_backupActiveWidget:function(){var f=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jf.push(f.getActive());
this.__jg.push(f.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var U=this.__jf.length;

if(U>0){var T=this.__jf[U-1];

if(T){qx.bom.Element.activate(T);
}this.__jf.pop();
}var S=this.__jg.length;

if(S>0){var T=this.__jg[S-1];

if(T){qx.bom.Element.focus(this.__jg[S-1]);
}this.__jg.pop();
}},__jq:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__ji){this.__ji=this.__jq();
this.__ji.setStyle(v,15);
this._widget.getContainerElement().add(this.__ji);
this.__ji.exclude();
}return this.__ji;
},block:function(){this.__jj++;

if(this.__jj<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(s,this.__jv,this);
V.addListener(o,this.__ju,this);
V.addListener(t,this.__ju,this);
V.addListener(p,this.__ju,this);
}},isBlocked:function(){return this.__jj>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jj--;

if(this.__jj<1){this.__jr();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jj=0;
this.__jr();
},__jr:function(){this._restoreActiveWidget();
var a=this.getBlockerElement();
a.removeListener(s,this.__jv,this);
a.removeListener(o,this.__ju,this);
a.removeListener(t,this.__ju,this);
a.removeListener(p,this.__ju,this);
a.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__jk){this.__jk=this.__jq();
this._widget.getContentElement().add(this.__jk);
this.__jk.exclude();
}return this.__jk;
},blockContent:function(g){var h=this.getContentBlockerElement();
h.setStyle(v,g);
this.__jh.push(g);

if(this.__jh.length<2){h.include();

if(this._isPageRoot){if(!this.__jn){this.__jn=new qx.event.Timer(300);
this.__jn.addListener(F,this.__jt,this);
}this.__jn.start();
this.__jt();
}}},isContentBlocked:function(){return this.__jh.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jh.pop();
var j=this.__jh[this.__jh.length-1];
var k=this.getContentBlockerElement();
k.setStyle(v,j);

if(this.__jh.length<1){this.__js();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jh=[];
var b=this.getContentBlockerElement();
b.setStyle(v,null);
this.__js();
},__js:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jn.stop();
}},__jt:function(){var c=this._widget.getContainerElement().getDomElement();
var d=qx.dom.Node.getDocument(c);
this.getContentBlockerElement().setStyles({height:d.documentElement.scrollHeight+u,width:d.documentElement.scrollWidth+u});
},__ju:function(e){if(e.getKeyIdentifier()==E){e.stop();
}},__jv:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(q,this.__jo,this);
}this._disposeObjects(w,B,n);
this.__jl=this.__jf=this.__jg=this._widget=this.__jh=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(w,x){arguments.callee.base.call(this);
var w=w?qx.theme.manager.Color.getInstance().resolve(w):null;
this.setStyles({position:d,width:u,height:u,opacity:x||0,backgroundColor:w});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__jw,this);
this.addListener(p,this.__jw,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jw:function(){var y=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,y,true);
}}});
})();
(function(){var bd="keypress",bc="focusout",bb="__jx",ba="activate",Y="Tab",X="singleton",W="deactivate",V="focusin",U="qx.ui.core.FocusHandler";
qx.Class.define(U,{extend:qx.core.Object,type:X,construct:function(){arguments.callee.base.call(this);
this.__jx={};
},members:{__jx:null,__jy:null,__jz:null,__jA:null,connectTo:function(bf){bf.addListener(bd,this.__jB,this);
bf.addListener(V,this._onFocusIn,this,true);
bf.addListener(bc,this._onFocusOut,this,true);
bf.addListener(ba,this._onActivate,this,true);
bf.addListener(W,this._onDeactivate,this,true);
},addRoot:function(be){this.__jx[be.$$hash]=be;
},removeRoot:function(n){delete this.__jx[n.$$hash];
},getActiveWidget:function(){return this.__jy;
},isActive:function(m){return this.__jy==m;
},getFocusedWidget:function(){return this.__jz;
},isFocused:function(A){return this.__jz==A;
},isFocusRoot:function(v){return !!this.__jx[v.$$hash];
},_onActivate:function(e){var z=e.getTarget();
this.__jy=z;
var y=this.__jC(z);

if(y!=this.__jA){this.__jA=y;
}},_onDeactivate:function(e){var G=e.getTarget();

if(this.__jy==G){this.__jy=null;
}},_onFocusIn:function(e){var B=e.getTarget();

if(B!=this.__jz){this.__jz=B;
B.visualizeFocus();
}},_onFocusOut:function(e){var a=e.getTarget();

if(a==this.__jz){this.__jz=null;
a.visualizeBlur();
}},__jB:function(e){if(e.getKeyIdentifier()!=Y){return;
}
if(!this.__jA){return;
}e.stopPropagation();
e.preventDefault();
var w=this.__jz;

if(!e.isShiftPressed()){var x=w?this.__jG(w):this.__jE();
}else{var x=w?this.__jH(w):this.__jF();
}if(x){x.tabFocus();
}},__jC:function(S){var T=this.__jx;

while(S){if(T[S.$$hash]){return S;
}S=S.getLayoutParent();
}return null;
},__jD:function(H,I){if(H===I){return 0;
}var K=H.getTabIndex()||0;
var J=I.getTabIndex()||0;

if(K!=J){return K-J;
}var P=H.getContainerElement().getDomElement();
var O=I.getContainerElement().getDomElement();
var N=qx.bom.element.Location;
var M=N.get(P);
var L=N.get(O);
if(M.top!=L.top){return M.top-L.top;
}if(M.left!=L.left){return M.left-L.left;
}var Q=H.getZIndex();
var R=I.getZIndex();

if(Q!=R){return Q-R;
}return 0;
},__jE:function(){return this.__jK(this.__jA,null);
},__jF:function(){return this.__jL(this.__jA,null);
},__jG:function(g){var h=this.__jA;

if(h==g){return this.__jE();
}
while(g&&g.getAnonymous()){g=g.getLayoutParent();
}
if(g==null){return [];
}var j=[];
this.__jI(h,g,j);
j.sort(this.__jD);
var k=j.length;
return k>0?j[0]:this.__jE();
},__jH:function(o){var p=this.__jA;

if(p==o){return this.__jF();
}
while(o&&o.getAnonymous()){o=o.getLayoutParent();
}
if(o==null){return [];
}var q=[];
this.__jJ(p,o,q);
q.sort(this.__jD);
var r=q.length;
return r>0?q[r-1]:this.__jF();
},__jI:function(parent,b,c){var d=parent.getLayoutChildren();
var f;

for(var i=0,l=d.length;i<l;i++){f=d[i];
if(!(f instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(f)&&f.isEnabled()&&f.isVisible()){if(f.isTabable()&&this.__jD(b,f)<0){c.push(f);
}this.__jI(f,b,c);
}}},__jJ:function(parent,C,D){var E=parent.getLayoutChildren();
var F;

for(var i=0,l=E.length;i<l;i++){F=E[i];
if(!(F instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(F)&&F.isEnabled()&&F.isVisible()){if(F.isTabable()&&this.__jD(C,F)>0){D.push(F);
}this.__jJ(F,C,D);
}}},__jK:function(parent,s){var t=parent.getLayoutChildren();
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];
if(!(u instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(u)&&u.isEnabled()&&u.isVisible()){if(u.isTabable()){if(s==null||this.__jD(u,s)<0){s=u;
}}s=this.__jK(u,s);
}}return s;
},__jL:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__jD(bi,bg)>0){bg=bi;
}}bg=this.__jL(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(bb);
this.__jz=this.__jy=this.__jA=null;
}});
})();
(function(){var N="qx.client",M="head",L="text/css",K="stylesheet",J="}",I='@import "',H="{",G='";',F="qx.bom.Stylesheet",E="link",D="style";
qx.Class.define(F,{statics:{includeFile:function(a,b){if(!b){b=document;
}var c=b.createElement(E);
c.type=L;
c.rel=K;
c.href=qx.util.ResourceManager.getInstance().toUri(a);
var d=b.getElementsByTagName(M)[0];
d.appendChild(c);
},createElement:qx.core.Variant.select(N,{"mshtml":function(O){var P=document.createStyleSheet();

if(O){P.cssText=O;
}return P;
},"default":function(B){var C=document.createElement(D);
C.type=L;

if(B){C.appendChild(document.createTextNode(B));
}document.getElementsByTagName(M)[0].appendChild(C);
return C.sheet;
}}),addRule:qx.core.Variant.select(N,{"mshtml":function(W,X,Y){W.addRule(X,Y);
},"default":function(e,f,g){e.insertRule(f+H+g+J,e.cssRules.length);
}}),removeRule:qx.core.Variant.select(N,{"mshtml":function(h,j){var k=h.rules;
var l=k.length;

for(var i=l-1;i>=0;--i){if(k[i].selectorText==j){h.removeRule(i);
}}},"default":function(m,n){var o=m.cssRules;
var p=o.length;

for(var i=p-1;i>=0;--i){if(o[i].selectorText==n){m.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(N,{"mshtml":function(T){var U=T.rules;
var V=U.length;

for(var i=V-1;i>=0;i--){T.removeRule(i);
}},"default":function(Q){var R=Q.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){Q.deleteRule(i);
}}}),addImport:qx.core.Variant.select(N,{"mshtml":function(ba,bb){ba.addImport(bb);
},"default":function(bc,bd){bc.insertRule(I+bd+G,bc.cssRules.length);
}}),removeImport:qx.core.Variant.select(N,{"mshtml":function(x,y){var z=x.imports;
var A=z.length;

for(var i=A-1;i>=0;i--){if(z[i].href==y){x.removeImport(i);
}}},"default":function(q,r){var s=q.cssRules;
var t=s.length;

for(var i=t-1;i>=0;i--){if(s[i].href==r){q.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(N,{"mshtml":function(u){var v=u.imports;
var w=v.length;

for(var i=w-1;i>=0;i--){u.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var U="_applyLayoutChange",T="top",S="left",R="middle",Q="Decorator",P="center",O="_applyReversed",N="bottom",M="qx.ui.layout.VBox",L="Integer",J="right",K="Boolean";
qx.Class.define(M,{extend:qx.ui.layout.Abstract,construct:function(A,B,C){arguments.callee.base.call(this);

if(A){this.setSpacing(A);
}
if(B){this.setAlignY(B);
}
if(C){this.setSeparator(C);
}},properties:{alignY:{check:[T,R,N],init:T,apply:U},alignX:{check:[S,P,J],init:S,apply:U},spacing:{check:L,init:0,apply:U},separator:{check:Q,nullable:true,apply:U},reversed:{check:K,init:false,apply:O}},members:{__jM:null,__jN:null,__jO:null,__jP:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jQ:function(){var I=this._getLayoutChildren();
var length=I.length;
var E=false;
var D=this.__jM&&this.__jM.length!=length&&this.__jN&&this.__jM;
var G;
var F=D?this.__jM:new Array(length);
var H=D?this.__jN:new Array(length);
if(this.getReversed()){I=I.concat().reverse();
}for(var i=0;i<length;i++){G=I[i].getLayoutProperties();

if(G.height!=null){F[i]=parseFloat(G.height)/100;
}
if(G.flex!=null){H[i]=G.flex;
E=true;
}else{H[i]=0;
}}if(!D){this.__jM=F;
this.__jN=H;
}this.__jO=E;
this.__jP=I;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(a,b){if(this._invalidChildrenCache){this.__jQ();
}var j=this.__jP;
var length=j.length;
var u=qx.ui.layout.Util;
var t=this.getSpacing();
var x=this.getSeparator();

if(x){var f=u.computeVerticalSeparatorGaps(j,t,x);
}else{var f=u.computeVerticalGaps(j,t,true);
}var i,d,e,o;
var p=[];
var v=f;

for(i=0;i<length;i+=1){o=this.__jM[i];
e=o!=null?Math.floor((b-f)*o):j[i].getSizeHint().height;
p.push(e);
v+=e;
}if(this.__jO&&v!=b){var m={};
var s,w;

for(i=0;i<length;i+=1){s=this.__jN[i];

if(s>0){k=j[i].getSizeHint();
m[i]={min:k.minHeight,value:p[i],max:k.maxHeight,flex:s};
}}var g=u.computeFlexOffsets(m,b,v);

for(i in g){w=g[i].offset;
p[i]+=w;
v+=w;
}}var top=j[0].getMarginTop();
if(v<b&&this.getAlignY()!=T){top=b-v;

if(this.getAlignY()===R){top=Math.round(top/2);
}}var k,z,q,e,n,r,h;
this._clearSeparators();
if(x){var y=qx.theme.manager.Decoration.getInstance().resolve(x).getInsets();
var c=y.top+y.bottom;
}for(i=0;i<length;i+=1){d=j[i];
e=p[i];
k=d.getSizeHint();
r=d.getMarginLeft();
h=d.getMarginRight();
q=Math.max(k.minWidth,Math.min(a-r-h,k.maxWidth));
z=u.computeHorizontalAlignOffset(d.getAlignX()||this.getAlignX(),q,a,r,h);
if(i>0){if(x){top+=n+t;
this._renderSeparator(x,{top:top,left:0,height:c,width:a});
top+=c+t+d.getMarginTop();
}else{top+=u.collapseMargins(t,n,d.getMarginTop());
}}d.renderLayout(z,top,q,e);
top+=e;
n=d.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jQ();
}var bc=qx.ui.layout.Util;
var bk=this.__jP;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__jN[i];
var Y=this.__jM[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__jM=this.__jN=this.__jP=null;
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(p){arguments.callee.base.call(this);

if(p!=null){this.setHtml(p);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(q,r){var s=this.getContentElement();
s.setAttribute(a,q||m);
s.setStyles({"padding":i,"border":o});
},_applyCssClass:function(u,v){this.getContentElement().setAttribute(c,u);
},_applySelectable:function(t){arguments.callee.base.call(this,t);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,t?n:o);
this.getContentElement().setStyle(l,t?n:o);
}},_applyFont:function(y,z){var A=y?qx.theme.manager.Font.getInstance().resolve(y).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(A);
},_applyTextColor:function(w,x){if(w){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var F="_applyLayoutChange",E="left",D="center",C="top",B="Decorator",A="middle",z="_applyReversed",y="bottom",x="Boolean",w="right",u="Integer",v="qx.ui.layout.HBox";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[E,D,w],init:E,apply:F},alignY:{check:[C,A,y],init:C,apply:F},spacing:{check:u,init:0,apply:F},separator:{check:B,nullable:true,apply:F},reversed:{check:x,init:false,apply:z}},members:{__jR:null,__jS:null,__jT:null,__jU:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jV:function(){var L=this._getLayoutChildren();
var length=L.length;
var I=false;
var G=this.__jR&&this.__jR.length!=length&&this.__jS&&this.__jR;
var J;
var H=G?this.__jR:new Array(length);
var K=G?this.__jS:new Array(length);
if(this.getReversed()){L=L.concat().reverse();
}for(var i=0;i<length;i++){J=L[i].getLayoutProperties();

if(J.width!=null){H[i]=parseFloat(J.width)/100;
}
if(J.flex!=null){K[i]=J.flex;
I=true;
}else{K[i]=0;
}}if(!G){this.__jR=H;
this.__jS=K;
}this.__jT=I;
this.__jU=L;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__jV();
}var T=this.__jU;
var length=T.length;
var bd=qx.ui.layout.Util;
var bc=this.getSpacing();
var bg=this.getSeparator();

if(bg){var Q=bd.computeHorizontalSeparatorGaps(T,bc,bg);
}else{var Q=bd.computeHorizontalGaps(T,bc,true);
}var i,O,ba,Y;
var bf=[];
var U=Q;

for(i=0;i<length;i+=1){Y=this.__jR[i];
ba=Y!=null?Math.floor((M-Q)*Y):T[i].getSizeHint().width;
bf.push(ba);
U+=ba;
}if(this.__jT&&U!=M){var W={};
var bb,be;

for(i=0;i<length;i+=1){bb=this.__jS[i];

if(bb>0){V=T[i].getSizeHint();
W[i]={min:V.minWidth,value:bf[i],max:V.maxWidth,flex:bb};
}}var R=bd.computeFlexOffsets(W,M,U);

for(i in R){be=R[i].offset;
bf[i]+=be;
U+=be;
}}var bk=T[0].getMarginLeft();
if(U<M&&this.getAlignX()!=E){bk=M-U;

if(this.getAlignX()===D){bk=Math.round(bk/2);
}}var V,top,P,ba,S,bi,X;
var bc=this.getSpacing();
this._clearSeparators();
if(bg){var bh=qx.theme.manager.Decoration.getInstance().resolve(bg).getInsets();
var bj=bh.left+bh.right;
}for(i=0;i<length;i+=1){O=T[i];
ba=bf[i];
V=O.getSizeHint();
bi=O.getMarginTop();
X=O.getMarginBottom();
P=Math.max(V.minHeight,Math.min(N-bi-X,V.maxHeight));
top=bd.computeVerticalAlignOffset(O.getAlignY()||this.getAlignY(),P,N,bi,X);
if(i>0){if(bg){bk+=S+bc;
this._renderSeparator(bg,{left:bk,top:0,width:bj,height:N});
bk+=bj+bc+O.getMarginLeft();
}else{bk+=bd.collapseMargins(bc,S,O.getMarginLeft());
}}O.renderLayout(bk,top,ba,P);
bk+=ba;
S=O.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jV();
}var k=qx.ui.layout.Util;
var t=this.__jU;
var d=0,m=0,h=0;
var g=0,j=0;
var q,e,s;
for(var i=0,l=t.length;i<l;i+=1){q=t[i];
e=q.getSizeHint();
m+=e.width;
var p=this.__jS[i];
var f=this.__jR[i];

if(p){d+=e.minWidth;
}else if(f){h=Math.max(h,Math.round(e.minWidth/f));
}else{d+=e.width;
}s=q.getMarginTop()+q.getMarginBottom();
if((e.height+s)>j){j=e.height+s;
}if((e.minHeight+s)>g){g=e.minHeight+s;
}}d+=h;
var o=this.getSpacing();
var r=this.getSeparator();

if(r){var n=k.computeHorizontalSeparatorGaps(t,o,r);
}else{var n=k.computeHorizontalGaps(t,o,true);
}return {minWidth:d+n,width:m+n,minHeight:g,height:j};
}},destruct:function(){this.__jR=this.__jS=this.__jU=null;
}});
})();
(function(){var C="_applyLayoutChange",B="left",A="center",z="top",y="Integer",x="middle",w="bottom",v="qx.ui.layout.Flow",u="right",t="Boolean";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,construct:function(g,h,j){arguments.callee.base.call(this);

if(g){this.setSpacingX(g);
}
if(h){this.setSpacingY(h);
}
if(j){this.setAlignX(j);
}},properties:{alignX:{check:[B,A,u],init:B,apply:C},alignY:{check:[z,x,w],init:z,apply:C},spacingX:{check:y,init:0,apply:C},spacingY:{check:y,init:0,apply:C},reversed:{check:t,init:false,apply:C}},members:{verifyLayoutProperty:null,renderLayout:function(a,b){var f=this._getLayoutChildren();

if(this.getReversed()){f=f.concat().reverse();
}var c=new qx.ui.layout.LineSizeIterator(f,this.getSpacingX());
var d=0;

while(c.hasMoreLines()){var e=c.computeNextLine(a);
this.__jW(e,d,a);
d+=e.height+this.getSpacingY();
}},__jW:function(k,l,m){var o=qx.ui.layout.Util;
var r=0;

if(this.getAlignX()!=B){r=m-k.width;

if(this.getAlignX()==A){r=Math.round(r/2);
}}
for(var i=0;i<k.children.length;i++){var p=k.children[i];
var s=p.getSizeHint();
var q=p.getMarginTop();
var n=p.getMarginBottom();
var top=o.computeVerticalAlignOffset(p.getAlignY()||this.getAlignY(),q+s.height+n,k.height,q,n);
p.renderLayout(r+k.gapsBefore[i],l+top,s.width,s.height);
r+=k.gapsBefore[i]+s.width;
}},_computeSizeHint:function(){return this.__jX(Infinity);
},hasHeightForWidth:function(){return true;
},getHeightForWidth:function(D){return this.__jX(D).height;
},__jX:function(E){var F=new qx.ui.layout.LineSizeIterator(this._getLayoutChildren(),this.getSpacingX());
var J=0;
var G=0;
var H=0;

while(F.hasMoreLines()){var I=F.computeNextLine(E);
H+=1;
G=Math.max(G,I.width);
J+=I.height;
}return {width:G,height:J+this.getSpacingY()*(H-1)};
}}});
})();
(function(){var r="qx.ui.layout.LineSizeIterator";
qx.Class.define(r,{extend:Object,construct:function(p,q){this.__jY=p;
this.__ka=q;
this.__kb=p.length>0;
this.__kc=0;
},members:{__jY:null,__ka:null,__kb:null,__kc:null,computeNextLine:function(c){var c=c||Infinity;

if(!this.__kb){throw new Error("No more lines to compute");
}var n=this.__jY;
var l=0;
var e=0;
var m=[];
var h=[];

for(var i=this.__kc;i<n.length;i++){var k=n[i];
var o=k.getSizeHint();
var g=this.__kd(i);
var f=o.width+g;
var d=i==this.__kc;

if(!d&&e+f>c){this.__kc=i;
break;
}var j=o.height+k.getMarginTop()+k.getMarginBottom();
m.push(k);
h.push(g);
e+=f;
l=Math.max(l,j);

if(k.getLayoutProperties().lineBreak){this.__kc=i+1;
break;
}}
if(i>=n.length){this.__kb=false;
}return {height:l,width:e,children:m,gapsBefore:h};
},__kd:function(a){var b=a==this.__kc;

if(b){return this.__jY[a].getMarginLeft();
}else{return Math.max(this.__jY[a-1].getMarginRight(),this.__jY[a].getMarginLeft(),this.__ka);
}},hasMoreLines:function(){return this.__kb;
}}});
})();


qx.$$loader.init();

