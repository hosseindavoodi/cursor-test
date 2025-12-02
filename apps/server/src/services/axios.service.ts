import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';

@Injectable()
export class AxiosService {
  private instance: AxiosInstance;

  constructor() {}
}
