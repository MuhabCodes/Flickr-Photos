import React from 'react';

const HomePage = () => {
  //   const { data, isPending, error } = 1;
  const data = 1;
  console.log(data);
  return (
    <div className="homePageContentMain">
      <div className="homePageFeed">
        <div className="homeFeedFilters">
          <div className="homeFeedDropDown">
            ad
          </div>
          <div className="homeFeedLayouts">
            ad
          </div>
        </div>
      </div>
      <div className="homePageSideBar">
        This is SideBar
        <img
          src="https://static.toiimg.com/photo/72975551.cms"
          alt="Moon"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default HomePage;
