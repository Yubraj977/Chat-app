const multer=require('multer')
const upload=multer({
    limits:{
        fileSize:1024*1024*5
    },
    dest:'../uploads',
    
})

const attachmentsMulter=upload.single('attachments')
module.exports={attachmentsMulter}