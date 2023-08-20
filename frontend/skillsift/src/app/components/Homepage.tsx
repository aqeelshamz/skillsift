"use client";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "@/utils/util";

function Homepage() {
  const [recommendedJobs, setRecommendedJobs] = useState<any>([]);

  const getRecommendedJobs = async () => {
    const config = {
      method: "GET",
      url: `${serverURL}/job/recommended`,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(async (response) => {
        setRecommendedJobs(response.data);
      })
  }

  useEffect(() => {
    getRecommendedJobs();
  }, []);

  return (
    <div className="w-full h-full overflow-auto">

      <div>
        <p className="text-2xl sm:text-3xl font-extrabold p-6">Recent jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {
            recommendedJobs.map((item: any, index: number) => {
              return <Link key={index} href="/JobDetails"><Card title={item?.title} company="" logo="" date="" salary="" location="" skills={item?.skills} /></Link>
            })
          }
        </div>

      </div>

      <div>
        <p className="text-2xl sm:text-5xl font-extrabold p-6">Recommended jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {recommendedJobs.map((item: any, index: number) => {
            return <Link key={index} href="/JobDetails"><Card title={item?.title} company="" logo="" date="" salary="" location="" skills={item?.skills} /></Link>
          })}
        </div>

      </div>


    </div>





  )
}

export default Homepage;
