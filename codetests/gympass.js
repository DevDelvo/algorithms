// Write function that makes ASCII art in shape of capital letter L

function solution(N) {
  let final = 'L';
  for (let i = 1; i <= N; i++) {
    if (i !== N) {
      final += 'L';
      console.log('L');
    } else if (i === N) {
      console.log(final);
    }
  }
}



// Write a function that given a string S representing the schedule, returns the length of the longest time slot when James can sleep(in minutes)
// string is given in DAY HH:MM-HH:MM\n format
function solution(S) {
  const timeSlots = S.split('\n')
  let longestGap = 0;
  const times = ['00:00'];
  let timeMap = {
    'Mon': [],
    'Tue': [],
    'Wed': [],
    'Thu': [],
    'Fri': [],
    'Sat': [],
    'Sun': [],
  }
  for (const slot of timeSlots) {
    let dateTime = slot.split(' ');
    let day = dateTime[0];
    let time = dateTime[1].split('-');
    let startTime = time[0];
    let endTime = time[1];
    if (timeMap[day].length) {
      if (parseInt(startTime.split(':')[0]) < parseInt(timeMap[day][0])) {
        timeMap[day].unshift(endTime);
        timeMap[day].unshift(startTime);
      } else {
        timeMap[day].push(startTime);
        timeMap[day].push(endTime);
      }
    } else {
      timeMap[day].push(startTime);
      timeMap[day].push(endTime);
    }
  }
  for (const day in timeMap) {
    for (const time of timeMap[day]) {
      times.push(time);
    }
  }
  times.push('24:00');
  for (let i = 0; i < times.length; i += 2) {
    let startTime = times[i];
    let endTime = times[i + 1];
    longestGap = Math.max(longestGap, calculateDifference(startTime, endTime))
  }
  return longestGap;
}

function calculateDifference(startTime, endTime) {
  let start = startTime.split(':');
  let end = endTime.split(':');
  let startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
  let endMinutes;
  if (parseInt(start[0]) <= parseInt(end[0])) {
    endMinutes = parseInt(end[0] * 60) + parseInt(end[1]);
    return endMinutes - startMinutes;
  } else if (parseInt(start[0]) > parseInt(end[0])) {
    startMinutes = (24 * 60) - startMinutes;
    endMinutes = (parseInt(end[0])) * 60 + parseInt(end[1]);
    return startMinutes + endMinutes;
  }
}