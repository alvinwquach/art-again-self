function PieceOfArt(props){
    return(
        <div>
              <h2>{props.title}</h2>
              <img src={props.imagePath} alt={props.alt}/>
        </div>
    )
}

// on page load, initalize firebase
// store th data fro mthe firebase in state
   
    // App component

        // create state items to render data from firebase
        // initalize firebase to render data onto page

        // An input field that allows users to type in the name of the transaction(s)/filter they are looking for

        // An input field that allows users to filter by category

        // clear the input field by resetting the state to an empty string for name
        // clear the input field by resetting the state to an empty string for category

        // Create a table to save our transactions into four columns (date, expense, category, amount)

    // Expenses component
        
        // this maps through all of our data (date, exense, category, amount)
    
        // creating expense variable to view the data



export default PieceOfArt;