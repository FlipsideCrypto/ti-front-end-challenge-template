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
// ## POST - Project Rank Metrics
//
export function getProjectRankMetrics(metric: string, change_over_in_days: number = 7): AxiosPromise<APIResponse<RankMetric[]>> {
  return client.post(`/metrics/rank/projects?api_key=${API_KEY}`, {
      metric: metric,
      change_over_in_days: change_over_in_days
  });
}
