import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{

    const [expand,setExpand] = useState(false);


    const [note,setNote] = useState({

        title: '',
        content: '',


    });

    const TitleInput = (event) =>{

        const nameTil = event.target.name;
        const valTil = event.target.value;

        // console.log(nameTil);
        // console.log(valTil);

        // const { nameTil , valTil } = event.target;

        setNote((preVal) =>{


            return {...preVal,
             [ nameTil ] : valTil, 
            
            };


        })

    }

    const addEvent = () => {

        props.passNote(note);
        setNote({


            title: '',
            content: '',


        });


    }

    const expandIt = () =>{


        setExpand(true);


    }

    const collapseIt = () =>{


        setExpand(false);


    }


    return(

        
      <>

        <div className="main_note" onDoubleClick={collapseIt}>

            <form>

                
                <input type="text"
                 placeholder="Title" 
                 autoComplete="off" 
                 name="title"
                 value={note.title}
                 onChange={TitleInput}
                 onClick={expandIt}  
                 
                 />

                
                {expand?
                <textarea rows=""
                 cols="" 
                 placeholder="Write a note...🗒"
                 name="content"
                 value={note.content}
                 onChange={TitleInput}  
                 >

                </textarea> : null}


                {expand?
                <Button onClick={addEvent} >

                    <AddIcon className="plus_sign" />

                </Button> : null}


            </form>



        </div>

      </>




    );



}

export default CreateNote;