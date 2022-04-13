export default function uploadPhoto(filename) {
	if (filename) {
		return new Promise((reject) => {
			reject( Error( filename + ' cannot be processed' ));
		});
	}
}
