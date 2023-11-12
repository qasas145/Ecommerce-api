const cloudinary = require("cloudinary").v2;
          
cloudinary.config({ 
  cloud_name: 'dmvnliwmg', 
  api_key: '641152432648966', 
  api_secret: 'DG-li1Fse82KrlursxYtbgyfDi4' 
});

const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve, reject) => {

      cloudinary.uploader.upload(fileToUploads, {public_id : ""})
      .then((res)=>{
        resolve(
          {
            url: res.secure_url,
            asset_id: res.asset_id,
            public_id: res.public_id,
          },
          {
            resource_type: "auto",
          }
        )
      }).catch((e)=>{
        reject(e);
      });
      
    });
};
const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
