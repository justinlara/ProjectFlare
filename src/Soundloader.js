//this can later be changes to create a music list and sound list later if desired.

/**	LIST OF ALL SOUNDS
**		MUSICS:
**			music1: "spookyMusic"
**
**
**
**/

function Soundloader() {
	this.music1 = soundManager.createSound({
                 id: 'spookyMusic',
                 url: './assets/spookyMusic.mp3',
                 autoLoad: true,
                 autoPlay: true,
                 stream: true,
                 onfinish: function () {
                     music1.play();
                 }
    });
			 
}