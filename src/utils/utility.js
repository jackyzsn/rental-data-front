export function waterMeterHasPending(waterMeterList) {
  return waterMeterPending(waterMeterList).length > 0;
}

export function waterMeterPending(waterMeterList) {
  return waterMeterList.filter((item) => !item.acceptFlag);
}

export function waterMeterAccepted(waterMeterList) {
  return waterMeterList
    .filter((item) => item.acceptFlag)
    .sort((first, second) => second.month > first.month);
}

export function readingIsValid(reading, acceptedEntries) {
  const floatNumberEx = new RegExp('[+-]?([0-9]*[.])?[0-9]+');

  if (!floatNumberEx.test(reading)) {
    return false;
  }

  var readingFloat = parseFloat(reading);
  var lastReading = acceptedEntries.length > 0 ? parseFloat(acceptedEntries[0].reading) : 0;

  return readingFloat >= lastReading;
}

export function convertAcceptedForDisplay(acceptedEntries) {
  if (acceptedEntries.length === 0) {
    return [];
  }

  const tmpRst = acceptedEntries.map((item) => {
    var row = {};
    row.month = item.month;
    row.reading = parseFloat(item.reading);
    row.enteredAt = item.enteredAt;
    row.acceptAt = item.acceptAt;
    row.acceptFlag = item.acceptFlag ? 'Yes' : 'No';

    return row;
  });

  var i;
  for (i = 0; i < tmpRst.length; i++) {
    if (i === tmpRst.length - 1) {
      tmpRst[i].usage = 0;
    } else {
      tmpRst[i].usage = tmpRst[i].reading - tmpRst[i + 1].reading;
    }
  }
  return tmpRst;
}