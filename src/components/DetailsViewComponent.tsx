
import BasicModal from './BasicModal';

import { useTransactionsContext } from '../context/context';

const DetailsViewComponent = () => {
  const { detailsViewId, setDetailsViewId, data } = useTransactionsContext();

  if(!detailsViewId) return null;
  
  return (
  <BasicModal isVisible onClose={() => {setDetailsViewId(null);}} title="Details View">
    <div>ID: {data[detailsViewId - 1].id}</div>
    <div>Description: {data[detailsViewId - 1].description}</div>
    <div>Category: {data[detailsViewId - 1].category}</div>
    <div>Amount: {data[detailsViewId - 1].amount}</div>
    <div>Type: {data[detailsViewId - 1].type}</div>
  </BasicModal>
  );
}
  
export default DetailsViewComponent;
  