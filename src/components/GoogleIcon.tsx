const IconArrowRight = "east";
const IconArrowDown = "chevron_right";

interface GoogleIconProps {
    icon: string
    className: string
    onClick?: (e) => void
   
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({ icon, className, onClick}) =>
    <span onClick={onClick} className={`${className}__icon material-icons-outlined`}>{icon}</span>;

