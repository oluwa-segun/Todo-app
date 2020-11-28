//DOM calls
const input = document.querySelector('#input')
const add = document.querySelector('.task-btn')
const list = document.getElementsByTagName('li')
const close = document.getElementsByClassName('close')
const ul = document.querySelector("#myTasks")


//loop through task and add a class onclick

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
}, false)

//loop to add close btn to list

for (each of list) {
    let span = document.createElement('SPAN')
    let texContent = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild(texContent)
    each.appendChild(span)
}




// close task on click

for (each of close) {
    each.onclick = function () {
        const task = this.parentElement;
        task.style.display = "none";
    }
}




const newTask = () => {
    const newList = document.createElement('Li');
    const inputValue = input.value

    const value = document.createTextNode(inputValue)

    newList.appendChild(value)
    if (inputValue === "") {
        alert('hi there, write your task for today')
    } else {
        document.getElementById('myTasks').appendChild(newList);
        document.getElementById("input").value = "";

        let span = document.createElement('SPAN')
        let texContent = document.createTextNode('\u00D7');
        span.className = 'close'
        span.appendChild(texContent)
        newList.appendChild(span)

        for (each of close) {
            each.onclick = function () {
                const task = this.parentElement;
                task.style.display = "none"
            }
        }

    }
}

input.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
        newTask()
        // const newListt = document.createElement('Li');
        // const inputValue = input.value
        // const value = document.createTextNode(inputValue)
        // newListt.appendChild(value)
        // console.log(e.target.innerHTML)
    }
})