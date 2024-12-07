import React from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  return (
    <div>
      ParentComponent
      <ChildrenComponent />
    </div>
  );
}
