
var person = {
    ho : "Pham",
    ten: "Khoa",
    chaomung:function(){
        console.log('Chao mung'+ this.ho + "" + this.ten);
    }
}
person.chaomung();
console.log(person['ten']);