const allomasok=['Nyugati','Zugló','Kőbánya-Kispest','Ferihegy','Vecsés','Üllő','Monor','Monorierdő','Pilis','Albertirsa','Ceglédbercel','Cegléd','Abony','Szolnok','Szajol','Törökszentmiklós','Fegyvernek-Örményes','Kisújszállás'];


function ElotteUtana(megallo)
{
    var p=allomasok.indexOf(megallo =>
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
    return r;
}

function Keres()
{
    var anev=document.getElementById("allomasnev").value.toLowerCase();
    document.getElementById("eredmeny").innerHTML=ElotteUtana(anev)
}