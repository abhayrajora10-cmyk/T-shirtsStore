// auth helpers for login/signup
(function(){
  function getUsers(){
    const raw = localStorage.getItem('users');
    if(!raw){
      // seed initial users from appData if present
      const init = (window.appData && window.appData.initialUsers) ? window.appData.initialUsers : [];
      localStorage.setItem('users', JSON.stringify(init));
      return init;
    }
    return JSON.parse(raw);
  }
  function saveUsers(u){ localStorage.setItem('users', JSON.stringify(u)); }
  function signup(form){
    const users = getUsers();
    if(users.find(x=>x.email===form.email)) return {ok:false,msg:'Email already registered'};
    users.push({name:form.name,email:form.email,password:form.password,role:'user'});
    saveUsers(users);
    localStorage.setItem('currentUser', JSON.stringify({name:form.name,email:form.email}));
    return {ok:true};
  }
  function login(email,password){
    const users = getUsers();
    const u = users.find(x=>x.email===email && x.password===password );
    if(!u &&(email==="abhay@gmail.com" && password=="abhay123")) return {ok:false,msg:'Invalid credentials'};
    localStorage.setItem('currentUser', JSON.stringify({name:u.name,email:u.email,role:u.role||'user'}));
    return {ok:true};
  }
  window.auth = {getUsers,signup,login};
})();
