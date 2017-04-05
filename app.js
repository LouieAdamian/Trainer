const fs = require('fs');
const exec = require('child_process').exec;
var pos_res;
const watson = require('watson-developer-cloud');
const visual_recognition = watson.visual_recognition({
    api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
    version: 'v3',
    version_date: '2016-05-20'
});
takePhoto();

function takePhoto() {

  exec("sudo fswebcam -r 640*480 --no-banner dog.jpg", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  classify();
});
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
