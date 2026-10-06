(function(){var S=window.SITE,R=window.render,e=R.esc,$=function(i){return document.getElementById(i)};
$("v-head").textContent=S.startups.heading; $("v-intro").textContent=S.startups.intro;
$("v-body").innerHTML=S.startups.items.map(function(v){
 return '<section class="blk"><div class="venture">'+
 '<div class="hdr"><h2>'+e(v.n)+'</h2><span class="tag">'+e(v.tag)+'</span><span class="yr">'+e(v.year)+'</span></div>'+
 '<p class="one">'+e(v.one)+'</p><p>'+e(v.d)+'</p>'+
 '<p class="built">'+e(v.built)+'</p>'+
 '<dl class="facts">'+v.facts.map(function(f){return '<div><dt>'+e(f[0])+'</dt><dd>'+e(f[1])+'</dd></div>';}).join("")+'</dl>'+
 '</div>'+R.gallery(v.shots,"three")+'</section>';}).join("");
if(S.games){document.getElementById("g-sec").innerHTML=
 '<section class="blk"><h2>'+e(S.games.heading)+'</h2><p class="narrow">'+e(S.games.intro)+'</p>'+
 (S.games.link?'<p class="narrow"><a href="'+e(S.games.link)+'">'+e(S.games.linkText||"Play it")+'</a></p>':'')+
 R.gallery(S.games.shots,"three")+'</section>';}
$("hb-head").textContent=S.hobbies.heading; $("hb-intro").textContent=S.hobbies.intro;
$("hb-items").innerHTML=R.gallery(S.hobbies.items,"three");
})();
