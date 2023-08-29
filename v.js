var mic, recorder, soundFile;
var state = 0;

function setup() {
  background(200);
  // ������� ������ p5.AudioIn:
  mic = new p5.AudioIn();

  // �������� ������������ �����������, ������ ����� ��������:
  mic.start();

  // ������� ������ p5.SoundRecorder ��� ������ �����:
  recorder = new p5.SoundRecorder();

  // ���������� �������� � ������� ��� ������ �����:
  recorder.setInput(mic);

  // ���� ������ p5.SoundFile ����� ��������������
  // ��� ������������ � ���������� ����������� �����:
  soundFile = new p5.SoundFile();

  text('keyPress to record', 20, 20);
   //  '������� �� �������, ����� ������ ������'
}

function keyPressed() {
  // ����������, ��� ������������ ������� ��������: 
  if (state === 0 && mic.enabled) {

    // ���������� ���� �� ��� ������ p5.SoundFile:
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', 20, 20);
     //  '������!'
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // ������������� ������
    // � ���������� ���������� ������� �soundFile�:
    recorder.stop();

    text('Stopped', 20, 20);
     //  '������ �����������'
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // ����������� ���������!
    save(soundFile, 'mySound.wav');
    state++;
  }
}