import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";



export default function Home() {

  //Making graph according to new user 
  const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], [])

  const [userStats, setUserStats] = useState([])
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
          }
        })
        // console.log(res)

        //mongo db ma manually data add garda array order ma hudaina so sort garey ko
        //naturally data add garda order ma nai hunxa
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        })

        statsList.map((item) => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]))
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  }, [MONTHS])
  // console.log(userStats)



  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
