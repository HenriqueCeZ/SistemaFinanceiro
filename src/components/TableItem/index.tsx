import * as C from './styles'; 
import {Item} from '../../Types/Item'; 
import {formateDate} from '../../Helpers/DateFilter';
import {Categories} from '../../data/Categories';
type Props = {
        item: Item

}  
export const TableItem =  ({item}: Props) => {
        return (
            <C.TableLine>
                        <C.TableColumn>{formateDate(item.date)}</C.TableColumn>
                        <C.TableColumn>
                                <C.Category color={Categories[item.category].color}>
                                {Categories[item.category].title}
                                </C.Category>
                                </C.TableColumn>
                        <C.TableColumn>{item.title}</C.TableColumn>
                        <C.TableColumn>
                                 <C.Value color={Categories[item.category].expense ? 'red' : 'green'}>
                                 R$ {item.value}
                                         
                                         </C.Value>   

                        </C.TableColumn>


            </C.TableLine>



        );


}