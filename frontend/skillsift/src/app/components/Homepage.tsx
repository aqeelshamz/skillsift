import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

function Homepage() {
  return (
    <div className="w-full h-full overflow-auto">

      <div>
        <p className="text-2xl sm:text-3xl font-extrabold p-6">Recent jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {
            [...Array(3)].map((item) => {
              return <Link href="/JobDetails"><Card /></Link>
            })
          }
        </div>

      </div>

      <div>
        <p className="text-2xl sm:text-5xl font-extrabold p-6">Recommended jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {[...Array(5)].map((item) => {
            return <Link href="/JobDetails"><Card /></Link>
          })}
        </div>

      </div>


    </div>





  )
}

export default Homepage;
