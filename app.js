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
  grid.innerHTML = `<div class="grid-titles">
    <div class="grid-title1">Issues</div>
    <div class="grid-title2">Number of Afected People</div>
    <div class="grid-title3">Priority Rank</div>
    <div class="grid-title4">Brief Description</div>
    <div class="grid-title5"></div>
  </div>
</div>`

  for (let i = 0; i < gridItems.length; i++) {
    if (!searchFilter || gridItems[i].Issues.toUpperCase().includes(searchFilter.value.toUpperCase())) {
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