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
                 autoPlay: true, //  turn on/off music for debugging 
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
	
	this.SFXGRUNT1 = soundManager.createSound({
				id: 'grunt1',
				url: sfxpath + 'grunt1.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNT2 = soundManager.createSound({
				id: 'grunt2',
				url: sfxpath + 'grunt2.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNT3 = soundManager.createSound({
				id: 'grunt3',
				url: sfxpath + 'grunt3.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNTHARD1 = soundManager.createSound({
				id: 'grunt4',
				url: sfxpath + 'hardGrunt1.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNTHARD2 = soundManager.createSound({
				id: 'grunt5',
				url: sfxpath + 'hardGrunt2.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNTHARD3 = soundManager.createSound({
				id: 'grunt6',
				url: sfxpath + 'hardGrunt3.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.SFXGRUNTHARD4 = soundManager.createSound({
				id: 'grunt7',
				url: sfxpath + 'hardGrunt4.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(Math.random()*(70-30+1)+30);}
	});
	
	this.playRandomGrunt = function() {
		soundManager.play("grunt" + Math.floor((Math.random()*7)+1));
	}
}