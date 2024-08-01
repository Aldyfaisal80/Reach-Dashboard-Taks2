import FormSection from "../elements/dashboard/ContactFormBadge";
import { CiCircleList } from "react-icons/ci";

export default function CheckoutForm() {
    return (
        <div className="w-full mt-6 pl-0 lg:pl-2">
            <FormSection title="Checkout Form" icon={<CiCircleList className="mr-3" />}>
                <form className="p-10 bg-white rounded shadow-xl">
                    <p className="text-lg text-gray-800 font-medium pb-4">Customer information</p>
                    <FormSection.FormInput label="Name" id="cus_name" type="text" placeholder="Your Name" />
                    <FormSection.FormInput label="Email" id="cus_email" type="text" placeholder="Your Email" className="mt-2" />
                    <FormSection.FormInput label="Address" id="cus_address" type="text" placeholder="Street" className="mt-2" />
                    <FormSection.FormInput label="City" id="cus_city" type="text" placeholder="City" className="mt-2" />
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <FormSection.FormInput label="Country" id="cus_country" type="text" placeholder="Country" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <FormSection.FormInput label="Zip" id="cus_zip" type="text" placeholder="Zip" />
                    </div>
                    <p className="text-lg text-gray-800 font-medium py-4">Payment information</p>
                    <FormSection.FormInput label="Card" id="cus_card" type="text" placeholder="Card Number MM/YY CVC" />
                    <FormSection.SubmitButton label="$3.00" className="mt-6" />
                </form>
            </FormSection>
        </div>
    )
}