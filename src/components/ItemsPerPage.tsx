interface IOwnProps {
  setDisplayLimit: (number: number) => void;
}

const ItemsPerPage = ({ setDisplayLimit }: IOwnProps) => {
  return (
    <select
      onChange={(e) =>
        Number(e.target.value) > 0
          ? setDisplayLimit(Number(e.target.value))
          : null
      }
    >
      <option>Items per page</option>
      <option>10</option>
      <option>20</option>
    </select>
  );
};

export default ItemsPerPage;
