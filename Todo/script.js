function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(taskInput.value));
      taskList.appendChild(li);
      taskInput.value = '';
  
      li.onclick = function () {
        li.parentNode.removeChild(li);
      };
    } else {
      alert('Please enter a task!');
    }
  }
  