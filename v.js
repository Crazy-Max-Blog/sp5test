var mic, recorder, soundFile;
var state = 0;

function setup() {
  background(200);
  // создаем объект p5.AudioIn:
  mic = new p5.AudioIn();

  // начинаем обрабатывать аудиоданные, идущие через микрофон:
  mic.start();

  // создаем объект p5.SoundRecorder для записи звука:
  recorder = new p5.SoundRecorder();

  // подключаем микрофон к объекту для записи звука:
  recorder.setInput(mic);

  // этот объект p5.SoundFile будет использоваться
  // для проигрывания и сохранения записанного звука:
  soundFile = new p5.SoundFile();

  text('keyPress to record', 20, 20);
   //  'нажмите на клавишу, чтобы начать запись'
}

function mousePressed() {
  // убеждаемся, что пользователь включил микрофон: 
  if (state === 0 && mic.enabled) {

    // записываем звук на наш объект p5.SoundFile:
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', 20, 20);
     //  'Запись!'
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // останавливаем запись
    // и отправляем результаты объекту «soundFile»:
    recorder.stop();

    text('Stopped', 20, 20);
     //  'Запись остановлена'
    state++;
  }

  else if (state === 2) {
    soundFile.reload();
    soundFile.play(); // проигрываем результат!
    save(soundFile, 'mySound.wav');
    state++;
  }
}
