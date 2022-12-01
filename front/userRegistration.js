//register { username, password, firstnames, lastnames, email }

async function registerUser(url, data)
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


/*189.159.38.136
postData(`http://89.159.38.136:4200/post/register`, {username: "userEjemplo", password: "unoDosTres", firstnames: "Carlos", lastnames: "Arroyo", email: "carlos.arroyo@ejemplo.mx"}).then
(
  (data) =>
  {
    console.log(data);
  }
);
*/






function funcRegister()
{
  const namesElement = document.getElementById("namesInputValue");
  const namesValue = namesElement.value;

  const lastNamesElement = document.getElementById("lastNamesInputValue");
  const lastNamesValue = lastNamesElement.value;

  const registerUsernameElement = document.getElementById("registerUsernameInputValue");
  const registerUsernameValue = registerUsernameElement.value;

  const registerPasswordElement = document.getElementById("registerPasswordInputValue");
  const registerPasswordValue = registerPasswordElement.value;

  const registerTwoPasswordElement = document.getElementById("registerTwoPasswordInputValue");
  const registerTwoPasswordValue = registerTwoPasswordElement.value;

  const mailInputElement = document.getElementById("mailInputValue");
  const mailInputValue = mailInputElement.value;

  console.log(namesValue);
  console.log(lastNamesValue);
  console.log(registerUsernameValue);
  console.log(registerPasswordValue);
  console.log(registerTwoPasswordValue);
  console.log(mailInputValue);

  if(registerPasswordValue !== registerTwoPasswordValue)
  {
    alert("LAS CONTRASEÑAS NO COINCIDEN.");
  }
  else
  {
    registerUser(`http://189.159.38.136:4200/post/register`, {username: registerUsernameValue, password: registerPasswordValue, firstnames: namesValue, lastnames: lastNamesValue, email: mailInputValue}).then
    (
      (data) =>
      {
        console.log("ESTO ES UN MENSJAE");
        console.log(data);

        if(data.status == "200")
        {
          alert("SE HA CREADO LA CUENTA CORRECTAMENTE CORRECTAMENTE.");

          window.location.href = 'index.html';
        }
        else
        {
          alert("NO SE PUDO CREAR LA CUENTA");
        }
      
      }
    );
  }
}
