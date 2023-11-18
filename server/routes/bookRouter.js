import { Router } from 'express';
import {
  getAllBooks,
  addBooks,
  deleteBook,
  updateBook,
} from '../controllers/booksController.js';
const router = Router();

router.get('/', getAllBooks);
router.post('/', addBooks);
router.delete('/:id', deleteBook);
router.patch('/:id', updateBook);

export default router;
