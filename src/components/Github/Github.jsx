import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  return (
    <div className="text-center bg-gray-700 text-white text-3xl p-5 underline">
      {data.name}
      <br />
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default GitHub;
