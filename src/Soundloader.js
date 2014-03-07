//this can later be changes to create a music list and sound list later if desired.
/** !!!! Sounds can be called by SOUNDS.[id].[functionName](); !!!! **/
		//Eg.  SOUNDS.footstep.play();

/**	LIST OF ALL SOUNDS
**		MUSICS:
**			music1: "spookyMusic"
**
**
**
**		SFX:
**			SFX1: "footstep"
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
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
}