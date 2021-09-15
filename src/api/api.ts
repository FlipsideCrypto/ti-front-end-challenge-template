import { AxiosPromise } from "axios";
import client from "./client";

export type Transfer = {
  BLOCKCHAIN: string;
  BLOCK_ID: number;
  BLOCK_TIMESTAMP: Date;
  CHAIN_ID: string;
  EVENT_AMOUNT: number;
  EVENT_AMOUNT_USD: number;
  EVENT_CURRENCY: string;
  EVENT_FROM: string;
  EVENT_FROM_ADDRESS_LABEL: string;
  EVENT_FROM_ADDRESS_NAME: string;
  EVENT_FROM_LABEL_SUBTYPE: string;
  EVENT_FROM_LABEL_TYPE: string;
  EVENT_TO: string;
  EVENT_TO_ADDRESS_LABEL: string;
  EVENT_TO_ADDRESS_NAME: string;
  EVENT_TO_LABEL_SUBTYPE: string;
  EVENT_TO_LABEL_TYPE: string;
  MSG_TYPE: string;
  TX_ID: string;
  TX_STATUS: string;
};

export function getTransfers(): AxiosPromise<Transfer[]> {
  return client.get(
    "/queries/0db26a4e-fd6a-462f-8769-ebcd74d583d7/data/latest"
  );
}
