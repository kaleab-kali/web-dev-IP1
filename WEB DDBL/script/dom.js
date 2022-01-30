

// btn.addEventListener('click', )

function changeDom(){
    // document.getElementById('header').innerText = "JS DOM";
    document.getElementById('header').textContent = "JS DOM";
    document.getElementById('three').innerHTML = "TAKE QUIZ";
    let head =document.querySelector('h2');
    head.style.backgroundColor = 'lightblue';
    head.color = 'yellow';
    let list2 = document.getElementById('two');
    list2.style.color = 'green';
    // document.getElementById('list').type = 'disc';
    document.querySelector('ul').type = 'disc';

    

}
function nodeList(){
    // alert("hey");
    // let nList = document.getElementsByClassName('mandatory');
    let nList = document.getElementsByTagName('li');
    for(i=0; i < nList.length;i++){
        nList[i].type = 'circle';
        nList[i].style.color = 'green';
    }
}
// let addBtn = document.getElementById('add');
// addBtn.addEventListener('click',changeChild());
function changeChild(){
    let chace;
    // let newNode = document.createElement('h3');
    // let newNode = document.createElement('li');
    let newNode = document.createElement('p');
    // let cont = document.creatTextNode('Lesson one:DOM');
    // let cont = document.createTextNode('write certification exam');
    let cont = document.createTextNode('congratulation');

    newNode.appendChild(cont);
    // let parentContainer = document.getElementById("list");
    let parentContainer = document.querySelector("main");
    let addContent = document.getElementById('last');

    // parentContainer.appendChild(newNode);
    parentContainer.insertBefore(newNode, addContent);
   

}
function remove(){
    // let removeEl = document.getElementById('headTwo');
    // let remo = document.getElementsByClassName('he');
    // let parentContain = document.querySelector('main');
    // parentContain.removeChild(remo);

    let rem1= document.getElementsByTagName('li');
    let parentContain0 = document.getElementById('list');
    // for(i=0; i < rem1.length;){
    //     parentContain0.removeChild(rem1[i]);
    // }
    for(let val of rem1){
        parentContain0.removeChild(val);
    }
    // parentContain0.removeChild(rem1);
}

