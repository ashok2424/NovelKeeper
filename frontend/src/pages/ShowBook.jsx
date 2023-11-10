import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <div className='max-w-[600px] mx-auto bg-white shadow-md rounded-xl overflow-hidden'>
        <h1 className='text-3xl p-4 text-center font-bold bg-sky-400 text-white'>
          Book Details
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className='p-4 font-serif text-gray-800'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500 font-bold'>Title: </span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500 font-bold'>Author: </span>
              <span>{book.author}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500 font-bold'>Publish Year: </span>
              <span>{book.publishYear}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500 font-bold'>Create Time: </span>
              <span>{formatDateTime(book.createdAt)}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500 font-bold'>Last Update Time: </span>
              <span>{formatDateTime(book.updatedAt)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
