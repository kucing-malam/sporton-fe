import PaymentOption from "../components/payment/payment-option";
import PaymentStep from "../components/payment/payment-step";

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="font-bold text-5xl text-center mb-11">Payment</h1>
                <div className="grid grid-cols-2 gap-14">
                    <PaymentOption />
                    <PaymentStep />
                </div>
            </div>
        </main>
    )
}

export default Payment;