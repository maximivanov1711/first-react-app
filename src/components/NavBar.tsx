type Props = {
  itemsCount: number;
};

const NavBar = ({ itemsCount }: Props) => {
  return <div>Products count: {itemsCount}</div>;
};

export default NavBar;
