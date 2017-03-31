var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
  version: 'v3',
  version_date: '2016-05-20'
});

var params = {
  classifier_ids: 'position_185473635',
  images_file: fs.createReadStream('./dog.jpg')
};

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
