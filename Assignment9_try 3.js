class Playlist {
  constructor(artist, year, duration){
    this._artist = artist;
    this._year = year;
    this._duration = duration;
  }
}

  describeMe(){
    console.log('This track is performed by' + this._artist + ' the track was produced in' + this._year + ' and it lasts for ' + this._duration);
  }

class Music extends Playlist {
  constructor(artist, year, duration, songname, album, genre){
    super(artist, year, duration)
    this._songname = songname;
    this._album = album;
    this._genre = genre;
  }
}

class Podcasts extends Playlist {
  constructor(artist, year, duration, podcastname){
    super(artist, year, duration)
    this._podcastname = podcastname
  }
}

class Movies extends Playlist {
  constructor(artist, year, duration, name, rating){
    super(artist, year, duration)
    this._name = name
    this._rating = rating
  }
}

let myfirstSong = new Music("High Valley", "2016", "3:36", "Don't Stop", "Dear Life", "Country Pop");
let mysecondSong = new Music("Dolly Parton", "2014", "3:22", "Home", "Blue Smoke", "Country");
myfirstSong.describeMe();

let myfirstPodcast = new Podcast("Patrick Madrid", "2019", "48:42", "The Patrick Madrid Show");
myfirstPodcast.describeMe();

let myfirstMovie = new Movies("Renée Zellweger", "2006", "1h33m", "Miss Potter", "PG");
myfirstMovie.describeMe();
