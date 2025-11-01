document.addEventListener('DOMContentLoaded',()=>{
    const input= document.getElementById('todo-input')
    const addtaskBtn= document.getElementById('add-task-btn')
    const taskList= document.getElementById('todo-list')
    const tasks_counter = document.getElementById('total-tasks')
    const completed_counter = document.getElementById('completed-tasks')
    const uncompleted_counter = document.getElementById('uncompleted-tasks')
    const clearTasks= document.querySelector("img")

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    //load all tasks on screen
    tasks.forEach((task)=>renderTasks(task));

    //add task button
    addtaskBtn.addEventListener('click', ()=>{
        const taskName = input.value.trim()
        if(taskName==='') return;

        const newtask = {
            id: Date.now(),
            name: taskName,
            completed: false
        }

        tasks.push(newtask)
        input.value = "" //clear input

        saveTasks() //save in local storage
        renderTasks(newtask) //live rendering
        updateCounter()
        console.log(tasks) //logging the tasks
    })

    clearTasks.addEventListener('click', ()=>{
        localStorage.clear();
        taskList.innerHTML=''
        tasks=[]
        updateCounter()
    })

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks(task){
        //show tasks on load
        const li = document.createElement("li");
        li.setAttribute('data-id', task.id)
        if(task.completed) {
            li.classList.toggle("completed")
            updateCounter()
            saveTasks()
        }

        li.innerHTML= `<span>${task.name}</span><button>Delete</button>`

        li.addEventListener('click', (e)=>{
            //caution for Delete button
            if(e.target.tagName==="BUTTON") return;

            //completed or not completed
            task.completed = !task.completed
            li.classList.toggle('completed');
            updateCounter()
            saveTasks()
        })

        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation(); //prevent event bubbling

            //remove the element which was clicked, from the list as well as from local storage
            tasks= tasks.filter((t)=>t.id !== task.id); 
            li.remove()
            updateCounter()
            saveTasks()
        })

        taskList.appendChild(li);
    }

    function updateCounter(){
        const totalTasks= tasks.length
        const completed = tasks.filter((task)=>task.completed).length
        const uncompleted = totalTasks - completed

        tasks_counter.textContent = `Total Tasks: ${totalTasks}`
        completed_counter.textContent = `Completed: ${completed}`
        uncompleted_counter.textContent = `Uncompleted: ${uncompleted}`
    }

})