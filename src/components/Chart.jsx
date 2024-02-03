import { BarChart, } from "@mui/x-charts";
// import DataChart from "./DataChart";
import dataChart from "./DataChart";
import { axisClasses } from '@mui/x-charts';


const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
   
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}mm`;
const Chart = () => {

    
    return(
        <div style={{ marginBottom: "50px" }}>
          <BarChart
            dataset={dataChart}
            xAxis={[{ scaleType: "band", dataKey: "day" }]}
            series={[
              { dataKey: "carbohydrates",label: "carbohydrates", valueFormatter },
              { dataKey: "fats", label: "fats", valueFormatter },
              { dataKey: "proteins", label: "proteins", valueFormatter },
            ]}
            {...chartSetting}
          />
        </div>
    )
};
export default Chart;