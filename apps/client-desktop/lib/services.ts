import { Services } from "@sana/react-query/client";
import { client } from "./axios.config";

export let services: Services | null = null;
export const getServices = () => {
  if (!services) {
    services = Services.getInstance(client);
  }

  return services;
};
