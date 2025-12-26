import React from "react";

const serviceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h2>Service details page</h2>
    </div>
  );
};

export default serviceDetailsPage;
