import React from 'react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Activity, Wallet, NotebookText, Keyboard, Music, ImageIcon, Calendar, Settings, Mail, MessageCircle, CreditCard  } from 'lucide-react'

  
  

const Product = () => {
  return (
<HoverCard openDelay={0.1} closeDelay={0}>
  <HoverCardTrigger>Solutions</HoverCardTrigger>
  <HoverCardContent className='w-100' align='start'>
    <div className='flex justify-start gap-4 w-[150px] ml-2'>
      <div> 
        <div className='text-slate-500 text-sm w-40 py-2'> Core features </div>
        <div className='flex items-center gap-2 py-2'> <Activity className='h-4 w-4 text-slate-700' /> <span className='text-sm'>Billing</span> </div>
        <div className='flex items-center gap-2 py-2'> <Keyboard className='h-4 w-4 text-slate-700' /> <span className='text-sm'>Billing</span> </div>
        <div className='flex items-center gap-2 py-2'> <NotebookText className='h-4 w-4 text-slate-700' /> <span className='text-sm'>Billing</span> </div>
        <div className='flex items-center gap-2 py-2'> <Wallet className='h-4 w-4 text-slate-700' /> <span className='text-sm'>Billing</span> </div>
        <div className='flex items-center gap-2 py-2'> <Music className='h-4 w-4 text-slate-700' /> <span className='text-sm'>Billing</span> </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>


  )
}

export default Product