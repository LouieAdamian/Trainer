var fs = require('fs');
var watson = require('watson-developer-cloud');
var fs = require('fs');
var visual_recognition = watson.visual_recognition({
  api_key: '290ef006ab8edf8c61fd8bed56fb9c85a103295a',
  version: 'v3',
  version_date: '2016-05-19'
});
// var params = {
//     name: 'position',
//     sit_positive_examples: fs.createReadStream('./training/sitTrainingDataset.zip'),
//     stand_positive_examples: fs.createReadStream('./training/standTrainingDataset.zip')
// };
//
// visual_recognition.createClassifier(params,
// 	function(err, response) {
//    	 if (err)
//       		console.log(err);
//     	 else
//    		console.log(JSON.stringify(response, null, 2));
// });
//  visual_recognition.getClassifier({
// 	classifier_id: 'position_1883125953' },
// 	function(err, response) {
// 	 if (err)
// 		console.log(err);
// 	 else
// 		console.log(JSON.stringify(response, null, 2));
// 	}
// );
// visual_recognition.deleteClassifier({
// 	classifier_id: 'position_1328877135' },
// 	function(err, response) {
// 	 if (err)
// 		console.log(err);
// 	 else
// 		console.log(JSON.stringify(response, null, 2));
// 	}
// );
visual_recognition.listClassifiers({},
	function(err, response) {
	 if (err)
		console.log(err);
	 else
		console.log(JSON.stringify(response, null, 2));
	}
);
