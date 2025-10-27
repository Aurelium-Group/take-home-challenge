type RiskPreference = "DEFENSIVE" | "BALANCED" | "GROWTH";
type ProjectionCalculatorInput = {
  date_of_birth: string;
  current_assets: number;
  savings: number;
  expenses: number;
  risk_preference: RiskPreference;
};

type ProjectionResponseData = {
  age: number[];
  assets: number[];
};

const baseUrl = new URL(
  "https://dmisdm--8a20dbf6b09911f0962d0224a6c84d84.web.val.run/projection"
);

export function calculateProjection(input: ProjectionCalculatorInput) {
  // TODO: Change this to meet your needs

  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "content-type": "application/json",
    },
  });
}
