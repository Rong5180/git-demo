import React from 'react';

function Item(props) {
    const {list,deleteClick}=props
    console.log(1111);
    console.log(1111);
    console.log(1111);

    return (
        <div>
            {list.length&&list.map((v,index)=>{
               return <div key={v.id}>{v.id}--{v.con} <button onClick={()=>deleteClick(v.id)}>删除</button></div>
            })}
        </div>
    );
}

export default Item;