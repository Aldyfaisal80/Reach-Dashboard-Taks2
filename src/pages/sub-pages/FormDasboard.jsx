import CheckoutForm from "../../components/fragments/CheckoutForm"
import ContactForm from "../../components/fragments/ContactFrom"
import Footer from "../../components/fragments/Footer"



export default function FormDasboard() {
    return (
        <div className="bg-gray-100 font-Poppins flex">
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="w-full text-3xl text-black pb-6">Forms</h1>

                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                            <ContactForm />
                        </div>

                        <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                            <p className="text-xl pb-6 flex items-center">
                                <i className="fas fa-list mr-3"></i> Checkout Form
                            </p>
                            <div className="leading-loose">
                               <CheckoutForm />
                            </div>
                            <p className="pt-6 text-gray-600">
                                Source: <a className="underline" href="https://tailwindcomponents.com/component/checkout-form">https://tailwindcomponents.com/component/checkout-form</a>
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    )
}