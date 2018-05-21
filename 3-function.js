function tinhtong(a,b){
    return a+b;
}
var x = tinhtong(5,3);
console.log(x);
//////////////////////////////
function hello(){
    console.log('Wellcome to KhoaPham');
}
function goiham(fn){
    fn();
}
goiham(hello);
////////////////////////////////
var tong = function(){
    console.log('lap trinh Nodejs');
}
tong();