/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

const upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lower = `abcdefghijklmnopqrstuvwxyz`;
const number = `123456789`;
const GenerateRamdomString = (
  length: number,
  upperCase: boolean,
  lowerCase: boolean,
  numbers: boolean
): string => {
  if (length == 0) return "";
  let str = "";
  if (upperCase) {
    str += upper;
  }
  if (lowerCase) {
    str += lower;
  }
  if (numbers) {
    str += number;
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length));
  }
  return result;
};

export default GenerateRamdomString;
