function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg != "string") {
        reject("Caiu no ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passe na Promise");
    }, tempo);
  });
}

const promises = [
  espera("Promise 1", rand(1, 5)),
  espera("Promise 2", rand(1, 5)),
  espera("Promise 3", rand(1, 5)),
  espera(1000, rand(1, 5)),
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em Cache");
  } else {
    return espera("Baixe a Página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

function baixaPagina2() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em Cache");
  } else {
    return espera("Baixe a Página", 3000);
  }
}

baixaPagina2()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(`ERRO ${e}`));
