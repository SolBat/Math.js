/**
 * @copyright Annextele.com DevTeam
 * @author SolBat.org
 * @description Math extends function
 * */

/**
 * @description 기본료 + 부가세
 * @param x: number
 * */
Math.vat = function (x) { return (x * 1.1).toFixed(0); };

/**
 * @description 부가세 출력
 * @param x: number
 * */
Math.surtax = function (x) { return ((x * 1.1) - x).toFixed(0); };

/**
 * @description 균등상환 계산
 * @param x: principal, y: installment
 * @return month, total
 * */
Math.emi = function (x, y) {
  var obj = {};
  var eja = 0.059 / 12;
  var tempOne = (x * eja) * Math.pow((1 + eja), y);
  var tempTwo = Math.pow((1 + eja), y) - 1;
  obj.month = Math.round(tempOne / tempTwo);
  if (obj.month === Infinity || isNaN(obj.month)) { obj.month = 0; }
  obj.total = (obj.month * y) - x;
  if (obj.total <= 0) { obj.total = 0; }
  return obj;
};

/**
* @description 제휴카드 추가할인 계산
**/
Math.alliance = function (x, y) {
  var result = Math.abs(x) - Math.abs(y);
  return result < 0 ? '0' : result;
}



/**
 * @description x + y
 * @param x: number, y:number
 * */
Math.plus = function (x, y) { return parseInt(x) + parseInt(y); };

/**
 * @description x - y
 * @param x: number , y: number
 * */
Math.minus = function (x, y) {
  var result = x - y;
  return result >= 0 ? result : 0;
}