//criar a função para que o botão do projeto funcione

function ToggleMode() {
  const html = document.documentElement

  //fazer uma condição - valores de condição retornam apenas sim ou nao True or False
  //SE for verdadeiro
  //if (html.classList.contains("light")){
  //  html.classList.remove("light")
  //}//SE NÃO houver o "light"
  //else{
  // html.classList.add("light")
  //}
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")){
    //se tiver light mode, vamos colocar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk Brito usando oculos escura de jauqerta no fundo escuro e sorrindo.")
  }else {
    //se nao tiver light mode, deixar normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo.")
  }


}
