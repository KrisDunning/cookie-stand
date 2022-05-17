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

// OBJECT CONSTRUCTOR
function Store(name,minCustPerHour,maxCustPerHour,avgCookiesPerCust){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesSalesPerHour = getCookieSalesPerHour(minCustPerHour,maxCustPerHour,avgCookiesPerCust,hours);
  this.cookiesSoldTotal = getTotalCookieSales(this.cookiesSalesPerHour);
  storeCollection.push(this);
  console.table(this);
}


// METHODS

Store.prototype.render = function (){
  this.addStoreRow();
  
}

Store.prototype.addStoreRow = function(){
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
  celltoAppend = document.createElement('td');
  celltoAppend.textContent = this.cookiesSoldTotal;
  storeRow.appendChild(celltoAppend);
}

setTableHeader();
new Store('Seattle',23,65,6.3);
new Store('Tokyo',3,24,1.2);
new Store('Dubai',11,38,3.7);
new Store('Paris',20,38,2.3);
new Store('Lima',2,16,4.6);
for(let i=0;i<storeCollection.length;i++){
  storeCollection[i].render();
}

//   render: function() {
//     let saleTable=document.createElement('table');
//     salesElem.appendChild(saleTable);
//     let row= saleTable.insertRow();
//     let col1=row.insertCell(0);
//     let col2=row.insertCell(1);
//     let col3=row.insertCell(2);
//     let col4=row.insertCell(3);
//     col1.innerText=this.name;
//     col2.innerText='Min. Customer Per Hour';
//     col3.innerText='Max. Customer Per Hour';
//     col4.innerText="Avg. Cookie Per Sale";
//     row=saleTable.insertRow();
//     col1=row.insertCell(0);
//     col2=row.insertCell(1);
//     col3=row.insertCell(2);
//     col4=row.insertCell(3);
//     col1.innerText=" xxcxxcxcxcx";
//     col2.innerText=this.minCust;
//     col3.innerText=this.maxCust;
//     col4.innerText=this.avgCookiePerSale;
//     row=saleTable.insertRow();
//     col1=row.insertCell(0);
//     col1.innerText=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
//     },

//     getDailySales: function(min,max,avg){
//       let sum=[];
//       for(let i=0;i<hours.length;i++){
//       sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];        
//       }
//       return sum;
//     }
//   }

// let tokyo={
//   name:'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerSale:1.2,
//   cookiesPerHour:0,
//   cookiesTotal:0,

//   render: function() {
//     let saleContainer=document.createElement('article');
//     salesElem.appendChild(saleContainer);
//     let header2 = document.createElement('h2')
//     saleContainer.appendChild(header2);
//     header2.innerText=this.name;
//     let salesList=document.createElement('ul');
//     saleContainer.appendChild(salesList);
//     let salesData=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
//     for (let i=0;i<hours.length;i++){      
//       let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`${salesData[i][0]} : ${salesData[i][1]} cookies `;
//      }
//      let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`Total : ${this.cookiesTotal} cookies`;

//   },

//     getDailySales: function(min,max,avg){
//       let sum=[];
//       let totalSales=0;
//       for(let i=0;i<hours.length;i++){
//       sum.push([hours[i],Math.floor(randomNumber(min,max)*avg)]);   
//       totalSales+=sum[i][1];     
//       }
//       this.cookiesTotal=totalSales;
//       return sum;
//     }
// }

// let dubai={
//   name: 'Dubai',
//   minCust:11,
//   maxCust:38,
//   avgCookiePerSale:3.7,
//   cookiesPerHour:0,
//   cookiesTotal:0,
//   render: function() {
//     let saleContainer=document.createElement('article');
//     salesElem.appendChild(saleContainer);
//     let header2 = document.createElement('h2')
//     saleContainer.appendChild(header2);
//     header2.innerText=this.name;
//     let salesList=document.createElement('ul');
//     saleContainer.appendChild(salesList);
//     let salesData=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
//     for (let i=0;i<hours.length;i++){      
//       let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`${salesData[i][0]} : ${salesData[i][1]} cookies `;
//      }
//      let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`Total : ${this.cookiesTotal} cookies`;

//   },

//     getDailySales: function(min,max,avg){
//       let sum=[];
//       let totalSales=0;
//       for(let i=0;i<hours.length;i++){
//       sum.push([hours[i],Math.floor(randomNumber(min,max)*avg)]);   
//       totalSales+=sum[i][1];     
//       }
//       this.cookiesTotal=totalSales;
//       return sum;
//     }
// }

// let paris={
//   name: 'Paris',
//   minCust:20,
//   maxCust:38,
//   avgCookiePerSale:2.3,
//   cookiesPerHour:0,
//   cookiesTotal:0,
//   render: function() {
//     let saleContainer=document.createElement('article');
//     salesElem.appendChild(saleContainer);
//     let header2 = document.createElement('h2')
//     saleContainer.appendChild(header2);
//     header2.innerText=this.name;
//     let salesList=document.createElement('ul');
//     saleContainer.appendChild(salesList);
//     let salesData=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
//     for (let i=0;i<hours.length;i++){      
//       let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`${salesData[i][0]} : ${salesData[i][1]} cookies `;
//      }
//      let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`Total : ${this.cookiesTotal} cookies`;

//   },

//     getDailySales: function(min,max,avg){
//       let sum=[];
//       let totalSales=0;
//       for(let i=0;i<hours.length;i++){
//       sum.push([hours[i],Math.floor(randomNumber(min,max)*avg)]);   
//       totalSales+=sum[i][1];     
//       }
//       this.cookiesTotal=totalSales;
//       return sum;
//     }
// }

// let lima={
//   name: 'Lima',
//   minCust:2,
//   maxCust:16,
//   avgCookiePerSale:4.6,
//   cookiesPerHour:0,
//   cookiesTotal:0,
//   render: function() {
//     let saleContainer=document.createElement('article');
//     salesElem.appendChild(saleContainer);
//     let header2 = document.createElement('h2')
//     saleContainer.appendChild(header2);
//     header2.innerText=this.name;
//     let salesList=document.createElement('ul');
//     saleContainer.appendChild(salesList);
//     let salesData=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
//     for (let i=0;i<hours.length;i++){      
//       let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`${salesData[i][0]} : ${salesData[i][1]} cookies `;
//      }
//      let liItem=document.createElement('li');
//       salesList.appendChild(liItem);
//       liItem.textContent=`Total : ${this.cookiesTotal} cookies`;

//   },

//     getDailySales: function(min,max,avg){
//       let sum=[];
//       let totalSales=0;
//       for(let i=0;i<hours.length;i++){
//       sum.push([hours[i],Math.floor(randomNumber(min,max)*avg)]);   
//       totalSales+=sum[i][1];     
//       }
//       this.cookiesTotal=totalSales;
//       return sum;
//     }
// }

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();