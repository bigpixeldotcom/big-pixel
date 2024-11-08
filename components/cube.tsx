'use client';

import { useHoveredLink } from '@/lib/context/hovered-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@awesome.me/kit-89a9106b13/icons';

export default function Cube() {

  const { face } = useHoveredLink();
  
  return (
    <div className='scene'>
      <div className={`cube show-` + face}>
        <div className='cube__face cube__face--front' />
        <div className='cube__face cube__face--back'>
          <FontAwesomeIcon icon={far.faFaceSmile} fixedWidth />
        </div>
        <div className='cube__face cube__face--right'>
          <FontAwesomeIcon icon={far.faGearCode} fixedWidth />
        </div>
        <div className='cube__face cube__face--left'>
          <FontAwesomeIcon icon={far.faMessage} fixedWidth />
        </div>
        <div className='cube__face cube__face--top'>
          <FontAwesomeIcon icon={far.faPrint} fixedWidth />
        </div>
        <div className='cube__face cube__face--bottom'>
          <FontAwesomeIcon icon={far.faNewspaper} fixedWidth />
        </div>
      </div>
    </div>
  );
}