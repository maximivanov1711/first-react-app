import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: (Status: boolean) => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    const newStatus = !status;

    setStatus(newStatus);
    onClick(newStatus);
  };

  if (status) return <AiFillHeart color='#ff6b81' onClick={toggle} />;

  return <AiOutlineHeart onClick={toggle} />;
};

export default Like;
