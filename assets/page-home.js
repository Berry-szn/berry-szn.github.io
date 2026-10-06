(function(){var S=window.SITE,R=window.render,e=R.esc,p=S.profile,$=function(i){return document.getElementById(i)};
$("hero-bg").style.backgroundImage="url('"+p.hero+"')";
$("h-role").textContent=p.role; $("h-name").textContent=p.name;
$("h-line").textContent=p.line;
if(document.getElementById("h-second"))$("h-second").textContent=p.second;
$("h-contact").innerHTML='<a href="mailto:'+e(p.email)+'">'+e(p.email)+'</a>'+
  '<a href="'+e(p.github)+'">GitHub</a>'+(p.rg?'<a href="'+e(p.rg)+'">ResearchGate</a>':'')+'<a href="'+e(p.cv)+'">CV (PDF)</a>';
window.buildAudio($("h-listen"));

$("h-cap").textContent="An earthquake a few kilometres south-west of the array. The P wavefront "+
 "arrives first and the S follows more slowly; each trace begins when the front reaches that station, "+
 "and the delay between them is the wave crossing the ground. Station positions are the real "+
 "short-period network at Bolshe-Bannye.";
$("h-cards").innerHTML=S.home.cards.map(function(c){
  return '<a href="'+e(c.to)+'"><h3>'+e(c.h)+'</h3><p>'+e(c.d)+'</p></a>';}).join("");
})();
