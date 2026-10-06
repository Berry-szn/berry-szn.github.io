(function(){var S=window.SITE.gallery,R=window.render,e=R.esc;
document.getElementById("g-head").textContent=S.heading;
document.getElementById("g-intro").textContent=S.intro;
document.getElementById("g-body").innerHTML=S.groups.map(function(g){
 return '<section class="blk"><h2>'+e(g.name)+'</h2>'+R.gallery(g.items,"three sq")+'</section>';}).join("");
})();
