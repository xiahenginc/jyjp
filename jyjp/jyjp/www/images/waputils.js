/* suning.com 1428676300387 */function wapFormatURL(a){return a=hasAndRepalceSpecialCharater(a,/\%/g,"%25"),a=hasAndRepalceSpecialCharater(a,/\+/g,"%2B"),a=hasAndRepalceSpecialCharater(a,/\#/g,"%23"),a=hasAndRepalceSpecialCharater(a,/\&/g,"%26"),a=hasAndRepalceSpecialCharater(a,/\?/g,"%3F"),a=hasAndRepalceSpecialCharater(a,/\ /g,"%20"),a=hasAndRepalceSpecialCharater(a,/\//g,"%2F")}function hasAndRepalceSpecialCharater(a,e,r){return e.test(a)?a.replace(e,r):a}function trim(a){var e=/(^\s*)|(\s*$)/g;return e.test(a)?a.replace(e,""):a}