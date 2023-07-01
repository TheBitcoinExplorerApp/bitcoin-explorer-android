export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return {
    day,
    month,
    year,
    hour,
    minutes,
  };
};

export const convertBytesToMegabytes = (bytes: number) => {
  return (bytes / 1024 / 1024).toFixed(2);
};
