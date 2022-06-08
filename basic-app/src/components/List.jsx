import ListItem from "./ListItem";

const List =(prop)=>{
 const {list}=prop;
    return (
        <div className="list">
        {
            list.map((listItem)=>(
                <ListItem listItem={listItem}/>
            ))
        }
        </div>
    )
}

export default List;