import React , {useState , useEffect} from 'react'
import './style.css';

  // get the local storage data
  const getLocalData = () =>{
   const lists = localStorage.getItem("mytodolist");
   if(lists){
    return JSON.parse(lists);
   }else{
    return[];
   }
  }
  const Todo = () => {
  const[inputdata , setInputData] = useState("");
  const[items , setItems] = useState(getLocalData());
  const[isEditItem , setIsEditItem] = useState("");
  const[toggleButton , setToggleButton] = useState(false);
  //  add the items
  const addItem = () => {
    if(!inputdata) {
      alert("please fill the data");
    }else if (inputdata && toggleButton){
     setItems(
      items.map((currElem) =>{
        if(currElem.id === isEditItem){
          return{...currElem , name: inputdata};
        }
        return currElem;
      })
     )
     setInputData("");
     setIsEditItem([]);
     setToggleButton(false);
    } 
    
    else {
      const myNewInputData = {
        id : new Date().getTime().toString(),
        name : inputdata,
      }
      setItems([...items , myNewInputData]);
      setInputData("");
    }
  }
  //edit the items
  const editItem = (index) =>{
   const item_todo_edited = items.find((currElem) =>{
    return currElem.id === index;
   })
   setInputData(item_todo_edited.name);
   setIsEditItem(index);
   setToggleButton(true);
  }
  //  delete the items
  const deleteItem = (index) =>{
    const updatedItems = items.filter((currElem) =>{
      return currElem.id !== index;
    })
    setItems(updatedItems);
  }
  // remove the items
  const removeAll = () =>{ 
    setItems([]);
  }
  //  adding local storage
  useEffect(() =>{
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items])

  return (
    <>
    <div className="main-div">
        <div className="child-div">
     <figure>
        <img src="../images/todo.jpg"/>
        <figcaption>Add Your List Here✌ </figcaption>
     </figure>
     <div className="addItems">
     <input type="text" placeholder=" ✍ Add Item" className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value)}/>
       {toggleButton ? (
         <i className="far fa-edit add-btn" onClick ={addItem}></i>
       ):(
        <i className="fa fa-plus add-btn" onClick={addItem}></i>
       )}
     </div>
     {/* show all item */}
      <div className="showItems">
      {items.map((currElem) =>{ 
        return (
       <div className="eachItem" key = {currElem.id}>
        <h3>{currElem.name}</h3>
       <div claassName="todo-btn">
       <i className="far fa-edit add-btn" onClick ={() => editItem(currElem.id)}></i>
       <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currElem.id)}></i>
       </div>
       </div>
        )
       })}
      </div>
     {/* remove all item */}
      <div className="showItems">
        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
            <span>Check list</span>
        </button>
      </div>

        </div>
    </div>
    </>
  )
}

export default Todo




