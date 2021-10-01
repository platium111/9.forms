import React from "react";
import { Typography, Chip } from "@mui/material";

// [learn] need to pass `className` to Wrapper to apply styled-components
const Wrapper = ({ title, description, children, className }) => {
  return (
    <div className={className}>
      {title && <Typography variant="h2">{title}</Typography>}
      {description && <Chip label={description}></Chip>}
      {children}
    </div>
  );
};

export default Wrapper;
