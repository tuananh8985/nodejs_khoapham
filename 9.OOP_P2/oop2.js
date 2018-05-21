
function KhoaHoc(ten,hocphi){
    this._ten =ten;
    this._hocphi = hocphi;
}
KhoaHoc.prototype.mota = function(){
    console.log("Hello"+ this._ten + "va" +this._hocphi);
}
var NodeJS = new KhoaHoc("Lap trinh NodeJS",120000);
NodeJS.mota();