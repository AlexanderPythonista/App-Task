
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let time = document.getElementById('time').value
  console.log(time)

  let task = {
    title,
    description,
    time
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let time = tasks[i].time;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p><spanas>     ${title}    </spanas>      ——     <spanes>${description}</spanes> —— <spanis>A las ${time}</spanis>
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5"  style="font-family: 'Sofia',
cursive; ">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();
