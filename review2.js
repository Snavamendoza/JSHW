var movies = [ 
'Avatar',
'The Notebook',
'Cinderella',
'Mrs. Doubtfire',
'Two Weeks Notice'
];
console.log(movies);
for (var i = 0; i < movies.length; i ++) {
console.log(i);
var m = movies[i];
console.log(m);
}
var movies2 = movies.map(item => {
    return item + ':Movie of the Year';
});
console.log(movies2);
var movies3 = movies.filter( item => {
    return item.length < 15;
});
console.log(movies3);
movies.forEach(item => {
console.log(item);
console.log('loop');
});
for (var i = 0; i < movies.length; i++) {
    console.log[i];
    var a = movies[i];
    console.log(a);
}