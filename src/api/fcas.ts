import { AxiosPromise } from "axios";
import client, { APIResponse, API_KEY } from "./client";

//
//
// # Rank Metric Result
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

//
// # Timeseries Result
//
//

type DataPoint = {
  timestamp: string;
  unix_time: number;
  value: number;
  moving_average: number
}
type Metric = {
  name: string;
  slug: string;
  timeseries: DataPoint[];
}
export type ProjectTimeSeries = {
    project_id: string;
    project_name: string;
    project_slug: string;
    cmc_id: number;
    symbol: string;
    metrics: Metric[];
}
//
// ## POST - Project Timeseries Metrics
// returns timeseries data for a given set of Metrics and Project IDs.
// metrics: ('dev', 'fcas', 'market-maturity', 'utility')
//
// Rest API Docs: https://api-docs-v2.flipsidecrypto.com/#488065de-d331-4b0f-94ec-2d206a802e15
// 
// Timestamp format (start_timestamp/end_timestamp): "2020-12-01T00:00:00Z"
//
export function getTimeseries(project_ids: string[], metrics: string[], start_timestamp: string, end_timestamp: string, moving_average_in_days: number = 7): AxiosPromise<APIResponse<ProjectTimeSeries>> {
  return client.post(`/metrics/timeseries/projects?api_key=${API_KEY}`, {
      project_ids: project_ids,
      metrics: metrics,
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp,
      moving_average_in_days: moving_average_in_days
  });
}
