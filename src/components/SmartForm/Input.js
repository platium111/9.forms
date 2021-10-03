import React from "react";

export function Input({ register, name, ...rest }) {
  return name ? <input {...register(name)} {...rest} /> : null;
}
