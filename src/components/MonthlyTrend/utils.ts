export type MonthData = {
  documenti: number;
  importo: number;
};

export type TrendData = {
  mesi: MonthData[];
};

export const fetchData = async (): Promise<TrendData> => {
  // NOTE FOR REVIEWER: The URL in prod mode is hardcoded for MIXED content issue (the API endpoint is http and the site is https)
  const randomFile = Math.floor(Math.random() * 3) + 1;
  const url = import.meta.env.PROD
    ? `/data${randomFile}.json`
    : "http://staccah.fattureincloud.it/testfrontend/data.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error("Response ko!"));
    }
    return await response.json();
  } catch {
    return Promise.reject("Network error");
  }
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
