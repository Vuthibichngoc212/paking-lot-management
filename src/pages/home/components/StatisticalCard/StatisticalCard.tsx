/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "./StatisticalCard.styles";

interface StatisticalCardProps {
  data: any;
}

const StatisticalCard = ({ data }: StatisticalCardProps) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardContentRoot}>
        <Box className={classes.boxContent}>
          <Box className={classes.icon}>
            <Box>
              <img src={data.icon} alt="icon" />
            </Box>
          </Box>
          <Box>
            <Typography variant="body2">{data.title}</Typography>
            <Typography variant="heading1_bold">{data.value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticalCard;
