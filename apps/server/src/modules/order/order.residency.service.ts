import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { User } from "src/users/interfaces/user.interface";
import { RequestResidencyDto } from "./dto/residency/request.residency.dto";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";

@Injectable()
export class ResidencyOrderingService {
  constructor(private readonly prisma: PrismaService) {}

  async requestOrder(dto: RequestResidencyDto, user: User): Promise<MessageDto> {
    try {
      const order = await this.prisma.orders.create({
        data: {
          status: "IN_PROGRESS",
          product: "RESIDENCY",
          customer: {
            connect: {
              id: user.id,
            },
          },
          residency: {
            create: {
              status: "REQUESTED",
              residencyCountry: {
                connect: {
                  id: dto.countryId,
                },
              },
            },
          },
        },
      });

      return {
        message: "residency order successfuly created !",
        status: MessageStatus.SUCCESS,
      };
    } catch (error) {
      console.log(error);
      //   throw new HttpException("internal server error !", 500);
    }
  }
}
