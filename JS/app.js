
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let salesElem=document.getElementById('salesInformation');

function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}


let seattle={
  name: 'Seattle',
  minCust:23,
  maxCust:65,
  avgCookiePerSale:6.3,

  render: function() {
    let saleTable=document.createElement('table');
    salesElem.appendChild(saleTable);
    let row= saleTable.insertRow();
    let col1=row.insertCell(0);
    let col2=row.insertCell(1);
    let col3=row.insertCell(2);
    let col4=row.insertCell(3);
    col1.innerText=this.name;
    col2.innerText='Min. Customer Per Hour';
    col3.innerText='Max. Customer Per Hour';
    col4.innerText="Avg. Cookie Per Sale";
    row=saleTable.insertRow();
    col1=row.insertCell(0);
    col2=row.insertCell(1);
    col3=row.insertCell(2);
    col4=row.insertCell(3);
    col1.innerText=" xxcxxcxcxcx";
    col2.innerText=this.minCust;
    col3.innerText=this.maxCust;
    col4.innerText=this.avgCookiePerSale;
    row=saleTable.insertRow();
    col1=row.insertCell(0);
    col1.innerText=this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale);
    },

    getDailySales: function(min,max,avg){
      let sum=[];
      for(let i=0;i<hours.length;i++){
      sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];        
      }
      return sum;
    }
  }

let Tokyo={
  name:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale:1.2,

  render: function() {
    let saleContainer=document.createElement('article');
    salesElem.appendChild(saleContainer);
    let salesList=document.createElement('ul');
    saleContainer.appendChild(salesList);
    let liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.name;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.minCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.maxCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.avgCookiePerSale;
    let salesArray=[...this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale)];
    let salesString="";
    console.log("Sales Array: ",salesArray);
    for (let i=0;i<salesArray.length-1;i++){
      salesString+=salesArray[i][0]+": "+salesArray[i][1]+ " || ";
    }
    salesString+=salesArray[salesArray.length-1]+ " cookies total";
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=salesString;   
  },

    getDailySales: function(min,max,avg){
      let sum=[];
      let totalSales=0;
      for(let i=0;i<hours.length;i++){
      sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];   
      totalSales+=sum[i][1];     
      }
      sum.push(totalSales);
      return sum;
    }
}

let dubai={
  name: 'Dubai',
  minCust:11,
  maxCust:38,
  avgCookiePerSale:3.7,
  render: function() {
    let saleContainer=document.createElement('article');
    salesElem.appendChild(saleContainer);
    let salesList=document.createElement('ul');
    saleContainer.appendChild(salesList);
    let liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.name;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.minCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.maxCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.avgCookiePerSale;
    let salesArray=[...this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale)];
    let salesString="";
    console.log("Sales Array: ",salesArray);
    for (let i=0;i<salesArray.length;i++){
      salesString+=salesArray[i][0]+": "+salesArray[i][1]+ " || ";
    }
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=salesString;

    },
    getDailySales: function(min,max,avg){
      let sum=[];
      for(let i=0;i<hours.length;i++){
      sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];        
      }
      return sum;
    }
}

let paris={
  name: 'Paris',
  minCust:20,
  maxCust:38,
  avgCookiePerSale:2.3,
  render: function() {
    let saleContainer=document.createElement('article');
    salesElem.appendChild(saleContainer);
    let salesList=document.createElement('ul');
    saleContainer.appendChild(salesList);
    let liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.name;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.minCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.maxCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.avgCookiePerSale;
    let salesArray=[...this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale)];
    let salesString="";
    console.log("Sales Array: ",salesArray);
    for (let i=0;i<salesArray.length;i++){
      salesString+=salesArray[i][0]+": "+salesArray[i][1]+ " cookies|| ";
    }
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=salesString;
    },
    getDailySales: function(min,max,avg){
      let sum=[];
      for(let i=0;i<hours.length;i++){
      sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];        
      }
      return sum;
    }
}

let lima={
  name: 'Lima',
  minCust:2,
  maxCust:16,
  avgCookiePerSale:4.6,
  render: function() {
    let saleContainer=document.createElement('article');
    salesElem.appendChild(saleContainer);
    let salesList=document.createElement('ul');
    saleContainer.appendChild(salesList);
    let liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.name;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.minCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.maxCust;
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=this.avgCookiePerSale;
    let salesArray=[...this.getDailySales(this.minCust,this.maxCust,this.avgCookiePerSale)];
    let salesString="";
    console.log("Sales Array: ",salesArray);
    for (let i=0;i<salesArray.length;i++){
      salesString+=salesArray[i][0]+": "+salesArray[i][1]+ " || ";
    }
    liItem=document.createElement('li');
    salesList.appendChild(liItem);
    liItem.textContent=salesString;
    },
    getDailySales: function(min,max,avg){
      let sum=[];
      for(let i=0;i<hours.length;i++){
      sum[i]=[hours[i],Math.floor(randomNumber(min,max)*avg)];        
      }
      return sum;
    }
}





seattle.render();
Tokyo.render();
dubai.render();
paris.render();
lima.render();