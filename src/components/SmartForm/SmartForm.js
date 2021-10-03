import React from "react";
import { useForm } from "react-hook-form";
export * from "./Input";
export * from "./Select";

export function SmartForm({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  console.log("chilren", children);
  const recursiveLoadChildren = (children) => {
    return (
      children &&
      React.Children.map(children, (child) => {
        console.log("children map", child);
        if (child.props.children) {
          recursiveLoadChildren(child.props.children);
        }
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {recursiveLoadChildren(children)}
    </form>
  );
}
