import { Inject, Injectable } from '@nestjs/common';
import { MICROTRAVEL_CLIENT } from './constants.js';
import type { MicrotravelClient } from '../client.js';
import type {
  SearchFlightRequest, PricingFlightRequest, ConfirmPriceRequest, BookFlightRequest,
  FlightBookStatusRequest, IssueTicketRequest, RefundTicketRequest, CancelTicketRequest
} from '../types/flight.js';
import type {
  SearchHotelRequest, ConfirmHotelPriceRequest, HotelBookRequest, HotelBookStatusRequest,
  IssueHotelVoucherRequest, CancelHotelRequest, HotelImageRequest
} from '../types/hotel.js';
import type { TokenRequest } from '../types/auth.js';

@Injectable()
export class MicrotravelService {
  constructor(
    @Inject(MICROTRAVEL_CLIENT) client: MicrotravelClient
  ) {
    this.client = client;
  }

  private readonly client: MicrotravelClient;

  // Auth
  login(body: TokenRequest) { return this.client.auth.token(body); }
  setTokensFromAuth(res: any) { return this.client.setTokensFromAuth(res); }

  // Flight
  searchFlight(body: SearchFlightRequest) { return this.client.flight.search(body); }
  pricingFlight(body: PricingFlightRequest) { return this.client.flight.pricing(body); }
  confirmFlightPrice(body: ConfirmPriceRequest) { return this.client.flight.confirmPrice(body); }
  bookFlight(body: BookFlightRequest) { return this.client.flight.book(body); }
  flightStatus(body: FlightBookStatusRequest) { return this.client.flight.status(body); }
  issueTicket(body: IssueTicketRequest) { return this.client.flight.issueTicket(body); }
  refundFlight(body: RefundTicketRequest) { return this.client.flight.refund(body); }
  cancelFlight(body: CancelTicketRequest) { return this.client.flight.cancel(body); }

  // Hotel
  searchHotel(body: SearchHotelRequest) { return this.client.hotel.search(body); }
  detailHotel(body: SearchHotelRequest) { return this.client.hotel.detail(body); }
  confirmHotelPrice(body: ConfirmHotelPriceRequest) { return this.client.hotel.confirmPrice(body); }
  bookHotel(body: HotelBookRequest) { return this.client.hotel.book(body); }
  hotelStatus(body: HotelBookStatusRequest) { return this.client.hotel.status(body); }
  issueHotelVoucher(body: IssueHotelVoucherRequest) { return this.client.hotel.issueVoucher(body); }
  cancelHotelBooking(body: CancelHotelRequest) { return this.client.hotel.cancelBooking(body); }
  hotelImages(body: HotelImageRequest) { return this.client.hotel.images(body); }
  hotelDomesticImages(body: HotelImageRequest) { return this.client.hotel.domesticImages(body); }
}
