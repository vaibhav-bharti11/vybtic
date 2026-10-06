/** @OnlyCurrentDoc */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (!data.fullName || !data.organization || !data.notes || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) {
      throw new Error('Required enquiry fields are missing or invalid.');
    }
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    function text(value) {
      var result = String(value || '').slice(0, 6000);
      return /^[=+@-]/.test(result.trimStart()) ? "'" + result : result;
    }
    sheet.appendRow([
      new Date(), text(data.fullName), text(data.email), text(data.phone),
      text(data.organization), text(data.solutionInterest), text(data.deploymentModel),
      text(data.notes), text(data.submittedAt)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput(JSON.stringify({ result: 'error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
