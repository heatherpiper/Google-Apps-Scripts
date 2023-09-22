// This script will copy the hex string values from one column and then set the background color of the adjacent cells to the corresponding hex value. A dialog box will prompt you for the range of cells that contain the hex codes.

function setAdjacentBackgroundColors() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();

  var result = ui.prompt('Enter the range of cells that contain hex values. NOTE: Cells must be within the same column.');
  var rangeInput = result.getResponseText();

  if (rangeInput === "") {
    ui.alert('Please enter a valid range.');
    return;
  }

  var colorCodesRange = sheet.getRange(rangeInput);
  
  var startingRow = colorCodesRange.getRow();
  var startingCol = colorCodesRange.getColumn();
  var colorCodes = colorCodesRange.getValues();

  for (var i = 0; i < colorCodes.length; i++) {
    var colorCode = colorCodes[i][0];

    if (isHex(colorCode)) {
      var targetRow = startingRow + i;
      var targetCol = startingCol + 1;

      sheet.getRange(targetRow, targetCol).setBackground(colorCode);
    }
  }
}

function isHex(str) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
}