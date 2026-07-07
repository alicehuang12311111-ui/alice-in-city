/* ============================================================
   VIP 解鎖設定 —— 要更改密碼，只需修改下面這一行的引號內容
   ============================================================ */
const VIP_PASSWORD = "ALICE2026";

function vipUnlock(){
  var input = document.getElementById('vipPass');
  var err = document.getElementById('vipError');
  if(!input) return;
  if(input.value.trim().toUpperCase() === VIP_PASSWORD.toUpperCase()){
    localStorage.setItem('aic_vip','1');
    document.body.classList.add('vip-unlocked');
    window.scrollBy({top:10,behavior:'smooth'});
  } else {
    if(err){ err.style.display='block'; }
    input.value=''; input.focus();
  }
}
document.addEventListener('DOMContentLoaded', function(){
  if(localStorage.getItem('aic_vip')==='1'){ document.body.classList.add('vip-unlocked'); }
  var input = document.getElementById('vipPass');
  if(input){ input.addEventListener('keydown', function(e){ if(e.key==='Enter') vipUnlock(); }); }
});
