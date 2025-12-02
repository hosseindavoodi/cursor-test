import { HttpClient } from '../http/http.js';
import type {
  SearchHotelRequest, SearchHotelResponse,
  ConfirmHotelPriceRequest, ConfirmHotelPriceResponse,
  HotelBookRequest, HotelBookResponse,
  HotelBookStatusRequest, HotelBookStatusResponse,
  IssueHotelVoucherRequest, IssueHotelVoucherResponse,
  CancelHotelRequest, CancelHotelResponse,
  HotelImageRequest, HotelImageResponse
} from '../types/hotel.js';

export class HotelClient {
  constructor(private http: HttpClient) {}

  search(req: SearchHotelRequest): Promise<SearchHotelResponse> {
    return this.http.post('/api/v1/hotel/SearchHotel/Search', req);
  }
  detail(req: SearchHotelRequest): Promise<SearchHotelResponse> {
    return this.http.post('/api/v1/hotel/SearchHotel/Detail', req);
  }
  confirmPrice(req: ConfirmHotelPriceRequest): Promise<ConfirmHotelPriceResponse> {
    return this.http.post('/api/v1/hotel/ConfirmHotelPrice', req);
  }
  book(req: HotelBookRequest): Promise<HotelBookResponse> {
    return this.http.post('/api/v1/hotel/BookHotel', req);
  }
  status(req: HotelBookStatusRequest): Promise<HotelBookStatusResponse> {
    return this.http.post('/api/v1/hotel/HotelBookStatus', req);
  }
  issueVoucher(req: IssueHotelVoucherRequest): Promise<IssueHotelVoucherResponse> {
    return this.http.post('/api/v1/hotel/IssueVoucher', req);
  }
  cancelBooking(req: CancelHotelRequest): Promise<CancelHotelResponse> {
    return this.http.post('/api/v1/hotel/CancelHotelBook', req);
  }
  images(req: HotelImageRequest): Promise<HotelImageResponse> {
    return this.http.post('/api/v1/hotel/HotelStaticData/HotelImages', req);
  }
  domesticImages(req: HotelImageRequest): Promise<HotelImageResponse> {
    return this.http.post('/api/v1/hotel/HotelStaticData/HotelDomesticImages', req);
  }
}
