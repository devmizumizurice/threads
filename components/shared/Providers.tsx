"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#EC407A"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
