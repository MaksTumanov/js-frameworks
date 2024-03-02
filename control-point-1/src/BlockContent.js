import Block4 from './Block4'

function BlockContent(){

    let data = [
        {id: 1, color: 'red', text: 'Годовое ТО'},
        {id: 2, color: 'blue', text: 'Выравнивание колёс'},
        {id: 3, color: 'green', text: 'Настройка переключателей'}
    ]

    return(
        <div className='block_content_center'>
            {data.map(elem => <Block4
                key = {elem.id}
                color = {elem.color}
                text = {elem.text}/>)}
        </div>
    )
}

export default BlockContent
