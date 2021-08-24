const weddingDestinations = [
  {
    title: "Banjaran Hotsprings Retreat",
    description:
      "The limestone hills, verdant rainforest, rejuvenating hot springs, natural caves, and cascading waterfalls make Banjaran Hotsrpings an amazing place for wedding.",
    activities:
      "Massage at the retreat's spa, hot springs dipping, jungle walk",
    address: "1, Persiaran Lagoon, Sunway 3, 31150 Ipoh, Perak",
    people: 20,
    price: 2000,
  },
  {
    title: "Bayswater KLCC",
    description:
      "Brand new concept Modern Lifestyle Premier event space located in Kuala Lumpur City Center, overseeing an serendipity outdoor covered garden space perfectly for outdoor events such as ROM or Nikah.",
    activities: "Exquisite wines tasting, dancing, indoor sparkular fireworks",
    address: "No 8, Jalan Sejahtera, Kampung Datuk Keramat, 55000 Kuala Lumpur",
    people: 100,
    price: 4700,
  },
  {
    title: "Paradise 101 Pulau Langkawi",
    description:
      "Get married on the beach surrounded by your nearest and dearest with a view so stunning, most can only dream of having for their wedding day!",
    activities: "Love boat, sunset and dinner cruises, parasailing",
    address: "Paradise 101 Langkawi, 07000 Langkawi, Kedah",
    people: 25,
    price: 990,
  },
  {
    title: "Pulau Perhentian",
    description:
      "The resort offers a secluded sandbank surrounded by the vast blue ocean. A rather unique and intimate way to celebrate your lifetime of togetherness with your soul mate.",
    activities: "Scuba diving, snorkeling, jungle trekking",
    address: "Pulau Perhentian Besar, Terengganu – Malaysia 22300",
    people: 25,
    price: 4000,
  },
  {
    title: "Tanjung Rhu Resort",
    description:
      "In every way, a true haven of romance, privacy, and tranquillity on an uninhabited island, a romantic barbecue under the stars, or al fresco fine-dining on the beach.",
    activities: "Water sports, golf, nature walk",
    address: "Tanjung Rhu Resort, 07000 Langkawi, Kedah",
    people: 20,
    price: 3000,
  },
];

var titleList = document.getElementsByClassName("card-title");
var descriptionList = document.getElementsByClassName("card-description");
var activitiesList = document.getElementsByClassName("card-activities");
var addressList = document.getElementsByClassName("card-address");
var peopleList = document.getElementsByClassName("card-people");
var priceList = document.getElementsByClassName("card-price");
for (var i = 0; i < titleList.length; i++) {
  titleList[i].innerHTML = weddingDestinations[i].title;
  descriptionList[i].innerHTML = weddingDestinations[i].description;
  activitiesList[i].innerHTML =
    "Activities: " + weddingDestinations[i].activities;
  addressList[i].innerHTML = weddingDestinations[i].address;
  peopleList[i].innerHTML = weddingDestinations[i].people;
  priceList[i].innerHTML = "RM" + weddingDestinations[i].price;
}

function filterItem() {
  var inputTitle = document.getElementById("inputTitle").value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  var price = parseInt(document.querySelector("#price").value);
  for (var j = 0; j < li.length; j++) {
    if (
      weddingDestinations[j].title.toUpperCase().indexOf(inputTitle) > -1 &&
      weddingDestinations[j].price < price
    ) {
      li[j].style.display = "";
    } else {
      li[j].style.display = "none";
    }
  }
}

document.getElementById("btnPrice").addEventListener("click", filterItem);
