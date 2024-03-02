
function Block2(){

    return(
        <div id='wrapper' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '620px', backgroundColor: '#78DBE2'}}>
            <div id='wrap-text' style={{maxWidth: '450px'}}>
                <h2>Что мы предлагаем</h2>
                <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
            </div>
            <img id="img1" src={require('./image 1 (1).png')}></img>
        </div>
    )
}

export default Block2