import React from 'react';

const HomePage = () => {
//   const { data, isPending, error } = 1;
  const data = 1;
  console.log(data);
  return (
    <div className="homePageMain">
      <div className="homePageFeed">This is Feed</div>
      <div className="homePageSideBar">This is SideBar</div>
    </div>
  );
};

export default HomePage;
