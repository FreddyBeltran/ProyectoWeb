console.log("ESTE ES UN LOG DE STORAGE:");
//console.log(window.localStorage.getItem('userName'));
//console.log(window.localStorage.getItem('logStatus'));
//////////////////////////////////////////////////////////////
//El fetch debe responder con  data.
//data.status = 200 es que si entró, 400 no entró.

////////////////////--------------------ESTE FETCH REGRESA TODOS LOS USUARIOS--------------------////////////////////
/*
const data = fetch(`http://189.159.224.247:4200/get/users`).then
(
  (response) => response.json()).then((usersData) =>
  {
    console.log(usersData);
  }
);
*/


console.log("A PARTIR DE AQUI ES EL POST");




////////////////////--------------------ESTE FETCH REGRESA SI SE LOGEO O NO--------------------////////////////////
//login { username, password }
async function postData(url, data)
{
  const response = await fetch
  (
    url,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  )
  {
    return response;
  }
}


//TIENE HARDCODEADO EL USUARIO Y CONTRASEÑA///
/*
postData(`http://189.159.224.247:4200/post/login`, {username: "userEjemplo", password: "unoDosTres"}).then
(
  (data) =>
  {
    console.log(data.status);
  }
);
*/


//username: "userEjemplo", password: "unoDosTres"
////////////////////--------------------A PARTIR DE AQUI ES PARA OBTENER ELEMENTOS Y DESPLEGAR NOTIFICACIONES--------------------////////////////////
function funcLogIn()
{
  const usernameElement = document.getElementById("usernameInputValue");
  const usernameValue = usernameElement.value;

  const passwordElement = document.getElementById("passwordInputValue");
  const passwordValue = passwordElement.value;


  postData(`http://189.159.38.136:4200/post/login`, {username: usernameValue, password: passwordValue}).then
  (
    (data) =>
    {
      console.log(data.status);

      if(data.status == "200")
      {
        window.localStorage.setItem('userNameValue', usernameValue);
        window.localStorage.setItem('logStatusValue', '200');

        alert("LOGEADO CORRECTAMENTE.");

        window.location.href = 'index.html';
      }
      else
      {
        alert("NO SE PUDO LOGEAR.");
      }
    }
  );
}



//FUNCION DISPLAY SIN LLAMAR A LA BASE DE DATOS///
/*
function displayAlert()
{
  //////////////////////////////////////////////////////
  //FALTA CAMBIAR EL VALOR DEL LOCAL STORAGE//
  /////////////////////////////////////////////////////
  const mailElement = document.getElementById("mailInputValue");
  const mailValue = mailElement.value;

  const passwordElement = document.getElementById("passwordInputValue");
  const passwordValue = passwordElement.value;

  //alert(mailValue + ', ' + passwordValue);
  //window.location.href = 'index.html';

  if(mailValue == "Carlos" && passwordValue == "unoDosTres")
  {
    alert("LOGEADO CORRECTAMENTE.");
    window.location.href = 'index.html';
  }
  else
  {
    alert("NO SE PUDO LOGEAR.");
  }
}
*/
