export type MonthData = {
  documenti: number;
  importo: number;
};

export type TrendData = {
  mesi: MonthData[];
};

// This function fetches the data from the API and the response is of type MonthlyData
export const fetchData = async (): Promise<TrendData> => {
  const response = await fetch(
    "http://staccah.fattureincloud.it/testfrontend/data.json",
  );
  const data = await response.json();
  return data;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0, // Rimuove i decimali se non necessari
    maximumFractionDigits: 0,
  }).format(price);
};
