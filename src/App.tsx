import  {useState, useEffect} from 'react';
import * as C from './App.styles';
import {Item} from './Types/Item';
import {Category} from './Types/Category';
import {Items} from './data/Items';
import {Categories} from './data/Categories';
import {getCurrentMonth,filterListByMonth} from './Helpers/DateFilter'
import {TableArea} from './components/TableArea'
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/InputArea';
 
const App = () => {
      const [list, setList] = useState(Items);
      const [filteredList, setFilteredList] = useState<Item[]>([]);
      const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());  
      const [income, setIncome] = useState(0);
      const [expense, setExpense] = useState(0);

      useEffect(()=>{
      setFilteredList( filterListByMonth(list,currentMonth)); 

    },[list, currentMonth]);
    const handleMonthChange = (newMonth:string) => {
        setCurrentMonth(newMonth);
    }

    useEffect(()=>{
        let incomeCount = 0;
        let expenseCount = 0;  

        for(let i in filteredList){
          if(Categories[filteredList[i].category].expense){
            expenseCount+= filteredList[i].value;
          }else{
            incomeCount+=filteredList[i].value;
          }

        }
        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredList]);
    const handleAddItem = (item:Item) => {
      let newList = [...list];
      newList.push(item);
      setList(newList);


    }

      return(
        <div>
        <C.Container>
          <C.Header>

            <C.HeaderText>Sistema Financeiro</C.HeaderText>

          </C.Header>

          <C.Body>

          
          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}  
          />
          <InputArea onAdd={handleAddItem}/>

          <TableArea list={filteredList }/>



          


          </C.Body>
            

        </C.Container>

        </div>
      );



}


export default App;