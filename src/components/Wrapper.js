import React from "react";
import { Typography, Chip } from "@mui/material";

// [learn] need to pass `className` to Wrapper to apply styled-components
const Wrapper = ({
  title,
  description,
  children,
  className, // for style-components
  register, // for react-hook-form
  key, // for react-hook-form
}) => {
  return (
    <div className={className}>
      {title && <Typography variant="h2">{title}</Typography>}
      {description && <Chip label={description}></Chip>}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { register, key });
        }
        return child;
      })}
    </div>
  );
};

export default Wrapper;
