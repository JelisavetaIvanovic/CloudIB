
import BasicModal from './BasicModal';

import { useTransactionsContext } from '../context/context';
import EditComponent from './Editcomponent';
import DeleteComponent from './DeleteComponent';

const DetailsViewComponent = () => {
  const { detailsViewId, setDetailsViewId, data } = useTransactionsContext();

  if(!detailsViewId) return null;
  
  return (
  <BasicModal isVisible onClose={() => {setDetailsViewId(null);}} title="Details View">
    <div style={{ marginBottom: '5px' }}>ID: {data[detailsViewId - 1].id}</div>
    <div style={{ marginBottom: '5px' }}>Description: {data[detailsViewId - 1].description}</div>
    <div style={{ marginBottom: '5px' }}>Category: {data[detailsViewId - 1].category}</div>
    <div style={{ marginBottom: '5px' }}>Amount: {data[detailsViewId - 1].amount}</div>
    <div style={{ marginBottom: '5px' }}>Type: {data[detailsViewId - 1].type}</div>
    <div style={{ marginBottom: '15px' }}>Date: {data[detailsViewId - 1].date}</div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div className='editComponent' title="Edit transaction"><EditComponent /></div>
      <div className='deleteComponent' title="Delete transaction"><DeleteComponent /></div>
    </div>

  </BasicModal>
  );
}
  
export default DetailsViewComponent;
  