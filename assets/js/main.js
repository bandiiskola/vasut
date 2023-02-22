const allomasok=['Nyugati','Zugló','Kőbánya-Kispest','Ferihegy','Vecsés','Üllő','Monor','Monorierdő','Pilis','Albertirsa','Ceglédbercel','Cegléd','Abony','Szolnok','Szajol','Törökszentmiklós','Fegyvernek-Örményes','Kisújszállás'];

function ElotteUtana(megallo){
    var p=allomasok.findIndex(item =>
        megallo.toLowerCase()==item.toLowerCase());
    var r="";
    if  (p==-1){
        r="Nincs ilyen megálló ezen a vonalon"
    }
    else{
        if(p!=0){
            r+="Előtte: "+allomasok[p-1];
            
        }
        else{
            r+="Elötte: ----"
        }

        r+="<br>"
        if(p==allomasok.length-1){
            r+="Utána: -";
        }
        else {
            r+="Utána: "+allomasok[p+1];
        }
    }
    var x=(p/(allomasok.length-1))*100
    console.log(x)
    var y;
    if(allomasok[p]==undefined)
    {
        var y=""
    }
    else
    {
        var y=allomasok[p]
    }
    document.getElementById("myProgress").style.display="inline-block"
    document.getElementById("myBar").style.display="inline-block"
    move(x,y)
    return r;
}

function Keres(){
    var anev=document.getElementById("allomasnev").value.toLowerCase();
    document.getElementById("eredmeny").innerHTML=ElotteUtana(anev);
    document.getElementById("elso").innerHTML="<div id=tabla>"+allomasok[0]+"</div>";
    document.getElementById("utolso").innerHTML="<div id=tabla>"+allomasok[allomasok.length-1]+"</div>";   
}

var i = 0;
function move(x,y) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    elem.style.width = width + "%";
    elem.innerHTML = y ;
    
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= x) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = "<img src='assets/images/vonat.png' id='kep'>";
      }
    }
  }
}