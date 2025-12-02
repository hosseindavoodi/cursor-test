export interface HealthStatus {
    status: string;
    last_updated: Date;
    active: boolean;
}

export interface IsHealthy {
    is_healthy: boolean;
    status: string;
}


export enum HealthServiceType {
  MAIL = 'mail',
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  DB = 'db',
}