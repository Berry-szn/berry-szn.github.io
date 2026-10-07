(function(){var S=window.SITE.research,R=window.render,e=R.esc,$=function(i){return document.getElementById(i)};
$("r-head").textContent=S.heading; $("r-intro").innerHTML=R.paras(S.intro);
$("r-int").innerHTML=S.interests.map(function(m){return '<div><dt>'+e(m.k)+'</dt><dd>'+e(m.v)+'</dd></div>';}).join("");
$("r-camps").innerHTML=S.campaigns.map(function(c){
 return '<div class="camp"><h3>'+e(c.name)+'<span class="where">'+e(c.place)+' · '+e(c.period)+
 '</span></h3><p class="net">'+e(c.network)+'</p><p>'+e(c.what)+'</p><p class="res">'+e(c.result)+'</p></div>';}).join("");
$("r-fig").innerHTML='<figure class="plot"><div class="key">'+
 '<span><i style="background:var(--S)"></i>PhaseNet</span>'+
 '<span><i style="background:var(--soft)"></i>VolPick</span>'+
 '<span><i style="background:var(--P)"></i>EQTransformer</span></div>'+
 '<svg viewBox="0 0 640 300" role="img" aria-label="Arrival recovery against distance for three pickers.">'+
 '<g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--faint)">'+
 '<text x="0" y="24">80%</text><text x="0" y="86">60%</text><text x="0" y="148">40%</text>'+
 '<text x="0" y="210">20%</text><text x="6" y="252">0</text></g>'+
 '<g stroke="var(--rule)" stroke-width="1"><line x1="44" y1="20" x2="630" y2="20"/>'+
 '<line x1="44" y1="82" x2="630" y2="82"/><line x1="44" y1="144" x2="630" y2="144"/>'+
 '<line x1="44" y1="206" x2="630" y2="206"/></g>'+
 '<line x1="44" y1="248" x2="630" y2="248" stroke="var(--ink)" stroke-width="1.2"/>'+
 '<polyline points="110,109 250,165 390,174 580,13" fill="none" stroke="var(--S)" stroke-width="2.2"/>'+
 '<polyline points="110,140 250,149 390,171 580,13" fill="none" stroke="var(--soft)" stroke-width="2.2" stroke-dasharray="6 4"/>'+
 '<polyline points="110,239 250,236 390,239 580,133" fill="none" stroke="var(--P)" stroke-width="2.2" stroke-dasharray="2 4"/>'+
 '<g fill="var(--S)"><circle cx="110" cy="109" r="4"/><circle cx="250" cy="165" r="4"/><circle cx="390" cy="174" r="4"/><circle cx="580" cy="13" r="4"/></g>'+
 '<g fill="var(--soft)"><circle cx="110" cy="140" r="3.2"/><circle cx="250" cy="149" r="3.2"/><circle cx="390" cy="171" r="3.2"/><circle cx="580" cy="13" r="3.2"/></g>'+
 '<g fill="var(--P)"><circle cx="110" cy="239" r="3.2"/><circle cx="250" cy="236" r="3.2"/><circle cx="390" cy="239" r="3.2"/><circle cx="580" cy="133" r="3.2"/></g>'+
 '<g font-family="IBM Plex Sans, sans-serif" font-size="11.5" fill="var(--soft)" text-anchor="middle">'+
 '<text x="110" y="269">0–2 km</text><text x="250" y="269">2–5 km</text>'+
 '<text x="390" y="269">5–10 km</text><text x="580" y="269">beyond 20 km</text></g>'+
 '<g font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--faint)" text-anchor="middle">'+
 '<text x="110" y="285">n=165</text><text x="250" y="285">n=604</text>'+
 '<text x="390" y="285">n=231</text><text x="580" y="285">n=187</text></g></svg>'+
 '<figcaption>'+e(S.figure.caption)+'</figcaption></figure>';
$("r-note").textContent=S.figure.note;
if(S.workflow){document.getElementById("w-head").textContent=S.workflow.heading;
document.getElementById("w-intro").textContent=S.workflow.intro;
document.getElementById("w-items").innerHTML=R.gallery(S.workflow.items,"three tall");}
function figBlock(F){return '<figure class="plot" style="margin-top:2rem"><a href="'+e(F.img)+'" data-lb data-cap="'+e(F.caption)+'"><img src="'+e(F.img)+'" alt="" style="width:100%;display:block"></a><figcaption>'+e(F.caption)+'</figcaption></figure>';}
if(S.figureLocal){$("r-figL").innerHTML=figBlock(S.figureLocal);}
if(S.figure3){$("r-fig3").innerHTML=figBlock(S.figure3);}
if(S.figure2){$("r-fig2").innerHTML=figBlock(S.figure2);}
$("r-methods").innerHTML=S.methods.map(function(m){
 return '<div><dt>'+e(m.k)+'</dt><dd>'+e(m.v)+'</dd></div>';}).join("");
})();
