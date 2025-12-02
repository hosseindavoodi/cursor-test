import { Controller, Get, Post, Put, Param, Body, HttpStatus, HttpException, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthServiceType, HealthStatus, IsHealthy } from './interfaces/health.interface';
import { ServiceParamDto, SetServiceHealthyDto, UpdateServiceStatusDto } from './health.dto';

export interface ServiceHealthResponse {
  service: string;
  is_active: boolean;
  is_healthy: boolean;
  last_status: string;
}

export interface OverallHealthResponse {
  overall_healthy: boolean;
  timestamp: Date;
  services: ServiceHealthResponse[];
}


@Controller('health')
@UsePipes(new ValidationPipe({ 
  transform: true, 
  whitelist: true, 
  forbidNonWhitelisted: true 
}))
export class HealthController {
  private readonly logger = new Logger(HealthController.name);

  constructor(private readonly healthService: HealthService) {}

  // get service healths
  @Get(':service')
  async getServiceHealth(@Param() params: ServiceParamDto): Promise<ServiceHealthResponse> {
    try {
      const { service } = params;
      const isActive = await this.healthService.checkService(service);
      const isHealthy = await this.healthService.isServiceHealthy(service);
      const healthStatus = await this.healthService.getServiceStatus(service);

      return {
        service: service,
        is_active: isActive,
        is_healthy: isHealthy,
        last_status: healthStatus?.status || 'unknown'
      };
    } catch (error) {
      this.logger.error(`Error getting health for service ${params.service}: ${error.message}`);
      
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException('Failed to get service health', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // get services status
  @Put(':service/status')
  async updateServiceStatus(
    @Param() params: ServiceParamDto,
    @Body() updateDto: UpdateServiceStatusDto
  ): Promise<HealthStatus> {
    try {
      const { service } = params;
      const result = await this.healthService.changeServiceStatus(
        service,
        updateDto.status,
        updateDto.active
      );

      this.logger.log(`Service ${service} status updated to: ${updateDto.status} (active: ${updateDto.active})`);
      
      return result;
    } catch (error) {
      this.logger.error(`Error updating service ${params.service} status: ${error.message}`);
      
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException('Failed to update service status', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // get service health
  @Put(':service/health')
  async setServiceHealth(
    @Param() params: ServiceParamDto,
    @Body() healthDto: SetServiceHealthyDto
  ): Promise<{ message: string; service: string; is_healthy: boolean }> {
    try {
      const { service } = params;
      await this.healthService.setServiceHealthy(
        service,
        healthDto.is_healthy,
        healthDto.status
      );

      this.logger.log(`Service ${service} health set to: ${healthDto.is_healthy} with status: ${healthDto.status}`);

      return {
        message: `Service ${service} health updated successfully`,
        service: service,
        is_healthy: healthDto.is_healthy
      };
    } catch (error) {
      this.logger.error(`Error setting service ${params.service} health: ${error.message}`);
      
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException('Failed to set service health', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // get service types
  @Get('services/types')
  getServiceTypes(): { services: string[] } {
    return {
      services: Object.values(HealthServiceType)
    };
  }
}