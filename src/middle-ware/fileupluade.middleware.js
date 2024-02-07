import multer from 'multer';

const storage = multer.diskStorage({
    destination:(res, file ,cb)=>{
        cb(null, './upload/');
    },
    filename:(res, file, cb)=>{
        cb(null, new Date().toISOString() + '_' + file.originalname);
    }
});

export const upload = multer({storage:storage});