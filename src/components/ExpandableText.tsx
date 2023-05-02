import Button from './Button';

import { useState } from 'react';

type Props = {
  children: string;
  maxChars?: number;
};

const ExpandableText = ({ maxChars = 50, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let minimizedText = children.slice(0, maxChars);
  if (maxChars < children.length) minimizedText += '...';

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>{isExpanded ? children : minimizedText}</p>
      <Button onClick={toggle}>{isExpanded ? 'less' : 'more'}</Button>
    </>
  );
};

export default ExpandableText;
