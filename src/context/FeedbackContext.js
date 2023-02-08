import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const[feedback,setFeedback] = useState([
        {
            id: 1,
            text: 'This is rate item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is rate item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is rate item 3',
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item))
    }

    // sets item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

    const deleteFeedback = (id) => {
       // if(window.confirm('Are u sure deleting this?')){
        //  setFeedback(feedback.filter((item) => item.id !== id ))
        //}   
       setFeedback(feedback.filter((item) => item.id !== id));
     };

     
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext