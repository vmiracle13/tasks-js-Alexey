/**
 * Created by kml_c_14 on 2017-08-04.
 */

var base1, base2, height;

var p = base1 + base2 + 2 * Math.sqrt( Math.pow(height, 2) + Math.pow( Math.abs((base2 - base1)/2), 2) );

roundedResult = ( Math.round(p * 100) )/ 100;