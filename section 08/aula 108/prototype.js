function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== "string") reject(new Error("ERRO"))

    setTimeout(() => {
      console.log(msg);
      resolve()
    }, tempo);
  });
}

espera("Frase 1", rand(1, 3))
.then(resposta => {
    console.log(resposta)
    return espera("Frase 2", rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return espera(222, rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.then(() => {
    console.log("Última Exibição")
})
.catch(e => {
    console.log(`ERRO: ${e}`)
})
