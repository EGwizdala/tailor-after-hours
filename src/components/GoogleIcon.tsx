interface GoogleIconProps {
    id?: string
    icon: string
    className: string
    onClick?: (e) => void
   
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({ icon, className, onClick, id}) =>
    <span
        onClick={onClick}
        id = {id}
        className={`${className}__icon material-icons-outlined`}>
        {icon}
    </span>;

