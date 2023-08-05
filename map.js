

  var perak=document.getElementById("perak");
var penang=document.getElementById("penang");
var pahang=document.getElementById("pahang");
var perlis=document.getElementById("perlis");
var kedah=document.getElementById("kedah");
var kelantan=document.getElementById("kelantan");
var kualalumpur=document.getElementById("kualalumpur");
var negerisembilan=document.getElementById("negerisembilan");
var terenggaru=document.getElementById("terenggaru");
var johor=document.getElementById("johor");
var selangor=document.getElementById("selangor");
var melaka=document.getElementById("melaka");
var sabah=document.getElementById("sabah");
var sarawak=document.getElementById("sarawak");

var tip=document.getElementById("tip");

var tbl_info=document.getElementById("tbl_info");
var state=document.getElementById("state");
var flag=document.getElementById("flag");
var coat=document.getElementById("coat");
var container_capital=document.getElementById("container_capital");
var capital=document.getElementById("capital");
var area=document.getElementById("area");
var elevation=document.getElementById("elevation");
var population=document.getElementById("population");
var intro=document.getElementById("intro");
var container_flag=document.getElementById("container_flag");
var container_coat=document.getElementById("container_coat");
var container_area=document.getElementById("container_area");
var container_elevation=document.getElementById("container_elevation");
var container_population=document.getElementById("container_population");

flag.style.width="100px";
coat.style.height="100px";

perak.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Perak";
    flag.src="img/flag_perak.png";
    coat.src="img/coat_perak.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Ipoh";
    area.innerHTML="20,976 km"+"<sup>2</sup>";
    elevation.innerHTML="2,183 m";
    population.innerHTML="2,500,000";
    intro.innerHTML="Perak is a state of Malaysia on the west coast of the Malay Peninsula. Perak has land borders with the Malaysian states of Kedah to the north, Penang to the northwest, Kelantan and Pahang to the east, and Selangor to the south.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
   
})
penang.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Penang";
    flag.src="img/flag_penang.png";
    coat.src="img/coat_penang.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="George Town";
    area.innerHTML="1,048 km"+"<sup>2</sup>";
    elevation.innerHTML="833 m";
    population.innerHTML="1,783,000";
    intro.innerHTML="Penang (Malay: Pulau Pinang) is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai on the Malay Peninsula. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
pahang.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Pahang";
    flag.src="img/flag_pahang.png";
    coat.src="img/coat_pahang.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kuantan";
    area.innerHTML="35,965 km"+"<sup>2</sup>";
    elevation.innerHTML="2,187 m";
    population.innerHTML="1,675,000";
    intro.innerHTML="Pahang  officially Pahang Darul Makmur with the Arabic honorific Darul Makmur is a sultanate and a federal state of Malaysia. It is the third largest Malaysian state by area and ninth largest by population.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
   
})
perlis.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Perlis";
    flag.src="img/flag_perlis.png";
    coat.src="img/coat_perlis.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kangar";
    area.innerHTML="819 km"+"<sup>2</sup>";
    elevation.innerHTML="553 m ";
    population.innerHTML="254,400";
    intro.innerHTML="Perlis, also known by its honorific title Perlis Indera Kayangan, is the smallest state in Malaysia by area and population. Located on the northwest coast of Peninsular Malaysia, it borders the Thai provinces of Satun and Songkhla to the north and the state of Kedah to the south. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
kedah.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Kedah";
    flag.src="img/flag_kedah.png";
    coat.src="img/coat_kedah.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Alor Setar";
    area.innerHTML="9,500 km"+"<sup>2</sup>";
    elevation.innerHTML="1,862 m";
    population.innerHTML="2,071,900";
    intro.innerHTML="Kedah also known by its honorific Darul Aman and historically as Queda,[4] is a state of Malaysia, located in the northwestern part of Peninsular Malaysia. The state covers a total area of over 9,000 km2, and it consists of the mainland and the Langkawi islands. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
kualalumpur.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Kuala Lumpur";
    flag.src="img/flag_kualalumpur.png";
    coat.src="img/coat_kualalumpur.png";
    container_capital.innerHTML="";
    capital.innerHTML="";
    area.innerHTML="243 km"+"<sup>2</sup>";
    elevation.innerHTML="94 m";
    population.innerHTML="1,982,112";
    intro.innerHTML="Kuala Lumpur , officially the Federal Territory of Kuala Lumpur and colloquially referred to as KL, is a federal territory and the ceremonial, legislative and judicial capital city of Malaysia. It is one of the fastest growing cities in Asia and the largest city in Malaysia, covering an area of 243 km"+"<sup>2</sup>.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
selangor.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Selangor";
    flag.src="img/flag_selangor.png";
    coat.src="img/coat_selangor.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Shah Alam";
    area.innerHTML="8,104 km"+"<sup>2</sup>";
    elevation.innerHTML="1,830 m";
    population.innerHTML="6,994,423";
    intro.innerHTML="Selangor  also known by its Arabic honorific Darul Ehsan, is one of the 13 states of Malaysia. It is on the west coast of Peninsular Malaysia and is bordered by Perak to the north, Pahang to the east, Negeri Sembilan to the south and the Strait of Malacca to the west.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
negerisembilan.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Negeri Sembilan";
    flag.src="img/flag_negerisembilan.png";
    coat.src="img/coat_negerisembilan.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Seremban";
    area.innerHTML="6,686 km"+"<sup>2</sup>";
    elevation.innerHTML=" 1,462 m";
    population.innerHTML="1,098,500";
    intro.innerHTML="Negeri Sembilan is a state in Malaysia which lies on the western coast of Peninsular Malaysia. It borders Selangor on the north, Pahang in the east, and Malacca and Johor to the south.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
terenggaru.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Terenggnu";
    flag.src="img/flag_terengganu.png";
    coat.src="img/coat_terengganu.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kuala Terenggnu";
    area.innerHTML="13,035 km"+"<sup>2</sup>";
    elevation.innerHTML="1,519 m";
    population.innerHTML="1,280,000";
    intro.innerHTML="Terengganu , The coastal city of Kuala Terengganu which stands at the mouth of the broad Terengganu River is both the state and royal capital as well as the largest city in Terengganu.There are many islands located close to the coast of Terengganu state. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
   
})
kelantan.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Kelantan";
    flag.src="img/flag_kelantan.png";
    coat.src="img/coat_kelantan.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kota Bharu";
    area.innerHTML="17,100 km"+"<sup>2</sup>";
    elevation.innerHTML="2,181 m";
    population.innerHTML="1,792,501";
    intro.innerHTML="Kelantan  is a state in Malaysia. The capital is Kota Bharu and royal seat is Kubang Kerian. The honorific name of the state is Darul Naim. Kelantan is located in the north-eastern corner of the peninsula.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
johor.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Johor";
    flag.src="img/flag_johor.png";
    coat.src="img/coat_johor.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Johor Bahru";
    area.innerHTML="19,166 km"+"<sup>2</sup>";
    elevation.innerHTML="1,276 m";
    population.innerHTML="4,009,670 ";
    intro.innerHTML="Johor  also spelled as Johore, is a state of Malaysia in the south of the Malay Peninsula. Johor has land borders with the Malaysian states of Pahang to the north and Malacca and Negeri Sembilan to the northwest.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
   
})
melaka.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Melaka";
    flag.src="img/flag_melaka.png";
    container_capital.innerHTML="Capital";
    coat.src="img/coat_melaka.png";
    capital.innerHTML="Melacca City";
    area.innerHTML="1,664 km"+"<sup>2</sup>";
    elevation.innerHTML="503 m ";
    population.innerHTML="932,700";
    intro.innerHTML="Malacca is a state in Malaysia located in the southern region of the Malay Peninsula, next to the Strait of Malacca. Its capital is Malacca City.The state is bordered by Negeri Sembilan to the north and west and Johor to the south. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
  
})
sabah.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Sabah";
    flag.src="img/flag_sabah.png";
    coat.src="img/coat_sabah.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kota Kinabalu";
    area.innerHTML="73,904 km"+"<sup>2</sup>";
    elevation.innerHTML="4,095 m";
    population.innerHTML="3,418,785";
    intro.innerHTML="Sabah is a state of Malaysia located on the northern portion of Borneo, in the region of East Malaysia. Sabah has land borders with the Malaysian state of Sarawak to the southwest. The Federal Territory of Labuan is an island just off the Sabah coast. Sabah shares maritime borders with Vietnam to the west and the Philippines to the north and east. ";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})
sarawak.addEventListener("mouseover",function(){
    tip.innerHTML="";
    state.innerHTML="Sarawak";
    flag.src="img/flag_sarawak.png";
    coat.src="img/coat_sarawak.png";
    container_capital.innerHTML="Capital";
    capital.innerHTML="Kuching";
    area.innerHTML="124,450 km"+"<sup>2</sup>";
    elevation.innerHTML="2,424 m";
    population.innerHTML=" 2,453,000";
    intro.innerHTML="Sarawak is a state of Malaysia. The largest among the 13 states, with an area almost equal to that of Peninsular Malaysia, Sarawak is located in northwest Borneo Island, and is bordered by the state of Sabah to the northeast, Kalimantan to the south, and Brunei in the north.";
    container_flag.innerHTML="Flag";
    container_coat.innerHTML="Coat";
    container_area.innerHTML="Total Area";
    container_elevation.innerHTML="Highest Elevation";
    container_population.innerHTML="Population";
    
})

