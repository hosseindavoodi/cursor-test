import { UserListResponse } from "@sana/types/user/user";
import { ChevronLeft } from "lucide-react";
import moment from "moment-jalaali";
import { use } from "react";

function UserTable(props: {
    users: UserListResponse
}) {
    return <table className="w-full border-separate border-spacing-0">
        <thead className="border-spacing-0">
            <tr>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1 border-r-1 rounded-tr-lg">
                    نام و نام خانوادگی
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    نام و نام خانوادگی(لاتین)
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    جنسیت
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    ملیت
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    کد ملی
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    شماره پاسپورت
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    تاریخ انقضا پاسپورت
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1">
                    تاریخ تولد
                </td>
                <td className="py-3 text-right px-3 font-normal text-sm bg-gray-200 text-gray-600 border-t-1 border-l-1 rounded-tl-lg">

                </td>
            </tr>
        </thead>
        <tbody className="bg-white">
            {props.users.map((user, index) => {
                const isLastItem = index === props.users.length - 1
                const userBirthDate = user.birthdate ? moment(user.birthdate).format("jYYYY/jMM/jDD") : "ندارد"
                const passportExpiryDate = new Date(user.passportExpiryDate || "")
                const passportExpiryDateValue = !isNaN(passportExpiryDate.getTime()) ? `${passportExpiryDate.getFullYear()}/${passportExpiryDate.getMonth().toString()}/${passportExpiryDate.getDay()}` : "ندارد"
                return (
                    <tr>
                        <td className={`pr-4 py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal border-r-1 ${isLastItem ? 'rounded-br-lg border-b-1' : ''}`}>
                            <p>{user.firstName} {user.lastName}</p>
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            <p>{user.passportFirstName} {user.passportLastName}</p>
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            مرد
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            ایرانی
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            {user.nationalCode}
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            {user.passportNumber}
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            {passportExpiryDateValue}
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal ${isLastItem ? 'border-b-1' : ''}`}>
                            {userBirthDate}
                        </td>
                        <td className={`py-5 border-t-[1px] whitespace-nowrap text-sm text-gray-900 font-normal border-l-1 ${isLastItem ? 'rounded-bl-lg border-b-1' : ''} `}>
                            <div className="min-w-fit flex justify-end pl-4">
                                <button onClick={() => { }}>
                                    <ChevronLeft />
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>;
}

export default UserTable;