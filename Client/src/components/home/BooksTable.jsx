import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='p-2 border-b border-gray-400 text-center'>No</th>
          <th className='p-2 border-b border-gray-400'>Title</th>
          <th className='p-2 border-b border-gray-400 hidden md:table-cell'>Author</th>
          <th className='p-2 border-b border-gray-400 hidden md:table-cell'>Publish Year</th>
          <th className='p-2 border-b border-gray-400'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-12 hover:bg-gray-100 transition-all'>
            <td className='p-2 border-b border-gray-400 text-center'>{index + 1}</td>
            <td className='p-2 border-b border-gray-400 text-center'>{book.title}</td>
            <td className='p-2 border-b border-gray-400 hidden md:table-cell text-center'>{book.author}</td>
            <td className='p-2 border-b border-gray-400 hidden md:table-cell text-center'>{book.publishYear}</td>
            <td className='p-2 border-b border-gray-400'>
              <div className='flex items-center justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
