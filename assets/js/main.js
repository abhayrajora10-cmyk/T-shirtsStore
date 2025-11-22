// Shared helpers: login checks, modal, render helpers
(function(){
  function isLoggedIn(){
    return !!localStorage.getItem('currentUser');
  }
  function showLoginModal(message){
    // create modal if not exists
    let modal = document.getElementById('login-modal');
    if(!modal){
      modal = document.createElement('div'); modal.id='login-modal'; modal.className='modal';
      modal.innerHTML = `<div class="dialog"><h3>Please login to continue</h3><p class="small">${message||'You need to sign in to access this feature.'}</p><div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end"><a href="login.html" class="btn">Login</a><button class="btn btn-outline" id="close-modal">Close</button></div></div>`;
      document.body.appendChild(modal);
      modal.querySelector('#close-modal').addEventListener('click',()=>hideModal(modal));
    }
    modal.classList.add('show');
  }
  function hideModal(el){el.classList.remove('show');}

  function requireLogin(action){
    if(!isLoggedIn()){ showLoginModal(); return false; }
    return true;
  }

  function qs(q){return document.querySelector(q)}
  function qsa(q){return Array.from(document.querySelectorAll(q))}

  // expose
  window.shopHelpers = {isLoggedIn, showLoginModal, requireLogin, qs, qsa};
})();

// Page-specific on-load behaviors
window.addEventListener('DOMContentLoaded',()=>{
  // render navbar cart count
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const count = cart.reduce((s,i)=>s + (i.qty||1),0);
  const el = document.getElementById('cart-count'); if(el) el.textContent = count;

  // optional: update logged-in UI
  const cu = localStorage.getItem('currentUser');
  if(cu){
    const u=JSON.parse(cu);
    const loginBtn = document.getElementById('nav-login');
    if(loginBtn) loginBtn.textContent = `Hi, ${u.name.split(' ')[0]}`;
  }
});
