import React from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function Home() {


  return (
    <div className="home_pic">
      <h1 className="home_text">Dreams behind the camera <PhotoCameraIcon className="big"/></h1>
      <img className="home_pic" src="/pics/city/3.jpg"></img>
    </div>
  )
}

export default Home;
