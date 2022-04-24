//NEW JOIN MEMBER WALA BOX
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";



export default function WidgetSm() {

  //Getting newUser from the database and displaying------------>
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {

        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
          }
        });
        setNewUsers(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getNewUsers()
  }, [])
  // console.log(newUsers);
  //--------------------------------------------->





  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {/* newUser map------------- */}
        {newUsers.map((user, key) => (

          <li className="widgetSmListItem" key={key}>
            <img src={user.profilePic || "https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"} alt="" className="widgetSmImg" />

            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username} </span>
              <span className="widgetSmUserTitle">{user.userProfession || "Software Engineer"}</span>
            </div>

            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))
        }
        {/* ------------------------- */}

      </ul>
    </div>
  );
}
