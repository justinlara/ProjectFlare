//this can later be changes to create a music list and sound list later if desired.
/** !!!! Sounds can be called by SOUNDS.[id].[functionName](); !!!! **/
		//Eg.  SOUNDS.footstep1.play();

/**	LIST OF ALL SOUNDS
**		MUSICS:
**			music1: "spookyMusic"
**
**
**
**		SFX:
**			SFXFOOTSTEP : "footstep"
**			SFXGRUNT# (EG. SFXGRUNT1) : "grunt" + #(1-7)
**			SFXSNARL# (EG. SFXSNARL1) : "snarl" + #(1-3)
**/

function Soundloader() {
	var musicpath = './assets/sound/Music/';
	var sfxpath = './assets/sound/SFX/';
	
	/* Ease of play methods*/
	
	this.randint = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	this.playRandomGrunt = function() {
		soundManager.play("grunt" + SOUNDS.randint(1,7));
	}
	
	this.playRandomSnarl = function() {
		soundManager.play("snarl" + SOUNDS.randint(1,3));
	}
	
	this.playRandomFootstep = function() {
		if(	soundManager.getSoundById('footstep1').playState == 0 &&
			soundManager.getSoundById('footstep2').playState == 0 &&
			soundManager.getSoundById('footstep3').playState == 0 )
		{
			soundManager.play("footstep" + SOUNDS.randint(1,3));
		}
	}
	
	this.playAtRandomChance = function(functionToPlay){
		if(this.randint(0,10000) >= (9998)){
			functionToPlay();
		}
	}
	
	/* Music Start */
	
	this.music1 = soundManager.createSound({
                 id: 'spookyMusic',
                 url: musicpath + 'spookyMusic.mp3',
                 autoLoad: true,
                 autoPlay: true, //  turn on/off music for debugging 
                 stream: true,
				 volume: 50
    });
	
	/* Sound Start */
	
		//lamp lighting
	this.SFXLAMPLIGHT = soundManager.createSound({
				id: 'lamplight',
				url: sfxpath + 'lightinglampv2.wav',
				autoLoad: true,
				stream: true
	});
	
		//footsteps
	this.SFXFOOTSTEP1 = soundManager.createSound({
				id: 'footstep1',
				url: sfxpath + 'footstepsOnWood.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(20, 70));}
	});
	
	this.SFXFOOTSTEP2 = soundManager.createSound({
				id: 'footstep2',
				url: sfxpath + 'footstepsOnWood(softer).wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(15, 60));}
	});
	
	this.SFXFOOTSTEP3 = soundManager.createSound({
				id: 'footstep3',
				url: sfxpath + 'footstepsOnWood(hollow).wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(10, 75));}
	});
	
		//grunts
	this.SFXGRUNT1 = soundManager.createSound({
				id: 'grunt1',
				url: sfxpath + 'grunt1.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT2 = soundManager.createSound({
				id: 'grunt2',
				url: sfxpath + 'grunt2.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT3 = soundManager.createSound({
				id: 'grunt3',
				url: sfxpath + 'grunt3.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT4 = soundManager.createSound({
				id: 'grunt4',
				url: sfxpath + 'hardGrunt1.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT5 = soundManager.createSound({
				id: 'grunt5',
				url: sfxpath + 'hardGrunt2.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT6 = soundManager.createSound({
				id: 'grunt6',
				url: sfxpath + 'hardGrunt3.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
	this.SFXGRUNT7 = soundManager.createSound({
				id: 'grunt7',
				url: sfxpath + 'hardGrunt4.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(30, 70));}
	});
	
		//snarls
	this.SFXSNARL1 = soundManager.createSound({
				id: 'snarl1',
				url: sfxpath + 'snarl1.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(5, 70));}
	});
	
	this.SFXSNARL2 = soundManager.createSound({
				id: 'snarl2',
				url: sfxpath + 'snarl2.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(5, 70));}
	});
	
	this.SFXSNARL3 = soundManager.createSound({
				id: 'snarl3',
				url: sfxpath + 'snarl3.wav',
				autoLoad: true,
				multishot: true,
				stream: true,
				onplay: function () {this.setVolume(SOUNDS.randint(5, 70));}
	});
}