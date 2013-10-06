describe('To Do', function() {
  describe('Task', function() {

    describe('setID', function() {
      it('sets the task name', function() {
        var task = Object.create(Task);
        task.setID("Walk the fish", 0);
        task.name.should.equal("Walk the fish");
      });

      it('sets a unique number', function() {
        var task = Object.create(Task);
        task.setID("Walk the fish", 0);
        task.number.should.equal(0);
      });
    });
  });






  describe('List', function() {
    describe('setName', function() {
      it('sets the name of the list', function() {
        var list = Object.create(List);
        list.setName("To Do");
        list.name.should.equal("To Do");
      });
    });

    describe('newList', function() {
      it('creates an array', function() {
        var list = Object.create(List);
        list.newList();
        list.tasks.should.exist;
      });

      it('calls the method to set the name of the list', function() {
        var list = Object.create(List);
        list.newList("Fishy Tasks");
        list.name.should.equal("Fishy Tasks");
      });
    });

    describe('addTask', function() {
      it('adds a task to the list of tasks', function() {
        var task = Object.create(Task);
        task.setID("Walk the fish", 0);
        var list = Object.create(List);
        list.newList("Fishy Tasks");
        list.addTask(task);
        list.tasks[0].name.should.equal("Walk the fish");
      });
    });

    describe('newTask', function() {
      it('creates a new task and adds the task to the list of tasks', function() {
        var list = Object.create(List);
        list.newList("Fishy Tasks");
        list.newTask("Walk the fish");
        list.tasks[0].name.should.equal("Walk the fish");
      });
    });


    describe('removeTask', function() {
      it('removes a task from the array it is in', function() {
        var list = Object.create(List);
        list.newList("Fishy Tasks");
        list.newTask("Walk the fish", 0);
        list.newTask("Walk the cat", 1);
        list.removeTask(1);
        list.tasks.length.should.equal(1);
      });
    });
  });
});


