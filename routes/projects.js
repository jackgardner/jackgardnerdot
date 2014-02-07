
/*
 * GET project page.
 */

exports.projects = function(req, res){
  res.render('projects', { title: 'Express' });
};