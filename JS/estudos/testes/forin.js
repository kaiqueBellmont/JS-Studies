let product = {
"id" : 1,
"color" : "Blue",
"price" : 3500.00,
"stock" : 146
};
let product2 = {
    "id" : 10,
    "color" : "Red",
    "price" : 185.70,
    "stock" : 14785
    };

// até aqui tudo certo.
for(const key in product){
    console.log(key, "=", product[key]);
};

let lista = [product, product2];

for(x in lista){
    console.log(lista[x]);
    //deu certo
};

lista[0]['id'] = 100;
let lista2 = lista;

for(x in lista2){
    console.log(lista2[x]);
    //deu certo
};
