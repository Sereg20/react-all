import React from "react";
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const UserFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort: sort})}
                options={[
                {value: 'name', name: 'Name'},
                {value: 'position', name: 'Position'}
                ]} 
                defaultOption='Сортировка по'/>

            <MyInput 
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder='Search'/>
        </div>
    )
}

export default UserFilter