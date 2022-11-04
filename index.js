const Jimp = require('jimp') ;
const originFolder = './flipImage/';
const fs = require('fs');

fs.readdirSync(originFolder).forEach(file => {
    flip(file);
    
});

async function flip(imageName) {
   //Reading Image
   // const image = await Jimp.read
   // ('./originImage/' + imageName);
   // image.flip(true, false, function(err){
   //    if (err) throw err;
   // })
   // .write('./flipImage/' + imageName);
   crop('./flipImage/' + imageName, imageName)
  
}

async function crop(link, name) {
   // Read the image.
   const image = await Jimp.read(link);
   await image.resize(245.8, 114.5);
   // Save and overwrite the image
   await image.writeAsync(`final/${name}`);

   crop2('./final/' + name, name)
 }

 async function crop2(link, imageName) {
   // Read the image.
   const image = await Jimp.read(link);
   await image.crop(20, 20, 225.8, 94.5);
   // Save and overwrite the image
   await image.writeAsync(`final2/${imageName}`);
   console.log(imageName)
 }
// flip();
// console.log("Image is processed successfully");