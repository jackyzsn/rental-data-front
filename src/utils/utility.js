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
