const gridItems = [
  
  {
    Issues: 'Covid-19',
    NumberOfAfectedPeople: '3 Milion',
    PriorityRank: 'High',
    BriefDescription: 'The virus that is making the hole world quarantine because there is no vaccine',
    ViewDetails: `<a href="page2.html"><img src="images/view_details2-2.jpg.png" alt="view_details"
    class="view_details"></a>`
  },

  {
    Issues: 'Shortage of Goods',
    NumberOfAfectedPeople: '7.6 Bilion',
    PriorityRank: 'Medium',
    BriefDescription: 'People tend to buy things on impulse and now that has more impact than ever',
    ViewDetails: `<a href="page2.html#Shortage-of-Goods-2"><img src="images/view_details2-2.jpg.png"
    alt="view_details" class="view_details"></a>`
  },

  {
    Issues: 'Mental Health',
    NumberOfAfectedPeople: 'Not defined',
    PriorityRank: 'Low',
    BriefDescription: `Because we are quarantined and can't go out a lot of people are having mental health issues`,
    ViewDetails: `<a href="page2.html#Mental-Health-2"><img src="images/view_details2-2.jpg.png"
    alt="view_details" class="view_details"></a>`
  },

  {
    Issues: 'Pollution',
    NumberOfAfectedPeople: '7.6 Bilion',
    PriorityRank: 'Low',
    BriefDescription: 'Pollution is a global issue that is really important in today society but is way less of an issue due to global quarantine',
    ViewDetails: `<a href="page2.html#Pollution-2"><img src="images/view_details2-2.jpg.png"
    alt="view_details" class="view_details"></a>`
  },

]

const grid = document.querySelector("#flex-gird");

for (let i = 0; i < gridItems.length; i++) {
  grid.innerHTML += `<div id="item" class="item">
     ${gridItems[i].Issues}
     ${gridItems[i].NumberOfAfectedPeople}
     ${gridItems[i].PriorityRank}
     ${gridItems[i].BriefDescription}
     ${gridItems[i].ViewDetails}
   </div>`;
}