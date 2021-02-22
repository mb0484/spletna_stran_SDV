var expandCollapse = function(){
    console.log(window.innerWidth);
        if ( window.innerWidth < 768 ) {
            if (document.getElementById("naslovnicaDodatek") != null)
                document.getElementById("naslovnicaDodatek").className = " collapse";

            if (document.getElementById("naslovnicaDodatek2") != null)
                document.getElementById("naslovnicaDodatek2").className = " collapse";
            
            if (document.getElementById("navigacija") != null)
                document.getElementById("navigacija").style = "display: none;"

            if (document.getElementById("navigacija_telefon") != null) {
                document.getElementById("navigacija_telefon").className = "uk-navbar-right menu";
                document.getElementById("navigacija_telefon").style = ""
            }

            if (document.getElementById("zadnje_slike") != null)
                document.getElementById("zadnje_slike").className = " collapse";

            if (document.getElementById("glavna_novica") != null)
                document.getElementById("glavna_novica").className = "uk-width-1-1";

            if (document.getElementById("novice_text") != null)
                document.getElementById("novice_text").style = "font-size:3vw;";

            if (document.getElementsByClassName('novice_stran') != null) {
                const besedilaNovic = document.getElementsByClassName('novice_stran');
                for (i = 0; i < besedilaNovic.length; i++) {
                  besedilaNovic[i].style = "font-size:3vw;";
                }
            }

            if ( window.innerWidth < 319 ) {
                if (document.getElementsByClassName('koledar_dnevi') != null) {
                    const koledarDnevi = document.getElementsByClassName('koledar_dnevi');
                    for (i = 0; i < koledarDnevi.length; i++) {
                      koledarDnevi[i].style = "font-size:0.8vw;";
                    }
                }
            }
            else if (document.getElementsByClassName('koledar_dnevi') != null) {
                const koledarDnevi = document.getElementsByClassName('koledar_dnevi');
                for (i = 0; i < koledarDnevi.length; i++) {
                  koledarDnevi[i].style = "font-size:1vw;";
                }
            }

            if (document.getElementById("koledar_card_view") != null)
                document.getElementById("koledar_card_view").className = "uk-card uk-card-default uk-card-body uk-margin-medium-right uk-margin-medium-bottom uk-margin-medium-left uk-margin-medium-top";
        }
        else if ( window.innerWidth < 1000 ) {
            if (document.getElementById("naslovnicaDodatek") != null)
                document.getElementById("naslovnicaDodatek").className = " collapse";

            if (document.getElementById("naslovnicaDodatek2") != null)
                document.getElementById("naslovnicaDodatek2").className = " collapse";

            if (document.getElementById("navigacija") != null)
                document.getElementById("navigacija").style = "display: none;"

            if (document.getElementById("navigacija_telefon") != null) {
                document.getElementById("navigacija_telefon").className = "uk-navbar-right menu";
                document.getElementById("navigacija_telefon").style = ""
            }

            if (document.getElementById("zadnje_slike") != null)
                document.getElementById("zadnje_slike").className = " collapse";

            if (document.getElementById("glavna_novica") != null)
                document.getElementById("glavna_novica").className = "uk-width-1-1";

            if (document.getElementById("novice_text") != null)
                document.getElementById("novice_text").style = "font-size:2vw;";

            if (document.getElementsByClassName('novice_stran') != null) {
                const besedilaNovic = document.getElementsByClassName('novice_stran');
                for (i = 0; i < besedilaNovic.length; i++) {
                  besedilaNovic[i].style = "font-size:1.5vw;";
                }
            }

            if (document.getElementsByClassName('koledar_dnevi') != null) {
                const koledarDnevi = document.getElementsByClassName('koledar_dnevi');
                for (i = 0; i < koledarDnevi.length; i++) {
                  koledarDnevi[i].style = "font-size:1.4vw;";
                }
            }

            if (document.getElementById("koledar_card_view") != null)
                document.getElementById("koledar_card_view").className = "uk-card uk-card-default uk-card-body uk-margin-medium-right uk-margin-medium-bottom uk-margin-medium-left uk-margin-medium-top";
        }
        else if (window.innerWidth < 1500) {
            if (document.getElementById("naslovnicaDodatek") != null)
                document.getElementById("naslovnicaDodatek").className = " showHide uk-overlay uk-overlay-primary uk-position-left uk-text-center uk-transition-slide-left uk-width-large";

            if (document.getElementById("naslovnicaDodatek2") != null)
                document.getElementById("naslovnicaDodatek2").className = "uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium";

            if (document.getElementById("navigacija") != null) {
                document.getElementById("navigacija").className = "uk-navbar-right menu";
                document.getElementById("navigacija").style = ""
            }

            if (document.getElementById("navigacija_telefon") != null)
                document.getElementById("navigacija_telefon").style = "display: none;"

            if (document.getElementById("zadnje_slike") != null)
                document.getElementById("zadnje_slike").className = "uk-width-1-4 uk-margin-xlarge-top uk-margin-medium-bottom uk-margin-remove-right";

            if (document.getElementById("glavna_novica") != null)
                document.getElementById("glavna_novica").className = "uk-width-3-4";

            if (document.getElementById("novice_text") != null)
                document.getElementById("novice_text").style = "font-size:1.5vw;";

            if (document.getElementsByClassName('novice_stran') != null) {
                const besedilaNovic = document.getElementsByClassName('novice_stran');
                for (i = 0; i < besedilaNovic.length; i++) {
                  besedilaNovic[i].style = "font-size:1vw;";
                }
            }

            if (document.getElementsByClassName('koledar_dnevi') != null) {
                const koledarDnevi = document.getElementsByClassName('koledar_dnevi');
                for (i = 0; i < koledarDnevi.length; i++) {
                  koledarDnevi[i].style = "font-size:0.68vw;";
                }
            }

            if (document.getElementById("koledar_card_view") != null)
                document.getElementById("koledar_card_view").className = "uk-card uk-card-default uk-card-body uk-margin-large-right uk-margin-large-bottom uk-margin-large-left uk-margin-large-top";
        }
        else {
            // remove a class .collapse from a div .showHide
            if (document.getElementById("naslovnicaDodatek") != null)
                document.getElementById("naslovnicaDodatek").className = " showHide uk-overlay uk-overlay-primary uk-position-left uk-text-center uk-transition-slide-left uk-width-large";

            if (document.getElementById("naslovnicaDodatek2") != null)
                document.getElementById("naslovnicaDodatek2").className = "uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium";

            if (document.getElementById("navigacija") != null) {
                document.getElementById("navigacija").className = "uk-navbar-right menu";
                document.getElementById("navigacija").style = ""
            }

            if (document.getElementById("navigacija_telefon") != null)
                document.getElementById("navigacija_telefon").style = "display: none;"

            if (document.getElementById("zadnje_slike") != null)
                document.getElementById("zadnje_slike").className = "uk-width-1-4 uk-margin-xlarge-top uk-margin-medium-bottom uk-margin-remove-right";

            if (document.getElementById("glavna_novica") != null)
                document.getElementById("glavna_novica").className = "uk-width-3-4";

            if (document.getElementById("novice_text") != null)
                document.getElementById("novice_text").style = "font-size:1vw;";

            if (document.getElementsByClassName('novice_stran') != null) {
                const besedilaNovic = document.getElementsByClassName('novice_stran');
                for (i = 0; i < besedilaNovic.length; i++) {
                  besedilaNovic[i].style = "font-size:0.8vw;";
                }
            }

            if (document.getElementsByClassName('koledar_dnevi') != null) {
                const koledarDnevi = document.getElementsByClassName('koledar_dnevi');
                for (i = 0; i < koledarDnevi.length; i++) {
                  koledarDnevi[i].style = "font-size:0.68vw;";
                }
            }

            if (document.getElementById("koledar_card_view") != null)
                document.getElementById("koledar_card_view").className = "uk-card uk-card-default uk-card-body uk-margin-large-right uk-margin-large-bottom uk-margin-large-left uk-margin-large-top";
        }
        izdelajKoledar();
}

window.onload = expandCollapse;

var izracunajDan = function(dd, mm, yyyy) {
    var prejLeto = false;
    if (mm == 1 || mm == 2) {
        prejLeto = true;
    }
    var mesec = (mm + 9) % 12 + 1;
    //console.log(mesec);
    var D = yyyy % 100;
    if (prejLeto)
        D -= 1;
    var C = Math.floor(yyyy / 100);

    var prviNavzdolZaokrozenDel = Math.floor((13 * mesec - 1)/5);
    var drugiNavzdolZaokrozenDel = Math.floor(D / 4);
    var tretjiNavzdolZaokrozenDel = Math.floor(C / 4);

    var dan = dd + prviNavzdolZaokrozenDel + D + drugiNavzdolZaokrozenDel + tretjiNavzdolZaokrozenDel - 2 * C;
    dan = dan % 7;
    if (dan < 0) {
        dan += 7;
    }

    return dan;
}

var stDnevovVMesecu = function(mesec, leto) {
    var stDnevov = 0;
    if (mesec == 4 || mesec == 6 || mesec == 9 || mesec == 11)  
        stDnevov = 30;  
    else if (mesec == 2)  { 
        var jePrestopno = (leto % 4 == 0 && leto % 100 != 0) || (leto % 400 == 0);  
        if (jePrestopno)  
            stDnevov = 29;  
        else  
            stDnevov = 28;  
    }  
    else  
        stDnevov = 31;
    return stDnevov;
}

var nastaviDanId = function(dan) {
    var danZacKoledar = "pon";
    switch(dan) {
            case 0:
                danZacKoledar = "ned";
                break;
            case 1:
                danZacKoledar = "pon";
                break;
            case 2:
                danZacKoledar = "tor";
                break;
            case 3:
                danZacKoledar = "sre";
                break;
            case 4:
                danZacKoledar = "cet";
                break;
            case 5:
                danZacKoledar = "pet";
                break;
            case 6:                
                danZacKoledar = "sob";
                break;
        }

    return danZacKoledar;
}

var nastaviMesec = function(mesec) {
    if (document.getElementById("koledar_mesec") != null) {
        switch(mesec) {
            case 1:
                document.getElementById("koledar_mesec").innerHTML = "Januar";
                break;
            case 2:
                document.getElementById("koledar_mesec").innerHTML = "Februar";
                break;
            case 3:
                document.getElementById("koledar_mesec").innerHTML = "Marec";
                break;
            case 4:
                document.getElementById("koledar_mesec").innerHTML = "April";
                break;
            case 5:
                document.getElementById("koledar_mesec").innerHTML = "Maj";
                break;
            case 6:
                document.getElementById("koledar_mesec").innerHTML = "Junij";
                break;
            case 7:
                document.getElementById("koledar_mesec").innerHTML = "Julij";
                break;
            case 8:
                document.getElementById("koledar_mesec").innerHTML = "Avgust";
                break;
            case 9:
                document.getElementById("koledar_mesec").innerHTML = "September";
                break;
            case 10:
                document.getElementById("koledar_mesec").innerHTML = "Oktober";
                break;
            case 11:
                document.getElementById("koledar_mesec").innerHTML = "November";
                break;
            case 12:
                document.getElementById("koledar_mesec").innerHTML = "December";
                break;        
        }
    }
}

var nastaviDatum = function(dd, mm, yyyy) {
    if (document.getElementById("koledar_datum") != null) {
        switch(mm) {
            case 1:
                document.getElementById("koledar_datum").innerHTML = dd + ". Januar " + yyyy;
                break;
            case 2:
                document.getElementById("koledar_datum").innerHTML = dd + ". Februar " + yyyy;
                break;
            case 3:
                document.getElementById("koledar_datum").innerHTML = dd + ". Marec " + yyyy;
                break;
            case 4:
                document.getElementById("koledar_datum").innerHTML = dd + ". April " + yyyy;
                break;
            case 5:
                document.getElementById("koledar_datum").innerHTML = dd + ". Maj " + yyyy;
                break;
            case 6:
                document.getElementById("koledar_datum").innerHTML = dd + ". Junij " + yyyy;
                break;
            case 7:
                document.getElementById("koledar_datum").innerHTML = dd + ". Julij " + yyyy;
                break;
            case 8:
                document.getElementById("koledar_datum").innerHTML = dd + ". Avgust " + yyyy;
                break;
            case 9:
                document.getElementById("koledar_datum").innerHTML = dd + ". September " + yyyy;
                break;
            case 10:
                document.getElementById("koledar_datum").innerHTML = dd + ". Oktober " + yyyy;
                break;
            case 11:
                document.getElementById("koledar_datum").innerHTML = dd + ". November " + yyyy;
                break;
            case 12:
                document.getElementById("koledar_datum").innerHTML = dd + ". December " + yyyy;
                break;        
        }
    }
}

var nastaviDan = function(id) {
    //console.log(id.substring(1));
    var dan = id.substring(1);
    if (document.getElementById("koledar_dan") != null) {
        if (dan == "pon") {
            document.getElementById("koledar_dan").innerHTML = "ponedeljek";
        }
        else if (dan == "tor") {
            document.getElementById("koledar_dan").innerHTML = "torek";
        }
        else if (dan == "sre") {
            document.getElementById("koledar_dan").innerHTML = "sreda";
        }
        else if (dan == "cet") {
            document.getElementById("koledar_dan").innerHTML = "četrtek";
        }
        else if (dan == "pet") {
            document.getElementById("koledar_dan").innerHTML = "petek";
        }
        else if (dan == "sob") {
            document.getElementById("koledar_dan").innerHTML = "sobota";
        }
        else if (dan == "ned") {
            document.getElementById("koledar_dan").innerHTML = "nedelja";
        }
    }
}

var curDatum = "112018";
var enkratSpremeni = true;
var dd = 1;
var mm = 1;
var yyyy = 2018;
var idPrej = "";
var classPrej = "";
var preslikovalnaZaDneve = new Map();
var dogodkiVDomu = new Map();

var izdelajKoledar = function() {
    var today = new Date();
    dd = today.getDate();
    mm = today.getMonth()+1;
    yyyy = today.getFullYear();
    curDatum = "" + dd + mm + yyyy;
    enkratSpremeni = true;
    dogodkiVDomu = new Map();
    dodajDogodekVDomu("18-10-2018", "Srečanje skupine za rast");
    dodajDogodekVDomu("31-10-2018", "Srečanje mladih v domu");
    dodajDogodekVDomu("18-10-2018", "Maša v domski cerkvi");
    dodajDogodekVDomu("30-10-2018", "Še zadnji dan pred prazniki :)");
    dodajDogodekVDomu("1-11-2018", "Dan spomina na mrtve");
    dodajDogodekVDomu("31-12-2018", "Proba");
    pobrisiPrikazDogodkov();
    if (dogodkiVDomu.get(dd + "-" + mm + "-" + yyyy) != null) {
        prikaziDogodek(dogodkiVDomu.get(dd + "-" + mm + "-" + yyyy));
    }

    spremeniKoledar();
}


var spremeniKoledar = function() {

    //mm = 10;
    //yyyy = 2019;

    //console.log("funkcija se izvede");
    //pobrisiPrikazDogodkov();

    nastaviMesec(mm);

    if (enkratSpremeni) {

        nastaviDatum(dd, mm, yyyy);
        //enkratSpremeni = false;
    }

    var dan = izracunajDan(dd, mm, yyyy);

    if (enkratSpremeni) {
        if (document.getElementById("koledar_dan") != null) {
            switch(dan) {
                case 0:
                    document.getElementById("koledar_dan").innerHTML = "nedelja";
                    danKoledar = "ned";
                    break;
                case 1:
                    document.getElementById("koledar_dan").innerHTML = "ponedeljek";
                    danKoledar = "pon";
                    break;
                case 2:
                    document.getElementById("koledar_dan").innerHTML = "torek";
                    danKoledar = "tor";
                    break;
                case 3:
                    document.getElementById("koledar_dan").innerHTML = "sreda";
                    danKoledar = "sre";
                    break;
                case 4:
                    document.getElementById("koledar_dan").innerHTML = "četrtek";
                    danKoledar = "cet";
                    break;
                case 5:
                    document.getElementById("koledar_dan").innerHTML = "petek";
                    danKoledar = "pet";
                    break;
                case 6:
                    document.getElementById("koledar_dan").innerHTML = "sobota";
                    danKoledar = "sob";
                    break;
            }
        }
        enkratSpremeni = false;
    }

    //NAPOLNI KOLEDAR DNEVE

    var stRowKoledar = 1;

    var danStKoledar = izracunajDan(1, mm, yyyy);
    var povecaj = false;
    if (danStKoledar == 0)
        povecaj = true;


    //PREJSNJI DNEVI
    var prevMesec = mm - 1;
    var prevLeto = yyyy;
    if (prevMesec == 0) {
        prevMesec = 12;
        prevLeto--;
    }

    console.log(stDnevovVMesecu(prevMesec, prevLeto));
    var danPrevMonth = stDnevovVMesecu(prevMesec, prevLeto);

    var danStKoledarZaPrej = (danStKoledar + 7) % 8;
    for (var i = danStKoledarZaPrej; i > 0; --i) {
        var danKoledar = nastaviDanId(i);
        //console.log(danKoledar);

        var id = "" + stRowKoledar + danKoledar;
        //console.log(id);
        if (document.getElementById(id + "") != null) {
            document.getElementById(id + "").innerHTML = danPrevMonth;
            preslikovalnaZaDneve.set(id + "", danPrevMonth);
            preslikovalnaZaDneve.set(id + "mesec", prevMesec);
            document.getElementById(id + "").className = "prev-month koledar_dnevi";
            if (dogodkiVDomu.get(danPrevMonth + "-" + prevMesec + "-" + prevLeto) != null) {
                document.getElementById(id + "").className = "event prev-month koledar_dnevi";
            }
        }

        danPrevMonth--;
    }


    //ZDEJSNJI DNEVI
    for (var i = 1; i <= stDnevovVMesecu(mm, yyyy); ++i) {
        var danKoledar = nastaviDanId(danStKoledar);

        var id = "" + stRowKoledar + danKoledar;
        //console.log(id);
        if (document.getElementById(id + "") != null) {
            document.getElementById(id + "").innerHTML = i;
            preslikovalnaZaDneve.set(id + "", i);
            preslikovalnaZaDneve.set(id + "mesec", mm);
            document.getElementById(id + "").className = "koledar_dnevi";
            if (i == dd && ("" + dd + mm + yyyy) == curDatum) {
                document.getElementById(id + "").className = "current-day event koledar_dnevi";
            } else if (dogodkiVDomu.get(i + "-" + mm + "-" + yyyy) != null) {
                document.getElementById(id + "").className = "event koledar_dnevi";
            }
        }

        if (povecaj) {
            stRowKoledar++;
            povecaj = false;
        }
        danStKoledar++;
        if (danStKoledar > 6) {
            danStKoledar = 0;
            povecaj = true;
        }
    }

    var naslMesec = mm + 1;
    var naslLeto = yyyy;
    if (naslMesec > 12) {
        naslMesec = 1;
        naslLeto += 1;
    }
    //NASLEDNJI DNEVI
    var i = 1;
    while (stRowKoledar <= 6 || danStKoledar < 7) {
        var danKoledar = nastaviDanId(danStKoledar);

        var id = "" + stRowKoledar + danKoledar;
        //console.log(id);
        if (document.getElementById(id + "") != null) {
            document.getElementById(id + "").innerHTML = i;
            preslikovalnaZaDneve.set(id + "", i);
            preslikovalnaZaDneve.set(id + "mesec", naslMesec);
            document.getElementById(id + "").className = "next-month koledar_dnevi";
            if (dogodkiVDomu.get(i + "-" + naslMesec + "-" + naslLeto) != null) {
                document.getElementById(id + "").className = "event prev-month koledar_dnevi";
            }
        }

        if (povecaj) {
            stRowKoledar++;
            povecaj = false;
        }
        danStKoledar++;
        if (stRowKoledar > 6) {
            break;
        }
        if (danStKoledar > 6) {
            danStKoledar = 0;
            povecaj = true;
        }
        i++;
    }

    //console.log(parseInt(document.getElementById("2sre").innerHTML) + 1);

}

var spremeniCurDan = function(id) {
    //console.log(id);
    pobrisiPrikazDogodkov();
    var dan = preslikovalnaZaDneve.get(id + "");
    var mesec = preslikovalnaZaDneve.get(id + "mesec");
    nastaviDan(id);

    var leto = yyyy;
    if (mm == 1 && mesec == 12) {
        nastaviDatum(dan, mesec, yyyy - 1);
        leto -= 1;
    }
    else if (mm == 12 && mesec == 1) {
        nastaviDatum(dan, mesec, yyyy + 1);
        leto += 1;
    }
    else {
        nastaviDatum(dan, mesec, yyyy);
    }

    if (dogodkiVDomu.get(dan + "-" + mesec + "-" + leto) != null) {
        prikaziDogodek(dogodkiVDomu.get(dan + "-" + mesec + "-" + leto));
    }

    if (document.getElementById(idPrej) != null) {
        document.getElementById(idPrej).className = classPrej;
    }

    var curClass = document.getElementById(id + "").className;
    idPrej = id + "";
    classPrej = curClass;
    document.getElementById(id + "").className = "clicked_koledar " + curClass;
}

var spremeniMesecNaprej = function() {
    mm += 1;
    if (mm > 12) {
        mm = 1;
        yyyy += 1;
    }
    spremeniKoledar();
}

var spremeniMesecNazaj = function() {
    mm -= 1;
    if (mm < 1) {
        mm = 12;
        yyyy -= 1;
    }
    spremeniKoledar();
}

//datum oblike "dd-mm-yyyy"
var dodajDogodekVDomu = function(datum, dogodek) {
    var doZdejDogodki = dogodkiVDomu.get(datum, dogodek);
    var dodaj = '<p style="font-size:1.2vw;" class="koledar_dogodki uk-text-left uk-margin-large-left">- ' + dogodek + '</p>';
    if (doZdejDogodki != null)
        dodaj = "" + doZdejDogodki + dodaj;
    dogodkiVDomu.set(datum, dodaj);
}

var prikaziDogodek = function(dogodek) {
    if (document.getElementById("dogodki") != null) {
        var dogodkiDoZdej = document.getElementById("dogodki").innerHTML;
        document.getElementById("dogodki").innerHTML = "" + dogodkiDoZdej + dogodek;
    }
}

var pobrisiPrikazDogodkov = function() {
    if (document.getElementById("dogodki") != null) {
        document.getElementById("dogodki").innerHTML = "";
    }
}

window.onresize = expandCollapse;
window.onload = expandCollapse;

var stSlik = 1
var spremenilKaksnoSliko = false

//window.onload = izdelajKoledar;

//upload image
function addEventListnerForImages() {
    for (let i = 1; i <= stSlik; ++i) {
        window.addEventListener('load', convertImageToBlobOnEvent(i + ''));
    }
}

function convertImageToBlobOnEvent(indexImage) {
    console.log("add listener for", indexImage)
    if (document.querySelector('#image' + indexImage + 'Input')) {
        document.querySelector('#image' + indexImage + 'Input').addEventListener('change', function() {
            spremenilKaksnoSliko = true
            if (this.files && this.files[0]) {
                var img = document.querySelector('#image' + indexImage + 'ForUpload');
                img.onload = () => {
                    URL.revokeObjectURL(img.src);  // no longer needed, free memory
                }
    
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url

                var curIndex = parseInt(indexImage) - 1

                convertImageToBlob(img.src, curIndex)
            }
        });
    }
}

function loadXHR(url) {

    return new Promise(function(resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onerror = function() {reject("Network error.")};
            xhr.onload = function() {
                if (xhr.status === 200) {resolve(xhr.response)}
                else {reject("Loading error:" + xhr.statusText)}
            };
            xhr.send();
        }
        catch(err) {reject(err.message)}
    });
}

var imageBlob = null

var otherImageBlobs = []

function removeLastImage() {
    if (stSlik > 1) {

        otherImageBlobs.pop()

        document.getElementById('slike' + stSlik + 'Inputs').innerHTML = ""

        stSlik -= 1
    }
}

function convertImageToBlob(url_to_image, index) {
   loadXHR(url_to_image).then(function(blob) {
        if (index == 0) {
            imageBlob = blob
        }
        if (index < otherImageBlobs.length) {
            otherImageBlobs[index] = blob
        } else {
            otherImageBlobs.push(blob)
        }
    });
    return null
}

var othrBase64dataImages = []

function convertImagesToBase64(curBlobImageIndex, callBack) {
    let blob = otherImageBlobs[curBlobImageIndex]
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result.split(',')[1];
        othrBase64dataImages.push(base64data)

        if (othrBase64dataImages.length == otherImageBlobs.length) {
            callBack()
        } else {
            convertImagesToBase64(curBlobImageIndex + 1, callBack)
        }
    }
}

function izbrisiClanek(indexIfEdit) {
    const password = document.querySelector('#pass').value

    $.ajax({
        url: '/' + indexIfEdit + '/delete',
        type: 'POST',
        data: {
            password: password
        },
        success: function () {
            window.location.href = '/';
            alert("Članek je bil uspešno izbrisan")
        },
        error: function() {
            alert("Žal ste vnesli napačno geslo")
        }
    });
}

var vProcesuShranjevanja = false

function resizeBase64Img(base64, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");
    var deferred = $.Deferred();
    $("<img/>").attr("src", "data:image/gif;base64," + base64).load(function() {
        context.scale(width/this.width,  height/this.height);
        context.drawImage(this, 0, 0); 
        deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));               
    });
    return deferred.promise();    
}

function uploadClanek(indexIfEdit) {
    console.log("uppload clanek")
    if (vProcesuShranjevanja) {
        return
    }
    vProcesuShranjevanja = true
    const title = document.querySelector('#title').value
    const subtitle = document.querySelector('#subtitle').value
    const vsebina = document.querySelector('#vsebina').value
    const povzetek = document.querySelector('#povzetek').value
    const password = document.querySelector('#pass').value
    const mainImg = document.querySelector('#image1ForUpload')

    const maxWidth = 300
    const faktorZmanjsevanja = mainImg.width / maxWidth
    
    othrBase64dataImages = []

    if (imageBlob != null && title != "" && subtitle != "" && vsebina != "" && povzetek != "" && password != "") {
        convertImagesToBase64(0, function() {
            var readerMainImage = new FileReader();
            readerMainImage.readAsDataURL(imageBlob); 
            readerMainImage.onloadend = function() {
                var base64dataMainImage = readerMainImage.result.split(',')[1];
                resizeBase64Img(base64dataMainImage, mainImg.width / faktorZmanjsevanja, mainImg.height / faktorZmanjsevanja).then(resizedBase64dataMainImage=>{
                    const resizedImageBase64 = resizedBase64dataMainImage[0].src.substr(22)

                    if (indexIfEdit == '-1') {
                        $.ajax({
                            url: 'create',
                            type: 'POST',
                            data: {
                                title: title,
                                subtitle: subtitle,
                                vsebina: vsebina,
                                povzetek: povzetek,
                                image1: base64dataMainImage,
                                image1Smaller: resizedImageBase64,
                                othr_images: othrBase64dataImages,
                                password: password
                            },
                            success: function () {
                                window.location.href = '/';
                                alert("Članek je bil uspešno objavljen")
                                vProcesuShranjevanja = false
                            },
                            error: function() {
                                alert("Žal ste vnesli napačno geslo")
                                vProcesuShranjevanja = false
                            }
                        });
                    } else {
                        var changedImages = 'false'
                        if (spremenilKaksnoSliko) {
                            changedImages = 'true'
                        }

                        $.ajax({
                            url: '/' + indexIfEdit + '/edit?changed_images=' + changedImages,
                            type: 'POST',
                            data: {
                                title: title,
                                subtitle: subtitle,
                                vsebina: vsebina,
                                povzetek: povzetek,
                                image1: base64dataMainImage,
                                image1Smaller: resizedImageBase64,
                                othr_images: othrBase64dataImages,
                                password: password
                            },
                            success: function () {
                                window.location.href = '/' + indexIfEdit;
                                alert("Članek je bil uspešno posodobljen")
                                vProcesuShranjevanja = false
                            },
                            error: function() {
                                alert("Žal ste vnesli napačno geslo")
                                vProcesuShranjevanja = false
                            }
                        });
                    }
                });
            }
        })
    } else {
        vProcesuShranjevanja = false
        var whatIsObligatory = ""
        if (title == "") {
            whatIsObligatory += "Naslov članka je obvezen. "
        }
        if (subtitle == "") {
            whatIsObligatory += "Podnaslov članka je obvezen. "
        }
        if (vsebina == "") {
            whatIsObligatory += "Vsebina članka je obvezna. "
        }
        if (povzetek == "") {
            whatIsObligatory += "Povzetek članka je obvezen. "
        }
        if (imageBlob == null) {
            whatIsObligatory += "Glavna slika članka je obvezna. "
        } 
        if (password == null) {
            whatIsObligatory += "Prosimo vnesite geslo. "
        }
        alert(whatIsObligatory)
    }
}

function uploadAnotherImage() {
    var index = (stSlik + 1) + ''

    imageSrcs = []

    var html = `<label for="content">Dodatna slika</label>
                <input id="image${index}Input" type='file' name="image"></input>

                <br><img id="image${index}ForUpload" src="#" style="width:30%"/>`

    document.getElementById('slike' + index + 'Inputs').innerHTML = html

    stSlik += 1

    addEventListnerForImages();
}

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    return new Blob(byteArrays, {type: contentType});
}

function readBase64(base64Image) {   
    const contentType = 'image/png';
    
    const blob = b64toBlob(base64Image, contentType);
    const blobUrl = URL.createObjectURL(blob);

    document.querySelector("#naslovnaSlika").src = blobUrl

}

function makeNavigationLinkActive(whichLink) {
    if (document.getElementById(whichLink + '1')) {
        document.getElementById(whichLink + '1').classList.add('uk-active')
    }
    if (document.getElementById(whichLink + '2')) {
        document.getElementById(whichLink + '2').classList.add('uk-active')
    }

    if (whichLink == 'novice_page') {
        document.getElementById('slikaNaslovPodstrani').style = ""
        document.getElementById('podstranText').innerHTML = "NOVICE"
    } else if (whichLink == 'koledar_page') {
        document.getElementById('slikaNaslovPodstrani').style = ""
        document.getElementById('podstranText').innerHTML = "KOLEDAR"
    } else if (whichLink == 'skupine_page') {
        document.getElementById('slikaNaslovPodstrani').style = ""
        document.getElementById('podstranText').innerHTML = "SKUPINE"
    } 
    else {
        document.getElementById('slikaNaslovPodstrani').style = "display: none;"
        document.getElementById('podstranText').innerHTML = ""
    }

}

function addZadnjiClanek(base64Image, povzetek, clanekId) {
    const contentType = 'image/png';
    
    const blob = b64toBlob(base64Image, contentType);
    const blobUrl = window.URL.createObjectURL(blob);

    html = `<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="uk-card uk-card-hover uk-card-body text-center">
                    <div class="div_for_clanki_slika">
                        <img class="fit" src="${blobUrl}" alt="">
                    </div>
                    
                    <div style="height:130px">
                        <p style="font-size:1vw;" class="novice_stran uk-text-small clanek_text">
                            ${povzetek}
                        </p>
                    </div>

                    <a href="/${clanekId}" class="uk-button uk-button-danger uk-button-small"><p class="clanek_text uk-margin-remove">Preberi več</p></a>
                </div>
            </div>`

    document.getElementById('zadnjiClanki').innerHTML += html
}

function addBase64ImageNaslovnica(base64Image, indexSlike, stAllImages) {
    const contentType = 'image/png';
    
    const blob = b64toBlob(base64Image, contentType);
    const blobUrl = window.URL.createObjectURL(blob);

    html = `<div class="col-12 col-lg-4 col-md-6 col-sm-12 col-xs-12 column imagesForLightbox">
                <div class="uk-inline uk-margin-small-left uk-margin-medium-bottom text-center">
                    <img src="${blobUrl}" onclick="openModal('1');currentSlide(${(parseInt(indexSlike) + 1)}, '1')" class="hover-shadow">
                    <!--<canvas width="600" height="400"></canvas>-->
                </div>
            </div>`

    html2 = `<div class="mySlides1">
                <div class="numbertext">${(parseInt(indexSlike) + 1)} / ${stAllImages}</div>
                <img src="${blobUrl}" style="width:100%">
            </div>`

    
    document.getElementById('articleImages').innerHTML += html
    document.getElementById('modelLightboxImages').innerHTML += html2
}

function addBase64ImageForEdit(base64Image, indexSlike, stAllImages) {
    const contentType = 'image/png';
    
    const blob = b64toBlob(base64Image, contentType);
    const blobUrl = window.URL.createObjectURL(blob);

    convertImageToBlob(blobUrl, parseInt(indexSlike))

    var index = (parseInt(indexSlike) + 1) + ''

    stSlik = parseInt(indexSlike) + 1

    var html = `<label for="content">Dodatna slika</label>
                <input id="image${index}Input" type='file' name="image"></input>

                <br><img id="image${index}ForUpload" src="${blobUrl}" style="width:30%"/>`

    document.getElementById('slike' + index + 'Inputs').innerHTML += html

    addEventListnerForImages();
}

function addBase64Image(base64Image, index, whichModal, stAllImages) {
    const contentType = 'image/png';
    
    const blob = b64toBlob(base64Image, contentType);
    const blobUrl = window.URL.createObjectURL(blob);

    if (whichModal == '1') {
        html = `<div class="column imagesForLightbox">
                    <img src="${blobUrl}" onclick="openModal(${whichModal});currentSlide(${(parseInt(index) + 1)}, ${whichModal})" class="hover-shadow">
                </div>`
    }
    else {
        html = `<div class="uk-inline uk-margin-medium-left uk-margin-medium-right uk-margin-medium-top uk-margin-large-bottom lastImagesForLightbox">
                    <img src="${blobUrl}" onclick="openModal(${whichModal});currentSlide(1, ${whichModal})" class="hover-shadow">
                </div>`
    }

    html2 = `<div class="mySlides${whichModal}">
                <div class="numbertext">${(parseInt(index) + 1)} / ${stAllImages}</div>
                <img src="${blobUrl}" style="width:100%">
            </div>`

    
    if (whichModal == '1') {
        document.getElementById('articleImages').innerHTML += html
        document.getElementById('modelLightboxImages').innerHTML += html2
    } else {
        document.getElementById('lastImages').innerHTML += html
        document.getElementById('modelLightboxLastImages').innerHTML += html2
    }
}

function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex 
        < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

// modal from net: https://www.w3schools.com/howto/howto_js_lightbox.asp

// Open the Modal
function openModal(which) {
    document.getElementById("myModal" + which).style.display = "block";
  }
  
  // Close the Modal
  function closeModal(which) {
    document.getElementById("myModal" + which).style.display = "none";
  }
  
  var slides1Index = 1;
  var slides2Index = 1;
  showSlides(slides1Index, '1');
  showSlides(slides2Index, '2');
  
  // Next/previous controls
  function plusSlides(n, which) {
    var slideIndex = slides1Index
    if (which == '2') {
        slideIndex = slides2Index
        slides2Index += n
    } else {
        slides1Index += n
    }
    showSlides(slideIndex += n, which);
  }
  
  // Thumbnail image controls
  function currentSlide(n, which) {
    var slideIndex = slides1Index
    if (which == '2') {
        slideIndex = slides2Index
        slides2Index = n
    } else {
        slides1Index = n
    }
    showSlides(slideIndex = n, which);
  }
  
  function showSlides(n, which) {
    var i;
    var slides = document.getElementsByClassName("mySlides" + which);

    //var dots = document.getElementsByClassName("demo" + which);
    //var captionText = document.getElementById("caption" + which);

    var slideIndex = slides1Index
    if (which == '2') {
        slideIndex = slides2Index
    }

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }

    if (which == '1') {
        slides1Index = slideIndex
    } else {
        slides2Index = slideIndex
    }
}