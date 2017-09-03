const uuidV4 = require('uuid/v4')

export function timeLapse (start, end) {
  console.log(start, end)
  let timeDiff = (new Date(end) - new Date(start)) / 1000
  timeDiff = Math.floor(timeDiff / 60)
  const minutes = Math.round(timeDiff % 60)
  timeDiff = Math.floor(timeDiff / 60)
  const hours = Math.round(timeDiff % 24)
  console.log(hours, minutes)
  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}`
}

export function saveItem (_item, _itemIndex, storage) {
  const workdayItems = storage.get('workdayItems')
  const start = _item.start.split(':')
  const end = _item.end.split(':')
  const startDay = new Date(_item.date)
  const endDay = new Date(startDay.getDate() + (end[1] < start[0] ? 1 : 0))
  const dateStart = new Date(
    startDay.getYear(),
    startDay.getMonth(),
    startDay.getDay(),
    start[0],
    start[1]
  )
  const dateEnd = new Date(
    endDay.getYear(),
    endDay.getMonth(),
    endDay.getDay(),
    end[0],
    end[1]
  )
  console.log(dateStart, dateEnd)
  const item = Object.assign({}, _item, {
    id: _item.id || uuidV4(),
    hours: timeLapse(dateStart, dateEnd),
    timestamp: Date.now()
  })
  if (_itemIndex >= 0) {
    workdayItems[_itemIndex] = item
  } else {
    workdayItems.push(item)
  }
  storage.set('workdayItems', workdayItems)
}

export function loadItem (id, storage) {
  const workdayItems = storage.get('workdayItems')
  const itemIndex = workdayItems.findIndex(item => item.id === id)
  if (itemIndex >= 0) {
    return { item: workdayItems[itemIndex], index: itemIndex }
  } else {
    return null
  }
}
