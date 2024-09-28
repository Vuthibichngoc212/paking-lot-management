import { Grid } from "@mui/material";
import StatisticalCard from "../StatisticalCard/StatisticalCard";
import accountCard from "../../../../assets/icons/accountCard.png";

const GroupStaticCard = () => {
  const data = [
    {
      title: "Users",
      value: 2,
      icon: accountCard,
    },
    {
      title: "Bookings",
      value: 2,
      icon: accountCard,
    },
    {
      title: "Paking Spaces",
      value: 2,
      icon: accountCard,
      
    },
    {
      title: "Today Income",
      value: 2,
      icon: accountCard,
    },
  ];

  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item md={3} key={index}>
          <StatisticalCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupStaticCard;
