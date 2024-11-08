'use client';

import { usePathname } from 'next/navigation';
import { useHoveredLink } from '@/lib/context/hovered-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@awesome.me/kit-89a9106b13/icons';

export default function SmallCube() {

  const { face } = useHoveredLink();
  const pathname = usePathname();

  if (pathname === '/') {
    return (
      <div className='small-scene'>
        <div className='w-8 h-8 bg-[#fbeb00]' />
      </div>
    );
  }
  
  return (
    <div className='small-scene'>
      <div className={`small-cube show-` + face}>
        <div className='small-cube__face small-cube__face--front' />
        <div className='small-cube__face small-cube__face--back'>
          <FontAwesomeIcon icon={far.faFaceSmile} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--right'>
          <FontAwesomeIcon icon={far.faGearCode} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--left'>
          <FontAwesomeIcon icon={far.faMessage} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--top'>
          <FontAwesomeIcon icon={far.faPrint} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--bottom'>
          <FontAwesomeIcon icon={far.faNewspaper} fixedWidth />
        </div>
      </div>
    </div>
  );
}