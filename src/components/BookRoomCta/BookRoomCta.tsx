"use client"

import { Dispatch, FC, SetStateAction } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

type Props = {
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>
  price: number;
  discount: number;
  specialNote: string;
};
const BookRoomCta: FC<Props> = (props) => {
  const { price, discount, specialNote, checkinDate, setCheckinDate } = props;

  const discountPrice = price - (price / 100) * discount
  return (
    <div className="px-6 py-12">
      <h3>
        <span className={`${discount ? "text-gray-400" : ""} font-bold text-xl`}>
          $ {price}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            {' '}
            | discount {discount}%. Now <span className="text-tertiary-dark">$ {discountPrice}
            </span>
          </span>
        ) : ""}
      </h3>
      <div className="w-full border-b-2 border-b-secondary my-2" />

      <h4 className="my-8">{specialNote}</h4>

      <div className="flex ">
        <div className="w-1/2 pr-2">
          <label htmlFor="check-in-date" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
            Check In date
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={date => setCheckinDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            popperPlacement="bottom-start"
            shouldCloseOnSelect={false} // Mantiene el calendario abierto hasta que se seleccione algo
            showPopperArrow={false} // Deshabilita la flecha si lo prefieres

            id="check-in-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>



    </div>
  )
}

export default BookRoomCta