<template>
  <div>
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.text }}</span>
        <button v-on:click="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Todo',
    data: function () {
      return {
        newTodo: '',
        todos: [
          { text: 'Add some todos' }
        ]
      }
    },
    methods: {
      addTodo: function () {
        var text = this.newTodo.trim()
        if (text) {
          this.todos.push({ text: text })
          this.newTodo = ''
          var my_event = new Event('my_event_name');
          my_event.detail = text;
          document.dispatchEvent(my_event);
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      }
    }
  }
</script>
