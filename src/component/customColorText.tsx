import React, { ReactNode } from "react";

interface IText {
  color: string;
  children?: ReactNode;
}

const CustomTextTemplate: React.FC<IText> = ({ color, children }) => {
  return <span style={{ color }}>{children}</span>;
};

const CustomText = (color: string) => {
  const ColoredTextComponent = ({ children }: { children: React.ReactNode }) => (
    <CustomTextTemplate color={color}>{children}</CustomTextTemplate>
  );

  ColoredTextComponent.displayName = `CustomText(${color})`;

  return ColoredTextComponent;
};

export default CustomText;
