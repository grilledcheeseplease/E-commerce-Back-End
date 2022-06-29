const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// get all categories with associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
  .then((newCategory) => { 
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;