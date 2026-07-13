function doGet() {

  return HtmlService
    .createTemplateFromFile("Index")
    .evaluate()
    .setTitle("ARDSYSTEM - Kalkulačný systém");

}

function include(filename){

  return HtmlService
      .createHtmlOutputFromFile(filename)
      .getContent();

}
