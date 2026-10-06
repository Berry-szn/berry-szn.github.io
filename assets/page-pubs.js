(function(){var S=window.SITE.publications,R=window.render,e=R.esc;
document.getElementById("p-body").innerHTML=S.groups.map(function(g){
 return '<div class="pubgroup"><h2>'+e(g.title)+'</h2>'+
 (g.note?'<p class="pubnote">'+e(g.note)+'</p>':'')+
 g.items.map(R.pub).join("")+'</div>';}).join("");
})();
