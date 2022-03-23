import React, {useState, useEffect}from 'react';
import ImageGallery from 'react-image-gallery';

import './index.scss'

interface SliderProps {
    className: string
    imageName: string
    fileType: string
    category: string
}

interface Provider {
  imgList: string;
}

export const Slider: React.FC<SliderProps> = ({className, imageName, fileType, category}) => {

    const sliderClassName = "slider";
    const [imgList, setImgList] = useState<any[]>([])
    const imagesCount = 3;
    const imageList:any = []

  
    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;
        
        if (img.complete) {
          callback(true);
        } else {
          img.onload = () => {
            callback(true);
          };
          
          img.onerror = () => {
            callback(false);
          };
        }
    }
  
    const pushImages = () => {
        for (let i = 1; i <= imagesCount; i++) {
            checkIfImageExists(`${process.env.PUBLIC_URL}/images/${category}/${imageName.toLocaleLowerCase()}_${i}.${fileType}`, (exists) => {
                if (exists) {
                  console.log('Image exists. ');
                  // setImgList((imgs: any) => [...imgs, imageName]);
                    imageList.push(
                        {
                        original: `${process.env.PUBLIC_URL}/images/${category}/${imageName}_${i}.${fileType}`,
                        originalAlt: `${imageName}_${i}_zdjęcie`,
        
                        },
                    )
                    
                } else {
                    console.error('Image does not exists.')
                }
            });
        }
    };

  useEffect(() => {
    for (let i = 1; i <= imagesCount; i++) {
      checkIfImageExists(`${process.env.PUBLIC_URL}/images/${category}/${imageName}_${i}.${fileType}`, (exists) => {
          if (exists) {
            console.log('Image exists in effect. ');
            setImgList((imgs: any) => [...imgs, `${imageName}_${i}`]);
    
              
          } else {
              console.error('Image does not exists.')
          }
      });
  }
  
  }, [])
  pushImages();
  console.log(imgList)
  console.log(imageList)
  // USAGE
  // checkIfImageExists(`${process.env.PUBLIC_URL}/images/clothes/${imageName}_1.${fileType}`, (exists) => {
  //   if (exists) {
  //     console.log('Image exists. ')
  //   } else {
  //     console.error('Image does not exists.')
  //   }
  // });
    
    
    return (
        <div className={`${className}__slider ${sliderClassName}`} >
        <ImageGallery className={`${sliderClassName}__image`} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={imageList} description={true}/>
          
        </div>
    )
}