import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPclick=()=>{
        let newText = Text.toUpperCase();
        setText(newText);
        setcBtn('copy');
        setAct('Converted To Uppercase');

    }
    const handleLOclick=()=>{
        let newText = Text.toLowerCase();
        setText(newText);
        setcBtn('copy');
        setAct('Converted To Lowercase');

    }

    function titlecase(str){
        var splitstring = str.toLowerCase().split(' ');
        for (var i = 0; i < splitstring.length; i++ ){
            splitstring[i] = splitstring[i].charAt(0).toUpperCase() + splitstring[i].substring(1);
        }
        return splitstring.join(' ')
    }
    function primecase(str){
        var splitstring = str.split('.');
        for (var i = 0; i < splitstring.length; i++ ){
            splitstring[i] = splitstring[i].charAt(0).toUpperCase() + splitstring[i].substring(1);
        }
        return splitstring.join(' ')
    }
    const handleCapEachclick=()=>{
       let newText = titlecase(Text)
       setText(newText);
       setcBtn('copy');
       setAct('Capitalized Each Word');

    }
    const handleCapclick=()=>{
        let newText = primecase(Text)
        setText(newText);
        setcBtn('copy');
        setAct('Capitalized text');

    }
    const handleRPclick=()=>{
        const puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        const newText = Text.replace(puncs,'')
        setText(newText);
        setcBtn('copy');
        setAct('Removed Punctuation');

    }
    const handleCopyclick=()=>{ 
        navigator.clipboard.writeText(Text)
        setcBtn('copied');
        
    }
    
    const handleESRclick=()=>{ 
        var space= /[ ]+/;
        let newText = Text.split(space)
        setText(newText.join(' '));
        setAct('Removed Extra Spaces');
        
    }
    

    const handleChange=(event)=>{
        setText(event.target.value);
        setcBtn('copy');
        
    }
 
    const [Text, setText] = useState('');
    const [cBtn, setcBtn] = useState('copy');
    const [act, setAct] = useState("..");
    
    let col={
        color :'#07ffff'
    }
    let cursorp={
        
        color : 'white',
        cursor :'auto'
    }
   
 
    var array = Text.split(' ').filter((element)=>{ return element.length !== 0});


    
   
    return (
        <>
        <div className="container">
            <h2 className="mb-2"> {props.heading} </h2>
            <div className="mb-3 tac" style={{marginTop:'30px'}}>
                <textarea className="form-control tarea" value={Text} onChange={handleChange} id="mybox" rows="8" placeholder="Paste or Type your Text here">
                </textarea>
                <button className="btn btn-dark mx-1 cb" onClick={handleCopyclick}> {cBtn}</button>
                
                <button className='btn-danger LAct' style={cursorp}><strong> Recent Activity : </strong><span style={col}>{act}</span></button>

            </div>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleUPclick}> Convert to Uppercase</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleLOclick}> Convert to Lowercase</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleCapclick}> Capitalize Each Sentence</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleCapEachclick}> Capitalize Each Word</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleRPclick}> Remove Puntuation</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleESRclick}> Remove ExtraSpaces</button>
        </div>
        <div className="container my-3">
            <h2>Summary Of Your Text</h2>
            <p>{array.length} Words and {array.join(' ').length} Characters</p>
            <p>Average reading time {0.008 * array.length} Minutes</p>
            <h2 >Preview</h2>
            <div className='preview my-3'>
            <p>{Text}</p>
            </div>

        </div>
        </>
    )
}
