import { MouseEvent } from 'react';

interface Props {
  type?: 'primary' | 'warning';
  children: string;
  onClick?: (e: MouseEvent) => void;
}

const Button = ({ children, type = 'primary', onClick = () => {} }: Props) => {
  return (
    <button
      type='button'
      className={`btn btn-${type}`}
      onClick={e => onClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
