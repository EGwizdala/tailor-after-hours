interface ButtonProps {
    className: string
    icon: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({className, icon, children}) => (
    <button className={className}>{children}{icon}</button>
);
    