import "./newProduct.css";
import { useState } from "react";
import storage from "../../firebase";



export default function NewProduct() {

  //we wont create each useState for each input other wise it will be very long and messy
  //instead we will use  1 for all text input and other each for file and photo

  //CREATING NEW MOVIE==============================================>
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)

  const [uploaded, setUploaded] = useState(0)//how many file uploaded at begining it is zero at begining




  //for text---------------------
  const handleChange = (e) => {
    const value = e.target.value
    setMovie({ ...movie, [e.target.name]: value })
  }
  // console.log(img)


  const upload = (items) => {
    items.forEach(item => {
      const uploadTask = storage.ref(`/items/${item.file.name}`).put(item)
      uploadTask.on("state_changes", snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log("upload is" + progress + "% done");
      }, error => {
        console.log(error)
      }
        , () => {
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            setMovie(prev => ({ ...prev, [item.label]: url }))
          }
          )
          setUploaded(prev => prev + 1)

        }
      )
    })
  }



  const handleUpload = (e) => {
    e.preventDefault()
    upload([
      { file: img, label: img },
      { file: imgTitle, label: imgTitle },
      { file: imgSm, label: imgSm },
      { file: trailer, label: trailer },
      { file: video, label: video },
    ])


  }













  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add New Movie</h1>


      <form className="addProductForm">

        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={e => setImg(e.target.files[0])} />
        </div>

        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={e => setImgTitle(e.target.files[0])} />
        </div>


        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={e => setImgSm(e.target.files[0])} />
        </div>



        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" id="trailer" name="trailer" onChange={e => setTrailer(e.target.files[0])} />
        </div>


        <div className="addProductItem">
          <label>Video</label>
          <input type="file" id="imgSm" name="video" onChange={e => setVideo(e.target.files[0])} />
        </div>


        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
        </div>


        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange} />
        </div>


        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="2022" name="year" onChange={handleChange} />
        </div>

        <div className="addProductItem">
          <label>Genere</label>
          <input type="text" placeholder="comedy" name="genere" onChange={handleChange} />
        </div>

        <div className="addProductItem">
          <label>AgeLimit</label>
          <input type="text" placeholder="+18" name="ageLimit" onChange={handleChange} />
        </div>

        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="2 hour 43 min" name="duration" onChange={handleChange} />
        </div>


        <div className="addProductItem">

          <label>Is Series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>

  
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton">Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload} >Upload</button>
        )
        }




      </form>
    </div>
  );
}
