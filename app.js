const camera = require('ember-webcam');
const fs = require('fs');
const exec = require('child_process').exec;
const watson = require('watson-developer-cloud');
const visual_recognition = watson.visual_recognition({
    api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
    version: 'v3',
    version_date: '2016-05-20'
});
takePhoto();
function classify() {

    var img = {
        images_file: fs.createReadStream('./dog2.jpg'),
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
            //fs.unlink('dog.png')
        }
    });
}


function takePhoto() {
try{
  camera.snap()

}
catch{
  console.log("No img captured!");
}
