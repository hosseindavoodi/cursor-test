import { HttpClient } from '../http/http.js';
import type {
  SearchFlightRequest, SearchFlightResponse,
  PricingFlightRequest, PricingFlightResponse,
  ConfirmPriceRequest, ConfirmPriceResponse,
  BookFlightRequest, BookFlightResponse,
  FlightBookStatusRequest, FlightBookStatusResponse,
  IssueTicketRequest, IssueTicketResponse,
  RefundTicketRequest, RefundTicketResponse,
  CancelTicketRequest, CancelTicketResponse
} from '../types/flight.js';

export class FlightClient {
  constructor(private http: HttpClient) {}

  search(req: SearchFlightRequest): Promise<SearchFlightResponse> {
    return this.http.post('/api/v1/SearchFlight', req);
  }
  pricing(req: PricingFlightRequest): Promise<PricingFlightResponse> {
    return this.http.post('/api/v1/PricingFlight', req);
  }
  confirmPrice(req: ConfirmPriceRequest): Promise<ConfirmPriceResponse> {
    return this.http.post('/api/v1/ConfirmPrice', req);
  }
  book(req: BookFlightRequest): Promise<BookFlightResponse> {
    return this.http.post('/api/v1/BookFlight', req);
  }
  status(req: FlightBookStatusRequest): Promise<FlightBookStatusResponse> {
    return this.http.post('/api/v1/FlightBookStatus', req);
  }
  issueTicket(req: IssueTicketRequest): Promise<IssueTicketResponse> {
    return this.http.post('/api/v1/IssueTicket', req);
  }
  refund(req: RefundTicketRequest): Promise<RefundTicketResponse> {
    return this.http.post('/api/v1/RefundFlight', req);
  }
  cancel(req: CancelTicketRequest): Promise<CancelTicketResponse> {
    return this.http.post('/api/v1/CancelBook', req);
  }
}
