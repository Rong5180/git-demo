import React from 'react';

function Item(props) {
    const {list,deleteClick}=props
<<<<<<< HEAD
    console.log(333);
    console.log(333);
    console.log(333);
    console.log(807);
=======
>>>>>>> parent of 57b8c0b... ceshi

    return (
        <div>
            {list.length&&list.map((v,index)=>{
               return <div key={v.id}>{v.id}--{v.con} <button onClick={()=>deleteClick(v.id)}>删除</button></div>
            })}
        </div>
    );
}

export default Item;