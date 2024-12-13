const Dining = () => {
  return (
    <div className="bg-orange-50 px-6 md:px-12 py-12">
    <div className="container mx-auto">
      <div className="text-center mb-10"></div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/hotel1.jpg"
            alt="Squirrel Resort Dining"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Left Text */}
        <div className="md:w-1/2 text-gray-800 text-base md:text-lg font-serif leading-8 tracking-wide">
          <h2 className="text-3xl mb-6 text-customOrange">
            Fine Dining at Squirrel Resort
          </h2>
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            doloribus, laboriosam earum adipisci velit omnis corporis pariatur
            voluptas sunt. Sed minus officia nihil, quisquam culpa veritatis
            dolorum recusandae pariatur aspernatur.
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            quia? Dolores explicabo ex labore corrupti cupiditate modi fugiat,
            libero ea, laudantium facere odio officiis, quasi odit deserunt
            fugit asperiores! Voluptates!
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            inventore obcaecati, doloremque reiciendis ratione, deserunt dolore
            eaque neque labore quas harum impedit sit sint rem distinctio
            tempora in dignissimos. Ad.
          </p>

          <button className="mt-4 px-4 py-2 bg-transparent text-customOrange border border-customOrange rounded-lg transition-colors duration-300 hover:bg-customOrange hover:text-white">
            Explore Authentic Dishes
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dining;
