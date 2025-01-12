// modules -> 1) name import with alias 2) default import 
import * as calcData from "./calc";

const sum = calcData.add;
const subtract = calcData.subtract;
const multiply = calcData.default;

const result = sum(2, 3);
