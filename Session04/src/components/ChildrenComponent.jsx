import React from "react";
import GrandChildrenComponent from "./GrandChildrenComponent";

export default function ChildrenComponent() {
  return (
    <div>
      ChildrenComponent
      <GrandChildrenComponent />
    </div>
  );
}
