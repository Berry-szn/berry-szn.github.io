(function(){var S=window.SITE.software,R=window.render,e=R.esc;
document.getElementById("s-intro").textContent=S.intro;
document.getElementById("s-body").innerHTML=S.groups.map(function(g){
 return '<section class="blk swgroup"><h2>'+e(g.name)+'</h2>'+
 g.items.map(R.tool).join("")+'</section>';}).join("");
})();
