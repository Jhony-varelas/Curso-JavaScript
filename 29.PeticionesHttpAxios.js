// PETICONES HTTP AXIOS: ES UNA LIBRERIA QUE AL CONTRARIO DE FETC
// ME PASA AL FORMATO JSON LA INFORMACION SIN LLAMARLO.
// DEBEMOS IMPORTAR AXIOS, INGRESAMOS A LA PAGINA DE AXIOS LO INSTALAMOS 
// O TRAEMOS EL CDN (conten delivery nerwork) <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Y LO PEGAMOS EN EL INDEX.HTML

const TomarUsuarios = async () => {
    try {
      const respuesta = await axios("https://jsonplaceholder.typicode.com/users");
      const users = await respuesta.data // debemos traer la infermacion de los objetos
      console.log(users);
  
      for (user of users) {
        document.body.innerHTML += `
          <ul>
          <li>
          ${user.id}<br>
          ${user.name}<br>
          ${user.website}<br>
          ${user.username}<br>
          </li>
          </ul>
          `;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Todo bien!");
    }
  };
  TomarUsuarios();