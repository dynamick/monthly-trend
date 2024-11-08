import {
  BAR_COLOR,
  BORDER_COLOR,
  DOCUMENTS_COLOR,
  PRICE_COLOR,
  SELECTOR_ACTIVE_COLOR,
  SELECTOR_BORDER_COLOR,
  SELECTOR_COLOR,
  TITLE_COLOR,
} from "./constants.ts";
import styled from "styled-components";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { formatPrice } from "./utils.ts";

interface MonhtlyBarProps {
  monthIndex: number;
  value: number;
  documents: number;
  max: number;
  isSelected: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onMouseEnter: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80px;
  height: 108px;
  margin: 0;
  background-color: transparent;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: ${BORDER_COLOR};
  &:last-child {
    border-right-width: 1px;
  }
`;

const Title = styled.div`
  padding: 6px 8px 5px;
  color: ${TITLE_COLOR};
  text-align: left;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${BORDER_COLOR};
  text-transform: capitalize;
`;

const Content = styled.div<{ $percentile?: number }>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Bar = styled.div<{ $percentile?: number }>`
  position: absolute;
  width: 100%;
  bottom: 0;
  top: ${(p) => p.$percentile}%;
  background-color: ${BAR_COLOR};
  z-index: 1;
  transition: top 0.3s ease;
`;

const Price = styled.div`
  color: ${PRICE_COLOR};
  margin: 0 0 6px 8px;
  z-index: 2;
`;
const Documents = styled.div`
  color: ${DOCUMENTS_COLOR};
  margin-left: 8px;
  z-index: 2;
`;

const Selector = styled.div<{ $isSelected?: boolean; $isDragging?: boolean }>`
  position: absolute;
  background-color: ${({ $isDragging }) =>
    $isDragging ? SELECTOR_ACTIVE_COLOR : SELECTOR_COLOR};
  transition: background-color 0.3s ease;
  height: 2px;
  width: 100%;
  border-top: 1px solid ${SELECTOR_BORDER_COLOR};
  z-index: 5;
  bottom: -1px;
  left: 0;
  display: ${(p) => (p.$isSelected ? "block" : "none")};
`;

const MonthlyBar: React.FC<MonhtlyBarProps> = ({
  monthIndex,
  value,
  documents,
  max,
  isSelected,
  isDragging,
  onMouseDown,
  onMouseEnter,
}) => {
  const percentile = (value / max) * 100;

  const monthName = format(new Date(2024, monthIndex, 1), "MMMM", {
    locale: it,
  });

  const price = formatPrice(value);

  return (
    <Container onMouseDown={onMouseDown} onMouseEnter={onMouseEnter}>
      <Title>{monthName}</Title>
      <Content $percentile={percentile}>
        <Bar $percentile={percentile} />
        <Documents title={`${documents} doc.`}>{documents} doc.</Documents>
        <Price title={price}>{price}</Price>
      </Content>
      <Selector $isSelected={isSelected} $isDragging={isDragging} />
    </Container>
  );
};

export default MonthlyBar;
