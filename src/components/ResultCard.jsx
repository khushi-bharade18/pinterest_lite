const ResultCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
