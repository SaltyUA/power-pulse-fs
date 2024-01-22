const timeFormat = (seconds) => {
  seconds = Number(seconds);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor((seconds % 3600) % 60);

  var mDisplay = m > 0 ? (m > 9 ? m : '0' + m) : '00';
  var sDisplay = s > 0 ? (s > 9 ? s : '0' + s) : '00';
  return `${mDisplay}:${sDisplay}`;
};

export default timeFormat;
