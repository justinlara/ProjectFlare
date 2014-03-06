//this can later be changes to create a music list and sound list later if desired.

/**	LIST OF ALL SOUNDS
**		MUSICS:
**			music1: "spookyMusic"
**
**
**
**		SFX:
**			SFX1: "footStep"
**/

function Soundloader() {
	var musicpath = './assets/sound/Music/';
	var sfxpath = './assets/sound/SFX/';
	
	/* Music Start */
	this.music1 = soundManager.createSound({
                 id: 'spookyMusic',
                 url: musicpath + 'spookyMusic.mp3',
                 autoLoad: true,
                 autoPlay: true,
                 stream: true,
                 onfinish: function () {
                     music1.play();
                 }
    });
	
	/* Sound start */
	this.SFX1 = soundManager.createSound({
				id: 'footstep',
				url: sfxpath + 'footstepsOnWood.wav',
				autoLoad: true,
				stream: true,
				multishot: false
	});
}