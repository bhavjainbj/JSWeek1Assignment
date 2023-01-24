// var Nextbtn = document.getElementById("NbtnNext");
// var deletebtn = document.getElementById("NbtnDelete");
// var Nbadge = document.getElementById("Nbadge");
// var NidName = document.getElementById("NidName");

// var DNextbtn = document.getElementById("DNbtnNext");
// var Ddeletebtn = document.getElementById("DNbtnDelete");
// var DNbadge = document.getElementById("DNbadge");
// var DNidName = document.getElementById("DNidName");

// Nextbtn.hidden = true;
// deletebtn.hidden = true;
// Nbadge.hidden = true;
// NidName.hidden = true;


// DNbadge.hidden = true;
// DNidName.hidden = true;

// let guid = () => {
//     let s4 = () => {
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//     //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }

// function checkForBlank(){
    
    

//     if(document.getElementById('desc').value == ""){
//         alert("Enter the Description!!");
//         document.getElementById('desc').style.borderColor = 'red';
//         return false;
//     }
//     else if(document.getElementById('ass').value == ""){
//         alert("Enter the Assigned To!!");
//         document.getElementById('ass').style.borderColor = 'red';
//         return false;
//     }
//     else{
//         NidName.hidden = false;
//         DNidName.hidden = false;

//         var i = guid();
//         document.getElementById("id").innerHTML = i;
//         // document.getElementById("Did").innerHTML = i;

//         Nbadge.hidden = false;
//         DNbadge.hidden = false;

//         var x = document.getElementById("desc").value;
//         document.getElementById("NdescOp").innerHTML = x;        
//         // document.getElementById("DNdescOp").innerHTML = x;        

//         var sel = document.getElementById("sev");
//         var text= sel.options[sel.selectedIndex].text;
//         document.getElementById("NsevOp").innerHTML = text;
//         // document.getElementById("DNsevOp").innerHTML = text;

//         var y = document.getElementById("ass").value;
//         document.getElementById("NassOp").innerHTML = y;
//         // document.getElementById("DNassOp").innerHTML = y;

//         Nextbtn.hidden = false;
//         deletebtn.hidden = false;
        

//         document.getElementById("desc").value = "";
//         document.getElementById("ass").value = "";
        
//     }
    
// }



var Nextbtn = document.getElementById("NbtnNext");
var deletebtn = document.getElementById("NbtnDelete");
var Nbadge = document.getElementById("Nbadge");
var NidName = document.getElementById("NidName");

Nextbtn.hidden = true;
deletebtn.hidden = true;
Nbadge.hidden = true;
NidName.hidden = true;

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function checkForBlank(){
    
    

    if(document.getElementById('desc').value == ""){
        alert("Enter the Description!!");
        document.getElementById('desc').style.borderColor = 'red';
        return false;
    }
    else if(document.getElementById('ass').value == ""){
        alert("Enter the Assigned To!!");
        document.getElementById('ass').style.borderColor = 'red';
        return false;
    }
    else{
        NidName.hidden = false;
        
        var i = guid();
        document.getElementById("id").innerHTML = i;

        Nbadge.hidden = false;

        var x = document.getElementById("desc").value;
        document.getElementById("NdescOp").innerHTML = x;        

        var sel = document.getElementById("sev");
        var text= sel.options[sel.selectedIndex].text;
        document.getElementById("NsevOp").innerHTML = text;

        var y = document.getElementById("ass").value;
        document.getElementById("NassOp").innerHTML = y;

        Nextbtn.hidden = false;
        deletebtn.hidden = false;

        document.getElementById("desc").value = "";
        document.getElementById("ass").value = "";
        
    }
    
}
