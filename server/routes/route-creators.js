const { red } = require('chalk');

const createGetAllRoute = (router, Model) => router.get('/', async (req, res) => {
  try {
    res.json(await Model.find({}));
  } catch (err) {
    console.log(red('GET ALL ERROR', err.stack));
    res.sendStatus(500);
  }
});

const createGetOneRoute = (router, Model) => router.get('/:id', async (req, res) => {
  try {
    res.json(await Model.find({
      _id: req.params.id,
    }));
  } catch (err) {
    console.log(red('GET ONE ERROR', err.stack));
    res.sendStatus(500);
  }
});

const createPostRoute = (router, Model) => router.post('/', async (req, res) => {
  try {
    const item = await Model.find({
      title: req.body.title,
    });
    if (item.length) res.status(400).json({ ok: 0 });
    else res.status(201).json(await Model.create(req.body));
  } catch (err) {
    console.log(red('POST ERROR', err.stack));
    res.sendStatus(500);
  }
});

const createPutRoute = (router, Model) => router.put('/:id', async (req, res) => {
  try {
    const updated = await Model.update({
      _id: req.params.id,
    }, req.body);
    if (!updated) res.sendStatus(400);
    else res.status(201).json(updated);
  } catch (err) {
    console.log(red('PUT ERROR', err.stack));
    res.sendStatus(500);
  }
});

const createDeleteRoute = (router, Model) => router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Model.deleteOne({
      _id: req.params.id,
    });
    if (!deleted.ok) res.sendStatus(400);
    else res.sendStatus(204);
  } catch (err) {
    console.log(red('DELETE ERROR', err.stack));
    res.sendStatus(500);
  }
});

const createAllRoutes = (router, Model) => {
  createGetAllRoute(router, Model);
  createGetOneRoute(router, Model);
  createPostRoute(router, Model);
  createPutRoute(router, Model);
  createDeleteRoute(router, Model);
};

module.exports = {
  createGetAllRoute,
  createGetOneRoute,
  createPostRoute,
  createPutRoute,
  createDeleteRoute,
  createAllRoutes,
};
