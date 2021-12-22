const colors = ["#FFC7F9", "#f7ffc7", "#C7FFF5", "#FFC7C7", "#C7D3FF"];

export const sortColors = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
