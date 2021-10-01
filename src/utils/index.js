// [learn] Should use function when using this function to generate random colors for multiple styled-components
// In styled-components from parent should pass `color` prop with this random color, careful it's still using the same color if using randomColor
// in styled-components

export const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
