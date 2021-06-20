var minSaved1;
var secSaved1;
var time;
var vdot;
var easy;
var tempo;
var interval;
var repitition;
var easy1;
var tempo1;
var interval1;
var repitition1;
var minSaved;
var secSaved;

function vdotcalc(s)
{
  var t = parseInt(s);
  a=t;
  if(1840 <= a && a<= 3000)
    vdot = 30;
  if (1791 <= a && a<= 1839)
    vdot = 31;
  if (1745 <= a && a<= 1790)
    vdot = 32;
  if (1701 <= a && a<= 1744)
    vdot = 33;
  if (1659 <= a && a<= 1700)
    vdot = 34;
  if (1620 <= a && a<= 1658)
    vdot = 35;
  if (1582 <= a && a<= 1619)
    vdot = 36;
  if (1546 <= a && a<= 1581)
    vdot = 37;
  if (1512 <= a && a<= 1545)
    vdot = 38;
  if (1479 <= a && a<= 1511)
    vdot = 39;
  if (1448 <= a && a<= 1478)
    vdot = 40;
  if (1418 <= a && a<= 1447)
    vdot = 41;
  if (1389 <= a && a<= 1417)
    vdot = 42;
    if (1361 <= a && a<= 1388)
    vdot = 43;
    if (1335 <= a && a<= 1360)
    vdot = 44;
    if (1310 <= a && a<= 1334)
    vdot = 45
    if (1285 <= a && a<= 1309)
    vdot = 46;
    if (1262 <= a && a<= 1284)
    vdot = 47;
    if (1239 <= a && a<= 1261)
    vdot = 48;
    if (1218 <= a && a<= 1238)
    vdot = 49;
    if (1197 <= a && a<= 1217)
    vdot = 50;
    if (1176 <= a && a<= 1196)
    vdot = 51;
    if (1157 <= a && a<= 1175)
    vdot = 52;
    if (1138 <= a && a<= 1156)
    vdot = 53;
    if (1120 <= a && a<= 1137)
    vdot = 54;
    if (1102 <= a && a<= 1119)
    vdot = 55;
    if (1085 <= a && a<= 1101)
    vdot = 56;
    if (1069 <= a && a<= 1084)
    vdot = 57;
    if (1053 <= a && a<= 1068)
    vdot = 58;
    if (1037 <= a && a<= 1054)
    vdot = 59;
    if (1023 <= a && a<= 1036)
    vdot = 60;
    if (1008 <= a && a<= 1022)
    vdot = 61;
    if (994 <= a && a<= 1007)
    vdot = 62;
    if (980 <= a && a<= 993)
    vdot = 63;
    if (967 <= a && a<= 979){
      vdot = 64;
    }
    
    if (954 <= a && a<= 966)
    vdot = 65;

    if (942 <= a && a<= 953)
    vdot = 66;
    if (929 <= a && a<= 941)
    vdot = 67;
    if (918 <= a && a <= 928)
    vdot = 68;
    if (906 <= a && a <= 917)
    vdot = 69;
    if (895 <= a && a <= 905)
    vdot = 70;
   
  return vdot;
}

function pace(v)
{
  var t = parseInt(v);
  vdot=t;
switch(vdot)
{
  
  case 30:
    easy = 750;
    tempo = 620;
    interval = 576;
    repitition = 536;
    break;
  case 31:
    easy = 730;
    tempo = 600;
    interval = 550;
    repitition = 525;
    break;
  case 32:
    easy = 710;
    tempo = 585;
    interval = 538;
    repitition = 505;
      break;
  case 33:
    easy = 695;
    tempo = 575;
    interval = 525;
    repitition = 490;
    break;
  case 34:
    easy = 680;
    tempo = 565;
    interval = 514;
    repitition = 481;
    break;
  case 35:
    easy = 670;
    tempo = 548;
    interval = 502;
    repitition =465;
      break;
  case 36:
    easy = 660;
    tempo =535;
    interval = 490;
    repitition =455;
    break;
  case 37:
    easy = 645;
    tempo = 525;
    interval =475;
    repitition = 440;
    break;
  case 38:
    easy = 630;
    tempo = 513;
    interval = 465;
    repitition = 430;
      break;
  case 39:
    easy = 620;
    tempo = 500;
    interval = 455;
    repitition = 425;
    break;
  case 40:
    easy = 605;
    tempo =495;
    interval = 450;
    repitition = 415;
    break;
  case 41:
    easy = 595;
    tempo = 480;
    interval = 440;
    repitition =  410;
      break;
  case 42:
    easy = 572;
    tempo = 475;
    interval = 430;
    repitition = 400;
    break;
  case 43:
    easy = 570;
    tempo =460;
    interval = 425;
    repitition =390;
    break;
  case 44:
    easy = 560;
    tempo = 455;
    interval =415;
    repitition = 385;
      break;
  case 45:
    easy = 550;
    tempo = 445;
    interval = 410;
    repitition =375;
    break;
  case 46:
    easy = 540;
    tempo =440;
    interval =400;
    repitition =370;
    break;
  case 47:
    easy = 535;
    tempo = 430;
    interval =390;
    repitition = 360;
      break;
  case 48:
    easy = 525;
    tempo =420;
    interval =385;
    repitition = 353;
    break;
  case 49:
    easy = 515;
    tempo = 415;
    interval = 380;
    repitition =350;
    break;
  case 50:
    easy = 510;
    tempo = 410;
    interval = 372;
    repitition =344;
      break;
  case 51:
    easy = 500;
    tempo =405;
    interval =370;
    repitition = 344;
    break;
  case 52:
    easy = 490;
    tempo = 400;
    interval = 365;
    repitition =340;
    break;
  case 53:
    easy = 485;
    tempo = 390;
    interval =360;
    repitition = 335;
      break;
  case 54:
    easy = 480;
    tempo = 385;
    interval = 350;
    repitition = 330;
    break;
  case 55:
    easy = 470;
    tempo = 380;
    interval = 345;
    repitition = 325;
    break;
  case 56:
    easy = 465;
    tempo = 375;
    interval =340;
    repitition =320;
      break;
  case 57:
    easy = 460;
    tempo = 370;
    interval =335;
    repitition =315;
    break;
  case 58:
    easy = 450;
    tempo = 365; 
    interval =330;
    repitition = 310;
    break;
  case 59:
    easy = 445;
    tempo = 360;
    interval =328;
    repitition = 305;
      break;
  case 60:
    easy = 440;
    tempo = 355;
    interval =325;
    repitition =300;
    break;
  case 61:
    easy = 435;
    tempo =350;
    interval =320;
    repitition = 295;
    break;
  case 62:
    easy = 430;
    tempo =345;
    interval =315;
    repitition =290;
      break;
  case 63:
    easy = 420;
    tempo =340;
    interval =312;
    repitition = 287;
    break;
  case 64:
    easy = 415;
    tempo =335;
    interval =310;
    repitition =  285;
    break;
  case 65:
    easy = 410;
    tempo = 330;
    interval =305;
    repitition = 280;
      break;
  case 66:
    easy = 405;
    tempo = 325;
    interval = 300;
    repitition = 275;
    break;
  case 67:
    easy = 400;
    tempo = 320;
    interval = 297;
    repitition = 270;
    break;
  case 68:
    easy = 395;
    tempo = 315;
    interval = 295;
    repitition =265;
      break;
  case 69:
    easy = 390;
    tempo =310;
    interval = 290;
    repitition = 363;
    break;
  case 70:
    easy = 385;
    tempo = 305;
    interval = 285;
    repitition = 260;
    break;
  default:
    console.log("didnt work");
}

}


function values(){
    var easymin = Math.floor(easy/60);
    var easysec = easy - easymin * 60;
    if(easysec == 0){
      easy1 = easymin.toString() + ":" + "00";
    }
    else if(easysec == 1 || easysec == 2 || easysec == 3 || easysec == 4 || easysec == 5 || easysec == 6 || easysec == 7 || easysec == 8 || easysec == 9 ){
      easy1 = easymin.toString() + ":" + "0"+ easysec.toString() ;
    }
    else{
      easy1 = easymin.toString() + ":" + easysec.toString();
    }
    

    var tempomin = Math.floor(tempo/60);
    var temposec = tempo - tempomin * 60;
    if(temposec == 0){
      tempo1 = tempomin.toString() + ":"  + "00";
    }
    else if(temposec == 1 || temposec == 2 || temposec == 3 || temposec == 4 || temposec == 5 || temposec == 6 || temposec == 7 || temposec == 8 || temposec == 9 ){
      tempo1 = tempomin.toString() + ":" + "0"+ temposec.toString() ;
    }
    else{
      tempo1 = tempomin.toString() + ":" + temposec.toString();
    }
    

    var intervalmin = Math.floor(interval/60);
    var intervalsec = interval - intervalmin * 60;
    if(intervalsec == 0){
      interval1 = intervalmin.toString() + ":" + "00";
    }
    else if(intervalsec == 1 || intervalsec == 2 || intervalsec == 3 || intervalsec == 4 || intervalsec == 5 || intervalsec == 6 || intervalsec == 7 || intervalsec == 8 || intervalsec == 9 ){
      interval1 = intervalmin.toString() + ":" + "0"+ intervalsec.toString() ;
    }
    else{
      interval1 = intervalmin.toString() + ":" + intervalsec.toString();
    }
    

    var repititionmin = Math.floor(repitition/60);
    var repititionsec = repitition - repititionmin * 60;
    if(repititionsec == 0){
      repitition1 = repititionmin.toString() + ":" + "00";
    }
    else if(repititionsec == 1 || repititionsec == 2 || repititionsec == 3 || repititionsec == 4 || repititionsec == 5 || repititionsec == 6 || repititionsec == 7 || repititionsec == 8 || repititionsec == 9 ){
      repitition1 = repititionmin.toString() + ":" + "0"+ repititionsec.toString() ;
    }
    else{
      repitition1 = repititionmin.toString() + ":" + repititionsec.toString();
    }
    
}

function save(){
  minSaved = document.getElementById("min").value;
  secSaved = document.getElementById("sec").value;
}

function convert(s){
  vdot = vdotcalc(s);
  pace(vdot);
  values();
}



document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById("s");
  // onClick's logic below:
  link.addEventListener('click', function() {
    var text = document.getElementById("data");
    save();
    if(minSaved == "" || secSaved == ""){
      text.innerHTML = "Input valid time";
      return;
    }
    if(isNaN(minSaved) || isNaN(secSaved)){
      text.innerHTML = "Input valid time";
      return;
    }
    minSaved1 = parseInt(minSaved);
      secSaved1 = parseInt(secSaved);
    time = minSaved1*60 + secSaved1;
    if(parseInt(minSaved) <= 0 || parseInt(secSaved) < 0 || parseInt(secSaved) >= 60){
      text.innerHTML = "Input valid time";
      return;
    }
    if(time < 895){
      text.innerHTML = "You're too fast! Go get a professional coach!"
    }
    else{
      convert(time);
      text.innerHTML = "Training Paces (min/mile):" + "<br>" +"Easy Pace: " + easy1 + "<br>" + "Tempo Pace: " +tempo1 + "<br>" + "Interval Pace: " + interval1 + "<br>" + "Repetition Pace: " + repitition1 + "<br>";
      var descr = document.getElementById("description");
      descr.innerHTML = "These training paces are merely a suggestion. There are a variety of factors that can influence your workouts that may make these paces innaccurate (weather, injury... etc).";
      var sugg = document.getElementById("suggest");
      sugg.innerHTML = "Examples of Workouts at these Paces: " + "<br>" + "<br>"+ "Easy Pace: Running at relaxed pace where you can talk." + "<br>" + "Tempo Pace: 20 minute run" + "<br>" + "Interval Pace: 5x1K repeats" + "<br>" + "Repetition Pace: 8x400m";
    }
    
  });
});