console.log("########## Пункт 1 ##########");
console.log("Общее количество елементов на странице");
let count_el = document.querySelectorAll('*').length
console.log("Общее количество тегов: " + count_el);
console.log("########## Пункт 2 ##########");
console.log("Количество елементов с сортировкой имени тега");
var elements = document.querySelectorAll("*");
var el=[];
for (var i=0;i<elements.length;i++) {
  el.push(elements[i].nodeName);
}
el.sort();
var result = el.reduce(function(p, c){
  if (c in p) {
     p[c]++;
  } else {
     p[c]=1;
  }
  return p;
}, {});

for (let [key, value] of Object.entries(result)) {
  console.log(key, value);
}

console.log("########## Пункт 3 ##########");
console.log("Количество елементов с сортировкой длины имени тега");
let sort_string_length = el.sort(function(a,b){
  return a.length - b.length;
});
var result2 = sort_string_length.reduce(function(p, c){
  if (c in p) {
     p[c]++;
  } else {
     p[c]=1;
  }
  return p;
}, {});

for (let [key, value] of Object.entries(result2)) {
  console.log(key, value);
}


