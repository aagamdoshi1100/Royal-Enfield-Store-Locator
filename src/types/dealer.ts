export interface DealerTypes {
  name: string;
  address: string;
  pincode: string;
  latitude: string;
  longitude: string;
  phoneNumber: string;
  area: string;
  dealerOperationHours: DealerOperationHours;
  storePageUrl: string;
  dealerContent: DealerContent[];
  dealerId: string;
  type: string;
  additionalPhones?: string;
  gmbMapUrl: string;
  city: string;
  state: string;
  averageRating: number;
}

interface DealerOperationHours {
  mondayOpenTime: string;
  mondayCloseTime: string;
  tuesdayOpenTime: string;
  tuesdayCloseTime: string;
  wednesdayOpenTime: string;
  wednesdayCloseTime: string;
  thursdayOpenTime: string;
  thursdayCloseTime: string;
  fridayOpenTime: string;
  fridayCloseTime: string;
  saturdayOpenTime: string;
  saturdayCloseTime: string;
  sundayOpenTime: string;
  sundayCloseTime: string;
}

interface DealerContent {
  section: string;
  content: string;
}
