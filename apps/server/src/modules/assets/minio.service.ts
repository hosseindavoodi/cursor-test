import { Injectable, LoggerService } from "@nestjs/common";
import * as Minio from "minio";

@Injectable()
export class MinioService {
  private minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: parseInt(process.env.MINIO_PORT) ?? 8000,
      useSSL: process.env.MINIO_USE_SSL ? true : false || false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    });
  }

  async createBucket(bucketName: string): Promise<void> {
    const exists = await this.minioClient.bucketExists(bucketName);
    if (!exists) {
      await this.minioClient.makeBucket(bucketName, "us-east-1");
    }
  }

  async uploadFile(bucketName: string, objectName: string, filePath: string, metaData: { [key: string]: any } = {}): Promise<void> {
    await this.minioClient.fPutObject(bucketName, objectName, filePath, metaData);
  }

  async deleteFolder(bucketName: string, folderPath: string): Promise<void> {
    // Ensure folderPath ends with '/' to act as a proper prefix
    const prefix = folderPath.endsWith("/") ? folderPath : `${folderPath}/`;

    const objects = await this.listObjects(bucketName, prefix, true);

    if (objects.length === 0) {
      return; // Nothing to delete
    }

    const toDelete = objects.map((obj) => ({ name: obj.name }));
    const deleteStream = await this.minioClient.removeObjects(bucketName, toDelete);
  }

  async listObjects(bucketName: string, prefix: string = "", recursive: boolean = true): Promise<Minio.BucketItemFromList[]> {
    return new Promise((resolve, reject) => {
      const objects = [];
      const stream = this.minioClient.listObjects(bucketName, prefix, recursive);
      stream.on("data", (obj) => objects.push(obj));
      stream.on("end", () => resolve(objects));
      stream.on("error", (err) => reject(err));
    });
  }

  async listObjectsByPattern(bucketName: string, pattern: string): Promise<Minio.BucketItemFromList[]> {
    const regex = new RegExp(pattern);
    return new Promise((resolve, reject) => {
      const objects = [];
      const stream = this.minioClient.listObjects(bucketName, "", true);
      stream.on("data", (obj) => {
        if (obj.name && regex.test(obj.name)) {
          objects.push(obj);
        }
      });
      stream.on("end", () => resolve(objects));
      stream.on("error", (err) => reject(err));
    });
  }

  async getBucketPolicy(bucketName: string): Promise<string> {
    return this.minioClient.getBucketPolicy(bucketName);
  }

  async setBucketPolicy(bucketName: string, policy: string): Promise<void> {
    await this.minioClient.setBucketPolicy(bucketName, policy);
  }

  async presignedGetObject(bucketName: string, objectName: string, expiry: number = 3600): Promise<string> {
    let url = new URL(await this.minioClient.presignedGetObject(bucketName, objectName, expiry));
    return url.href;
  }

  async presignedPutObject(bucketName: string, objectName: string, expiry: number = 3600): Promise<string> {
    let url = new URL(await this.minioClient.presignedPutObject(bucketName, objectName, expiry));

    return url.href;
  }
}
