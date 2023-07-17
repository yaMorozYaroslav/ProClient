import {ItemState} from './Item/ItemState'
import {UserState} from './User/UserState'
import {OpenState} from './Open/OpenState'
import {FiltState} from './Filter/FiltState'
import {CartState} from './Cart/CartState'

export const AllTheStates =({children})=> 
  <> <CartState>
     <FiltState>
     <OpenState>
     <ItemState>
     <UserState>
        {children}
               </UserState>
               </ItemState>
               </OpenState> 
               </FiltState>
               </CartState>
	           
	           </>
