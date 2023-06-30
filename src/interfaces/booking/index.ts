import { ServiceInterface } from 'interfaces/service';
import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  property_id?: string;
  customer_id?: string;
  booking_manager_id?: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  service?: ServiceInterface[];
  property?: PropertyInterface;
  user_booking_customer_idTouser?: UserInterface;
  user_booking_booking_manager_idTouser?: UserInterface;
  _count?: {
    service?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  property_id?: string;
  customer_id?: string;
  booking_manager_id?: string;
}
