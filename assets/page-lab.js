(function(){var S=window.SITE.laboratory,R=window.render,e=R.esc;
document.getElementById("l-head").textContent=S.heading;
document.getElementById("l-intro").textContent=S.intro;
document.getElementById("l-body").innerHTML=S.groups.map(function(g){
 return '<section class="blk"><h2>'+e(g.name)+'</h2>'+R.gallery(g.items,"tall")+'</section>';}).join("");
})();
