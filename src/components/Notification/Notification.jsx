import { GoHeartFill } from 'react-icons/go';
import PropTypes from 'prop-types';

export function Notification({message}){
  return (
  <div>
    <p>{message}</p>
    <GoHeartFill color={'#d00d0d'}/>
  </div>
)}

Notification.propTypes = {
  message: PropTypes.string,
}
