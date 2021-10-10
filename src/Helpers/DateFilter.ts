import { Item } from '../Types/Item'
export const getCurrentMonth = () => {


            let now = new Date();
            return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] =>{


            let newList: Item[] = [];
            let [year, month] = date.split('-');
            for (let i in list){
                if(
                    list[i].date.getFullYear() === parseInt(year) &&
                    (list[i].date.getMonth() + 1) === parseInt(month)

                ){
                newList.push(list[i]);

                }
            }
            return newList;

}


export const formateDate = ( date: Date): string =>{

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
       
            return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
        


    

}

export const addZeroToDate = (n: number): string  =>{
        if(n<10){
            return `0${n}`
        }else{
            return `${n}` ;    
        }

}

export const formateCurrentMonth = (currentMonth:string): string => {

    let [year, month] = currentMonth.split('-');
    let Months = ['Janeiro', 'Fevereiro', 'Março' , 'Abril', 'Maio' ,'Junho', 'Julho', 'Agosto', 'Setembro','Outubro','Novembro','Dezembro'];
    return `${Months[parseInt(month) - 1]} de ${year}`

}