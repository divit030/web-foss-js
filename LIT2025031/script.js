
const element=document.getElementById("buttons");
const element2=document.getElementById("box");
  function greeting(){
    const body=document.body;
    const color=['#7ec924ff','#fa4f11ff'];
 body.style.backgroundColor=color[1];
  }
element.addEventListener('click',greeting);
