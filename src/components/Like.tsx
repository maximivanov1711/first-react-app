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

  if (status) return <AiFillHeart size='30' color='#ff6b81' onClick={toggle} />;

  return <AiOutlineHeart size='30' onClick={toggle} />;
};

export default Like;
