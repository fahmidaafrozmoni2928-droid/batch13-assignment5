const fixed = () => {
   const userName = document.getElementById('username').value;
   const passWord = document.getElementById('password').value;
   const btnSign = document.getElementById('btn-signin');
   if(userName === 'admin' && passWord === 'admin123'){
    alert("login successfull");

    window.location.assign("home-page.html");
   }
   else{
    alert("wrong");
    return;
   }
}