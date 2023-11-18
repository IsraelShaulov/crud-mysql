import db from '../db/connect.js';

export const getAllBooks = async (req, res) => {
  const query = 'select * from books';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addBooks = async (req, res) => {
  const query =
    'INSERT INTO books (`title`, `description`,`price` ,`cover`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.status(201).json('Book has been created successful');
  });
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM books WHERE id= ?';
  db.query(query, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json('Book has been deleted successful');
  });
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const query =
    'UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? where id = ?';
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];
  db.query(query, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json('Book has been updated successful');
  });
};
