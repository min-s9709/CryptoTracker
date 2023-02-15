import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PriceData } from "./Coin";

const Overview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const PriceValidation = styled.span<{ priceNum: number }>`
  color: ${(props) => (props.priceNum < 0 ? "#e74c3c" : "#2ecc71")};
  font-size: 24px;
`;

interface PriceProps {
  tickersData: PriceData;
}

const Price = () => {
  const { tickersData } = useOutletContext<PriceProps>();
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>Volume-24H</span>
          <span>{tickersData?.quotes.USD.volume_24h.toFixed(0)} vol</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>Price Validation-1H</span>
          <PriceValidation priceNum={tickersData?.quotes.USD.percent_change_1h}>
            {tickersData?.quotes.USD.percent_change_1h} %
          </PriceValidation>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>Price Validation-24H</span>
          <PriceValidation
            priceNum={tickersData?.quotes.USD.percent_change_24h}
          >
            {tickersData?.quotes.USD.percent_change_24h} %
          </PriceValidation>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>Price Validation-7D</span>
          <PriceValidation priceNum={tickersData?.quotes.USD.percent_change_7d}>
            {tickersData?.quotes.USD.percent_change_7d} %
          </PriceValidation>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>Price Validation-30D</span>
          <PriceValidation
            priceNum={tickersData?.quotes.USD.percent_change_30d}
          >
            {tickersData?.quotes.USD.percent_change_30d} %
          </PriceValidation>
        </OverviewItem>
      </Overview>
    </>
  );
};

export default Price;
