/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
