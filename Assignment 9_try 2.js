class Playlist {
  constructor(music, podcasts, movies){
    this._music = music;
    this._podcasts = podcasts;
    this._movies = movies;
  }
}
  describeMe(){
    console.log('I am playing ' + this._music + ' and I have ' + this._podcasts + ' plus ' + this._movies);
    <div id="audio-buttons">
      <button id="prev"></button>
      <button id="play"></button>
      <button id="pause"></button>
      <button id="stop"></button>
      <button id="next"></button>
    </div>
  }

class Podcasts extends Playlist {
  constructor(music, podcasts, movies){
    super(music, podcasts, movies)
  }
}

class Movies extends Playlist {
  constructor(music, podcasts, movies){
    super(music, podcasts, movies)
  }
}

let myMusic = new music("songs", 12);
mySongs.describeMe();

let myPodcasts = new podcasts("radio", 5);
myRadio.describeMe();

let myMovies = new movies("shows", 8);
myShows.describeMe();
