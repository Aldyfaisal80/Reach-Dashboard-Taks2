/* eslint-disable react/prop-types */
const FormSection = ({ title, icon, children }) => {
    return (
        <div>
            <p className="text-xl pb-6 flex items-center">
               {icon} {title}
            </p>
            <div className="leading-loose">
                {children}
            </div>
        </div>
    );
}

const FormInput = ({ label, id, type, placeholder, className }) => {
    return (
        <div className={className}>
            <label className="block text-sm text-gray-600" htmlFor={id}>{label}</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id={id} name={id} type={type} required placeholder={placeholder} aria-label={label} />
        </div>
    );
}

const FormTextArea = ({ label, id, rows, placeholder, className }) => {
    return (
        <div className={className}>
            <label className="block text-sm text-gray-600" htmlFor={id}>{label}</label>
            <textarea className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id={id} name={id} rows={rows} required placeholder={placeholder} aria-label={label}></textarea>
        </div>
    );
}

const SubmitButton = ({ label, className }) => {
    return (
        <div className={className}>
            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">{label}</button>
        </div>
    );
}

FormSection.FormInput = FormInput
FormSection.FormTextArea = FormTextArea
FormSection.SubmitButton = SubmitButton


export default FormSection
