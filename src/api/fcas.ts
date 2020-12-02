import { AxiosPromise } from "axios";
import client, { APIResponse, API_KEY } from "./client";

//
//
// # Collection Results
//
//

export type RankMetric = {
    project_id: string;
    project_name: string;
    project_slug: string;
    cmc_id: number;
    value: number;
    previous_value: number;
    symbol: string;
    metric_slug: string;
    timestamp: string;
    unix_time: number
}
//
// ## POST - Project Rank Metrics, for a specified metric ('dev', 'fcas', 'market-maturity', 'utility')
// get the current score for every project Flipside ranks.
//
// Rest API Docs: https://api-docs-v2.flipsidecrypto.com/#ab520b70-8ffb-46bf-b5d7-749ff0862dc5
//
export function getProjectRankMetrics(metric: string, change_over_in_days: number = 7): AxiosPromise<APIResponse<RankMetric[]>> {
  return client.post(`/metrics/rank/projects?api_key=${API_KEY}`, {
      metric: metric,
      change_over_in_days: change_over_in_days
  });
}
