function requestHandler(req, res){
  User.findById(req.userId)
  .then(function(user){
    return Tasks.findById(user.taskId)
  })
  .then(function(tasks){
    tasks.completed = true;
    return tasks.save();
  })
  .then(function(){
    return res.send('Task completed');
  })
  .catch(function(erros){
    res.send(erros);
  })
};