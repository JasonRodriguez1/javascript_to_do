var Task = {
  setID: function(name, number) {
    this.name = name;
    this.number = number;
  },
};

var List = {
  setName: function(name) {
    this.name = name;
  },

  newList: function(name) {
    this.tasks = [];
    this.setName(name);
  },

  addTask: function(task) {
    this.tasks.unshift(task);
  },

  newTask: function(taskName, taskNumber) {
    var task = Object.create(Task);
    task.setID(taskName, taskNumber);
    this.addTask(task);
  },

  removeTask: function(taskID) {
    var thisList = this;

    thisList.tasks.forEach(function(task, index) {
      if (task.number === taskID) {
        thisList.tasks.splice(index, 1);
      }
    });
  }
};



$(function(){
  counter = 0;
  var lists = [];
  var list = Object.create(List);
  list.newList();
  lists.push(list);

  // --- ADD ITEMS TO LISTS ---
  $('form.add-to-list').submit(function() {
    var form = $(this).attr("value");
    var formNumber = parseInt(form);
    var taskName = $('input.list-' + form + '-to-do').val();
    lists[formNumber].newTask(taskName, counter);
    $('span.list-' + form + '-incomplete').prepend("<li class='list-item' id='" + counter + "'>" + taskName + "</li>");

    // --- MARK ITEMS COMPLETED ---
    $('#' + counter).click(function() {
      // task.toggleCompleted();
      $('span.list-' + form + '-complete').prepend("<li class='list-item' id='" + counter + "'>" + taskName + "</li>");
      $(this).remove();
    });

    counter++;
    return false;
  });

  // --- ADD OR NAME LISTS ---
  $('form.create-list').submit(function() {
    $(this).hide();
    var form = $(this).attr("value");
    var formNumber = parseInt(form);
    var name = prompt('Please enter a name for your list:', 'New List');
    $('span#list-' + form + '-name').empty().append(name);
    if (formNumber !== 0) {
      $('div#list-' + form + '-hidden').show();
      var list = Object.create(List);
      list.newList();
      lists[formNumber] = list;
    }

    return false;
  });

  return false;
});

/*

$(function(){
  $('form#list-one-add').submit(function() {
    var newItem = $('input.to-do').val();
    $('span.incomplete-tasks').prepend("<li class='list-item'>" + newItem + "</li>");

    $(".list-item").each(function(index){
      $(this).click(function() {
        $('span.complete-tasks').prepend("<li class='list-item'>" + newItem + "</li>");
        $(this).remove();
      });
    });


    return false;
  });
  return false;
});

*/