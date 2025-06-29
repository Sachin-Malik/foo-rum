import React from "react";

type ShowProps = {
  when: string | number | boolean | React.ReactNode;
  children?: React.ReactNode;
  fallback?: React.ReactNode | null | undefined;
  debug?: string;
};

function Show({ when, children, fallback }: ShowProps) {
  if (!when) {
    if (fallback) return <>{fallback}</>;
    return <></>;
  }

  return <>{children}</>;
}

export default React.memo(Show);
