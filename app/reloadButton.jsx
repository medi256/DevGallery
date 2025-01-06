"use client";
import React from "react";

const ReloadButton = () => {
  return <button onClick={() => window.location.reload()}>reload</button>;
};

export default ReloadButton;
