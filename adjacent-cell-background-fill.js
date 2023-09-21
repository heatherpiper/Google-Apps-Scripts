// This script will copy the hex string values in a given column and then change the background fill of the adjacent cell to match that value. Replace or modify the cell range and column number to suit your needs.

function onEdit() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var colorCodes = sheet.getRange("C1:C247").getValues();

  for (var i = 0; i < colorCodes.length; i++) {
    var colorCode = colorCodes[i][0];

    if (isHex(colorCode)) {
      sheet.getRange(i + 1, 4).setBackground(colorCode);
    }
  }
}

function isHex(str) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
}