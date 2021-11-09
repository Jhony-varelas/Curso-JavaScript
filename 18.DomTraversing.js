//DOM TRAVERSING: ES LA MANERA EN LA QUE NOS MOVEMOS ENTRE ETIQUETAS

//TIPOS DE NODOS:
//1. ELEMENTOS -> SON LOS H1 , H2
//2. ATRIBUTOS -> SON LOS ID, CLASS, HREF, LO QUE PONEMOS A LAS ETIQUETAS
//3. NODOS DE TEXTOS -> SON LOS TEXTOS QUE METEMOS A LAS ETIQUETAS
//8. COMENTARIOS
//9. DOCUMENTOS
//10.DOCTYPE

const lista=document.querySelector("#lista")

//hijos de la lista
console.log(lista.children)

//DOM TRAVERSING( de hijos a padres)
//usamos el parentElemen  ( el elemento padre de algo) el padre es body
console.log(lista.parentElement.parentElement)


//DOM TRAVERSING (entre hermanos) somos hermanos por que estamos dentro de body
console.log(lista.previousSibling)
console.log(lista.nextSibling)




