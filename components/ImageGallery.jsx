// components/ImageGallery.jsx
const ImageGallery = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Image Wrapper 1 */}
          <div className="image-wrapper relative overflow-hidden ">
            <img
              src="/images/hotel1.jpg"
              alt="Expansive Parking Area"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="caption_img text-lg font-serif  text-gray-400 text-center p-2 mt-2 tracking-widest">
              Great Bedrooms
            </div>
          </div>
  
          {/* Image Wrapper 2 */}
          <div className="image-wrapper relative overflow-hidden md:mt-20">
            <img
              src="/images/hotel2.jpg"
              alt="Royal AC Banquet Hall"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="caption_img  text-gray-400 text-lg font-serif text-center p-2 mt-2 tracking-widest">
              Perfect Breathfresh
            </div>
          </div>
  
          {/* Image Wrapper 3 */}
          <div className="image-wrapper relative overflow-hidden">
            <img
              src="/images/hotel3.jpg"
              alt="Infinity Pool"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="caption_img  text-gray-400 text-lg font-serif text-center p-2 mt-2 tracking-widest">
              Swimming Pool
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  