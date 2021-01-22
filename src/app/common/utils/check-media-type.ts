export class CheckMediaType {

    public static check(filename) {
        let mediaType = '';
        console.log('type file : ', filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename);
        const typefile: String = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
        switch (typefile.toLowerCase()) {
            case 'png':
                mediaType = 'image';
                console.log('mediaType :', mediaType);
                break;
            case 'jpg':
                mediaType = 'image';
                console.log('mediaType :', mediaType);
                break;
            case 'jpeg':
                mediaType = 'image';
                console.log('mediaType :', mediaType);
                break;
            case 'mp4':
                console.log('mediaType :', mediaType);
                mediaType = 'video';
                break;
            default:

        }
        return mediaType;
    }

}
