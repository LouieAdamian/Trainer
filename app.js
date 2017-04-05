const Gpio = require('pigpio').Gpio,
    PIR = new Gpio(10,{
        mode: Gpio.INPUT,
        edge: Gpio.RISING
    });
const player = require('play-sound')(opts = {});
const fs = require('fs');
const exec = require('child_process').exec;
const watson = require('watson-developer-cloud');
const visual_recognition = watson.visual_recognition({
    api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
    version: 'v3',
    version_date: '2016-05-20'
});
var dog, pos_res, sessionLength, numTricks, i, dutyCycle;
i = 0;
PIR.on('interrupt', function(level){
  dog = true
});
numTricks = 0;
mPWM = new Gpio(11, {
    mode: Gpio.OUTPUT,
});
mA = new Gpio(12, {
    mode: Gpio.OUTPUT,
});
mB = new Gpio(12, {
    mode: Gpio.OUTPUT,
});
function session() {
    while (dog) {
        for (i <= sessionLength; i++;) {
            var trick = math.random(0, numTricks)
            if (trick = 0) {
                sit();
            } else if (trick = 1) {
                down();
            }
        }
    }
}

function sit() {
    player.play('sit.mp3', function(err) {
        if (err) throw err
    })
    takePhoto();
    if (position = "sit") {
        mPWM.pwmWrite(dutyCycle);
        mB.pwmWrite(HIGH);
        mB.pwmWrite(LOW);
            player.play('good-job.mp3', function(err) {
                if (err) throw err
            })
    }
    position = null;
}

function down() {
    player.play('down.mp3', function(err) {
        if (err) throw err
    })
    takePhoto();
    if (position = "down") {
      mPWM.pwmWrite(dutyCycle);
      mB.pwmWrite(HIGH);
      mB.pwmWrite(LOW);
        player.play('good-job.mp3', function(err) {
            if (err) throw err
        })
    }
    position = null;
}
takePhoto();

function takePhoto() {
    exec("sudo fswebcam -r 640*480 --no-banner dog.jpg", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        classify();
    });
}

function classify() {
    var img = {
        images_file: fs.createReadStream('./dog.jpg'),
        classifier_ids: 'position_185473635'
    }
    visual_recognition.classify(img, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            pos_res = res;
            console.log(JSON.stringify(pos_res, null, 2))
            position = pos_res.images[0].classifiers[0].classes[0].class;
            console.log(position);
            err = pos_res.images[0].error[0].description
            console.log(err);
        }
    });
}
