var closebtn = document.getElementById("btnClose");
var deletebtn = document.getElementById("btnDelete");
var badge = document.getElementById("badge");
var idName = document.getElementById("idName");

closebtn.hidden = true;
deletebtn.hidden = true;
badge.hidden = true;
idName.hidden = true;

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
        idName.hidden = false;
        
        var i = guid();
        document.getElementById("id").innerHTML = i;

        badge.hidden = false;

        var x = document.getElementById("desc").value;
        document.getElementById("descOp").innerHTML = x;        

        var sel = document.getElementById("sev");
        var text= sel.options[sel.selectedIndex].text;
        document.getElementById("sevOp").innerHTML = text;

        var y = document.getElementById("ass").value;
        document.getElementById("assOp").innerHTML = y;

        closebtn.hidden = false;
        deletebtn.hidden = false;

        document.getElementById("desc").value = "";
        document.getElementById("ass").value = "";
        
    }
    
}



