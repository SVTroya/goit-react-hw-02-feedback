import { BAD, GOOD, NEUTRAL } from '../../assets/FeedbackType';
import { BsFire } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa';
import { LiaPooSolid } from 'react-icons/lia';
import { Button } from './FeedbackBtn.styled';

const iconsSet = {
  [GOOD]: {
    icon: <BsFire color='#171717' size={30} style={{pointerEvents:'none'}}/>,
    color: '#96E061',
  },
  [NEUTRAL]: {
    icon: <FaRegSmile color='#171717' size={30} style={{pointerEvents:'none'}}/>,
    color: '#fffc9d',
  },
  [BAD]: {
    icon: <LiaPooSolid color='#171717' size={40} style={{pointerEvents:'none'}}/>,
    color: '#F19389',
  },
};


export function FeedbackBtn({ feedbackType }) {
  return (
    <Button $color={iconsSet[feedbackType].color} type="button" color='#171717' size={30} aria-label={`${feedbackType} feedback`} data-type={feedbackType}>
      {/*{`<${iconsSet[feedbackType].icon} color='#171717' size={30} />`}*/}
      {iconsSet[feedbackType].icon}
    </Button>
  );
}

