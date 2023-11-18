import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBooks = () => {
  const navigate = useNavigate();

  let { id } = useParams();
  // console.log(id);

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
      await axios.patch(`http://localhost:4000/books/${id}`, book);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(book);

  return (
    <form className='form'>
      <h1>Update New Book</h1>
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
        Update
      </button>
    </form>
  );
};
export default UpdateBooks;
