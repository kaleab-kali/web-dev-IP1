

function swap() {
    let photo = document.getElementById('image');
    let vid = document.getElementById('film');
    let parentCon = document.getElementById('data');
    
    parentCon.insertBefore(photo,vid);
    let main = document.getElementById('last');
    parentCon.insertBefore(vid,main);
   

}
function remove(){

    let rem1 = document.getElementById('A1');
    let parentContain = document.getElementById('audi');
    parentContain.removeChild(rem1);
}

function add(){
    let newNode = document.createElement('p');
    let content = document.createTextNode('book is a goof things that will change human life and and increase knowledge');
    newNode.appendChild(content);
    let parent0 = document.getElementById('data');
    let beforeNode = document.getElementById('newP');
    parent0.insertBefore(newNode, beforeNode);

}