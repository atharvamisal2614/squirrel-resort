// components/FineDining.jsx
const FineDining = () => {
    const sectionStyle = {
      backgroundImage: "url('/images/squirrel-scene-2.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    };
  
    return (
      <div style={sectionStyle} className="relative">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center text-white p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-4 font-serif">Enjoy Dining with Perfect Views</h1>
            <h2 className="text-2xl md:text-3xl font-semibold font-serif">Taste the multiple Essence and <br/>  Dishes at Squirrel Resort</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default FineDining;
  