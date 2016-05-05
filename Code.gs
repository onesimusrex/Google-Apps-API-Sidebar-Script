function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('The Script Is Here - DOC')
    .addItem('Lord and Taylor', 'lt')
    .addItem('Saks Off Fifth', 'sof')
    .addToUi();
  lt();
}

//╭∩╮(Ο_Ο)╭∩╮

function store() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.previous = previous;
  this.next = next;
  this.hasPrevious = hasPrevious;
  this.hasNext = hasNext;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
  this.loadSheet = loadSheet;
  this.faceBook = faceBook;
  //var parseSheetByFloor = parseSheetByFloor;
  
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
function append(element) {
  this.dataStore[this.listSize++] = element;
}
function toString() {
  return this.dataStore;
}
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}
function remove(element){
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;               
  }
  return false;
}
function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize - 1;
}
function previous() {
  return this.dataStore[--this.pos];
}
function next() {
  return this.dataStore[this.pos++];
}
function hasPrevious() {
  if (this.pos > this.listSize-1) {
    
  }
}
function hasNext() {
  if (this.pos > this.listSize-1) {
    return false; 
  }
  else return true;
}
function length() {
  return this.listSize;
}
function currPos() {
  return this.pos;
}
function moveTo(position) {
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element){
      return true;
    }
  }
  return false;
}
function faceBook(){
  for (this.front; this.pos < this.listSize - 1; ++this.pos){
  }
}

function worker(name, number, ptft, tEmployed, pay, location, department,
               email, point, person2, issue, contact, notes, meetings, misc, imageLnk){
  this.name = name;
  this.number = number;
  this.ptft = ptft;
  this.tEmployed = tEmployed;
  this.pay = pay;
  this.location = location;
  this.department = department;
  this.email = email;
  this.point = point;
  this.person2 = person2;
  this.issue = issue;
  this.contact = contact;
  this.notes = notes;
  this.meetings = meetings;
  this.misc = misc;
  this.imageLnk = imageLnk;
}

var store = new store();

function loadSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (row = 1; row  < data.length; ++row){
    var name = data[row][0];
    var number = data[row][1];
    var ptft = data[row][2];
    var tEmployed = data[row][3];
    var pay = data[row][4];
    var location = data[row][5];
    var department = data[row][6];
    var email = data[row][7];
    var point = data[row][8];
    var person2 = data[row][9];
    var issue = data[row][10];
    var contact = data[row][11];
    var notes = data[row][12];
    var meetings = data[row][13];
    var misc = data[row][14];
    var imageLnk = data[row][15];
    store.append(new worker(name, number, ptft, tEmployed, pay, location, department,
               email, point, person2, issue, contact, notes, meetings, misc, imageLnk));
  }
  //store.moveTo(4);
  //SpreadsheetApp.getUi().alert(store.getElement().issue);
  return store;
}

/*
function parseSheetByFloor(){
  for (row = 1; row < this.sheetData.length-1; ++row){
    var pattern = /\d*\/;
    var text = this.sheetData[row][6];
    if (text){
      result = parseInt(pattern.exec(text)) - 1;
      SpreadsheetApp.getUi().alert(this.sheetData[row]);
      if (this.contains(result)){
        
      }
      else this.add(sheetData[row],result);
      SpreadsheetApp.getUi().alert(this.dataStore[result]);

*/
        
     /* if (result>-10){
        this.dataStore[result] = ["re",]
        SpreadsheetApp.getUi().alert(this.dataStore);
        this.dataStore[result].push(this.sheetData[row]);
        SpreadsheetApp.getUi().alert(result);
        SpreadsheetApp.getUi().alert(this.dataStore[result]);
      }  
      
    }
  }
}
*/

/*
function sortByFloor(){
  //SpreadsheetApp.getUi().alert("dataStore");
  for (var row = 1; row < this.sheetData[6].length; ++row) {
    var pattern = /\d*\/;
    var text = this.sheetData[6][row];
    //var text = "test";
    SpreadsheetApp.getUi().alert(text);
    if (text == true) {
      result = pattern.exec(text) - 1;
      if (result == true){
        arr = [];
        for (col = 0; col < this.sheetData.length; ++col) {
          arr.push(this.sheetData[col][row]);
        }
        this.dataStore[1].push(arr);
        SpreadsheetApp.getUi()
          .alert("dataStore");
      }
    }
    //else return false
  }
}
*/


//the sidebar is 300 px wide 
function lt() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var first = ss.getSheetByName("Lord and Taylor");
  first.activate();
  var html = HtmlService.createHtmlOutputFromFile('mapOverlay')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setTitle('Lord and Taylor Targets' );
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  .showSidebar(html);
  //loadSheet();
}

function sof(){
  //var activSheet = SpreadsheetApp.getActiveSheet().getName();
  //SpreadsheetApp.getUi().alert(activSheet);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var first = ss.getSheetByName("OFF Fifth");
  first.activate();
  var html = HtmlService.createHtmlOutputFromFile('mapOverlay')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setTitle('Saks Off Fifth Targets' );
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  .showSidebar(html);
}

/*
function hbc () {
  SpreadsheetApp.getUi()
    .alert('Are You Sure?')
  loadSheet();
  parseSheetByFloor();
}
*/

