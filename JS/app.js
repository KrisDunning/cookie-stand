// GLOBALS
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let storeCollection=[];
let salesElem=document.getElementById('salesInformation');
let tableToAppendTo=document.getElementById('salesTable');
let addNewStoreForm=document.getElementById('addNewStore');

// STANDALONE FUNCTIONS
function inititalizeStoreCollection(){
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

function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getCookieSalesPerHour(min,max,avg){
  let hourlyCookieSales=[];
  for(let i=0;i<hours.length;i++){
    hourlyCookieSales.push(Math.ceil(randomNumber(min,max)*avg));        
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
  let hourlySalesCombined=[];
  let footerRow = document.createElement('tr');
  tableToAppendTo.appendChild(footerRow);
  let celltoAppend = document.createElement('th');
  footerRow.appendChild(celltoAppend);
  celltoAppend.textContent="Hourly Combined Totals";
  for (let j=0;j<hours.length;j++){
      let sum=0;
    for (let i=0;i<storeCollection.length;i++){
      sum+= parseInt(storeCollection[i].cookiesSalesPerHour[j]);
      hourlySalesCombined[j]=sum;
    }
  } 
  for (let k=0;k<hourlySalesCombined.length;k++){
    celltoAppend = document.createElement('th');
    footerRow.appendChild(celltoAppend);
    celltoAppend.textContent=hourlySalesCombined[k];
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
  this.cookiesSalesPerHour = getCookieSalesPerHour(minCustPerHour,maxCustPerHour,avgCookiesPerCust);
  this.cookiesSoldTotal = getTotalCookieSales(this.cookiesSalesPerHour);
  storeCollection.push(this);
}
// METHODS
Store.prototype.render = function (){
  let storeRow = document.createElement('tr');
  storeRow.classList.add("data")
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

setTableHeader();
inititalizeStoreCollection();
renderStoreCollection();
setTableFooter();

//+++++++++++ ADD NEW STORE CODE ++++++++++++++++//

function handleSubmit(event){
  event.preventDefault();
  let name=event.target.storeName.value;
  for(let i=0;i<storeCollection.length;i++){
    if (storeCollection[i].name.toLowerCase() === name.toLowerCase()){
      alert("Store Location already exists! Please use a unique store name.");
      return;
    }
  }
  let avgCookiesPerCust=+event.target.avgCookiesPerCust.value;
  let minCustPerHour=+event.target.minCustPerHour.value;
  let maxCustPerHour=+event.target.maxCustPerHour.value;
  let newStore=new Store(name,minCustPerHour,maxCustPerHour,avgCookiesPerCust);
  tableToAppendTo.deleteRow(-1);
  newStore.render();
  setTableFooter();
  addNewStoreForm.reset();
}
addNewStoreForm.addEventListener('submit',handleSubmit);
