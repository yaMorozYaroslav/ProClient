//~ export const convertBase64 = (file) => {
	//~ return new Promise((resolve, reject) => {
		//~ const fileReader = new FileReader()
		//~ fileReader.readAsDataURL(file)
		
		//~ fileReader.onload = () => {
			//~ resolve(fileReader.result)
			//~ }
		//~ fileReader.onerror = (error) => {
			            //~ reject(error)}
		//~ })
	//~ }
import React from "react";
import Resizer from "react-image-file-resizer";
export const convert64 = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
