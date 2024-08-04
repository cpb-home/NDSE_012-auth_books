const express = require('express');
const router = express.Router();
const Users = require('../../models/users');
const passport = require('../../middleware/strategy');
const LocalStrategy = require('passport-local').Strategy;

router.get('/login', (req, res) => {
  res.render('users/login', {
    title: "Авторизация",
    book: {}
  })
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    console.log("req.user: ", req.user)
    res.redirect('/api/user/me')
  }
  /*
  passport.authenticate('local',
    function(err, user, info) {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('api/user/me');
            })
          : res.redirect('/api/user/login');
    }
  )(req, res, next);
*/
/*
  try {
    await newBooks.save();

    res.redirect('/api/books/book');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }*/
});

router.get('/signup', (req, res) => {
  res.render('users/signup', {
    title: "Регистрация",
    book: {}
  })
});

router.post('/signup', async (req, res) => {
  const { username, password, displayName, mail } = req.body;
/*
  try {
    await newBooks.save();

    res.redirect('/api/books/book');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }*/
});

/*
router.get('/book/update/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.findById(id);

    res.render('book/update', {
      title: 'Библиотека',
      book: book
    })
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.post('/book/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
  
  try {
    await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook});

    res.redirect('/api/books/book/');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.post('/book/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Books.findByIdAndDelete(id);

    res.redirect('/api/books/book');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.get('/contacts', (req, res) => {
  res.render('contacts/index', {
    title: 'Контакты'
  })
})
*/
module.exports = router;


/*
const express = require('express');
const router = express.Router();
const Books = require('../../models/books');

router.get('/login', (req, res) => {
  res.render('users/login', {
    title: "Авторизация",
    book: {}
  })
});

router.post('/login', async (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
  const newBooks = new Books({
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook
  });

  try {
    await newBooks.save();

    res.redirect('/api/books/book');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
});

router.get('/book/update/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.findById(id);

    res.render('book/update', {
      title: 'Библиотека',
      book: book
    })
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.post('/book/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
  
  try {
    await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook});

    res.redirect('/api/books/book/');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.post('/book/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Books.findByIdAndDelete(id);

    res.redirect('/api/books/book');
  } catch (e) {
    console.log(`Ошибюка роута /: ${e}`);
    res.redirect('/404');
  }
})

router.get('/contacts', (req, res) => {
  res.render('contacts/index', {
    title: 'Контакты'
  })
})
module.exports = router;
*/