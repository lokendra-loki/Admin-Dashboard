import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";


export default function Home() {

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
        res.data.map((item) => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New Users": item.total }]))

      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  }, [MONTHS])

  console.log(userStats)






  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
