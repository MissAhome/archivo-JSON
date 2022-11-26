// const miembro = {
//   nombre: "Cha Eun-woo",
//   nacimiento: "30/03/1997",
// };

/*
JS (objeto) a JSON
console.log(JSON.stringify(miembro));

JSON a JS (objeto)
console.log(JSON.parse(miembro));
*/

fetch("http://127.0.0.1:5500/kpop.json")
  .then((response) => response.json())
  .then((kpop) => {
    const nombresDeMiembros = kpop.miembros.map((miembro) => miembro.nombre);
    console.log(nombresDeMiembros);
  });
