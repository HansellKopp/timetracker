exports.timeLapse = function (start, end) {
  let timeDiff = (new Date(end) - new Date(start)) / 1000
  timeDiff = Math.floor(timeDiff / 60)
  const minutes = Math.round(timeDiff % 60)
  timeDiff = Math.floor(timeDiff / 60)
  const hours = Math.round(timeDiff % 24)
  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}`
}
