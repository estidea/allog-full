sharp = require('sharp');

module.exports = {
    makeThumbs: function (photos) {
        let photo = photos[0];
        let destination = photo.destination;
        //let destination = '../.' + photo.destination;
        let filename = photo.filename;
        let url = destination + '/' + filename;
        let sizePx = [1280,640,320];
        let sizeNm = ['-l','-m','-s'];
        makeThumb = function(url, sizePx, sizeNm) {
            let extension = url.substr(-4,4);
            let filename = url.substr(0, url.length-4);
            sharp(url)
                .resize(sizePx)
                .toFile(filename + sizeNm + extension, (err, info) => {
                    if (err) console.log(err) 
                    else console.log(info);
                });
            return filename.substr(2) + sizeNm + extension; 
        }

        function makeAllThumbs() {
            let pathToThumbs = [];
            for (let i=0;i<sizePx.length;i++) {
                let newPath = makeThumb(url, sizePx[i], sizeNm[i]);
                pathToThumbs.push(newPath);
            }
            return pathToThumbs;
        }

        let thumbs = makeAllThumbs();
        photo.thumbs = thumbs;
        return photo;
    }
}
