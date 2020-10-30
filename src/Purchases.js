import Purchase from "./Purchase";
import purchaseData from "./purchaseData";

const rewardPointsEarned = (total) => {
  return 2;
};

const purchases = [];

for (const [index, value] of purchaseData.entries()) {
  purchases.push(
    <Purchase
      name={value.name}
      total={value.total}
      pointsEarned={rewardPointsEarned(value.total)}
    ></Purchase>
  );
}

function Purchases(props) {
  return purchases;
}

export default Purchases;
