const HommeController = {
    index: (req, res, next) => {
  res.render('index', { title: 'Express' });
	}
}

module.exports = HommeController;