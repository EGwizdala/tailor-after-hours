const IconArrowRight = "east";
const IconArrowDown = "chevron_right";

interface GoogleIconProps {
    icon: string
    className: string
   
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({ icon, className}) =>
    <span className={`${className}__icon material-icons-outlined`}>{icon}</span>;

