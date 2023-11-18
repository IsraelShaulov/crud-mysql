import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    description: '',
    price: '',
    cover: '',
  });

  // controlled input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBook({ ...book, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/books', book);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(book);

  return (
    <form className='form'>
      <h1>Add New Book</h1>
      <input
        type='text'
        placeholder='title'
        name='title'
        value={book.title}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='description'
        name='description'
        value={book.description}
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='price'
        name='price'
        value={book.price}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='cover'
        name='cover'
        value={book.cover}
        onChange={handleChange}
      />

      <button type='submit' className='formButton' onClick={handleClick}>
        Add
      </button>
    </form>
  );
};
export default AddBooks;
