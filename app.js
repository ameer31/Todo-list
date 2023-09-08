
var getul = document.getElementById('ul')

function add() {
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletetext = document.createTextNode('Delete')
    deletebtn.appendChild(deletetext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')


    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'editfun(this)')


}
function deletall() {
    getul.innerHTML = ''
}
function del(e) {
    e.parentNode.remove()
}


function editfun(e){
    var a = prompt('Enter updated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a}
    
