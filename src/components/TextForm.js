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
        var array = filteres(Text);
        console.log(array)
        
    }
 
    const [Text, setText] = useState('');
    const [cBtn, setcBtn] = useState('copy');
    const [act, setAct] = useState("..");
    
    let col={
        color :'#07ffff'
    }
    let cursorp={
        
        color : 'white',
        cursor :'#auto'
    }
    // const handleES=(Text)=>{ 
    //     var space= /[ ]+/;
    //     let newText = Text.split(space);
    //     if (newText.length==1){
    //         let filtText = newText.join('');
    //     }
    //     else{
    //         let filtText = newText.join(' ');
    //     }
        
    //     return filtText;
    // }
    // var filtText = handleES(Text);
    // var array = filtText.split(' ');
    const filteres=(ee)=>{
        let array1 = ee.split(' ');
        for(var i = 0; i < array1.length; i++){
            if (array1[i] ===""){
                array1.splice(i, 1);
            }
        }
        return array1
    }
    
   
    return (
        <>
        <div className="container">
            <h1 className="mb-2"> {props.heading} </h1>
            <div className="mb-3 tac">
                <textarea className="form-control tarea" value={Text} onChange={handleChange} id="mybox" rows="8" placeholder="Paste or Type your Text here">
                </textarea>
                <button className="btn btn-dark mx-1 cb" onClick={handleCopyclick}> {cBtn}</button>
                <button className='btn-danger LAct' style={cursorp}><strong> Recent Activity : </strong><span style={col}>{act}</span></button>

            </div>
            <button className="btn btn-outline-dark mx-1" onClick={handleUPclick}> Convert to Uppercase</button>
            <button className="btn btn-outline-dark mx-1" onClick={handleLOclick}> Convert to Lowercase</button>
            <button className="btn btn-outline-dark mx-1" onClick={handleCapclick}> Capitalize Each Sentence</button>
            <button className="btn btn-outline-dark mx-1" onClick={handleCapEachclick}> Capitalize Each Word</button>
            <button className="btn btn-outline-dark mx-1" onClick={handleRPclick}> Remove Puntuation</button>
            <button className="btn btn-outline-dark mx-1" onClick={handleESRclick}> Remove ExtraSpaces</button>
        </div>
        <div className="container my-3">
            <h2>Summary Of Your Text</h2>
            <p>{filteres(Text).length} Words and {Text.length} Characters</p>
            <p>Average reading time {0.008 * Text.split(" ").length} Minutes</p>
            <h2 >Preview</h2>
            <div className='preview my-3'>
            <p>{Text}</p>
            </div>

        </div>
        </>
    )
}
