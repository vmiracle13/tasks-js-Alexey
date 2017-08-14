/**
 * Created by Victoria on 12.08.2017.
 */
/*
 ** .Для заданного времени посчитать угол между стрелками часов
 */

//The angle is calculated between minute and hourly arrows as nothing about it was not written in the task

console.log("Please, enter the time in the format 00:00 or 00.00");

let calcAngle = (time) => {
  if (typeof time != "string" || !time.length || !time.trim().length) {
    return "Please, enter the formatted time.";
  }

  return (+time.split(/[:\.]/)[0] > 12) ? Math.abs((time.split(/[:\.]/)[0] - 12) * 30 - time.split(/[:\.]/)[1] * 6) :
    Math.abs(time.split(/[:\.]/)[0] * 30 - time.split(/[:\.]/)[1] * 6);
};

console.log(calcAngle("00:16"));
