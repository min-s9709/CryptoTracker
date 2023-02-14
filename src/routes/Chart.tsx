import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["olcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart ... "
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: { show: false },
              labels: {
                show: false,
              },
              type: "datetime",
              categories:
                data?.map((price) =>
                  new Date(price.time_close * 1000).toUTCString()
                ) ?? [],
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#4cd137"], stops: [0, 100] },
            },
            colors: ["#0097e6"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
