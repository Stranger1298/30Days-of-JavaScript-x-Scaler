function getFileExtension(filename){
    const ext=filename.slice(filename.lastIndexOf('.')+0);
    console.log(ext);
}
const filename='temp.js';
getFileExtension(filename);
