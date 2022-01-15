import React from 'react';

type SiteLayoutProp = {
  menu: JSX.Element;
  children: React.ReactNode;
};

const SiteLayout = ({ menu, children }: SiteLayoutProp) => {
  return (
    <>
      <div>{menu}</div>
      <div>{children}</div>
    </>
  );
};

export default SiteLayout;
