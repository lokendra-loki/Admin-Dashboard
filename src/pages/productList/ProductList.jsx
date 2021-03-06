//Movies list page

import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls"





export default function ProductList() {

  //fetching movies and displaying in table
  const { movies, dispatch } = useContext(MovieContext);
  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])
  //-----------------------------------




  //DELETING A MOVIE-------------
  const handleDelete = (id) => {
    deleteMovie(id, dispatch)
    window.location.reload()
  };
  //-----------------------------


  // console.log(movies)

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },


    {
      field: "movie", headerName: "Movie", width: 200, renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },


    { field: "genere", headerName: "Genere", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "ageLimit", headerName: "AgeLimit", width: 130 },
    { field: "isSeries", headerName: "isSeries", width: 130 },




    {
      field: "action", headerName: "Action", width: 130, renderCell: (params) => {
        return (
          <>

            {/* <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link> */}


            {/* passing data to product page  with Links*/}
            <Link to={{pathname:"/product/" + params.row._id,movie:params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>


            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },

  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />

    </div>
  );
}
