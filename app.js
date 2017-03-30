var watson = require('watson-developer-cloud');
var visual_recognition = watson.visual_recognition({
    api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
    version: 'v3',
    version_date: '2016-05-20'
});

var img = (
  images_file: fs.createReadStream('./resources/')
)
visual_recognition.classify(img, function(err, res) {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(res, null, 2));
});
