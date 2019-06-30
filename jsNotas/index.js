// Initialize Firebase
var config = {
    apiKey: "AIzaSyCDq2sTZfITQhBlDjQqV6jvFCD_C5Zo8VU",
    authDomain: "bts-web-ae8c5.firebaseapp.com",
    databaseURL: "https://bts-web-ae8c5.firebaseio.com",
    projectId: "bts-web-ae8c5",
    storageBucket: "gs://bts-web-ae8c5.appspot.com",
    messagingSenderId: "1036051727327"
  };


var database = firebase.
initializeApp(config).
database().
ref();

new Vue({
  el: "#root",
  data: {
    task: "",
    tasks: [] },

  methods: {
    generateUUID() {
      return (
        "_" +
        Math.random().
        toString(36).
        substr(2, 9));

    },
    getTask(id) {
      return this.tasks.filter(task => task.id === id);
    },
    removeTask(id) {
      return this.tasks.filter(task => task.id !== id);
    },
    addTask() {
      if (this.task) {
        let uuid = this.generateUUID();
        this.tasks.push({
          id: uuid,
          description: this.task,
          completed: false });

        this.task = "";
        let addedTask = this.getTask(uuid)[0];
        addedTask.ref = database.push({
          id: addedTask.id,
          description: addedTask.description,
          completed: addedTask.completed });

      }
    },
    updateTask(id) {
      let updatedTask = this.getTask(id)[0];
      let isCompleted = updatedTask.completed = !updatedTask.completed;
      updatedTask.ref.set({
        id: updatedTask.id,
        description: updatedTask.description,
        completed: isCompleted });

    },
    deleteTask(id) {
      let deletedTask = this.getTask(id)[0].ref;
      deletedTask && deletedTask.remove();
      this.tasks = this.removeTask(id);
    } },

  mounted() {
    database.once("value", tasks => {
      tasks.forEach(task => {
        this.tasks.push({
          id: task.child("id").val(),
          ref: task.ref,
          description: task.child("description").val(),
          completed: task.child("completed").val() });

      });
    });
  },
  computed: {
    remainingTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    } } });

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}