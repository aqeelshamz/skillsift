import Image from "next/image";
import Card from "./Card";

function Homepage() {
  return (
<<<<<<< HEAD
    <div className="flex items-center gap-3 justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
      <Card />
      <Card />
      <Card />
    </div>
  );
=======
<div className="w-full h-full overflow-auto">

    <div className="  bg-gray-200"> 
    <p className="text-5xl font-extrabold p-6">Recent jobs</p>

    <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
    <Card/><Card/><Card/>
    <Card/>
    </div>

</div>

      <div className="  bg-gray-200">
        <p className="text-5xl font-extrabold p-6">Recommended jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
        <Card/><Card/><Card/>
        <Card/><Card/>
        </div>
   
   </div>


   </div>
    

  


  )
>>>>>>> cb2e044709639433de5b8b40afb94a91363f140b
}

export default Homepage;
