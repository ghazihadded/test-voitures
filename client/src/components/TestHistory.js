import React from "react";
import queryString from "query-string";

export const TestHistory = ({ history }) => {
  const { test } = queryString.parse(history.location.search);

  return <div>test</div>;
};
