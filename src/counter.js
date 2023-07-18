import { useEffect, useState } from "react";

const Counter = () => {
    const [counter , setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Counter(${counter})`;
    });

    return (

        
        <div className="containeer"><br /><br />

            <div className="card" style={{width: "25rem" ,textAlign : "center" , margin : "auto"}} >
                <img src="https://media.istockphoto.com/id/1134867308/vector/download-progress-bar-or-round-indicator-of-speed.jpg?s=612x612&w=0&k=20&c=mPx4rhLDjmbqJgZsfVIPFl9fpIrI4DGaEu3lpNadbg4=" className="card-img-top" alt="..."/>
                    <div className="card-body"><hr />
                        <h5 className="card-title"  style={{fontSize : "5rem" , fontWeight : 'bold'}} >{counter}</h5><hr />
                        
                        <a href="#" className="btn btn-primary btn-lg" onClick={()=>{setCounter(counter+1)}}>Increase</a>

                         &nbsp; <a href="#" className="btn btn-danger btn-lg" onClick={()=>{counter > 0 ? setCounter(counter-1) : setCounter(0)}}>Decrease</a>
                         &nbsp; <a href="#" className="btn btn-success btn-lg" onClick={()=>{setCounter(0)}}>Reset</a>
                    </div>
            </div>
        </div>
    )
}

export default Counter;