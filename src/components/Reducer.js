export default (state,action)=>{
    switch (action.type){
        case 'delete':
            return {
                layouts:state.layouts.filter(item=>{
            
                return item.id !== action.removeid
            })
            }
            
            case 'add':
                return{
                    layouts:[action.newid,...state.layouts]
                }

                case 'edit':
                    const updatedlayout=action.editid;
                    const newlayout=state.layouts.map((item)=>{
                       if(item.id === updatedlayout.id){
                           return updatedlayout;
                       }
                           return item;
                       
                    }
                        )
                    return {
                        layouts:newlayout
                        
                    }

        default:
            return state
    }
}