

function Block4(props){
    let {color, text} = props

    return (
        <div style={{backgroundColor: color, width: '420px', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column'}}>
            <p>{text}</p>
            
        </div>
    )
}

export default Block4
