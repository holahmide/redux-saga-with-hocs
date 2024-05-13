"use client";

import { ReactNode, useEffect, useState } from "react";

/*
    The reason for this component is to prevent hydration error normal found in nextjs when using some client components
**/

const DynamicClientSection = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return children;
};

export default DynamicClientSection;
