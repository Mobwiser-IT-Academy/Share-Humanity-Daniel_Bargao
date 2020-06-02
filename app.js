const gridItems = [

  {
    id: 'covid',
    Issues: 'Covid-19',
    NumberOfAfectedPeople: '3 Milion',
    PriorityRank: 'High',
    BriefDescription: 'The virus that is making the hole world quarantine because there is no vaccine',
  },

  {
    id: 'shortage',
    Issues: 'Shortage of Goods',
    NumberOfAfectedPeople: '7.6 Bilion',
    PriorityRank: 'Medium',
    BriefDescription: 'People tend to buy things on impulse and now that has more impact than ever',
  },

  {
    id: 'mental',
    Issues: 'Mental Health',
    NumberOfAfectedPeople: 'Not defined',
    PriorityRank: 'Low',
    BriefDescription: `Because we are quarantined and can't go out a lot of people are having mental health issues`,
  },

  {
    id: 'pollution',
    Issues: 'Pollution',
    NumberOfAfectedPeople: '7.6 Bilion',
    PriorityRank: 'Low',
    BriefDescription: 'Pollution is a global issue that is really important in today society but is way less of an issue due to global quarantine',
  },

]

const grid = document.querySelector("#flex-grid");

generateList();
function searchFilter() {
  let input, filter;
  input = document.getElementById('myInput');
  generateList(input);
}

function generateList(searchFilter) {
  for (let i = 0; i < gridItems.length; i++) {
    if (!searchFilter || gridItems[i].Issues.toUpperCase().includes(searchFilter.value.toUpperCase())) {
      grid.innerHTML = ``
      grid.innerHTML += `<div id="grid-items" class="grid-items">
     <div class="grid-${gridItems[i].id}1" id="${gridItems[i].id}">${gridItems[i].Issues}</div>
     <div>${gridItems[i].NumberOfAfectedPeople}</div>
     <div>${gridItems[i].PriorityRank}</div>
     <div>${gridItems[i].BriefDescription}</div>
     <div><a href="page2.html#${gridItems[i].id}-2"><img src="images/view_details2-2.jpg.png"
     alt="view_details" class="view_details"></div>
   </div>`;
    }
    
  }
}

/*function searchFilter() {
  let input, filter, ul, li, a, i, txtValue, x;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  x = document.getElementById("grid-items");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      x.style.display = "none";
    } else {
      li[i].style.display = "none";
      x.style.display = "flex";
    }
  }
}

function showFunction() {

  let x = document.getElementById("grid-items");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }

}

console.log(grid)*/