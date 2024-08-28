var len = document.getElementById("passwordLength");
var password = document.getElementById("password");
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
function createPassword() {
    var sifre = "";
    var karakter = "1234567890*-/+qwertyuıopğüişlkjhgfdsazxcvbnmöç.;é!'^+%&/()=?_>£#$½{[]}<|QWERTYUIOPĞÜİŞLKJHGFDSAZXCVBNMÖÇ"
    var karakteruzunluk = karakter.length;

    for (var i = 0; i < len.value; i++) {
        karakter = karakter.shuffle();
        sifre += karakter.charAt(Math.floor(Math.random() * karakteruzunluk));
    }
    password.textContent = sifre;
    password.style.color = "black";
    passCopy.value = sifre;

}

