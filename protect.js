/* 文章防複製保護：禁止選取、複製、右鍵、拖曳 */
(function(){
  var css = document.createElement('style');
  css.textContent = '.article-layout, .article-hero-body, .prose, .fee-table, .why-box, .city-card, .notice-box { -webkit-user-select:none; -moz-user-select:none; user-select:none; } .article-layout img { -webkit-user-drag:none; pointer-events:auto; }';
  document.head.appendChild(css);
  ['copy','cut','contextmenu','dragstart','selectstart'].forEach(function(ev){
    document.addEventListener(ev, function(e){
      var t = e.target;
      if(t && t.closest && (t.closest('.article-layout') || t.closest('.article-hero-body'))){
        if(t.closest('.vip-input')) return; /* 密碼框仍可操作 */
        e.preventDefault();
      }
    });
  });
})();
