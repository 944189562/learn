import React, { memo, Suspense } from "react";
import Routes from "@/router";

const YPAppContent = memo(() => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes />
      </Suspense>
    </>
  );
});

export default YPAppContent;
