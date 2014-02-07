
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.projects = function(req, res){
  res.render('projects', { title: 'Express' });
};