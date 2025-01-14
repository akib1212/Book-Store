import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice.js";



const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/book/${book?._id}`}>
            <img
              src={getImgUrl(book?.coverImage)}
              alt={book?.title || "Book cover"}
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link href={`/book/${book?._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book?.title || "Unknown Title"}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book?.description || "No description available."}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice.toFixed(2)}{" "}
            {book?.oldPrice && (
              <span className="line-through font-normal ml-2">
                ${book.oldPrice.toFixed(2)}
              </span>
            )}
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1" 
          onClick={()=>{
            handleAddToCart(book)
          }}>
          
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop Type Validation
BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    trending: PropTypes.bool,
    coverImage: PropTypes.string.isRequired,
    oldPrice: PropTypes.number,
    newPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
