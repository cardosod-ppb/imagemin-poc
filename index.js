
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['images/*.{jpg,png}'], {
	destination: 'build',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
      strip: true,
			quality: [0.3, 0.5]
		})
	]
});

console.log(files);
