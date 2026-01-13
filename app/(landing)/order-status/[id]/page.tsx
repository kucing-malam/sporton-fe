import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import { getTransactionByID } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({params}: TPageProps) => {
    const {id} = await params;
    const transaction = await getTransactionByID(id);

    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20 pt-30">
                <h1 className="font-bold text-5xl text-center mb-11">Order Status</h1>
                <div className="flex justify-center">
                    {transaction.status === "paid" && (<OrderConfirmed />) }
                    {transaction.status === "pending" && (<OrderSubmitted />) }
                    {transaction.status === "reject" && (<OrderRejected />) }
                </div>
            </div>
        </main>
    )
}

export default OrderStatus