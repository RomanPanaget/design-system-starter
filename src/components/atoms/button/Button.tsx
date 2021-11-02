// import './Button.css';

type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps) => (
  <button type="button" className="Button">
    {children}
  </button>
);

export default Button;
