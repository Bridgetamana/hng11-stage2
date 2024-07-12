import { IconType } from "react-icons"

const CheckoutSteps = ({ icon: Icon, stepNumber, stepName, isActive }: { icon: IconType, stepNumber: number, stepName: string, isActive?: boolean }) => {
    return (
        <div className={`flex items-center gap-2 ${isActive ? 'text-[#002855]' : 'text-[#99A0AD]'}`}>
            <Icon className="text-2xl"/>
            <span>
                <p>Step {stepNumber}</p>
                <p className="text-lg">{stepName}</p>
            </span>
        </div>
    )
}

export default CheckoutSteps