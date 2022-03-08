import React from 'react';
import ImageGallery from 'react-image-gallery';
import { isEmptyBindingElement } from 'typescript';

import './index.scss'

interface SliderProps {
    className: string
    imageName: string
    fileType: string
}



export const Slider: React.FC<SliderProps> = ({className, imageName, fileType}) => {

    const sliderClassName = "slider";

    const imagesCount = 3;
    const emptyImage:any = []

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
            checkIfImageExists(`${process.env.PUBLIC_URL}/images/clothes/${imageName}_${i}.${fileType}`, (exists) => {
                if (exists) {
                    console.log('Image exists. ');
                    emptyImage.push(
                        {
                            original: `${process.env.PUBLIC_URL}/images/clothes/${imageName}_${i}.${fileType}`,
                        },
                    )
                    
                } else {
                    console.error('Image does not exists.')
                }
            });
        }
    };

    pushImages();
    console.log(emptyImage)
    
    const images = [
        {
          original: `${process.env.PUBLIC_URL}/images/clothes/${imageName}_1.${fileType}`,
        },
        {
            original: `${process.env.PUBLIC_URL}/images/clothes/${imageName}_2.${fileType}`,
        },
        {
            original: `${process.env.PUBLIC_URL}/images/clothes/${imageName}_3.${fileType}`,
        },
    ];
    
   console.log(images)
  
  
  // USAGE
  checkIfImageExists(`${process.env.PUBLIC_URL}/images/clothes/${imageName}_1.${fileType}`, (exists) => {
    if (exists) {
      console.log('Image exists. ')
    } else {
      console.error('Image does not exists.')
    }
  });
    
    
    return (
        <div className={`${className}__slider ${sliderClassName}`} >
           
            <ImageGallery className={`${sliderClassName}__image`} showThumbnails={false} showFullscreenButton={false} showPlayButton={false }items={emptyImage} />
          
        </div>
    )
}