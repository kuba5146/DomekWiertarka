export function createGauge({value=0,scale,onChange}) {
  const el=document.createElement("div"); el.className="gauge-card";
  const clamp=v=>Math.max(scale.rawMin,Math.min(scale.rawMax,v));
  const render=raw=>{ raw=clamp(Number(raw)||0); const p=(raw-scale.rawMin)/(scale.rawMax-scale.rawMin); const out=Math.round(scale.outMin+p*(scale.outMax-scale.outMin)); el.style.setProperty("--angle",`${-90+p*180}deg`); el.querySelector(".gauge-value").textContent=out; el.querySelector(".raw").textContent=`RAW ${raw} · ${Math.round(p*100)}%`; el.dataset.raw=raw; };
  el.innerHTML=`<div class="card-head"><div><strong>Prędkość wrzeciona</strong><small>Skala ${scale.outMin}–${scale.outMax} ${scale.unit}</small></div><span>⌁</span></div><div class="gauge"><div class="arc"></div><div class="needle"></div><div class="hub"></div><div class="readout"><b class="gauge-value">0</b><small>${scale.unit}</small></div></div><div class="raw"></div>`;
  const pointer=e=>{const r=el.querySelector('.gauge').getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.bottom-8; const x=e.clientX-cx,y=cy-e.clientY; let a=Math.atan2(y,x)*180/Math.PI; a=Math.max(0,Math.min(180,a)); onChange(Math.round(scale.rawMin+(1-a/180)*(scale.rawMax-scale.rawMin)));};
  el.querySelector('.gauge').addEventListener('pointerdown',e=>{e.currentTarget.setPointerCapture(e.pointerId);pointer(e)}); el.querySelector('.gauge').addEventListener('pointermove',e=>{if(e.buttons)pointer(e)}); render(value); el.setValue=render; return el;
}
