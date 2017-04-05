var movieDataBase = [
  {title: "Smurfs: The Lost Village",
  duration : 90,
  actors :[ " Ariel Winter ", " Joe Manganiello ", " Michelle Rodriguez " ],
  director: "Kelly Asbury",
  img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NjgyMTYzM15BMl5BanBnXkFtZTgwMzIxNDc4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  str : "IMDb" ,
  url : "http://www.imdb.com/title/tt2398241/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2750721702&pf_rd_r=1EE3SK38GFTGQNDXBG53&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0"
},
{
  title: "Going in Style",
  duration : 180,
  actors :[" Morgan Freeman ", " Joey King ", " Ann-Margret " ],
  director: "Zach Braff",
  img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5Mzg3NjI4OF5BMl5BanBnXkFtZTgwNzA3Mzg4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  str : "IMDb" ,
  url : "http://www.imdb.com/title/tt2568862/?ref_=nv_sr_1"
},

{
  title: "Colossal ",
  duration : 180,
  actors :[" Dan Stevens ", " Anne Hathaway ", " Jason Sudeikis " ],
  director: "Nacho Vigalondo",
  img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2NTExOTA2MF5BMl5BanBnXkFtZTgwNTMwMjE2MTI@._V1_SY1000_CR0,0,687,1000_AL_.jpg",
  str : "IMDb" ,
  url : "http://www.imdb.com/title/tt4680182/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2750721702&pf_rd_r=0TWW1Z1KRDNFDX7EZ3X0&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t3"
}
];

function showMovies(){
  for(i = 0; i < movieDataBase.length; i++){
    var movie = movieDataBase[i].title +
    "</br> Duration: " + movieDataBase[i].duration + " min" + "</br>"+
    " Actors: " + movieDataBase[i].actors +"</br>"+
     " Director: " + movieDataBase[i].director + "</br>"+
    "<a target=_blank href=" + movieDataBase[i].url + ">" + movieDataBase[i].str + "</a>" +
     "<div id=imgHolder> <img src= "  + movieDataBase[i].img + "> </div>"+ "</br>";
     document.getElementById('movies').innerHTML += movie;
  }
}

console.log(showMovies());
