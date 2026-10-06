(function(){var S=window.SITE,R=window.render,e=R.esc,$=function(i){return document.getElementById(i)};
var A=S.about;
if(A.heading)$("a-head").textContent=A.heading;
if(A.lead)$("a-lead").textContent=A.lead;
$("a-text").innerHTML=R.paras(A.paras);
$("a-fig").innerHTML='<img src="'+e(A.img)+'" alt="'+e(A.imgAlt)+'" loading="lazy"><figcaption>'+e(A.imgAlt)+'</figcaption>';
var out="";
["research","teaching","outside"].forEach(function(k){
  var b=A[k]; if(!b) return;
  out+='<section class="blk"><h2>'+e(b.heading)+'</h2><div class="narrow">'+R.paras(b.paras)+'</div></section>';
});
out+='<section class="blk"><h2>Get in touch</h2><p class="narrow">'+
 '<a href="mailto:'+e(S.profile.email)+'">'+e(S.profile.email)+'</a> · '+
 '<a href="'+e(S.profile.cv)+'">Curriculum vitae (PDF)</a> · '+
 '<a href="'+e(S.profile.github)+'">GitHub</a>'+
 (S.profile.rg?' · <a href="'+e(S.profile.rg)+'">ResearchGate</a>':'')+'</p></section>';
$("a-more").innerHTML=out;
})();