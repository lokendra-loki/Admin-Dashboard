import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom";


export default function Product() {
    //here we can fetch particular movie ko data from id also but lets use shortcut
    //i.e lets get data from product list because we fetch all movie in product list.lets get from there
    //we will use links from productList
    const location = useLocation()
    const movie = location.movie
    //------------------------------



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/createNewMovie">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">

                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>


                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id} </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genere:</span>
                            <span className="productInfoValue"> {movie.genere}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue"> {movie.year}</span>
                        </div>



                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">


                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />


                        <label>Year</label>
                        <input type="number" placeholder={movie.year} />



                        <label>Genere</label>
                        <input type="number" placeholder={movie.genere} />


                        <label>Description</label>
                        <input type="number" placeholder={movie.desc} />


                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />

                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />


                    </div>
                    
                    <div className="productFormRight">
                        <div className="productUpload">
                           
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                                
                            </label>
                          <span>select photo</span>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                       
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
