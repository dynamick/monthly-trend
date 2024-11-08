import MonthlyBar from "./MonthlyBar.tsx";
import { fetchData, TrendData } from "./utils.ts";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface MonthlyTrendProps {
  onSelectionChange: (selectedMonths: number[]) => void;
}

// create a styled component for the container
const Container = styled.div`
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
`;

// create a styled component for the loading message
const Loading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  margin: 0;
`;

const MonthlyTrend: React.FC<MonthlyTrendProps> = ({ onSelectionChange }) => {
  const [data, setData] = useState<TrendData>();
  const [error, setError] = useState<string>();
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [previousSelectedMonths, setPreviousSelectedMonths] = useState<
    number[]
  >([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the data from the API
    fetchData()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  // display a loading message or an error message
  if (error) {
    return <Loading>{error}</Loading>;
  }
  if (!data) {
    return <Loading>Loading...</Loading>;
  }

  // Update the selected months and call the onSelect callback
  const updateSelectedMonths = (selectedMonths: number[]) => {
    setSelectedMonths(selectedMonths);
    onSelectionChange(selectedMonths);
  };

  // Handle the mouse events
  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    setDragStartIndex(index);
    setPreviousSelectedMonths(selectedMonths);
    updateSelectedMonths([index]);
  };

  const handleMouseEnter = (index: number) => {
    if (isDragging && dragStartIndex !== null) {
      const start = Math.min(dragStartIndex, index);
      const end = Math.max(dragStartIndex, index);
      const newSelection = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i,
      );
      updateSelectedMonths(newSelection);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartIndex(null);

    // Toggle selection if the user clicked on the same month
    if (
      previousSelectedMonths.length === 1 &&
      selectedMonths.length === 1 &&
      previousSelectedMonths[0] === selectedMonths[0]
    ) {
      updateSelectedMonths([]);
    }
  };

  // Find the max value to scale the bars
  const max = Math.max(...data.mesi.map((month) => month.importo));

  return (
    <Container onMouseUp={handleMouseUp}>
      {data.mesi.map((month, index) => (
        <MonthlyBar
          key={index}
          monthIndex={index}
          value={month.importo}
          documents={month.documenti}
          max={max}
          isSelected={selectedMonths.includes(index)}
          isDragging={isDragging}
          onMouseDown={() => handleMouseDown(index)}
          onMouseEnter={() => handleMouseEnter(index)}
        />
      ))}
    </Container>
  );
};

export default MonthlyTrend;
