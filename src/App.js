import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () =>{


  const [addItem,setAddItem] = useState([]);

  const addNote = (notes) =>{
 
      // alert('clicked!!!');


      setAddItem((preData) =>{

        return [...preData,notes];

      });

      // console.log(addItem);


    };


    const deleteItem = (idd) =>{


      setAddItem((preVal) =>{


        return preVal.filter((val,indxx) =>{

          return indxx !== idd;


        })

      });

    };


    return(


      <>

        <Header />
        <CreateNote passNote={addNote} />

        {

          addItem.map((val,indx) =>{

             return <Note title={val.title}
            content={val.content}
            key={indx}
            id={indx}
            removeItem={deleteItem}

            />



          })


        }


        
        <Footer />


      </>




    );



}

export default App;