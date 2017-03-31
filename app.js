var NodeWebcam = require("node-webcam");
var fs = require('fs');
var watson = require('watson-developer-cloud');
var visual_recognition = watson.visual_recognition({
    api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
    version: 'v3',
    version_date: '2016-05-20'
});
var pos_res;
var opts = {
    width: [Number, 1920],
    height: [Number, 1080],
    delay: [Number, 0],

    quality: [Number, 100],

    output: [String, "jpeg"],

    verbose: [Boolean, true],

    help: [Boolean, false],

    version: [Boolean, false],
    location: "./dog.jpg"

}
var Webcam = NodeWebcam.create(opts);

if (true) {
  Webcam.capture("dog.jpg");

    var img = {
        images_file: fs.createReadStream('./dog.jpg'),
        classifier_ids: 'position_185473635'
    }
    visual_recognition.classify(img, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            //console.log(JSON.stringify(res, null, 2));
            pos_res = res;

            console.log(JSON.stringify(pos_res, null, 2))

            position = pos_res.images[0].classifiers[0].classes[0].class;
            var obj = res;
            console.log(position);

        }
    });
}
