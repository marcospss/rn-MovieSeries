export const convertMinutesToTime = (data) => {
  const minutes = data % 60;
  const hours = (data - minutes) / 60;
  const totalMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  return `${hours}h ${totalMinutes}m`;
}
