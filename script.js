function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light-eu.png")
    img.setAttribute("alt", "Foto do Pedro Felipe usando óculos de grau e fone de ouvido com uma blusa branca.")
  }else {
    img.setAttribute("src", "./assets/avatar_eu.png")
    img.setAttribute("alt", "Foto do Pedro Felipe no espelho do shopping com relógio e corrente de prata e usando uma blusa preta.")
  }
}
