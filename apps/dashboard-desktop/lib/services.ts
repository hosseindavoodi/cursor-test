import { Services } from "@sana/react-query/index";
import { client } from "./axios.config";

let services: Services | null = null;
export const getServices = () => {
  if (!services) {
    services = Services.getInstance(client);
  }

  return services;
};
