type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small" ;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant="primary", size="normal", ...props}: TButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center duration-300 cursor-pointer gap-2 hover:scale-105";
    
    const variants = {
        primary: "bg-primary text-white bg-primary/85",
        dark: "bg-dark text-white bg-dark/85",
        ghost: "bg-transparent text-dark hover:bg-gray/100",
    };

    const sizes = {
        normal: "px-9 py-4 ",
        small: "=x=7 py-[10px] ",
    };
    
    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;