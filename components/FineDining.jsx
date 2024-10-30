// components/FineDining.jsx
const FineDining = () => {
    const sectionStyle = {
      backgroundImage: "url('/images/hotel3.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh", // Full viewport height
    };
  
    return (
      <div style={sectionStyle} className="relative">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center text-white p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-4 font-serif">Fine Dining with Breathtaking Views</h1>
            <h2 className="text-2xl md:text-3xl font-semibold font-serif">Taste the Essence of Local and International <br/>  Dishes at Gazebo Restaurant</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default FineDining;
  