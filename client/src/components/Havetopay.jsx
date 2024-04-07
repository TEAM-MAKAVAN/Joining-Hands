import { useState, useEffect } from "react";
const Havatopay = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      const newMemos = await contract.havetopay_new();
      setMemos(newMemos);
    };

    if (contract) {
      fetchMemos();
    }
  }, [contract, setMemos]); // Added setMemos to the dependency array

  return (
    <div className="container-fluid">
      {memos.map((memo, index) => ( // Added 'index' as a key for each item
        <div key={index}>
          {memo}
        </div>
      ))}
    </div>
  );
};

export default Havatopay;