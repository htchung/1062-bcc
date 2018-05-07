function changeUser(index){
    var s = document.querySelector("#section h1");
    console.log(s.innerText);
    switch(index){
      case 1:
        var u = document.getElementById("u1");
        break;
      case 2:
        var u = document.getElementById("u2");
        break;
      case 3:
        var u = document.getElementById("u3");
        break;
      case 4:
        var u = document.getElementById("u4");
        break;
      case 5:
        var u = document.getElementById("u5");
        break;
      case 6:
        var u = document.getElementById("u6");
        break;
      case 7:
        var u = document.getElementById("u7");
        break;
    }
    s.innerText = u.innerText;
}
