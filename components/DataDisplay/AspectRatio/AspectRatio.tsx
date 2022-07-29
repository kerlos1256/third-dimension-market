import React from "react";

export interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 9 / 16,
  children,
}) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        paddingTop: `${ratio * 100}%`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
