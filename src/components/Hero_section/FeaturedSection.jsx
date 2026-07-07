const cards = [
  {
    title: "Nature",
    img: "../assets/feature_1.jpg",
  },

  {
    title: "Travel",
    img: "../assets/feature_2.jpg",
  },

  {
    title: "Food",
    img: "../assets/feature_3.jpg",
  },

  {
    title: "Technology",
    img: "../assets/feature_4.jpg",
  },
];

export default function FeaturedSection() {
  return (
    <div className="px-4 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Today</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="h-44 sm:h-56 w-full object-cover group-hover:scale-110 transition duration-500 "
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">{card.title}</h3>

              <p className="text-gray-500 text-sm mt-1">
                Explore beautiful {card.title.toLowerCase()} ideas.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
