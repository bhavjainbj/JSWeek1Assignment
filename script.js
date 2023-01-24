const form = document.getElementById("issue-form");

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const issueId = guid();
    const title = document.getElementById("title").value;
    const decsription = document.getElementById("description").value;
    const severity = document.getElementById("severity").value;
    const assignedTo = document.getElementById("assigned-to").value;
    const issueDetails = {
        issueId: issueId,
        title: title,
        decsription: decsription,
        severity: severity,
        assignedTo: assignedTo
    }
    createCard(issueDetails);
    vacateFields();
    scrolldToCurrentIssues();
})

function createCard(issueDetails) {
    const issueCard = document.createElement("div");
    issueCard.classList.add('issue-card');
    issueCard.innerHTML = `
    <p class="card-text" style="font-size: small;"><b>Issue ID.</b> ${issueDetails.issueId}</p>
            <div class="open">Open</div>
            <h4>${issueDetails.title}</h4>
            <p class="card-text">${issueDetails.decsription}</p>
            <p class="card-text"><b>Severity:</b> ${issueDetails.severity}</p>
            <p class="card-text"> <b>Assigned to:</b> ${issueDetails.assignedTo}</p>
            <div class="action-palette">
                <div class="prev-btn"><i id="previous" class="fa-solid fa-arrow-left-long"></i></div>
                <div class="close1">Close</div>
                <div class="delete">Delete</div>
                <div class="next-btn"><i id="next" class="fa-solid fa-arrow-right-long"></i></div>
            </div>`;
    const newState = document.getElementById("new-state");
    newState.appendChild(issueCard);
    deleteCard(issueCard);
    closeIssue(issueCard);
    let prevBtn = issueCard.querySelector(".prev-btn");
    let nextBtn = issueCard.querySelector(".next-btn");
    const devState = document.getElementById("development-state");
    const qaState = document.getElementById("qa-state");
    const doneState = document.getElementById("done-state");
    prevBtn.style.display = "none";
    nextBtn.addEventListener("click", () => {
        if (newState.contains(issueCard)) {
            newState.removeChild(issueCard);
            devState.appendChild(issueCard);
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else if (devState.contains(issueCard)) {

            devState.removeChild(issueCard);
            qaState.appendChild(issueCard);
        } else if (qaState.contains(issueCard)) {
            nextBtn.style.display = "none";
            qaState.removeChild(issueCard);
            doneState.appendChild(issueCard);
        } else if (doneState.contains(issueCard)) {

        }

    });
    prevBtn.addEventListener("click", () => {
        if (doneState.contains(issueCard)) {
            doneState.removeChild(issueCard);
            qaState.appendChild(issueCard);
            nextBtn.style.display = "block";
        } else if (qaState.contains(issueCard)) {
            qaState.removeChild(issueCard);
            devState.appendChild(issueCard);
        } else if (devState.contains(issueCard)) {
            devState.removeChild(issueCard);
            newState.appendChild(issueCard);
            prevBtn.style.display = "none";
        }
    });
}


function deleteCard(issueCard) {
    const deleteBtn = issueCard.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        issueCard.remove();
    });
}
function closeIssue(issueCard){
    const closeBtn = issueCard.querySelector(".close1");
    closeBtn.addEventListener("click",()=>{
        issueCard.remove();
        issueCard.classList.add("closed-issue");
        const closeBtn = issueCard.querySelector('.close1');
        let prevBtn = issueCard.querySelector(".prev-btn");
        let nextBtn = issueCard.querySelector(".next-btn");
        closeBtn.remove();
        prevBtn.remove();
        nextBtn.remove();
        issueCard.querySelector('.open').innerHTML="Closed";
        const closedContainer = document.getElementById("closed-issues-container");
        closedContainer.appendChild(issueCard);
        scrolldToClosedIssues();
    })
}
function vacateFields() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("severity").value = "";
    document.getElementById("assigned-to").value = "";
}
function scrolldToCurrentIssues() {
    var elem = document.getElementById("current-issues");
    elem.scrollIntoView();
}

function scrolldToClosedIssues() {
    var elem = document.getElementById("closed-issues");
    elem.scrollIntoView();
}