
function BlockHeader(){

    let buttons = [
        {id: 1, text: 'О нас'},
        {id: 2, text: 'Услуги'},
        {id: 3, text: 'Аренда'}
    ]

    return(
        <ul id=".ul-box-header" >
            {buttons.map((elem) => <li id="li-box-header" style = {{display: 'inline', float: 'center',  margin: '1em'}}
            key = {elem.id}
            text = {elem.text}>{elem.text}</li>)}
        </ul>
    )
}

export default BlockHeader