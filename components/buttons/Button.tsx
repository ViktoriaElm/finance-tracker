import "./Button.css"

interface ButtonProps {
    buttonWidth?: string;
}

const Button: React.FC<ButtonProps> = () => {
    return (
        <button className="button">
            <svg width="130px" height="60px" viewBox="0 0 130 60" className="border">
                <polyline points="119,1 119,49 1,49 1,1 119,1" className="bg-line" />
                <polyline points="119,1 119,49 1,49 1,1 119,1" className="hl-line" />
            </svg>
            <span>Выход</span>
        </button>
    );
}

export default Button;
