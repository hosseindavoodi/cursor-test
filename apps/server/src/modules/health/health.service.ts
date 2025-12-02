import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';
import { Inject, Injectable, Logger } from "@nestjs/common";
import { HealthStatus, HealthServiceType, IsHealthy } from "./interfaces/health.interface";

@Injectable()
export class HealthService {
    constructor(
        private readonly logger = new Logger(HealthService.name),
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) { }

    private readonly keyPrefix = 'health_check:';
    private readonly keyIsHealthy = 'is_healthy';

    private key(service: HealthServiceType): string {
        return `${this.keyPrefix}${service}`;
    }

    private keyHealthy(service: HealthServiceType): string {
        return `${this.key(service)}:${this.keyIsHealthy}`;
    }

    // global methods for managing services health status
    async checkService(service: HealthServiceType): Promise<boolean> {
        try {
            const key = this.key(service);
            const healthCache = await this.cacheManager.get<HealthStatus>(key);
            return healthCache?.active ?? false;
        } catch (error) {
            this.logger.error(`Error checking ${service} service: ${error.message}`);
            return false;
        }
    }

    async changeServiceStatus(service: HealthServiceType, status: string, active: boolean): Promise<HealthStatus> {
        try {
            const key = this.key(service);
            const now = new Date();
            const healthStatus: HealthStatus = { status, last_updated: now, active };
            
            await this.cacheManager.set(key, healthStatus);
            
            this.logger.log(`Service ${service} status changed to: ${status} (active: ${active})`);
            return healthStatus;
        } catch (error) {
            this.logger.error(`Error changing ${service} service status: ${error.message}`);
            throw error;
        }
    }

    async isServiceHealthy(service: HealthServiceType): Promise<boolean> { 
        try {
            const key = this.keyHealthy(service);
            const healthData = await this.cacheManager.get<IsHealthy>(key);
            return healthData?.is_healthy ?? false;
        } catch (error) {
            this.logger.error(`Error checking if ${service} service is healthy: ${error.message}`);
            return false;
        }
    }

    async setServiceHealthy(service: HealthServiceType, isHealthy: boolean, status: string): Promise<void> {
        try {
            const key = this.keyHealthy(service);
            const healthData: IsHealthy = { is_healthy: isHealthy, status };
            
            await this.cacheManager.set(key, healthData);
            
            this.logger.log(`Service ${service} health set to: ${isHealthy} with status: ${status}`);
        } catch (error) {
            this.logger.error(`Error setting ${service} service health: ${error.message}`);
            throw error;
        }
    }

    async getServiceStatus(service: HealthServiceType): Promise<HealthStatus | null> {
        try {
            const key = this.key(service);
            const healthCache = await this.cacheManager.get<HealthStatus>(key);
            return healthCache || null;
        } catch (error) {
            this.logger.error(`Error getting ${service} service status: ${error.message}`);
            return null;
        }
    }

    async getServiceHealthData(service: HealthServiceType): Promise<IsHealthy | null> {
        try {
            const key = this.keyHealthy(service);
            const healthData = await this.cacheManager.get<IsHealthy>(key);
            return healthData || null;
        } catch (error) {
            this.logger.error(`Error getting ${service} service health data: ${error.message}`);
            return null;
        }
    }

    async isServiceReady(service: HealthServiceType): Promise<boolean> {
        try {
            const isActive = await this.checkService(service);
            const isHealthy = await this.isServiceHealthy(service);
            return isActive && isHealthy;
        } catch (error) {
            this.logger.error(`Error checking if ${service} service is ready: ${error.message}`);
            return false;
        }
    }

    async initializeService(service: HealthServiceType): Promise<void> {
        try {
            const isActive = await this.checkService(service);
            const isHealthy = await this.isServiceHealthy(service);
            
            if (!await this.getServiceStatus(service)) {
                await this.changeServiceStatus(service, 'initialized', false);
            }
            
            if (!await this.getServiceHealthData(service)) {
                await this.setServiceHealthy(service, false, 'not_checked');
            }
            
            this.logger.log(`Service ${service} initialized (active: ${isActive}, healthy: ${isHealthy})`);
        } catch (error) {
            this.logger.error(`Error initializing ${service} service: ${error.message}`);
            throw error;
        }
    }

    async resetAllServices(): Promise<void> {
        try {
            for (const serviceType of Object.values(HealthServiceType)) {
                await this.changeServiceStatus(serviceType, 'reset', false);
                await this.setServiceHealthy(serviceType, false, 'reset');
            }
            this.logger.log('All services have been reset');
        } catch (error) {
            this.logger.error(`Error resetting all services: ${error.message}`);
            throw error;
        }
    }

    async getAllServicesStatus(): Promise<Record<HealthServiceType, { status: HealthStatus | null; health: IsHealthy | null }>> {
        const result = {} as Record<HealthServiceType, { status: HealthStatus | null; health: IsHealthy | null }>;
        
        for (const serviceType of Object.values(HealthServiceType)) {
            result[serviceType] = {
                status: await this.getServiceStatus(serviceType),
                health: await this.getServiceHealthData(serviceType)
            };
        }
        
        return result;
    }
}