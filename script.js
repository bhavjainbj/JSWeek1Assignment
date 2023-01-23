var closebtn = document.getElementById("btnClose");
var deletebtn = document.getElementById("btnDelete");

closebtn.hidden = true;
deletebtn.hidden = true;


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



