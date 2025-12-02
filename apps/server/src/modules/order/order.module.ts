import { Module } from "@nestjs/common";
import { VisaOrderServices } from "./order.visa.service";
import { CaslModule } from "src/casl/casl.module";
import { VisaOrderingController } from "./public/public.visa.order.controller";
import { MinioService } from "src/modules/assets/minio.service";
import { PrismaService } from "src/services/prisma.service";
import { I18nService } from "src/common/services/i18n.service";
import { PublicOrderServices } from "./public/public.order.service";
import { PublicOrderController } from "./public/public.order.controller";
import { PassengersModule } from "../passengers/passengers.module";
import { PassengersService } from "../passengers/passengers.service";
import { PaymentModule } from "../payment/payment.module";
import { PaymentProccesor } from "../payment/processor.service";
import { AssetsModule } from "../assets/assets.module";
import { AssetsServices } from "../assets/assets.service";
import { ResidencyOrderingController } from "./public/public.residency.order.controller";
import { ResidencyOrderingService } from "./order.residency.service";
import { PrivateVisaOrderController } from "./private/private.visa.order.controller";
import { PrivateResidencyOrderController } from "./private/private.residency.order.controller";
import { PrivateVisaOrderService } from "./private/private.visa.order.service";
import { PrivateResidencyOrderService } from "./private/private.residency.order.service";
import { PublicFlightOrderController } from "./public/public.flight.order.controller";
import { FlightOrderService } from "./order.flight.service";
import { MicrotravelModule } from "../microtravel/microtravel.module";
import { FlightModule } from "../flight/flight.module";

@Module({
  controllers: [
    VisaOrderingController,
    PublicOrderController,
    ResidencyOrderingController,
    PrivateVisaOrderController,
    PrivateResidencyOrderController,
    PublicFlightOrderController,
  ],
  providers: [
    VisaOrderServices,
    MinioService,
    PrismaService,
    I18nService,
    PassengersService,
    PaymentProccesor,
    AssetsServices,
    ResidencyOrderingService,
    PublicOrderServices,
    PrivateVisaOrderService,
    PrivateResidencyOrderService,
    FlightOrderService,
  ],
  imports: [CaslModule, PassengersModule, PaymentModule, AssetsModule, MicrotravelModule, FlightModule],
  exports: [MinioService, FlightOrderService],
})
export class OrderModule { }
