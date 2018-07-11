function base64_encode(file) {
	const fs = require('fs');
	const contents = fs.readFileSync(file);
	fs.writeFileSync(file + '.base64', new Buffer(contents).toString('base64'));
	console.log('Done');
}

if (process.argv[2]) {
	base64_encode(process.argv[2]);
}
