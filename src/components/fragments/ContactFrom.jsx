import FormSection from "../elements/dashboard/ContactFormBadge";
import { CiCircleList } from "react-icons/ci";

export default function ContactForm() {
    return (
        <div className="w-full my-6 pr-0 lg:pr-2">
            <FormSection title="Contact Form" icon={<CiCircleList className="mr-3" />}>
                <form className="p-10 bg-white rounded shadow-xl">
                    <FormSection.FormInput label="Name" id="name" type="text" placeholder="Your Name" />
                    <FormSection.FormInput label="Email" id="email" type="text" placeholder="Your Email" className="mt-2" />
                    <FormSection.FormTextArea label="Message" id="message" rows="6" placeholder="Your inquiry.." className="mt-2" />
                    <FormSection.SubmitButton label="Submit" className="mt-6" />
                </form>
            </FormSection>
        </div>
    );
}
