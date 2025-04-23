import React from "react";

const TestComponent = ({ title, children }) => {
  return (
    <div>
      TestComponent {title} {children}
    </div>
  );
};

export default TestComponent;
