'use client';

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from '../ui/button';
import { FiCheckCircle } from "react-icons/fi";
import PriceFormatter from '../../../utils/price-formatter';
import { useRouter } from 'next/navigation';

const PaymentStep = () => {
    const { push } = useRouter();
    
    const uploadAndConfirm = () => {
        push("/order-status/2432");
    }
    return (
        <CardWithHeader title='Payment Steps'>
            <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
                    <li>
                        Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed
                        under 'Payment Options' (BCA, Mandiri, or BTPN).
                    </li>
                    <li>
                        After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the
                        transfer confirmation. This will be needed for the next step.
                    </li>
                    <li>
                        Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button
                        below to validate your transaction.
                    </li>
                </ol>
                <FileUpload />
                <div className="border-t border-gray-200 p-4">
                    <div className="font-semibold flex justify-between">
                        <div className="font-sm">Total</div>
                        <div className="text-primary total-xs">{PriceFormatter(455000)}</div>
                    </div>
                    <Button variant="dark" size="small" className="w-full mt-4" onClick={uploadAndConfirm}>
                        <FiCheckCircle /> Upload Receipt & Confirm 
                    </Button>
                </div>
            </div>
        </CardWithHeader>
    )
}

export default PaymentStep;