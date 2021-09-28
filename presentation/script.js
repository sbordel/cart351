//variables for OSCILLATOR
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let mainGainNode = null;
let keyboard = document.querySelector(".keyboard");
let volumeControl = document.querySelector("input[name='volume']");
let noteFreq = null;


//variables for AUDIO PLAYER
let audioContext2 = new AudioContext();
let audioElement = document.querySelector('audio');
let track = audioContext2.createMediaElementSource(audioElement);
let playButton = document.querySelector('button');

//variables for AUDIO RECORDER/STREAM PLAYBACK
let recorder, voiceStream;
let recordButton = document.getElementById("recordButton");
recordButton.addEventListener("click", toggleRecording);


/*
** OSCILLATOR: song verse ***
original code taken from https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth
*/
function createNoteTable() {
  let noteFreq = [];
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = [];
  }
  /* give each note its corresponding frequency  */
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.000000000000000;
  noteFreq[1]["A#"] = 58.270470189761239;
  noteFreq[1]["B"] = 61.735412657015513;

  noteFreq[2]["C"] = 65.41;
  noteFreq[2]["C#"] = 69.30;
  noteFreq[2]["D"] = 73.42;
  noteFreq[2]["D#"] = 77.78;
  noteFreq[2]["E"] = 82.41;
  noteFreq[2]["F"] = 87.31;
  noteFreq[2]["F#"] = 92.50;
  noteFreq[2]["G"] = 98.00;
  return noteFreq;
}

function setup() {
  noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume, false);

  mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = volumeControl.value;

  // ** KEYS **
  // each octave is insertedi nto a <div> of class "octave"

  noteFreq.forEach(function (keys, idx) {
    let keyList = Object.entries(keys);
    let octaveElem = document.createElement("div");
    octaveElem.className = "octave";

    keyList.forEach(function (key) {
      if (key[0].length == 1) {
        octaveElem.appendChild(createKey(key[0], idx, key[1]));
      }
    });

    keyboard.appendChild(octaveElem);
  });
  for (i = 0; i < 9; i++) {
    oscList[i] = {};
  }
}

setup();

function createKey(note, octave, freq) {
  let keyElement = document.createElement("div");
  let labelElement = document.createElement("div");

  keyElement.className = "key";
  keyElement.dataset["octave"] = octave;
  keyElement.dataset["note"] = note;
  keyElement.dataset["frequency"] = freq;

  labelElement.innerHTML = note + "<sub>" + octave + "</sub>";
  keyElement.appendChild(labelElement);

  keyElement.addEventListener("mousedown", notePressed, false);
  keyElement.addEventListener("mouseup", noteReleased, false);
  keyElement.addEventListener("mouseover", notePressed, false);
  keyElement.addEventListener("mouseleave", noteReleased, false);

  return keyElement;
}

function playTone(freq) {
  let osc = audioContext.createOscillator();
  osc.connect(mainGainNode);

  osc.type = 'square'; // plays square wave
  osc.frequency.value = freq;
  osc.start();

  return osc;
}

/* Mouse event triggers corresponding keys */
function notePressed(event) {
  if (event.buttons & 1) {
    let dataset = event.target.dataset; OscillatorNode.setPeriodicWave

    if (!dataset["pressed"]) {
      let octave = +dataset["octave"];
      oscList[octave][dataset["note"]] = playTone(dataset["frequency"]);
      dataset["pressed"] = "yes";
    }
  }
}
function noteReleased(event) {
  let dataset = event.target.dataset;

  if (dataset && dataset["pressed"]) {
    let octave = +dataset["octave"];
    oscList[octave][dataset["note"]].stop();
    delete oscList[octave][dataset["note"]];
    delete dataset["pressed"];
  }
}
/* gain control  */
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value
}

// *** AUDIO PLAYER: song chorus ***
track.connect(audioContext2.destination);


playButton.addEventListener('click', function() {
    // checks if context is in suspended state (autoplay policy)
    if (audioContext2.state === 'suspended') {
        audioContext2.resume();
    }
    // play/pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
        audioElement.loop = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
        audioElement.loop = 'false';
    }
}, false);


/*
 *** MICROPHONE (MEDIA RECORDER): vocals ***
original code by Octavian Naicu - taken from https://codepen.io/naicuoctavian/pen/GRgzqBg
*/
function toggleRecording() {
    if (recorder && recorder.state == "recording") {
        recorder.stop();
        voiceStream.getAudioTracks()[0].stop();
    } else {
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(function(stream) {
            voiceStream = stream;
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = function(e) {
                var url = URL.createObjectURL(e.data);
                var preview = document.createElement('audio');
                preview.setAttribute('id', 'audioPlayer');
                preview.controls = true;
                preview.src = url;
                document.getElementById('three').appendChild(preview);
            };
            recorder.start();
        });
    }
}

/*
SOUND EFFECTS
original code by Neil McCallion - taken from https://codepen.io/njmcode/pen/PwvgLv
*/
