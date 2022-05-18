// GLOBALS
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let storeCollection=[];
let salesElem=document.getElementById('salesInformation');
let tableToAppendTo=document.getElementById('salesTable');


// HELPER FUNCTIONS
function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getCookieSalesPerHour(min,max,avg,hours){
  let hourlyCookieSales=[];
  for(let i=0;i<hours.length;i++){
    hourlyCookieSales.push(Math.floor(randomNumber(min,max)*avg));        
  }
  return hourlyCookieSales;
}

function getTotalCookieSales(hourlySales){
  let total=0;
  for (let i=0;i<hourlySales.length;i++){
    total+=hourlySales[i];
  }
  return total;
}

function setTableHeader(){
  let headerRow = document.createElement('tr');
  tableToAppendTo.appendChild(headerRow);
  let celltoAppend = document.createElement('th');
  headerRow.appendChild(celltoAppend);
  celltoAppend.textContent='Store Locations';
  for (let i=0; i<hours.length;i++){
    celltoAppend = document.createElement('th');
    headerRow.appendChild(celltoAppend);
    celltoAppend.textContent=hours[i];
  } 
  celltoAppend = document.createElement('th');
  headerRow.appendChild(celltoAppend);
  celltoAppend.textContent='Store Daily Total Sales';
}

function setTableFooter(){
  let hourlySalesCombined=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let footerRow = document.createElement('tr');
  tableToAppendTo.appendChild(footerRow);
  let celltoAppend = document.createElement('th');
  footerRow.appendChild(celltoAppend);
  celltoAppend.textContent="Totals";

  for (let i=0;i<storeCollection.length;i++){
    for (let j=0;j<hours.length;j++){
      hourlySalesCombined[j]= parseInt(hourlySalesCombined[j])+ parseInt(storeCollection[i].cookiesSalesPerHour[j]);
      console.log(hourlySalesCombined[j]);
      console.log(storeCollection[i].cookiesSalesPerHour[j]);
    }
  } 
  for (let k=0;k<hourlySalesCombined.length;k++){
      celltoAppend = document.createElement('th');
      footerRow.appendChild(celltoAppend);
      celltoAppend.textContent=hourlySalesCombined[k];
      console.log ("Cell content:" +hourlySalesCombined[k]);
  }
  celltoAppend = document.createElement('th');
  footerRow.appendChild(celltoAppend);
  celltoAppend.textContent=getTotalCookieSales(hourlySalesCombined);
}

// OBJECT CONSTRUCTOR
function Store(name,minCustPerHour,maxCustPerHour,avgCookiesPerCust){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesSalesPerHour = getCookieSalesPerHour(minCustPerHour,maxCustPerHour,avgCookiesPerCust,hours);
  this.cookiesSoldTotal = getTotalCookieSales(this.cookiesSalesPerHour);
  storeCollection.push(this);
}
// METHODS
Store.prototype.render = function (){
  let storeRow = document.createElement('tr');
  tableToAppendTo.appendChild(storeRow);
  let celltoAppend = document.createElement('th');
  storeRow.appendChild(celltoAppend);
  celltoAppend.textContent=this.name;

  for (let i=0;i<this.cookiesSalesPerHour.length;i++){
    celltoAppend = document.createElement('td');
    celltoAppend.textContent = this.cookiesSalesPerHour[i];
    storeRow.appendChild(celltoAppend);
  }  
  celltoAppend = document.createElement('th');
  celltoAppend.textContent = this.cookiesSoldTotal;
  storeRow.appendChild(celltoAppend);
}


function inititalizeStoreCollection(){
  // let storeNamesArr=[];
  // for (let i=0;i<storeCollection.length;i++){  
  //   storeNamesArr[i] = new Store(...storeCollection[i]);
  //   console.log(storeCollection[i][0]);
  //   }
  Seattle= new Store('Seattle',23,65,6.3);
  Tokyo= new Store('Tokyo',3,24,1.2);
  Dubai= new Store('Dubai',11,38,3.7);
  Paris= new Store('Paris',20,38,2.3);
  Lima= new Store('Lima',2,16,4.6);

}

function renderStoreCollection(){
  for(let i=0;i<storeCollection.length;i++){
    storeCollection[i].render();
  }
}

setTableHeader();
inititalizeStoreCollection();
renderStoreCollection();
console.log(storeCollection);
console.log(hours.length);
setTableFooter();
