

let mylocalstorage=localStorage.getItem("websiteName");
let websiteName;
if(!!mylocalstorage){
    websiteName=JSON.parse(mylocalstorage);
}else{
    websiteName=[];
}

mylocalstorage=localStorage.getItem("websiteurl");
if(!!mylocalstorage){
    websiteurl=JSON.parse(mylocalstorage);
}else{
    websiteurl=[];
}

for(let n in websiteName){
    let newtr=document.createElement("tr");
    newtr.innerHTML=`<td>${websiteName[n]}</td>
        <td><button class="btn btn-primary btn2">visit</button>
            <button class="btn btn-danger btn2">Delete</button>
        </td>
    `;
    document.getElementById("tbody").appendChild(newtr);
}


let submit=document.getElementById("submbtn");
submit.addEventListener("click",()=>{
    validatedata();
});

function validatedata(){
    let name=document.getElementById("name").value;
    let url=document.getElementById("url").value;
    
    let checkName=websiteName.includes(name);
    let checkUrl=websiteurl.includes(url);

    if(name.length>=3 && checkName==false && checkUrl==false){
        websiteName.push(name);
        localStorage.setItem("websiteName",JSON.stringify(websiteName));
        websiteurl.push(url);
        localStorage.setItem("websiteurl",JSON.stringify(websiteurl));
        addToTable();
    }
    else{
        if(name.length<3)
            alert("Not valid");
        else if(checkName==true){
            alert("this name already exist! please enter different name");
        }
        else if(checkUrl==true){
            alert("this URL already exist! please enter different URL");
        }
    }
}
// window.open(websiteurl[0]);
function addToTable(){
    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    for(let n in websiteName){
        let newtr=document.createElement("tr");
        newtr.innerHTML=`<td>${websiteName[n]}</td>
            <td><button class="btn btn-primary btn2" onclick="visit(${n})">visit</button>
                <button class="btn btn-danger btn2" onclick="deletewebsite(${n})">Delete</button>
            </td>
        `;
        tbody.appendChild(newtr);
    }
}
function visit(i){
    window.open(websiteurl[i]);
}
function deletewebsite(i){
    websiteName.splice(i,1);
    localStorage.setItem("websiteName",JSON.stringify(websiteName));
    websiteurl.splice(i,1);
    localStorage.setItem("websiteurl",JSON.stringify(websiteurl));
    addToTable();
}