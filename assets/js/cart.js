// cart management helpers
(function(){
  function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]'); }
  function saveCart(c){ localStorage.setItem('cart', JSON.stringify(c)); }
  function addToCart(item, qty=1){
    const cart = getCart();
    const found = cart.find(i=>i.id===item.id);
    if(found){ found.qty = (found.qty||1)+qty; }
    else cart.push({id:item.id, name:item.name, price:item.price, discount:item.discount, img:item.img, qty});
    saveCart(cart);
    return cart;
  }
  function removeFromCart(id){ const cart=getCart().filter(i=>i.id!==id); saveCart(cart); return cart; }
  function updateQty(id,qty){ const cart=getCart(); const it=cart.find(i=>i.id===id); if(it){ it.qty=qty; saveCart(cart);} return cart; }
  window.cartApi = {getCart,saveCart,addToCart,removeFromCart,updateQty};
})();
